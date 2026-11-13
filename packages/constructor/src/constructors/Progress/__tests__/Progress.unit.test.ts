// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { TextInclude } from '../../../classes/TextInclude'
import { Progress, type ProgressConstructors } from '../Progress'
import type { ProgressProps } from '../props'

/**
 * Inspectable subclass exposing DesignLogicAbstract protected members for unit testing.
 *
 * Подкласс для доступа к защищённым членам DesignLogicAbstract в модульных тестах.
 */
class InspectableProgress extends Progress {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof ProgressConstructors, unknown>> {
    return this.instances
  }

  /**
   * Returns active timer handle if scheduled.
   *
   * Возвращает дескриптор активного таймера, если он запланирован.
   * @returns timer handle or undefined / дескриптор таймера или undefined
   */
  get activeTimeout(): ReturnType<typeof setTimeout> | undefined {
    return this.timeout
  }

  /**
   * Simulates component mount lifecycle inside active scope.
   *
   * Симулирует жизненный цикл монтирования компонента внутри активной области.
   */
  triggerMounted(): void {
    this.isMounted.value = true
    this.scope?.run(() => {
      this.callLifecycle('onMounted')
      this.initConditions()
      this.onMounted?.()
    })
  }

  /**
   * Simulates component unmount lifecycle.
   *
   * Симулирует жизненный цикл размонтирования компонента.
   */
  triggerUnmounted(): void {
    this.isMounted.value = false
    this.callLifecycle('onUnmounted')
    this.onUnmounted?.()
  }

  /**
   * Manually executes switch method.
   *
   * Вручную выполняет метод switch.
   */
  triggerSwitch(): void {
    this.switch()
  }
}

afterEach(() => {
  vi.useRealTimers()
})

