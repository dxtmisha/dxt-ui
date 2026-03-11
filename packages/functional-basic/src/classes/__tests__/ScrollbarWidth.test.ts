// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { ScrollbarWidth } from '../ScrollbarWidth'

describe('ScrollbarWidth', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // @ts-expect-error: Accessing private static member for testing purposes
    ScrollbarWidth.calculate = false

    // Clear storage for each test
    vi.spyOn(ScrollbarWidth.getStorage(), 'get').mockReturnValue(undefined)
    vi.spyOn(ScrollbarWidth.getStorage(), 'set').mockImplementation(() => undefined)

    // Mock requestAnimationFrame
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: any) => {
      cb()
      return 0
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return a cached value if present in storage', async () => {
    vi.spyOn(ScrollbarWidth.getStorage(), 'get').mockReturnValue(12)

    const width = await ScrollbarWidth.get()
    expect(width).toBe(12)
  })

  it('should calculate and cache value if not in storage', async () => {
    vi.spyOn(ScrollbarWidth.getStorage(), 'get').mockReturnValue(-1)

    // Mock insertBefore because createElement uses it
    const spy = vi.spyOn(document.body, 'insertBefore').mockImplementation((el: any) => {
      const element = el as HTMLElement
      if (element.tagName === 'DIV' && element.style.overflowY === 'scroll') {
        Object.defineProperty(element, 'offsetWidth', { value: 100, configurable: true })
        Object.defineProperty(element, 'clientWidth', { value: 85, configurable: true })
      }
      return el as any
    })

    const width = await ScrollbarWidth.get()
    expect(width).toBe(15)
    expect(ScrollbarWidth.getStorage().set).toHaveBeenCalledWith(15)

    spy.mockRestore()
  })

  it('should return true for is() when width <= 8', async () => {
    vi.spyOn(ScrollbarWidth.getStorage(), 'get').mockReturnValue(5)
    const result = await ScrollbarWidth.is()
    expect(result).toBe(true)
  })

  it('should return false for is() when width > 8', async () => {
    vi.spyOn(ScrollbarWidth.getStorage(), 'get').mockReturnValue(15)
    const result = await ScrollbarWidth.is()
    expect(result).toBe(false)
  })

  it('should return false for is() when width is -1 (during calculation)', async () => {
    // Force calculating to true to make get() return -1
    // @ts-expect-error: Accessing private static member for testing purposes
    ScrollbarWidth.calculate = true
    vi.spyOn(ScrollbarWidth.getStorage(), 'get').mockReturnValue(-1)

    const result = await ScrollbarWidth.is()
    expect(result).toBe(false)
  })
})
