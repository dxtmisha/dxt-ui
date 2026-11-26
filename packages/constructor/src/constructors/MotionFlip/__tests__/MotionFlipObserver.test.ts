// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { nextTick, reactive, ref } from 'vue'
import type { MotionFlipAction } from '../MotionFlipAction'
import type { MotionFlipElement } from '../MotionFlipElement'
import type { MotionFlipItems } from '../MotionFlipItems'
import { MotionFlipObserver } from '../MotionFlipObserver'
import type { MotionFlipProps } from '../props'

describe('MotionFlipObserver', () => {
  let observeSpy: ReturnType<typeof vi.fn>
  let disconnectSpy: ReturnType<typeof vi.fn>
  let takeRecordsSpy: ReturnType<typeof vi.fn>
  let mutationCallback: MutationCallback | undefined

  beforeEach(() => {
    observeSpy = vi.fn()
    disconnectSpy = vi.fn()
    takeRecordsSpy = vi.fn(() => [])
    mutationCallback = undefined

    class MockMutationObserver {
      constructor(callback: MutationCallback) {
        mutationCallback = callback
      }

      observe = observeSpy
      disconnect = disconnectSpy
      takeRecords = takeRecordsSpy
    }

    vi.stubGlobal('MutationObserver', MockMutationObserver)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('static is predicate', () => {
    it('should return true only when auto is truthy and disabled is falsy', () => {
      expect(MotionFlipObserver.is(undefined)).toBe(false)
      expect(MotionFlipObserver.is({})).toBe(false)
      expect(MotionFlipObserver.is({ auto: false })).toBe(false)
      expect(MotionFlipObserver.is({ auto: true, disabled: true })).toBe(false)
      expect(MotionFlipObserver.is({ auto: true })).toBe(true)
      expect(MotionFlipObserver.is({ auto: true, disabled: false })).toBe(true)
    })
  })

  describe('Lifecycle, reactivity, and mutation handling', () => {
    it('should keep constructor side-effect free without invoking getters or creating MutationObserver', () => {
      const props = reactive<MotionFlipProps>({ auto: true })
      const actionGetter = vi.fn()
      const elementGetter = vi.fn()
      const itemsGetter = vi.fn()

      new MotionFlipObserver(props, actionGetter, elementGetter, itemsGetter)

      expect(actionGetter).not.toHaveBeenCalled()
      expect(elementGetter).not.toHaveBeenCalled()
      expect(itemsGetter).not.toHaveBeenCalled()
      expect(observeSpy).not.toHaveBeenCalled()
    })

    it('should initialize items and observe childList on mount when auto is enabled', () => {
      const props = reactive<MotionFlipProps>({ auto: true })
      const node = document.createElement('div')
      const elementRef = ref<HTMLElement | undefined>(node)

      const action = {
        isEnable: vi.fn(() => true),
        go: vi.fn()
      } as unknown as MotionFlipAction
      const elementManager = {
        getElement: () => elementRef.value
      } as unknown as MotionFlipElement
      const items = {
        init: vi.fn()
      } as unknown as MotionFlipItems

      const observer = new MotionFlipObserver(
        props,
        () => action,
        () => elementManager,
        () => items
      )

      observer.onMounted()

      expect(items.init).toHaveBeenCalledTimes(1)
      expect(observeSpy).toHaveBeenCalledWith(node, { childList: true })

      mutationCallback?.([], {} as MutationObserver)
      expect(action.go).toHaveBeenCalledTimes(1)
      expect(takeRecordsSpy).toHaveBeenCalledTimes(1)

      observer.onUnmounted()
      expect(disconnectSpy).toHaveBeenCalledTimes(1)
    })

    it('should skip action.go on mutation when action.isEnable returns false', () => {
      const props = reactive<MotionFlipProps>({ auto: true })
      const node = document.createElement('div')

      const action = {
        isEnable: vi.fn(() => false),
        go: vi.fn()
      } as unknown as MotionFlipAction
      const elementManager = {
        getElement: () => node
      } as unknown as MotionFlipElement
      const items = {
        init: vi.fn()
      } as unknown as MotionFlipItems

      const observer = new MotionFlipObserver(
        props,
        () => action,
        () => elementManager,
        () => items
      )

      observer.onMounted()
      mutationCallback?.([], {} as MutationObserver)

      expect(action.go).not.toHaveBeenCalled()
      expect(takeRecordsSpy).not.toHaveBeenCalled()

      observer.onUnmounted()
    })

    it('should react to auto, disabled, and element changes and stop watcher on unmount', async () => {
      const props = reactive<MotionFlipProps>({ auto: false, disabled: false })
      const nodeA = document.createElement('div')
      const nodeB = document.createElement('div')
      const elementRef = ref<HTMLElement | undefined>(nodeA)

      const action = {
        isEnable: vi.fn(() => true),
        go: vi.fn()
      } as unknown as MotionFlipAction
      const elementManager = {
        getElement: () => elementRef.value
      } as unknown as MotionFlipElement
      const items = {
        init: vi.fn()
      } as unknown as MotionFlipItems

      const observer = new MotionFlipObserver(
        props,
        () => action,
        () => elementManager,
        () => items
      )

      observer.onMounted()
      expect(observeSpy).not.toHaveBeenCalled()

      props.auto = true
      await nextTick()
      expect(observeSpy).toHaveBeenCalledWith(nodeA, { childList: true })

      elementRef.value = nodeB
      await nextTick()
      expect(disconnectSpy).toHaveBeenCalledTimes(1)
      expect(observeSpy).toHaveBeenCalledWith(nodeB, { childList: true })

      props.disabled = true
      await nextTick()
      expect(disconnectSpy).toHaveBeenCalledTimes(2)

      observer.onUnmounted()

      // Watchers must be stopped after unmount
      props.disabled = false
      await nextTick()
      expect(observeSpy).toHaveBeenCalledTimes(2)
    })
  })
})
