// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DraggableWrapperEvents } from '../DraggableWrapperEvents'

describe('DraggableWrapperEvents', () => {
  it('should bind listeners', () => {
    const mockProps = { disabled: false }
    const mockDelay = { start: vi.fn(), stop: vi.fn() }
    const mockClasses = {
      findClick: vi.fn()
    } as any

    const events = new DraggableWrapperEvents(
      mockProps,
      mockDelay as any,
      mockClasses,
      {} as any,
      {} as any,
      {} as any,
      {} as any,
      {} as any
    )

    expect(events.binds).toHaveProperty('onMousedown')
    expect(events.isEnd(new Event('mouseup'))).toBe(true)
    expect(events.isNoButtons(new MouseEvent('mousemove', { buttons: 0 }))).toBe(true)
  })
})
