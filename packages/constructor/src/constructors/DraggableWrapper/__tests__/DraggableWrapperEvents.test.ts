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

    it('should identify drag end and no-buttons events', () => {
      const { events } = createMockDeps()
      expect(events.isEnd(new Event('mouseup'))).toBe(true)
      expect(events.isEnd(new Event('touchend'))).toBe(true)
      expect(events.isEnd(new Event('touchcancel'))).toBe(true)
      expect(events.isEnd(new Event('contextmenu'))).toBe(true)
      expect(events.isEnd(new Event('mousemove'))).toBe(false)

      expect(events.isNoButtons(new MouseEvent('mousemove', { buttons: 0 }))).toBe(true)
      expect(events.isNoButtons(new MouseEvent('mousemove', { buttons: 1 }))).toBe(false)
    })

    it('should initiate drag lifecycle on onMousedown and add window listeners', () => {
      const targetItem = document.createElement('div')
      const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
      const { events, mockItem, mockClient, mockSquare, mockSelection } = createMockDeps({
        clickItem: targetItem
      })

      const mouseEvent = new MouseEvent('mousedown', { cancelable: true, clientX: 100, clientY: 200 })
      events.onMousedown(mouseEvent)

      expect(mockItem.getFocus().set).toHaveBeenCalledWith(targetItem)
      expect(mockClient.prepare).toHaveBeenCalled()
      expect(mockItem.getActive().prepare).toHaveBeenCalled()
      expect(mockSquare.prepare).toHaveBeenCalledWith(targetItem)
      expect(mockSelection.prepare).toHaveBeenCalled()
      expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))

      addEventListenerSpy.mockRestore()
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

      events.onMousedown(new MouseEvent('mousedown'))
      expect(mockItem.getFocus().set).not.toHaveBeenCalled()
    })
  })

  describe('Lifecycle and cleanup', () => {
    it('should clean up window listeners and stop dragging on onUnmounted when active', () => {
      const targetItem = document.createElement('div')
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
      const { events, mockPosition, mockSelection } = createMockDeps({ clickItem: targetItem })

      // Start drag to attach listeners
      events.onMousedown(new MouseEvent('mousedown', { cancelable: true }))

      events.onUnmounted()

      expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
      expect(mockPosition.stop).toHaveBeenCalled()
      expect(mockSelection.stop).toHaveBeenCalled()

      removeEventListenerSpy.mockRestore()
    })

    it('should do nothing on onUnmounted if drag was never started', () => {
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
      const { events, mockPosition } = createMockDeps()

      events.onUnmounted()
      expect(removeEventListenerSpy).not.toHaveBeenCalled()
      expect(mockPosition.stop).not.toHaveBeenCalled()

      removeEventListenerSpy.mockRestore()
    })
  })
})
