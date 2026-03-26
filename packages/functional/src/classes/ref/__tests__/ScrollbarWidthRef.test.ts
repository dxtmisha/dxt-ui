import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ScrollbarWidthRef } from '../ScrollbarWidthRef'
import { ScrollbarWidth } from '@dxtmisha/functional-basic'

vi.mock('@dxtmisha/functional-basic', () => ({
  ScrollbarWidth: {
    is: vi.fn(),
    get: vi.fn()
  }
}))

describe('ScrollbarWidthRef', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with undefined and then update when ScrollbarWidth resolves', async () => {
    let resolveIs: (val: boolean) => void
    let resolveGet: (val: number) => void

    const promiseIs = new Promise<boolean>((resolve) => {
      resolveIs = resolve
    })
    const promiseGet = new Promise<number>((resolve) => {
      resolveGet = resolve
    })

    vi.mocked(ScrollbarWidth.is).mockReturnValue(promiseIs)
    vi.mocked(ScrollbarWidth.get).mockReturnValue(promiseGet)

    const scrollbar = new ScrollbarWidthRef()

    expect(scrollbar.item.value).toBeUndefined()
    expect(scrollbar.width.value).toBeUndefined()
    expect(scrollbar.is.value).toBe(false)

    resolveIs!(true)
    resolveGet!(15)

    await Promise.all([promiseIs, promiseGet])

    expect(scrollbar.item.value).toBe(true)
    expect(scrollbar.width.value).toBe(15)
    expect(scrollbar.is.value).toBe(true)
  })

  it('should handle falsy values correctly', async () => {
    vi.mocked(ScrollbarWidth.is).mockResolvedValue(false)
    vi.mocked(ScrollbarWidth.get).mockResolvedValue(0)

    const scrollbar = new ScrollbarWidthRef()

    await vi.waitFor(() => scrollbar.is.value === true)

    expect(scrollbar.item.value).toBe(false)
    expect(scrollbar.width.value).toBe(0)
    expect(scrollbar.is.value).toBe(true)
  })
})
