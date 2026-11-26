// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'

import type { SelectableAreaClassesData } from '../SelectableAreaClassesData'
import { SelectableAreaEvents } from '../SelectableAreaEvents'
import type { SelectableAreaItem } from '../SelectableAreaItem'
import type { SelectableAreaSquare } from '../SelectableAreaSquare'
import type { SelectableAreaProps } from '../props'

describe('SelectableAreaEvents', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  const createDeps = (propsOverride: SelectableAreaProps = {}) => {
    const props: SelectableAreaProps = { disabled: false, active: false, ...propsOverride }
    const mockClasses = {
      isMain: vi.fn().mockReturnValue(true),
      getRect: vi.fn().mockReturnValue({ left: 10, top: 10, right: 110, bottom: 110 }),
      findClick: vi.fn(),
      findItem: vi.fn(),
      setBlockSelection: vi.fn()
    }
    const mockItem = {
      get: vi.fn().mockReturnValue(['current-val']),
      set: vi.fn(),
      reset: vi.fn(),
      selectionByClick: vi.fn(),
      selectionByMeta: vi.fn(),
      selectionByShift: vi.fn()
    }
    const mockSquare = {
      start: vi.fn(),
      move: vi.fn(),
      selectionBySquare: vi.fn(),
      end: vi.fn(),
      reset: vi.fn(),
      getSelectedCurrent: vi.fn().mockReturnValue(['val1', 'val2'])
    }

    const events = new SelectableAreaEvents(
      props,
      () => mockClasses as unknown as SelectableAreaClassesData,
      () => mockItem as unknown as SelectableAreaItem,
      () => mockSquare as unknown as SelectableAreaSquare
    )

    return { events, props, mockClasses, mockItem, mockSquare }
  }

  describe('Standard functional requirements (Happy path)', () => {
    it('should expose binds with keydown, mousedown, and touchstart handlers', () => {
      const { events } = createDeps()

      expect(events.binds).toEqual({
        onKeydown: events.onKeydown,
        onMousedown: events.onMousedown,
        onTouchstart: events.onMousedown
      })
    })

    it('should verify isEnd and isNoButtons including blur and contextmenu', () => {
      const { events } = createDeps()

      expect(events.isEnd(new Event('mouseup'))).toBe(true)
      expect(events.isEnd(new Event('contextmenu'))).toBe(true)
      expect(events.isEnd(new Event('blur'))).toBe(true)
      expect(events.isEnd(new Event('touchend'))).toBe(true)
      expect(events.isEnd(new Event('touchcancel'))).toBe(true)
      expect(events.isEnd(new Event('mousemove'))).toBe(false)

      expect(events.isNoButtons(new MouseEvent('mousemove', { buttons: 0 }))).toBe(true)
      expect(events.isNoButtons(new MouseEvent('mousemove', { buttons: 1 }))).toBe(false)
    })

    it('should handle onClick selection modes (click, shift, meta/ctrl, active, disabled)', () => {
      const { events, props, mockClasses, mockItem } = createDeps()

      // Disabled -> ignored
      props.disabled = true
      events.onClick(new MouseEvent('click'))
      expect(mockClasses.findClick).not.toHaveBeenCalled()
      props.disabled = false

      // No click trigger -> ignored
      mockClasses.findClick.mockReturnValue(undefined)
      events.onClick(new MouseEvent('click'))
      expect(mockItem.selectionByClick).not.toHaveBeenCalled()

      // Click trigger found
      const targetElement = document.createElement('div')
      const itemElement = document.createElement('div')
      itemElement.dataset.value = '15'
      mockClasses.findClick.mockReturnValue(targetElement)
      mockClasses.findItem.mockReturnValue(itemElement)

      // Shift click
      const shiftEvent = new MouseEvent('click', { shiftKey: true })
      Object.defineProperty(shiftEvent, 'target', { value: targetElement })
      events.onClick(shiftEvent)
      expect(mockItem.selectionByShift).toHaveBeenCalledWith('15')

      // Meta / Ctrl click
      const metaEvent = new MouseEvent('click', { metaKey: true })
      Object.defineProperty(metaEvent, 'target', { value: targetElement })
      events.onClick(metaEvent)
      expect(mockItem.selectionByMeta).toHaveBeenCalledWith('15')

      // Active mode click behaves like meta toggle
      props.active = true
      const activeEvent = new MouseEvent('click')
      Object.defineProperty(activeEvent, 'target', { value: targetElement })
      events.onClick(activeEvent)
      expect(mockItem.selectionByMeta).toHaveBeenCalledTimes(2)
      props.active = false

      // Standard click
      const normalEvent = new MouseEvent('click')
      Object.defineProperty(normalEvent, 'target', { value: targetElement })
      events.onClick(normalEvent)
      expect(mockItem.selectionByClick).toHaveBeenCalledWith('15')
    })

    it('should handle keyboard selection (Enter/Space) and Escape reset with IME and disabled guards', () => {
      const { events, props, mockClasses, mockItem } = createDeps()
      const itemElement = document.createElement('div')
      itemElement.dataset.value = '42'
      mockClasses.findItem.mockReturnValue(itemElement)

      // Escape resets non-empty selection
      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape', cancelable: true })
      events.onKeydown(escapeEvent)
      expect(mockItem.reset).toHaveBeenCalledTimes(1)
      expect(escapeEvent.defaultPrevented).toBe(true)

      // Enter selects focused item
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
      Object.defineProperty(enterEvent, 'target', { value: itemElement })
      events.onKeydown(enterEvent)
      expect(mockItem.selectionByClick).toHaveBeenCalledWith('42')

      // Space with Shift selects range and prevents scroll
      const spaceShiftEvent = new KeyboardEvent('keydown', { key: ' ', shiftKey: true, cancelable: true })
      Object.defineProperty(spaceShiftEvent, 'target', { value: itemElement })
      events.onKeydown(spaceShiftEvent)
      expect(mockItem.selectionByShift).toHaveBeenCalledWith('42')
      expect(spaceShiftEvent.defaultPrevented).toBe(true)

      // IME composition and disabled state are ignored
      const imeEvent = new KeyboardEvent('keydown', { key: 'Escape', isComposing: true })
      events.onKeydown(imeEvent)
      expect(mockItem.reset).toHaveBeenCalledTimes(1)

      props.disabled = true
      events.onKeydown(new KeyboardEvent('keydown', { key: 'Escape' }))
      expect(mockItem.reset).toHaveBeenCalledTimes(1)
    })

    it('should start drag on primary mousedown, preserve meta selection, and attach window listeners including blur/contextmenu', () => {
      const { events, mockClasses, mockSquare } = createDeps()
      const element = document.createElement('div')
      const addEventSpy = vi.spyOn(window, 'addEventListener')

      const mouseEvent = new MouseEvent('mousedown', { button: 0, clientX: 25, clientY: 35, metaKey: true })
      Object.defineProperty(mouseEvent, 'target', { value: element })

      events.onMousedown(mouseEvent)

      expect(mockSquare.start).toHaveBeenCalledWith({ x: 15, y: 25 }, ['current-val'])
      expect(mockClasses.setBlockSelection).toHaveBeenCalledWith(true)
      expect(addEventSpy).toHaveBeenCalledWith('mousemove', events.onMousemove)
      expect(addEventSpy).toHaveBeenCalledWith('mouseup', events.onMousemove)
      expect(addEventSpy).toHaveBeenCalledWith('contextmenu', events.onMousemove)
      expect(addEventSpy).toHaveBeenCalledWith('blur', events.onMousemove)
      expect(addEventSpy).toHaveBeenCalledWith('touchmove', events.onMousemove, { passive: false })

      events.onUnmounted()
    })

    it('should coalesce mousemove via requestAnimationFrame and flush pending coordinates on mouseup', () => {
      vi.useFakeTimers()
      const { events, mockClasses, mockItem, mockSquare } = createDeps()
      const element = document.createElement('div')

      const startEvent = new MouseEvent('mousedown', { button: 0, clientX: 10, clientY: 10 })
      Object.defineProperty(startEvent, 'target', { value: element })
      events.onMousedown(startEvent)

      // Multiple mousemoves within one frame coalesce into the latest position
      window.dispatchEvent(new MouseEvent('mousemove', { clientX: 30, clientY: 40, buttons: 1 }))
      window.dispatchEvent(new MouseEvent('mousemove', { clientX: 50, clientY: 60, buttons: 1 }))

      expect(mockSquare.move).not.toHaveBeenCalled()

      // Mouseup before rAF fires flushes latest queued coordinates and ends drag
      const removeEventSpy = vi.spyOn(window, 'removeEventListener')
      window.dispatchEvent(new MouseEvent('mouseup', { buttons: 0, cancelable: true }))

      expect(mockSquare.move).toHaveBeenCalledTimes(1)
      expect(mockSquare.move).toHaveBeenCalledWith({ x: 40, y: 50 })
      expect(mockSquare.selectionBySquare).toHaveBeenCalledTimes(1)
      expect(mockSquare.end).toHaveBeenCalledTimes(1)
      expect(mockClasses.setBlockSelection).toHaveBeenCalledWith(false)
      expect(removeEventSpy).toHaveBeenCalledWith('mousemove', events.onMousemove)
      expect(removeEventSpy).toHaveBeenCalledWith('blur', events.onMousemove)
      expect(mockItem.set).toHaveBeenCalledWith(['val1', 'val2'])
    })
  })

  describe('Gesture cancellation, edge guards, and unmount cleanup', () => {
    it('should ignore non-primary buttons, disabled/active states, modifier keys, and duplicate starts', () => {
      const { events, props, mockSquare } = createDeps()
      const element = document.createElement('div')

      const dispatch = (init: MouseEventInit) => {
        const event = new MouseEvent('mousedown', init)
        Object.defineProperty(event, 'target', { value: element })
        events.onMousedown(event)
      }

      dispatch({ button: 2 })
      dispatch({ button: 0, ctrlKey: true })
      dispatch({ button: 0, shiftKey: true })
      props.active = true
      dispatch({ button: 0 })
      props.active = false
      props.disabled = true
      dispatch({ button: 0 })
      props.disabled = false

      expect(mockSquare.start).not.toHaveBeenCalled()

      // First valid start succeeds; second concurrent start before end is ignored
      dispatch({ button: 0, clientX: 20, clientY: 20 })
      dispatch({ button: 0, clientX: 40, clientY: 40 })
      expect(mockSquare.start).toHaveBeenCalledTimes(1)

      events.onUnmounted()
    })

    it('should cleanly cancel active drag on window blur without console warnings on non-cancelable event', () => {
      const { events, mockClasses, mockSquare } = createDeps()
      const element = document.createElement('div')

      const startEvent = new MouseEvent('mousedown', { button: 0, clientX: 20, clientY: 20 })
      Object.defineProperty(startEvent, 'target', { value: element })
      events.onMousedown(startEvent)

      window.dispatchEvent(new Event('blur', { cancelable: false }))

      expect(mockSquare.end).toHaveBeenCalledTimes(1)
      expect(mockClasses.setBlockSelection).toHaveBeenCalledWith(false)
    })

    it('should abort active drag, cancel rAF, remove listeners, and unlock body on onUnmounted', () => {
      vi.useFakeTimers()
      const removeEventSpy = vi.spyOn(window, 'removeEventListener')
      const { events, mockClasses, mockSquare } = createDeps()
      const element = document.createElement('div')

      const startEvent = new MouseEvent('mousedown', { button: 0, clientX: 20, clientY: 20 })
      Object.defineProperty(startEvent, 'target', { value: element })
      events.onMousedown(startEvent)

      window.dispatchEvent(new MouseEvent('mousemove', { clientX: 80, clientY: 90, buttons: 1 }))

      // Unmount mid-drag before rAF fires
      events.onUnmounted()

      expect(mockSquare.reset).toHaveBeenCalledTimes(1)
      expect(mockClasses.setBlockSelection).toHaveBeenCalledWith(false)
      expect(removeEventSpy).toHaveBeenCalledWith('mousemove', events.onMousemove)
      expect(removeEventSpy).toHaveBeenCalledWith('blur', events.onMousemove)
      expect(removeEventSpy).toHaveBeenCalledWith('contextmenu', events.onMousemove)

      // Advancing timers after unmount does not flush cancelled rAF
      vi.advanceTimersByTime(50)
      expect(mockSquare.move).not.toHaveBeenCalled()
    })

    it('should do nothing on onUnmounted when no drag is active', () => {
      const removeEventSpy = vi.spyOn(window, 'removeEventListener')
      const { events, mockSquare } = createDeps()

      events.onUnmounted()
      expect(removeEventSpy).not.toHaveBeenCalled()
      expect(mockSquare.reset).not.toHaveBeenCalled()
    })
  })
})
