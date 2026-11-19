// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive, ref } from 'vue'

import type { FieldElementInclude } from '../../../classes/Field/FieldElementInclude'
import type { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import { InputPhoneData } from '../InputPhoneData'
import { InputPhonePaste } from '../InputPhonePaste'
import type { InputPhonePropsBasic } from '../props'

/**
 * Helper to create InputPhonePaste with typed mock dependencies.
 *
 * Вспомогательная функция для создания InputPhonePaste с типизированными моками зависимостей.
 */
function createPaste(
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
  const data = new InputPhoneData(
    reactiveProps,
    () => mockElement,
    () => mockEvent,
    () => mockValue
  )
  const paste = new InputPhonePaste(
    reactiveProps,
    () => data,
    () => mockElement,
    () => mockEvent,
    () => mockValue
  )

  return {
    paste,
    data,
    props: reactiveProps,
    valueRef,
    setFullSpy,
    onValueSpy,
    maskExpose
  }
}

/**
 * Helper to build a synthetic ClipboardEvent with selection range and clipboard text.
 *
 * Вспомогательная функция для создания события ClipboardEvent с диапазоном выделения и текстом буфера.
 */
function createPasteEvent(
  text: string | undefined,
  input: HTMLInputElement,
  selectionStart: number,
  selectionEnd: number = selectionStart
): ClipboardEvent {
  input.setSelectionRange(selectionStart, selectionEnd)

  const event = new Event('paste', {
    bubbles: true,
    cancelable: true
  }) as ClipboardEvent

  Object.defineProperty(event, 'target', { value: input })

  if (text !== undefined) {
    Object.defineProperty(event, 'clipboardData', {
      value: {
        getData: (type: string) => (type === 'text' ? text : '')
      }
    })
  }

  return event
}

describe('InputPhonePaste', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('should switch country and apply formatted value when clipboard contains a full international number without selection', async () => {
    const input = document.createElement('input')
    input.value = '+44-'
    const { paste, data, setFullSpy, onValueSpy, maskExpose } = createPaste({ countryDefault: 'GB' }, '44', input)

    const pasteEvent = createPasteEvent('+7 (900) 123-45-67', input, 4)
    paste.onPaste(pasteEvent)
    await nextTick()

    expect(pasteEvent.defaultPrevented).toBe(true)
    expect(data.country.value).toBe('RU')
    expect(setFullSpy).toHaveBeenCalledWith(true)
    expect(onValueSpy).toHaveBeenCalledWith('+7-900-123-45-67')
    expect(maskExpose.setValue).toHaveBeenCalledWith('+7-900-123-45-67')
  })

  it('should skip full-format check and let normal paste run when there is a partial selection', () => {
    const input = document.createElement('input')
    input.value = '+44-7911-123456'
    const { paste, data, onValueSpy } = createPaste({ countryDefault: 'GB' }, '447911123456', input)

    const partialEndEvent = createPasteEvent('+7 (900) 123-45-67', input, 4, input.value.length)
    paste.onPaste(partialEndEvent)

    expect(partialEndEvent.defaultPrevented).toBe(false)
    expect(data.country.value).toBe('GB')
    expect(onValueSpy).not.toHaveBeenCalled()

    const partialStartEvent = createPasteEvent('+7 (900) 123-45-67', input, 0, 4)
    paste.onPaste(partialStartEvent)

    expect(partialStartEvent.defaultPrevented).toBe(false)
    expect(data.country.value).toBe('GB')
    expect(onValueSpy).not.toHaveBeenCalled()
  })

  it('should switch country and replace value when the full field is selected', async () => {
    const input = document.createElement('input')
    input.value = '+84-91-2345-678'
    const { paste, data, setFullSpy, onValueSpy, maskExpose } = createPaste({ countryDefault: 'VN' }, '84912345678', input)

    const pasteEvent = createPasteEvent('+7 (900) 123-45-67', input, 0, input.value.length)
    paste.onPaste(pasteEvent)
    await nextTick()

    expect(pasteEvent.defaultPrevented).toBe(true)
    expect(data.country.value).toBe('RU')
    expect(setFullSpy).toHaveBeenCalledWith(true)
    expect(onValueSpy).toHaveBeenCalledWith('+7-900-123-45-67')
    expect(maskExpose.setValue).toHaveBeenCalledWith('+7-900-123-45-67')
  })

  it('should replace active country within trunk prefix on full paste without mistaking foreign codes', async () => {
    const input = document.createElement('input')
    input.value = '+7-'
    const { paste, data, setFullSpy, onValueSpy, maskExpose } = createPaste({ countryDefault: 'RU' }, '7', input)

    const trunkPlusEvent = createPasteEvent('+89023343333', input, 3)
    paste.onPaste(trunkPlusEvent)
    await nextTick()

    expect(trunkPlusEvent.defaultPrevented).toBe(true)
    expect(data.country.value).toBe('RU')
    expect(setFullSpy).toHaveBeenCalledWith(true)
    expect(onValueSpy).toHaveBeenCalledWith('+7-902-334-33-33')
    expect(maskExpose.setValue).toHaveBeenCalledWith('+7-902-334-33-33')

    onValueSpy.mockClear()

    const vietnamEvent = createPasteEvent('+84 91 234 5678', input, 3)
    paste.onPaste(vietnamEvent)
    await nextTick()

    expect(vietnamEvent.defaultPrevented).toBe(true)
    expect(data.country.value).toBe('VN')
    expect(onValueSpy).toHaveBeenCalledWith('+84-91-2345-678')
  })

  it('should not treat incomplete local or incomplete trunk numbers as full country phones', () => {
    const input = document.createElement('input')
    input.value = '+7-'
    const { paste, data, onValueSpy } = createPaste({ countryDefault: 'RU' }, '7', input)

    const localEvent = createPasteEvent('9001234567', input, 3)
    paste.onPaste(localEvent)
    expect(localEvent.defaultPrevented).toBe(false)
    expect(data.country.value).toBe('RU')
    expect(onValueSpy).not.toHaveBeenCalled()

    const incompleteTrunkEvent = createPasteEvent('+8902334333', input, 3)
    paste.onPaste(incompleteTrunkEvent)
    expect(incompleteTrunkEvent.defaultPrevented).toBe(false)
    expect(data.country.value).toBe('RU')
    expect(onValueSpy).not.toHaveBeenCalled()
  })

  it('should respect countryBlock for foreign numbers while deduplicating same-country full paste', () => {
    const input = document.createElement('input')
    input.value = '+7-'
    const { paste, data, onValueSpy } = createPaste({ countryDefault: 'RU', countryBlock: true }, '7', input)

    const sameCountryEvent = createPasteEvent('+7 (900) 123-45-67', input, 3)
    paste.onPaste(sameCountryEvent)
    expect(sameCountryEvent.defaultPrevented).toBe(true)
    expect(data.country.value).toBe('RU')
    expect(onValueSpy).toHaveBeenCalledWith('+7-900-123-45-67')

    onValueSpy.mockClear()

    const foreignEvent = createPasteEvent('+84 91 234 5678', input, 3)
    paste.onPaste(foreignEvent)
    expect(foreignEvent.defaultPrevented).toBe(false)
    expect(data.country.value).toBe('RU')
    expect(onValueSpy).not.toHaveBeenCalled()
  })

  it('should ignore paste when disabled, readonly, or clipboard text is missing or empty', () => {
    const input = document.createElement('input')
    input.value = '+44-'
    const { paste, data, onValueSpy } = createPaste({ countryDefault: 'GB', readonly: true }, '44', input)

    const readonlyEvent = createPasteEvent('+7 (900) 123-45-67', input, 4)
    paste.onPaste(readonlyEvent)
    expect(readonlyEvent.defaultPrevented).toBe(false)
    expect(data.country.value).toBe('GB')
    expect(onValueSpy).not.toHaveBeenCalled()

    const { paste: enabledPaste, onValueSpy: enabledOnValueSpy } = createPaste({ countryDefault: 'GB' }, '44', input)
    const missingClipboardEvent = createPasteEvent(undefined, input, 4)
    enabledPaste.onPaste(missingClipboardEvent)
    expect(missingClipboardEvent.defaultPrevented).toBe(false)
    expect(enabledOnValueSpy).not.toHaveBeenCalled()

    const nonDigitClipboardEvent = createPasteEvent('abc---', input, 4)
    enabledPaste.onPaste(nonDigitClipboardEvent)
    expect(nonDigitClipboardEvent.defaultPrevented).toBe(false)
    expect(enabledOnValueSpy).not.toHaveBeenCalled()
  })
})
