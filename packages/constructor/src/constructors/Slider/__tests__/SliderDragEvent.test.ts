// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { SliderDragEvent } from '../SliderDragEvent'
import type { SliderEmit } from '../SliderEmit'
import type { SliderGo } from '../SliderGo'
import type { SliderProps } from '../props'

describe('SliderDragEvent', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('should extract mouse coordinates correctly for horizontal and vertical orientations', () => {
    const horizontalProps = { vertical: false } as SliderProps
    const verticalProps = { vertical: true } as SliderProps
    const mockEmit = {} as SliderEmit
    const mockGo = {} as SliderGo

    const horizontalDrag = new SliderDragEvent(horizontalProps, () => mockEmit, () => mockGo)
    const verticalDrag = new SliderDragEvent(verticalProps, () => mockEmit, () => mockGo)

    const mouseEvent = { clientX: 150, clientY: 200 } as MouseEvent
    expect(horizontalDrag.getCoordinates(mouseEvent)).toBe(150)
    expect(verticalDrag.getCoordinates(mouseEvent)).toBe(200)
  })

  it('should extract touch coordinates from targetTouches, touches, and changedTouches', () => {
    const props = { vertical: false } as SliderProps
    const dragEvent = new SliderDragEvent(props, () => ({} as SliderEmit), () => ({} as SliderGo))

    const targetTouchEvent = {
      targetTouches: [{ clientX: 75, clientY: 80 }]
    } as unknown as TouchEvent
    expect(dragEvent.getCoordinates(targetTouchEvent)).toBe(75)

    const touchesEvent = {
      targetTouches: [],
      touches: [{ clientX: 90, clientY: 110 }]
    } as unknown as TouchEvent
    expect(dragEvent.getCoordinates(touchesEvent)).toBe(90)

    const changedTouchesEvent = {
      targetTouches: [],
      touches: [],
      changedTouches: [{ clientX: 45, clientY: 55 }]
    } as unknown as TouchEvent
    expect(dragEvent.getCoordinates(changedTouchesEvent)).toBe(45)
  })

  it('should register and unregister all drag and cancellation listeners on start, stop, and onUnmounted', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')

    const props = { vertical: false } as SliderProps
    const dragEvent = new SliderDragEvent(props, () => ({} as SliderEmit), () => ({} as SliderGo))

    dragEvent.start()
    expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', dragEvent.onPointerMove)
    expect(addEventListenerSpy).toHaveBeenCalledWith('mouseup', dragEvent.onPointerEnd)
    expect(addEventListenerSpy).toHaveBeenCalledWith('touchmove', dragEvent.onPointerMove, { passive: false })
    expect(addEventListenerSpy).toHaveBeenCalledWith('touchend', dragEvent.onPointerEnd)
    expect(addEventListenerSpy).toHaveBeenCalledWith('touchcancel', dragEvent.onPointerEnd)
    expect(addEventListenerSpy).toHaveBeenCalledWith('pointercancel', dragEvent.onPointerEnd)
    expect(addEventListenerSpy).toHaveBeenCalledWith('blur', dragEvent.onPointerEnd)

    dragEvent.onUnmounted()
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', dragEvent.onPointerMove)
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseup', dragEvent.onPointerEnd)
    expect(removeEventListenerSpy).toHaveBeenCalledWith('touchmove', dragEvent.onPointerMove)
    expect(removeEventListenerSpy).toHaveBeenCalledWith('touchend', dragEvent.onPointerEnd)
    expect(removeEventListenerSpy).toHaveBeenCalledWith('touchcancel', dragEvent.onPointerEnd)
    expect(removeEventListenerSpy).toHaveBeenCalledWith('pointercancel', dragEvent.onPointerEnd)
    expect(removeEventListenerSpy).toHaveBeenCalledWith('blur', dragEvent.onPointerEnd)
  })

  it('should coalesce pointer moves via requestAnimationFrame, deduplicate coordinates, and flush on pointer end', () => {
    vi.useFakeTimers()
    const props = { vertical: false } as SliderProps
    const mockEmit = {
      emit: vi.fn()
    } as unknown as SliderEmit
    const mockGo = {
      updateFromCoordinate: vi.fn()
    } as unknown as SliderGo

    const dragEvent = new SliderDragEvent(props, () => mockEmit, () => mockGo)

    // Multiple moves in the same frame coalesce to the latest coordinate
    dragEvent.onPointerMove({ clientX: 100 } as MouseEvent)
    dragEvent.onPointerMove({ clientX: 120 } as MouseEvent)
    expect(mockGo.updateFromCoordinate).not.toHaveBeenCalled()

    vi.advanceTimersByTime(20)
    expect(mockGo.updateFromCoordinate).toHaveBeenCalledTimes(1)
    expect(mockGo.updateFromCoordinate).toHaveBeenCalledWith(120)

    // Duplicate coordinate is skipped
    dragEvent.onPointerMove({ clientX: 120 } as MouseEvent)
    vi.advanceTimersByTime(20)
    expect(mockGo.updateFromCoordinate).toHaveBeenCalledTimes(1)

    // Pending move is flushed synchronously on pointer end before change emit
    dragEvent.onPointerMove({ clientX: 140 } as MouseEvent)
    dragEvent.onPointerEnd()
    expect(mockGo.updateFromCoordinate).toHaveBeenCalledTimes(2)
    expect(mockGo.updateFromCoordinate).toHaveBeenLastCalledWith(140)
    expect(mockEmit.emit).toHaveBeenCalledWith('change')

    // Pending move is cancelled on stop/onUnmounted without applying
    dragEvent.onPointerMove({ clientX: 160 } as MouseEvent)
    dragEvent.stop()
    vi.advanceTimersByTime(20)
    expect(mockGo.updateFromCoordinate).toHaveBeenCalledTimes(2)
  })

  it('should stop dragging and emit change on pointer end, pointercancel, and window blur', () => {
    const mockEmit = {
      emit: vi.fn()
    } as unknown as SliderEmit
    const mockGo = {} as SliderGo
    const props = { vertical: false } as SliderProps

    const dragEvent = new SliderDragEvent(props, () => mockEmit, () => mockGo)
    const stopSpy = vi.spyOn(dragEvent, 'stop')

    dragEvent.start()
    window.dispatchEvent(new Event('pointercancel'))
    expect(stopSpy).toHaveBeenCalledTimes(2)
    expect(mockEmit.emit).toHaveBeenCalledWith('change')

    dragEvent.start()
    window.dispatchEvent(new Event('blur'))
    expect(mockEmit.emit).toHaveBeenCalledTimes(2)
  })
})
