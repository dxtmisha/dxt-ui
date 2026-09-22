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

  it('should handle onInput without preceding keydown (Safari and Firefox autofill)', () => {
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

    const maskEvent = new MaskEvent(
      bufferMock,
      { in: vi.fn(), out: vi.fn() } as any,
      { is: vi.fn().mockReturnValue(false) } as any,
      { isRight: vi.fn().mockReturnValue(false) } as any,
      { getShift: vi.fn().mockReturnValue(0), getFirst: vi.fn().mockReturnValue(0) } as any,
      { getLength: vi.fn().mockReturnValue(0), item: { value: '' } } as any,
      emitMock,
      dataMock
    )

    const inputElement = document.createElement('input')
    inputElement.value = '+1 555 123 4567'

    // In Safari and Firefox, autofill fires input event without keydown and inputType is empty or undefined
    const safariInputEvent = new Event('input', { bubbles: true }) as any
    Object.defineProperty(safariInputEvent, 'target', { value: inputElement })
    safariInputEvent.inputType = ''

    maskEvent.onInput(safariInputEvent)

    expect(dataMock.reset).toHaveBeenCalledWith('+1 555 123 4567')
    expect(emitMock.set).toHaveBeenCalledWith('input', safariInputEvent)
  })

  it('should handle onInput with matching autofill selector (Firefox / WebKit)', () => {
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

    const maskEvent = new MaskEvent(
      bufferMock,
      { in: vi.fn(), out: vi.fn() } as any,
      { is: vi.fn().mockReturnValue(false) } as any,
      { isRight: vi.fn().mockReturnValue(false) } as any,
      { getShift: vi.fn().mockReturnValue(0), getFirst: vi.fn().mockReturnValue(0) } as any,
      { getLength: vi.fn().mockReturnValue(0), item: { value: '' } } as any,
      emitMock,
      dataMock
    )

    const inputElement = document.createElement('input')
    inputElement.value = 'firefox-autofill'
    vi.spyOn(inputElement, 'matches').mockImplementation((selector: string) => selector === ':autofill')

    const firefoxInputEvent = new Event('input', { bubbles: true }) as any
    Object.defineProperty(firefoxInputEvent, 'target', { value: inputElement })
    firefoxInputEvent.inputType = 'insertText'

    maskEvent.onInput(firefoxInputEvent)

    expect(dataMock.reset).toHaveBeenCalledWith('firefox-autofill')
    expect(emitMock.set).toHaveBeenCalledWith('input', firefoxInputEvent)
  })

  it('should handle onAnimationstart for d1-mask-autofill (background / page-load autofill)', () => {
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

    const maskEvent = new MaskEvent(
      bufferMock,
      { in: vi.fn(), out: vi.fn() } as any,
      { is: vi.fn().mockReturnValue(false) } as any,
      { isRight: vi.fn().mockReturnValue(false) } as any,
      { getShift: vi.fn().mockReturnValue(0), getFirst: vi.fn().mockReturnValue(0) } as any,
      { getLength: vi.fn().mockReturnValue(0), item: { value: '' } } as any,
      emitMock,
      dataMock
    )

    const inputElement = document.createElement('input')
    inputElement.value = 'background-value'

    const animationEvent = new Event('animationstart', { bubbles: true }) as any
    Object.defineProperty(animationEvent, 'target', { value: inputElement })
    animationEvent.animationName = 'design-mask-autofill'

    maskEvent.onAnimationstart(animationEvent)

    expect(dataMock.reset).toHaveBeenCalledWith('background-value')
    expect(emitMock.set).toHaveBeenCalledWith('input', animationEvent)
  })

  it('should detect and reset autofilled value on onFocus', () => {
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

    const maskEvent = new MaskEvent(
      bufferMock,
      { in: vi.fn(), out: vi.fn() } as any,
      { is: vi.fn().mockReturnValue(false) } as any,
      { isRight: vi.fn().mockReturnValue(false) } as any,
      { getShift: vi.fn().mockReturnValue(0), getFirst: vi.fn().mockReturnValue(0) } as any,
      { getLength: vi.fn().mockReturnValue(0), item: { value: '' } } as any,
      emitMock,
      dataMock
    )

    const inputElement = document.createElement('input')
    inputElement.value = 'initial-autofilled'

    const focusEvent = new FocusEvent('focus', { bubbles: true })
    Object.defineProperty(focusEvent, 'target', { value: inputElement })

    maskEvent.onFocus(focusEvent)

    expect(dataMock.reset).toHaveBeenCalledWith('initial-autofilled')
    expect(emitMock.set).toHaveBeenCalledWith('focus', focusEvent)
  })
})
