// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive, ref } from 'vue'
import { isEventStopped } from '@dxtmisha/functional'

import type { FieldElementInclude } from '../../../classes/Field/FieldElementInclude'
import type { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import { InputPhoneAutofill } from '../InputPhoneAutofill'
import { InputPhoneCountry } from '../InputPhoneCountry'
import { InputPhoneCountryList } from '../InputPhoneCountryList'
import { InputPhoneData } from '../InputPhoneData'
import { InputPhonePaste } from '../InputPhonePaste'
import type { InputPhonePropsBasic } from '../props'

/**
 * Helper to create InputPhoneAutofill with typed mock dependencies.
 *
 * Вспомогательная функция для создания InputPhoneAutofill с типизированными моками зависимостей.
 */
function createAutofill(
  props: InputPhonePropsBasic = {},
  initialValue: string | undefined = '',
  inputElement?: HTMLInputElement
) {
  const valueRef = ref<string | undefined>(initialValue)
  const setSpy = vi.fn((next: unknown) => {
    valueRef.value = next === undefined ? undefined : String(next)
  })
  const setFullSpy = vi.fn()
  const onValueSpy = vi.fn((next?: unknown) => {
    if (next !== undefined) {
      valueRef.value = String(next)
    }
  })

  const maskExpose = {
    setValue: vi.fn(),
    getValue: vi.fn(() => valueRef.value ?? '')
  }

  const mockElement = {
    get: () => inputElement,
    getElement: () => ref(inputElement ? maskExpose : undefined)
  } as unknown as FieldElementInclude
  const mockEvent = {
    isEnabled: () => props.disabled !== true && props.readonly !== true,
    onValue: onValueSpy
  } as unknown as FieldEventInclude
  const mockValue = {
    item: valueRef,
    get boolean() {
      return Boolean(valueRef.value && valueRef.value.length > 0)
    },
    set: setSpy,
    setFull: setFullSpy
  } as unknown as FieldValueInclude<string>

  const reactiveProps = reactive<InputPhonePropsBasic>({ ...props })
  const countryList = new InputPhoneCountryList(reactiveProps)
  const country: InputPhoneCountry = new InputPhoneCountry(
    reactiveProps,
    () => countryList,
    () => data,
    () => mockEvent,
    () => mockValue
  )
  const data: InputPhoneData = new InputPhoneData(
    reactiveProps,
    () => country,
    () => countryList,
    () => mockElement,
    () => mockValue
  )
  const paste = new InputPhonePaste(
    reactiveProps,
    () => country,
    () => countryList,
    () => mockElement,
    () => mockEvent,
    () => mockValue
  )
  const autofill = new InputPhoneAutofill(
    () => country,
    () => mockEvent,
    () => paste
  )

  return {
    autofill,
    country,
    valueRef,
    setFullSpy,
    onValueSpy,
    maskExpose
  }
}

describe('InputPhoneAutofill', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('should handle autofill insertReplacementText, strip duplicated prefixes, and preserve legitimate KZ/IT numbers', async () => {
    const input = document.createElement('input')
    const { autofill, country, valueRef, onValueSpy, setFullSpy, maskExpose } = createAutofill({ countryDefault: 'RU' }, '7', input)

    // 1. Duplicated Russian prefix (+7-79001234567) when browser appends after '+7-'
    input.value = '+7-79001234567'
    const duplicatedRuEvent = new InputEvent('input', { bubbles: true, inputType: 'insertReplacementText', data: null })
    Object.defineProperty(duplicatedRuEvent, 'target', { value: input })
    autofill.onInput(duplicatedRuEvent)
    await nextTick()
    expect(isEventStopped(duplicatedRuEvent)).toBe(true)
    expect(country.item.value).toBe('RU')
    expect(setFullSpy).toHaveBeenCalledWith(true)
    expect(onValueSpy).toHaveBeenCalledWith('+7-900-123-45-67')
    expect(maskExpose.setValue).toHaveBeenCalledWith('+7-900-123-45-67')

    onValueSpy.mockClear()

    // 2. Legitimate Kazakhstan number (+7-701-123-45-67) must NOT have its leading 7 stripped
    input.value = '+7 701 123-45-67'
    const kazakhstanEvent = new InputEvent('input', { bubbles: true, inputType: 'insertReplacementText', data: '+7 701 123-45-67' })
    Object.defineProperty(kazakhstanEvent, 'target', { value: input })
    autofill.onInput(kazakhstanEvent)
    await nextTick()
    expect(isEventStopped(kazakhstanEvent)).toBe(true)
    expect(country.item.value).toBe('KZ')
    expect(onValueSpy).toHaveBeenCalledWith('+7-7-01-123-45-67')

    onValueSpy.mockClear()

    // 3. Domestic trunk prefix (89001234567) via insertReplacementText normalizes to +7 when RU is active
    country.item.value = 'RU'
    valueRef.value = '7'
    input.value = '89001234567'
    const trunkEvent = new InputEvent('input', { bubbles: true, inputType: 'insertReplacementText', data: '89001234567' })
    Object.defineProperty(trunkEvent, 'target', { value: input })
    autofill.onInput(trunkEvent)
    await nextTick()
    expect(isEventStopped(trunkEvent)).toBe(true)
    expect(country.item.value).toBe('RU')
    expect(onValueSpy).toHaveBeenCalledWith('+7-900-123-45-67')

    onValueSpy.mockClear()

    // 4. Appended foreign number after active prefix (+7-+84 91 234 5678) switches country cleanly
    input.value = '+7-+84 91 234 5678'
    const appendedForeignEvent = new InputEvent('input', { bubbles: true, inputType: 'insertReplacementText', data: null })
    Object.defineProperty(appendedForeignEvent, 'target', { value: input })
    autofill.onInput(appendedForeignEvent)
    await nextTick()
    expect(isEventStopped(appendedForeignEvent)).toBe(true)
    expect(country.item.value).toBe('VN')
    expect(onValueSpy).toHaveBeenCalledWith('+84-91-2345-678')

    onValueSpy.mockClear()

    // 5. Duplicated UK prefix (+44-442071234567) strips leading 44
    country.item.value = 'GB'
    valueRef.value = '44'
    input.value = '+44-442071234567'
    const duplicatedGbEvent = new InputEvent('input', { bubbles: true, inputType: 'insertReplacementText', data: null })
    Object.defineProperty(duplicatedGbEvent, 'target', { value: input })
    autofill.onInput(duplicatedGbEvent)
    await nextTick()
    expect(isEventStopped(duplicatedGbEvent)).toBe(true)
    expect(country.item.value).toBe('GB')
    expect(onValueSpy).toHaveBeenCalledWith('+44-20-7123-4567')

    onValueSpy.mockClear()

    // 6. Single-character insertText typing is ignored so regular typing still flows through Mask
    input.value = '+7-9'
    const singleCharEvent = new InputEvent('input', { bubbles: true, inputType: 'insertText', data: '9' })
    Object.defineProperty(singleCharEvent, 'target', { value: input })
    autofill.onInput(singleCharEvent)
    expect(isEventStopped(singleCharEvent)).toBe(false)
    expect(onValueSpy).not.toHaveBeenCalled()

    // 7. Chrome animationstart autofill event resolves and stops propagation
    input.value = '+7-900-123-45-67'
    const animationEvent = new Event('animationstart') as AnimationEvent
    Object.defineProperty(animationEvent, 'animationName', { value: 'onautofillstart' })
    Object.defineProperty(animationEvent, 'target', { value: input })
    autofill.onAnimationstart(animationEvent)
    await nextTick()
    expect(isEventStopped(animationEvent)).toBe(true)
    expect(onValueSpy).toHaveBeenCalledWith('+7-900-123-45-67')
  })

  it('should ignore autofill events when disabled, readonly, or non-autofill animation starts', () => {
    const input = document.createElement('input')
    input.value = '+7-900-123-45-67'

    const { autofill: disabledAutofill, onValueSpy: disabledSpy } = createAutofill({ countryDefault: 'RU', disabled: true }, '7', input)
    const disabledInputEvent = new InputEvent('input', { bubbles: true, inputType: 'insertReplacementText', data: '+7 900 123-45-67' })
    Object.defineProperty(disabledInputEvent, 'target', { value: input })
    disabledAutofill.onInput(disabledInputEvent)
    expect(isEventStopped(disabledInputEvent)).toBe(false)
    expect(disabledSpy).not.toHaveBeenCalled()

    const disabledAnimationEvent = new Event('animationstart') as AnimationEvent
    Object.defineProperty(disabledAnimationEvent, 'animationName', { value: 'onautofillstart' })
    Object.defineProperty(disabledAnimationEvent, 'target', { value: input })
    disabledAutofill.onAnimationstart(disabledAnimationEvent)
    expect(isEventStopped(disabledAnimationEvent)).toBe(false)
    expect(disabledSpy).not.toHaveBeenCalled()

    const { autofill, onValueSpy } = createAutofill({ countryDefault: 'RU' }, '7', input)
    const otherAnimationEvent = new Event('animationstart') as AnimationEvent
    Object.defineProperty(otherAnimationEvent, 'animationName', { value: 'fade-in' })
    Object.defineProperty(otherAnimationEvent, 'target', { value: input })
    autofill.onAnimationstart(otherAnimationEvent)
    expect(isEventStopped(otherAnimationEvent)).toBe(false)
    expect(onValueSpy).not.toHaveBeenCalled()
  })
})
