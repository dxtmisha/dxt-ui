/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'
import { eventStopPropagation } from '../eventStopPropagation'
import { isEventStopped } from '../isEventStopped'

describe('isEventStopped', () => {
  it('should return false for null, undefined, or unstopped events', () => {
    const event = new Event('input', { cancelable: false })

    expect(isEventStopped()).toBe(false)
    expect(isEventStopped(undefined)).toBe(false)
    expect(isEventStopped(null)).toBe(false)
    expect(isEventStopped(event)).toBe(false)
  })

  it('should return true for cancelable events after preventDefault', () => {
    const event = new Event('click', { cancelable: true })

    expect(isEventStopped(event)).toBe(false)
    event.preventDefault()
    expect(isEventStopped(event)).toBe(true)
  })

  it('should return true for non-cancelable events stopped via eventStopPropagation', () => {
    const inputEvent = new InputEvent('input', { cancelable: false })
    const animationEvent = new Event('animationstart', { cancelable: false })

    expect(isEventStopped(inputEvent)).toBe(false)
    expect(isEventStopped(animationEvent)).toBe(false)

    eventStopPropagation(inputEvent)
    eventStopPropagation(animationEvent)

    expect(inputEvent.defaultPrevented).toBe(false)
    expect(animationEvent.defaultPrevented).toBe(false)
    expect(isEventStopped(inputEvent)).toBe(true)
    expect(isEventStopped(animationEvent)).toBe(true)
  })
})
