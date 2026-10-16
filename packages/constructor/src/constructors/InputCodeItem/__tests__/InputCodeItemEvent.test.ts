// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { InputCodeItemEvent } from '../InputCodeItemEvent'
import type { InputCodeItemGo } from '../InputCodeItemGo'
import type { InputCodeItemValue } from '../InputCodeItemValue'

describe('InputCodeItemEvent', () => {
  it('should trigger onFocus selection/previousEmpty checks', () => {
    const mockValue = {
      is: vi.fn()
    } as unknown as InputCodeItemValue
    const mockGo = {
      selection: vi.fn(),
      focusToPreviousEmpty: vi.fn()
    } as unknown as InputCodeItemGo

    const ev = new InputCodeItemEvent({}, mockValue, mockGo)

    mockValue.is.mockReturnValue(true)
    ev.onFocus()
    expect(mockGo.selection).toHaveBeenCalled()

    mockValue.is.mockReturnValue(false)
    ev.onFocus()
    expect(mockGo.focusToPreviousEmpty).toHaveBeenCalled()
  })

  it('should handle onKeydown movements', () => {
    const mockGo = {
      focusToPrevious: vi.fn(),
      focusToNext: vi.fn()
    } as unknown as InputCodeItemGo
    const ev = new InputCodeItemEvent({}, {} as unknown as InputCodeItemValue, mockGo)

    const eventPrev = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    const prevSpy = vi.spyOn(eventPrev, 'preventDefault')
    ev.onKeydown(eventPrev)
    expect(mockGo.focusToPrevious).toHaveBeenCalled()
    expect(prevSpy).toHaveBeenCalled()

    const eventNext = new KeyboardEvent('keydown', { key: 'ArrowRight' })
    const nextSpy = vi.spyOn(eventNext, 'preventDefault')
    ev.onKeydown(eventNext)
    expect(mockGo.focusToNext).toHaveBeenCalled()
    expect(nextSpy).toHaveBeenCalled()
  })

  it('should handle onClick selection', () => {
    const mockValue = {
      is: vi.fn()
    } as unknown as InputCodeItemValue
    const mockGo = {
      selection: vi.fn(),
      focusToNextEmpty: vi.fn()
    } as unknown as InputCodeItemGo

    const ev = new InputCodeItemEvent({ hide: false }, mockValue, mockGo)

    mockValue.is.mockReturnValue(true)
    ev.onClick()
    expect(mockGo.focusToNextEmpty).toHaveBeenCalled()

    mockValue.is.mockReturnValue(false)
    ev.onClick()
    expect(mockGo.focusToNextEmpty).toHaveBeenCalledTimes(1)
  })
})
