// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { InputPhoneDesign } from '../InputPhoneDesign'
import { defaultsInputPhone, type InputPhoneProps } from '../props'
import type {
  InputPhoneClasses,
  InputPhoneComponents,
  InputPhoneEmits,
  InputPhoneExpose,
  InputPhoneSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const MockField = defineComponent({
  name: 'MockField',
  inheritAttrs: false,
  props: {
    validationMessage: String,
    disabled: Boolean,
    readonly: Boolean
  },
  setup(componentProps, { attrs, slots }) {
    return () => {
      const control = {
        id: 'phone-field-1',
        className: 'd1-field__body__input',
        classHidden: 'd1-field__body__hidden',
        classForFocus: 'd1-field__body__focus',
        binds: {
          'id': 'phone-field-1',
          'class': 'd1-field__body__input',
          'disabled': componentProps.disabled,
          'readonly': componentProps.readonly,
          'data-input': 'phone-field-1'
        }
      }

      return h(
        'div',
        {
          'class': ['mock-field', attrs.class],
          'style': attrs.style,
          'data-validation': componentProps.validationMessage ?? '',
          'data-testid': attrs['data-testid']
        },
        [
          ...(slots.leading?.(control) ?? []),
          ...(slots.default?.(control) ?? []),
          ...(slots.trailing?.(control) ?? [])
        ]
      )
    }
  }
})

const MockDialCode = defineComponent({
  name: 'MockDialCode',
  props: {
    value: String,
    disabled: Boolean
  },
  emits: ['click', 'window'],
  setup(componentProps, { emit }) {
    return () => h(
      'button',
      {
        'type': 'button',
        'class': 'mock-dial-code',
        'data-country': componentProps.value ?? '',
        'disabled': componentProps.disabled,
        'onClick': (event: MouseEvent) => emit('click', event, { type: 'click', value: 'DE', detail: undefined })
      },
      componentProps.value ?? ''
    )
  }
})

const MockMask = defineComponent({
  name: 'MockMask',
  props: {
    value: [String, Number],
    modelValue: [String, Number],
    align: String,
    inputAttrs: Object
  },
  emits: ['blur', 'input', 'change'],
  setup(componentProps, { emit, expose }) {
    const inputRef = ref<HTMLInputElement>()
    const clearSpy = vi.fn()
    expose({
      input: inputRef,
      clear: clearSpy
    })

    return () => h('div', { 'class': 'mock-mask', 'data-align': componentProps.align }, [
      h('input', {
        ref: inputRef,
        ...(componentProps.inputAttrs as Record<string, unknown>),
        class: ['mock-mask__input', (componentProps.inputAttrs as Record<string, unknown>)?.class],
        value: componentProps.value ?? componentProps.modelValue ?? '',
        onBlur: (event: FocusEvent) => emit('blur', event),
        onInput: (event: InputEvent) => emit('input', event, { status: true, value: '79001234567', validationMessage: '' }),
        onChange: (event: Event) => emit('change', event, { status: true, value: '79001234567', validationMessage: '' })
      })
    ])
  }
})

/**
 * Mounts InputPhoneDesign inside a test Vue app.
 *
 * Монтирует InputPhoneDesign внутри тестового приложения Vue.
 */
async function mountInputPhoneDesign(
  initialProps: InputPhoneProps = {},
  extraAttrs: Record<string, unknown> = {},
  slots: InputPhoneSlots = {}
) {
  const props = reactive<InputPhoneProps>({
    ...(defaultsInputPhone as InputPhoneProps),
    ...initialProps
  })
  const emittedEvents: Array<{ type: string, args: unknown[] }> = []
  let exposed!: InputPhoneExpose

  const Inner = defineComponent({
    inheritAttrs: false,
    setup(_props, { expose }) {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-inputPhone': true
        }
      }))

      const design = new InputPhoneDesign<
        InputPhoneComponents,
        InputPhoneExpose,
        InputPhoneClasses,
        InputPhoneProps
      >(
        'd1.inputPhone',
        props,
        {
          classes: classesToken,
          emits: (type: keyof InputPhoneEmits, ...args: unknown[]) => {
            emittedEvents.push({ type: String(type), args })
          },
          components: {
            field: MockField,
            inputPhoneDialCode: MockDialCode,
            mask: MockMask
          }
        }
      )

      exposed = design.expose()
      expose(exposed)
      return design.render()
    }
  })

  const Host = defineComponent({
    setup() {
      return () => h(Inner, extraAttrs, slots as Record<string, () => unknown>)
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
    container,
    props,
    exposed,
    emittedEvents
  }
}

describe('InputPhoneDesign', () => {
  it('should render field with merged external attrs, class, style, slots, and dial code', async () => {
    const { container } = await mountInputPhoneDesign(
      {
        countryDefault: 'US',
        placeholder: 'Phone',
        inputAttrs: {
          class: 'extra-phone-input'
        }
      },
      {
        'class': 'external-root-class',
        'style': 'margin-top: 12px;',
        'data-testid': 'phone-root'
      },
      {
        trailing: () => h('span', { class: 'custom-trailing' }, 'OK')
      }
    )

    const root = container.querySelector('[data-testid="phone-root"]') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-inputPhone')).toBe(true)
    expect(root.classList.contains('external-root-class')).toBe(true)
    expect(root.style.marginTop).toBe('12px')

    expect(container.querySelector('.mock-dial-code')?.getAttribute('data-country')).toBe('US')
    expect(container.querySelector('.custom-trailing')?.textContent).toBe('OK')

    const input = container.querySelector('input.mock-mask__input') as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input.getAttribute('id')).toBe('phone-field-1')
    expect(input.getAttribute('inputmode')).toBe('tel')
    expect(input.classList.contains('extra-phone-input')).toBe(true)
    expect(input.placeholder).toBe('Phone')
  })

  it('should omit dialCode when countryBlock is true and toggle reactively', async () => {
    const { container, props } = await mountInputPhoneDesign({
      countryDefault: 'RU',
      countryBlock: true
    })

    expect(container.querySelector('.mock-dial-code')).toBeNull()
    expect(container.querySelector('.mock-mask')).not.toBeNull()

    props.countryBlock = false
    await nextTick()
    expect(container.querySelector('.mock-dial-code')?.getAttribute('data-country')).toBe('RU')

    props.countryBlock = true
    await nextTick()
    expect(container.querySelector('.mock-dial-code')).toBeNull()
  })

  it('should render plain disabled/readonly input with merged attributes instead of Mask', async () => {
    const { container, props } = await mountInputPhoneDesign({
      countryDefault: 'US',
      value: '15551234567',
      name: 'phone-field',
      disabled: true
    })

    expect(container.querySelector('.mock-mask')).toBeNull()
    const input = container.querySelector('input.d1-field__body__input') as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input.disabled).toBe(true)
    expect(input.id).toBe('phone-field-1')
    expect(input.name).toBe('phone-field')
    expect(input.getAttribute('inputmode')).toBe('tel')
    expect(input.value).toBe('+1-555-123-4567')
    expect((container.querySelector('.mock-dial-code') as HTMLButtonElement).disabled).toBe(true)

    props.disabled = false
    props.readonly = true
    await nextTick()
    const readonlyInput = container.querySelector('input.d1-field__body__input') as HTMLInputElement
    expect(readonlyInput.readOnly).toBe(true)
    expect(readonlyInput.value).toBe('+1-555-123-4567')
    expect(container.querySelector('.mock-mask')).toBeNull()
    expect((container.querySelector('.mock-dial-code') as HTMLButtonElement).disabled).toBe(true)
  })

  it('should forward input, change, and blur events from Mask and expose value/validation API', async () => {
    const { container, exposed, emittedEvents } = await mountInputPhoneDesign({
      countryDefault: 'RU',
      validationMessage: 'Invalid phone'
    })

    expect(exposed.checkValidity()).toBe(false)
    expect(exposed.getValidationMessage()).toBe('Invalid phone')

    const input = container.querySelector('input.mock-mask__input') as HTMLInputElement
    input.dispatchEvent(new Event('input'))
    input.dispatchEvent(new Event('change'))
    input.dispatchEvent(new FocusEvent('blur'))
    await nextTick()

    expect(emittedEvents.some(event => event.type === 'input')).toBe(true)
    expect(emittedEvents.some(event => event.type === 'change')).toBe(true)
    expect(emittedEvents.some(event => event.type === 'changeLite')).toBe(true)

    exposed.setValue('79998887766')
    await nextTick()
    expect(exposed.getValue()).toBe('79998887766')

    exposed.clear()
    await nextTick()
    expect(exposed.getValue()).toBeUndefined()
  })
})
