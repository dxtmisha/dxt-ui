// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ModelInclude } from '../../../classes/ModelInclude'
import { CropAreaCoordinates } from '../CropAreaCoordinates'
import { CropAreaElement } from '../CropAreaElement'
import { CropAreaEmit } from '../CropAreaEmit'
import { CropAreaPosition } from '../CropAreaPosition'
import { CropAreaStyle } from '../CropAreaStyle'
import type { CropAreaCoordinator } from '../basicTypes'
import type { CropAreaProps } from '../props'

describe('CropAreaCoordinates', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createInstances = (
    propsInit: Partial<CropAreaProps> = {},
    rectDimensions: { width: number, height: number } = { width: 200, height: 200 }
  ) => {
    const element = document.createElement('div')
    const elementRef = ref<HTMLElement | undefined>(element)
    const props = reactive<CropAreaProps>({
      value: [10, 10, 10, 10],
      min: 8,
      ...propsInit
    })

    const emits = vi.fn()
    const model = new ModelInclude<CropAreaCoordinator>('value', emits)
    const elementItem = new CropAreaElement(elementRef, new DesignName('d1.crop-area'))
    const style = new CropAreaStyle(elementRef, new DesignName('d1.crop-area'))
    const position = new CropAreaPosition(props, () => model, () => style)
    const emit = new CropAreaEmit(() => position, emits)
    const coordinates = new CropAreaCoordinates(
      () => elementItem,
      () => emit,
      () => position
    )

    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({
      width: rectDimensions.width,
      height: rectDimensions.height,
      top: 0,
      left: 0,
      right: rectDimensions.width,
      bottom: rectDimensions.height,
      x: 0,
      y: 0,
      toJSON: () => ({})
    })

    return { coordinates, element, elementItem, emit, emits, model, position, props, style }
  }

  describe('Drag lifecycle (start, move, reset)', () => {
    it('should start drag and reject when direction is disabled', () => {
      const { coordinates } = createInstances()
      const mouseEvent = new MouseEvent('mousedown', { clientX: 50, clientY: 50 })

      expect(coordinates.start(mouseEvent, 'top')).toBe(true)

      const { coordinates: disabledCoordinates } = createInstances({ disabledTop: true })
      expect(disabledCoordinates.start(mouseEvent, 'top')).toBe(false)
    })

    it('should safely ignore move before start, after reset, or with zero-dimension rect', () => {
      const { coordinates, emits, position } = createInstances()
      const moveEvent = new MouseEvent('mousemove', { clientX: 70, clientY: 70 })

      // Before start
      coordinates.move(moveEvent)
      expect(position.get()).toEqual([10, 10, 10, 10])
      expect(emits).not.toHaveBeenCalled()

      // After start + reset
      coordinates.start(new MouseEvent('mousedown', { clientX: 50, clientY: 50 }), 'top')
      coordinates.reset()
      coordinates.move(moveEvent)
      expect(position.get()).toEqual([10, 10, 10, 10])
      expect(emits).not.toHaveBeenCalled()

      // Zero-dimension rect (division-by-zero protection)
      const { coordinates: zeroRect, emits: zeroEmits } = createInstances({}, { width: 0, height: 200 })
      zeroRect.start(new MouseEvent('mousedown', { clientX: 50, clientY: 50 }), 'top')
      zeroRect.move(moveEvent)
      expect(zeroEmits).not.toHaveBeenCalled()
    })
  })

  describe('Single-edge, corner, and center drag updates', () => {
    it('should handle all four single edges (top, right, bottom, left)', () => {
      // top: +20px => +10%
      const topCtx = createInstances()
      topCtx.coordinates.start(new MouseEvent('mousedown', { clientX: 50, clientY: 50 }), 'top')
      topCtx.coordinates.move(new MouseEvent('mousemove', { clientX: 50, clientY: 70 }))
      expect(topCtx.position.get()).toEqual([20, 10, 10, 10])
      expect(topCtx.emits).toHaveBeenCalledWith('resize', {
        direction: 'top',
        value: 20,
        coordinator: [20, 10, 10, 10]
      })

      // right: -20px => deltaX = -10%, -deltaX = +10%
      const rightCtx = createInstances()
      rightCtx.coordinates.start(new MouseEvent('mousedown', { clientX: 50, clientY: 50 }), 'right')
      rightCtx.coordinates.move(new MouseEvent('mousemove', { clientX: 30, clientY: 50 }))
      expect(rightCtx.position.get()).toEqual([10, 20, 10, 10])
      expect(rightCtx.emits).toHaveBeenCalledWith('resize', {
        direction: 'right',
        value: 20,
        coordinator: [10, 20, 10, 10]
      })

      // bottom: -20px => deltaY = -10%, -deltaY = +10%
      const bottomCtx = createInstances()
      bottomCtx.coordinates.start(new MouseEvent('mousedown', { clientX: 50, clientY: 50 }), 'bottom')
      bottomCtx.coordinates.move(new MouseEvent('mousemove', { clientX: 50, clientY: 30 }))
      expect(bottomCtx.position.get()).toEqual([10, 10, 20, 10])
      expect(bottomCtx.emits).toHaveBeenCalledWith('resize', {
        direction: 'bottom',
        value: 20,
        coordinator: [10, 10, 20, 10]
      })

      // left: +20px => +10%
      const leftCtx = createInstances()
      leftCtx.coordinates.start(new MouseEvent('mousedown', { clientX: 50, clientY: 50 }), 'left')
      leftCtx.coordinates.move(new MouseEvent('mousemove', { clientX: 70, clientY: 50 }))
      expect(leftCtx.position.get()).toEqual([10, 10, 10, 20])
      expect(leftCtx.emits).toHaveBeenCalledWith('resize', {
        direction: 'left',
        value: 20,
        coordinator: [10, 10, 10, 20]
      })
    })

    it('should handle all four corner handles and avoid emitting when both edges are unchanged', () => {
      // right-top
      const rt = createInstances()
      rt.coordinates.start(new MouseEvent('mousedown', { clientX: 50, clientY: 50 }), 'right-top')
      rt.coordinates.move(new MouseEvent('mousemove', { clientX: 30, clientY: 70 }))
      expect(rt.position.get()).toEqual([20, 20, 10, 10])
      expect(rt.emits).toHaveBeenCalledWith('resize', {
        direction: 'right-top',
        value: 20,
        coordinator: [20, 20, 10, 10]
      })

      // right-bottom (also verifies falsy 0 value is emitted properly)
      const rb = createInstances()
      rb.coordinates.start(new MouseEvent('mousedown', { clientX: 50, clientY: 50 }), 'right-bottom')
      rb.coordinates.move(new MouseEvent('mousemove', { clientX: 70, clientY: 70 }))
      expect(rb.position.get()).toEqual([10, 0, 0, 10])
      expect(rb.emits).toHaveBeenCalledWith('resize', {
        direction: 'right-bottom',
        value: 0,
        coordinator: [10, 0, 0, 10]
      })

      // Moving right-bottom again to the exact same coordinates should NOT emit resize
      rb.emits.mockClear()
      rb.coordinates.move(new MouseEvent('mousemove', { clientX: 70, clientY: 70 }))
      expect(rb.emits).not.toHaveBeenCalledWith('resize', expect.anything())

      // left-top
      const lt = createInstances()
      lt.coordinates.start(new MouseEvent('mousedown', { clientX: 50, clientY: 50 }), 'left-top')
      lt.coordinates.move(new MouseEvent('mousemove', { clientX: 70, clientY: 70 }))
      expect(lt.position.get()).toEqual([20, 10, 10, 20])
      expect(lt.emits).toHaveBeenCalledWith('resize', {
        direction: 'left-top',
        value: 20,
        coordinator: [20, 10, 10, 20]
      })

      // left-bottom
      const lb = createInstances()
      lb.coordinates.start(new MouseEvent('mousedown', { clientX: 50, clientY: 50 }), 'left-bottom')
      lb.coordinates.move(new MouseEvent('mousemove', { clientX: 70, clientY: 30 }))
      expect(lb.position.get()).toEqual([10, 10, 20, 20])
      expect(lb.emits).toHaveBeenCalledWith('resize', {
        direction: 'left-bottom',
        value: 20,
        coordinator: [10, 10, 20, 20]
      })
    })

    it('should handle center dragging', () => {
      const { coordinates, emits, position } = createInstances()
      coordinates.start(new MouseEvent('mousedown', { clientX: 50, clientY: 50 }), 'center')
      coordinates.move(new MouseEvent('mousemove', { clientX: 70, clientY: 70 }))

      expect(position.get()).toEqual([20, 0, 0, 20])
      expect(emits).toHaveBeenCalledWith('resize', {
        direction: 'center',
        value: 0,
        coordinator: [20, 0, 0, 20]
      })
    })
  })

  describe('Discrete step navigation (moveByStep / resizeByStep)', () => {
    it('should move by discrete step and skip when disabled', () => {
      const { coordinates, emits, position } = createInstances()
      coordinates.moveByStep(5, -5)

      expect(position.get()).toEqual([5, 5, 15, 15])
      expect(emits).toHaveBeenCalledWith('resize', {
        direction: 'center',
        value: 0,
        coordinator: [5, 5, 15, 15]
      })

      const disabled = createInstances({ disabled: true })
      disabled.coordinates.moveByStep(5, 5)
      expect(disabled.position.get()).toEqual([10, 10, 10, 10])
      expect(disabled.emits).not.toHaveBeenCalled()
    })

    it('should resize primary (right/bottom) and opposite (left/top) edges via resizeByStep', () => {
      const { coordinates, emits, position } = createInstances()

      coordinates.resizeByStep(5, 0)
      expect(position.get()).toEqual([10, 5, 10, 10])
      expect(emits).toHaveBeenCalledWith('resize', {
        direction: 'right',
        value: 5,
        coordinator: [10, 5, 10, 10]
      })

      coordinates.resizeByStep(0, 5)
      expect(position.get()).toEqual([10, 5, 5, 10])
      expect(emits).toHaveBeenCalledWith('resize', {
        direction: 'bottom',
        value: 5,
        coordinator: [10, 5, 5, 10]
      })

      coordinates.resizeByStep(-5, 0, true)
      expect(position.get()).toEqual([10, 5, 5, 5])
      expect(emits).toHaveBeenCalledWith('resize', {
        direction: 'left',
        value: 5,
        coordinator: [10, 5, 5, 5]
      })

      coordinates.resizeByStep(0, -5, true)
      expect(position.get()).toEqual([5, 5, 5, 5])
      expect(emits).toHaveBeenCalledWith('resize', {
        direction: 'top',
        value: 5,
        coordinator: [5, 5, 5, 5]
      })
    })
  })
})
