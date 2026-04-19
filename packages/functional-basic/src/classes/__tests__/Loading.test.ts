// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Loading } from '../Loading'

describe('Loading', () => {
  beforeEach(() => {
    // Reset internal state before each test
    // @ts-expect-error: Accessing protected member for testing purposes
    Loading.getItem().value = 0
    vi.restoreAllMocks()
  })

  describe('Delegation to LoadingInstance', () => {
    it('should delegate is() call to LoadingInstance', () => {
      const spy = vi.spyOn(Loading.getItem(), 'is')
      Loading.is()
      expect(spy).toHaveBeenCalled()
    })

    it('should delegate get() call to LoadingInstance', () => {
      const spy = vi.spyOn(Loading.getItem(), 'get')
      Loading.get()
      expect(spy).toHaveBeenCalled()
    })

    it('should delegate show() call to LoadingInstance', () => {
      const spy = vi.spyOn(Loading.getItem(), 'show')
      Loading.show()
      expect(spy).toHaveBeenCalled()
    })

    it('should delegate hide() call to LoadingInstance', () => {
      const spy = vi.spyOn(Loading.getItem(), 'hide')
      Loading.hide()
      expect(spy).toHaveBeenCalled()
    })

    it('should delegate registrationEvent() call to LoadingInstance', () => {
      const spy = vi.spyOn(Loading.getItem(), 'registrationEvent')
      const listener = vi.fn()
      Loading.registrationEvent(listener)
      expect(spy).toHaveBeenCalledWith(listener, undefined)
    })

    it('should delegate unregistrationEvent() call to LoadingInstance', () => {
      const spy = vi.spyOn(Loading.getItem(), 'unregistrationEvent')
      const listener = vi.fn()
      Loading.unregistrationEvent(listener)
      expect(spy).toHaveBeenCalledWith(listener, undefined)
    })
  })

  describe('State management', () => {
    it('should return false initially for is()', () => {
      expect(Loading.is()).toBe(false)
    })

    it('should return 0 initially for get()', () => {
      expect(Loading.get()).toBe(0)
    })

    it('should return true for is() after show()', () => {
      Loading.show()
      expect(Loading.is()).toBe(true)
    })

    it('should return 1 for get() after show()', () => {
      Loading.show()
      expect(Loading.get()).toBe(1)
    })

    it('should increment value on multiple show() calls', () => {
      Loading.show()
      Loading.show()
      Loading.show()
      expect(Loading.get()).toBe(3)
    })

    it('should decrement value on hide() after show()', () => {
      Loading.show()
      Loading.show()
      Loading.hide()
      expect(Loading.get()).toBe(1)
    })

    it('should return false for is() when value reaches 0', () => {
      Loading.show()
      Loading.hide()
      expect(Loading.is()).toBe(false)
    })

    it('should not decrement below 0', () => {
      Loading.hide()
      Loading.hide()
      Loading.hide()
      expect(Loading.get()).toBe(0)
      expect(Loading.is()).toBe(false)
    })

    it('should maintain consistent state through delegation', () => {
      Loading.show()
      Loading.show()
      expect(Loading.get()).toBe(2)
      Loading.hide()
      expect(Loading.get()).toBe(1)
      Loading.hide()
      expect(Loading.get()).toBe(0)
      expect(Loading.is()).toBe(false)
    })
  })

  describe('getItem() method', () => {
    it('should return the same instance across multiple calls', () => {
      const instance1 = Loading.getItem()
      const instance2 = Loading.getItem()
      const instance3 = Loading.getItem()

      expect(instance1).toBe(instance2)
      expect(instance2).toBe(instance3)
    })

    it('should maintain state consistency across getItem() calls', () => {
      const instance1 = Loading.getItem()
      instance1.show()

      const instance2 = Loading.getItem()

      expect(instance2.get()).toBe(1)
      expect(instance2.is()).toBe(true)
    })

    it('should share state between different static method calls', () => {
      Loading.getItem().show()
      expect(Loading.get()).toBe(1)

      Loading.getItem().show()
      expect(Loading.get()).toBe(2)

      Loading.getItem().hide()
      expect(Loading.get()).toBe(1)
    })
  })

  describe('Event handling', () => {
    it('should register event listener and call it on state change', () => {
      const listener = vi.fn()
      Loading.registrationEvent(listener)

      Loading.show()

      expect(listener).toHaveBeenCalled()
      expect(listener.mock.calls?.[0]?.[0].detail).toEqual({ loading: true })
    })

    it('should call listener multiple times for multiple state changes', () => {
      const listener = vi.fn()
      Loading.registrationEvent(listener)

      Loading.show()
      Loading.show()
      Loading.hide()
      Loading.show()

      expect(listener).toHaveBeenCalledTimes(4)

      const details = listener.mock.calls.map(call => call[0].detail)
      expect(details).toEqual([
        { loading: true },
        { loading: true },
        { loading: true },
        { loading: true }
      ])
    })

    it('should unregister event listener', () => {
      const listener = vi.fn()
      Loading.registrationEvent(listener)
      Loading.unregistrationEvent(listener)

      Loading.show()

      expect(listener).not.toHaveBeenCalled()
    })

    it('should register event with element parameter', () => {
      const spy = vi.spyOn(Loading.getItem(), 'registrationEvent')
      const listener = vi.fn()
      const element = document.createElement('div')

      Loading.registrationEvent(listener, element)

      expect(spy).toHaveBeenCalledWith(listener, element)
    })

    it('should unregister event with element parameter', () => {
      const spy = vi.spyOn(Loading.getItem(), 'unregistrationEvent')
      const listener = vi.fn()
      const element = document.createElement('div')

      Loading.unregistrationEvent(listener, element)

      expect(spy).toHaveBeenCalledWith(listener, element)
    })

    it('should handle multiple event listeners', () => {
      const listener1 = vi.fn()
      const listener2 = vi.fn()
      const listener3 = vi.fn()

      Loading.registrationEvent(listener1)
      Loading.registrationEvent(listener2)
      Loading.registrationEvent(listener3)

      Loading.show()

      expect(listener1).toHaveBeenCalled()
      expect(listener2).toHaveBeenCalled()
      expect(listener3).toHaveBeenCalled()
    })

    it('should only unregister specified listener', () => {
      const listener1 = vi.fn()
      const listener2 = vi.fn()
      const listener3 = vi.fn()

      Loading.registrationEvent(listener1)
      Loading.registrationEvent(listener2)
      Loading.registrationEvent(listener3)

      Loading.unregistrationEvent(listener2)

      Loading.show()

      expect(listener1).toHaveBeenCalled()
      expect(listener2).not.toHaveBeenCalled()
      expect(listener3).toHaveBeenCalled()
    })
  })

  describe('Integration with ServerStorage', () => {
    it('should maintain state across different Loading method calls', () => {
      Loading.show()
      expect(Loading.get()).toBe(1)

      Loading.getItem().show()
      expect(Loading.get()).toBe(2)

      Loading.hide()
      expect(Loading.get()).toBe(1)

      Loading.getItem().hide()
      expect(Loading.get()).toBe(0)
    })

    it('should share event listeners across different access methods', () => {
      const listener = vi.fn()
      Loading.registrationEvent(listener)

      Loading.show()
      expect(listener).toHaveBeenCalledTimes(1)

      Loading.getItem().show()
      expect(listener).toHaveBeenCalledTimes(2)
    })

    it('should maintain consistent instance through static methods', () => {
      const instance1 = Loading.getItem()
      Loading.show()

      const instance2 = Loading.getItem()
      Loading.show()

      const instance3 = Loading.getItem()
      Loading.hide()

      expect(instance1).toBe(instance2)
      expect(instance2).toBe(instance3)
      expect(Loading.get()).toBe(1)
    })
  })

  describe('Complex scenarios', () => {
    it('should handle alternating show/hide calls correctly', () => {
      Loading.show()
      expect(Loading.get()).toBe(1)

      Loading.hide()
      expect(Loading.get()).toBe(0)

      Loading.show()
      expect(Loading.get()).toBe(1)

      Loading.show()
      expect(Loading.get()).toBe(2)

      Loading.hide()
      expect(Loading.get()).toBe(1)

      Loading.hide()
      expect(Loading.get()).toBe(0)
    })

    it('should handle rapid successive show() calls', () => {
      for (let i = 0; i < 100; i++) {
        Loading.show()
      }
      expect(Loading.get()).toBe(100)
      expect(Loading.is()).toBe(true)
    })

    it('should handle rapid successive hide() calls', () => {
      for (let i = 0; i < 50; i++) {
        Loading.show()
      }
      for (let i = 0; i < 50; i++) {
        Loading.hide()
      }
      expect(Loading.get()).toBe(0)
      expect(Loading.is()).toBe(false)
    })

    it('should maintain state with mixed operations', () => {
      Loading.show()
      Loading.show()
      expect(Loading.get()).toBe(2)

      Loading.hide()
      expect(Loading.get()).toBe(1)

      Loading.show()
      Loading.show()
      Loading.show()
      expect(Loading.get()).toBe(4)

      Loading.hide()
      Loading.hide()
      Loading.hide()
      expect(Loading.get()).toBe(1)

      Loading.hide()
      expect(Loading.get()).toBe(0)
    })

    it('should handle event registration and unregistration sequence', () => {
      const listener = vi.fn()

      Loading.registrationEvent(listener)
      Loading.show()
      expect(listener).toHaveBeenCalledTimes(1)

      Loading.unregistrationEvent(listener)
      Loading.show()
      expect(listener).toHaveBeenCalledTimes(1)

      Loading.registrationEvent(listener)
      Loading.show()
      expect(listener).toHaveBeenCalledTimes(2)

      Loading.unregistrationEvent(listener)
      Loading.show()
      expect(listener).toHaveBeenCalledTimes(2)
    })
  })

  describe('Event details', () => {
    it('should provide correct loading status in event details', () => {
      const listener = vi.fn()
      Loading.registrationEvent(listener)

      Loading.show()
      expect(listener.mock.calls[0][0].detail.loading).toBe(true)

      Loading.hide()
      expect(listener.mock.calls[1][0].detail.loading).toBe(false)
    })

    it('should trigger events with correct loading state transitions', () => {
      const listener = vi.fn()
      Loading.registrationEvent(listener)

      Loading.show() // loading: true
      Loading.show() // loading: true
      Loading.show() // loading: true
      Loading.hide() // loading: true
      Loading.hide() // loading: true
      Loading.hide() // loading: false

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

    it('should handle multiple listeners with same event details', () => {
      const listener1 = vi.fn()
      const listener2 = vi.fn()

      Loading.registrationEvent(listener1)
      Loading.registrationEvent(listener2)

      Loading.show()
      Loading.hide()

      const details1 = listener1.mock.calls.map(call => call[0].detail)
      const details2 = listener2.mock.calls.map(call => call[0].detail)

      expect(details1).toEqual([{ loading: true }, { loading: false }])
      expect(details2).toEqual([{ loading: true }, { loading: false }])
    })
  })

  describe('Edge cases', () => {
    it('should handle hide() without prior show()', () => {
      Loading.hide()
      expect(Loading.get()).toBe(0)
      expect(Loading.is()).toBe(false)
    })

    it('should handle multiple hide() calls without show()', () => {
      Loading.hide()
      Loading.hide()
      Loading.hide()
      Loading.hide()
      expect(Loading.get()).toBe(0)
      expect(Loading.is()).toBe(false)
    })

    it('should handle show() followed by multiple hide() calls', () => {
      Loading.show()
      Loading.hide()
      Loading.hide()
      Loading.hide()
      expect(Loading.get()).toBe(0)
      expect(Loading.is()).toBe(false)
    })

    it('should handle event registration with null element', () => {
      const listener = vi.fn()
      Loading.registrationEvent(listener, null as any)

      Loading.show()

      // The event should still work since it uses window as default
      expect(listener).toHaveBeenCalled()
    })

    it('should handle event registration with undefined element', () => {
      const listener = vi.fn()
      Loading.registrationEvent(listener, undefined)

      Loading.show()

      expect(listener).toHaveBeenCalled()
    })

    it('should handle unregistration of non-existent listener', () => {
      const listener = vi.fn()
      expect(() => {
        Loading.unregistrationEvent(listener)
      }).not.toThrow()
    })

    it('should maintain consistency with large number of operations', () => {
      for (let i = 0; i < 1000; i++) {
        Loading.show()
      }
      expect(Loading.get()).toBe(1000)

      for (let i = 0; i < 500; i++) {
        Loading.hide()
      }
      expect(Loading.get()).toBe(500)

      for (let i = 0; i < 500; i++) {
        Loading.hide()
      }
      expect(Loading.get()).toBe(0)
    })
  })

  describe('Static method behavior', () => {
    it('should work as singleton pattern', () => {
      const value1 = Loading.get()
      Loading.show()
      const value2 = Loading.get()

      expect(value2).toBe(value1 + 1)
    })

    it('should provide consistent API across all static methods', () => {
      expect(typeof Loading.is).toBe('function')
      expect(typeof Loading.get).toBe('function')
      expect(typeof Loading.show).toBe('function')
      expect(typeof Loading.hide).toBe('function')
      expect(typeof Loading.getItem).toBe('function')
      expect(typeof Loading.registrationEvent).toBe('function')
      expect(typeof Loading.unregistrationEvent).toBe('function')
    })

    it('should allow chaining through getItem()', () => {
      const instance = Loading.getItem()
      instance.show()
      instance.show()
      expect(Loading.get()).toBe(2)
    })

    it('should maintain instance identity', () => {
      const instance1 = Loading.getItem()
      const instance2 = Loading.getItem()

      expect(instance1 === instance2).toBe(true)
    })
  })
})
