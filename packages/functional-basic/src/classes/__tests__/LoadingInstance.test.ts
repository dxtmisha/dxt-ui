// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { LoadingInstance } from '../LoadingInstance'

describe('LoadingInstance', () => {
  let loading: LoadingInstance

  beforeEach(() => {
    loading = new LoadingInstance()
    vi.restoreAllMocks()
  })

  it('should return false initially for is()', () => {
    expect(loading.is()).toBe(false)
  })

  it('should return 0 initially for get()', () => {
    expect(loading.get()).toBe(0)
  })

  it('should return true for is() after show()', () => {
    loading.show()
    expect(loading.is()).toBe(true)
  })

  it('should return 1 for get() after show()', () => {
    loading.show()
    expect(loading.get()).toBe(1)
  })

  it('should increment value on show()', () => {
    loading.show()
    loading.show()

    expect(loading.get()).toBe(2)
  })

  it('should decrement value on hide()', () => {
    loading.show()
    loading.show()
    loading.hide()

    expect(loading.get()).toBe(1)
  })

  it('there should not be a decrement below 0 on hide()', () => {
    loading.hide()
    expect(loading.is()).toBe(false)
    expect(loading.get()).toBe(0)
  })

  it('should dispatch ui-loading event on show and hide', () => {
    // @ts-expect-error: Accessing protected member for testing purposes
    const dispatchSpy = vi.spyOn(loading.event!, 'dispatch')

    loading.show()
    expect(dispatchSpy).toHaveBeenCalledWith({ loading: true })

    loading.hide()
    expect(dispatchSpy).toHaveBeenCalledWith({ loading: false })
  })

  it('should register an event via registrationEvent', () => {
    const listener = vi.fn()
    loading.registrationEvent(listener)

    loading.show()
    // Since registrationEvent creates a new EventItem on a window with the listener,
    // and loading.dispatch() dispatches on loading.event (which is ALSO on a window),
    // the listener should be triggered.

    expect(listener).toHaveBeenCalled()
    expect(listener.mock.calls?.[0]?.[0].detail).toEqual({ loading: true })
  })

  it('should unregister an event via unregistrationEvent', () => {
    const listener = vi.fn()
    loading.registrationEvent(listener)
    loading.unregistrationEvent(listener)

    loading.show()
    expect(listener).not.toHaveBeenCalled()
  })
})
