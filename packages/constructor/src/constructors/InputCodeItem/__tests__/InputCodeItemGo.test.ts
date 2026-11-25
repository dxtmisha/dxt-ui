// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { InputCodeItemGo } from '../InputCodeItemGo'

describe('InputCodeItemGo', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  const createCell = (value: string = '') => {
    const container = document.createElement('div')
    const input = document.createElement('input')
    input.setAttribute('data-code', '')
    input.value = value
    container.appendChild(input)
    return { container, input }
  }

  it('should navigate next, back, focusToPrevious, focusToNext, and select text after delay', () => {
    const parent = document.createElement('div')
    const cell1 = createCell('1')
    const cell2 = createCell('')
    const cell3 = createCell('')

    parent.append(cell1.container, cell2.container, cell3.container)

    const focusSpy1 = vi.spyOn(cell1.input, 'focus')
    const focusSpy2 = vi.spyOn(cell2.input, 'focus')

    const go1 = new InputCodeItemGo({ move: true }, ref(cell1.container))
    expect(go1.getKey()).toBe('data-code')

    go1.next()
    expect(focusSpy2).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(32)
    expect(cell2.input.selectionStart).toBe(0)
    expect(cell2.input.selectionEnd).toBe(0)

    const go2 = new InputCodeItemGo({ move: true }, ref(cell2.container))
    go2.back()
    expect(focusSpy1).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(32)
    expect(cell1.input.selectionStart).toBe(0)
    expect(cell1.input.selectionEnd).toBe(1)

    go2.focusToPrevious()
    expect(focusSpy1).toHaveBeenCalledTimes(2)

    go1.focusToNext()
    expect(focusSpy2).toHaveBeenCalledTimes(2)
  })

  it('should focus previous empty or next empty cell properly', () => {
    const parent = document.createElement('div')
    const cell1 = createCell('1')
    const cell2 = createCell('')
    const cell3 = createCell('')

    parent.append(cell1.container, cell2.container, cell3.container)

    const focusSpy2 = vi.spyOn(cell2.input, 'focus')
    const focusSpy3 = vi.spyOn(cell3.input, 'focus')

    const go3 = new InputCodeItemGo({ move: true }, ref(cell3.container))
    go3.focusToPreviousEmpty()
    expect(focusSpy2).toHaveBeenCalledTimes(1)

    const go1 = new InputCodeItemGo({ move: true }, ref(cell1.container))
    go1.focusToNextEmpty()
    expect(focusSpy2).toHaveBeenCalledTimes(2)

    cell2.input.value = '2'
    go1.focusToNextEmpty()
    expect(focusSpy3).toHaveBeenCalledTimes(1)
  })

  it('should not move focus when move is false and should clear timer on unmount', () => {
    const parent = document.createElement('div')
    const cell1 = createCell('1')
    const cell2 = createCell('2')
    parent.append(cell1.container, cell2.container)

    const focusSpy2 = vi.spyOn(cell2.input, 'focus')
    const goDisabled = new InputCodeItemGo({ move: false }, ref(cell1.container))

    goDisabled.next()
    goDisabled.focusToNext()
    goDisabled.focusToPrevious()
    goDisabled.focusToNextEmpty()
    goDisabled.focusToPreviousEmpty()
    expect(focusSpy2).not.toHaveBeenCalled()

    const clearTimeoutSpy = vi.spyOn(globalThis, 'clearTimeout')
    goDisabled.selection()
    goDisabled.onUnmounted()
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1)
  })
})
