// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { LabelInclude } from '../../../classes/LabelInclude'
import { Button, type ButtonConstructors } from '../../Button'
import { IconTrailingInclude } from '../../Icon'
import { ProgressInclude } from '../../Progress'
import { RippleInclude } from '../../Ripple'
import { SkeletonInclude } from '../../Skeleton'
import { Chip } from '../Chip'
import { defaultsChip, type ChipPropsBasic } from '../props'

/**
 * Inspectable subclass of Chip exposing internal lazy-instantiated instances.
 *
 * Проверяемый подкласс Chip, предоставляющий доступ к внутренним лениво созданным экземплярам.
 */
class InspectableChip extends Chip {
  /**
   * Returns internal instances map for lazy-evaluation verification.
   *
   * Возвращает внутреннюю карту экземпляров для проверки ленивой инициализации.
   * @returns instantiated constructors map / карта созданных экземпляров конструкторов
   */
  get instantiatedItems(): Partial<Record<keyof ButtonConstructors, unknown>> {
    return this.instances
  }
}

describe('Chip (unit)', () => {
  const naming = new DesignName('d1.chip')
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Inheritance and standard functional requirements (Happy path)', () => {
    it('should extend Button and inherit DesignLogicAbstract orchestration', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: ChipPropsBasic = reactive({ ...defaultsChip })

      scope.run(() => {
        const chip = new Chip(props, element, naming)

        expect(chip).toBeInstanceOf(Chip)
        expect(chip).toBeInstanceOf(Button)
        expect(chip.tag).toBe('span')
        expect(chip.binds.type).toBeUndefined()
        expect(chip.aria.role).toBe('button')
        expect(chip.aria.tabindex).toBe('0')
        expect(chip.aria['aria-disabled']).toBeUndefined()
        expect(typeof chip.eventList.onClick).toBe('function')
        expect(typeof chip.eventList.onKeydown).toBe('function')
      })
    })

    it('should resolve default button tag when tag prop is omitted and resolve anchor for href or to', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: ChipPropsBasic = reactive({})

      scope.run(() => {
        const chip = new Chip(props, element, naming)

        expect(chip.tag).toBe('button')
        expect(chip.binds.type).toBe('button')
        expect(chip.eventList.onKeydown).toBeUndefined()

        props.href = 'https://example.com'
        expect(chip.tag).toBe('a')
        expect(chip.binds.href).toBe('https://example.com')
        expect(chip.binds.type).toBeUndefined()

        props.href = undefined
        props.to = '/filters'
        expect(chip.tag).toBe('a')
        expect(chip.binds.type).toBeUndefined()
      })
    })

    it('should prioritize explicit tag prop over href and support custom button type', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: ChipPropsBasic = reactive({
        href: 'https://example.com',
        tag: 'span'
      })

      scope.run(() => {
        const chip = new Chip(props, element, naming)

        expect(chip.tag).toBe('span')
        expect(chip.binds.type).toBeUndefined()

        props.tag = 'button'
        props.type = 'submit'
        expect(chip.tag).toBe('button')
        expect(chip.binds.type).toBe('submit')
      })
    })

    it('should preserve numeric 0 for data-value binding and support multilingual ariaLabel', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: ChipPropsBasic = reactive({
        ...defaultsChip,
        ariaLabel: 'Фильтр — Tiếng Việt 🚀',
        value: 0
      })

      scope.run(() => {
        const chip = new Chip(props, element, naming)

        expect(chip.binds['data-value']).toBe(0)
        expect(chip.aria['aria-label']).toBe('Фильтр — Tiếng Việt 🚀')
      })
    })
  })

  describe('Non-button accessibility, disabled states, and classes', () => {
    it('should update aria-disabled across disabled, readonly, and loading transitions on span tag', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: ChipPropsBasic = reactive({
        ...defaultsChip,
        disabled: true
      })

      scope.run(() => {
        const chip = new Chip(props, element, naming)

        expect(chip.aria['aria-disabled']).toBe('true')
        expect(chip.binds.disabled).toBe(true)

        props.disabled = false
        props.readonly = true
        expect(chip.aria['aria-disabled']).toBe('true')

        props.readonly = false
        props.loading = true
        expect(chip.aria['aria-disabled']).toBe('true')

        props.loading = false
        expect(chip.aria['aria-disabled']).toBeUndefined()
      })
    })

    it('should compute icon and skeleton status classes with chip BEM naming', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: ChipPropsBasic = reactive({
        ...defaultsChip,
        icon: 'star',
        iconTrailing: 'close',
        isSkeleton: true
      })

      scope.run(() => {
        const chip = new Chip(props, element, naming)

        expect(chip.classes['d1-chip--icon']).toBe(true)
        expect(chip.classes['d1-skeleton__background']).toBe(true)
        expect(chip.i('icon').iconBind.noPointerEvents).toBe(true)
        expect(chip.i('icon').trailingBind.noPointerEvents).toBeUndefined()

        props.disabled = true
        expect(chip.i('icon').iconBind.disabled).toBe(true)
        expect(chip.i('icon').trailingBind.disabled).toBe(true)
      })
    })
  })

  describe('Lazy loading, instance isolation, and Dependency Injection', () => {
    it('should not instantiate any subordinate helpers eagerly on construction', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: ChipPropsBasic = reactive({ ...defaultsChip })

      scope.run(() => {
        const chip = new InspectableChip(props, element, naming)

        expect(Object.keys(chip.instantiatedItems)).toHaveLength(0)
        expect(chip.hasInstance('icon')).toBe(false)
        expect(chip.hasInstance('label')).toBe(false)
        expect(chip.hasInstance('progress')).toBe(false)
        expect(chip.hasInstance('ripple')).toBe(false)
        expect(chip.hasInstance('skeleton')).toBe(false)
      })
    })

    it('should preserve lazy guards when optional features are inactive', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: ChipPropsBasic = reactive({
        ...defaultsChip,
        isSkeleton: false,
        loading: false
      })

      scope.run(() => {
        const chip = new InspectableChip(props, element, naming)

        expect(chip.classes['d1-chip--icon']).toBe(false)
        expect(chip.aria['aria-disabled']).toBeUndefined()
        expect(chip.hasInstance('icon')).toBe(false)
        expect(chip.hasInstance('progress')).toBe(false)
        expect(chip.hasInstance('skeleton')).toBe(false)
        expect(chip.hasInstance('label')).toBe(false)
        expect(chip.hasInstance('ripple')).toBe(false)

        expect(IconTrailingInclude.is(props)).toBe(false)
        expect(LabelInclude.is(props)).toBe(false)
        expect(ProgressInclude.is(props)).toBe(false)
        expect(RippleInclude.is(props)).toBe(true)
        expect(SkeletonInclude.is(props)).toBe(false)
      })
    })

    it('should support Dependency Injection overrides via constructors parameter', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: ChipPropsBasic = reactive({ ...defaultsChip })
      let customProgressRendered = false

      class CustomProgress {
        readonly aria = ref({})
        render() {
          customProgressRendered = true
          return []
        }
      }

      scope.run(() => {
        const chip = new Chip(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            progress: CustomProgress as unknown as typeof ProgressInclude
          }
        )

        expect(chip.i('progress').render()).toEqual([])
        expect(customProgressRendered).toBe(true)
      })
    })

    it('should isolate state across separate Chip instances', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const elementFirst = ref<HTMLDivElement>()
      const elementSecond = ref<HTMLDivElement>()
      const propsFirst: ChipPropsBasic = reactive({ ...defaultsChip, icon: 'check', value: 'first' })
      const propsSecond: ChipPropsBasic = reactive({ ...defaultsChip, disabled: true, value: 'second' })

      scope.run(() => {
        const firstChip = new InspectableChip(propsFirst, elementFirst, naming)
        const secondChip = new InspectableChip(propsSecond, elementSecond, naming)

        expect(firstChip.classes['d1-chip--icon']).toBe(true)
        expect(secondChip.classes['d1-chip--icon']).toBe(false)
        expect(firstChip.hasInstance('icon')).toBe(true)
        expect(secondChip.hasInstance('icon')).toBe(false)
        expect(firstChip.binds['data-value']).toBe('first')
        expect(secondChip.binds['data-value']).toBe('second')
      })
    })
  })

  describe('Click and keyboard event handling', () => {
    it('should emit click and clickLite when enabled and suppress when disabled, readonly, or loading', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: ChipPropsBasic = reactive({
        ...defaultsChip,
        value: 'tag-selected'
      })
      const emitSpy = vi.fn()

      scope.run(() => {
        const chip = new Chip(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitSpy
        )

        const clickEvent = new MouseEvent('click')
        chip.eventList.onClick(clickEvent)

        expect(emitSpy).toHaveBeenCalledTimes(2)
        expect(emitSpy).toHaveBeenNthCalledWith(1, 'click', clickEvent, {
          detail: undefined,
          type: 'click',
          value: 'tag-selected'
        })
        expect(emitSpy).toHaveBeenNthCalledWith(2, 'clickLite', {
          detail: undefined,
          type: 'click',
          value: 'tag-selected'
        })

        emitSpy.mockClear()
        props.disabled = true
        chip.eventList.onClick(new MouseEvent('click'))
        expect(emitSpy).not.toHaveBeenCalled()

        props.disabled = false
        props.readonly = true
        chip.eventList.onClick(new MouseEvent('click'))
        expect(emitSpy).not.toHaveBeenCalled()

        props.readonly = false
        props.loading = true
        chip.eventList.onClick(new MouseEvent('click'))
        expect(emitSpy).not.toHaveBeenCalled()
      })
    })

    it('should handle keyboard Enter activation and ignore IME composition keydown events', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: ChipPropsBasic = reactive({
        ...defaultsChip,
        value: 'chip-key'
      })
      const emitSpy = vi.fn()

      scope.run(() => {
        const chip = new Chip(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitSpy
        )

        chip.eventList.onKeydown?.(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true }))
        expect(emitSpy).not.toHaveBeenCalled()

        chip.eventList.onKeydown?.(new KeyboardEvent('keydown', { key: 'Enter' }))
        expect(emitSpy).toHaveBeenCalledTimes(2)
      })
    })
  })
})
