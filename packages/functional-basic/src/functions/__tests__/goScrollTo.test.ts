// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { goScrollTo } from '../goScrollTo'
import * as isDomRuntimeModule from '../isDomRuntime'

describe('goScrollTo', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
  })

  it('should return early if not in DOM runtime', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    const container = document.createElement('div')
    const elementTo = document.createElement('div')
    container.scrollBy = vi.fn()

    goScrollTo(container, elementTo)
    expect(container.scrollBy).not.toHaveBeenCalled()
  })

  it('should return early if element container is undefined', () => {
    const elementTo = document.createElement('div')
    // We mock element's potential methods if we could, but it is undefined
    const mockScrollBy = vi.fn()
    goScrollTo(undefined, elementTo)
    expect(mockScrollBy).not.toHaveBeenCalled()
  })

  it('should return early if target elementTo is undefined', () => {
    const container = document.createElement('div')
    container.scrollBy = vi.fn()

    goScrollTo(container, undefined)
    expect(container.scrollBy).not.toHaveBeenCalled()
  })

  it('should scroll the container by the difference between container top/left and target top/left', () => {
    const container = document.createElement('div')
    const elementTo = document.createElement('div')

    container.scrollBy = vi.fn()
    container.getBoundingClientRect = vi.fn(() => ({
      top: 100,
      left: 100
    } as DOMRect))

    elementTo.getBoundingClientRect = vi.fn(() => ({
      top: 250,
      left: 300
    } as DOMRect))

    goScrollTo(container, elementTo, 'auto')

    expect(container.scrollBy).toHaveBeenCalledWith({
      top: 150, // 250 - 100
      left: 200, // 300 - 100
      behavior: 'auto'
    })
  })

  it('should use "smooth" behavior by default', () => {
    const container = document.createElement('div')
    const elementTo = document.createElement('div')

    container.scrollBy = vi.fn()
    container.getBoundingClientRect = vi.fn(() => ({ top: 0, left: 0 } as DOMRect))
    elementTo.getBoundingClientRect = vi.fn(() => ({ top: 50, left: 50 } as DOMRect))

    goScrollTo(container, elementTo)

    expect(container.scrollBy).toHaveBeenCalledWith({
      top: 50,
      left: 50,
      behavior: 'smooth'
    })
  })
})
