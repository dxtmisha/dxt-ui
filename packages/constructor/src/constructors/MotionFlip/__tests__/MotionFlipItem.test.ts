// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import type { MotionFlipElement } from '../MotionFlipElement'
import { MotionFlipItem } from '../MotionFlipItem'

const createMockElementManager = (className = 'd1-motion-flip'): MotionFlipElement => ({
  getClassName: () => className
} as unknown as MotionFlipElement)

const createRect = (top: number, left: number, width: number, height: number): DOMRect => ({
  top,
  left,
  width,
  height,
  right: left + width,
  bottom: top + height,
  x: left,
  y: top,
  toJSON: () => ({})
})

describe('MotionFlipItem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Lazy dependency access and identity matching', () => {
    it('should not invoke elementManager getter during construction', () => {
      const element = document.createElement('div')
      const managerGetter = vi.fn(() => createMockElementManager())

      new MotionFlipItem(element, managerGetter)

      expect(managerGetter).not.toHaveBeenCalled()
    })

    it('should match only the exact wrapped HTML element in isElement', () => {
      const element = document.createElement('div')
      const other = document.createElement('div')
      const item = new MotionFlipItem(element, () => createMockElementManager())

      expect(item.isElement(element)).toBe(true)
      expect(item.isElement(other)).toBe(false)
      expect(item.isElement(null)).toBe(false)
      expect(item.isElement(undefined)).toBe(false)
    })
  })

  describe('Rectangle measurement, CSS variables, and reset', () => {
    it('should skip CSS updates if update is called before initOriginalSize', () => {
      const element = document.createElement('div')
      const item = new MotionFlipItem(element, () => createMockElementManager())

      const result = item.update()

      expect(result).toBe(item)
      expect(element.classList.contains('d1-motion-flip__item')).toBe(false)
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-top')).toBe('')
    })

    it('should calculate delta coordinates including zero and negative values and apply item class', () => {
      const element = document.createElement('div')
      const getRectSpy = vi.spyOn(element, 'getBoundingClientRect')
        .mockReturnValueOnce(createRect(100, 50, 200, 80))
        .mockReturnValueOnce(createRect(100, 90, 0, 120))

      const item = new MotionFlipItem(element, () => createMockElementManager())

      expect(item.initOriginalSize()).toBe(item)
      expect(item.update()).toBe(item)

      expect(getRectSpy).toHaveBeenCalledTimes(2)
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-top')).toBe('0px')
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-left')).toBe('-40px')
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-width')).toBe('0px')
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-width-to')).toBe('200px')
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-height')).toBe('120px')
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-height-to')).toBe('80px')
      expect(element.classList.contains('d1-motion-flip__item')).toBe(true)
    })

    it('should use pre-calculated currentRectangle when passed to update without re-reading DOM', () => {
      const element = document.createElement('div')
      const getRectSpy = vi.spyOn(element, 'getBoundingClientRect')
        .mockReturnValueOnce(createRect(10, 20, 100, 50))

      const item = new MotionFlipItem(element, () => createMockElementManager('flip'))
      item.initOriginalSize()

      const preCalculated = createRect(30, 5, 150, 75)
      item.update(preCalculated)

      expect(getRectSpy).toHaveBeenCalledTimes(1)
      expect(element.style.getPropertyValue('--flip-sys-top')).toBe('-20px')
      expect(element.style.getPropertyValue('--flip-sys-left')).toBe('15px')
      expect(element.style.getPropertyValue('--flip-sys-width')).toBe('150px')
      expect(element.style.getPropertyValue('--flip-sys-width-to')).toBe('100px')
      expect(element.style.getPropertyValue('--flip-sys-height')).toBe('75px')
      expect(element.style.getPropertyValue('--flip-sys-height-to')).toBe('50px')
      expect(element.classList.contains('flip__item')).toBe(true)
    })

    it('should remove all system CSS properties and item class on reset', () => {
      const element = document.createElement('div')
      vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(createRect(10, 20, 100, 50))

      const item = new MotionFlipItem(element, () => createMockElementManager())
      item.initOriginalSize().update(createRect(40, 60, 120, 80))

      expect(item.reset()).toBe(item)

      expect(element.classList.contains('d1-motion-flip__item')).toBe(false)
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-top')).toBe('')
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-left')).toBe('')
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-width')).toBe('')
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-width-to')).toBe('')
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-height')).toBe('')
      expect(element.style.getPropertyValue('--d1-motion-flip-sys-height-to')).toBe('')
    })
  })
})
