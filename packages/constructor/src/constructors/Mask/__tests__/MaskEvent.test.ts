// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { MaskEvent } from '../MaskEvent'

describe('MaskEvent', () => {
  it('should capture onFocus and onBlur actions correctly', () => {
    const focusMock = {
      in: vi.fn(),
      out: vi.fn()
    } as any

    const emitMock = {
      set: vi.fn().mockReturnThis(),
      setType: vi.fn().mockReturnThis(),
      go: vi.fn().mockReturnThis(),
      reset: vi.fn().mockReturnThis()
    } as any

    const ev = new MaskEvent(
      {} as any,
      focusMock,
      {} as any,
      {} as any,
      {} as any,
      {} as any,
      emitMock,
      {} as any
    )

    const focusEvent = new FocusEvent('focus')
    ev.onFocus(focusEvent)
    expect(focusMock.in).toHaveBeenCalled()
    expect(emitMock.set).toHaveBeenCalledWith('focus', focusEvent)
    expect(emitMock.go).toHaveBeenCalled()

    const blurEvent = new FocusEvent('blur')
    ev.onBlur(blurEvent)
    expect(focusMock.out).toHaveBeenCalled()
    expect(emitMock.set).toHaveBeenCalledWith('blur', blurEvent)
  })
})
