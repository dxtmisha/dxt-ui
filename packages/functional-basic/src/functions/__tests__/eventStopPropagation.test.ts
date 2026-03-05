import { describe, it, expect, vi } from 'vitest'
import { eventStopPropagation } from '../eventStopPropagation'

describe('eventStopPropagation', () => {
  it('should call preventDefault and stopPropagation on the event', () => {
    const mockEvent = {
      preventDefault: vi.fn(),
      stopPropagation: vi.fn()
    } as unknown as Event

    eventStopPropagation(mockEvent)

    expect(mockEvent.preventDefault).toHaveBeenCalledOnce()
    expect(mockEvent.stopPropagation).toHaveBeenCalledOnce()
  })
})
