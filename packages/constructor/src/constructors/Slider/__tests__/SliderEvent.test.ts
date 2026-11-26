// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'
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
import type { SliderEmits } from '../types'

function createSliderEvent(initialValue: SliderValueType = 50, props: Partial<SliderProps> = {}) {
  const fullProps = { min: 0, max: 100, step: 1, disabled: false, ...props } as SliderProps
  const naming = new DesignName('dxt.slider')

  const enabled = new EnabledInclude(fullProps)
  const focus = new SliderFocus()
  const marksData = new SliderMarksData(fullProps, naming)
  const marks = new SliderMarks(fullProps, () => marksData)
  const model = new ModelValueInclude<SliderValueType>('value', undefined, undefined, ref(initialValue))
  const value = new SliderValue(fullProps, () => focus, () => marks, () => marksData, () => model)

  const minElement = new SliderThumbMin(fullProps, () => marks, () => marksData, () => value)
  const maxElement = new SliderThumbMax(fullProps, () => marks, () => marksData, () => value)

  const elementRef = ref<HTMLElement | undefined>(undefined)
  const sliderElement = new SliderElement(fullProps, elementRef, () => maxElement, () => minElement)

  const mockEmit = vi.fn()
  const emitsItem = new SliderEmit(
    fullProps,
    () => maxElement,
    () => minElement,
    () => model,
    () => value,
    mockEmit as unknown as ConstrEmit<SliderEmits>
  )

  const go = new SliderGo(
    () => emitsItem,
    () => enabled,
    () => focus,
    () => marks,
    () => sliderElement,
    () => value
  )
  const dragEvent = new SliderDragEvent(fullProps, () => emitsItem, () => go)

  const sliderEvent = new SliderEvent(
    () => dragEvent,
    () => emitsItem,
    () => enabled,
    () => focus,
    () => go,
    () => marksData,
    () => maxElement,
    () => minElement,
    () => sliderElement,
    () => value
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
  afterEach(() => {
    vi.restoreAllMocks()
  })

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

  it('should handle all arrow keys to increase or decrease value', () => {
    const { sliderEvent, model } = createSliderEvent(50)

    const arrowRightEvent = { key: 'ArrowRight', preventDefault: vi.fn() } as unknown as KeyboardEvent
    sliderEvent.onKeydown(arrowRightEvent)
    expect(arrowRightEvent.preventDefault).toHaveBeenCalledOnce()
    expect(model.get()).toBe(51)

    const arrowUpEvent = { code: 'ArrowUp', preventDefault: vi.fn() } as unknown as KeyboardEvent
    sliderEvent.onKeydown(arrowUpEvent)
    expect(model.get()).toBe(52)

    const arrowLeftEvent = { key: 'ArrowLeft', preventDefault: vi.fn() } as unknown as KeyboardEvent
    sliderEvent.onKeydown(arrowLeftEvent)
    expect(model.get()).toBe(51)

    const arrowDownEvent = { code: 'ArrowDown', preventDefault: vi.fn() } as unknown as KeyboardEvent
    sliderEvent.onKeydown(arrowDownEvent)
    expect(model.get()).toBe(50)
  })

  it('should invert ArrowLeft and ArrowRight in horizontal RTL mode while preserving ArrowUp/ArrowDown', () => {
    const { sliderEvent, sliderElement, model } = createSliderEvent(50)
    vi.spyOn(sliderElement, 'isRtl').mockReturnValue(true)

    sliderEvent.onKeydown({ key: 'ArrowRight', preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(model.get()).toBe(49)

    sliderEvent.onKeydown({ key: 'ArrowLeft', preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(model.get()).toBe(50)

    sliderEvent.onKeydown({ key: 'ArrowUp', preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(model.get()).toBe(51)
  })

  it('should handle Home and End keys to jump to range limits', () => {
    const { sliderEvent, model } = createSliderEvent(50, { min: 0, max: 100 })

    sliderEvent.onKeydown({ key: 'Home', preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(model.get()).toBe(0)

    sliderEvent.onKeydown({ key: 'End', preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(model.get()).toBe(100)
  })

  it('should handle PageUp and PageDown keys with and without marks and with decimal steps', () => {
    const { sliderEvent, model } = createSliderEvent(50, { min: 0, max: 100, step: 1 })

    sliderEvent.onKeydown({ key: 'PageUp', preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(model.get()).toBe(60)

    sliderEvent.onKeydown({ key: 'PageDown', preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(model.get()).toBe(50)

    const withMarks = createSliderEvent(25, { marks: [0, 25, 75, 100], magnet: true })
    withMarks.sliderEvent.onKeydown({ key: 'PageUp', preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(withMarks.model.get()).toBe(75)
    withMarks.sliderEvent.onKeydown({ key: 'PageDown', preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(withMarks.model.get()).toBe(25)

    const decimal = createSliderEvent(0.2, { min: 0, max: 1, step: 0.1 })
    decimal.sliderEvent.onKeydown({ key: 'PageUp', preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(decimal.model.get()).toBe(0.3)
  })

  it('should ignore keydown events when disabled, readonly, or during IME composition', () => {
    const disabledCase = createSliderEvent(50, { disabled: true })
    const disabledEvent = { key: 'ArrowRight', preventDefault: vi.fn() } as unknown as KeyboardEvent
    disabledCase.sliderEvent.onKeydown(disabledEvent)
    expect(disabledEvent.preventDefault).not.toHaveBeenCalled()
    expect(disabledCase.model.get()).toBe(50)

    const imeCase = createSliderEvent(50)
    const imeEvent = { key: 'ArrowRight', isComposing: true, preventDefault: vi.fn() } as unknown as KeyboardEvent
    imeCase.sliderEvent.onKeydown(imeEvent)
    expect(imeEvent.preventDefault).not.toHaveBeenCalled()
    expect(imeCase.model.get()).toBe(50)
  })

  it('should process primary mousedown, ignore secondary mouse buttons, and respect disabled state', () => {
    const { sliderEvent, focus, dragEvent } = createSliderEvent(50)

    const dragStartSpy = vi.spyOn(dragEvent, 'start').mockImplementation(() => {})
    const focusElementSpy = vi.spyOn(sliderEvent, 'focusElement').mockImplementation(() => {})

    const rightClickEvent = {
      button: 2,
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
      clientX: 50
    } as unknown as MouseEvent
    sliderEvent.onMousedown(rightClickEvent, SliderFocusType.max)
    expect(dragStartSpy).not.toHaveBeenCalled()

    const mousedownEvent = {
      button: 0,
      cancelable: true,
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

    const disabledCase = createSliderEvent(50, { disabled: true })
    const disabledStartSpy = vi.spyOn(disabledCase.dragEvent, 'start').mockImplementation(() => {})
    disabledCase.sliderEvent.onMousedown({
      button: 0,
      preventDefault: vi.fn(),
      stopPropagation: vi.fn()
    } as unknown as MouseEvent)
    expect(disabledStartSpy).not.toHaveBeenCalled()
  })

  it('should return event handler maps from eventsMin and eventsMax and support direct handlers', () => {
    const { sliderEvent, focus, dragEvent } = createSliderEvent([20, 80], { multiple: true })

    vi.spyOn(dragEvent, 'start').mockImplementation(() => {})
    vi.spyOn(sliderEvent, 'focusElement').mockImplementation(() => {})

    const eventsMin = sliderEvent.eventsMin
    expect(eventsMin).toHaveProperty('onFocus')
    expect(eventsMin).toHaveProperty('onKeydown')
    expect(eventsMin).toHaveProperty('onMousedown')
    expect(eventsMin).toHaveProperty('onTouchstart')

    const minEvent = {
      button: 0,
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
      clientX: 20
    } as unknown as MouseEvent
    ;(eventsMin.onMousedown as (event: MouseEvent) => void)(minEvent)
    expect(focus.get()).toBe(SliderFocusType.min)

    const eventsMax = sliderEvent.eventsMax
    const maxEvent = {
      button: 0,
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
      clientX: 80
    } as unknown as MouseEvent
    ;(eventsMax.onMousedown as (event: MouseEvent) => void)(maxEvent)
    expect(focus.get()).toBe(SliderFocusType.max)

    sliderEvent.onFocusMin()
    expect(focus.get()).toBe(SliderFocusType.min)

    sliderEvent.onFocusMax()
    expect(focus.get()).toBe(SliderFocusType.max)

    sliderEvent.onMousedownMin(minEvent)
    expect(focus.get()).toBe(SliderFocusType.min)

    sliderEvent.onMousedownMax(maxEvent)
    expect(focus.get()).toBe(SliderFocusType.max)
  })
})
