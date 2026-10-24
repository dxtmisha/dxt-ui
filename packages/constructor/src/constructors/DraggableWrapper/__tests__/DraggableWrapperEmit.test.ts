// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DraggableWrapperEmit } from '../DraggableWrapperEmit'

describe('DraggableWrapperEmit', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should emit position event after 240ms when hasDrop() is false', () => {
      vi.useFakeTimers()

      const activeEl = document.createElement('div')
      activeEl.dataset.value = 'active-item'
      const goEl = document.createElement('div')
      goEl.dataset.value = 'target-item'

      const mockItem = {
        getActive: () => ({ get: () => activeEl }),
        getGo: () => ({ get: () => goEl }),
        getSelection: () => ({ get: () => [] }),
        getValues: () => ['active-item']
      } as any

      const mockClient = { hasDrop: () => false } as any
      const mockSquare = { isBefore: () => true } as any
      const emitFn = vi.fn()

      const emitHelper = new DraggableWrapperEmit(
        () => mockClient,
        () => mockItem,
        () => mockSquare,
        emitFn
      )

      emitHelper.on()

      expect(emitFn).not.toHaveBeenCalled()
      vi.advanceTimersByTime(239)
      expect(emitFn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(1)
      expect(emitFn).toHaveBeenCalledTimes(1)
      expect(emitFn).toHaveBeenCalledWith('position', {
        active: activeEl,
        selection: [],
        to: goEl,
        value: ['active-item', 'target-item'],
        valueActive: 'active-item',
        valueSelection: ['active-item'],
        valueTo: 'target-item',
        before: true
      })

      vi.useRealTimers()
    })

    it('should emit drop event when hasDrop() is true', () => {
      vi.useFakeTimers()

      const activeEl = document.createElement('div')
      activeEl.dataset.value = 'card-1'
      const goEl = document.createElement('div')
      goEl.dataset.value = 'zone-2'

      const mockItem = {
        getActive: () => ({ get: () => activeEl }),
        getGo: () => ({ get: () => goEl }),
        getSelection: () => ({ get: () => [activeEl] }),
        getValues: () => ['card-1']
      } as any

      const mockClient = { hasDrop: () => true } as any
      const mockSquare = { isBefore: () => false } as any
      const emitFn = vi.fn()

      const emitHelper = new DraggableWrapperEmit(
        () => mockClient,
        () => mockItem,
        () => mockSquare,
        emitFn
      )

      emitHelper.on()
      vi.advanceTimersByTime(240)

      expect(emitFn).toHaveBeenCalledWith('drop', expect.objectContaining({
        valueActive: 'card-1',
        valueTo: 'zone-2',
        before: false
      }))

      vi.useRealTimers()
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should not emit if active element is missing', () => {
      vi.useFakeTimers()

      const goEl = document.createElement('div')
      const mockItem = {
        getActive: () => ({ get: () => undefined }),
        getGo: () => ({ get: () => goEl }),
        getSelection: () => ({ get: () => [] }),
        getValues: () => []
      } as any

      const emitFn = vi.fn()
      const emitHelper = new DraggableWrapperEmit(
        () => ({ hasDrop: () => false } as any),
        () => mockItem,
        () => ({ isBefore: () => true } as any),
        emitFn
      )

      emitHelper.on()
      vi.advanceTimersByTime(300)
      expect(emitFn).not.toHaveBeenCalled()

      vi.useRealTimers()
    })

    it('should not emit if target drop element is missing', () => {
      vi.useFakeTimers()

      const activeEl = document.createElement('div')
      const mockItem = {
        getActive: () => ({ get: () => activeEl }),
        getGo: () => ({ get: () => undefined }),
        getSelection: () => ({ get: () => [] }),
        getValues: () => []
      } as any

      const emitFn = vi.fn()
      const emitHelper = new DraggableWrapperEmit(
        () => ({ hasDrop: () => false } as any),
        () => mockItem,
        () => ({ isBefore: () => true } as any),
        emitFn
      )

      emitHelper.on()
      vi.advanceTimersByTime(300)
      expect(emitFn).not.toHaveBeenCalled()

      vi.useRealTimers()
    })

    it('should safely execute without throws when emits callback is undefined', () => {
      vi.useFakeTimers()

      const activeEl = document.createElement('div')
      const goEl = document.createElement('div')
      const mockItem = {
        getActive: () => ({ get: () => activeEl }),
        getGo: () => ({ get: () => goEl }),
        getSelection: () => ({ get: () => undefined }),
        getValues: () => []
      } as any

      const emitHelper = new DraggableWrapperEmit(
        () => ({ hasDrop: () => false } as any),
        () => mockItem,
        () => ({ isBefore: () => true } as any)
      )

      expect(() => {
        emitHelper.on()
        vi.advanceTimersByTime(300)
      }).not.toThrow()

      vi.useRealTimers()
    })

    it('should handle elements without dataset.value gracefully', () => {
      vi.useFakeTimers()

      const activeEl = document.createElement('div')
      const goEl = document.createElement('div')

      const mockItem = {
        getActive: () => ({ get: () => activeEl }),
        getGo: () => ({ get: () => goEl }),
        getSelection: () => ({ get: () => undefined }),
        getValues: () => []
      } as any

      const emitFn = vi.fn()
      const emitHelper = new DraggableWrapperEmit(
        () => ({ hasDrop: () => false } as any),
        () => mockItem,
        () => ({ isBefore: () => false } as any),
        emitFn
      )

      emitHelper.on()
      vi.advanceTimersByTime(240)

      expect(emitFn).toHaveBeenCalledWith('position', expect.objectContaining({
        value: [undefined, undefined],
        valueActive: undefined,
        valueTo: undefined
      }))

      vi.useRealTimers()
    })
  })
})
