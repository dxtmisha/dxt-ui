// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import * as functional from '@dxtmisha/functional'
import { InputCodeItemEvent } from '../InputCodeItemEvent'
import type { InputCodeItemGo } from '../InputCodeItemGo'
import type { InputCodeItemValue } from '../InputCodeItemValue'

describe('InputCodeItemEvent', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createMocks = (filled: boolean = false) => {
    const valueIsMock = vi.fn(() => filled)
    const mockValue = {
      is: valueIsMock,
      set: vi.fn()
    } as unknown as InputCodeItemValue
    const mockGo = {
      selection: vi.fn(),
      focusToPreviousEmpty: vi.fn(),
      focusToPrevious: vi.fn(),
      focusToNext: vi.fn(),
      focusToNextEmpty: vi.fn(),
      next: vi.fn(),
      back: vi.fn()
    } as unknown as InputCodeItemGo

    return { valueIsMock, mockValue, mockGo }
  }

  it('should trigger onFocus and onClick appropriately', () => {
    const { valueIsMock, mockValue, mockGo } = createMocks(true)
    const eventHandler = new InputCodeItemEvent({}, () => mockGo, () => mockValue)

    eventHandler.onFocus()
    expect(mockGo.selection).toHaveBeenCalledTimes(1)

    valueIsMock.mockReturnValue(false)
    eventHandler.onFocus()
    expect(mockGo.focusToPreviousEmpty).toHaveBeenCalledTimes(1)

    valueIsMock.mockReturnValue(true)
    eventHandler.onClick()
    expect(mockGo.focusToNextEmpty).toHaveBeenCalledTimes(1)
  })

  it('should guard IME composition and handle keyboard navigation and backspace RAF', () => {
    const { mockValue, mockGo } = createMocks(true)
    const emits = vi.fn()
    let rafCallback: FrameRequestCallback | undefined
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      rafCallback = callback
      return 77
    })
    const cancelRafSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined)

    const eventHandler = new InputCodeItemEvent(
      { index: 2, match: /[0-9]/ },
      () => mockGo,
      () => mockValue,
      emits
    )

    // IME composing must exit early
    const composingEvent = new KeyboardEvent('keydown', { key: 'Backspace', isComposing: true })
    eventHandler.onKeydown(composingEvent)
    expect(mockGo.back).not.toHaveBeenCalled()

    // Arrows
    const eventPrev = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    const prevSpy = vi.spyOn(eventPrev, 'preventDefault')
    eventHandler.onKeydown(eventPrev)
    expect(mockGo.focusToPrevious).toHaveBeenCalledTimes(1)
    expect(prevSpy).toHaveBeenCalledTimes(1)

    const eventNext = new KeyboardEvent('keydown', { key: 'ArrowRight' })
    const nextSpy = vi.spyOn(eventNext, 'preventDefault')
    eventHandler.onKeydown(eventNext)
    expect(mockGo.focusToNext).toHaveBeenCalledTimes(1)
    expect(nextSpy).toHaveBeenCalledTimes(1)

    // Backspace schedules RAF and cleans up on unmount
    eventHandler.onKeydown(new KeyboardEvent('keydown', { key: 'Backspace' }))
    expect(mockGo.back).toHaveBeenCalledTimes(1)

    eventHandler.onUnmounted()
    expect(cancelRafSpy).toHaveBeenCalledWith(77)

    // Normal RAF firing emits backspace
    eventHandler.onKeydown(new KeyboardEvent('keydown', { key: 'Backspace' }))
    rafCallback?.(0)
    expect(emits).toHaveBeenCalledWith('backspace', 2)
  })

  it('should handle single character input, multi-character input as paste, and clipboard paste', async () => {
    const { valueIsMock, mockValue, mockGo } = createMocks(true)
    const emits = vi.fn()
    const eventHandler = new InputCodeItemEvent(
      { index: 0 },
      () => mockGo,
      () => mockValue,
      emits
    )

    const singleInput = document.createElement('input')
    singleInput.value = '5'
    eventHandler.onInput({ target: singleInput } as unknown as InputEvent)

    expect(mockValue.set).toHaveBeenCalledWith('5')
    expect(emits).toHaveBeenCalledWith('input', 0, '5')
    expect(mockGo.next).toHaveBeenCalledTimes(1)

    valueIsMock.mockReturnValue(false)
    const multiInput = document.createElement('input')
    multiInput.value = '1234'
    eventHandler.onInput({ target: multiInput } as unknown as InputEvent)
    expect(emits).toHaveBeenCalledWith('paste', 0, '1234')

    vi.spyOn(functional, 'getClipboardData').mockResolvedValue('9876')
    const pasteEvent = { preventDefault: vi.fn(), stopPropagation: vi.fn() } as unknown as ClipboardEvent
    eventHandler.onPaste(pasteEvent)
    await Promise.resolve()
    expect(emits).toHaveBeenCalledWith('paste', 0, '9876')
  })
})