describe('Progress (isolated class)', () => {
  const naming = new DesignName('d1.progress')

  describe('Standard functional requirements (Happy path)', () => {
    it('should return div tag for linear/default progress and svg tag for circular', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const linear = new Progress({}, element, naming)
        expect(linear.tag).toBe('div')

        const circular = new Progress({ circular: true }, element, naming)
        expect(circular.tag).toBe('svg')
      })

      scope.stop()
    })

    it('should correctly calculate value, max, and valueInPercent for linear progress', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new Progress({ value: 40, max: 200 }, element, naming)

        expect(progress.value).toBe(40)
        expect(progress.max).toBe(200)
        expect(progress.isValue()).toBe(true)
        // 100 / 200 * 40 = 20%, linear is 100 - 20 = 80%
        expect(progress.valueInPercent).toBe('80%')
      })

      scope.stop()
    })

    it('should correctly calculate valueInPercent as raw percentage string for circular progress', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new Progress({ circular: true, value: 25, max: 100 }, element, naming)
        expect(progress.valueInPercent).toBe('25')
      })

      scope.stop()
    })

    it('should return null for valueInPercent when isValue is false', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new Progress({}, element, naming)
        expect(progress.isValue()).toBe(false)
        expect(progress.valueInPercent).toBeNull()
      })

      scope.stop()
    })

    it('should return role progressbar when isValue is true and status when false', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const determinate = new Progress({ value: 50 }, element, naming)
        expect(determinate.role).toBe('progressbar')

        const indeterminate = new Progress({}, element, naming)
        expect(indeterminate.role).toBe('status')
      })

      scope.stop()
    })

    it('should resolve label correctly for ariaLabel, indeterminate loading text, and determinate states', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        // Custom ariaLabel
        const custom = new Progress({ ariaLabel: 'Custom loader' }, element, naming)
        expect(custom.label).toBe('Custom loader')

        // Indeterminate with visible: true uses TextInclude.loading
        const visibleIndeterminate = new Progress({ visible: true }, element, naming)
        expect(visibleIndeterminate.label).toBeDefined()
        expect(typeof visibleIndeterminate.label).toBe('string')

        // Indeterminate with visible: false has undefined label
        const hiddenIndeterminate = new Progress({ visible: false }, element, naming)
        expect(hiddenIndeterminate.label).toBeUndefined()

        // Determinate without ariaLabel falls back to TextInclude.loading for accessible role="progressbar"
        const determinate = new Progress({ value: 10 }, element, naming)
        expect(determinate.label).toBeDefined()
        expect(typeof determinate.label).toBe('string')
      })

      scope.stop()
    })

    it('should generate comprehensive ARIA attributes including valueMinMax and fallback aria-label when value is present', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new Progress({ value: 30, max: 100 }, element, naming)

        expect(progress.aria).toEqual({
          'role': 'progressbar',
          'aria-label': progress.label,
          'aria-valuenow': 30,
          'aria-valuemin': 0,
          'aria-valuemax': 100
        })

        // Omitted max resolves defaultsProgress.max (100) consistently
        const progressWithDefaultMax = new Progress({ value: '45' }, element, naming)
        expect(progressWithDefaultMax.aria).toEqual({
          'role': 'progressbar',
          'aria-label': progressWithDefaultMax.label,
          'aria-valuenow': 45,
          'aria-valuemin': 0,
          'aria-valuemax': 100
        })
      })

      scope.stop()
    })

    it('should generate binds with conditional onAnimationend (only when hiding) and viewBox when circular', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const circular = new Progress({ circular: true, value: 50 }, element, naming)

        const bindsInitial = circular.binds
        expect(bindsInitial.viewBox).toBe('0 0 48 48')
        expect(bindsInitial.role).toBe('progressbar')
        expect(bindsInitial.onAnimationend).toBeUndefined()

        circular.hide.value = true
        expect(typeof circular.binds.onAnimationend).toBe('function')
      })

      scope.stop()
    })

    it('should generate classes and style tokens', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new Progress({ value: 50 }, element, naming)

        expect(progress.classes).toHaveProperty('d1-progress--value', true)
        expect(progress.styles).toHaveProperty('--d1-progress-sys-value', '50%')
      })

      scope.stop()
    })
  })

  describe('Client-Only and Mounting States (isRender)', () => {
    it('should support clientOnly true behavior: unrendered before mount, rendered after mount', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new InspectableProgress({ clientOnly: true }, element, naming)

        expect(progress.isMounted.value).toBe(false)
        expect(progress.isRender()).toBe(false)

        progress.triggerMounted()
        expect(progress.isMounted.value).toBe(true)
        expect(progress.isRender()).toBe(true)
      })

      scope.stop()
    })

    it('should allow immediate rendering when clientOnly is false even before mount', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new InspectableProgress({ clientOnly: false }, element, naming)

        expect(progress.isMounted.value).toBe(false)
        expect(progress.isRender()).toBe(true)
      })

      scope.stop()
    })

    it('should allow immediate rendering when isValue is true even before mount with clientOnly true', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new InspectableProgress({ clientOnly: true, value: 50 }, element, naming)

        expect(progress.isValue()).toBe(true)
        expect(progress.isRender()).toBe(true)
      })

      scope.stop()
    })
  })

  describe('Lifecycle, Timers, and Transitions', () => {
    it('should handle delayed visibility when delay is specified', () => {
      vi.useFakeTimers()
      const scope = effectScope()
      let progress!: InspectableProgress

      scope.run(() => {
        const element = ref<HTMLDivElement>()
        const props = reactive<ProgressProps>({
          visible: true,
          delay: 300,
          clientOnly: false
        })

        progress = new InspectableProgress(props, element, naming, undefined, undefined, undefined, undefined, false)
        progress.triggerMounted()
      })

      expect(progress.visible.value).toBe(false)
      expect(progress.activeTimeout).toBeDefined()

      vi.advanceTimersByTime(300)
      expect(progress.visible.value).toBe(true)
      expect(progress.hide.value).toBe(false)

      scope.stop()
    })

    it('should handle delayed hiding when visible becomes false and delayHide is specified', () => {
      vi.useFakeTimers()
      const scope = effectScope()
      let progress!: InspectableProgress

      scope.run(() => {
        const element = ref<HTMLDivElement>()
        const props = reactive<ProgressProps>({
          visible: false,
          delayHide: 150,
          clientOnly: false
        })

        progress = new InspectableProgress(props, element, naming, undefined, undefined, undefined, undefined, false)
        progress.visible.value = true // currently visible
        progress.triggerMounted()
      })

      expect(progress.activeTimeout).toBeDefined()
      vi.advanceTimersByTime(150)

      expect(progress.visible.value).toBe(false)
      expect(progress.hide.value).toBe(true)

      // Animation end removes hide
      progress.onAnimation({ animationName: 'progress-hidden' } as AnimationEvent)
      expect(progress.hide.value).toBe(false)

      scope.stop()
    })

    it('should clear active timeout on unmounted', () => {
      vi.useFakeTimers()
      const scope = effectScope()
      let progress!: InspectableProgress

      scope.run(() => {
        const element = ref<HTMLDivElement>()
        const props = reactive<ProgressProps>({
          visible: true,
          delay: 500,
          clientOnly: false
        })

        progress = new InspectableProgress(props, element, naming, undefined, undefined, undefined, undefined, false)
        progress.triggerMounted()
      })

      expect(progress.activeTimeout).toBeDefined()
      progress.triggerUnmounted()

      vi.advanceTimersByTime(500)
      // Timer was cleared, visible was not updated to true
      expect(progress.visible.value).toBe(false)

      scope.stop()
    })

    it('should reset visible and hide when isValue is true', () => {
      const scope = effectScope()
      let progress!: InspectableProgress

      scope.run(() => {
        const element = ref<HTMLDivElement>()
        const props = reactive<ProgressProps>({
          value: 70,
          clientOnly: false
        })

        progress = new InspectableProgress(props, element, naming, undefined, undefined, undefined, undefined, false)
        progress.visible.value = true
        progress.hide.value = true
        progress.triggerMounted()
      })

      expect(progress.visible.value).toBe(false)
      expect(progress.hide.value).toBe(false)

      scope.stop()
    })
  })

  describe('True Lazy Loading & Dependency Injection', () => {
    it('should NOT allocate text instance until accessed', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new InspectableProgress({}, element, naming)

        expect(progress.instantiatedItems.text).toBeUndefined()

        // Indeterminate with visible: false has undefined label, so text is still not instantiated
        expect(progress.label).toBeUndefined()
        expect(progress.instantiatedItems.text).toBeUndefined()

        // Accessing label on visible indeterminate triggers text instantiation
        const visibleProgress = new InspectableProgress({ visible: true }, element, naming)
        expect(visibleProgress.instantiatedItems.text).toBeUndefined()
        const label = visibleProgress.label
        expect(label).toBeDefined()
        expect(visibleProgress.instantiatedItems.text).toBeInstanceOf(TextInclude)
      })

      scope.stop()
    })

    it('should allow overriding sub-constructors via dependency injection', () => {
      class MockText extends TextInclude {
        override get loading(): string {
          return 'Custom Loading...'
        }
      }

      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new InspectableProgress(
          { visible: true },
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            text: MockText
          }
        )

        expect(progress.label).toBe('Custom Loading...')
        expect(progress.instantiatedItems.text).toBeInstanceOf(MockText)
      })

      scope.stop()
    })
  })

  describe('Boundary & Edge Cases', () => {
    it('should treat value = 0 and string "0" as determinate 0% progress, and negative numbers as indeterminate', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progressZero = new Progress({ value: 0 }, element, naming)

        expect(progressZero.isValue()).toBe(true)
        expect(progressZero.role).toBe('progressbar')
        expect(progressZero.valueInPercent).toBe('100%')
        expect(progressZero.aria).toEqual({
          'role': 'progressbar',
          'aria-label': progressZero.label,
          'aria-valuenow': 0,
          'aria-valuemin': 0,
          'aria-valuemax': 100
        })

        const progressStringZero = new Progress({ value: '0' }, element, naming)
        expect(progressStringZero.isValue()).toBe(true)
        expect(progressStringZero.aria).toEqual({
          'role': 'progressbar',
          'aria-label': progressStringZero.label,
          'aria-valuenow': 0,
          'aria-valuemin': 0,
          'aria-valuemax': 100
        })

        const progressNegative = new Progress({ value: -10 }, element, naming)
        expect(progressNegative.isValue()).toBe(false)
        expect(progressNegative.aria).toEqual({ role: 'status' })
      })

      scope.stop()
    })

    it('should clamp valueInPercent to [0, 100] and prevent division by zero when max <= 0', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const overflowLinear = new Progress({ value: 150, max: 100 }, element, naming)
        expect(overflowLinear.valueInPercent).toBe('0%')
        expect(overflowLinear.aria).toMatchObject({ 'aria-valuenow': 100, 'aria-valuemin': 0, 'aria-valuemax': 100 })

        const overflowCircular = new Progress({ circular: true, value: 150, max: 100 }, element, naming)
        expect(overflowCircular.valueInPercent).toBe('100')

        const zeroMaxLinear = new Progress({ value: 50, max: 0 }, element, naming)
        expect(zeroMaxLinear.valueInPercent).toBe('0%')
        expect(zeroMaxLinear.aria).toMatchObject({ 'aria-valuenow': 1, 'aria-valuemin': 0, 'aria-valuemax': 1 })

        const fractionalMax = new Progress({ value: 0.5, max: 0.5 }, element, naming)
        expect(fractionalMax.valueInPercent).toBe('0%')
        expect(fractionalMax.aria).toMatchObject({ 'aria-valuenow': 0.5, 'aria-valuemin': 0, 'aria-valuemax': 0.5 })

        const fractionalCircular = new Progress({ circular: true, value: 0.25, max: 0.5 }, element, naming)
        expect(fractionalCircular.valueInPercent).toBe('50')
        expect(fractionalCircular.aria).toMatchObject({ 'aria-valuenow': 0.25, 'aria-valuemin': 0, 'aria-valuemax': 0.5 })
      })

      scope.stop()
    })

    it('should handle numeric string inputs for value, max, and delays', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new Progress(
          { value: '50', max: '200', delay: '100', delayHide: '50' },
          element,
          naming
        )

        expect(progress.value).toBe(50)
        expect(progress.max).toBe(200)
        expect(progress.valueInPercent).toBe('75%')
      })

      scope.stop()
    })

    it('should ignore animation events that do not contain -hidden', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const progress = new Progress({}, element, naming)

        progress.hide.value = true
        progress.onAnimation({ animationName: 'progress-fade-in' } as AnimationEvent)
        expect(progress.hide.value).toBe(true)

        progress.onAnimation({ animationName: 'd1-progress-hidden' } as AnimationEvent)
        expect(progress.hide.value).toBe(false)
      })

      scope.stop()
    })
  })
})
