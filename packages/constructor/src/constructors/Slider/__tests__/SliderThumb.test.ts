// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
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

function createConcreteSliderThumb() {
  const props = { min: 0, max: 100 } as SliderProps
  const className = 'dxt-slider'
  const focus = new SliderFocus()
  const marksData = new SliderMarksData(props, className)
  const marks = new SliderMarks(props, className, marksData)
  const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(50))
  const value = new SliderValue(focus, marks, model, props)

  const thumb = new ConcreteSliderThumb(props, marksData, marks, value)

  return { thumb }
}

describe('SliderThumb', () => {
  it('should compute mark item and return label text', () => {
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

  it('should return undefined element and rectangle initially', () => {
    const { thumb } = createConcreteSliderThumb()

    expect(thumb.getElement()).toBeUndefined()
    expect(thumb.rectangle).toBeUndefined()
  })

  it('should return element and bounding rect when element ref is assigned', () => {
    const { thumb } = createConcreteSliderThumb()

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
