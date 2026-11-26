// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import type { SliderValueType } from '../basicTypes'
import { SliderFocus } from '../SliderFocus'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import { SliderThumbMin } from '../SliderThumbMin'
import { SliderValue } from '../SliderValue'
import type { SliderProps } from '../props'

describe('SliderThumbMin', () => {
  it('should evaluate static is predicate based on multiple prop', () => {
    expect(SliderThumbMin.is(undefined)).toBe(false)
    expect(SliderThumbMin.is({ multiple: false })).toBe(false)
    expect(SliderThumbMin.is({ multiple: true })).toBe(true)
  })

  it('should return value.min as mark and value in single mode', () => {
    const props = { min: 0, max: 100, multiple: false } as SliderProps
    const naming = new DesignName('dxt.slider')
    const focus = new SliderFocus()
    const marksData = new SliderMarksData(props, naming)
    const marks = new SliderMarks(props, () => marksData)
    const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(75))
    const value = new SliderValue(props, () => focus, () => marks, () => marksData, () => model)

    const thumbMin = new SliderThumbMin(props, () => marks, () => marksData, () => value)

    expect(thumbMin.mark).toBe(0)
    expect(thumbMin.value).toBe(0)
    expect(thumbMin.label).toBe('0')
    expect(thumbMin.aria).toEqual({
      'role': 'slider',
      'aria-valuenow': 0,
      'aria-valuemin': 0,
      'aria-valuemax': 75,
      'aria-orientation': 'horizontal'
    })
  })

  it('should return value.min and max thumb ceiling as valuemax in multiple range mode', () => {
    const props = { min: 0, max: 100, multiple: true } as SliderProps
    const naming = new DesignName('dxt.slider')
    const focus = new SliderFocus()
    const marksData = new SliderMarksData(props, naming)
    const marks = new SliderMarks(props, () => marksData)
    const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref([25, 85]))
    const value = new SliderValue(props, () => focus, () => marks, () => marksData, () => model)

    const thumbMin = new SliderThumbMin(props, () => marks, () => marksData, () => value)

    expect(thumbMin.mark).toBe(25)
    expect(thumbMin.value).toBe(25)
    expect(thumbMin.label).toBe('25')
    expect(thumbMin.aria).toEqual({
      'role': 'slider',
      'aria-valuenow': 25,
      'aria-valuemin': 0,
      'aria-valuemax': 85,
      'aria-orientation': 'horizontal'
    })
  })
})
