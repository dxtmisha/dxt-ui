// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick, ref } from 'vue'

import type { SelectableAreaClassesData } from '../SelectableAreaClassesData'
import { SelectableAreaEmit } from '../SelectableAreaEmit'
import type { SelectableAreaItem } from '../SelectableAreaItem'

describe('SelectableAreaEmit', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Static predicate & lazy initialization', () => {
    it('should evaluate static is() strictly on emitter availability', () => {
      expect(SelectableAreaEmit.is(vi.fn())).toBe(true)
      expect(SelectableAreaEmit.is(undefined)).toBe(false)
    })

    it('should not invoke dependency factories or register watchers in constructor', async () => {
      const classesFactory = vi.fn()
      const itemRef = ref<string[]>([])
      const itemFactory = vi.fn(() => ({ item: itemRef, getNewArray: () => [...itemRef.value] }))
      const emits = vi.fn()

      const emitManager = new SelectableAreaEmit(
        classesFactory as unknown as () => SelectableAreaClassesData,
        itemFactory as unknown as () => SelectableAreaItem,
        emits
      )

      expect(classesFactory).not.toHaveBeenCalled()
      expect(itemFactory).not.toHaveBeenCalled()

      // Updating item before onMounted must NOT trigger emission
      itemRef.value = ['1']
      await nextTick()
      vi.runAllTimers()
      expect(emits).not.toHaveBeenCalled()
      emitManager.onUnmounted()
    })
  })

  describe('Event emission, coalescing, and lifecycle cleanup', () => {
    it('should emit selected payload with focus on reactive item change after onMounted', async () => {
      const item1 = document.createElement('div')
      const item2 = document.createElement('div')

      const mockClasses = {
        findItems: vi.fn().mockReturnValue([item1, item2]),
        findSelection: vi.fn().mockReturnValue([item2])
      } as unknown as SelectableAreaClassesData

      const itemRef = ref<string[]>([])
      const mockItem = {
        item: itemRef,
        getNewArray: vi.fn(() => [...itemRef.value])
      } as unknown as SelectableAreaItem

      const emits = vi.fn()
      const emitManager = new SelectableAreaEmit(() => mockClasses, () => mockItem, emits)

      emitManager.onMounted()

      itemRef.value = ['1', '2']
      await nextTick()

      // Deferred to next animation frame
      expect(emits).not.toHaveBeenCalled()
      vi.advanceTimersByTime(16)

      expect(emits).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('selected', {
        items: [item1, item2],
        itemsSelected: [item2],
        selected: ['1', '2'],
        focus: '2'
      })

      emitManager.onUnmounted()
    })

    it('should set focus to undefined when selection is empty', () => {
      const mockClasses = {
        findItems: vi.fn().mockReturnValue([]),
        findSelection: vi.fn().mockReturnValue([])
      } as unknown as SelectableAreaClassesData

      const mockItem = {
        item: ref<string[]>([]),
        getNewArray: vi.fn().mockReturnValue([])
      } as unknown as SelectableAreaItem

      const emits = vi.fn()
      const emitManager = new SelectableAreaEmit(() => mockClasses, () => mockItem, emits)

      emitManager.on()
      vi.advanceTimersByTime(16)

      expect(emits).toHaveBeenCalledWith('selected', {
        items: [],
        itemsSelected: [],
        selected: [],
        focus: undefined
      })
    })

    it('should coalesce multiple rapid on() calls within one frame into a single emit', () => {
      const mockClasses = {
        findItems: vi.fn().mockReturnValue([]),
        findSelection: vi.fn().mockReturnValue([])
      } as unknown as SelectableAreaClassesData

      let current = ['1']
      const mockItem = {
        item: ref<string[]>([]),
        getNewArray: vi.fn(() => [...current])
      } as unknown as SelectableAreaItem

      const emits = vi.fn()
      const emitManager = new SelectableAreaEmit(() => mockClasses, () => mockItem, emits)

      emitManager.on()
      current = ['1', '2']
      emitManager.on()
      current = ['1', '2', '3']
      emitManager.on()

      vi.advanceTimersByTime(16)
      expect(emits).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('selected', expect.objectContaining({
        selected: ['1', '2', '3'],
        focus: '3'
      }))
    })

    it('should cancel pending rAF and stop watcher on onUnmounted', async () => {
      const mockClasses = {
        findItems: vi.fn().mockReturnValue([]),
        findSelection: vi.fn().mockReturnValue([])
      } as unknown as SelectableAreaClassesData

      const itemRef = ref<string[]>([])
      const mockItem = {
        item: itemRef,
        getNewArray: vi.fn(() => [...itemRef.value])
      } as unknown as SelectableAreaItem

      const emits = vi.fn()
      const emitManager = new SelectableAreaEmit(() => mockClasses, () => mockItem, emits)

      emitManager.onMounted()
      itemRef.value = ['a']
      await nextTick()

      // Unmount before animation frame fires
      emitManager.onUnmounted()
      vi.advanceTimersByTime(50)
      expect(emits).not.toHaveBeenCalled()

      // Subsequent changes after unmount do not emit
      itemRef.value = ['b']
      await nextTick()
      vi.advanceTimersByTime(50)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should emit synchronously when requestAnimationFrame is unavailable and do nothing without emits', () => {
      vi.stubGlobal('requestAnimationFrame', undefined)
      const mockClasses = {
        findItems: vi.fn().mockReturnValue([]),
        findSelection: vi.fn().mockReturnValue([])
      } as unknown as SelectableAreaClassesData
      const mockItem = {
        item: ref<string[]>(['1']),
        getNewArray: vi.fn().mockReturnValue(['1'])
      } as unknown as SelectableAreaItem

      const emits = vi.fn()
      const emitManager = new SelectableAreaEmit(() => mockClasses, () => mockItem, emits)
      emitManager.on()
      expect(emits).toHaveBeenCalledTimes(1)

      const noEmitManager = new SelectableAreaEmit(() => mockClasses, () => mockItem, undefined)
      expect(() => noEmitManager.on()).not.toThrow()

      vi.unstubAllGlobals()
    })
  })
})
