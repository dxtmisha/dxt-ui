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

  it('should handle onKeydown with undefined event.key safely without errors (autofill scenario)', () => {
    const emitMock = {
      set: vi.fn().mockReturnThis(),
      setType: vi.fn().mockReturnThis(),
      go: vi.fn().mockReturnThis(),
      reset: vi.fn().mockReturnThis()
    } as any

    const dataMock = {
      reset: vi.fn(),
      add: vi.fn(),
      pop: vi.fn()
    } as any

    const bufferMock = {
      is: vi.fn().mockReturnValue(false),
      go: vi.fn().mockReturnValue(true),
      goStart: vi.fn()
    } as any

    const ev = new MaskEvent(
      bufferMock,
      { in: vi.fn(), out: vi.fn() } as any,
      {} as any,
      { isRight: vi.fn().mockReturnValue(false) } as any,
      { getShift: vi.fn().mockReturnValue(0), getFirst: vi.fn().mockReturnValue(0) } as any,
      { getLength: vi.fn().mockReturnValue(0) } as any,
      emitMock,
      dataMock
    )

    const inputElement = document.createElement('input')
    inputElement.value = 'test'

    // Synthetic keydown without key property (browser autofill)
    const autofillKeyEvent = new Event('keydown', { bubbles: true }) as any
    Object.defineProperty(autofillKeyEvent, 'target', { value: inputElement })
    // key is undefined

    expect(() => {
      ev.onKeydown(autofillKeyEvent)
    }).not.toThrow()

    expect(emitMock.set).toHaveBeenCalledWith('keydown', autofillKeyEvent)
  })

  it('should handle onInput with insertReplacementText (browser autofill)', () => {
    const emitMock = {
      set: vi.fn().mockReturnThis(),
      setType: vi.fn().mockReturnThis(),
      resetType: vi.fn().mockReturnThis(),
      go: vi.fn().mockReturnThis(),
      reset: vi.fn().mockReturnThis()
    } as any

    const dataMock = {
      reset: vi.fn(),
      add: vi.fn(),
      pop: vi.fn()
    } as any

    const bufferMock = {
      is: vi.fn().mockReturnValue(false),
      go: vi.fn().mockReturnValue(true),
      goStart: vi.fn()
    } as any

    const ev = new MaskEvent(
      bufferMock,
      { in: vi.fn(), out: vi.fn() } as any,
      {} as any,
      { isRight: vi.fn().mockReturnValue(false) } as any,
      { getShift: vi.fn().mockReturnValue(0), getFirst: vi.fn().mockReturnValue(0) } as any,
      { getLength: vi.fn().mockReturnValue(0) } as any,
      emitMock,
      dataMock
    )

    const inputElement = document.createElement('input')
    inputElement.value = 'autofilled-value'

    const autofillInputEvent = new Event('input', { bubbles: true }) as any
    Object.defineProperty(autofillInputEvent, 'target', { value: inputElement })
    autofillInputEvent.inputType = 'insertReplacementText'

    ev.onInput(autofillInputEvent)

    expect(dataMock.reset).toHaveBeenCalledWith('autofilled-value')
    expect(emitMock.set).toHaveBeenCalledWith('input', autofillInputEvent)
  })
})
