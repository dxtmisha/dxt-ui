// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { GeoPhone } from '@dxtmisha/functional'

import type { FieldElementInclude } from '../../../classes/Field/FieldElementInclude'
import type { InputPhoneData } from '../InputPhoneData'
import { InputPhoneValue } from '../InputPhoneValue'
import type { InputPhonePropsBasic } from '../props'

describe('InputPhoneValue', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
  })

  function createValue(
    initialProps: InputPhonePropsBasic = {},
    country: string = 'RU'
  ) {
    const scope = effectScope()
    const props = reactive<InputPhonePropsBasic>({ ...initialProps })
    const setValueSpy: Array<unknown> = []

    const mockElement = {
      getElement: () => ref({
        setValue: (value: unknown) => setValueSpy.push(value)
      })
    } as unknown as FieldElementInclude

    const mockData = {
      getDetail: (rawValue?: unknown) => {
        const valueString = String(rawValue ?? '')
        const info = GeoPhone.getByPhoneFull(valueString, true)

        return {
          ...info,
          item: info.item ?? GeoPhone.getByCode(country),
          phone: info.phone ?? '',
          isFull: valueInstance.isFull.value
        }
      }
    } as unknown as InputPhoneData

    let valueInstance!: InputPhoneValue

    scope.run(() => {
      valueInstance = new InputPhoneValue(
        props,
        () => mockData,
        () => mockElement
      )
      valueInstance.onMounted()
    })

    cleanups.push(() => {
      valueInstance.onUnmounted()
      scope.stop()
    })

    return {
      props,
      valueInstance,
      setValueSpy
    }
  }

  it('should format itemByFull and getValue() according to formatOutput mode', () => {
    const { props, valueInstance } = createValue({
      value: '+7-900-123-45-67'
    })

    expect(valueInstance.expose().getValue()).toBe('+7-900-123-45-67')

    props.formatOutput = 'e164'
    expect(valueInstance.itemByFull.value).toBe('+79001234567')
    expect(valueInstance.expose().getValue()).toBe('+79001234567')

    props.formatOutput = 'digits'
    expect(valueInstance.itemByFull.value).toBe('79001234567')
    expect(valueInstance.expose().getValue()).toBe('79001234567')

    valueInstance.setFull(false)
    expect(valueInstance.expose().getValue()).toBeUndefined()
  })

  it('should prevent formatOutput round-trip echo from overwriting masked value while applying external changes', async () => {
    const { props, valueInstance } = createValue({
      formatOutput: 'e164',
      modelValue: '+7-900-123-45-67'
    })

    // Same phone echoed back in e164 format must not overwrite masked value
    props.modelValue = '+79001234567'
    await nextTick()
    expect(valueInstance.item.value).toBe('+7-900-123-45-67')

    // Genuine external update in e164 must apply to internal state
    props.modelValue = '+79005554433'
    await nextTick()
    expect(valueInstance.item.value).toBe('+79005554433')
  })

  it('should initialize from e164/digits props and synchronize external updates without echoing same phone', async () => {
    const { props: byE164Props, valueInstance: byE164, setValueSpy: e164SetSpy } = createValue({
      e164: '+79001234567'
    })

    expect(byE164.item.value).toBe('+79001234567')
    byE164.set('+7-900-123-45-67')
    e164SetSpy.length = 0

    byE164Props.e164 = '+79001234567'
    await nextTick()
    expect(byE164.item.value).toBe('+7-900-123-45-67')
    expect(e164SetSpy).toHaveLength(0)

    byE164Props.e164 = '+79998887766'
    await nextTick()
    expect(byE164.item.value).toBe('+79998887766')

    const { props: byDigitsProps, valueInstance: byDigits } = createValue({
      modelDigits: '375291234567'
    })

    expect(byDigits.item.value).toBe('375291234567')
    byDigitsProps.modelDigits = '79001234567'
    await nextTick()
    expect(byDigits.item.value).toBe('79001234567')
  })
})
