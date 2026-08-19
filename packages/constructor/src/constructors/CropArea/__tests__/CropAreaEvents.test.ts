// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { reactive, ref } from 'vue'
import { CropAreaCoordinates } from '../CropAreaCoordinates'
import { CropAreaElement } from '../CropAreaElement'
import { CropAreaEmit } from '../CropAreaEmit'
import { CropAreaEvents } from '../CropAreaEvents'
import { CropAreaPosition } from '../CropAreaPosition'
import { CropAreaStyle } from '../CropAreaStyle'
import type { CropAreaProps } from '../props'

describe('CropAreaEvents', () => {
  const createInstances = (propsInit: Partial<CropAreaProps> = {}) => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const props = reactive({
      value: [10, 10, 10, 10] as [number, number, number, number],
      min: 8,
      ...propsInit
    }) as CropAreaProps

    const emits = vi.fn()
    const elementItem = new CropAreaElement(elementRef, 'd1-crop-area')
    const style = new CropAreaStyle(elementRef, 'd1-crop-area')
    const position = new CropAreaPosition(props, style)
    const emit = new CropAreaEmit(position, emits)
    const coordinates = new CropAreaCoordinates(elementItem, position, emit)
    const events = new CropAreaEvents(props, elementItem, coordinates)

    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({
      width: 200,
      height: 200,
      top: 0,
      left: 0,
      right: 200,
      bottom: 200,
      x: 0,
      y: 0,
      toJSON: () => {}
    })

    return { coordinates, element, elementItem, emit, emits, events, position, props, style }
  }

  it('should provide binds with onMousedown, onTouchstart, tabindex, and onKeydown', () => {
    const { events } = createInstances()
    expect(events.binds).toHaveProperty('onMousedown')
    expect(events.binds).toHaveProperty('onTouchstart')
    expect(events.binds).toHaveProperty('onKeydown')
    expect(events.binds.tabindex).toBe(0)
  })

  it('should handle custom and disabled tabindex', () => {
    const { events: eventsCustom } = createInstances({ tabindex: 2 })
    expect(eventsCustom.tabindex).toBe(2)

    const { events: eventsDisabled } = createInstances({ disabled: true })
    expect(eventsDisabled.tabindex).toBeUndefined()
  })

  it('should handle keyboard navigation with arrow keys for moving', () => {
    const { coordinates, events } = createInstances({ step: 2 })
    const moveByStepSpy = vi.spyOn(coordinates, 'moveByStep')

    const createKeyEvent = (key: string, options: KeyboardEventInit = {}) => {
      const event = new KeyboardEvent('keydown', { key, cancelable: true, ...options })
      vi.spyOn(event, 'preventDefault')
      return event
    }

    // ArrowUp (move: deltaX = 0, deltaY = -2)
    const upEvent = createKeyEvent('ArrowUp')
    events.onKeydown(upEvent)
    expect(upEvent.preventDefault).toHaveBeenCalled()
    expect(moveByStepSpy).toHaveBeenCalledWith(0, -2)

    // ArrowDown (move: deltaX = 0, deltaY = 2)
    const downEvent = createKeyEvent('ArrowDown')
    events.onKeydown(downEvent)
    expect(downEvent.preventDefault).toHaveBeenCalled()
    expect(moveByStepSpy).toHaveBeenCalledWith(0, 2)

    // ArrowLeft (move: deltaX = -2, deltaY = 0)
    const leftEvent = createKeyEvent('ArrowLeft')
    events.onKeydown(leftEvent)
    expect(leftEvent.preventDefault).toHaveBeenCalled()
    expect(moveByStepSpy).toHaveBeenCalledWith(-2, 0)

    // ArrowRight (move: deltaX = 2, deltaY = 0)
    const rightEvent = createKeyEvent('ArrowRight')
    events.onKeydown(rightEvent)
    expect(rightEvent.preventDefault).toHaveBeenCalled()
    expect(moveByStepSpy).toHaveBeenCalledWith(2, 0)
  })

  it('should handle Shift + arrow keys for resizing primary edges (right/bottom)', () => {
    const { coordinates, events } = createInstances({ step: 1 })
    const resizeByStepSpy = vi.spyOn(coordinates, 'resizeByStep')

    const shiftRightEvent = new KeyboardEvent('keydown', { key: 'ArrowRight', shiftKey: true, cancelable: true })
    vi.spyOn(shiftRightEvent, 'preventDefault')
    events.onKeydown(shiftRightEvent)

    expect(shiftRightEvent.preventDefault).toHaveBeenCalled()
    expect(resizeByStepSpy).toHaveBeenCalledWith(1, 0, false)

    const shiftDownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', shiftKey: true, cancelable: true })
    vi.spyOn(shiftDownEvent, 'preventDefault')
    events.onKeydown(shiftDownEvent)

    expect(shiftDownEvent.preventDefault).toHaveBeenCalled()
    expect(resizeByStepSpy).toHaveBeenCalledWith(0, 1, false)
  })

  it('should handle Ctrl/Meta + arrow keys for resizing opposite edges (left/top)', () => {
    const { coordinates, events } = createInstances({ step: 1 })
    const resizeByStepSpy = vi.spyOn(coordinates, 'resizeByStep')

    const ctrlLeftEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft', ctrlKey: true, cancelable: true })
    vi.spyOn(ctrlLeftEvent, 'preventDefault')
    events.onKeydown(ctrlLeftEvent)

    expect(ctrlLeftEvent.preventDefault).toHaveBeenCalled()
    expect(resizeByStepSpy).toHaveBeenCalledWith(-1, 0, true)

    const metaUpEvent = new KeyboardEvent('keydown', { key: 'ArrowUp', metaKey: true, cancelable: true })
    vi.spyOn(metaUpEvent, 'preventDefault')
    events.onKeydown(metaUpEvent)

    expect(metaUpEvent.preventDefault).toHaveBeenCalled()
    expect(resizeByStepSpy).toHaveBeenCalledWith(0, -1, true)
  })

  it('should apply altKey multiplier on arrow keydown', () => {
    const { coordinates, events } = createInstances({ step: 1 })
    const moveByStepSpy = vi.spyOn(coordinates, 'moveByStep')

    const altRightEvent = new KeyboardEvent('keydown', { key: 'ArrowRight', altKey: true, cancelable: true })
    vi.spyOn(altRightEvent, 'preventDefault')
    events.onKeydown(altRightEvent)

    expect(altRightEvent.preventDefault).toHaveBeenCalled()
    expect(moveByStepSpy).toHaveBeenCalledWith(10, 0)
  })

  it('should not handle keydown when disabled', () => {
    const { coordinates, events } = createInstances({ disabled: true })
    const moveByStepSpy = vi.spyOn(coordinates, 'moveByStep')

    const event = new KeyboardEvent('keydown', { key: 'ArrowUp', cancelable: true })
    vi.spyOn(event, 'preventDefault')
    events.onKeydown(event)

    expect(event.preventDefault).not.toHaveBeenCalled()
    expect(moveByStepSpy).not.toHaveBeenCalled()
  })

  it('should ignore unhandled keys', () => {
    const { coordinates, events } = createInstances()
    const moveByStepSpy = vi.spyOn(coordinates, 'moveByStep')

    const event = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
    vi.spyOn(event, 'preventDefault')
    events.onKeydown(event)

    expect(event.preventDefault).not.toHaveBeenCalled()
    expect(moveByStepSpy).not.toHaveBeenCalled()
  })

  it('should handle onMousedown with valid handle target', () => {
    const { events } = createInstances()
    const handle = document.createElement('div')
    handle.dataset.value = 'top'

    const event = new MouseEvent('mousedown', { bubbles: true, cancelable: true })
    Object.defineProperty(event, 'target', { value: handle })

    events.onMousedown(event)

    expect(document.body.classList.contains('d1-crop-area__blockSelection')).toBe(true)
  })

  it('should clean up on drag end event', () => {
    const { events } = createInstances()
    const handle = document.createElement('div')
    handle.dataset.value = 'top'

    const startEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true })
    Object.defineProperty(startEvent, 'target', { value: handle })
    events.onMousedown(startEvent)

    const endEvent = new MouseEvent('mouseup', { bubbles: true, cancelable: true })
    events.onMousemove(endEvent)

    expect(document.body.classList.contains('d1-crop-area__blockSelection')).toBe(false)
  })
})
