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

  describe('Standard functional requirements (Happy path)', () => {
    it('should call document.elementsFromPoint with ImageCoordinator object', () => {
      const result = domElementsFromPoint({ x: 120, y: 240 })

      expect(document.elementsFromPoint).toHaveBeenCalledWith(120, 240)
      expect(result).toHaveLength(1)
      expect((result[0] as HTMLElement).dataset.x).toBe('120')
      expect((result[0] as HTMLElement).dataset.y).toBe('240')
    })

    it('should return multiple elements ordered from top to bottom', () => {
      const topElement = document.createElement('span')
      const bottomElement = document.createElement('div')

      document.elementsFromPoint = vi.fn().mockReturnValue([topElement, bottomElement])

      const result = domElementsFromPoint({ x: 50, y: 50 })

      expect(result).toHaveLength(2)
      expect(result[0]).toBe(topElement)
      expect(result[1]).toBe(bottomElement)
    })
  })

  describe('Boundary values and nullish inputs', () => {
    it('should return empty array if coordinator is undefined or omitted', () => {
      const result = domElementsFromPoint()
      expect(result).toEqual([])
    })

    it('should return empty array if coordinator is null', () => {
      const result = domElementsFromPoint(null)
      expect(result).toEqual([])
    })

    it('should handle zero and negative coordinates safely', () => {
      domElementsFromPoint({ x: 0, y: 0 })
      expect(document.elementsFromPoint).toHaveBeenCalledWith(0, 0)

      domElementsFromPoint({ x: -10, y: -20 })
      expect(document.elementsFromPoint).toHaveBeenCalledWith(-10, -20)
    })

    it('should handle fractional / floating point coordinates', () => {
      domElementsFromPoint({ x: 12.34, y: 56.78 })
      expect(document.elementsFromPoint).toHaveBeenCalledWith(12.34, 56.78)
    })
  })

  describe('SSR and environment compatibility', () => {
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

    it('should return empty array if document.elementsFromPoint is not a function', () => {
      // @ts-expect-error testing non-callable property
      document.elementsFromPoint = 'not-a-function'

      const result = domElementsFromPoint({ x: 10, y: 20 })

      expect(result).toEqual([])
    })
  })
})
