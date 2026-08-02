// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { SliderFocusType, type SliderValueType } from '../basicTypes'
import { SliderDragEvent } from '../SliderDragEvent'
import { SliderElement } from '../SliderElement'
import { SliderEmit } from '../SliderEmit'
import { SliderEvent } from '../SliderEvent'
import { SliderFocus } from '../SliderFocus'
import { SliderGo } from '../SliderGo'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import { SliderThumbMax } from '../SliderThumbMax'
import { SliderThumbMin } from '../SliderThumbMin'
import { SliderValue } from '../SliderValue'
import type { SliderProps } from '../props'

function createSliderEvent(initialValue: SliderValueType = 50, props: Partial<SliderProps> = {}) {
  const fullProps = { min: 0, max: 100, step: 1, disabled: false, ...props } as SliderProps
  const className = 'dxt-slider'

  const enabled = new EnabledInclude(fullProps)
  const focus = new SliderFocus()
  const marksData = new SliderMarksData(fullProps, className)
  const marks = new SliderMarks(fullProps, className, marksData)
  const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(initialValue))
  const value = new SliderValue(focus, marks, model, fullProps)

  const minElement = new SliderThumbMin(marks, value)
  const maxElement = new SliderThumbMax(marks, value)

  const elementRef = ref<HTMLElement | undefined>(undefined)
  const sliderElement = new SliderElement(fullProps, elementRef, maxElement, minElement)

  const mockEmit = vi.fn()
  const emitsItem = new SliderEmit(fullProps, model, value, minElement, maxElement, mockEmit)

  const go = new SliderGo(emitsItem, enabled, focus, marks, sliderElement, value)
  const dragEvent = new SliderDragEvent(fullProps, emitsItem, go)

  const sliderEvent = new SliderEvent(
    fullProps,
    dragEvent,
    emitsItem,
    enabled,
    focus,
    go,
    marksData,
    maxElement,
    minElement,
    sliderElement,
    value
  )

  return {
    sliderEvent,
    focus,
    model,
    minElement,
    maxElement,
    go,
    dragEvent,
    sliderElement,
    mockEmit
  }
}

describe('SliderEvent', () => {
  it('should focus correct thumb handle element', () => {
    const { sliderEvent, focus, minElement, maxElement } = createSliderEvent(50)

    const minFocusSpy = vi.spyOn(minElement, 'focus').mockImplementation(() => {})
    const maxFocusSpy = vi.spyOn(maxElement, 'focus').mockImplementation(() => {})

    focus.set(SliderFocusType.max)
    sliderEvent.focusElement()
    expect(maxFocusSpy).toHaveBeenCalledOnce()

    focus.set(SliderFocusType.min)
    sliderEvent.focusElement()
    expect(minFocusSpy).toHaveBeenCalledOnce()
  })

  it('should handle arrow keydown events to increase or decrease value', () => {
    const { sliderEvent, model } = createSliderEvent(50)

    const preventDefault = vi.fn()
    const arrowRightEvent = { code: 'ArrowRight', preventDefault } as unknown as KeyboardEvent

    sliderEvent.onKeydown(arrowRightEvent)
    expect(preventDefault).toHaveBeenCalledOnce()
    expect(model.getValue()).toBe(51)

    const arrowDownEvent = { code: 'ArrowDown', preventDefault: vi.fn() } as unknown as KeyboardEvent
    sliderEvent.onKeydown(arrowDownEvent)
    expect(model.getValue()).toBe(50)
  })

  it('should handle Home and End keys to jump to range limits', () => {
    const { sliderEvent, model } = createSliderEvent(50, { min: 0, max: 100 })

    const homeEvent = { code: 'Home', preventDefault: vi.fn() } as unknown as KeyboardEvent
    sliderEvent.onKeydown(homeEvent)
    expect(model.getValue()).toBe(0)

    const endEvent = { code: 'End', preventDefault: vi.fn() } as unknown as KeyboardEvent
    sliderEvent.onKeydown(endEvent)
    expect(model.getValue()).toBe(100)
  })

  it('should handle PageUp and PageDown keys for large step navigation', () => {
    const { sliderEvent, model } = createSliderEvent(50, { min: 0, max: 100, step: 1 })

    // 10% of range 100 is 10
    const pageUpEvent = { code: 'PageUp', preventDefault: vi.fn() } as unknown as KeyboardEvent
    sliderEvent.onKeydown(pageUpEvent)
    expect(model.getValue()).toBe(60)

    const pageDownEvent = { code: 'PageDown', preventDefault: vi.fn() } as unknown as KeyboardEvent
    sliderEvent.onKeydown(pageDownEvent)
    expect(model.getValue()).toBe(50)
  })

  it('should ignore keydown events when component is disabled', () => {
    const { sliderEvent, model } = createSliderEvent(50, { disabled: true })

    const preventDefault = vi.fn()
    const arrowRightEvent = { code: 'ArrowRight', preventDefault } as unknown as KeyboardEvent

    sliderEvent.onKeydown(arrowRightEvent)
    expect(preventDefault).not.toHaveBeenCalled()
    expect(model.getValue()).toBe(50)
  })

  it('should process mousedown event, update focus, and trigger dragging', () => {
    const { sliderEvent, focus, dragEvent } = createSliderEvent(50)

    const dragStartSpy = vi.spyOn(dragEvent, 'start').mockImplementation(() => {})
    const focusElementSpy = vi.spyOn(sliderEvent, 'focusElement').mockImplementation(() => {})

    const mousedownEvent = {
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
      clientX: 50
    } as unknown as MouseEvent

    sliderEvent.onMousedown(mousedownEvent, SliderFocusType.max)

    expect(mousedownEvent.preventDefault).toHaveBeenCalledOnce()
    expect(mousedownEvent.stopPropagation).toHaveBeenCalledOnce()
    expect(focus.get()).toBe(SliderFocusType.max)
    expect(focusElementSpy).toHaveBeenCalledOnce()
    expect(dragStartSpy).toHaveBeenCalledOnce()
  })

  it('should ignore mousedown event when component is disabled', () => {
    const { sliderEvent, dragEvent } = createSliderEvent(50, { disabled: true })

    const dragStartSpy = vi.spyOn(dragEvent, 'start').mockImplementation(() => {})

    const mousedownEvent = {
      preventDefault: vi.fn(),
      stopPropagation: vi.fn()
    } as unknown as MouseEvent

    sliderEvent.onMousedown(mousedownEvent)

    expect(mousedownEvent.preventDefault).not.toHaveBeenCalled()
    expect(dragStartSpy).not.toHaveBeenCalled()
  })
})
