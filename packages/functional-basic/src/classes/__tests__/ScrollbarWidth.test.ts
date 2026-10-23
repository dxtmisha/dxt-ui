// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { ScrollbarWidth } from '../ScrollbarWidth'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('ScrollbarWidth', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // @ts-expect-error: Accessing private static member for testing purposes
    ScrollbarWidth.calculate = false
    // @ts-expect-error: Accessing private static member for testing purposes
    ScrollbarWidth.item = undefined

    ScrollbarWidth.getStorage().remove()

    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback: FrameRequestCallback) => {
      callback(0)
      return 0
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return 0 in non-DOM (SSR) runtime', async () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

    const width = await ScrollbarWidth.get()
    const isNarrow = await ScrollbarWidth.is()

    expect(width).toBe(0)
    expect(isNarrow).toBe(true)
  })

  it('should return a cached value if present in storage', async () => {
    ScrollbarWidth.getStorage().set(12)

    const width = await ScrollbarWidth.get()
    expect(width).toBe(12)
  })

  it('should calculate and cache value if not in storage', async () => {
    const insertBeforeSpy = vi.spyOn(document.body, 'insertBefore').mockImplementation(<T extends Node>(node: T): T => {
      const element = node as unknown as HTMLElement
      if (element.tagName === 'DIV' && element.style.overflowY === 'scroll') {
        Object.defineProperty(element, 'offsetWidth', { value: 100, configurable: true })
        Object.defineProperty(element, 'clientWidth', { value: 85, configurable: true })
      }
      return node
    })

    const width = await ScrollbarWidth.get()
    expect(width).toBe(15)
    expect(ScrollbarWidth.getStorage().get()).toBe(15)
    expect(ScrollbarWidth.getCalculate()).toBe(false)

    insertBeforeSpy.mockRestore()
  })

  it('should return true for is() when width <= 8', async () => {
    ScrollbarWidth.getStorage().set(5)
    const result = await ScrollbarWidth.is()
    expect(result).toBe(true)
  })

  it('should return false for is() when width > 8', async () => {
    ScrollbarWidth.getStorage().set(15)
    const result = await ScrollbarWidth.is()
    expect(result).toBe(false)
  })

  it('should return false for is() when width is -1 (during calculation without active promise)', async () => {
    // @ts-expect-error: Accessing private static member for testing purposes
    ScrollbarWidth.calculate = true

    const result = await ScrollbarWidth.is()
    expect(result).toBe(false)
  })

  it('should share calculation promise across concurrent calls to is() and get()', async () => {
    let rafCallback: FrameRequestCallback | undefined
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback: FrameRequestCallback) => {
      rafCallback = callback
      return 1
    })

    const insertBeforeSpy = vi.spyOn(document.body, 'insertBefore').mockImplementation(<T extends Node>(node: T): T => {
      const element = node as unknown as HTMLElement
      if (element.tagName === 'DIV' && element.style.overflowY === 'scroll') {
        Object.defineProperty(element, 'offsetWidth', { value: 100, configurable: true })
        Object.defineProperty(element, 'clientWidth', { value: 84, configurable: true })
      }
      return node
    })

    const isPromise = ScrollbarWidth.is()
    const getPromise = ScrollbarWidth.get()

    expect(ScrollbarWidth.getCalculate()).toBe(true)
    expect(rafCallback).toBeDefined()
    rafCallback!(0)

    const [isResult, widthResult] = await Promise.all([isPromise, getPromise])

    expect(isResult).toBe(false)
    expect(widthResult).toBe(16)
    expect(ScrollbarWidth.getStorage().get()).toBe(16)

    insertBeforeSpy.mockRestore()
  })
})
