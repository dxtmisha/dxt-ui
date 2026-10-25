// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Arrow, type ArrowConstructors } from '../Arrow'
import { ArrowDirection } from '../basicTypes'
import type { ArrowProps } from '../props'

/**
 * Inspectable subclass exposing instances map and condition lifecycle triggers for test verification.
 *
 * Подкласс для проверки карты экземпляров зависимостей и вызовов условий.
 */
class InspectableArrow extends Arrow {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof ArrowConstructors, unknown>> {
    return this.instances
  }

  /**
   * Triggers reactive condition watchers for sub-constructors.
   *
   * Запускает реактивные наблюдатели условий для подконструкторов.
   */
  testInitConditions(): void {
    this.initConditions()
  }

  /**
   * Simulates component mount lifecycle.
   *
   * Симулирует жизненный цикл монтирования компонента.
   */
  triggerMounted(): void {
    this.isMounted.value = true
    this.callLifecycle('onMounted')
    this.initConditions()
  }

  /**
   * Simulates component unmount lifecycle.
   *
   * Симулирует жизненный цикл размонтирования компонента.
   */
  triggerUnmounted(): void {
    this.isMounted.value = false
    this.callLifecycle('onUnmounted')
  }
}

describe('Arrow', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should not instantiate any subordinate classes eagerly upon creation', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({})
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!

      expect(arrow).toBeDefined()
      expect(arrow.instantiatedItems.element).toBeUndefined()
      expect(arrow.instantiatedItems.elementTarget).toBeUndefined()
      expect(arrow.instantiatedItems.event).toBeUndefined()
      expect(arrow.instantiatedItems.parent).toBeUndefined()
      expect(arrow.instantiatedItems.position).toBeUndefined()

      scope.stop()
    })

    it('should track isMounted state through lifecycle triggers', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({})
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!

      expect(arrow.isMounted.value).toBe(false)
      arrow.triggerMounted()
      expect(arrow.isMounted.value).toBe(true)
      arrow.triggerUnmounted()
      expect(arrow.isMounted.value).toBe(false)

      scope.stop()
    })

    it('should resolve direction without instantiating position when position is static', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({ position: 'top' })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!

      expect(arrow.instantiatedItems.position).toBeUndefined()
      expect(arrow.direction).toBe(ArrowDirection.TOP)
      expect(arrow.instantiatedItems.position).toBeUndefined()

      arrow.update()
      expect(arrow.instantiatedItems.position).toBeDefined()

      scope.stop()
    })

    it('should lazily instantiate position when position is auto', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({ position: 'auto', elementTarget: '#target' })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!

      expect(arrow.instantiatedItems.position).toBeUndefined()
      expect(arrow.direction).toBe(ArrowDirection.HIDE)
      expect(arrow.instantiatedItems.position).toBeDefined()

      scope.stop()
    })

    it('should return ArrowDirection.HIDE if position prop is empty', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({ position: undefined })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!

      expect(arrow.direction).toBe(ArrowDirection.HIDE)

      scope.stop()
    })

    it('should calculate points according to direction and element dimensions', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({ position: 'bottom' })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!
      arrow.update()

      // Mock element dimensions
      vi.spyOn(arrow.i('element'), 'width', 'get').mockReturnValue(20)
      vi.spyOn(arrow.i('element'), 'height', 'get').mockReturnValue(10)

      expect(arrow.points).toBe('0, 0 10, 10 20, 0')

      props.position = 'left'
      arrow.update()
      expect(arrow.points).toBe('10, 0 0, 10 10, 20')

      props.position = 'right'
      arrow.update()
      expect(arrow.points).toBe('0, 0 10, 10 0, 20')

      props.position = 'top'
      arrow.update()
      expect(arrow.points).toBe('0, 10 10, 0 20, 10')

      scope.stop()
    })

    it('should provide aria and binds getters with aria-hidden', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({})
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!

      expect(arrow.aria).toEqual({ 'aria-hidden': 'true' })
      expect(arrow.binds).toEqual({ 'aria-hidden': 'true' })

      scope.stop()
    })

    it('should compute classes based on direction status class', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({ position: 'bottom' })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!
      arrow.update()

      expect(arrow.classes).toEqual({
        'd1-arrow--direction--bottom': true
      })

      scope.stop()
    })

    it('should assemble styles correctly with border and shift when target is present', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({ position: 'auto', elementTarget: '#target' })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!

      // Mock parent properties
      vi.spyOn(arrow.i('parent'), 'background', 'get').mockReturnValue('rgb(255, 0, 0)')
      vi.spyOn(arrow.i('parent'), 'borderWidth', 'get').mockReturnValue('1px')
      vi.spyOn(arrow.i('parent'), 'borderColor', 'get').mockReturnValue('rgb(0, 255, 0)')
      vi.spyOn(arrow.i('parent'), 'borderRadius', 'get').mockReturnValue('4px')
      vi.spyOn(arrow.i('parent'), 'isBorder').mockReturnValue(true)

      // Mock position clipPath and shift
      arrow.i('position').clipPath.value = 'path("M0,0 Z")'
      arrow.i('position').shift.value = '15px'
      vi.spyOn(arrow.i('elementTarget'), 'is').mockReturnValue(true)

      const styles = arrow.styles
      expect(styles['--d1-arrow-sys-background']).toBe('rgb(255, 0, 0)')
      expect(styles['--d1-arrow-sys-borderWidth']).toBe('1px')
      expect(styles['--d1-arrow-sys-borderColor']).toBe('rgb(0, 255, 0)')
      expect(styles['--d1-arrow-sys-borderRadius']).toBe('4px')
      expect(styles['--d1-arrow-sys-clipPath']).toBe('path("M0,0 Z")')
      expect(styles['--d1-arrow-sys-shift']).toBe('15px')

      scope.stop()
    })

    it('should not instantiate position or elementTarget when styles are computed without border or target', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({ position: 'bottom' })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!

      // Mock parent with no border
      vi.spyOn(arrow.i('parent'), 'isBorder').mockReturnValue(false)

      const styles = arrow.styles
      expect(styles['--d1-arrow-sys-clipPath']).toBeUndefined()
      expect(styles['--d1-arrow-sys-shift']).toBeUndefined()

      expect(arrow.instantiatedItems.position).toBeUndefined()
      expect(arrow.instantiatedItems.elementTarget).toBeUndefined()

      scope.stop()
    })

    it('should delegate update() to position.update()', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({})
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!
      const spyUpdate = vi.spyOn(arrow.i('position'), 'update')

      arrow.update()
      expect(spyUpdate).toHaveBeenCalledTimes(1)

      scope.stop()
    })

    it('should support dependency injection overrides', () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({})
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      class MockElementTarget {
        is(): boolean {
          return true
        }
      }

      const arrow = scope.run(() => new InspectableArrow(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        {
          elementTarget: MockElementTarget as any
        }
      ))!

      expect(arrow.i('elementTarget')).toBeInstanceOf(MockElementTarget)

      scope.stop()
    })

    it('should activate event conditionally when mounted and conditions match', async () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({ position: 'auto' })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!

      expect(arrow.instantiatedItems.event).toBeUndefined()
      arrow.triggerMounted()

      await nextTick()

      expect(arrow.instantiatedItems.event).toBeDefined()

      scope.stop()
    })

    it('should trigger position.onMounted when parent has border', async () => {
      const scope = effectScope()
      const props = reactive<ArrowProps>({ position: 'top' })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.arrow')

      const arrow = scope.run(() => new InspectableArrow(props, element, naming))!

      // Instantiate parent and mock border
      const parent = arrow.i('parent')
      vi.spyOn(parent, 'isBorder').mockReturnValue(true)

      // Mount
      arrow.triggerMounted()
      await nextTick()

      // Reading styles evaluates parent.isBorder and instantiates position
      expect(arrow.styles).toBeDefined()
      expect(arrow.instantiatedItems.position).toBeDefined()

      scope.stop()
    })
  })
})
