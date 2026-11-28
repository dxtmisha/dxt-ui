// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { anyToString, GeoPhone, type GeoPhoneMap } from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../../classes/Field/FieldCodeInclude'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import { TextInclude } from '../../../classes/TextInclude'

import type { InputPhoneCountryList } from '../InputPhoneCountryList'
import type { InputPhoneData } from '../InputPhoneData'
import { InputPhoneValidation } from '../InputPhoneValidation'
import type { InputPhonePropsBasic } from '../props'
import type { FieldAllProps } from '../../../types/fieldTypes'

const mountedCleanups: Array<() => void> = []

/**
 * Helper to create InputPhoneValidation inside a mounted Vue component with reactive mount state.
 *
 * Вспомогательная функция для создания InputPhoneValidation внутри смонтированного Vue-компонента с реактивным состоянием монтирования.
 */
async function createValidation(
  props: InputPhonePropsBasic = {},
  initialValue: string | undefined = '',
  defaultCountryPrefix: string = '7',
  initialCountry: string = 'RU'
) {
  const reactiveProps = reactive<InputPhonePropsBasic>({ ...props })
  const valueDefaultRef = ref<string>(defaultCountryPrefix)
  const countryRef = ref<string>(initialCountry)
  const itemRef = ref<GeoPhoneMap | undefined>(undefined)

  let validation!: InputPhoneValidation
  let valueInclude!: FieldValueInclude<string>
  let changeInclude!: FieldChangeInclude

  const Host = defineComponent({
    setup() {
      valueInclude = new FieldValueInclude<string>(reactiveProps)
      if (initialValue !== undefined) {
        valueInclude.set(initialValue)
      }

      const attributesInclude = new FieldAttributesInclude(reactiveProps as FieldAllProps)
      changeInclude = new FieldChangeInclude(reactiveProps)
      const codeInclude = new FieldCodeInclude(reactiveProps as FieldAllProps)
      const textInclude = new TextInclude(reactiveProps)
      const mockCountryList = {
        item: ref(undefined),
        resolveAllowed: () => undefined
      } as unknown as InputPhoneCountryList
      const mockData = {
        valueDefault: valueDefaultRef,
        item: itemRef,
        getDetail: (rawValue?: unknown) => {
          const currentValue = rawValue === undefined ? anyToString(valueInclude.item.value) : anyToString(rawValue)
          const info = GeoPhone.getByPhoneFull(currentValue, true)

          return {
            ...info,
            item: info.item ?? GeoPhone.getByCode(countryRef.value),
            phone: info.phone ?? '',
            isFull: valueInclude.isFull.value
          }
        }
      } as unknown as InputPhoneData

      validation = new InputPhoneValidation(
        reactiveProps as FieldAllProps & Pick<InputPhonePropsBasic, 'countryBlock' | 'phoneMatch'>,
        () => attributesInclude,
        () => valueInclude,
        () => mockCountryList,
        () => mockData,
        () => changeInclude,
        () => codeInclude,
        undefined,
        () => textInclude,
        ref(true)
      )

      return () => h('div')
    }
  })

  const container = document.createElement('div')
  document.body.appendChild(container)
  const app = createApp(Host)
  app.mount(container)
  mountedCleanups.push(() => {
    app.unmount()
    container.remove()
  })
  await nextTick()

  return {
    validation,
    props: reactiveProps,
    valueInclude,
    changeInclude,
    valueDefaultRef,
    countryRef
  }
}

