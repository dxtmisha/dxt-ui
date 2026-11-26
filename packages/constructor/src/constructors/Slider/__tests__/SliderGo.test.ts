// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { SliderFocusType, type SliderValueType } from '../basicTypes'
import { SliderElement } from '../SliderElement'
import { SliderEmit } from '../SliderEmit'
import { SliderFocus } from '../SliderFocus'
import { SliderGo } from '../SliderGo'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import { SliderThumbMax } from '../SliderThumbMax'
import { SliderThumbMin } from '../SliderThumbMin'
import { SliderValue } from '../SliderValue'
import type { SliderProps } from '../props'
import type { SliderEmits } from '../types'

function createSliderGo(initialValue: SliderValueType, props: Partial<SliderProps> = {}) {
  const fullProps = { min: 0, max: 100, step: 10, disabled: false, ...props } as SliderProps
  const naming = new DesignName('dxt.slider')

  const enabled = new EnabledInclude(fullProps)
  const focus = new SliderFocus()
  const marksData = new SliderMarksData(fullProps, naming)
  const marks = new SliderMarks(fullProps, () => marksData)
  const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(initialValue))
  const value = new SliderValue(fullProps, () => focus, () => marks, () => marksData, () => model)

  const minElement = new SliderThumbMin(fullProps, () => marks, () => marksData, () => value)
  const maxElement = new SliderThumbMax(fullProps, () => marks, () => marksData, () => value)
  const elementRef = ref<HTMLElement | undefined>(undefined)
  const sliderElement = new SliderElement(fullProps, elementRef, () => maxElement, () => minElement)

  const mockEmit = vi.fn()
  const emitsItem = new SliderEmit(
    fullProps,
    () => maxElement,
    () => minElement,
    () => model,
    () => value,
    mockEmit as unknown as ConstrEmit<SliderEmits>
  )

  const go = new SliderGo(
    () => emitsItem,
    () => enabled,
    () => focus,
    () => marks,
    () => sliderElement,
    () => value
  )

  return { go, focus, model, enabled, sliderElement, elementRef, mockEmit }
}

describe('SliderGo', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should increase value by step and emit input and change when increase is called', () => {
    const { go, model, mockEmit } = createSliderGo(50)

    go.increase()

    expect(model.get()).toBe(60)
    expect(mockEmit).toHaveBeenCalledWith('input', expect.objectContaining({ mark: 60, value: 60 }))
    expect(mockEmit).toHaveBeenCalledWith('inputLite', 60)
    expect(mockEmit).toHaveBeenCalledWith('change', expect.objectContaining({ mark: 60, value: 60 }))
    expect(mockEmit).toHaveBeenCalledWith('changeLite', 60)
  })

  it('should decrease value by step when decrease is called', () => {
    const { go, model, mockEmit } = createSliderGo(50)

    go.decrease()

    expect(model.get()).toBe(40)
    expect(mockEmit).toHaveBeenCalledWith('change', expect.objectContaining({ mark: 40, value: 40 }))
    expect(mockEmit).toHaveBeenCalledWith('changeLite', 40)
  })

  it('should update min handle when focus is set to min', () => {
    const { go, focus, model } = createSliderGo([20, 80], { multiple: true })

    focus.set(SliderFocusType.min)
    go.increase()

    expect(model.get()).toEqual([30, 80])
  })

  it('should do nothing when component is disabled or readonly', () => {
    const { go, model, elementRef, mockEmit } = createSliderGo(50, { disabled: true })

    const divElement = document.createElement('div')
    vi.spyOn(divElement, 'getBoundingClientRect').mockReturnValue({
      left: 100,
      width: 200,
      top: 0,
      height: 20
    } as DOMRect)
    elementRef.value = divElement

    go.increase()
    go.decrease()
    go.updateFromCoordinate(200)

    expect(model.get()).toBe(50)
    expect(mockEmit).not.toHaveBeenCalled()
  })

  it('should update value from coordinate along slider container and ignore missing rect', () => {
    const { go, model, elementRef, mockEmit } = createSliderGo(0)

    go.updateFromCoordinate(200)
    expect(model.get()).toBe(0)
    expect(mockEmit).not.toHaveBeenCalled()

    const divElement = document.createElement('div')
    vi.spyOn(divElement, 'getBoundingClientRect').mockReturnValue({
      left: 100,
      width: 200,
      top: 0,
      height: 20
    } as DOMRect)
    elementRef.value = divElement

    go.updateFromCoordinate(200)

    expect(model.get()).toBe(50)
    expect(mockEmit).toHaveBeenCalledWith('inputLite', 50)
  })
})
