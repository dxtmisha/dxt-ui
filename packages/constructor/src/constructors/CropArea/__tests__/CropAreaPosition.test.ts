// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { reactive, ref } from 'vue'
import { CropAreaPosition } from '../CropAreaPosition'
import { CropAreaStyle } from '../CropAreaStyle'
import type { CropAreaProps } from '../props'

describe('CropAreaPosition', () => {
  const createInstances = (propsInit: Partial<CropAreaProps> = {}) => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const props = reactive({
      value: [10, 10, 10, 10] as [number, number, number, number],
      min: 8,
      ...propsInit
    }) as CropAreaProps

    const style = new CropAreaStyle(elementRef, 'd1-crop-area')
    const position = new CropAreaPosition(props, style)

    return { element, position, props, style }
  }

  it('should initialize coordinator and set initial values', () => {
    const { position } = createInstances({ value: [10, 20, 30, 40] })

    expect(position.get()).toEqual([10, 20, 30, 40])
  })

  it('should validate and move single edge', () => {
    const { position } = createInstances({ value: [10, 10, 10, 10], min: 8 })

    // Move top edge down by 5%
    const updated = position.moveSingle('top', 10, 5)
    expect(updated).toBe(15)
    expect(position.get()[0]).toBe(15)

    // Negative boundary clamp to 0
    const clamped = position.moveSingle('top', 15, -20)
    expect(clamped).toBe(0)
    expect(position.get()[0]).toBe(0)

    // Exceeding min boundary (100 - candidate - bottom < 8 => candidate > 100 - 8 - 10 = 82)
    const constrained = position.moveSingle('top', 0, 85)
    expect(constrained).toBeUndefined()
  })

  it('should validate and constrain max size', () => {
    const { position } = createInstances({ value: [20, 20, 20, 20], min: 8, max: 70 })

    // Current height: 100 - 20 - 20 = 60
    // Move top up by 5% => candidate = 15 => size = 100 - 15 - 20 = 65 <= 70 (valid)
    expect(position.moveSingle('top', 20, -5)).toBe(15)

    // Move top up by 15% => candidate = 0 => size = 100 - 0 - 20 = 80 > 70 (exceeds max => constrained)
    expect(position.moveSingle('top', 15, -20)).toBeUndefined()
  })

  it('should move center crop box within boundaries without resizing', () => {
    const { position } = createInstances({ value: [10, 10, 10, 10] })

    // Box width: 80%, height: 80%
    // Move center by (+5%, +5%)
    const moved = position.moveCenter([10, 10, 10, 10], 5, 5)
    expect(moved).toEqual([15, 5, 5, 15])

    // Move center beyond top-left boundary
    const clampedTopLeft = position.moveCenter([15, 5, 5, 15], -30, -30)
    expect(clampedTopLeft).toEqual([0, 20, 20, 0])
  })

  it('should respect disabled flags', () => {
    const { position } = createInstances({ disabled: true })
    expect(position.isDirectionDisabled('top')).toBe(true)
    expect(position.isDirectionDisabled('center')).toBe(true)
    expect(position.moveSingle('top', 10, 5)).toBeUndefined()
  })

  it('should respect direction-specific disabled flags', () => {
    const { position } = createInstances({ disabledTop: true })
    expect(position.isDirectionDisabled('top')).toBe(true)
    expect(position.isDirectionDisabled('left-top')).toBe(true)
    expect(position.isDirectionDisabled('bottom')).toBe(false)
  })
})
