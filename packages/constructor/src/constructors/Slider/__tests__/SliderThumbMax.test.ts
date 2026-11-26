// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import type { SliderValueType } from '../basicTypes'
import { SliderFocus } from '../SliderFocus'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import { SliderThumbMax } from '../SliderThumbMax'
import { SliderValue } from '../SliderValue'
import type { SliderProps } from '../props'

describe('SliderThumbMax', () => {
  it('should return value.max as mark and value in single mode', () => {
    const props = { min: 0, max: 100, multiple: false } as SliderProps
    const naming = new DesignName('dxt.slider')
    const focus = new SliderFocus()
    const marksData = new SliderMarksData(props, naming)
    const marks = new SliderMarks(props, () => marksData)
    const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(75))
    const value = new SliderValue(props, () => focus, () => marks, () => marksData, () => model)

    const thumbMax = new SliderThumbMax(props, () => marks, () => marksData, () => value)

    expect(thumbMax.mark).toBe(75)
    expect(thumbMax.value).toBe(75)
    expect(thumbMax.label).toBe('75')
    expect(thumbMax.aria).toEqual({
      'role': 'slider',
      'aria-valuenow': 75,
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-orientation': 'horizontal'
    })
  })

  it('should return value.max and min thumb floor as valuemin in multiple range mode', () => {
    const props = { min: 0, max: 100, multiple: true } as SliderProps
    const naming = new DesignName('dxt.slider')
    const focus = new SliderFocus()
    const marksData = new SliderMarksData(props, naming)
    const marks = new SliderMarks(props, () => marksData)
    const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref([25, 85]))
    const value = new SliderValue(props, () => focus, () => marks, () => marksData, () => model)

    const thumbMax = new SliderThumbMax(props, () => marks, () => marksData, () => value)

    expect(thumbMax.mark).toBe(85)
    expect(thumbMax.value).toBe(85)
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
