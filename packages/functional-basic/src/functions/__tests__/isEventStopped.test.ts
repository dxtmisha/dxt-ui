/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it, vi } from 'vitest'
import { eventStopPropagation } from '../eventStopPropagation'
import { isEventStopped } from '../isEventStopped'

describe('isEventStopped', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
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

  describe('Boundary values, isolation, and SSR safety', () => {
    it('should return false for null, undefined, unstopped events, and unrelated event instances', () => {
      const stoppedEvent = new Event('input', { cancelable: false })
      const otherEvent = new Event('input', { cancelable: false })
      eventStopPropagation(stoppedEvent)

      expect(isEventStopped()).toBe(false)
      expect(isEventStopped(undefined)).toBe(false)
      expect(isEventStopped(null)).toBe(false)
      expect(isEventStopped(otherEvent)).toBe(false)
      expect(isEventStopped({} as unknown as Event)).toBe(false)
    })

    it('should work safely in SSR environments without window', () => {
      vi.stubGlobal('window', undefined)
      const mockEvent = {
        defaultPrevented: false,
        preventDefault: vi.fn(),
        stopPropagation: vi.fn()
      } as unknown as Event

      expect(isEventStopped(mockEvent)).toBe(false)
      eventStopPropagation(mockEvent)
      expect(isEventStopped(mockEvent)).toBe(true)
    })
  })
})
