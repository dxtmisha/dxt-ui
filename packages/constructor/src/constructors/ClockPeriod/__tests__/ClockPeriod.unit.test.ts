// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { EnabledInclude } from '../../../classes/EnabledInclude'
import { ModelInclude } from '../../../classes/ModelInclude'
import { ClockPeriod, type ClockPeriodConstructors } from '../ClockPeriod'
import { ClockPeriodEvent } from '../ClockPeriodEvent'
import { ClockPeriodValue } from '../ClockPeriodValue'
import { ClockPeriodType } from '../basicTypes'
import type { ClockPeriodProps } from '../props'

describe('ClockPeriod (isolated orchestrator)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).forEach(cleanup => cleanup())
    vi.restoreAllMocks()
  })

  const createOrchestrator = (
    initialProps: ClockPeriodProps = {},
    constructors?: Partial<ClockPeriodConstructors>
  ) => {
    const scope = effectScope()
    const props = reactive<ClockPeriodProps>({ ...initialProps })
    const element = ref<HTMLDivElement | undefined>()
    const naming = new DesignName('d1.clockPeriod')
    const emits = vi.fn()
    const instance = scope.run(() => new ClockPeriod(
      props,
      element,
      naming,
      undefined,
      undefined,
      emits,
      constructors
    ))

    cleanups.push(() => scope.stop())

    if (!instance) {
      throw new Error('ClockPeriod orchestrator failed to initialize')
    }

    return { props, element, naming, emits, instance }
  }

  describe('Lazy instantiation', () => {
    it('should keep all subordinate dependencies unallocated until explicitly accessed', () => {
      const { instance } = createOrchestrator()

      expect(instance.hasInstance('enabled')).toBe(false)
      expect(instance.hasInstance('event')).toBe(false)
      expect(instance.hasInstance('eventClick')).toBe(false)
      expect(instance.hasInstance('model')).toBe(false)
      expect(instance.hasInstance('text')).toBe(false)
      expect(instance.hasInstance('value')).toBe(false)

      // Reading binds initializes enabled for aria/tabindex, but keeps event, eventClick, model, text, and value lazy
      const binds = instance.binds
      expect(binds.role).toBe('radiogroup')
      expect(instance.hasInstance('enabled')).toBe(true)
      expect(instance.hasInstance('event')).toBe(false)
      expect(instance.hasInstance('eventClick')).toBe(false)
      expect(instance.hasInstance('model')).toBe(false)
      expect(instance.hasInstance('text')).toBe(false)
      expect(instance.hasInstance('value')).toBe(false)
    })

    it('should lazily instantiate event, eventClick, value, and model only upon interaction', () => {
      const { instance, emits } = createOrchestrator({ value: ClockPeriodType.am })
      const button = document.createElement('button')
      button.dataset.value = ClockPeriodType.pm

      instance.onClick({
        currentTarget: button,
        target: button,
        stopPropagation: vi.fn()
      } as unknown as MouseEvent)

      expect(instance.hasInstance('event')).toBe(true)
      expect(instance.hasInstance('eventClick')).toBe(true)
      expect(instance.hasInstance('value')).toBe(true)
      expect(instance.hasInstance('model')).toBe(true)
      expect(emits).toHaveBeenCalledWith('update:value', ClockPeriodType.pm)
      expect(emits).toHaveBeenCalledWith('update:modelValue', ClockPeriodType.pm)
      expect(emits).toHaveBeenCalledWith('clickLite', {
        type: 'item',
        value: ClockPeriodType.pm,
        detail: undefined
      })
    })
  })

  describe('ARIA, binds, and tabindex getters', () => {
    it('should compute radiogroup ARIA attributes, orientation default, and tabindex for enabled, disabled, and readonly states', () => {
      const { props, instance } = createOrchestrator()

      expect(instance.aria).toEqual({
        'role': 'radiogroup',
        'aria-orientation': 'vertical'
      })
      expect(instance.tabindex).toBe(0)
      expect(instance.binds).toMatchObject({
        'tabindex': 0,
        'role': 'radiogroup',
        'aria-orientation': 'vertical',
        'onKeydown': instance.onKeydown
      })

      props.orientation = 'horizontal'
      expect(instance.aria['aria-orientation']).toBe('horizontal')

      props.readonly = true
      expect(instance.tabindex).toBe(-1)
      expect(instance.aria).toEqual({
        'role': 'radiogroup',
        'aria-orientation': 'horizontal',
        'aria-readonly': 'true',
        'aria-disabled': 'true'
      })

      props.readonly = false
      props.disabled = true
      expect(instance.tabindex).toBe(-1)
      expect(instance.aria).toEqual({
        'role': 'radiogroup',
        'aria-orientation': 'horizontal',
        'aria-disabled': 'true'
      })
    })

    it('should compute radio item ARIA attributes for AM and PM', () => {
      const { instance } = createOrchestrator({ value: ClockPeriodType.pm })

      expect(instance.getItemAria(ClockPeriodType.am)).toEqual({
        'role': 'radio',
        'aria-checked': 'false'
      })
      expect(instance.getItemAria(ClockPeriodType.pm)).toEqual({
        'role': 'radio',
        'aria-checked': 'true'
      })
    })
  })

  describe('Keyboard delegation, DI overrides, and lifecycle coordination', () => {
    it('should delegate onKeydown lazily to ClockPeriodEvent', () => {
      const { instance, emits } = createOrchestrator({ value: ClockPeriodType.am })
      const preventDefault = vi.fn()

      instance.onKeydown({ key: 'ArrowDown', preventDefault } as unknown as KeyboardEvent)

      expect(preventDefault).toHaveBeenCalledTimes(1)
      expect(instance.i('value').get()).toBe(ClockPeriodType.pm)
      expect(emits).toHaveBeenCalledWith('update:modelValue', ClockPeriodType.pm)
    })

    it('should accept custom constructors via Dependency Injection', () => {
      const customOnClick = vi.fn()

      class CustomEnabled extends EnabledInclude {}
      class CustomModel extends ModelInclude<ClockPeriodType> {}
      class CustomValue extends ClockPeriodValue {}
      class CustomEvent extends ClockPeriodEvent {
        override readonly onClick = customOnClick
      }

      const { instance } = createOrchestrator({}, {
        enabled: CustomEnabled,
        event: CustomEvent,
        model: CustomModel,
        value: CustomValue
      })

      expect(instance.i('enabled')).toBeInstanceOf(CustomEnabled)
      expect(instance.i('model')).toBeInstanceOf(CustomModel)
      expect(instance.i('value')).toBeInstanceOf(CustomValue)
      expect(instance.i('event')).toBeInstanceOf(CustomEvent)

      instance.onClick({ stopPropagation: vi.fn() } as unknown as MouseEvent)
      expect(customOnClick).toHaveBeenCalledTimes(1)
    })

    it('should synchronize reactive props via DesignLogicAbstract lifecycle hooks when mounted and clean up on unmount', async () => {
      const props = reactive<ClockPeriodProps>({ value: ClockPeriodType.am })
      let orchestrator: ClockPeriod | undefined

      const Host = defineComponent({
        setup() {
          orchestrator = new ClockPeriod(
            props,
            ref<HTMLDivElement | undefined>(),
            new DesignName('d1.clockPeriod')
          )
          orchestrator.i('value')
          return () => null
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(orchestrator?.i('value').get()).toBe(ClockPeriodType.am)

      props.value = ClockPeriodType.pm
      await nextTick()
      expect(orchestrator?.i('value').get()).toBe(ClockPeriodType.pm)

      app.unmount()
      cleanups.pop()

      props.value = ClockPeriodType.am
      await nextTick()
      expect(orchestrator?.i('value').get()).toBe(ClockPeriodType.pm)
    })
  })
})
