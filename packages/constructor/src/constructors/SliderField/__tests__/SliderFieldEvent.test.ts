// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
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
      onChange: vi.fn(),
      onFocus: vi.fn(),
      onBlur: vi.fn()
    } as unknown as FieldEventInclude

    valueItemMock = {
      min: 10,
      max: 90,
      set: vi.fn()
    } as unknown as SliderFieldValue

    propsMock = {
      min: 0,
      max: 100,
      step: 5,
      multiple: false
    } as SliderFieldProps
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and inputBinds', () => {
    it('should not invoke dependency getters in constructor and should expose complete inputBinds', () => {
      const eventGetter = vi.fn(() => eventMock)
      const valueItemGetter = vi.fn(() => valueItemMock)
      propsMock.disabled = true
      propsMock.readonly = true

      const sliderEvent = new SliderFieldEvent(propsMock, eventGetter, valueItemGetter)

      expect(eventGetter).not.toHaveBeenCalled()
      expect(valueItemGetter).not.toHaveBeenCalled()

      expect(sliderEvent.inputBinds).toEqual({
        type: 'number',
        min: 0,
        max: 100,
        step: 5,
        disabled: true,
        readonly: true,
        onBlur: sliderEvent.onBlur,
        onChange: sliderEvent.onChange,
        onFocus: sliderEvent.onFocus,
        onInput: sliderEvent.onInput
      })
    })
  })

  describe('Slider callbacks (onSliderInput & onSliderChange)', () => {
    it('should call event.onInput with value on onSliderInput (including 0 and range)', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)

      sliderEvent.onSliderInput(50)
      sliderEvent.onSliderInput(0)
      sliderEvent.onSliderInput([20, 80])

      expect(eventMock.onInput).toHaveBeenCalledTimes(3)
      const [firstEvent, firstDetail] = vi.mocked(eventMock.onInput).mock.calls[0]
      expect(firstEvent).toBeInstanceOf(InputEvent)
      expect(firstEvent.type).toBe('input')
      expect(firstDetail).toEqual({ value: 50 })

      expect(vi.mocked(eventMock.onInput).mock.calls[1]?.[1]).toEqual({ value: 0 })
      expect(vi.mocked(eventMock.onInput).mock.calls[2]?.[1]).toEqual({ value: [20, 80] })
    })

    it('should call event.onChange on onSliderChange', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)
      sliderEvent.onSliderChange()

      expect(eventMock.onChange).toHaveBeenCalledTimes(1)
      const [eventArg] = vi.mocked(eventMock.onChange).mock.calls[0]
      expect(eventArg).toBeInstanceOf(InputEvent)
      expect(eventArg?.type).toBe('change')
    })
  })

  describe('onFocus', () => {
    it('should set target value to min if dataset type is min', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)
      const input = document.createElement('input')
      input.dataset.type = 'min'

      const focusEvent = new FocusEvent('focus')
      Object.defineProperty(focusEvent, 'target', { value: input })

      sliderEvent.onFocus(focusEvent)
      expect(input.value).toBe('10')
      expect(eventMock.onFocus).toHaveBeenCalledWith(focusEvent)
    })

    it('should set target value to max if dataset type is max', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)
      const input = document.createElement('input')
      input.dataset.type = 'max'

      const focusEvent = new FocusEvent('focus')
      Object.defineProperty(focusEvent, 'target', { value: input })

      sliderEvent.onFocus(focusEvent)
      expect(input.value).toBe('90')
      expect(eventMock.onFocus).toHaveBeenCalledWith(focusEvent)
    })

    it('should handle null target or unknown dataset.type without throwing', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)
      const nullTargetEvent = new FocusEvent('focus')

      expect(() => sliderEvent.onFocus(nullTargetEvent)).not.toThrow()
      expect(eventMock.onFocus).toHaveBeenCalledWith(nullTargetEvent)

      const input = document.createElement('input')
      input.value = 'keep'
      input.dataset.type = 'other'
      const otherEvent = new FocusEvent('focus')
      Object.defineProperty(otherEvent, 'target', { value: input })

      sliderEvent.onFocus(otherEvent)
      expect(input.value).toBe('keep')
    })
  })

  describe('onBlur', () => {
    it('should clear target value on blur and delegate to event.onBlur', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)
      const input = document.createElement('input')
      input.value = '50'

      const blurEvent = new FocusEvent('blur')
      Object.defineProperty(blurEvent, 'target', { value: input })

      sliderEvent.onBlur(blurEvent)
      expect(input.value).toBe('')
      expect(eventMock.onBlur).toHaveBeenCalledWith(blurEvent)
    })

    it('should handle null target on blur without throwing', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)
      const blurEvent = new FocusEvent('blur')

      expect(() => sliderEvent.onBlur(blurEvent)).not.toThrow()
      expect(eventMock.onBlur).toHaveBeenCalledWith(blurEvent)
    })
  })

  describe('onInput', () => {
    it('should trigger valueItem.set with valueFocus for single mode including 0 and negative values', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)
      const input = document.createElement('input')
      input.type = 'number'

      for (const candidate of ['25', '0', '-15']) {
        input.value = candidate
        const inputEvent = new Event('input')
        Object.defineProperty(inputEvent, 'target', { value: input })
        sliderEvent.onInput(inputEvent)
      }

      expect(valueItemMock.set).toHaveBeenNthCalledWith(1, 25)
      expect(valueItemMock.set).toHaveBeenNthCalledWith(2, 0)
      expect(valueItemMock.set).toHaveBeenNthCalledWith(3, -15)
      expect(eventMock.onInput).toHaveBeenCalledTimes(3)
      expect(eventMock.onInput).toHaveBeenNthCalledWith(1, expect.any(Event), { value: 25 })
      expect(eventMock.onInput).toHaveBeenNthCalledWith(2, expect.any(Event), { value: 0 })
      expect(eventMock.onInput).toHaveBeenNthCalledWith(3, expect.any(Event), { value: -15 })
    })

    it('should trigger valueItem.set with array for min type in multiple mode', () => {
      propsMock.multiple = true
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)

      const input = document.createElement('input')
      input.type = 'number'
      input.value = '25'
      input.dataset.type = 'min'

      const inputEvent = new Event('input')
      Object.defineProperty(inputEvent, 'target', { value: input })

      sliderEvent.onInput(inputEvent)

      expect(valueItemMock.set).toHaveBeenCalledWith([25, 90])
    })

    it('should trigger valueItem.set with array for max type in multiple mode', () => {
      propsMock.multiple = true
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)

      const input = document.createElement('input')
      input.type = 'number'
      input.value = '75'
      input.dataset.type = 'max'

      const inputEvent = new Event('input')
      Object.defineProperty(inputEvent, 'target', { value: input })

      sliderEvent.onInput(inputEvent)

      expect(valueItemMock.set).toHaveBeenCalledWith([10, 75])
    })

    it('should fallback to 0 if valueAsNumber is NaN or Infinity', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)
      const input = document.createElement('input')
      input.type = 'text'
      input.value = 'abc' // valueAsNumber is NaN

      const inputEvent = new Event('input')
      Object.defineProperty(inputEvent, 'target', { value: input })
      sliderEvent.onInput(inputEvent)
      expect(valueItemMock.set).toHaveBeenCalledWith(0)

      const infiniteTarget = { valueAsNumber: Number.POSITIVE_INFINITY, dataset: {} }
      const infiniteEvent = new Event('input')
      Object.defineProperty(infiniteEvent, 'target', { value: infiniteTarget })
      sliderEvent.onInput(infiniteEvent)
      expect(valueItemMock.set).toHaveBeenLastCalledWith(0)
    })

    it('should ignore input when disabled, readonly, or event target is null', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)
      const input = document.createElement('input')
      input.type = 'number'
      input.value = '42'

      // Null target
      sliderEvent.onInput(new Event('input'))
      expect(valueItemMock.set).not.toHaveBeenCalled()

      // Disabled guard
      propsMock.disabled = true
      const disabledEvent = new Event('input')
      Object.defineProperty(disabledEvent, 'target', { value: input })
      sliderEvent.onInput(disabledEvent)
      expect(valueItemMock.set).not.toHaveBeenCalled()

      // Readonly guard
      propsMock.disabled = false
      propsMock.readonly = true
      const readonlyEvent = new Event('input')
      Object.defineProperty(readonlyEvent, 'target', { value: input })
      sliderEvent.onInput(readonlyEvent)
      expect(valueItemMock.set).not.toHaveBeenCalled()
    })
  })

  describe('onChange', () => {
    it('should delegate numeric input change to event.onChange and respect disabled/readonly guards', () => {
      const sliderEvent = new SliderFieldEvent(propsMock, () => eventMock, () => valueItemMock)
      const changeEvent = new Event('change')

      sliderEvent.onChange(changeEvent)
      expect(eventMock.onChange).toHaveBeenCalledTimes(1)
      expect(eventMock.onChange).toHaveBeenCalledWith(changeEvent)

      propsMock.disabled = true
      sliderEvent.onChange(changeEvent)
      expect(eventMock.onChange).toHaveBeenCalledTimes(1)

      propsMock.disabled = false
      propsMock.readonly = true
      sliderEvent.onChange(changeEvent)
      expect(eventMock.onChange).toHaveBeenCalledTimes(1)
    })
  })
})
