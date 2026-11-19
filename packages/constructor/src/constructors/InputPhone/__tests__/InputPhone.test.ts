// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, provide, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ButtonDesign } from '../../Button/ButtonDesign'
import { defaultsButton, type ButtonProps } from '../../Button/props'
import type { ButtonClasses, ButtonComponents, ButtonExpose } from '../../Button/types'

import { FieldDesign } from '../../Field/FieldDesign'
import { defaultsField, type FieldProps } from '../../Field/props'
import type { FieldClasses, FieldComponents, FieldExpose } from '../../Field/types'

import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'

import { InputPhoneDialCodeDesign } from '../../InputPhoneDialCode/InputPhoneDialCodeDesign'
import { defaultsInputPhoneDialCode, type InputPhoneDialCodeProps } from '../../InputPhoneDialCode/props'
import type {
  InputPhoneDialCodeClasses,
  InputPhoneDialCodeComponents,
  InputPhoneDialCodeExpose
} from '../../InputPhoneDialCode/types'

import { MaskDesign } from '../../Mask/MaskDesign'
import { defaultsMask, type MaskProps } from '../../Mask/props'
import type { MaskClasses, MaskComponents, MaskExpose } from '../../Mask/types'

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
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object],
    iconActive: [String, Object],
    active: Boolean,
    disabled: Boolean,
    ariaLabel: String
  },
  setup(componentProps, { attrs }) {
    return () => h('span', {
      ...attrs,
      'class': ['mock-icon', attrs.class],
      'data-icon': String(componentProps.icon ?? '')
    })
  }
})

const MockFieldLabel = defineComponent({
  name: 'MockFieldLabel',
  props: {
    label: [String, Number],
    for: String
  },
  setup(componentProps) {
    return () => h('label', {
      class: 'mock-field-label',
      for: componentProps.for
    }, String(componentProps.label ?? ''))
  }
})

const MockFieldMessage = defineComponent({
  name: 'MockFieldMessage',
  props: {
    helperMessage: String,
    helperId: String,
    warningMessage: String,
    warningId: String,
    validationMessage: String,
    validationId: String
  },
  setup(componentProps) {
    return () => {
      if (!componentProps.helperMessage && !componentProps.warningMessage && !componentProps.validationMessage) {
        return null
      }

      return h('div', {
        class: 'mock-field-message',
        id: componentProps.validationMessage
          ? componentProps.validationId
          : componentProps.warningMessage
            ? componentProps.warningId
            : componentProps.helperId
      }, componentProps.validationMessage || componentProps.warningMessage || componentProps.helperMessage)
    }
  }
})

const MockProgress = defineComponent({
  name: 'MockProgress',
  props: {
    visible: Boolean
  },
  setup(componentProps) {
    return () => componentProps.visible
      ? h('span', { class: 'mock-progress' }, 'loading')
      : null
  }
})

const RealField = defineComponent({
  name: 'RealField',
  inheritAttrs: false,
  props: Object.keys(defaultsField).concat([
    'label',
    'prefix',
    'suffix',
    'caption',
    'helperMessage',
    'warning',
    'warningMessage',
    'warningId',
    'validationMessage',
    'required',
    'readonly',
    'disabled',
    'loading',
    'forceShowMessage',
    'cancel',
    'cancelShow',
    'counterShow',
    'counter',
    'maxlength',
    'icon',
    'iconTurn',
    'iconHide',
    'iconDir',
    'iconPalette',
    'iconTrailing',
    'iconTrailingTurnOnly',
    'iconTrailingDirOnly',
    'iconTrailingPalette',
    'iconAttrs',
    'align',
    'arrowCarousel',
    'arrowStepper',
    'arrowAlign',
    'disabledPrevious',
    'disabledNext',
    'isValue',
    'value',
    'isSkeleton',
    'fieldLabelAttrs',
    'fieldMessageAttrs',
    'fieldCounterAttrs',
    'id',
    'classic',
    'outlined',
    'filled',
    'tonal',
    'basic',
    'boxed',
    'counterTop',
    'iconArrowLeft',
    'iconArrowRight',
    'iconPlus',
    'iconMinus',
    'iconClose',
    'detail'
  ]),
  emits: ['click', 'clickLite', 'keydown'],
  setup(componentProps, { emit, expose }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-field': true,
        'd1-field--isValue': Boolean((componentProps as Readonly<FieldProps>).isValue)
      }
    }))

    const design = new FieldDesign<
      FieldComponents,
      FieldExpose,
      FieldClasses,
      FieldProps
    >(
      'd1.field',
      componentProps as Readonly<FieldProps>,
      {
        emits: emit as (...args: unknown[]) => void,
        classes: classesToken,
        components: {
          icon: MockIcon,
          fieldLabel: MockFieldLabel,
          fieldMessage: MockFieldMessage,
          progress: MockProgress
        }
      }
    )

    expose(design.expose())
    return design.render()
  }
})

