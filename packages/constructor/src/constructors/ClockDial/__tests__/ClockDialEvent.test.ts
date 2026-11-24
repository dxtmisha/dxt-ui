// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'

import { EnabledInclude } from '../../../classes/EnabledInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import type { ClockDialMarkItem } from '../basicTypes'
import { ClockDialControl } from '../ClockDialControl'
import { ClockDialEmit } from '../ClockDialEmit'
import { ClockDialEvent } from '../ClockDialEvent'
import { ClockDialList } from '../ClockDialList'
import { ClockDialSelect } from '../ClockDialSelect'
import { ClockDialValue } from '../ClockDialValue'
import type { ClockDialProps } from '../props'
import type { ClockDialEmits } from '../types'

describe('ClockDialEvent', () => {
  const activeEventManagers: ClockDialEvent[] = []

  afterEach(() => {
    activeEventManagers.splice(0).forEach(manager => manager.onUnmounted())
  })

  const createClockDialEvent = (
    props: ClockDialProps = { type: '12' },
    initialValue: number = 2
  ) => {
    const emitsSpy = vi.fn()
    const emits = emitsSpy as unknown as ConstrEmit<ClockDialEmits>
    const enabled = new EnabledInclude(props)
    const list = new ClockDialList(props, new DesignName('d.clock-dial'))
    const model = new ModelValueInclude<number>('value', emits, undefined, ref(initialValue))
    const select = new ClockDialSelect(props, () => enabled, () => list, () => model)
    const valueItem = new ClockDialValue(props, () => model)
    const emitsItem = new ClockDialEmit(props, () => list, () => valueItem, emits)
    const control = new ClockDialControl(
      props,
      () => emitsItem,
      () => enabled,
      () => list,
      () => valueItem
    )
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const eventManager = new ClockDialEvent(
      props,
      element,
      () => control,
      () => emitsItem,
      () => enabled,
      () => list,
      () => model,
      () => select
    )

    activeEventManagers.push(eventManager)

    return { eventManager, model, select, control, emitsSpy, enabled, element, list }
  }

  describe('Static predicate', () => {
    it('evaluates ClockDialEvent.is based on clock prop', () => {
      expect(ClockDialEvent.is()).toBe(true)
      expect(ClockDialEvent.is({ clock: false })).toBe(true)
      expect(ClockDialEvent.is({ clock: true })).toBe(false)
    })
  })

  describe('Click handling (onClick)', () => {
    it('updates value, focuses root element, and emits input/change for valid enabled mark', () => {
      const { eventManager, model, emitsSpy, element } = createClockDialEvent()
      const focusSpy = vi.spyOn(element.value!, 'focus')
      const targetElement = document.createElement('span')
      targetElement.dataset.value = '7'

      eventManager.onClick({ target: targetElement } as unknown as MouseEvent)

      expect(focusSpy).toHaveBeenCalledTimes(1)
      expect(model.get()).toBe(7)
      expect(emitsSpy).toHaveBeenCalledWith('input', expect.anything(), 7)
      expect(emitsSpy).toHaveBeenCalledWith('change', expect.anything(), 7)
    })

    it('rejects empty data-value, NaN, out-of-range, disabled marks, disabled prop, and clock mode', () => {
      const { eventManager, model, emitsSpy } = createClockDialEvent({ type: '12', min: 3, max: 10 }, 5)

      const emptyTarget = document.createElement('span')
      emptyTarget.dataset.value = ''
      eventManager.onClick({ target: emptyTarget } as unknown as MouseEvent)

      const disabledMarkTarget = document.createElement('span')
      disabledMarkTarget.dataset.value = '1'
      eventManager.onClick({ target: disabledMarkTarget } as unknown as MouseEvent)

      const invalidTarget = document.createElement('span')
      invalidTarget.dataset.value = 'abc'
      eventManager.onClick({ target: invalidTarget } as unknown as MouseEvent)

      expect(model.get()).toBe(5)
      expect(emitsSpy).not.toHaveBeenCalled()

      const disabledClock = createClockDialEvent({ type: '12', disabled: true }, 2)
      const validTarget = document.createElement('span')
      validTarget.dataset.value = '7'
      disabledClock.eventManager.onClick({ target: validTarget } as unknown as MouseEvent)
      expect(disabledClock.model.get()).toBe(2)
      expect(disabledClock.emitsSpy).not.toHaveBeenCalled()

      const displayClock = createClockDialEvent({ type: '12', clock: true }, 2)
      displayClock.eventManager.onClick({ target: validTarget } as unknown as MouseEvent)
      expect(displayClock.model.get()).toBe(2)
    })
  })

  describe('Keyboard navigation and IME composition guard (onKeydown)', () => {
    it('handles ArrowRight, ArrowUp, ArrowLeft, ArrowDown, Home, and End', () => {
      const { eventManager, model } = createClockDialEvent({ type: '12' }, 2)
      const preventDefault = vi.fn()

      eventManager.onKeydown({ key: 'ArrowRight', preventDefault } as unknown as KeyboardEvent)
      expect(model.get()).toBe(3)

      eventManager.onKeydown({ key: 'ArrowUp', preventDefault } as unknown as KeyboardEvent)
      expect(model.get()).toBe(4)

      eventManager.onKeydown({ key: 'ArrowLeft', preventDefault } as unknown as KeyboardEvent)
      expect(model.get()).toBe(3)

      eventManager.onKeydown({ key: 'ArrowDown', preventDefault } as unknown as KeyboardEvent)
      expect(model.get()).toBe(2)

      eventManager.onKeydown({ key: 'Home', preventDefault } as unknown as KeyboardEvent)
      expect(model.get()).toBe(1)

      eventManager.onKeydown({ key: 'End', preventDefault } as unknown as KeyboardEvent)
      expect(model.get()).toBe(12)

      expect(preventDefault).toHaveBeenCalledTimes(6)
    })

    it('ignores keydown events during IME composition (isComposing: true)', () => {
      const { eventManager, model } = createClockDialEvent({ type: '12' }, 2)
      const preventDefault = vi.fn()

      eventManager.onKeydown({
        key: 'ArrowRight',
        isComposing: true,
        preventDefault
      } as unknown as KeyboardEvent)

      expect(preventDefault).not.toHaveBeenCalled()
      expect(model.get()).toBe(2)
    })

    it('ignores unrelated keys, disabled state, and clock mode', () => {
      const { eventManager, model } = createClockDialEvent({ type: '12' }, 2)
      const preventDefault = vi.fn()

      eventManager.onKeydown({ key: 'Tab', preventDefault } as unknown as KeyboardEvent)
      expect(preventDefault).not.toHaveBeenCalled()
      expect(model.get()).toBe(2)

      const clockCase = createClockDialEvent({ type: '12', clock: true }, 2)
      clockCase.eventManager.onKeydown({ key: 'ArrowRight', preventDefault } as unknown as KeyboardEvent)
      expect(clockCase.model.get()).toBe(2)
    })
  })

  describe('Drag tracking, gesture cancellation, and unmount cleanup (onStart)', () => {
    const sampleMark: ClockDialMarkItem = {
      name: '05',
      rotate: '150deg',
      section: false,
      style: {},
      value: 5,
      disabled: false
    }

    it('tracks pointer move during drag and emits change on mouseup', () => {
      const { eventManager, select, emitsSpy } = createClockDialEvent()
      const removeListenerSpy = vi.spyOn(window, 'removeEventListener')
      vi.spyOn(select, 'selectByCoordinates').mockReturnValue(sampleMark)

      const preventDefault = vi.fn()
      eventManager.onStart({
        button: 0,
        clientX: 100,
        clientY: 100,
        preventDefault
      } as unknown as MouseEvent)

      expect(preventDefault).toHaveBeenCalledTimes(1)
      expect(select.selectByCoordinates).toHaveBeenCalledWith(100, 100)
      expect(emitsSpy).toHaveBeenCalledWith('input', expect.anything(), 2)

      window.dispatchEvent(new MouseEvent('mousemove', { clientX: 120, clientY: 120 }))
      expect(select.selectByCoordinates).toHaveBeenCalledWith(120, 120)

      window.dispatchEvent(new MouseEvent('mouseup'))
      expect(emitsSpy).toHaveBeenCalledWith('change', expect.anything(), 2)
      expect(removeListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
      expect(removeListenerSpy).toHaveBeenCalledWith('pointercancel', expect.any(Function))
      expect(removeListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function))
    })

    it('cleans up active drag state on pointercancel and window blur', () => {
      const firstCase = createClockDialEvent()
      vi.spyOn(firstCase.select, 'selectByCoordinates').mockReturnValue(sampleMark)

      firstCase.eventManager.onStart({
        button: 0,
        clientX: 50,
        clientY: 50,
        preventDefault: vi.fn()
      } as unknown as MouseEvent)

      window.dispatchEvent(new Event('pointercancel'))
      expect(firstCase.emitsSpy).toHaveBeenCalledWith('change', expect.anything(), 2)

      const moveCallsBefore = vi.mocked(firstCase.select.selectByCoordinates).mock.calls.length
      window.dispatchEvent(new MouseEvent('mousemove', { clientX: 90, clientY: 90 }))
      expect(vi.mocked(firstCase.select.selectByCoordinates).mock.calls.length).toBe(moveCallsBefore)

      const secondCase = createClockDialEvent()
      vi.spyOn(secondCase.select, 'selectByCoordinates').mockReturnValue(sampleMark)

      secondCase.eventManager.onStart({
        button: 0,
        clientX: 60,
        clientY: 60,
        preventDefault: vi.fn()
      } as unknown as MouseEvent)

      window.dispatchEvent(new Event('blur'))
      expect(secondCase.emitsSpy).toHaveBeenCalledWith('change', expect.anything(), 2)
    })

    it('cleans up active drag listeners on onUnmounted without emitting extra change', () => {
      const { eventManager, select, emitsSpy } = createClockDialEvent()
      const removeListenerSpy = vi.spyOn(window, 'removeEventListener')
      vi.spyOn(select, 'selectByCoordinates').mockReturnValue(sampleMark)

      eventManager.onStart({
        button: 0,
        clientX: 80,
        clientY: 80,
        preventDefault: vi.fn()
      } as unknown as MouseEvent)

      eventManager.onUnmounted()

      expect(removeListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
      expect(removeListenerSpy).toHaveBeenCalledWith('mouseup', expect.any(Function))
      expect(removeListenerSpy).toHaveBeenCalledWith('touchmove', expect.any(Function))
      expect(removeListenerSpy).toHaveBeenCalledWith('touchend', expect.any(Function))
      expect(removeListenerSpy).toHaveBeenCalledWith('touchcancel', expect.any(Function))
      expect(removeListenerSpy).toHaveBeenCalledWith('pointercancel', expect.any(Function))
      expect(removeListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function))
      expect(emitsSpy).not.toHaveBeenCalledWith('change', expect.anything(), expect.anything())
    })

    it('ignores non-primary mouse button, disabled state, and clock mode on onStart', () => {
      const { eventManager, select } = createClockDialEvent()
      const selectSpy = vi.spyOn(select, 'selectByCoordinates')

      eventManager.onStart({
        button: 2,
        clientX: 100,
        clientY: 100,
        preventDefault: vi.fn()
      } as unknown as MouseEvent)
      expect(selectSpy).not.toHaveBeenCalled()

      const clockCase = createClockDialEvent({ type: '12', clock: true })
      const clockSelectSpy = vi.spyOn(clockCase.select, 'selectByCoordinates')
      clockCase.eventManager.onStart({
        button: 0,
        clientX: 100,
        clientY: 100,
        preventDefault: vi.fn()
      } as unknown as MouseEvent)
      expect(clockSelectSpy).not.toHaveBeenCalled()
    })
  })
})
