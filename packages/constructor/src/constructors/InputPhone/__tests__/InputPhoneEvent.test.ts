// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { GeoPhone } from '@dxtmisha/functional'

import { FieldChangeInclude } from '../../../classes/Field/FieldChangeInclude'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { ModelInclude } from '../../../classes/ModelInclude'
import type { FieldAllProps, FieldValidationItem } from '../../../types/fieldTypes'
import type { InputPhoneData } from '../InputPhoneData'
import { InputPhoneEvent } from '../InputPhoneEvent'

describe('InputPhoneEvent', () => {
  it('should enrich emitted input and change event payloads with phone detail and preserve custom props.detail', () => {
    const props = reactive<FieldAllProps>({
      detail: {
        source: 'checkout'
      }
    })
    const change = new FieldChangeInclude(props)
    const value = new FieldValueInclude<string>(props)
    value.set('+371-21-234-567')
    value.setFull(true)

    const detail = {
      ...GeoPhone.getByPhoneFull('+371-21-234-567', true),
      isFull: true
    }
    const mockData = {
      getDetail: () => detail
    } as unknown as InputPhoneData
    const emitted: Array<{ type: string, args: unknown[] }> = []
    const emits = vi.fn((type: string, ...args: unknown[]) => {
      emitted.push({ type, args })
    })

    const phoneEvent = new InputPhoneEvent(
      props,
      () => change,
      () => value,
      () => mockData,
      undefined,
      emits as never
    )

    phoneEvent.onAndChange(new Event('input'))

    const inputLite = emitted.find(entry => entry.type === 'inputLite')?.args[0] as FieldValidationItem
    const changeEvent = emitted.find(entry => entry.type === 'change')?.args[1] as FieldValidationItem

    expect(inputLite.detail).toMatchObject({
      phone: '21234567',
      full: '37121234567',
      format: '+371-21-234-567',
      isFull: true,
      source: 'checkout'
    })
    expect(inputLite.detail?.item?.value).toBe('LV')
    expect(changeEvent.detail).toMatchObject({
      phone: '21234567',
      full: '37121234567',
      format: '+371-21-234-567',
      isFull: true,
      source: 'checkout'
    })

    // Ensure dynamic updates from data.getDetail() are reflected on subsequent emits
    Object.assign(detail, GeoPhone.getByPhoneFull('+40-71-234-5678', true), { isFull: true })
    phoneEvent.on(new Event('input'))

    const latestInputLite = emitted.filter(entry => entry.type === 'inputLite').at(-1)?.args[0] as FieldValidationItem
    expect(latestInputLite.detail).toMatchObject({
      phone: '712345678',
      full: '40712345678',
      format: '+40-71-234-5678',
      isFull: true,
      source: 'checkout'
    })
    expect(latestInputLite.detail?.item?.value).toBe('RO')
  })

  it('should emit update:e164/update:modelE164 and update:digits/update:modelDigits on input and reactive updates', async () => {
    const scope = effectScope()
    const props = reactive<FieldAllProps>({})
    const change = new FieldChangeInclude(props)
    const value = new FieldValueInclude<string>(props)
    const e164Ref = ref<string | undefined>()
    const digitsRef = ref<string | undefined>()

    const emitE164Spy = vi.fn()
    const emitDigitsSpy = vi.fn()
    const mockData = {
      getDetail: () => ({ ...GeoPhone.getByPhoneFull('+7-900-123-45-67', true), isFull: true }),
      e164: e164Ref,
      digits: digitsRef
    } as unknown as InputPhoneData

    const phoneEvent = scope.run(() => {
      const instance = new InputPhoneEvent(
        props,
        () => change,
        () => value,
        () => mockData,
        undefined,
        undefined,
        undefined,
        () => ({ emit: emitE164Spy }) as unknown as ModelInclude<string | undefined>,
        () => ({ emit: emitDigitsSpy }) as unknown as ModelInclude<string | undefined>
      )
      instance.onMounted()
      return instance
    })!

    e164Ref.value = '+79001234567'
    digitsRef.value = '79001234567'
    await nextTick()
    expect(emitE164Spy).toHaveBeenCalledWith('+79001234567')
    expect(emitDigitsSpy).toHaveBeenCalledWith('79001234567')

    emitE164Spy.mockClear()
    emitDigitsSpy.mockClear()
    phoneEvent.on(new Event('input'))
    expect(emitE164Spy).toHaveBeenCalledWith('+79001234567')
    expect(emitDigitsSpy).toHaveBeenCalledWith('79001234567')

    phoneEvent.onUnmounted()
    scope.stop()
  })
})
