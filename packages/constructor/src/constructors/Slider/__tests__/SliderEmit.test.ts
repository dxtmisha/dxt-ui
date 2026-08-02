// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref, nextTick } from 'vue'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import type { SliderMarkItem, SliderValueType } from '../basicTypes'
import { SliderEmit } from '../SliderEmit'
import { SliderFocus } from '../SliderFocus'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import type { SliderThumbMax } from '../SliderThumbMax'
import type { SliderThumbMin } from '../SliderThumbMin'
import { SliderValue } from '../SliderValue'
import type { SliderProps } from '../props'

function createSliderEmit(
  initialValue: SliderValueType,
  props: Partial<SliderProps> = {},
  mockEmits?: any
) {
  const fullProps = { min: 0, max: 100, ...props } as SliderProps
  const className = 'dxt-slider'
  const focus = new SliderFocus()
  const marksData = new SliderMarksData(fullProps, className)
  const marks = new SliderMarks(fullProps, className, marksData)
  const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(initialValue))
  const sliderValue = new SliderValue(focus, marks, model, fullProps)

  const mockMinItem: SliderMarkItem = { mark: 10, value: 10, text: '10' }
  const mockMaxItem: SliderMarkItem = { mark: 80, value: 80, text: '80' }

  const minElement = {
    item: ref(mockMinItem)
  } as unknown as SliderThumbMin

  const maxElement = {
    item: ref(mockMaxItem)
  } as unknown as SliderThumbMax

  const sliderEmit = new SliderEmit(
    fullProps,
    model,
    sliderValue,
    minElement,
    maxElement,
    mockEmits
  )

  return { sliderEmit, model, mockEmits }
}

describe('SliderEmit', () => {
  it('should emit single mode detail when emit is called', () => {
    const mockEmits = vi.fn()
    const { sliderEmit } = createSliderEmit(80, { multiple: false }, mockEmits)

    sliderEmit.emit('change')

    expect(mockEmits).toHaveBeenCalledWith('change', 80, {
      mark: 80,
      item: { mark: 80, value: 80, text: '80' },
      value: 80
    })
  })

  it('should emit multiple range mode detail when emit is called', () => {
    const mockEmits = vi.fn()
    const { sliderEmit } = createSliderEmit([10, 80], { multiple: true }, mockEmits)

    sliderEmit.emit('change')

    expect(mockEmits).toHaveBeenCalledWith('change', [10, 80], {
      mark: [10, 80],
      item: [
        { mark: 10, value: 10, text: '10' },
        { mark: 80, value: 80, text: '80' }
      ],
      value: [10, 80]
    })
  })

  it('should automatically emit input when model value changes', async () => {
    const mockEmits = vi.fn()
    const { model } = createSliderEmit(20, { multiple: false }, mockEmits)

    model.set(50)
    await nextTick()

    expect(mockEmits).toHaveBeenCalledWith('input', 50, expect.anything())
  })
})
