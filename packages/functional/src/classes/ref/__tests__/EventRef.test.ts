// @vitest-environment jsdom
import { assert, describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { EventRef } from '../EventRef'
import { effectScope, getCurrentScope, ref, nextTick, type EffectScope } from 'vue'

describe('EventRef', () => {
  let element: HTMLElement
  let control: HTMLElement
  let fixtureScope: EffectScope

  beforeEach(() => {
    fixtureScope = effectScope()
    element = document.createElement('div')
    control = document.createElement('div')
    document.body.appendChild(element)
    document.body.appendChild(control)
  })

  afterEach(() => {
    fixtureScope.stop()
    element.remove()
    control.remove()
    vi.restoreAllMocks()
  })

  describe('initialization and reactivity', () => {
    it('initializes correctly with a non-reactive element', () => {
      const eventRef = fixtureScope.run(() => new EventRef(element, undefined, 'click', () => {}))
      assert(eventRef)
      expect(eventRef.getElement()).toBe(element)
    })

    it('initializes correctly with a ref element', () => {
      const elementRef = ref(element)
      const eventRef = fixtureScope.run(() => new EventRef(elementRef, undefined, 'click', () => {}))
      assert(eventRef)
      expect(eventRef.getElement()).toBe(element)
    })

    it('updates when the element ref changes', async () => {
      const elementRef = ref<HTMLElement | undefined>(element)
      const eventRef = fixtureScope.run(() => new EventRef(elementRef, undefined, 'click', () => {}))
      assert(eventRef)

      const newElement = document.createElement('span')
      document.body.appendChild(newElement)

      elementRef.value = newElement
      await nextTick()

      expect(eventRef.getElement()).toBe(newElement)
      document.body.removeChild(newElement)
    })

    it('uses the new control ref for listener DOM safety checks', async () => {
      const controlRef = ref<HTMLElement>(control)
      const listener = vi.fn()
      const scope = effectScope()
      const event = scope.run(() => new EventRef(element, controlRef, 'click', listener).start())
      assert(event)
      try {
        element.dispatchEvent(new Event('click'))
        expect(listener).toHaveBeenCalledTimes(1)
        controlRef.value = element
        await nextTick()
        control.remove()
        element.dispatchEvent(new Event('click'))
        expect(listener).toHaveBeenCalledTimes(2)
        expect(event.isActive()).toBe(true)
        element.remove()
        element.dispatchEvent(new Event('click'))
        expect(listener).toHaveBeenCalledTimes(2)
        expect(event.isActive()).toBe(false)
      } finally {
        scope.stop()
        document.body.append(element, control)
      }
    })
  })

  describe('Scope disposal', () => {
    let scope: EffectScope
    let eventRef: EventRef<HTMLElement | Window, Event> | undefined

    beforeEach(() => {
      scope = effectScope()
      eventRef = undefined
    })

    afterEach(() => {
      scope.stop()
      eventRef?.stop()
      vi.unstubAllGlobals()
    })

    it.each(['element', 'window'] as const)('removes listeners from a live %s when its scope stops', (targetType) => {
      const target = targetType === 'window' ? window : element
      const listener = vi.fn()
      eventRef = scope.run(() => new EventRef(target, control, ['click', 'custom'], listener).start())
      assert(eventRef)
      expect(eventRef.isActive()).toBe(true)
      target.dispatchEvent(new Event('click'))
      target.dispatchEvent(new Event('custom'))
      expect(listener).toHaveBeenCalledTimes(2)

      scope.stop()

      expect(control.isConnected).toBe(true)
      expect(element.isConnected).toBe(true)
      expect(eventRef.isActive()).toBe(false)
      target.dispatchEvent(new Event('click'))
      target.dispatchEvent(new Event('custom'))
      expect(listener).toHaveBeenCalledTimes(2)
    })

    it('disconnects ResizeObserver when its scope stops', () => {
      const observer: ResizeObserver = {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn()
      }
      vi.stubGlobal('ResizeObserver', vi.fn(function (): ResizeObserver {
        return observer
      }))
      eventRef = scope.run(() => new EventRef(element, undefined, 'resize', vi.fn()).start())
      assert(eventRef)
      expect(observer.observe).toHaveBeenCalledExactlyOnceWith(element)
      expect(observer.disconnect).not.toHaveBeenCalled()

      scope.stop()

      expect(eventRef.isActive()).toBe(false)
      expect(observer.disconnect).toHaveBeenCalledTimes(1)
      scope.stop()
      eventRef.stop()
      expect(observer.disconnect).toHaveBeenCalledTimes(1)
    })

    it('removes listeners after a target rebind and cancels a queued rebind on scope disposal', async () => {
      const target = ref<HTMLElement | undefined>(element)
      const listener = vi.fn()
      eventRef = scope.run(() => new EventRef(target, undefined, 'click', listener).start())
      assert(eventRef)
      element.dispatchEvent(new Event('click'))
      expect(listener).toHaveBeenCalledTimes(1)

      target.value = control
      await nextTick()

      expect(eventRef.getElement()).toBe(control)
      element.dispatchEvent(new Event('click'))
      expect(listener).toHaveBeenCalledTimes(1)
      control.dispatchEvent(new Event('click'))
      expect(listener).toHaveBeenCalledTimes(2)

      target.value = element
      scope.stop()
      await nextTick()

      expect(eventRef.isActive()).toBe(false)
      expect(eventRef.getElement()).toBe(control)
      element.dispatchEvent(new Event('click'))
      control.dispatchEvent(new Event('click'))
      expect(listener).toHaveBeenCalledTimes(2)
    })

    it('stops listeners restarted manually outside the owning scope', () => {
      const listener = vi.fn()
      eventRef = scope.run(() => new EventRef(window, control, 'click', listener).start())
      assert(eventRef)
      eventRef.stop().start()
      window.dispatchEvent(new Event('click'))
      expect(listener).toHaveBeenCalledTimes(1)

      scope.stop()

      expect(eventRef.isActive()).toBe(false)
      window.dispatchEvent(new Event('click'))
      expect(listener).toHaveBeenCalledTimes(1)
    })

    it('does not activate a listener that was never started', () => {
      const listener = vi.fn()
      eventRef = scope.run(() => new EventRef(window, control, 'click', listener))
      assert(eventRef)
      expect(eventRef.isActive()).toBe(false)

      scope.stop()

      expect(eventRef.isActive()).toBe(false)
      window.dispatchEvent(new Event('click'))
      expect(listener).not.toHaveBeenCalled()
    })
  })

  it('supports manual start and stop outside a scope without Vue warnings', () => {
    expect(getCurrentScope()).toBeUndefined()
    const warning = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const listener = vi.fn()
    const eventRef = new EventRef(window, control, 'click', listener)

    try {
      eventRef.start()
      window.dispatchEvent(new Event('click'))
      expect(listener).toHaveBeenCalledTimes(1)

      eventRef.stop()
      window.dispatchEvent(new Event('click'))
      expect(eventRef.isActive()).toBe(false)
      expect(listener).toHaveBeenCalledTimes(1)
      expect(warning).not.toHaveBeenCalled()
    } finally {
      eventRef.stop()
    }
  })

  describe('Inherited EventItem methods', () => {
    it('starts once and rebinds when an initially absent element appears', async () => {
      const target = ref<HTMLElement>()
      const listener = vi.fn()
      const event = fixtureScope.run(() => new EventRef(target, undefined, 'click', listener).start().start())
      assert(event)
      target.value = element
      await nextTick()
      element.dispatchEvent(new Event('click'))
      expect(listener).toHaveBeenCalledTimes(1)
      expect(event.getElement()).toBe(element)
    })

    it('replaces options on an active listener and honors once', () => {
      const listener = vi.fn()
      const event = fixtureScope.run(() => new EventRef(element, undefined, 'click', listener).start())
      assert(event)
      expect(event.setOptions({ once: true })).toBe(event)
      element.dispatchEvent(new Event('click'))
      element.dispatchEvent(new Event('click'))
      expect(listener).toHaveBeenCalledTimes(1)
      expect(event.isActive()).toBe(false)
    })

    it('preserves stored falsy listener context while dispatch supplies CustomEvent detail', () => {
      const listener = vi.fn()
      const event = fixtureScope.run(() => new EventRef(element, undefined, 'custom', listener).start())
      assert(event)
      const detail = { count: 0, active: false }
      expect(event.setDetail(detail)).toBe(event)
      event.dispatch()
      expect(listener).toHaveBeenLastCalledWith(expect.any(CustomEvent), detail)
      event.dispatch({ count: 1, active: true })
      expect(listener).toHaveBeenLastCalledWith(expect.any(CustomEvent), detail)
      const dispatched = listener.mock.calls[1]?.[0] as CustomEvent<unknown>
      expect(dispatched.detail).toEqual({ count: 1, active: true })
      expect(event.setDetail()).toBe(event)
    })

    it('we should start and stop listening', () => {
      const listener = vi.fn()
      const eventRef = fixtureScope.run(() => new EventRef(element, undefined, 'click', listener))
      assert(eventRef)

      eventRef.start()
      expect(eventRef.isActive()).toBe(true)

      element.dispatchEvent(new Event('click'))
      expect(listener).toHaveBeenCalledTimes(1)

      eventRef.stop()
      expect(eventRef.isActive()).toBe(false)

      element.dispatchEvent(new Event('click'))
      expect(listener).toHaveBeenCalledTimes(1)
    })

    it('should handle toggle', () => {
      const eventRef = fixtureScope.run(() => new EventRef(element, undefined, 'click', () => {}))
      assert(eventRef)
      eventRef.toggle(true)
      expect(eventRef.isActive()).toBe(true)
      eventRef.toggle(false)
      expect(eventRef.isActive()).toBe(false)
    })

    it('should handle reset', () => {
      const eventRef = fixtureScope.run(() => new EventRef(element, undefined, 'click', () => {}))
      assert(eventRef)
      eventRef.start()
      eventRef.reset()
      expect(eventRef.isActive()).toBe(true)
    })

    it('should dispatch events', () => {
      const listener = vi.fn()
      const eventRef = fixtureScope.run(() => new EventRef(element, undefined, 'custom', listener))
      assert(eventRef)

      eventRef.start()
      eventRef.dispatch({ data: 'test' })

      expect(listener).toHaveBeenCalled()
    })

    it('should update listeners via setters', () => {
      const listener1 = vi.fn()
      const listener2 = vi.fn()
      const eventRef = fixtureScope.run(() => new EventRef(element, undefined, 'click', listener1))
      assert(eventRef)

      eventRef.start()
      eventRef.setListener(listener2)

      element.dispatchEvent(new Event('click'))
      expect(listener1).not.toHaveBeenCalled()
      expect(listener2).toHaveBeenCalled()
    })

    it('should update type via setType', () => {
      const listener = vi.fn()
      const eventRef = fixtureScope.run(() => new EventRef(element, undefined, 'click', listener))
      assert(eventRef)

      eventRef.start()
      eventRef.setType('mouseover')

      element.dispatchEvent(new Event('click'))
      expect(listener).not.toHaveBeenCalled()

      element.dispatchEvent(new Event('mouseover'))
      expect(listener).toHaveBeenCalled()
    })
  })
})
