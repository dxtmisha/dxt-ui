// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { EventItem } from '../EventItem'

describe('EventItem', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })

  afterEach(() => {
    document.body.removeChild(element)
    vi.restoreAllMocks()
  })

  it('should initialize correctly', () => {
    const eventItem = new EventItem(element, 'click', () => { })
    expect(eventItem.isActive()).toBe(false)
    expect(eventItem.getElement()).toBe(element)
  })

  it('we should start and stop listening', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(element, 'click', listener)

    eventItem.start()
    expect(eventItem.isActive()).toBe(true)

    element.dispatchEvent(new Event('click'))
    expect(listener).toHaveBeenCalledTimes(1)

    eventItem.stop()
    expect(eventItem.isActive()).toBe(false)

    element.dispatchEvent(new Event('click'))
    expect(listener).toHaveBeenCalledTimes(1) // Should not increment
  })

  it('should respect once option', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(element, 'click', listener, { once: true })

    eventItem.start()
    element.dispatchEvent(new Event('click'))
    expect(listener).toHaveBeenCalledTimes(1)
    expect(eventItem.isActive()).toBe(false) // Should automatically stop

    element.dispatchEvent(new Event('click'))
    expect(listener).toHaveBeenCalledTimes(1) // Still 1
  })

  it('should dispatch custom events with details', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(element, 'custom', listener)

    eventItem.start()
    eventItem.dispatch({ foo: 'bar' })

    expect(listener).toHaveBeenCalledTimes(1)
    expect(listener).toHaveBeenCalledWith(expect.any(CustomEvent), undefined)
  })

  it('should handle setting different elements', () => {
    const newElement = document.createElement('span')
    document.body.appendChild(newElement)
    const eventItem = new EventItem(element, 'click', () => { })

    eventItem.setElement(newElement)
    expect(eventItem.getElement()).toBe(newElement)

    document.body.removeChild(newElement)
  })

  it('should handle toggle', () => {
    const eventItem = new EventItem(element, 'click', () => { })
    eventItem.toggle(true)
    expect(eventItem.isActive()).toBe(true)
    eventItem.toggle(false)
    expect(eventItem.isActive()).toBe(false)
  })
})
