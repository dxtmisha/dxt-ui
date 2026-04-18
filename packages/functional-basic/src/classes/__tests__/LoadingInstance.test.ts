// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { LoadingInstance } from '../LoadingInstance'

describe('LoadingInstance', () => {
  let loading: LoadingInstance

  beforeEach(() => {
    loading = new LoadingInstance()
    vi.restoreAllMocks()
  })

  describe('Initial State', () => {
    it('should return false initially for is()', () => {
      expect(loading.is()).toBe(false)
    })

    it('should return 0 initially for get()', () => {
      expect(loading.get()).toBe(0)
    })

    it('should have no value when not shown', () => {
      expect(loading.get()).toBe(0)
      expect(loading.is()).toBe(false)
    })
  })

  describe('show() method', () => {
    it('should increment value on single show()', () => {
      loading.show()
      expect(loading.get()).toBe(1)
    })

    it('should increment value on multiple show() calls', () => {
      loading.show()
      loading.show()
      loading.show()
      expect(loading.get()).toBe(3)
    })

    it('should return true for is() after show()', () => {
      loading.show()
      expect(loading.is()).toBe(true)
    })

    it('should return true for is() after multiple show() calls', () => {
      loading.show()
      loading.show()
      loading.show()
      expect(loading.is()).toBe(true)
    })

    it('should dispatch ui-loading event on show()', () => {
      // @ts-expect-error: Accessing protected member for testing purposes
      const dispatchSpy = vi.spyOn(loading.event!, 'dispatch')

      loading.show()
      expect(dispatchSpy).toHaveBeenCalledWith({ loading: true })
    })

    it('should dispatch event on each show() call', () => {
      // @ts-expect-error: Accessing protected member for testing purposes
      const dispatchSpy = vi.spyOn(loading.event!, 'dispatch')

      loading.show()
      loading.show()
      loading.show()

      expect(dispatchSpy).toHaveBeenCalledTimes(3)
      expect(dispatchSpy).toHaveBeenNthCalledWith(1, { loading: true })
      expect(dispatchSpy).toHaveBeenNthCalledWith(2, { loading: true })
      expect(dispatchSpy).toHaveBeenNthCalledWith(3, { loading: true })
    })
  })

  describe('hide() method', () => {
    it('should decrement value on hide() after show()', () => {
      loading.show()
      loading.hide()
      expect(loading.get()).toBe(0)
    })

    it('should decrement value on multiple hide() calls', () => {
      loading.show()
      loading.show()
      loading.show()
      loading.hide()
      loading.hide()
      expect(loading.get()).toBe(1)
    })

    it('should return false for is() after hide()', () => {
      loading.show()
      loading.hide()
      expect(loading.is()).toBe(false)
    })

    it('should return false for is() only when value reaches 0', () => {
      loading.show()
      loading.show()
      loading.show()
      loading.hide()
      expect(loading.is()).toBe(true)
      loading.hide()
      expect(loading.is()).toBe(true)
      loading.hide()
      expect(loading.is()).toBe(false)
    })

    it('should not decrement below 0 on hide()', () => {
      loading.hide()
      expect(loading.get()).toBe(0)
      expect(loading.is()).toBe(false)
    })

    it('should not decrement below 0 on multiple hide() calls', () => {
      loading.hide()
      loading.hide()
      loading.hide()
      loading.hide()
      expect(loading.get()).toBe(0)
      expect(loading.is()).toBe(false)
    })

    it('should dispatch ui-loading event on hide()', () => {
      // @ts-expect-error: Accessing protected member for testing purposes
      const dispatchSpy = vi.spyOn(loading.event!, 'dispatch')

      loading.show()
      loading.hide()
      expect(dispatchSpy).toHaveBeenCalledWith({ loading: false })
    })

    it('should dispatch event only when value changes from positive to zero', () => {
      // @ts-expect-error: Accessing protected member for testing purposes
      const dispatchSpy = vi.spyOn(loading.event!, 'dispatch')

      loading.show()
      loading.show()
      loading.show()

      dispatchSpy.mockClear()

      loading.hide() // value: 2
      expect(dispatchSpy).toHaveBeenCalledWith({ loading: true })

      loading.hide() // value: 1
      expect(dispatchSpy).toHaveBeenCalledWith({ loading: true })

      loading.hide() // value: 0
      expect(dispatchSpy).toHaveBeenCalledWith({ loading: false })
    })

    it('should not dispatch event when hiding with value 0', () => {
      // @ts-expect-error: Accessing protected member for testing purposes
      const dispatchSpy = vi.spyOn(loading.event!, 'dispatch')

      loading.hide()
      expect(dispatchSpy).not.toHaveBeenCalled()
    })
  })

  describe('State management', () => {
    it('should maintain consistent state through multiple operations', () => {
      expect(loading.get()).toBe(0)
      expect(loading.is()).toBe(false)

      loading.show()
      expect(loading.get()).toBe(1)
      expect(loading.is()).toBe(true)

      loading.show()
      expect(loading.get()).toBe(2)
      expect(loading.is()).toBe(true)

      loading.hide()
      expect(loading.get()).toBe(1)
      expect(loading.is()).toBe(true)

      loading.hide()
      expect(loading.get()).toBe(0)
      expect(loading.is()).toBe(false)
    })

    it('should handle alternating show/hide calls correctly', () => {
      loading.show()
      expect(loading.get()).toBe(1)

      loading.hide()
      expect(loading.get()).toBe(0)

      loading.show()
      expect(loading.get()).toBe(1)

      loading.show()
      expect(loading.get()).toBe(2)

      loading.hide()
      expect(loading.get()).toBe(1)

      loading.show()
      expect(loading.get()).toBe(2)

      loading.hide()
      expect(loading.get()).toBe(1)

      loading.hide()
      expect(loading.get()).toBe(0)
    })

    it('should return correct loading state based on value', () => {
      expect(loading.is()).toBe(false)

      loading.show()
      expect(loading.is()).toBe(true)

      loading.show()
      expect(loading.is()).toBe(true)

      loading.show()
      expect(loading.is()).toBe(true)

      loading.hide()
      expect(loading.is()).toBe(true)

      loading.hide()
      expect(loading.is()).toBe(true)

      loading.hide()
      expect(loading.is()).toBe(false)
    })
  })

  describe('Event registration', () => {
    it('should register an event via registrationEvent', () => {
      const listener = vi.fn()
      loading.registrationEvent(listener)

      loading.show()

      expect(listener).toHaveBeenCalled()
      expect(listener.mock.calls?.[0]?.[0].detail).toEqual({ loading: true })
    })

    it('should call listener with correct event detail', () => {
      const listener = vi.fn()
      loading.registrationEvent(listener)

      loading.show()
      const event = listener.mock.calls?.[0]?.[0]

      expect(event).toBeInstanceOf(CustomEvent)
      expect(event.detail).toEqual({ loading: true })
    })

    it('should call listener multiple times for multiple state changes', () => {
      const listener = vi.fn()
      loading.registrationEvent(listener)

      loading.show()
      loading.show()
      loading.hide()
      loading.show()
      loading.hide()
      loading.hide()

      expect(listener).toHaveBeenCalledTimes(6)

      const details = listener.mock.calls.map(call => call[0].detail)
      expect(details).toEqual([
        { loading: true },
        { loading: true },
        { loading: true },
        { loading: true },
        { loading: true },
        { loading: false }
      ])
    })

    it('should register multiple listeners', () => {
      const listener1 = vi.fn()
      const listener2 = vi.fn()
      const listener3 = vi.fn()

      loading.registrationEvent(listener1)
      loading.registrationEvent(listener2)
      loading.registrationEvent(listener3)

      loading.show()

      expect(listener1).toHaveBeenCalled()
      expect(listener2).toHaveBeenCalled()
      expect(listener3).toHaveBeenCalled()
    })

    it('should unregister an event via unregistrationEvent', () => {
      const listener = vi.fn()
      loading.registrationEvent(listener)
      loading.unregistrationEvent(listener)

      loading.show()
      expect(listener).not.toHaveBeenCalled()
    })

    it('should only unregister the specified listener', () => {
      const listener1 = vi.fn()
      const listener2 = vi.fn()
      const listener3 = vi.fn()

      loading.registrationEvent(listener1)
      loading.registrationEvent(listener2)
      loading.registrationEvent(listener3)

      loading.unregistrationEvent(listener2)

      loading.show()

      expect(listener1).toHaveBeenCalled()
      expect(listener2).not.toHaveBeenCalled()
      expect(listener3).toHaveBeenCalled()
    })

    it('should handle multiple registration and unregistration', () => {
      const listener = vi.fn()

      loading.registrationEvent(listener)
      loading.show()
      expect(listener).toHaveBeenCalledTimes(1)

      loading.unregistrationEvent(listener)
      loading.show()
      expect(listener).toHaveBeenCalledTimes(1)

      loading.registrationEvent(listener)
      loading.show()
      expect(listener).toHaveBeenCalledTimes(2)
    })

    it('should unregister event with specific element', () => {
      const listener = vi.fn()
      const element = document.createElement('div')

      loading.registrationEvent(listener, element)
      loading.unregistrationEvent(listener, element)

      loading.show()
      expect(listener).not.toHaveBeenCalled()
    })

    it('should only unregister listener with matching element', () => {
      const listener = vi.fn()
      const element1 = document.createElement('div')
      const element2 = document.createElement('div')

      // Add elements to DOM for proper event handling
      document.body.appendChild(element1)
      document.body.appendChild(element2)

      loading.registrationEvent(listener, element1)
      loading.registrationEvent(listener, element2)

      // Verify both registrations are present
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(loading.registrationList).toHaveLength(2)

      loading.unregistrationEvent(listener, element1)

      // Verify only one registration remains
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(loading.registrationList).toHaveLength(1)

      loading.show()

      // The listener should still be called because element2 registration is still active
      expect(listener).toHaveBeenCalled()

      // Clean up
      document.body.removeChild(element1)
      document.body.removeChild(element2)
    })

    it('should track registered events correctly', () => {
      const listener1 = vi.fn()
      const listener2 = vi.fn()

      loading.registrationEvent(listener1)
      loading.registrationEvent(listener2)

      // @ts-expect-error: Accessing protected member for testing purposes
      expect(loading.registrationList).toHaveLength(2)
    })

    it('should update registration list after unregistration', () => {
      const listener1 = vi.fn()
      const listener2 = vi.fn()
      const listener3 = vi.fn()

      loading.registrationEvent(listener1)
      loading.registrationEvent(listener2)
      loading.registrationEvent(listener3)

      loading.unregistrationEvent(listener2)

      // @ts-expect-error: Accessing protected member for testing purposes
      expect(loading.registrationList).toHaveLength(2)
    })
  })

  describe('Event dispatching', () => {
    it('should dispatch ui-loading event on show and hide', () => {
      // @ts-expect-error: Accessing protected member for testing purposes
      const dispatchSpy = vi.spyOn(loading.event!, 'dispatch')

      loading.show()
      expect(dispatchSpy).toHaveBeenCalledWith({ loading: true })

      loading.hide()
      expect(dispatchSpy).toHaveBeenCalledWith({ loading: false })
    })

    it('should dispatch events with correct loading status', () => {
      // @ts-expect-error: Accessing protected member for testing purposes
      const dispatchSpy = vi.spyOn(loading.event!, 'dispatch')

      loading.show()
      loading.show()
      loading.hide()

      const calls = dispatchSpy.mock.calls
      expect(calls[0]).toEqual([{ loading: true }])
      expect(calls[1]).toEqual([{ loading: true }])
      expect(calls[2]).toEqual([{ loading: true }])
    })

    it('should trigger registered listener on state change', () => {
      const listener = vi.fn()
      loading.registrationEvent(listener)

      loading.show()

      expect(listener).toHaveBeenCalled()
      const event = listener.mock.calls[0][0]
      expect(event.type).toBe('ui-loading')
      expect(event.detail.loading).toBe(true)
    })

    it('should provide correct loading detail in event', () => {
      const listener = vi.fn()
      loading.registrationEvent(listener)

      loading.show()
      loading.show()
      loading.hide()

      const details = listener.mock.calls.map(call => call[0].detail)
      expect(details).toEqual([
        { loading: true },
        { loading: true },
        { loading: true }
      ])
    })
  })

  describe('Custom event name', () => {
    it('should use custom event name when provided', () => {
      const customLoading = new LoadingInstance('custom-loading-event')
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customLoading.eventName).toBe('custom-loading-event')
    })

    it('should dispatch events with custom name', () => {
      const customLoading = new LoadingInstance('custom-loading-event')

      const listener = vi.fn()
      window.addEventListener('custom-loading-event', listener)

      customLoading.show()

      expect(listener).toHaveBeenCalled()

      window.removeEventListener('custom-loading-event', listener)
    })
  })

  describe('Edge cases', () => {
    it('should handle large number of show() calls', () => {
      for (let i = 0; i < 1000; i++) {
        loading.show()
      }
      expect(loading.get()).toBe(1000)
      expect(loading.is()).toBe(true)
    })

    it('should handle large number of hide() calls', () => {
      for (let i = 0; i < 1000; i++) {
        loading.show()
      }
      for (let i = 0; i < 1000; i++) {
        loading.hide()
      }
      expect(loading.get()).toBe(0)
      expect(loading.is()).toBe(false)
    })

    it('should handle hide() calls that exceed show() calls', () => {
      loading.show()
      loading.hide()
      loading.hide()
      loading.hide()
      loading.hide()

      expect(loading.get()).toBe(0)
      expect(loading.is()).toBe(false)
    })

    it('should maintain correct state with rapid show/hide calls', () => {
      for (let i = 0; i < 100; i++) {
        loading.show()
        loading.hide()
      }
      expect(loading.get()).toBe(0)
      expect(loading.is()).toBe(false)
    })
  })

  describe('Multiple instances', () => {
    it('should maintain independent state between instances', () => {
      const loading1 = new LoadingInstance()
      const loading2 = new LoadingInstance()

      loading1.show()
      loading1.show()
      loading2.show()

      expect(loading1.get()).toBe(2)
      expect(loading2.get()).toBe(1)
      expect(loading1.is()).toBe(true)
      expect(loading2.is()).toBe(true)

      loading1.hide()
      loading2.hide()

      expect(loading1.get()).toBe(1)
      expect(loading2.get()).toBe(0)
      expect(loading1.is()).toBe(true)
      expect(loading2.is()).toBe(false)
    })

    it('should have independent event listeners per instance', () => {
      const loading1 = new LoadingInstance('loading-1')
      const loading2 = new LoadingInstance('loading-2')

      const listener1 = vi.fn()
      const listener2 = vi.fn()

      loading1.registrationEvent(listener1)
      loading2.registrationEvent(listener2)

      loading1.show()
      loading2.show()

      expect(listener1).toHaveBeenCalledTimes(1)
      expect(listener2).toHaveBeenCalledTimes(1)

      // Verify the events have the correct details
      expect(listener1.mock.calls[0][0].detail.loading).toBe(true)
      expect(listener2.mock.calls[0][0].detail.loading).toBe(true)
    })
  })
})