// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import type { SliderValueType } from '../basicTypes'
import { SliderFocus } from '../SliderFocus'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import { SliderThumb } from '../SliderThumb'
import { SliderValue } from '../SliderValue'
import type { SliderProps } from '../props'

class ConcreteSliderThumb extends SliderThumb {
  get mark(): number {
    return 50
  }

  get value(): number {
    return 50
  }

  get valuemin(): number {
    return 0
  }

  get valuemax(): number {
    return 100
  }
}

function createConcreteSliderThumb(propsOverrides: Partial<SliderProps> = {}) {
  const props = { min: 0, max: 100, ...propsOverrides } as SliderProps
  const naming = new DesignName('dxt.slider')
  const focus = new SliderFocus()
  const marksData = new SliderMarksData(props, naming)
  const marks = new SliderMarks(props, () => marksData)
  const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(50))
  const value = new SliderValue(props, () => focus, () => marks, () => marksData, () => model)

  const thumb = new ConcreteSliderThumb(props, () => marks, () => marksData, () => value)

  return { thumb }
}

describe('SliderThumb', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should compute mark item and return label text and slot payload', () => {
    const { thumb } = createConcreteSliderThumb()

    expect(thumb.getItem()).toEqual({
      mark: 50,
      value: 50,
      label: '50'
    })
    expect(thumb.item.value).toEqual(thumb.getItem())
    expect(thumb.getSlot()).toEqual({
      value: 50,
      item: thumb.getItem()
    })
    expect(thumb.label).toBe('50')
  })

  it('should generate complete ARIA attributes including orientation, readonly, and custom valuetext', () => {
    const defaultThumb = createConcreteSliderThumb().thumb
    expect(defaultThumb.aria).toEqual({
      'role': 'slider',
      'aria-valuenow': 50,
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-orientation': 'horizontal'
    })

    const customThumb = createConcreteSliderThumb({
      vertical: true,
      readonly: true,
      marks: [{ mark: 50, value: 50, label: 'Halfway' }]
    }).thumb
    expect(customThumb.aria).toEqual({
      'role': 'slider',
      'aria-valuenow': 50,
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-orientation': 'vertical',
      'aria-readonly': 'true',
      'aria-valuetext': 'Halfway'
    })
  })

  it('should return undefined element and rectangle initially, then reflect assigned DOM element', () => {
    const { thumb } = createConcreteSliderThumb()

    expect(thumb.getElement()).toBeUndefined()
    expect(thumb.rectangle).toBeUndefined()

    const buttonElement = document.createElement('button')
    vi.spyOn(buttonElement, 'getBoundingClientRect').mockReturnValue({
      width: 24,
      height: 24,
      top: 10,
      left: 10
    } as DOMRect)

    thumb.element.value = buttonElement

    expect(thumb.getElement()).toBe(buttonElement)
    expect(thumb.rectangle?.width).toBe(24)
  })

  it('should set focus to element when focus method is called', () => {
    const { thumb } = createConcreteSliderThumb()

    const buttonElement = document.createElement('button')
    const focusSpy = vi.spyOn(buttonElement, 'focus')

    thumb.element.value = buttonElement
    thumb.focus()

    expect(focusSpy).toHaveBeenCalledOnce()
  })
})
