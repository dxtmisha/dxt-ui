// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DraggableWrapperEmit } from '../DraggableWrapperEmit'

describe('DraggableWrapperEmit', () => {
  it('should schedule event emission', () => {
    vi.useFakeTimers()

    const activeEl = document.createElement('div')
    activeEl.dataset.value = 'active-val'
    const goEl = document.createElement('div')
    goEl.dataset.value = 'go-val'

    const mockItem = {
      getActive: () => ({ get: () => activeEl }),
      getGo: () => ({ get: () => goEl }),
      getSelection: () => ({ get: () => [] }),
      getValues: () => ['val1', 'val2']
    } as any

    const mockClient = {
      hasDrop: () => false
    } as any

    const mockSquare = {
      isBefore: () => true
    } as any

    const emitFn = vi.fn()

    const dragEmit = new DraggableWrapperEmit(mockItem, mockClient, mockSquare, emitFn)
    dragEmit.on()

    expect(emitFn).not.toHaveBeenCalled()
    vi.advanceTimersByTime(240)
    expect(emitFn).toHaveBeenCalledWith('position', {
      active: activeEl,
      to: goEl,
      selection: [],
      value: ['active-val', 'go-val'],
      valueActive: 'active-val',
      valueTo: 'go-val',
      valueSelection: ['val1', 'val2'],
      before: true
    })

    vi.useRealTimers()
  })
})
