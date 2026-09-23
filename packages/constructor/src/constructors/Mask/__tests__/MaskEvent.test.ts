// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskEvent } from '../MaskEvent'
import type { MaskBuffer } from '../MaskBuffer'
import type { MaskFocus } from '../MaskFocus'
import type { MaskCharacterLength } from '../MaskCharacterLength'
import type { MaskRight } from '../MaskRight'
import type { MaskSelection } from '../MaskSelection'
import type { MaskValueBasic } from '../MaskValueBasic'
import type { MaskEmit } from '../MaskEmit'
import type { MaskData } from '../MaskData'

describe('MaskEvent', () => {
  let mockBuffer: MaskBuffer
  let mockFocus: MaskFocus
  let mockCharacterLength: MaskCharacterLength
  let mockRight: MaskRight
  let mockSelection: MaskSelection
  let mockValueBasic: MaskValueBasic
  let mockEmit: MaskEmit
  let mockData: MaskData
  let maskEvent: MaskEvent
  let inputElement: HTMLInputElement

  beforeEach(() => {
    inputElement = document.createElement('input')
    inputElement.value = '123'
    inputElement.selectionStart = 0
    inputElement.selectionEnd = 0

    mockBuffer = {
      is: vi.fn().mockReturnValue(false),
      go: vi.fn().mockReturnValue(true),
      goStart: vi.fn()
    } as unknown as MaskBuffer

    mockFocus = {
      in: vi.fn(),
      out: vi.fn()
    } as unknown as MaskFocus

    mockCharacterLength = {
      is: vi.fn().mockReturnValue(true)
    } as unknown as MaskCharacterLength

    mockRight = {
      isRight: vi.fn().mockReturnValue(false)
    } as unknown as MaskRight

    mockSelection = {
      getFirst: vi.fn().mockReturnValue(0),
      getShift: vi.fn().mockReturnValue(0)
    } as unknown as MaskSelection

    mockValueBasic = {
      getLength: vi.fn().mockReturnValue(3),
      item: ref('123')
    } as unknown as MaskValueBasic

    mockEmit = {
      set: vi.fn().mockReturnThis(),
      setType: vi.fn().mockReturnThis(),
      go: vi.fn().mockReturnThis(),
      resetType: vi.fn().mockReturnThis()
    } as unknown as MaskEmit

    mockData = {
      add: vi.fn().mockReturnValue(true),
      pop: vi.fn().mockReturnThis(),
      reset: vi.fn().mockReturnThis(),
      extra: vi.fn((chars: string[]) => chars)
    } as unknown as MaskData

    maskEvent = new MaskEvent(
      mockBuffer,
      mockFocus,
      mockCharacterLength,
      mockRight,
      mockSelection,
      mockValueBasic,
      mockEmit,
      mockData
    )
  })

  it('should handle onFocus', () => {
    const focusEvent = new FocusEvent('focus')
    Object.defineProperty(focusEvent, 'target', { value: inputElement })

    maskEvent.onFocus(focusEvent)

    expect(mockFocus.in).toHaveBeenCalled()
    expect(mockEmit.set).toHaveBeenCalledWith('focus', focusEvent)
    expect(mockEmit.go).toHaveBeenCalled()
  })

  it('should handle onBlur and emit blur', () => {
    const blurEvent = new FocusEvent('blur')
    Object.defineProperty(blurEvent, 'target', { value: inputElement })

    maskEvent.onBlur(blurEvent)

    expect(mockFocus.out).toHaveBeenCalled()
    expect(mockEmit.set).toHaveBeenCalledWith('blur', blurEvent)
    expect(mockEmit.go).toHaveBeenCalled()
  })

  it('should handle onKeydown for Backspace', () => {
    inputElement.selectionStart = 2
    inputElement.selectionEnd = 2

    const keydownEvent = new KeyboardEvent('keydown', { key: 'Backspace' })
    Object.defineProperty(keydownEvent, 'target', { value: inputElement })

    maskEvent.onKeydown(keydownEvent)

    expect(mockEmit.set).toHaveBeenCalledWith('keydown', keydownEvent)
    expect(mockData.pop).toHaveBeenCalledWith(2, 2)
  })

  it('should handle onKeydown for regular single character input', () => {
    inputElement.selectionStart = 1
    inputElement.selectionEnd = 1

    const keydownEvent = new KeyboardEvent('keydown', { key: '5' })
    Object.defineProperty(keydownEvent, 'target', { value: inputElement })

    maskEvent.onKeydown(keydownEvent)

    expect(mockBuffer.go).toHaveBeenCalledWith('5')
    expect(mockData.add).toHaveBeenCalledWith(1, '5')
  })

  it('should handle onKeyup for arrow keys', () => {
    const keyupEvent = new KeyboardEvent('keyup', { key: 'ArrowRight' })
    Object.defineProperty(keyupEvent, 'target', { value: inputElement })

    maskEvent.onKeyup(keyupEvent)

    expect(mockEmit.set).toHaveBeenCalledWith('keyup', keyupEvent)
    expect(mockSelection.getFirst).toHaveBeenCalled()
  })

  it('should handle onChange by resetting value and emitting change', () => {
    const changeEvent = new Event('change')
    Object.defineProperty(changeEvent, 'target', { value: inputElement })

    maskEvent.onChange(changeEvent)

    expect(mockData.reset).toHaveBeenCalledWith('123')
    expect(mockEmit.set).toHaveBeenCalledWith('change', changeEvent)
  })

  it('should handle onClick by adjusting selection', () => {
    const clickEvent = new MouseEvent('click')
    Object.defineProperty(clickEvent, 'target', { value: inputElement })

    maskEvent.onClick(clickEvent)

    expect(mockSelection.getFirst).toHaveBeenCalled()
  })

  it('should handle onAnimationstart for browser autofill', () => {
    const animationEvent = new Event('animationstart') as AnimationEvent
    Object.defineProperty(animationEvent, 'animationName', { value: 'onautofillstart' })
    Object.defineProperty(animationEvent, 'target', { value: inputElement })

    maskEvent.onAnimationstart(animationEvent)

    expect(mockData.reset).toHaveBeenCalledWith('123')
  })
})
