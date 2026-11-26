// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import * as functional from '@dxtmisha/functional'
import { MotionStickyElement } from '../MotionStickyElement'

describe('MotionStickyElement', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  describe('element resolution (getElement, eventElement, focusElement)', () => {
    it('should return target element from ref or undefined when empty', () => {
      const target = document.createElement('div')
      const elementRef = ref<HTMLElement | undefined>(target)
      const stickyElement = new MotionStickyElement({}, elementRef)

      expect(stickyElement.getElement()).toBe(target)

      elementRef.value = undefined
      expect(stickyElement.getElement()).toBeUndefined()
    })

    it('should resolve eventElement for default window, explicit window, HTMLElement, and CSS selector', () => {
      const container = document.createElement('div')
      container.id = 'scroll-box'
      document.body.appendChild(container)

      const defaultSticky = new MotionStickyElement({}, ref())
      expect(defaultSticky.eventElement).toBe(window)

      const windowSticky = new MotionStickyElement({ elementScroll: window }, ref())
      expect(windowSticky.eventElement).toBe(window)

      const elementSticky = new MotionStickyElement({ elementScroll: container }, ref())
      expect(elementSticky.eventElement).toBe(container)

      const selectorSticky = new MotionStickyElement({ elementScroll: '#scroll-box' }, ref())
      expect(selectorSticky.eventElement).toBe(container)

      const missingSticky = new MotionStickyElement({ elementScroll: '#non-existent' }, ref())
      expect(missingSticky.eventElement).toBeUndefined()
    })

    it('should resolve focusElement to custom container or fallback to document scrollingElement/documentElement', () => {
      const container = document.createElement('div')
      container.id = 'focus-box'
      document.body.appendChild(container)

      const customSticky = new MotionStickyElement({ elementScroll: '#focus-box' }, ref())
      expect(customSticky.focusElement).toBe(container)

      const fallbackSticky = new MotionStickyElement({}, ref())
      expect(fallbackSticky.focusElement).toBe(document.scrollingElement ?? document.documentElement)
    })
  })

  describe('position calculations (getPositionStyle, getPositionElement)', () => {
    it('should return undefined for getPositionStyle when element is missing or not sticky', () => {
      const emptySticky = new MotionStickyElement({}, ref())
      expect(emptySticky.getPositionStyle()).toBeUndefined()

      const target = document.createElement('div')
      target.style.position = 'relative'
      document.body.appendChild(target)

      const nonSticky = new MotionStickyElement({}, ref(target))
      expect(nonSticky.getPositionStyle()).toBeUndefined()
    })

    it('should parse top and bottom values when element position is sticky', () => {
      const target = document.createElement('div')
      document.body.appendChild(target)

      vi.spyOn(window, 'getComputedStyle').mockReturnValue({
        position: 'sticky',
        top: '16px',
        bottom: '24px'
      } as CSSStyleDeclaration)

      const stickyElement = new MotionStickyElement({}, ref(target))
      expect(stickyElement.getPositionStyle()).toEqual({ top: 16, bottom: 24 })
    })

    it('should return undefined for auto offset while parsing numeric bottom offset', () => {
      const target = document.createElement('div')
      document.body.appendChild(target)

      vi.spyOn(window, 'getComputedStyle').mockReturnValue({
        position: 'sticky',
        top: 'auto',
        bottom: '0px'
      } as CSSStyleDeclaration)

      const stickyElement = new MotionStickyElement({}, ref(target))
      expect(stickyElement.getPositionStyle()).toEqual({ top: undefined, bottom: 0 })
    })

    it('should parse fractional and negative top and bottom CSS values accurately', () => {
      const target = document.createElement('div')
      document.body.appendChild(target)

      vi.spyOn(window, 'getComputedStyle').mockReturnValue({
        position: 'sticky',
        top: '10.5px',
        bottom: '-8px'
      } as CSSStyleDeclaration)

      const stickyElement = new MotionStickyElement({}, ref(target))
      expect(stickyElement.getPositionStyle()).toEqual({ top: 10.5, bottom: -8 })
    })

    it('should calculate relative element position against focusElement and viewport', () => {
      const container = document.createElement('div')
      const target = document.createElement('div')
      container.appendChild(target)
      document.body.appendChild(container)

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 50,
        bottom: 450,
        left: 0,
        right: 300,
        width: 300,
        height: 400,
        x: 0,
        y: 50,
        toJSON: () => ({})
      })

      vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
        top: 50,
        bottom: 100,
        left: 0,
        right: 300,
        width: 300,
        height: 50,
        x: 0,
        y: 50,
        toJSON: () => ({})
      })

      Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 })

      const stickyElement = new MotionStickyElement({ elementScroll: container }, ref(target))
      expect(stickyElement.getPositionElement()).toEqual({ top: 0, bottom: 350 })
    })

    it('should clamp negative topOffset to 0 and clamp focusElement bottom to window.innerHeight', () => {
      const container = document.createElement('div')
      const target = document.createElement('div')
      container.appendChild(target)
      document.body.appendChild(container)

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: -100,
        bottom: 1200,
        left: 0,
        right: 300,
        width: 300,
        height: 1300,
        x: 0,
        y: -100,
        toJSON: () => ({})
      })

      vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
        top: -2,
        bottom: 780,
        left: 0,
        right: 300,
        width: 300,
        height: 782,
        x: 0,
        y: -2,
        toJSON: () => ({})
      })

      Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 })

      const stickyElement = new MotionStickyElement({ elementScroll: container }, ref(target))
      expect(stickyElement.getPositionElement()).toEqual({ top: 0, bottom: 20 })
    })

    it('should account for container clientTop and bottom border in getPositionElement', () => {
      const container = document.createElement('div')
      const target = document.createElement('div')
      container.style.borderTop = '2px solid black'
      container.style.borderBottom = '3px solid black'
      Object.defineProperty(container, 'clientTop', { configurable: true, value: 2 })
      container.appendChild(target)
      document.body.appendChild(container)

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 400,
        left: 0,
        right: 300,
        width: 300,
        height: 300,
        x: 0,
        y: 100,
        toJSON: () => ({})
      })

      vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
        top: 102,
        bottom: 152,
        left: 0,
        right: 300,
        width: 300,
        height: 50,
        x: 0,
        y: 102,
        toJSON: () => ({})
      })

      Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 })

      const stickyElement = new MotionStickyElement({ elementScroll: container }, ref(target))
      expect(stickyElement.getPositionElement()).toEqual({ top: 0, bottom: 245 })
    })

    it('should return undefined for getPositionElement when target element is missing', () => {
      const stickyElement = new MotionStickyElement({}, ref())
      expect(stickyElement.getPositionElement()).toBeUndefined()
    })
  })

  describe('status and dataset updates (setStatus)', () => {
    it('should toggle classActivity, update dataset, and emit sticky only when state changes', () => {
      const target = document.createElement('div')
      const emits = vi.fn()
      const stickyElement = new MotionStickyElement(
        { classActivity: 'active-sticky' },
        ref(target),
        emits
      )

      stickyElement.setStatus(true)
      expect(target.classList.contains('active-sticky')).toBe(true)
      expect(target.dataset.sticky).toBe('sticky')
      expect(target.dataset.stickyScroll).toBe('zero')
      expect(emits).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('sticky', true)

      stickyElement.setStatus(true)
      expect(emits).toHaveBeenCalledTimes(1)

      stickyElement.setStatus(false)
      expect(target.classList.contains('active-sticky')).toBe(false)
      expect(target.dataset.sticky).toBe('none')
      expect(emits).toHaveBeenCalledTimes(2)
      expect(emits).toHaveBeenLastCalledWith('sticky', false)
    })

    it('should toggle multiple space-separated classes in classActivity without throwing', () => {
      const target = document.createElement('div')
      const stickyElement = new MotionStickyElement(
        { classActivity: '  active-sticky   is-pinned  ' },
        ref(target)
      )

      expect(() => stickyElement.setStatus(true)).not.toThrow()
      expect(target.classList.contains('active-sticky')).toBe(true)
      expect(target.classList.contains('is-pinned')).toBe(true)

      stickyElement.setStatus(false)
      expect(target.classList.contains('active-sticky')).toBe(false)
      expect(target.classList.contains('is-pinned')).toBe(false)
    })

    it('should update stickyScroll dataset to active when scroll container is scrolled', () => {
      const container = document.createElement('div')
      Object.defineProperty(container, 'scrollTop', { configurable: true, value: 120 })
      const target = document.createElement('div')

      const stickyElement = new MotionStickyElement(
        { elementScroll: container },
        ref(target)
      )

      stickyElement.setStatus(true)
      expect(target.dataset.stickyScroll).toBe('active')

      Object.defineProperty(container, 'scrollTop', { configurable: true, value: 0 })
      stickyElement.setStatus(false)
      expect(target.dataset.stickyScroll).toBe('zero')
    })

    it('should safely do nothing when element ref is undefined', () => {
      const emits = vi.fn()
      const stickyElement = new MotionStickyElement({ classActivity: 'active' }, ref(), emits)

      expect(() => stickyElement.setStatus(true)).not.toThrow()
      expect(emits).not.toHaveBeenCalled()
    })
  })

  describe('non-DOM runtime safety', () => {
    it('should return undefined from DOM getters when isDomRuntime returns false', () => {
      vi.spyOn(functional, 'isDomRuntime').mockReturnValue(false)
      const target = document.createElement('div')
      const stickyElement = new MotionStickyElement({}, ref(target))

      expect(stickyElement.eventElement).toBeUndefined()
      expect(stickyElement.focusElement).toBeUndefined()
      expect(stickyElement.getPositionStyle()).toBeUndefined()
      expect(stickyElement.getPositionElement()).toBeUndefined()
    })
  })
})
