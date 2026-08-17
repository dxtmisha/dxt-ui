// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { reactive, ref } from 'vue'
import { CropAreaCoordinates } from '../CropAreaCoordinates'
import { CropAreaElement } from '../CropAreaElement'
import { CropAreaEmit } from '../CropAreaEmit'
import { CropAreaPosition } from '../CropAreaPosition'
import { CropAreaStyle } from '../CropAreaStyle'
import type { CropAreaProps } from '../props'

describe('CropAreaCoordinates', () => {
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

    // Mock getBoundingClientRect for element
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

    return { coordinates, element, elementItem, emit, emits, position, props, style }
  }

  it('should start drag and track coordinates', () => {
    const { coordinates } = createInstances()
    const mouseEvent = new MouseEvent('mousedown', { clientX: 50, clientY: 50 })

    const started = coordinates.start(mouseEvent, 'top')
    expect(started).toBe(true)
  })

  it('should not start if direction is disabled', () => {
    const { coordinates } = createInstances({ disabledTop: true })
    const mouseEvent = new MouseEvent('mousedown', { clientX: 50, clientY: 50 })

    const started = coordinates.start(mouseEvent, 'top')
    expect(started).toBe(false)
  })

  it('should handle move for single edges and emit onResize', () => {
    const { coordinates, emits, position } = createInstances()
    const startEvent = new MouseEvent('mousedown', { clientX: 50, clientY: 50 })
    coordinates.start(startEvent, 'top')

    // Move Y by +20px => in 200px rect, deltaY = (100 / 200) * 20 = 10%
    const moveEvent = new MouseEvent('mousemove', { clientX: 50, clientY: 70 })
    coordinates.move(moveEvent)

    expect(position.get()[0]).toBe(20)
    expect(emits).toHaveBeenCalledWith('resize', {
      direction: 'top',
      value: 20,
      coordinator: [20, 10, 10, 10]
    })
  })

  it('should handle move for corners', () => {
    const { coordinates, emits, position } = createInstances()
    const startEvent = new MouseEvent('mousedown', { clientX: 50, clientY: 50 })
    coordinates.start(startEvent, 'right-bottom')

    // Move deltaX = +20px => deltaX = 10% (right shrinks by 10%), deltaY = +20px => deltaY = 10% (bottom shrinks by 10%)
    const moveEvent = new MouseEvent('mousemove', { clientX: 70, clientY: 70 })
    coordinates.move(moveEvent)

    expect(position.get()).toEqual([10, 0, 0, 10])
    expect(emits).toHaveBeenCalledWith('resize', {
      direction: 'right-bottom',
      value: 0,
      coordinator: [10, 0, 0, 10]
    })
  })

  it('should handle move for center dragging', () => {
    const { coordinates, emits, position } = createInstances()
    const startEvent = new MouseEvent('mousedown', { clientX: 50, clientY: 50 })
    coordinates.start(startEvent, 'center')

    // Move (+20px, +20px) => deltaX = 10%, deltaY = 10%
    const moveEvent = new MouseEvent('mousemove', { clientX: 70, clientY: 70 })
    coordinates.move(moveEvent)

    expect(position.get()).toEqual([20, 0, 0, 20])
    expect(emits).toHaveBeenCalledWith('resize', {
      direction: 'center',
      value: 0,
      coordinator: [20, 0, 0, 20]
    })
  })

  it('should reset coordinates state', () => {
    const { coordinates } = createInstances()
    const startEvent = new MouseEvent('mousedown', { clientX: 50, clientY: 50 })
    coordinates.start(startEvent, 'top')

    coordinates.reset()

    // Move after reset should do nothing
    const moveEvent = new MouseEvent('mousemove', { clientX: 50, clientY: 70 })
    coordinates.move(moveEvent)
  })
})