const RealMask = defineComponent({
  name: 'RealMask',
  inheritAttrs: false,
  props: Object.keys(defaultsMask).concat([
    'name',
    'value',
    'valueDefault',
    'currency',
    'currencyHide',
    'fullOnly',
    'mask',
    'special',
    'match',
    'groupSave',
    'pattern',
    'check',
    'fraction',
    'type',
    'view',
    'inputAttrs',
    'language',
    'visible',
    'visiblePartly',
    'align',
    'dir',
    'modelValue'
  ]),
  emits: ['update:value', 'update:modelValue', 'input', 'inputLite', 'change', 'changeLite', 'focus', 'blur', 'reset', 'paste'],
  setup(componentProps, { emit, expose }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-mask': true
      }
    }))

    const design = new MaskDesign<
      MaskComponents,
      MaskExpose,
      MaskClasses,
      MaskProps
    >(
      'd1.mask',
      componentProps as Readonly<MaskProps>,
      {
        emits: emit as (...args: unknown[]) => void,
        classes: classesToken
      }
    )

    expose(design.expose())
    return design.render()
  }
})

const RealButton = defineComponent({
  name: 'RealButton',
  inheritAttrs: false,
  props: Object.keys(defaultsButton).concat([
    'label',
    'icon',
    'iconTrailing',
    'iconTurn',
    'disabled',
    'readonly'
  ]),
  emits: ['click', 'clickLite'],
  setup(componentProps, { emit, expose }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-button': true
      }
    }))

    const design = new ButtonDesign<
      ButtonComponents,
      ButtonExpose,
      ButtonClasses,
      ButtonProps
    >(
      'd1.button',
      componentProps as Readonly<ButtonProps>,
      {
        emits: emit as (...args: unknown[]) => void,
        classes: classesToken,
        components: {
          icon: MockIcon
        }
      }
    )

    expose(design.expose())
    return design.render()
  }
})

const MockMenuCountry = defineComponent({
  name: 'MockMenuCountry',
  props: {
    selected: [String, Array, Object],
    disabled: Boolean
  },
  emits: ['update:value', 'update:selected', 'click', 'window'],
  setup(componentProps, { emit, expose }) {
    const selectedList = computed(() => [
      {
        value: String(componentProps.selected ?? 'US'),
        label: String(componentProps.selected ?? 'US'),
        caption: componentProps.selected === 'RU' ? '+7' : componentProps.selected === 'DE' ? '+49' : '+1',
        icon: `flag-${String(componentProps.selected ?? 'US').toLowerCase()}`
      }
    ])

    expose({
      getOpen: () => false,
      getSelectedList: () => selectedList.value,
      toggle: vi.fn()
    })

    return () => h('div', {
      'class': 'mock-menu-country',
      'data-selected': String(componentProps.selected ?? ''),
      'data-disabled': String(Boolean(componentProps.disabled))
    }, [
      h('button', {
        type: 'button',
        class: 'mock-select-de',
        onClick: (event: MouseEvent) => {
          emit('click', event, { type: 'click', value: 'DE', detail: undefined })
          emit('update:value', 'DE')
          emit('window', { id: 'win-1', element: document.createElement('div'), control: event.currentTarget, open: false })
        }
      }, 'DE')
    ])
  }
})

