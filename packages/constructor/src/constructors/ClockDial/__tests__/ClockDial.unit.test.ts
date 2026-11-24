// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'

import { ClockDial } from '../ClockDial'
import { ClockDialEvent } from '../ClockDialEvent'
import type { ClockDialProps } from '../props'
import type { ClockDialEmits } from '../types'

describe('ClockDial (Orchestrator Unit)', () => {
  const scopes: Array<ReturnType<typeof effectScope>> = []

  afterEach(() => {
    scopes.splice(0).forEach(scope => scope.stop())
  })

  const createOrchestrator = (
    initialProps: ClockDialProps = { type: '12' },
    emitsSpy = vi.fn()
  ) => {
    const scope = effectScope()
    scopes.push(scope)

    const props = reactive<ClockDialProps>({ ...initialProps })
    const element = ref<HTMLDivElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.clockDial')
    const emits = emitsSpy as unknown as ConstrEmit<ClockDialEmits>

    let instance!: ClockDial

    scope.run(() => {
      instance = new ClockDial(props, element, naming, undefined, undefined, emits)
    })

    return { instance, props, element, naming, emitsSpy, scope }
  }

  describe('Lazy instantiation and canCreate guards', () => {
    it('creates zero subordinate helpers on construction before any property is read', () => {
      const { instance } = createOrchestrator({ type: '12', value: 4 })

      expect(instance.hasInstance('arrows')).toBe(false)
      expect(instance.hasInstance('control')).toBe(false)
      expect(instance.hasInstance('emit')).toBe(false)
      expect(instance.hasInstance('enabled')).toBe(false)
      expect(instance.hasInstance('event')).toBe(false)
      expect(instance.hasInstance('list')).toBe(false)
      expect(instance.hasInstance('model')).toBe(false)
      expect(instance.hasInstance('select')).toBe(false)
      expect(instance.hasInstance('value')).toBe(false)
    })

    it('keeps event, control, emit, arrows, and select unallocated when reading binds and classes', () => {
      const { instance } = createOrchestrator({ type: '12', value: 4, min: 1, max: 12 })

      const binds = instance.binds
      const classes = instance.classes

      expect(binds.role).toBe('slider')
      expect(binds['aria-valuenow']).toBe(4)
      expect(binds.tabindex).toBe(0)
      expect(typeof binds.onKeydown).toBe('function')
      expect(classes['d1-clockDial--selected']).toBe(true)

      expect(instance.hasInstance('event')).toBe(false)
      expect(instance.hasInstance('control')).toBe(false)
      expect(instance.hasInstance('emit')).toBe(false)
      expect(instance.hasInstance('arrows')).toBe(false)
      expect(instance.hasInstance('select')).toBe(false)
    })

    it('blocks event and select instantiation via canCreate in clock mode', () => {
      const { instance } = createOrchestrator({ type: '24', clock: true, hour: 14, minute: 30 })

      expect(instance.binds.role).toBe('timer')
      expect(instance.binds.tabindex).toBeUndefined()
      expect(instance.binds.onKeydown).toBeUndefined()
      expect(instance.classes['d1-clockDial--section']).toBe(false)
      expect(instance.classes['d1-clockDial--selected']).toBe(false)

      instance.onKeydown({ key: 'ArrowRight', preventDefault: vi.fn() } as unknown as KeyboardEvent)
      instance.onClick({ target: document.createElement('span') } as unknown as MouseEvent)
      instance.onStart({ button: 0, clientX: 0, clientY: 0, preventDefault: vi.fn() } as unknown as MouseEvent)
      const selectResult = instance.callInstance('select', item => item.selectByCoordinates(10, 10), null)

      expect(selectResult).toBeNull()
      expect(instance.hasInstance('event')).toBe(false)
      expect(instance.hasInstance('select')).toBe(false)
      expect(instance.hasInstance('control')).toBe(false)
      expect(instance.hasInstance('emit')).toBe(false)
    })
  })

  describe('ARIA, binds, classes, and tabindex getters', () => {
    it('computes slider ARIA, readonly/disabled states, and tabindex accurately', () => {
      const { instance, props } = createOrchestrator({ type: '12', value: 5, min: 1, max: 12 })

      expect(instance.aria).toEqual({
        'role': 'slider',
        'aria-valuenow': 5,
        'aria-valuemin': 1,
        'aria-valuemax': 12
      })
      expect(instance.tabindex).toBe(0)

      props.readonly = true
      expect(instance.aria['aria-readonly']).toBe('true')
      expect(instance.aria['aria-disabled']).toBe('true')
      expect(instance.tabindex).toBe(-1)

      props.readonly = false
      props.disabled = true
      expect(instance.aria['aria-disabled']).toBe('true')
      expect(instance.aria['aria-readonly']).toBeUndefined()
      expect(instance.tabindex).toBe(-1)
    })

    it('computes section class only when value is actively selected in 24-hour inner ring', async () => {
      const { instance, props } = createOrchestrator({ type: '24' })

      expect(instance.classes['d1-clockDial--selected']).toBe(false)
      expect(instance.classes['d1-clockDial--section']).toBe(false)

      props.value = 14
      await nextTick()
      expect(instance.classes['d1-clockDial--selected']).toBe(true)
      expect(instance.classes['d1-clockDial--section']).toBe(true)

      props.value = 5
      await nextTick()
      expect(instance.classes['d1-clockDial--selected']).toBe(true)
      expect(instance.classes['d1-clockDial--section']).toBe(false)

      props.value = 0
      await nextTick()
      expect(instance.classes['d1-clockDial--selected']).toBe(true)
      expect(instance.classes['d1-clockDial--section']).toBe(true)
    })
  })

  describe('Dependency Injection and delegated interaction', () => {
    it('supports custom constructor override via constructors map', () => {
      const scope = effectScope()
      scopes.push(scope)

      const customOnKeydown = vi.fn()

      class CustomEvent extends ClockDialEvent {
        override readonly onKeydown = customOnKeydown
      }

      let instance!: ClockDial
      scope.run(() => {
        instance = new ClockDial(
          reactive<ClockDialProps>({ type: '12', value: 3 }),
          ref<HTMLDivElement | undefined>(),
          new DesignName('d1.clockDial'),
          undefined,
          undefined,
          undefined,
          { event: CustomEvent }
        )
      })

      expect(instance.hasInstance('event')).toBe(false)

      const keyboardEvent = { key: 'ArrowRight', preventDefault: vi.fn() } as unknown as KeyboardEvent
      instance.onKeydown(keyboardEvent)

      expect(instance.hasInstance('event')).toBe(true)
      expect(customOnKeydown).toHaveBeenCalledWith(keyboardEvent)
    })
  })
})
