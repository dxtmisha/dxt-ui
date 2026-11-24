// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ModelInclude } from '../../../classes/ModelInclude'
import { CropAreaPosition } from '../CropAreaPosition'
import { CropAreaStyle } from '../CropAreaStyle'
import type { CropAreaCoordinator, CropAreaDirection } from '../basicTypes'
import type { CropAreaProps } from '../props'

describe('CropAreaPosition', () => {
  const activePositions: CropAreaPosition[] = []

  afterEach(() => {
    activePositions.splice(0).forEach(position => position.onUnmounted())
    vi.restoreAllMocks()
  })

  const createInstances = (propsInit: Partial<CropAreaProps> = {}) => {
    const element = document.createElement('div')
    const elementRef = ref<HTMLElement | undefined>(element)
    const props = reactive<CropAreaProps>({
      value: [10, 10, 10, 10],
      min: 8,
      ...propsInit
    })
    const emits = vi.fn()
    const model = new ModelInclude<CropAreaCoordinator>('value', emits)
    const style = new CropAreaStyle(elementRef, new DesignName('d1.crop-area'))
    const position = new CropAreaPosition(props, () => model, () => style)

    activePositions.push(position)

    return { element, elementRef, emits, model, position, props, style }
  }

  describe('Static predicate, initialization, and normalization', () => {
    it('should evaluate static is predicate based on readonly prop', () => {
      expect(CropAreaPosition.is()).toBe(true)
      expect(CropAreaPosition.is({})).toBe(true)
      expect(CropAreaPosition.is({ readonly: false })).toBe(true)
      expect(CropAreaPosition.is({ readonly: true })).toBe(false)
    })

    it('should initialize from modelValue over value and normalize to 1 decimal place', () => {
      const { position } = createInstances({
        value: [10.234, 15.678, 20.123, 25.456]
      })

      expect(position.get()).toEqual([10.2, 15.7, 20.1, 25.5])

      const { position: fromModel } = createInstances({
        value: [5, 5, 5, 5],
        modelValue: [12, 18, 22, 28]
      })

      expect(fromModel.get()).toEqual([12, 18, 22, 28])
    })

    it('should safely fall back to [0, 0, 0, 0] for undefined, malformed, or non-finite values', () => {
      const { position: empty } = createInstances({ value: undefined })
      expect(empty.get()).toEqual([0, 0, 0, 0])

      const { position: nonFinite } = createInstances({
        value: [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, -0]
      })
      expect(nonFinite.get()).toEqual([0, 0, 0, 0])
      expect(Object.is(nonFinite.get()[3], -0)).toBe(false)
    })

    it('should return a shallow copy from get() so caller mutation does not corrupt internal state', () => {
      const { position } = createInstances({ value: [10, 20, 30, 40] })
      const snapshot = position.get()
      snapshot[0] = 99

      expect(position.get()).toEqual([10, 20, 30, 40])
    })
  })

  describe('Constraint getters (min / max) and disabled direction flags', () => {
    it('should resolve min and max defaults, string numbers, zero boundary, and invalid fallbacks', () => {
      const { position, props } = createInstances({ min: undefined, max: undefined })
      expect(position.min).toBe(8)
      expect(position.max).toBe(100)

      props.min = 0
      props.max = '75'
      expect(position.min).toBe(0)
      expect(position.max).toBe(75)

      props.min = 'invalid'
      props.max = -5
      expect(position.min).toBe(8)
      expect(position.max).toBe(100)
    })

    it.each<CropAreaDirection>([
      'top',
      'right',
      'bottom',
      'left',
      'right-top',
      'right-bottom',
      'left-top',
      'left-bottom',
      'center'
    ])('should disable direction %s when global disabled is true', (direction) => {
      const { position } = createInstances({ disabled: true })
      expect(position.isDirectionDisabled(direction)).toBe(true)
    })

    it('should respect per-edge disabled flags including affected corners', () => {
      const { position: top } = createInstances({ disabledTop: true })
      expect(top.isDirectionDisabled('top')).toBe(true)
      expect(top.isDirectionDisabled('left-top')).toBe(true)
      expect(top.isDirectionDisabled('right-top')).toBe(true)
      expect(top.isDirectionDisabled('bottom')).toBe(false)

      const { position: right } = createInstances({ disabledRight: true })
      expect(right.isDirectionDisabled('right')).toBe(true)
      expect(right.isDirectionDisabled('right-top')).toBe(true)
      expect(right.isDirectionDisabled('right-bottom')).toBe(true)
      expect(right.isDirectionDisabled('left')).toBe(false)

      const { position: bottom } = createInstances({ disabledBottom: true })
      expect(bottom.isDirectionDisabled('bottom')).toBe(true)
      expect(bottom.isDirectionDisabled('left-bottom')).toBe(true)
      expect(bottom.isDirectionDisabled('right-bottom')).toBe(true)
      expect(bottom.isDirectionDisabled('top')).toBe(false)

      const { position: left } = createInstances({ disabledLeft: true })
      expect(left.isDirectionDisabled('left')).toBe(true)
      expect(left.isDirectionDisabled('left-top')).toBe(true)
      expect(left.isDirectionDisabled('left-bottom')).toBe(true)
      expect(left.isDirectionDisabled('right')).toBe(false)
    })
  })

  describe('Movement, clamping, set, reset, and model emissions', () => {
    it('should validate and move single edges with min/max constraints and model emits', () => {
      const { element, emits, position } = createInstances({ value: [10, 10, 10, 10], min: 8 })

      const updated = position.moveSingle('top', 10, 5)
      expect(updated).toBe(15)
      expect(position.get()).toEqual([15, 10, 10, 10])
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('15%')
      expect(emits).toHaveBeenCalledWith('update:value', [15, 10, 10, 10])
      expect(emits).toHaveBeenCalledWith('update:modelValue', [15, 10, 10, 10])

      // Negative candidate clamps to 0
      const clamped = position.moveSingle('top', 15, -20)
      expect(clamped).toBe(0)
      expect(position.get()[0]).toBe(0)

      // No-op when value is already 0
      emits.mockClear()
      expect(position.moveSingle('top', 0, -5)).toBeUndefined()
      expect(emits).not.toHaveBeenCalled()

      // Exceeding min boundary (100 - candidate - 10 < 8 => candidate > 82)
      expect(position.moveSingle('top', 0, 85)).toBeUndefined()

      // Guard non-finite inputs
      expect(position.moveSingle('top', Number.NaN, 5)).toBeUndefined()
      expect(position.moveSingle('top', 0, Number.POSITIVE_INFINITY)).toBeUndefined()
    })

    it('should enforce max size constraint during moveSingle', () => {
      const { position } = createInstances({ value: [20, 20, 20, 20], min: 8, max: 70 })

      expect(position.moveSingle('top', 20, -5)).toBe(15)
      expect(position.moveSingle('top', 15, -20)).toBeUndefined()
    })

    it('should move center box within boundaries without mutating input array', () => {
      const { emits, position } = createInstances({ value: [10, 10, 10, 10] })
      const start: CropAreaCoordinator = [10, 10, 10, 10]

      const moved = position.moveCenter(start, 5, 5)
      expect(moved).toEqual([15, 5, 5, 15])
      expect(start).toEqual([10, 10, 10, 10])
      expect(emits).toHaveBeenCalledWith('update:modelValue', [15, 5, 5, 15])

      const clampedTopLeft = position.moveCenter([15, 5, 5, 15], -30, -30)
      expect(clampedTopLeft).toEqual([0, 20, 20, 0])

      const clampedBottomRight = position.moveCenter([0, 20, 20, 0], 50, 50)
      expect(clampedBottomRight).toEqual([20, 0, 0, 20])

      // Pushing further into already-clamped edge produces no duplicate model emit
      emits.mockClear()
      expect(position.moveCenter([20, 0, 0, 20], 10, 10)).toEqual([20, 0, 0, 20])
      expect(emits).not.toHaveBeenCalled()

      // Non-finite delta guard
      expect(position.moveCenter([20, 0, 0, 20], Number.NaN, 5)).toEqual([20, 0, 0, 20])
    })

    it('should ignore moveCenter and moveSingle when disabled', () => {
      const { emits, position } = createInstances({ value: [10, 10, 10, 10], disabled: true })

      expect(position.moveSingle('top', 10, 5)).toBeUndefined()
      expect(position.moveCenter([10, 10, 10, 10], 5, 5)).toEqual([10, 10, 10, 10])
      expect(emits).not.toHaveBeenCalled()
    })

    it('should update state, styles, and emit model on set() and reset() only when changed', () => {
      const { element, emits, position } = createInstances({ value: [10, 10, 10, 10] })

      position.set([20, 25, 30, 35])
      expect(position.get()).toEqual([20, 25, 30, 35])
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-left')).toBe('35%')
      expect(emits).toHaveBeenCalledWith('update:value', [20, 25, 30, 35])
      expect(emits).toHaveBeenCalledWith('update:modelValue', [20, 25, 30, 35])

      emits.mockClear()
      position.set([20, 25, 30, 35])
      expect(emits).not.toHaveBeenCalled()

      position.reset()
      expect(position.get()).toEqual([10, 10, 10, 10])
      expect(emits).toHaveBeenCalledWith('update:modelValue', [10, 10, 10, 10])
    })
  })

  describe('Lifecycle (onMounted / onUnmounted) and reactive sync', () => {
    it('should apply styles on mount, react to prop and element changes without feedback emits, and clean up on unmount', async () => {
      const { element, elementRef, emits, position, props } = createInstances({
        value: [15, 20, 25, 30]
      })

      // Before mount, no styles applied and no watchers registered
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('')

      position.onMounted()
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('15%')
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-left')).toBe('30%')

      // External prop change updates state & styles WITHOUT feedback update:modelValue emit
      props.value = [5, 10, 15, 20]
      await nextTick()
      expect(position.get()).toEqual([5, 10, 15, 20])
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('5%')
      expect(emits).not.toHaveBeenCalled()

      // Remounting DOM element (e.g. after readonly toggle) re-applies styles automatically
      const nextElement = document.createElement('div')
      elementRef.value = undefined
      await nextTick()
      elementRef.value = nextElement
      await nextTick()
      expect(nextElement.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('5%')
      expect(nextElement.style.getPropertyValue('--d1-cropArea-sys-crop-left')).toBe('20%')

      // Unmount stops watchers cleanly
      position.onUnmounted()
      props.value = [30, 30, 30, 30]
      await nextTick()
      expect(position.get()).toEqual([5, 10, 15, 20])
    })
  })
})
