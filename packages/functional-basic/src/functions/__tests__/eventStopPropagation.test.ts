/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from 'vitest'
import { eventStopPropagation } from '../eventStopPropagation'

describe('eventStopPropagation', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should call both preventDefault and stopPropagation on a mocked Event', () => {
      const mockEvent = {
        preventDefault: vi.fn(),
        stopPropagation: vi.fn()
      } as unknown as Event

      const returnValue = eventStopPropagation(mockEvent)

      expect(returnValue).toBeUndefined()
      expect(mockEvent.preventDefault).toHaveBeenCalledOnce()
      expect(mockEvent.stopPropagation).toHaveBeenCalledOnce()
    })

    it('should invoke preventDefault strictly before stopPropagation', () => {
      const executionOrder: string[] = []
      const mockEvent = {
        preventDefault: vi.fn(() => executionOrder.push('preventDefault')),
        stopPropagation: vi.fn(() => executionOrder.push('stopPropagation'))
      } as unknown as Event

      eventStopPropagation(mockEvent)

      expect(executionOrder).toEqual(['preventDefault', 'stopPropagation'])
    })

    it('should mark a cancelable native Event as defaultPrevented', () => {
      const event = new Event('click', { bubbles: true, cancelable: true })

      expect(event.defaultPrevented).toBe(false)
      eventStopPropagation(event)
      expect(event.defaultPrevented).toBe(true)
    })
  })

  describe('DOM propagation and bubbling interception', () => {
    it('should prevent a bubbling DOM event from reaching parent listeners', () => {
      const parentElement = document.createElement('div')
      const childElement = document.createElement('button')
      parentElement.appendChild(childElement)

      const parentListener = vi.fn()
      const childListener = vi.fn((event: Event) => {
        eventStopPropagation(event)
      })

      parentElement.addEventListener('click', parentListener)
      childElement.addEventListener('click', childListener)

      const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
      const dispatchResult = childElement.dispatchEvent(clickEvent)

      expect(childListener).toHaveBeenCalledOnce()
      expect(parentListener).not.toHaveBeenCalled()
      expect(clickEvent.defaultPrevented).toBe(true)
      expect(dispatchResult).toBe(false)
    })

    it('should allow other listeners on the same target element to execute (stopPropagation vs stopImmediatePropagation)', () => {
      const buttonElement = document.createElement('button')
      const firstListener = vi.fn((event: Event) => {
        eventStopPropagation(event)
      })
      const secondListener = vi.fn()

      buttonElement.addEventListener('click', firstListener)
      buttonElement.addEventListener('click', secondListener)

      const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
      buttonElement.dispatchEvent(clickEvent)

      expect(firstListener).toHaveBeenCalledOnce()
      expect(secondListener).toHaveBeenCalledOnce()
    })
  })

  describe('DOM Event subclasses and specialized events', () => {
    it('should handle MouseEvent instances correctly', () => {
      const mouseEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true })
      const preventDefaultSpy = vi.spyOn(mouseEvent, 'preventDefault')
      const stopPropagationSpy = vi.spyOn(mouseEvent, 'stopPropagation')

      eventStopPropagation(mouseEvent)

      expect(preventDefaultSpy).toHaveBeenCalledOnce()
      expect(stopPropagationSpy).toHaveBeenCalledOnce()
      expect(mouseEvent.defaultPrevented).toBe(true)
    })

    it('should handle KeyboardEvent instances correctly', () => {
      const keyboardEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true })
      const preventDefaultSpy = vi.spyOn(keyboardEvent, 'preventDefault')
      const stopPropagationSpy = vi.spyOn(keyboardEvent, 'stopPropagation')

      eventStopPropagation(keyboardEvent)

      expect(preventDefaultSpy).toHaveBeenCalledOnce()
      expect(stopPropagationSpy).toHaveBeenCalledOnce()
      expect(keyboardEvent.defaultPrevented).toBe(true)
    })

    it('should handle CustomEvent instances with detail payloads without mutating detail', () => {
      const detailPayload = { action: 'submit', id: 42 }
      const customEvent = new CustomEvent('custom-action', {
        bubbles: true,
        cancelable: true,
        detail: detailPayload
      })

      eventStopPropagation(customEvent)

      expect(customEvent.defaultPrevented).toBe(true)
      expect(customEvent.detail).toBe(detailPayload)
      expect(customEvent.detail).toEqual({ action: 'submit', id: 42 })
    })

    it('should handle FocusEvent instances correctly', () => {
      const focusEvent = new FocusEvent('focusin', { bubbles: true, cancelable: false })
      const preventDefaultSpy = vi.spyOn(focusEvent, 'preventDefault')
      const stopPropagationSpy = vi.spyOn(focusEvent, 'stopPropagation')

      eventStopPropagation(focusEvent)

      expect(preventDefaultSpy).toHaveBeenCalledOnce()
      expect(stopPropagationSpy).toHaveBeenCalledOnce()
    })
  })

  describe('Boundary conditions and idempotency', () => {
    it('should safely handle non-cancelable events without throwing errors', () => {
      const nonCancelableEvent = new Event('scroll', { bubbles: false, cancelable: false })

      expect(() => eventStopPropagation(nonCancelableEvent)).not.toThrow()
      expect(nonCancelableEvent.defaultPrevented).toBe(false)
    })

    it('should support multiple consecutive calls on the same event instance', () => {
      const mockEvent = {
        preventDefault: vi.fn(),
        stopPropagation: vi.fn()
      } as unknown as Event

      eventStopPropagation(mockEvent)
      eventStopPropagation(mockEvent)

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(2)
      expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(2)
    })
  })
})