describe('InputPhoneValidation', () => {
  afterEach(() => {
    mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('should treat bare default country prefix as empty for required validation', async () => {
    const { validation, changeInclude, valueInclude } = await createValidation(
      {
        required: true,
        validationCode: {
          valueMissing: 'Phone is required'
        }
      },
      '7',
      '7'
    )

    expect(validation.checkValidity()).toBe(false)
    expect(validation.isError()).toBe(true)
    expect(validation.item.value.validity?.valueMissing).toBe(true)
    expect(validation.message).toBe('')

    changeInclude.to()
    expect(validation.message).toBe('Phone is required')

    valueInclude.set('+7-')
    expect(validation.checkValidity()).toBe(false)

    valueInclude.set('+')
    expect(validation.checkValidity()).toBe(false)

    valueInclude.set('79001234567')
    expect(validation.checkValidity()).toBe(true)
    expect(validation.isError()).toBe(false)
    expect(validation.message).toBe('')
  })

  it('should keep optional field valid when value is only the bare country prefix', async () => {
    const { validation } = await createValidation(
      {
        required: false,
        pattern: '^7[0-9]{10}$'
      },
      '7',
      '7'
    )

    expect(validation.checkValidity()).toBe(true)
    expect(validation.isError()).toBe(false)
  })

  it('should not treat value equal to valueDefault as empty when countryBlock is true', async () => {
    const { validation } = await createValidation(
      {
        required: true,
        countryBlock: true
      },
      '49',
      '49'
    )

    expect(validation.checkValidity()).toBe(true)
    expect(validation.isError()).toBe(false)
  })

  it('should clear cached validation on positive mask status while preserving mask errors', async () => {
    const { validation, valueInclude } = await createValidation(
      {
        required: true,
        validationCode: {
          valueMissing: 'Phone is required'
        }
      },
      '7',
      '7'
    )

    validation.set({
      status: true,
      isFull: false,
      value: '7'
    })

    expect(validation.checkValidity()).toBe(false)
    expect(validation.item.value.validity?.valueMissing).toBe(true)

    validation.set({
      status: false,
      validationMessage: 'Mask error',
      value: '7900'
    })

    expect(validation.checkValidity()).toBe(false)
    expect(validation.item.value.validationMessage).toBe('Mask error')

    valueInclude.set('79001234567')
    validation.set({
      status: true,
      isFull: true,
      value: '79001234567'
    })

    expect(validation.checkValidity()).toBe(true)
  })

  it('should react to updated default country prefix', async () => {
    const { validation, valueInclude, valueDefaultRef } = await createValidation(
      {
        required: true
      },
      '1',
      '1'
    )

    expect(validation.checkValidity()).toBe(false)

    valueDefaultRef.value = '49'
    valueInclude.set('49')
    expect(validation.checkValidity()).toBe(false)

    valueInclude.set('4930123456')
    expect(validation.checkValidity()).toBe(true)
  })

  it('should fail validation on incomplete phone number even when required is false and pass when complete', async () => {
    const { validation, valueInclude, changeInclude } = await createValidation(
      {
        required: false,
        textInvalidPhone: 'Phone number is incomplete'
      },
      '7',
      '7'
    )

    expect(validation.checkValidity()).toBe(true)

    valueInclude.set('+7-900-12')
    valueInclude.setFull(false)
    changeInclude.to()

    expect(validation.checkValidity()).toBe(false)
    expect(validation.isError()).toBe(true)
    expect(validation.message).toBe('Phone number is incomplete')

    valueInclude.set('+7-900-123-45-67')
    valueInclude.setFull(true)

    expect(validation.checkValidity()).toBe(true)
    expect(validation.isError()).toBe(false)
    expect(validation.message).toBe('')
  })

  it('should fall back to default invalidPhone message when validationCode is not provided', async () => {
    const { validation, valueInclude, changeInclude } = await createValidation(
      { required: true },
      '+7-900-12',
      '7'
    )

    valueInclude.setFull(false)
    changeInclude.to()

    expect(validation.checkValidity()).toBe(false)
    expect(validation.message).toBe('Please enter a valid phone number')
  })

  it('should fail validation when phone belongs to a country outside countryList', async () => {
    const { validation, valueInclude, changeInclude, props } = await createValidation(
      {
        required: false,
        countryList: ['RU', 'BY'],
        textInvalidPhone: 'Country is not allowed'
      },
      '79001234567',
      '7'
    )

    // Inject item and resolveAllowed behavior through InputPhoneCountryList contract
    const countryListTarget = (validation as unknown as { countryList: () => Record<string, unknown> }).countryList()
    countryListTarget.item = ref(['RU', 'BY'])
    countryListTarget.resolveAllowed = (item?: { value?: string, items?: Array<{ value: string }> }) => {
      if (!item) return undefined
      if (item.value && ['RU', 'BY'].includes(item.value)) return item.value
      return item.items?.find(entry => ['RU', 'BY'].includes(entry.value))?.value
    }

    changeInclude.to()
    expect(validation.checkValidity()).toBe(true)

    valueInclude.set('+49-30-12345678')
    valueInclude.setFull(true)
    expect(validation.checkValidity()).toBe(false)
    expect(validation.message).toBe('Country is not allowed')

    valueInclude.set('+375-29-123-45-67')
    expect(validation.checkValidity()).toBe(true)
    expect(validation.message).toBe('')

    props.countryBlock = true
    valueInclude.set('+49-30-12345678')
    expect(validation.checkValidity()).toBe(true)
  })

  it('should validate country-specific pattern maps and stateful RegExps via phoneMatch', async () => {
    const { validation, valueInclude, changeInclude, valueDefaultRef, countryRef } = await createValidation(
      {
        required: false,
        textInvalidPhone: 'Invalid mobile format',
        phoneMatch: {
          LV: '^2',
          RO: /^7/g
        }
      },
      '371',
      '371',
      'LV'
    )

    changeInclude.to()
    // Bare prefix on optional field must remain valid
    expect(validation.checkValidity()).toBe(true)

    // LV landline starting with 6 fails ^2 rule
    valueInclude.set('+371-61-234-567')
    valueInclude.setFull(true)
    expect(validation.checkValidity()).toBe(false)
    expect(validation.message).toBe('Invalid mobile format')

    // LV mobile starting with 2 passes ^2 rule
    valueInclude.set('+371-21-234-567')
    expect(validation.checkValidity()).toBe(true)
    expect(validation.message).toBe('')

    // RO global-flag RegExp must remain stateless across repeated calls
    countryRef.value = 'RO'
    valueDefaultRef.value = '40'
    valueInclude.set('+40-712-345-678')
    expect(validation.checkValidity()).toBe(true)
    expect(validation.checkValidity()).toBe(true)

    valueInclude.set('+40-212-345-678')
    expect(validation.checkValidity()).toBe(false)

    // Countries absent from the map stay valid
    countryRef.value = 'RU'
    valueDefaultRef.value = '7'
    valueInclude.set('+7-900-123-45-67')
    expect(validation.checkValidity()).toBe(true)
  })

  it('should support custom callback and global pattern rules in phoneMatch', async () => {
    const validator = vi.fn(({ item, phone }: { item?: { value?: string }, phone?: string }) => {
      if (item?.value === 'LV' && !phone?.startsWith('2')) {
        return 'Latvian mobile must start with 2'
      }

      if (phone?.startsWith('000')) {
        return false
      }

      return true
    })

    const { validation, valueInclude, changeInclude, props, valueDefaultRef, countryRef } = await createValidation(
      {
        required: false,
        textInvalidPhone: 'Fallback invalid phone',
        phoneMatch: validator
      },
      '371',
      '371',
      'LV'
    )

    changeInclude.to()
    // Bare prefix does not invoke phoneMatch
    expect(validation.checkValidity()).toBe(true)
    expect(validator).not.toHaveBeenCalled()

    valueInclude.set('+371-61-234-567')
    valueInclude.setFull(true)
    expect(validation.checkValidity()).toBe(false)
    expect(validation.message).toBe('Latvian mobile must start with 2')
    expect(validator).toHaveBeenCalledWith(expect.objectContaining({
      phone: '61234567',
      full: '37161234567',
      format: '+371-61-234-567',
      isFull: true,
      value: '+371-61-234-567'
    }))
    expect(validator.mock.calls[0]?.[0]?.item?.value).toBe('LV')

    // Returning false uses fallback textInvalidPhone message
    countryRef.value = 'RU'
    valueDefaultRef.value = '7'
    valueInclude.set('+7-000-123-45-67')
    expect(validation.checkValidity()).toBe(false)
    expect(validation.message).toBe('Fallback invalid phone')

    // Returning true passes validation
    valueInclude.set('+7-900-123-45-67')
    expect(validation.checkValidity()).toBe(true)
    expect(validation.message).toBe('')

    // Invalid regex string fails safely without throwing
    props.phoneMatch = '[invalid-regex'
    expect(() => validation.checkValidity()).not.toThrow()
    expect(validation.checkValidity()).toBe(false)
  })
})
