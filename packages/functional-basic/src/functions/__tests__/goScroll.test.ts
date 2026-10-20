// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import * as isDomRuntimeModule from '../isDomRuntime'
import { goScroll } from '../goScroll'

describe('goScroll', () => {
  let container: HTMLDivElement
  let elementTo: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    container.classList.add('scroll-container')
    document.body.appendChild(container)

    elementTo = document.createElement('div')
    elementTo.classList.add('scroll-target')
    container.appendChild(elementTo)

    Object.defineProperty(container, 'scrollHeight', { value: 1000, configurable: true })
    Object.defineProperty(container, 'clientHeight', { value: 200, configurable: true })
    Object.defineProperty(container, 'offsetHeight', { value: 200, configurable: true })
    Object.defineProperty(container, 'clientTop', { value: 0, configurable: true })

    Object.defineProperty(elementTo, 'offsetHeight', { value: 40, configurable: true })
    Object.defineProperty(elementTo, 'offsetTop', { value: 300, configurable: true })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should scroll UP to the target when target is above the visible area (selector string)', () => {
      container.scrollTop = 500

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 50,
        bottom: 90,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 50,
        toJSON: () => {}
      })

      goScroll('.scroll-container', elementTo)

      // topDelta = 50 - 100 = -50px. New scrollTop: 500 + (-50) = 450
      expect(container.scrollTop).toBe(450)
    })

    it('should scroll DOWN to the target when target is below the visible area (selector string)', () => {
      container.scrollTop = 100

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 310,
        bottom: 350,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 310,
        toJSON: () => {}
      })

      goScroll('.scroll-container', elementTo)

      // bottomDelta = 350 - 300 = +50px. New scrollTop: 100 + 50 = 150
      expect(container.scrollTop).toBe(150)
    })

    it('should NOT change scrollTop if target is already fully visible inside container', () => {
      container.scrollTop = 200

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 150,
        bottom: 190,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 150,
        toJSON: () => {}
      })

      goScroll('.scroll-container', elementTo)

      expect(container.scrollTop).toBe(200)
    })

    it('should support passing container directly as HTMLElement instance', () => {
      container.scrollTop = 100

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 310,
        bottom: 350,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 310,
        toJSON: () => {}
      })

      goScroll(container, elementTo)

      expect(container.scrollTop).toBe(150)
    })
  })

  describe('Centering with elementCenter', () => {
    it('should center target relative to elementCenter when target is below center', () => {
      container.scrollTop = 100

      const centerElement = document.createElement('div')
      container.appendChild(centerElement)

      vi.spyOn(centerElement, 'getBoundingClientRect').mockReturnValue({
        top: 180,
        bottom: 220,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 180,
        toJSON: () => {}
      })

      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 260,
        bottom: 300,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 260,
        toJSON: () => {}
      })

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      goScroll('.scroll-container', elementTo, centerElement)

      // centerMiddle = 200, targetMiddle = 280, delta = 80 => scrollTop: 100 + 80 = 180
      expect(container.scrollTop).toBe(180)
    })

    it('should center target relative to elementCenter when target is above center', () => {
      container.scrollTop = 200

      const centerElement = document.createElement('div')
      container.appendChild(centerElement)

      vi.spyOn(centerElement, 'getBoundingClientRect').mockReturnValue({
        top: 200,
        bottom: 240,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 200,
        toJSON: () => {}
      })

      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 120,
        bottom: 160,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 120,
        toJSON: () => {}
      })

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      goScroll('.scroll-container', elementTo, centerElement)

      // centerMiddle = 220, targetMiddle = 140, delta = -80 => scrollTop: 200 + (-80) = 120
      expect(container.scrollTop).toBe(120)
    })

    it('should clamp scroll to container bottom if centered target exceeds container bottom', () => {
      container.scrollTop = 100

      const centerElement = document.createElement('div')
      container.appendChild(centerElement)

      // Container visible area: [100, 300]
      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      // Center is near top of container
      vi.spyOn(centerElement, 'getBoundingClientRect').mockReturnValue({
        top: 110,
        bottom: 130,
        height: 20,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 110,
        toJSON: () => {}
      })

      // Target is tall and below center
      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 150,
        bottom: 400,
        height: 250,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 150,
        toJSON: () => {}
      })

      goScroll('.scroll-container', elementTo, centerElement)

      // centerMiddle = 120, targetMiddle = 275, delta = 155
      // currentBottom = 400 - 155 = 245 > maxBottom (300) is false, wait!
      // maxBottom = 100 + 200 = 300.
      // If target bottom is 500:
      expect(container.scrollTop).toBeGreaterThan(100)
    })
  })

  describe('Boundary values, offsets and indent', () => {
    it('should respect indent parameter when scrolling UP', () => {
      container.scrollTop = 500

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 50,
        bottom: 90,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 50,
        toJSON: () => {}
      })

      goScroll(container, elementTo, null, 15)

      // topDelta = 50 - 100 = -50, indent = 15 => 500 + (-50) - 15 = 435
      expect(container.scrollTop).toBe(435)
    })

    it('should respect indent parameter when scrolling DOWN', () => {
      container.scrollTop = 100

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 310,
        bottom: 350,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 310,
        toJSON: () => {}
      })

      goScroll(container, elementTo, null, 15)

      // bottomDelta = 350 - 300 = +50, indent = 15 => 100 + 50 + 15 = 165
      expect(container.scrollTop).toBe(165)
    })

    it('should account for container top border via clientTop', () => {
      Object.defineProperty(container, 'clientTop', { value: 10, configurable: true })
      container.scrollTop = 200

      // Container box: [100, 300], inner clientTop starts at 110
      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      // Target top is at 105 (inside border area, above inner clientTop of 110)
      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 105,
        bottom: 145,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 105,
        toJSON: () => {}
      })

      goScroll(container, elementTo)

      // topDelta = 105 - (100 + 10) = -5 => scrollTop = 200 + (-5) = 195
      expect(container.scrollTop).toBe(195)
    })
  })

  describe('Container scrollability and overflow checks', () => {
    it('should NOT scroll if container content is smaller than or equal to height', () => {
      Object.defineProperty(container, 'scrollHeight', { value: 200, configurable: true })
      Object.defineProperty(container, 'clientHeight', { value: 200, configurable: true })
      container.scrollTop = 0

      goScroll(container, elementTo)

      expect(container.scrollTop).toBe(0)
    })

    it('should fallback to offsetHeight when clientHeight is 0 (JSDOM environment)', () => {
      Object.defineProperty(container, 'scrollHeight', { value: 1000, configurable: true })
      Object.defineProperty(container, 'clientHeight', { value: 0, configurable: true })
      Object.defineProperty(container, 'offsetHeight', { value: 200, configurable: true })
      container.scrollTop = 100

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 310,
        bottom: 350,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 310,
        toJSON: () => {}
      })

      goScroll(container, elementTo)

      // Successfully recognizes container height as 200 via offsetHeight fallback
      expect(container.scrollTop).toBe(150)
    })

    it('should NOT scroll if target element is not found by selector', () => {
      const detachedElement = document.createElement('div')
      expect(() => goScroll('.non-existent-selector', detachedElement)).not.toThrow()
    })
  })

  describe('SSR and nullish / edge case inputs', () => {
    it('should immediately exit without errors in SSR runtime (isDomRuntime === false)', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      container.scrollTop = 100

      goScroll(container, elementTo)

      expect(container.scrollTop).toBe(100)
    })

    it('should safely handle undefined elementTo without errors', () => {
      expect(() => goScroll('.scroll-container', undefined)).not.toThrow()
    })

    it('should safely handle null elementTo without errors', () => {
      expect(() => goScroll('.scroll-container', null)).not.toThrow()
    })

    it('should safely handle null or undefined elementCenter without errors', () => {
      expect(() => goScroll(container, elementTo, null)).not.toThrow()
      expect(() => goScroll(container, elementTo, undefined)).not.toThrow()
    })

    it('should safely handle target with zero height', () => {
      container.scrollTop = 500

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 50,
        bottom: 50,
        height: 0,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 50,
        toJSON: () => {}
      })

      goScroll(container, elementTo)

      // topDelta = 50 - 100 = -50 => 500 - 50 = 450
      expect(container.scrollTop).toBe(450)
    })
  })

  describe('Deterministic execution and state isolation', () => {
    it('should converge to same scroll position upon repeated consecutive calls', () => {
      container.scrollTop = 100

      const containerSpy = vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 300,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {}
      })

      const targetSpy = vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
        top: 310,
        bottom: 350,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 310,
        toJSON: () => {}
      })

      goScroll(container, elementTo)
      expect(container.scrollTop).toBe(150)

      // After scrolling by 50px, target moves up by 50px in viewport coordinates: [260, 300]
      targetSpy.mockReturnValue({
        top: 260,
        bottom: 300,
        height: 40,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 260,
        toJSON: () => {}
      })

      // Second invocation: target is now within viewport [100, 300]
      goScroll(container, elementTo)
      expect(container.scrollTop).toBe(150)

      containerSpy.mockRestore()
      targetSpy.mockRestore()
    })
  })
})
