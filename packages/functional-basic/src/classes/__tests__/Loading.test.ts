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

  it('should delegate is()', () => {
    const spy = vi.spyOn(Loading.getItem(), 'is')
    Loading.is()
    expect(spy).toHaveBeenCalled()
  })

  it('should delegate get()', () => {
    const spy = vi.spyOn(Loading.getItem(), 'get')
    Loading.get()
    expect(spy).toHaveBeenCalled()
  })

  it('should delegate show()', () => {
    const spy = vi.spyOn(Loading.getItem(), 'show')
    Loading.show()
    expect(spy).toHaveBeenCalled()
    expect(Loading.get()).toBe(1)
  })

  it('should delegate hide()', () => {
    Loading.show()
    const spy = vi.spyOn(Loading.getItem(), 'hide')
    Loading.hide()
    expect(spy).toHaveBeenCalled()
    expect(Loading.get()).toBe(0)
  })

  it('should delegate registrationEvent()', () => {
    const spy = vi.spyOn(Loading.getItem(), 'registrationEvent')
    const listener = vi.fn()
    Loading.registrationEvent(listener)
    expect(spy).toHaveBeenCalledWith(listener, undefined)
  })

  it('should delegate unregistrationEvent()', () => {
    const spy = vi.spyOn(Loading.getItem(), 'unregistrationEvent')
    const listener = vi.fn()
    Loading.unregistrationEvent(listener)
    expect(spy).toHaveBeenCalledWith(listener, undefined)
  })

  it('should maintain a consistent state through delegation', () => {
    Loading.show()
    Loading.show()
    expect(Loading.get()).toBe(2)
    Loading.hide()
    expect(Loading.get()).toBe(1)
  })
})
