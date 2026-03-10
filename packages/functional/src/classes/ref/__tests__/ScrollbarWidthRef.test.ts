import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ScrollbarWidthRef } from '../ScrollbarWidthRef'
import { ScrollbarWidth } from '@dxtmisha/functional-basic'

vi.mock('@dxtmisha/functional-basic', () => ({
  ScrollbarWidth: {
    is: vi.fn()
  }
}))

describe('ScrollbarWidthRef', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with undefined and then update when ScrollbarWidth resolves', async () => {
    let resolvePromise: (val: boolean) => void
    const promise = new Promise<boolean>((resolve) => {
      resolvePromise = resolve
    })
    ;(ScrollbarWidth.is as any).mockReturnValue(promise)

    const scrollbar = new ScrollbarWidthRef()

    expect(scrollbar.item.value).toBeUndefined()
    expect(scrollbar.is.value).toBe(false)

    resolvePromise!(true)
    await promise

    expect(scrollbar.item.value).toBe(true)
    expect(scrollbar.is.value).toBe(true)
  })

  it('should handle false value from ScrollbarWidth', async () => {
    ;(ScrollbarWidth.is as any).mockResolvedValue(false)

    const scrollbar = new ScrollbarWidthRef()
    await vi.waitFor(() => scrollbar.is.value === true)

    expect(scrollbar.item.value).toBe(false)
    expect(scrollbar.is.value).toBe(true)
  })
})
