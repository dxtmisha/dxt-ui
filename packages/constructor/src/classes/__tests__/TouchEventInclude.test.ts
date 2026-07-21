// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { TouchEventInclude } from '../TouchEventInclude'

describe('TouchEventInclude', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    element.setAttribute('data-touch', 'true')
    document.body.appendChild(element)
  })

  it('should trigger start callback and set CSS start variables on mousedown', () => {
    const startMock = vi.fn()
    const touchEventInc = new TouchEventInclude(startMock, undefined, undefined, ref(element))

    const event = {
      clientX: 100,
      clientY: 150,
      target: element
    } as any

    touchEventInc.onMouse.onMousedown(event)

    expect(startMock).toHaveBeenCalledWith({ x: 100, y: 150 }, undefined)
    expect(element.style.getPropertyValue('--sys-touch-start-x')).toBe('100px')
    expect(element.style.getPropertyValue('--sys-touch-start-y')).toBe('150px')
  })

  it('should trigger move callback and set CSS move variables on mousemove', async () => {
    const moveMock = vi.fn().mockReturnValue(true)
    const touchEventInc = new TouchEventInclude(undefined, moveMock, undefined, ref(element))

    touchEventInc.onMouse.onMousedown({ clientX: 100, clientY: 100, target: element } as any)
    touchEventInc.onMouse.onMousemove({ clientX: 180, clientY: 200, target: element } as any)

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(moveMock).toHaveBeenCalledWith(
      'right',
      'bottom',
      80,
      100,
      { x: 100, y: 100 },
      { x: 180, y: 200 },
      undefined,
      undefined
    )

    expect(element.style.getPropertyValue('--sys-touch-move-x')).toBe('80px')
    expect(element.style.getPropertyValue('--sys-touch-move-y')).toBe('100px')
  })

  it('should reset properties on mouseup', async () => {
    const endMock = vi.fn().mockReturnValue(true)
    const touchEventInc = new TouchEventInclude(undefined, undefined, endMock, ref(element))

    touchEventInc.onMouse.onMousedown({ clientX: 100, clientY: 100, target: element } as any)
    touchEventInc.onMouse.onMousemove({ clientX: 150, clientY: 150, target: element } as any)

    touchEventInc.onMouse.onMouseup({ target: element } as any)

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(endMock).toHaveBeenCalled()
    expect(element.style.getPropertyValue('--sys-touch-start-x')).toBe('')
    expect(element.style.getPropertyValue('--sys-touch-move-x')).toBe('')
  })

  it('should handle touchstart and touchmove events correctly', async () => {
    const startMock = vi.fn()
    const moveMock = vi.fn().mockReturnValue(true)
    const touchEventInc = new TouchEventInclude(startMock, moveMock, undefined, ref(element))

    const startEvent = {
      targetTouches: [{ clientX: 200, clientY: 200 }],
      target: element
    } as any

    touchEventInc.onTouch.onTouchstart(startEvent)
    expect(startMock).toHaveBeenCalled()

    const moveEvent = {
      targetTouches: [{ clientX: 100, clientY: 100 }],
      target: element
    } as any

    touchEventInc.onTouch.onTouchmove(moveEvent)

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(moveMock).toHaveBeenCalledWith(
      'left',
      'top',
      -100,
      -100,
      { x: 200, y: 200 },
      { x: 100, y: 100 },
      expect.any(Object),
      expect.any(Object)
    )
  })
})
