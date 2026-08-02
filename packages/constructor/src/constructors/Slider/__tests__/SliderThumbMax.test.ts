// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import type { SliderValueType } from '../basicTypes'
import { SliderFocus } from '../SliderFocus'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import { SliderThumbMax } from '../SliderThumbMax'
import { SliderValue } from '../SliderValue'
import type { SliderProps } from '../props'

describe('SliderThumbMax', () => {
  it('should return value.max as mark property in single mode', () => {
    const props = { min: 0, max: 100, multiple: false } as SliderProps
    const className = 'dxt-slider'
    const focus = new SliderFocus()
    const marksData = new SliderMarksData(props, className)
    const marks = new SliderMarks(props, className, marksData)
    const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(75))
    const value = new SliderValue(focus, marks, model, props)

    const thumbMax = new SliderThumbMax(props, marksData, marks, value)

    expect(thumbMax.mark).toBe(75)
    expect(thumbMax.label).toBe('75')
    expect(thumbMax.aria).toEqual({
      'role': 'slider',
      'aria-valuenow': 75,
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-orientation': 'horizontal'
    })
  })

  it('should return value.max as mark property in multiple range mode', () => {
    const props = { min: 0, max: 100, multiple: true } as SliderProps
    const className = 'dxt-slider'
    const focus = new SliderFocus()
    const marksData = new SliderMarksData(props, className)
    const marks = new SliderMarks(props, className, marksData)
    const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref([25, 85]))
    const value = new SliderValue(focus, marks, model, props)

    const thumbMax = new SliderThumbMax(props, marksData, marks, value)

    expect(thumbMax.mark).toBe(85)
    expect(thumbMax.label).toBe('85')
    expect(thumbMax.aria).toEqual({
      'role': 'slider',
      'aria-valuenow': 85,
      'aria-valuemin': 25,
      'aria-valuemax': 100,
      'aria-orientation': 'horizontal'
    })
  })
})
