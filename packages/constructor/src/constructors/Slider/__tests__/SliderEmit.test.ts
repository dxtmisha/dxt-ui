// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'
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
import type { SliderEmits } from '../types'

function createSliderEmit(
  initialValue: SliderValueType | undefined,
  props: Partial<SliderProps> = {},
  mockEmits?: ReturnType<typeof vi.fn>
) {
  const fullProps = { min: 0, max: 100, ...props } as SliderProps
  const naming = new DesignName('dxt.slider')
  const focus = new SliderFocus()
  const marksData = new SliderMarksData(fullProps, naming)
  const marks = new SliderMarks(fullProps, () => marksData)
  const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(initialValue))
  const sliderValue = new SliderValue(fullProps, () => focus, () => marks, () => marksData, () => model)

  const mockMinItem: SliderMarkItem = { mark: 10, value: 10, label: '10' }
  const mockMaxItem: SliderMarkItem = {
    mark: typeof initialValue === 'number' ? initialValue : 80,
    value: typeof initialValue === 'number' ? initialValue : 80,
    label: String(typeof initialValue === 'number' ? initialValue : 80)
  }

  const minElement = {
    item: ref(mockMinItem),
    getItem: () => mockMinItem
  } as unknown as SliderThumbMin

  const maxElement = {
    item: ref(mockMaxItem),
    getItem: () => mockMaxItem
  } as unknown as SliderThumbMax

  const sliderEmit = new SliderEmit(
    fullProps,
    () => maxElement,
    () => minElement,
    () => model,
    () => sliderValue,
    mockEmits as unknown as ConstrEmit<SliderEmits>
  )

  return { sliderEmit, model, mockEmits }
}

describe('SliderEmit', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should emit single mode detail and changeLite when emit is called', () => {
    const mockEmits = vi.fn()
    const { sliderEmit } = createSliderEmit(80, { multiple: false }, mockEmits)

    sliderEmit.emit('change')

    expect(mockEmits).toHaveBeenCalledWith('change', {
      mark: 80,
      item: { mark: 80, value: 80, label: '80' },
      value: 80
    })
    expect(mockEmits).toHaveBeenCalledWith('changeLite', 80)
  })

  it('should emit multiple range mode detail and changeLite when emit is called', () => {
    const mockEmits = vi.fn()
    const { sliderEmit } = createSliderEmit([10, 80], { multiple: true }, mockEmits)

    sliderEmit.emit('change')

    expect(mockEmits).toHaveBeenCalledWith('change', {
      mark: [10, 80],
      item: [
        { mark: 10, value: 10, label: '10' },
        { mark: 80, value: 80, label: '80' }
      ],
      value: [10, 80]
    })
    expect(mockEmits).toHaveBeenCalledWith('changeLite', [10, 80])
  })

  it('should emit input and inputLite including falsy numeric zero value', () => {
    const mockEmits = vi.fn()
    const { sliderEmit } = createSliderEmit(0, { min: -50, max: 50, multiple: false }, mockEmits)

    sliderEmit.emit('input')

    expect(mockEmits).toHaveBeenCalledWith('input', {
      mark: 0,
      item: { mark: 0, value: 0, label: '0' },
      value: 0
    })
    expect(mockEmits).toHaveBeenCalledWith('inputLite', 0)
  })

  it('should not emit when model value is undefined', () => {
    const mockEmits = vi.fn()
    const { sliderEmit } = createSliderEmit(undefined, { multiple: false }, mockEmits)

    sliderEmit.emit('input')
    sliderEmit.emit('change')

    expect(mockEmits).not.toHaveBeenCalled()
  })
})
