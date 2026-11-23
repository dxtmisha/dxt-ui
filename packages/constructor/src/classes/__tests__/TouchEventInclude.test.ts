// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { TouchEventInclude } from '../TouchEventInclude'

const createMouseEvent = (
  target: EventTarget | null,
  clientX: number = 0,
  clientY: number = 0
): MouseEvent => ({
  clientX,
  clientY,
  target
} as unknown as MouseEvent)

const createTouchEvent = (
  target: EventTarget | null,
  point?: { clientX: number, clientY: number }
): TouchEvent => ({
  targetTouches: point ? [point as unknown as Touch] : [],
  target
} as unknown as TouchEvent)

const flushMicrotasks = async (): Promise<void> => {
  await Promise.resolve()
  await Promise.resolve()
}

describe('TouchEventInclude', () => {
  let containerElement: HTMLElement

  beforeEach(() => {
    containerElement = document.createElement('div')
    containerElement.setAttribute('data-touch', 'true')
    document.body.appendChild(containerElement)
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  describe('Mouse gesture lifecycle', () => {
    it('should trigger start callback and set CSS start variables on mousedown', () => {
      const startCallback = vi.fn()
      const touchEventInclude = new TouchEventInclude(startCallback, undefined, undefined, ref(containerElement))

      touchEventInclude.onMouse.onMousedown(createMouseEvent(containerElement, 100, 150))

      expect(startCallback).toHaveBeenCalledWith({ x: 100, y: 150 }, undefined)
      expect(containerElement.style.getPropertyValue('--sys-touch-start-x')).toBe('100px')
      expect(containerElement.style.getPropertyValue('--sys-touch-start-y')).toBe('150px')
    })

    it('should trigger move callback and set CSS move variables on mousemove', async () => {
      const moveCallback = vi.fn().mockReturnValue(true)
      const touchEventInclude = new TouchEventInclude(undefined, moveCallback, undefined, ref(containerElement))

      touchEventInclude.onMouse.onMousedown(createMouseEvent(containerElement, 100, 100))
      touchEventInclude.onMouse.onMousemove(createMouseEvent(containerElement, 180, 200))

      await flushMicrotasks()

      expect(moveCallback).toHaveBeenCalledWith(
        'right',
        'bottom',
        80,
        100,
        { x: 100, y: 100 },
        { x: 180, y: 200 },
        undefined,
        undefined
      )
      expect(containerElement.style.getPropertyValue('--sys-touch-move-x')).toBe('80px')
      expect(containerElement.style.getPropertyValue('--sys-touch-move-y')).toBe('100px')
    })

    it('should skip CSS move updates when move callback returns false', async () => {
      const moveCallback = vi.fn().mockReturnValue(false)
      const touchEventInclude = new TouchEventInclude(undefined, moveCallback, undefined, ref(containerElement))

      touchEventInclude.onMouse.onMousedown(createMouseEvent(containerElement, 100, 100))
      touchEventInclude.onMouse.onMousemove(createMouseEvent(containerElement, 100, 50))

      await flushMicrotasks()

      expect(moveCallback).toHaveBeenCalledWith(
        'none',
        'none',
        0,
        -50,
        { x: 100, y: 100 },
        { x: 100, y: 50 },
        undefined,
        undefined
      )
      expect(containerElement.style.getPropertyValue('--sys-touch-move-x')).toBe('')
      expect(containerElement.style.getPropertyValue('--sys-touch-move-y')).toBe('')
    })

    it('should reset properties immediately on mouseup when end callback returns true', async () => {
      const endCallback = vi.fn().mockReturnValue(true)
      const touchEventInclude = new TouchEventInclude(undefined, undefined, endCallback, ref(containerElement))

      touchEventInclude.onMouse.onMousedown(createMouseEvent(containerElement, 100, 100))
      touchEventInclude.onMouse.onMousemove(createMouseEvent(containerElement, 150, 150))
      await flushMicrotasks()

      touchEventInclude.onMouse.onMouseup(createMouseEvent(containerElement))
      await flushMicrotasks()

      expect(endCallback).toHaveBeenCalledTimes(1)
      expect(containerElement.style.getPropertyValue('--sys-touch-start-x')).toBe('')
      expect(containerElement.style.getPropertyValue('--sys-touch-move-x')).toBe('')
      expect(touchEventInclude.mouse.value).toBeUndefined()
      expect(touchEventInclude.mouseMove.value).toBeUndefined()
    })
  })

  describe('Touch gestures, thresholds, and delayed reset', () => {
    it('should handle touchstart, touchmove, and touchcancel with left/top direction detection', async () => {
      const startCallback = vi.fn()
      const moveCallback = vi.fn().mockReturnValue(true)
      const endCallback = vi.fn().mockReturnValue(true)
      const touchEventInclude = new TouchEventInclude(startCallback, moveCallback, endCallback, ref(containerElement))

      touchEventInclude.onTouch.onTouchstart(createTouchEvent(containerElement, { clientX: 200, clientY: 200 }))
      expect(startCallback).toHaveBeenCalledWith({ x: 200, y: 200 }, expect.objectContaining({ clientX: 200, clientY: 200 }))

      touchEventInclude.onTouch.onTouchmove(createTouchEvent(containerElement, { clientX: 100, clientY: 100 }))
      await flushMicrotasks()

      expect(moveCallback).toHaveBeenCalledWith(
        'left',
        'top',
        -100,
        -100,
        { x: 200, y: 200 },
        { x: 100, y: 100 },
        expect.any(Object),
        expect.any(Object)
      )

      touchEventInclude.onTouch.onTouchcancel(createTouchEvent(containerElement))
      await flushMicrotasks()

      expect(endCallback).toHaveBeenCalledTimes(1)
      expect(touchEventInclude.touche.value).toBeUndefined()
      expect(touchEventInclude.toucheMove.value).toBeUndefined()
    })

    it('should delay reset by 400ms when end callback returns false and cancel pending timer on new gesture', async () => {
      vi.useFakeTimers()
      const endCallback = vi.fn().mockReturnValue(false)
      const touchEventInclude = new TouchEventInclude(undefined, undefined, endCallback, ref(containerElement))

      touchEventInclude.onTouch.onTouchstart(createTouchEvent(containerElement, { clientX: 10, clientY: 20 }))
      touchEventInclude.onTouch.onTouchmove(createTouchEvent(containerElement, { clientX: 10, clientY: 120 }))
      await flushMicrotasks()

      touchEventInclude.onTouch.onTouchend(createTouchEvent(containerElement))
      await flushMicrotasks()

      expect(containerElement.style.getPropertyValue('--sys-touch-move-y')).toBe('100px')

      vi.advanceTimersByTime(200)
      touchEventInclude.onTouch.onTouchstart(createTouchEvent(containerElement, { clientX: 30, clientY: 40 }))
      vi.advanceTimersByTime(300)

      expect(containerElement.style.getPropertyValue('--sys-touch-start-x')).toBe('30px')
      expect(containerElement.style.getPropertyValue('--sys-touch-start-y')).toBe('40px')

      touchEventInclude.onTouch.onTouchmove(createTouchEvent(containerElement, { clientX: 30, clientY: 150 }))
      await flushMicrotasks()
      touchEventInclude.onTouch.onTouchend(createTouchEvent(containerElement))
      await flushMicrotasks()

      vi.advanceTimersByTime(400)
      expect(containerElement.style.getPropertyValue('--sys-touch-start-x')).toBe('')
      expect(containerElement.style.getPropertyValue('--sys-touch-move-y')).toBe('')
    })
  })

  describe('Target resolution and boundary safety', () => {
    it('should resolve closest [data-touch] ancestor when element ref is omitted', () => {
      const childElement = document.createElement('span')
      containerElement.appendChild(childElement)
      const touchEventInclude = new TouchEventInclude()

      touchEventInclude.onTouch.onTouchstart(createTouchEvent(childElement, { clientX: 12, clientY: 24 }))

      expect(containerElement.style.getPropertyValue('--sys-touch-start-x')).toBe('12px')
      expect(containerElement.style.getPropertyValue('--sys-touch-start-y')).toBe('24px')
    })

    it('should safely ignore null or non-HTMLElement targets and empty targetTouches without throwing', async () => {
      const touchEventInclude = new TouchEventInclude()
      const textNode = document.createTextNode('label')

      expect(() => {
        touchEventInclude.onTouch.onTouchstart(createTouchEvent(null))
        touchEventInclude.onTouch.onTouchmove(createTouchEvent(textNode))
        touchEventInclude.onTouch.onTouchend(createTouchEvent(null))
      }).not.toThrow()

      await flushMicrotasks()
      expect(touchEventInclude.mouse.value).toEqual({ x: 0, y: 0 })
    })
  })
})