const RealInputPhoneDialCode = defineComponent({
  name: 'RealInputPhoneDialCode',
  inheritAttrs: false,
  props: Object.keys(defaultsInputPhoneDialCode).concat([
    'value',
    'modelSelected',
    'labelType',
    'iconArrowDown',
    'disabled',
    'readonly',
    'menuCountryAttrs'
  ]),
  emits: ['update:selected', 'update:modelSelected', 'update:value', 'click', 'clickLite', 'window'],
  setup(componentProps, { emit, expose }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-inputPhoneDialCode': true
      }
    }))

    const design = new InputPhoneDialCodeDesign<
      InputPhoneDialCodeComponents,
      InputPhoneDialCodeExpose,
      InputPhoneDialCodeClasses,
      InputPhoneDialCodeProps
    >(
      'd1.inputPhoneDialCode',
      componentProps as Readonly<InputPhoneDialCodeProps>,
      {
        emits: emit as (...args: unknown[]) => void,
        classes: classesToken,
        components: {
          button: RealButton,
          menuCountry: MockMenuCountry
        }
      }
    )

    expose(design.expose())
    return design.render()
  }
})

/**
 * Mounts full InputPhone integration (InputPhoneDesign + InputPhone + FieldDesign + MaskDesign + InputPhoneDialCodeDesign) in jsdom.
 *
 * Монтирует полную интеграцию InputPhone (InputPhoneDesign + InputPhone + FieldDesign + MaskDesign + InputPhoneDialCodeDesign) в jsdom.
 */
