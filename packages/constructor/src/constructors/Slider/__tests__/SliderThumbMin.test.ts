// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import type { SliderValueType } from '../basicTypes'
import { SliderFocus } from '../SliderFocus'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import { SliderThumbMin } from '../SliderThumbMin'
import { SliderValue } from '../SliderValue'
import type { SliderProps } from '../props'

describe('SliderThumbMin', () => {
  it('should return value.min as mark property in single mode', () => {
    const props = { min: 0, max: 100, multiple: false } as SliderProps
    const className = 'dxt-slider'
    const focus = new SliderFocus()
    const marksData = new SliderMarksData(props, className)
    const marks = new SliderMarks(props, className, marksData)
    const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(75))
    const value = new SliderValue(focus, marks, model, props)

    const thumbMin = new SliderThumbMin(marks, value)

    expect(thumbMin.mark).toBe(0)
    expect(thumbMin.label).toBe('0')
  })

  it('should return value.min as mark property in multiple range mode', () => {
    const props = { min: 0, max: 100, multiple: true } as SliderProps
    const className = 'dxt-slider'
    const focus = new SliderFocus()
    const marksData = new SliderMarksData(props, className)
    const marks = new SliderMarks(props, className, marksData)
    const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref([25, 85]))
    const value = new SliderValue(focus, marks, model, props)

    const thumbMin = new SliderThumbMin(marks, value)

    expect(thumbMin.mark).toBe(25)
    expect(thumbMin.label).toBe('25')
  })
})
