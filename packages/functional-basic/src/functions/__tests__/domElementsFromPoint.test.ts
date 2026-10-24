/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { domElementsFromPoint } from '../domElementsFromPoint'
import * as isDomRuntimeModule from '../isDomRuntime'

describe('domElementsFromPoint', () => {
  const originalElementsFromPoint = document.elementsFromPoint

  beforeEach(() => {
    document.elementsFromPoint = vi.fn().mockImplementation((x: number, y: number) => {
      const element = document.createElement('div')
      element.dataset.x = String(x)
      element.dataset.y = String(y)
      return [element]
    })
  })

  afterEach(() => {
    document.elementsFromPoint = originalElementsFromPoint
    vi.restoreAllMocks()
  })

  it('should call document.elementsFromPoint with ImageCoordinator object', () => {
    const result = domElementsFromPoint({ x: 120, y: 240 })

    expect(document.elementsFromPoint).toHaveBeenCalledWith(120, 240)
    expect(result).toHaveLength(1)
    expect((result[0] as HTMLElement).dataset.x).toBe('120')
    expect((result[0] as HTMLElement).dataset.y).toBe('240')
  })

  it('should return empty array if isDomRuntime returns false', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

    const result = domElementsFromPoint({ x: 10, y: 20 })

    expect(result).toEqual([])
  })

  it('should return empty array if document.elementsFromPoint is not supported', () => {
    // @ts-expect-error testing missing browser API
    delete document.elementsFromPoint

    const result = domElementsFromPoint({ x: 10, y: 20 })

    expect(result).toEqual([])
  })
})
