// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { GeoPhoneMap } from '@dxtmisha/functional'

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
 * Helper to create InputPhoneValidation inside a mounted Vue component so ClientOnlyInclude is active.
 *
 * Вспомогательная функция для создания InputPhoneValidation внутри смонтированного Vue-компонента для активации ClientOnlyInclude.
 */
async function createValidation(
  props: InputPhonePropsBasic = {},
  initialValue: string | undefined = '',
  defaultCountryPrefix: string = '7'
) {
  const reactiveProps = reactive<InputPhonePropsBasic>({ ...props })
  const valueDefaultRef = ref<string>(defaultCountryPrefix)
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
        item: itemRef
      } as unknown as InputPhoneData

      validation = new InputPhoneValidation(
        reactiveProps as FieldAllProps & Pick<InputPhonePropsBasic, 'countryBlock'>,
        () => attributesInclude,
        () => valueInclude,
        () => mockCountryList,
        () => mockData,
        () => changeInclude,
        () => codeInclude,
        undefined,
        () => textInclude
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
    valueDefaultRef
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
})
