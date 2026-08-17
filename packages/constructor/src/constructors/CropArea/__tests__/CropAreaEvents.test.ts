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

  it('should provide binds with onMousedown and onTouchstart', () => {
    const { events } = createInstances()
    expect(events.binds).toHaveProperty('onMousedown')
    expect(events.binds).toHaveProperty('onTouchstart')
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
