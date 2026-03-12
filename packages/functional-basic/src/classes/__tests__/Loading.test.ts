// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Loading } from '../Loading'

describe('Loading', () => {
  beforeEach(() => {
    // Reset static value before each test
    // @ts-expect-error: Accessing protected static member for testing purposes
    Loading.value = 0
    vi.restoreAllMocks()
  })

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

  it('should increment value on show()', () => {
    Loading.show()
    Loading.show()

    expect(Loading.get()).toBe(2)
  })

  it('should decrement value on hide()', () => {
    Loading.show()
    Loading.show()
    Loading.hide()

    expect(Loading.get()).toBe(1)
  })

  it('there should not be a decrement below 0 on hide()', () => {
    Loading.hide()
    expect(Loading.is()).toBe(false)
    expect(Loading.get()).toBe(0)
  })

  it('should dispatch ui-loading event on show and hide', () => {
    // @ts-expect-error: Accessing protected static member for testing purposes
    const dispatchSpy = vi.spyOn(Loading.event!, 'dispatch')

    Loading.show()
    expect(dispatchSpy).toHaveBeenCalledWith({ loading: true })

    Loading.hide()
    expect(dispatchSpy).toHaveBeenCalledWith({ loading: false })
  })

  it('should register event via registrationEvent', () => {
    const listener = vi.fn()
    Loading.registrationEvent(listener)

    Loading.show()
    // Since registrationEvent creates a new EventItem on a window with the listener,
    // and Loading.dispatch() dispatches on Loading.event (which is ALSO on a window),
    // the listener should be triggered.

    expect(listener).toHaveBeenCalled()
    expect(listener.mock.calls?.[0]?.[0].detail).toEqual({ loading: true })
  })

  it('should unregister event via unregistrationEvent', () => {
    const listener = vi.fn()
    Loading.registrationEvent(listener)
    Loading.unregistrationEvent(listener)

    Loading.show()
    expect(listener).not.toHaveBeenCalled()
  })
})
