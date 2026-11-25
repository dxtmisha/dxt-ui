// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DraggableWrapperEvents } from '../DraggableWrapperEvents'

describe('DraggableWrapperEvents', () => {
  const createMockDeps = (options: {
    disabled?: boolean
    clickItem?: HTMLElement
    hasActive?: boolean
    focusItem?: HTMLElement
  } = {}) => {
    const props = { disabled: options.disabled ?? false }
    const mockClasses = {
      findClick: vi.fn(() => options.clickItem)
    }
    const mockClient = {
      prepare: vi.fn(),
      move: vi.fn()
    }
    const mockDelay = {
      start: vi.fn((cb: () => void) => cb()),
      stop: vi.fn(() => false)
    }
    const activeObj = {
      prepare: vi.fn(),
      is: vi.fn(() => options.hasActive ?? true)
    }
    const focusObj = {
      set: vi.fn(),
      get: vi.fn(() => options.focusItem ?? options.clickItem)
    }
    const mockItem = {
      getActive: () => activeObj,
      getFocus: () => focusObj
    }
    const mockPosition = {
      abort: vi.fn(),
      reset: vi.fn(),
      update: vi.fn(),
      stop: vi.fn()
    }
    const mockSelection = {
      prepare: vi.fn(),
      stop: vi.fn()
    }
    const mockSquare = {
      prepare: vi.fn()
    }

    const events = new DraggableWrapperEvents(
      props,
      () => mockClasses as any,
      () => mockClient as any,
      () => mockDelay as any,
      () => mockItem as any,
      () => mockPosition as any,
      () => mockSelection as any,
      () => mockSquare as any
    )

    return {
      events,
      props,
      mockClasses,
      mockClient,
      mockDelay,
      mockItem,
      activeObj,
      focusObj,
      mockPosition,
      mockSelection,
      mockSquare
    }
  }

  describe('Standard functional requirements (Happy path)', () => {
    it('should expose binds property with mouse and touch listeners', () => {
      const { events } = createMockDeps()
      expect(events.binds).toHaveProperty('onMousedown')
      expect(events.binds).toHaveProperty('onTouchstart')
      expect(events.binds).toHaveProperty('onTransitionend')
    })

    it('should identify drag end and no-buttons events including blur and contextmenu', () => {
      const { events } = createMockDeps()
      expect(events.isEnd(new Event('mouseup'))).toBe(true)
      expect(events.isEnd(new Event('touchend'))).toBe(true)
      expect(events.isEnd(new Event('touchcancel'))).toBe(true)
      expect(events.isEnd(new Event('contextmenu'))).toBe(true)
      expect(events.isEnd(new Event('blur'))).toBe(true)
      expect(events.isEnd(new Event('mousemove'))).toBe(false)

      expect(events.isNoButtons(new MouseEvent('mousemove', { buttons: 0 }))).toBe(true)
      expect(events.isNoButtons(new MouseEvent('mousemove', { buttons: 1 }))).toBe(false)
    })

    it('should initiate drag lifecycle on onMousedown and add window listeners including blur and contextmenu', () => {
      const targetItem = document.createElement('div')
      const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
      const { events, mockItem, mockClient, mockSquare, mockSelection } = createMockDeps({
        clickItem: targetItem
      })

      const mouseEvent = new MouseEvent('mousedown', { cancelable: true, button: 0, clientX: 100, clientY: 200 })
      events.onMousedown(mouseEvent)

      expect(mockItem.getFocus().set).toHaveBeenCalledWith(targetItem)
      expect(mockClient.prepare).toHaveBeenCalled()
      expect(mockItem.getActive().prepare).toHaveBeenCalled()
      expect(mockSquare.prepare).toHaveBeenCalledWith(targetItem)
      expect(mockSelection.prepare).toHaveBeenCalled()
      expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
      expect(addEventListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function))
      expect(addEventListenerSpy).toHaveBeenCalledWith('contextmenu', expect.any(Function))

      events.onUnmounted()
      addEventListenerSpy.mockRestore()
    })

    it('should coalesce multiple mousemove events via requestAnimationFrame and flush on mouseup', () => {
      vi.useFakeTimers()
      const targetItem = document.createElement('div')
      const { events, mockClient, mockPosition } = createMockDeps({
        clickItem: targetItem,
        hasActive: true
      })

      events.onMousedown(new MouseEvent('mousedown', { cancelable: true, button: 0, clientX: 10, clientY: 10 }))

      // Multiple mousemove events within a single animation frame coalesce to the latest coordinates
      window.dispatchEvent(new MouseEvent('mousemove', { buttons: 1, clientX: 20, clientY: 30 }))
      window.dispatchEvent(new MouseEvent('mousemove', { buttons: 1, clientX: 40, clientY: 50 }))
      window.dispatchEvent(new MouseEvent('mousemove', { buttons: 1, clientX: 60, clientY: 70 }))

      expect(mockClient.move).not.toHaveBeenCalled()

      // Releasing before next animation frame flushes the latest queued coordinates before stop()
      window.dispatchEvent(new MouseEvent('mouseup', { buttons: 0 }))

      expect(mockClient.move).toHaveBeenCalledTimes(1)
      expect(mockClient.move).toHaveBeenCalledWith({ x: 60, y: 70 })
      expect(mockPosition.update).toHaveBeenCalledTimes(1)
      expect(mockPosition.stop).toHaveBeenCalledTimes(1)

      vi.useRealTimers()
    })

    it('should reset position on onTransitionend for transform and left properties', () => {
      const { events, mockPosition } = createMockDeps()

      events.onTransitionend(new TransitionEvent('transitionend', { propertyName: 'transform' }))
      expect(mockPosition.reset).toHaveBeenCalledTimes(1)

      events.onTransitionend(new TransitionEvent('transitionend', { propertyName: 'left' }))
      expect(mockPosition.reset).toHaveBeenCalledTimes(2)

      events.onTransitionend(new TransitionEvent('transitionend', { propertyName: 'opacity' }))
      expect(mockPosition.reset).toHaveBeenCalledTimes(2)
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should ignore mousedown when component is disabled', () => {
      const targetItem = document.createElement('div')
      const { events, mockItem } = createMockDeps({ disabled: true, clickItem: targetItem })

      events.onMousedown(new MouseEvent('mousedown'))
      expect(mockItem.getFocus().set).not.toHaveBeenCalled()
    })

    it('should ignore mousedown when click did not hit a valid draggable item', () => {
      const { events, mockItem } = createMockDeps({ clickItem: undefined })

      events.onMousedown(new MouseEvent('mousedown', { button: 0 }))
      expect(mockItem.getFocus().set).not.toHaveBeenCalled()
    })

    it('should ignore non-primary mouse buttons (e.g. right-click)', () => {
      const targetItem = document.createElement('div')
      const { events, mockItem } = createMockDeps({ clickItem: targetItem })

      events.onMousedown(new MouseEvent('mousedown', { button: 2 }))
      expect(mockItem.getFocus().set).not.toHaveBeenCalled()
    })
  })

  describe('Lifecycle and cleanup', () => {
    it('should abort drag, cancel rAF, clean up window listeners, and avoid position.stop() on onUnmounted when active', () => {
      const targetItem = document.createElement('div')
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
      const { events, mockDelay, mockPosition, mockSelection } = createMockDeps({ clickItem: targetItem })

      // Start drag to attach listeners
      events.onMousedown(new MouseEvent('mousedown', { cancelable: true, button: 0 }))

      events.onUnmounted()

      expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
      expect(removeEventListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function))
      expect(removeEventListenerSpy).toHaveBeenCalledWith('contextmenu', expect.any(Function))
      expect(mockDelay.stop).toHaveBeenCalledTimes(1)
      expect(mockSelection.stop).toHaveBeenCalledTimes(1)
      expect(mockPosition.abort).toHaveBeenCalledTimes(1)
      expect(mockPosition.stop).not.toHaveBeenCalled()

      removeEventListenerSpy.mockRestore()
    })

    it('should also abort pending return transition when unmounted after mouseup before transitionend', () => {
      const targetItem = document.createElement('div')
      const { events, mockPosition, mockSelection } = createMockDeps({
        clickItem: targetItem,
        hasActive: true
      })

      events.onMousedown(new MouseEvent('mousedown', { cancelable: true, button: 0 }))
      window.dispatchEvent(new MouseEvent('mouseup', { buttons: 0 }))

      expect(mockPosition.stop).toHaveBeenCalledTimes(1)
      expect(mockPosition.abort).not.toHaveBeenCalled()

      // Unmount while return transition is still in progress
      events.onUnmounted()
      expect(mockSelection.stop).toHaveBeenCalled()
      expect(mockPosition.abort).toHaveBeenCalledTimes(1)
    })

    it('should do nothing on onUnmounted if drag was never started', () => {
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
      const { events, mockPosition } = createMockDeps()

      events.onUnmounted()
      expect(removeEventListenerSpy).not.toHaveBeenCalled()
      expect(mockPosition.abort).not.toHaveBeenCalled()
      expect(mockPosition.stop).not.toHaveBeenCalled()

      removeEventListenerSpy.mockRestore()
    })
  })
})