async function mountInputPhone(
  initialProps: InputPhoneProps = {},
  slots: InputPhoneSlots = {},
  formContext?: FormElementRegistration
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
            if (type === 'update:modelValue') {
              props.modelValue = args[0] as string | undefined
            }
          },
          components: {
            field: RealField,
            inputPhoneDialCode: RealInputPhoneDialCode,
            mask: RealMask
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
      if (formContext) {
        provide(FORM_NAME_ELEMENT, formContext)
      }
      return () => h(Inner, {}, slots as Record<string, () => unknown>)
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

describe('InputPhone (Integration)', () => {
  it('should render full InputPhone DOM with Field, DialCode, Mask, and initialize default country prefix', async () => {
    const { container, exposed } = await mountInputPhone({
      label: 'Phone',
      countryDefault: 'US',
      helperMessage: 'Enter US phone'
    })

    expect(container.querySelector('.d1-inputPhone')).not.toBeNull()
    expect(container.querySelector('.d1-field__body__title__label__text')?.textContent).toBe('Phone')
    expect(container.querySelector('.mock-field-message')?.textContent).toBe('Enter US phone')
    expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('US')
    expect(container.querySelector('.d1-mask')).not.toBeNull()
    expect(exposed.getValue()).toBe('1')
  })

  it('should dynamically detect country from phone value and switch mask', async () => {
    const { container, exposed } = await mountInputPhone({
      countryDefault: 'US',
      modelValue: '79001234567'
    })

    expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('RU')
    expect(exposed.getValue()).toBe('79001234567')

    exposed.setValue('4930123456')
    await nextTick()
    await nextTick()
    expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('DE')
  })

  it('should hide DialCode when countryBlock is true and preserve country mask', async () => {
    const { container, exposed } = await mountInputPhone({
      countryDefault: 'DE',
      countryBlock: true,
      value: '30123456'
    })

    expect(container.querySelector('.d1-inputPhoneDialCode')).toBeNull()
    expect(container.querySelector('.d1-mask')).not.toBeNull()
    expect(exposed.getValue()).toBe('30123456')
  })

  it('should update value when user selects a country in DialCode and refocus input on window close', async () => {
    const { container, exposed, emittedEvents } = await mountInputPhone({
      countryDefault: 'US',
      modelValue: '1'
    })

    const selectDeButton = container.querySelector('.mock-select-de') as HTMLButtonElement
    expect(selectDeButton).not.toBeNull()
    selectDeButton.click()
    await nextTick()
    await nextTick()

    expect(exposed.getValue()).toBe('49')
    expect(emittedEvents.some(event => event.type === 'update:modelValue' && event.args[0] === '49')).toBe(true)
    const input = container.querySelector('.d1-mask input') as HTMLInputElement
    expect(document.activeElement).toBe(input)
  })

  it('should handle validation, clear, slots projection, and Form registration', async () => {
    const register = vi.fn()
    const updateData = vi.fn()
    const getValue = vi.fn()

    const { container, exposed } = await mountInputPhone(
      {
        name: 'contactPhone',
        countryDefault: 'RU',
        required: true,
        validationMessage: 'Phone is required',
        inputAttrs: {
          'data-custom-input': 'yes'
        } as Partial<HTMLInputElement>
      },
      {
        prefix: () => h('span', { class: 'slot-prefix' }, 'Tel:'),
        suffix: () => h('span', { class: 'slot-suffix' }, 'EXT')
      },
      {
        register,
        updateData,
        getValue
      }
    )

    expect(register).toHaveBeenCalledTimes(1)
    expect(container.querySelector('[data-custom-input="yes"]')).not.toBeNull()
    expect(container.querySelector('.slot-prefix')?.textContent).toBe('Tel:')
    expect(container.querySelector('.slot-suffix')?.textContent).toBe('EXT')
    expect(exposed.checkValidity()).toBe(false)
    expect(exposed.getValidationMessage()).toBe('Phone is required')

    exposed.clear()
    await nextTick()
    expect(exposed.getValue()).toBeUndefined()
  })

  it('should render plain disabled/readonly input without Mask and keep accessible attributes', async () => {
    const { container } = await mountInputPhone({
      label: 'Locked phone',
      name: 'lockedPhone',
      value: '79001234567',
      disabled: true
    })

    expect(container.querySelector('.d1-mask')).toBeNull()
    const input = container.querySelector('input[data-input]') as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input.disabled).toBe(true)
    expect(input.name).toBe('lockedPhone')
    expect(input.getAttribute('inputmode')).toBe('tel')
    expect(input.value).toBe('+7-900-123-45-67')
  })

  it('should fail required validation on untouched bare prefix and pass after entering subscriber digits', async () => {
    const { container, exposed } = await mountInputPhone({
      countryDefault: 'RU',
      required: true,
      validationCode: {
        valueMissing: 'Phone is required'
      }
    })

    expect(exposed.getValue()).toBe('7')
    expect(exposed.checkValidity()).toBe(false)
    expect(exposed.getValidationMessage()).toBe('')

    const input = container.querySelector('.d1-mask input') as HTMLInputElement
    expect(input).not.toBeNull()
    input.dispatchEvent(new FocusEvent('blur'))
    await nextTick()
    expect(exposed.getValidationMessage()).toBe('Phone is required')

    exposed.setValue('79001234567')
    await nextTick()
    expect(exposed.checkValidity()).toBe(true)
    expect(exposed.getValidationMessage()).toBe('')

    exposed.setValue('7')
    await nextTick()
    expect(exposed.checkValidity()).toBe(false)
    expect(exposed.getValidationMessage()).toBe('Phone is required')
  })

  it('should fail validation on partial phone input and show error after blur', async () => {
    const { container, exposed } = await mountInputPhone({
      countryDefault: 'RU',
      required: true,
      textInvalidPhone: 'Enter full phone number',
      validationCode: {
        valueMissing: 'Phone is required'
      }
    })

    const input = container.querySelector('.d1-mask input') as HTMLInputElement
    input.value = '+7-900-12'
    input.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertReplacementText', data: '+7-900-12' }))
    await nextTick()

    expect(exposed.checkValidity()).toBe(false)

    input.dispatchEvent(new FocusEvent('blur'))
    await nextTick()

    expect(exposed.getValidationMessage()).toBe('Enter full phone number')
    expect(container.querySelector('.d1-field')?.classList.contains('d1-field--validation')).toBe(true)

    input.value = '+7-900-123-45-67'
    input.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertReplacementText', data: '+7-900-123-45-67' }))
    await nextTick()

    expect(exposed.checkValidity()).toBe(true)
    expect(exposed.getValidationMessage()).toBe('')
    expect(container.querySelector('.d1-field')?.classList.contains('d1-field--validation')).toBe(false)
  })

  describe('Paste handling', () => {
    const dispatchPaste = (
      input: HTMLInputElement,
      text: string,
      selectionStart: number,
      selectionEnd: number = selectionStart
    ): ClipboardEvent => {
      input.focus()
      input.setSelectionRange(selectionStart, selectionEnd)

      const pasteEvent = new Event('paste', {
        bubbles: true,
        cancelable: true
      }) as ClipboardEvent

      Object.defineProperty(pasteEvent, 'clipboardData', {
        value: {
          getData: (type: string) => (type === 'text' ? text : '')
        }
      })

      input.dispatchEvent(pasteEvent)
      return pasteEvent
    }

    it('should detect full phone format when pasting without selection without dropping digits or duplicating prefix', async () => {
      const { container, exposed, emittedEvents } = await mountInputPhone({
        countryDefault: 'GB',
        value: ''
      })

      const input = container.querySelector('.d1-mask input') as HTMLInputElement
      expect(input).not.toBeNull()
      expect(input.value).toBe('+44-')

      const pasteEvent = dispatchPaste(input, '+7 (900) 123-45-67', input.value.length)
      await nextTick()
      await nextTick()

      expect(pasteEvent.defaultPrevented).toBe(true)
      expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('RU')
      expect(input.value).toBe('+7-900-123-45-67')
      expect(exposed.getValue()).toBe('+7-900-123-45-67')
      expect(emittedEvents.some(event => event.type === 'update:modelValue' && event.args[0] === '+7-900-123-45-67')).toBe(true)

      dispatchPaste(input, '+49 30 12345678', input.value.length)
      await nextTick()
      await nextTick()

      expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('DE')
      expect(input.value).toBe('+49-301-234-5678')
      expect(exposed.getValue()).toBe('+49-301-234-5678')
    })

    it('should use normal Mask paste behavior when there is a text selection', async () => {
      const { container } = await mountInputPhone({
        countryDefault: 'RU',
        value: '+7-900-123-45-67'
      })

      const input = container.querySelector('.d1-mask input') as HTMLInputElement
      expect(input.value).toBe('+7-900-123-45-67')

      dispatchPaste(input, '911', 3, 6)
      await nextTick()
      await nextTick()

      expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('RU')
      expect(input.value).toBe('+7-911-123-45-67')
    })

    it('should update modelValue when pasting full phone without selection into component bound with empty modelValue', async () => {
      const { container, exposed, emittedEvents } = await mountInputPhone({
        countryDefault: 'GB',
        modelValue: ''
      })

      const input = container.querySelector('.d1-mask input') as HTMLInputElement
      expect(input).not.toBeNull()

      const pasteEvent = dispatchPaste(input, '+7 (900) 123-45-67', input.value.length)
      await nextTick()
      await nextTick()

      expect(pasteEvent.defaultPrevented).toBe(true)
      expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('RU')
      expect(input.value).toBe('+7-900-123-45-67')
      expect(exposed.getValue()).toBe('+7-900-123-45-67')
      expect(emittedEvents.some(event => event.type === 'update:modelValue' && event.args[0] === '+7-900-123-45-67')).toBe(true)
    })

    it('should not duplicate country prefix when pasting full number after existing same-country prefix', async () => {
      const { container, exposed } = await mountInputPhone({
        countryDefault: 'RU',
        value: ''
      })

      const input = container.querySelector('.d1-mask input') as HTMLInputElement
      expect(input.value).toBe('+7-')

      dispatchPaste(input, '+7 (900) 123-45-67', input.value.length)
      await nextTick()
      await nextTick()

      expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('RU')
      expect(input.value).toBe('+7-900-123-45-67')
      expect(exposed.getValue()).toBe('+7-900-123-45-67')
    })

    it('should handle non-full trunk and local numbers pasted after prefix via Mask', async () => {
      const { container } = await mountInputPhone({
        countryDefault: 'RU',
        value: ''
      })

      const input = container.querySelector('.d1-mask input') as HTMLInputElement
      expect(input.value).toBe('+7-')

      dispatchPaste(input, '8 (900) 123-45-67', input.value.length)
      await nextTick()
      await nextTick()
      expect(input.value).toBe('+7-900-123-45-67')

      dispatchPaste(input, '9112223344', 3, input.value.length)
      await nextTick()
      await nextTick()
      expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('RU')
      expect(input.value).toBe('+7-911-222-33-44')
    })

    it('should respect countryBlock while still preventing same-country prefix duplication', async () => {
      const { container, exposed } = await mountInputPhone({
        countryDefault: 'RU',
        countryBlock: true,
        modelValue: ''
      })

      const input = container.querySelector('.d1-mask input') as HTMLInputElement
      expect(input.value).toBe('+7-')

      dispatchPaste(input, '+7 (900) 123-45-67', input.value.length)
      await nextTick()
      await nextTick()
      expect(input.value).toBe('+7-900-123-45-67')
      expect(exposed.getValue()).toBe('+7-900-123-45-67')

      dispatchPaste(input, '+84 91 234 5678', input.value.length)
      await nextTick()
      await nextTick()
      expect(input.value.startsWith('+7-')).toBe(true)
    })

    it('should update country and mask when selecting a filled +84 phone completely and pasting a full Russian number', async () => {
      const { container, exposed } = await mountInputPhone({
        countryDefault: 'VN',
        modelValue: '84912345678'
      })

      const input = container.querySelector('.d1-mask input') as HTMLInputElement
      expect(input.value).toBe('+84-91-2345-678')
      expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('VN')

      const pasteEvent = dispatchPaste(input, '+7 (900) 123-45-67', 0, input.value.length)
      await nextTick()
      await nextTick()

      expect(pasteEvent.defaultPrevented).toBe(true)
      expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('RU')
      expect(input.value).toBe('+7-900-123-45-67')
      expect(exposed.getValue()).toBe('+7-900-123-45-67')
    })

    it('should replace leading +8 with +7 when Russia is selected and pasting a full 8... number', async () => {
      const { container, exposed } = await mountInputPhone({
        countryDefault: 'RU',
        modelValue: '79001234567'
      })

      const input = container.querySelector('.d1-mask input') as HTMLInputElement
      expect(input.value).toBe('+7-900-123-45-67')

      const pasteEvent = dispatchPaste(input, '+89023343333', 0, input.value.length)
      await nextTick()
      await nextTick()

      expect(pasteEvent.defaultPrevented).toBe(true)
      expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('RU')
      expect(input.value).toBe('+7-902-334-33-33')
      expect(exposed.getValue()).toBe('+7-902-334-33-33')
    })
  })

  it('should lock dial code selector for countryReadonly and single-country lists while keeping input editable', async () => {
    const { container: roContainer } = await mountInputPhone({
      countryDefault: 'RU',
      countryReadonly: true,
      modelValue: '79001234567',
      inputPhoneDialCodeAttrs: {
        iconArrowDown: 'expand_more'
      }
    })

    const roInput = roContainer.querySelector('.d1-mask input') as HTMLInputElement
    expect(roContainer.querySelector('.d1-inputPhoneDialCode')).not.toBeNull()
    expect(roContainer.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('RU')
    expect(roContainer.querySelector('.mock-menu-country')?.getAttribute('data-disabled')).toBe('true')
    expect(roInput.readOnly).toBe(false)

    const { container: singleContainer } = await mountInputPhone({
      countryDefault: 'RU',
      modelValue: '79001234567',
      inputPhoneDialCodeAttrs: {
        iconArrowDown: 'expand_more',
        menuCountryAttrs: {
          list: ['RU']
        }
      }
    })

    expect(singleContainer.querySelector('.d1-inputPhoneDialCode')).not.toBeNull()
    expect(singleContainer.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('RU')
    expect(singleContainer.querySelector('.mock-menu-country')?.getAttribute('data-disabled')).toBe('true')
  })

  it('should display warning state and message without failing form validity', async () => {
    const { container, exposed } = await mountInputPhone({
      countryDefault: 'RU',
      modelValue: '79001234567',
      warning: true,
      warningMessage: 'Phone from legacy profile needs confirmation'
    })

    const fieldRoot = container.querySelector('.d1-field')
    const messageEl = container.querySelector('.mock-field-message')
    expect(fieldRoot?.classList.contains('d1-field--warning')).toBe(true)
    expect(fieldRoot?.classList.contains('d1-field--validation')).toBe(false)
    expect(messageEl?.textContent).toBe('Phone from legacy profile needs confirmation')
    expect(exposed.checkValidity()).toBe(true)
  })

  it('should emit focus and blur events with FocusEvent in interactive and readonly modes', async () => {
    const { container, emittedEvents } = await mountInputPhone({
      countryDefault: 'XK',
      modelValue: '38344123456'
    })

    const input = container.querySelector('.d1-mask input') as HTMLInputElement
    expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('XK')
    expect(input.value).toBe('+383-44-123-456')

    input.dispatchEvent(new FocusEvent('focus'))
    input.dispatchEvent(new FocusEvent('blur'))
    await nextTick()

    const focusEvents = emittedEvents.filter(event => event.type === 'focus')
    const blurEvents = emittedEvents.filter(event => event.type === 'blur')
    expect(focusEvents).toHaveLength(1)
    expect(focusEvents[0]?.args[0]).toBeInstanceOf(FocusEvent)
    expect(blurEvents).toHaveLength(1)
    expect(blurEvents[0]?.args[0]).toBeInstanceOf(FocusEvent)

    const { container: readonlyContainer, emittedEvents: readonlyEmitted } = await mountInputPhone({
      countryDefault: 'RU',
      readonly: true,
      modelValue: '79001234567'
    })

    const readonlyInput = readonlyContainer.querySelector('input') as HTMLInputElement
    readonlyInput.dispatchEvent(new FocusEvent('focus'))
    readonlyInput.dispatchEvent(new FocusEvent('blur'))
    await nextTick()

    expect(readonlyEmitted.some(event => event.type === 'focus' && event.args[0] instanceof FocusEvent)).toBe(true)
    expect(readonlyEmitted.some(event => event.type === 'blur' && event.args[0] instanceof FocusEvent)).toBe(true)
  })

  it('should support two-way v-model:country and update:country / update:modelCountry emits', async () => {
    const { container, props, emittedEvents, exposed } = await mountInputPhone({
      country: 'DE'
    })

    const input = container.querySelector('.d1-mask input') as HTMLInputElement
    expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('DE')
    expect(input.value).toBe('+49-')

    // Typing a Russian phone emits update:country and update:modelCountry with 'RU'
    input.value = '+79001234567'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    await nextTick()

    expect(emittedEvents.some(event => event.type === 'update:country' && event.args[0] === 'RU')).toBe(true)
    expect(emittedEvents.some(event => event.type === 'update:modelCountry' && event.args[0] === 'RU')).toBe(true)
    expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('RU')

    // Updating country prop externally switches dial code and phone prefix
    props.country = 'VN'
    await nextTick()
    await nextTick()

    expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('VN')
    expect(input.value).toBe('+84-')
    expect(exposed.getValue()).toBeUndefined()

    // Selecting country in DialCode emits update:country with 'DE'
    const selectDeBtn = container.querySelector('.mock-select-de') as HTMLButtonElement
    selectDeBtn.click()
    await nextTick()
    await nextTick()

    expect(emittedEvents.some(event => event.type === 'update:country' && event.args[0] === 'DE')).toBe(true)
    expect(emittedEvents.some(event => event.type === 'update:modelCountry' && event.args[0] === 'DE')).toBe(true)
    expect(input.value).toBe('+49-')
  })
})
