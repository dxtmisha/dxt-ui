// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { SliderDragEvent } from '../SliderDragEvent'
import type { SliderEmit } from '../SliderEmit'
import type { SliderGo } from '../SliderGo'
import type { SliderProps } from '../props'

describe('SliderDragEvent', () => {
  it('should extract mouse coordinates correctly for horizontal orientation', () => {
    const props = { vertical: false } as SliderProps
    const mockEmit = {} as SliderEmit
    const mockGo = {} as SliderGo

    const dragEvent = new SliderDragEvent(props, mockEmit, mockGo)

    const mouseEvent = { clientX: 150, clientY: 200 } as MouseEvent
    expect(dragEvent.getCoordinates(mouseEvent)).toBe(150)
  })

  it('should extract mouse coordinates correctly for vertical orientation', () => {
    const props = { vertical: true } as SliderProps
    const mockEmit = {} as SliderEmit
    const mockGo = {} as SliderGo

    const dragEvent = new SliderDragEvent(props, mockEmit, mockGo)

    const mouseEvent = { clientX: 150, clientY: 200 } as MouseEvent
    expect(dragEvent.getCoordinates(mouseEvent)).toBe(200)
  })

  it('should extract touch coordinates correctly from targetTouches', () => {
    const props = { vertical: false } as SliderProps
    const mockEmit = {} as SliderEmit
    const mockGo = {} as SliderGo

    const dragEvent = new SliderDragEvent(props, mockEmit, mockGo)

    const touchEvent = {
      targetTouches: [{ clientX: 75, clientY: 80 }]
    } as unknown as TouchEvent

    expect(dragEvent.getCoordinates(touchEvent)).toBe(75)
  })

  it('should add window event listeners on start and remove on stop', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')

    const props = { vertical: false } as SliderProps
    const mockEmit = {} as SliderEmit
    const mockGo = {} as SliderGo

    const dragEvent = new SliderDragEvent(props, mockEmit, mockGo)

    dragEvent.start()
    expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', dragEvent.onPointerMove)
    expect(addEventListenerSpy).toHaveBeenCalledWith('mouseup', dragEvent.onPointerEnd)

    dragEvent.stop()
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', dragEvent.onPointerMove)
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseup', dragEvent.onPointerEnd)
  })

  it('should update position via go manager when pointer moves to a new coordinate', () => {
    const props = { vertical: false } as SliderProps
    const mockEmit = {} as SliderEmit
    const mockGo = {
      updateFromCoordinate: vi.fn()
    } as unknown as SliderGo

    const dragEvent = new SliderDragEvent(props, mockEmit, mockGo)

    const mouseEvent1 = { clientX: 100 } as MouseEvent
    dragEvent.onPointerMove(mouseEvent1)
    expect(mockGo.updateFromCoordinate).toHaveBeenCalledWith(100)

    // Moving to same coordinate should not call updateFromCoordinate again
    dragEvent.onPointerMove(mouseEvent1)
    expect(mockGo.updateFromCoordinate).toHaveBeenCalledOnce()

    // Moving to new coordinate calls updateFromCoordinate
    const mouseEvent2 = { clientX: 120 } as MouseEvent
    dragEvent.onPointerMove(mouseEvent2)
    expect(mockGo.updateFromCoordinate).toHaveBeenCalledWith(120)
  })

  it('should stop dragging and emit change event on pointer end', () => {
    const mockEmit = {
      emit: vi.fn()
    } as unknown as SliderEmit
    const mockGo = {} as SliderGo
    const props = { vertical: false } as SliderProps

    const dragEvent = new SliderDragEvent(props, mockEmit, mockGo)
    const stopSpy = vi.spyOn(dragEvent, 'stop')

    dragEvent.onPointerEnd()

    expect(stopSpy).toHaveBeenCalledOnce()
    expect(mockEmit.emit).toHaveBeenCalledWith('change')
  })
})
