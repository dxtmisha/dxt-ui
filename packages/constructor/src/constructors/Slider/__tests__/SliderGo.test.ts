// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
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

function createSliderGo(initialValue: SliderValueType, props: Partial<SliderProps> = {}) {
  const fullProps = { min: 0, max: 100, step: 10, disabled: false, ...props } as SliderProps
  const className = 'dxt-slider'

  const enabled = new EnabledInclude(fullProps)
  const focus = new SliderFocus()
  const marksData = new SliderMarksData(fullProps, className)
  const marks = new SliderMarks(fullProps, className, marksData)
  const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(initialValue))
  const value = new SliderValue(focus, marks, model, fullProps)

  const minElement = new SliderThumbMin(fullProps, marksData, marks, value)
  const maxElement = new SliderThumbMax(fullProps, marksData, marks, value)
  const elementRef = ref<HTMLElement | undefined>(undefined)
  const sliderElement = new SliderElement(fullProps, elementRef, maxElement, minElement)

  const mockEmit = vi.fn()
  const emitsItem = new SliderEmit(fullProps, model, value, minElement, maxElement, mockEmit as any)

  const go = new SliderGo(emitsItem, enabled, focus, marks, sliderElement, value)

  return { go, focus, model, enabled, sliderElement, elementRef, mockEmit }
}

describe('SliderGo', () => {
  it('should increase value by step when increase is called', () => {
    const { go, model, mockEmit } = createSliderGo(50)

    go.increase()

    expect(model.getValue()).toBe(60)
    expect(mockEmit).toHaveBeenCalledWith('change', expect.objectContaining({ mark: 60, value: 60 }))
    expect(mockEmit).toHaveBeenCalledWith('changeLite', 60)
  })

  it('should decrease value by step when decrease is called', () => {
    const { go, model, mockEmit } = createSliderGo(50)

    go.decrease()

    expect(model.getValue()).toBe(40)
    expect(mockEmit).toHaveBeenCalledWith('change', expect.objectContaining({ mark: 40, value: 40 }))
    expect(mockEmit).toHaveBeenCalledWith('changeLite', 40)
  })

  it('should update min handle when focus is set to min', () => {
    const { go, focus, model } = createSliderGo([20, 80], { multiple: true })

    focus.set(SliderFocusType.min)
    go.increase()

    expect(model.getValue()).toEqual([30, 80])
  })

  it('should do nothing when component is disabled', () => {
    const { go, model } = createSliderGo(50, { disabled: true })

    go.increase()
    expect(model.getValue()).toBe(50)

    go.decrease()
    expect(model.getValue()).toBe(50)
  })

  it('should update value from coordinate along slider container', () => {
    const { go, model, elementRef } = createSliderGo(0)

    const divElement = document.createElement('div')
    vi.spyOn(divElement, 'getBoundingClientRect').mockReturnValue({
      left: 100,
      width: 200,
      top: 0,
      height: 20
    } as DOMRect)
    elementRef.value = divElement

    // Coordinate 200 is at 50% of (left:100, width:200), so 50% of 100 range = 50
    go.updateFromCoordinate(200)

    expect(model.getValue()).toBe(50)
  })
})
