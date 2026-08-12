// @vitest-environment jsdom
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { SliderFieldEvent } from '../SliderFieldEvent'
import type { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import type { SliderFieldProps } from '../props'
import type { SliderFieldValue } from '../SliderFieldValue'

describe('SliderFieldEvent', () => {
  let eventMock: FieldEventInclude
  let valueItemMock: SliderFieldValue
  let propsMock: SliderFieldProps

  beforeEach(() => {
    eventMock = {
      onInput: vi.fn(),
      onChange: vi.fn()
    } as unknown as FieldEventInclude

    valueItemMock = {
      min: 10,
      max: 90
    } as SliderFieldValue

    propsMock = {
      multiple: false
    } as SliderFieldProps
  })

  it('should call event.onInput with value on onSliderInput', () => {
    const sliderEvent = new SliderFieldEvent(propsMock, eventMock, valueItemMock)
    sliderEvent.onSliderInput(50)

    expect(eventMock.onInput).toHaveBeenCalledTimes(1)
    const [eventArg, detailArg] = vi.mocked(eventMock.onInput).mock.calls[0]
    expect(eventArg).toBeInstanceOf(InputEvent)
    expect(eventArg.type).toBe('input')
    expect(detailArg).toEqual({ value: 50 })
  })

  it('should call event.onChange on onSliderChange', () => {
    const sliderEvent = new SliderFieldEvent(propsMock, eventMock, valueItemMock)
    sliderEvent.onSliderChange()

    expect(eventMock.onChange).toHaveBeenCalledTimes(1)
    const [eventArg] = vi.mocked(eventMock.onChange).mock.calls[0]
    expect(eventArg).toBeInstanceOf(InputEvent)
    expect(eventArg?.type).toBe('change')
  })

  describe('onFocus', () => {
    it('should set target value to min if dataset type is min', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, eventMock, valueItemMock)
      const input = document.createElement('input')
      input.dataset.type = 'min'

      const focusEvent = new FocusEvent('focus')
      Object.defineProperty(focusEvent, 'target', { value: input })

      sliderEvent.onFocus(focusEvent)
      expect(input.value).toBe('10')
    })

    it('should set target value to max if dataset type is max', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, eventMock, valueItemMock)
      const input = document.createElement('input')
      input.dataset.type = 'max'

      const focusEvent = new FocusEvent('focus')
      Object.defineProperty(focusEvent, 'target', { value: input })

      sliderEvent.onFocus(focusEvent)
      expect(input.value).toBe('90')
    })
  })

  describe('onBlur', () => {
    it('should clear target value on blur', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, eventMock, valueItemMock)
      const input = document.createElement('input')
      input.value = '50'

      const blurEvent = new FocusEvent('blur')
      Object.defineProperty(blurEvent, 'target', { value: input })

      sliderEvent.onBlur(blurEvent)
      expect(input.value).toBe('')
    })
  })

  describe('onInput', () => {
    it('should trigger onSliderInput with valueFocus for single mode', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, eventMock, valueItemMock)
      const input = document.createElement('input')
      input.type = 'number'
      input.value = '25'

      const inputEvent = new Event('input')
      Object.defineProperty(inputEvent, 'target', { value: input })

      sliderEvent.onInput(inputEvent)

      const [_, detailArg] = vi.mocked(eventMock.onInput).mock.calls[0]
      expect(detailArg).toEqual({ value: 25 })
    })

    it('should trigger onSliderInput with array for min type in multiple mode', () => {
      propsMock.multiple = true
      const sliderEvent = new SliderFieldEvent(propsMock, eventMock, valueItemMock)

      const input = document.createElement('input')
      input.type = 'number'
      input.value = '25'
      input.dataset.type = 'min'

      const inputEvent = new Event('input')
      Object.defineProperty(inputEvent, 'target', { value: input })

      sliderEvent.onInput(inputEvent)

      const [_, detailArg] = vi.mocked(eventMock.onInput).mock.calls[0]
      expect(detailArg).toEqual({ value: [25, 90] })
    })

    it('should trigger onSliderInput with array for max type in multiple mode', () => {
      propsMock.multiple = true
      const sliderEvent = new SliderFieldEvent(propsMock, eventMock, valueItemMock)

      const input = document.createElement('input')
      input.type = 'number'
      input.value = '75'
      input.dataset.type = 'max'

      const inputEvent = new Event('input')
      Object.defineProperty(inputEvent, 'target', { value: input })

      sliderEvent.onInput(inputEvent)

      const [_, detailArg] = vi.mocked(eventMock.onInput).mock.calls[0]
      expect(detailArg).toEqual({ value: [10, 75] })
    })

    it('should fallback to 0 if valueAsNumber is NaN', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, eventMock, valueItemMock)
      const input = document.createElement('input')
      input.type = 'text'
      input.value = 'abc' // valueAsNumber will be NaN

      const inputEvent = new Event('input')
      Object.defineProperty(inputEvent, 'target', { value: input })

      sliderEvent.onInput(inputEvent)

      const [_, detailArg] = vi.mocked(eventMock.onInput).mock.calls[0]
      expect(detailArg).toEqual({ value: 0 })
    })
  })
})
