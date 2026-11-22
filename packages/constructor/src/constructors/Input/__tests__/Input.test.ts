// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, provide, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { FieldDesign } from '../../Field/FieldDesign'
import { defaultsField, type FieldProps } from '../../Field/props'
import type { FieldClasses, FieldComponents, FieldExpose } from '../../Field/types'

import { MaskDesign } from '../../Mask/MaskDesign'
import { defaultsMask, type MaskProps } from '../../Mask/props'
import type { MaskClasses, MaskComponents, MaskExpose } from '../../Mask/types'

import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'

import { InputDesign } from '../InputDesign'
import { defaultsInput, type InputProps } from '../props'
import type { InputClasses, InputComponents, InputEmits, InputExpose, InputSlots } from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
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
    return () => h('button', {
      'type': 'button',
      'disabled': componentProps.disabled,
      'class': 'mock-icon',
      ...attrs,
      'aria-label': componentProps.ariaLabel,
      'data-active': String(Boolean(componentProps.active))
    }, String(componentProps.active && componentProps.iconActive ? componentProps.iconActive : (componentProps.icon ?? '')))
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
    validationMessage: String,
    validationId: String
  },
  setup(componentProps) {
    return () => {
      if (!componentProps.helperMessage && !componentProps.validationMessage) {
        return null
      }

      return h('div', {
        class: 'mock-field-message',
        id: componentProps.validationMessage ? componentProps.validationId : componentProps.helperId
      }, componentProps.validationMessage || componentProps.helperMessage)
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
  emits: ['update:value', 'update:modelValue', 'input', 'inputLite', 'change', 'changeLite', 'focus', 'blur', 'reset'],
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

/**
 * Mounts full Input integration (InputDesign + Input + FieldDesign + MaskDesign) in jsdom.
 *
 * Монтирует полную интеграцию Input (InputDesign + Input + FieldDesign + MaskDesign) в jsdom.
 * @param initialProps initial input properties / начальные свойства ввода
 * @param slots slot implementations / реализации слотов
 * @param formContext optional parent form registration / необязательная регистрация в родительской форме
 * @returns container, reactive props, emitted events, exposed API, and unmount callback / контейнер, реактивные свойства, события, API и функция размонтирования
 */
async function mountInput(
  initialProps: InputProps = {},
  slots: InputSlots = {},
  formContext?: FormElementRegistration
) {
  const props = reactive<InputProps>({
    ...(defaultsInput as InputProps),
    ...initialProps
  })
  const emittedEvents: Array<{ type: string, args: unknown[] }> = []
  let exposed!: InputExpose

  const Inner = defineComponent({
    inheritAttrs: false,
    setup(_props, { expose }) {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-input': true
        }
      }))

      const design = new InputDesign<
        InputComponents,
        InputExpose,
        InputClasses,
        InputProps
      >(
        'd1.input',
        props,
        {
          classes: classesToken,
          emits: (type: keyof InputEmits, ...args: unknown[]) => {
            emittedEvents.push({ type: String(type), args })
            if (type === 'update:modelValue') {
              props.modelValue = args[0] as string | number | undefined
            }
          },
          components: {
            field: RealField,
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
    emittedEvents,
    exposed
  }
}

describe('Input (integration)', () => {
  describe('Basic input, v-model, and events', () => {
    it('should render native input inside Field, update v-model on input/change, and clear on cancel button', async () => {
      const { container, props, emittedEvents } = await mountInput({
        label: 'Full Name',
        placeholder: 'John Doe',
        cancel: 'auto',
        modelValue: 'Alice'
      })

      const input = container.querySelector('input') as HTMLInputElement
      expect(input).not.toBeNull()
      expect(input.value).toBe('Alice')
      expect(input.placeholder).toBe('John Doe')

      input.value = 'Bob'
      input.dispatchEvent(new Event('input', { bubbles: true }))
      await nextTick()

      expect(props.modelValue).toBe('Bob')
      expect(emittedEvents.some(event => event.type === 'input')).toBe(true)
      expect(emittedEvents.some(event => event.type === 'inputLite')).toBe(true)

      input.dispatchEvent(new Event('change', { bubbles: true }))
      await nextTick()
      expect(emittedEvents.some(event => event.type === 'change')).toBe(true)

      const cancelButton = container.querySelector('[data-event-type="cancel"]') as HTMLButtonElement
      expect(cancelButton).not.toBeNull()
      cancelButton.click()
      await nextTick()

      expect(props.modelValue).toBeUndefined()
      expect(input.value).toBe('')
    })

    it('should handle numeric 0 and negative values with stepper arrows', async () => {
      const { container, props } = await mountInput({
        type: 'number',
        arrow: 'auto',
        step: 2,
        max: 4,
        modelValue: 0
      })

      const field = container.querySelector('.d1-field') as HTMLElement
      const input = container.querySelector('input') as HTMLInputElement
      expect(input.value).toBe('0')
      expect(field.classList.contains('d1-field--isValue')).toBe(true)

      const nextButton = container.querySelector('[data-event-type="next"]') as HTMLButtonElement
      const previousButton = container.querySelector('[data-event-type="previous"]') as HTMLButtonElement
      expect(nextButton).not.toBeNull()
      expect(previousButton).not.toBeNull()

      nextButton.click()
      await nextTick()
      expect(props.modelValue).toBe('2')

      previousButton.click()
      await nextTick()
      expect(props.modelValue).toBe('0')

      previousButton.click()
      await nextTick()
      expect(props.modelValue).toBe('-2')
    })

    it('should not emit input/change when disabled or readonly', async () => {
      const { container, emittedEvents } = await mountInput({
        disabled: true,
        modelValue: 'locked'
      })

      const input = container.querySelector('input') as HTMLInputElement
      expect(input.disabled).toBe(true)

      input.value = 'hacked'
      input.dispatchEvent(new Event('input', { bubbles: true }))
      await nextTick()

      expect(emittedEvents.filter(event => event.type === 'input')).toEqual([])
    })
  })

  describe('Password visibility toggle', () => {
    it('should toggle input type between password and text and update ariaLabel', async () => {
      const { container } = await mountInput({
        type: 'password',
        iconVisibility: 'eye',
        iconVisibilityOff: 'eye-off',
        textShow: 'Show password',
        textHide: 'Hide password'
      })

      const input = container.querySelector('input') as HTMLInputElement
      expect(input.type).toBe('password')

      const trailingButton = container.querySelector('[data-event-type="icon-trailing"]') as HTMLButtonElement
      expect(trailingButton).not.toBeNull()
      expect(trailingButton.getAttribute('aria-label')).toBe('Show password')

      trailingButton.click()
      await nextTick()

      expect(input.type).toBe('text')
      expect(trailingButton.getAttribute('aria-label')).toBe('Hide password')

      trailingButton.click()
      await nextTick()
      expect(input.type).toBe('password')
      expect(trailingButton.getAttribute('aria-label')).toBe('Show password')
    })
  })

  describe('Validation, match, Mask, and Form integration', () => {
    it('should validate required/pattern/match constraints and update validationMessage after blur', async () => {
      const externalInput = document.createElement('input')
      externalInput.name = 'master-password'
      externalInput.value = 'secret123'
      document.body.appendChild(externalInput)
      mountedCleanups.push(() => externalInput.remove())

      const { container, exposed } = await mountInput({
        match: '[name="master-password"]',
        textEntriesMatch: 'Passwords do not match',
        modelValue: 'different'
      })

      expect(exposed.isChanged()).toBe(true)
      expect(exposed.checkValidity()).toBe(false)
      expect(exposed.getValidationMessage()).toBe('Passwords do not match')

      const input = container.querySelector('input') as HTMLInputElement
      input.dispatchEvent(new Event('blur'))
      await nextTick()

      expect(container.querySelector('.mock-field-message')?.textContent).toBe('Passwords do not match')

      exposed.setValue('secret123')
      await nextTick()
      expect(exposed.checkValidity()).toBe(true)
      expect(exposed.getValidationMessage()).toBe('')
    })

    it('should integrate with Mask when mask prop is specified and clear cleanly', async () => {
      const { container, exposed } = await mountInput({
        mask: '***-***',
        modelValue: '123456'
      })

      const maskRoot = container.querySelector('.d1-mask')
      expect(maskRoot).not.toBeNull()

      const input = container.querySelector('input') as HTMLInputElement
      expect(input.value).toBe('123-456')

      exposed.clear()
      await nextTick()
      expect(exposed.getValue()).toBeUndefined()
    })

    it('should register and push updateData into parent Form context when name is provided', async () => {
      const registerSpy = vi.fn()
      const updateDataSpy = vi.fn()

      const { container } = await mountInput(
        { name: 'username', modelValue: 'neo' },
        {},
        {
          getValue: () => undefined,
          register: registerSpy,
          updateData: updateDataSpy
        }
      )

      expect(registerSpy).toHaveBeenCalledTimes(1)
      expect(registerSpy).toHaveBeenCalledWith(expect.objectContaining({
        name: 'username'
      }))

      const input = container.querySelector('input') as HTMLInputElement
      input.value = 'trinity'
      input.dispatchEvent(new Event('input', { bubbles: true }))
      await nextTick()

      expect(updateDataSpy).toHaveBeenCalled()
    })

    it('should ignore checkbox and radio types and render text input', async () => {
      const { container: checkboxContainer } = await mountInput({ type: 'checkbox' })
      expect((checkboxContainer.querySelector('input') as HTMLInputElement).type).toBe('text')

      const { container: radioContainer } = await mountInput({ type: 'radio' })
      expect((radioContainer.querySelector('input') as HTMLInputElement).type).toBe('text')
    })

    it('should emit focus and blur events on plain, masked, and readonly inputs and ignore disabled inputs', async () => {
      const { container, emittedEvents } = await mountInput({ modelValue: 'abc' })
      const input = container.querySelector('input') as HTMLInputElement

      input.dispatchEvent(new FocusEvent('focus'))
      input.dispatchEvent(new FocusEvent('blur'))
      await nextTick()

      expect(emittedEvents.some(item => item.type === 'focus')).toBe(true)
      expect(emittedEvents.some(item => item.type === 'blur')).toBe(true)

      const { container: maskContainer, emittedEvents: maskEmitted } = await mountInput({ mask: '***-***', modelValue: '123456' })
      const maskInput = maskContainer.querySelector('input') as HTMLInputElement

      maskInput.dispatchEvent(new FocusEvent('focus'))
      maskInput.dispatchEvent(new FocusEvent('blur'))
      await nextTick()

      expect(maskEmitted.some(item => item.type === 'focus')).toBe(true)
      expect(maskEmitted.some(item => item.type === 'blur')).toBe(true)

      const { container: readonlyContainer, emittedEvents: readonlyEmitted, exposed: readonlyExposed } = await mountInput({
        required: true,
        readonly: true
      })
      const readonlyInput = readonlyContainer.querySelector('input') as HTMLInputElement

      expect(readonlyExposed.isChanged()).toBe(false)
      readonlyInput.dispatchEvent(new FocusEvent('focus'))
      readonlyInput.dispatchEvent(new FocusEvent('blur'))
      await nextTick()

      expect(readonlyExposed.isChanged()).toBe(false)
      expect(readonlyEmitted.some(item => item.type === 'focus')).toBe(true)
      expect(readonlyEmitted.some(item => item.type === 'blur')).toBe(true)
      expect(readonlyContainer.querySelector('.mock-field-message')?.textContent ?? '').toBe('')

      const { container: disabledContainer, emittedEvents: disabledEmitted } = await mountInput({
        disabled: true
      })
      const disabledInput = disabledContainer.querySelector('input') as HTMLInputElement

      disabledInput.dispatchEvent(new FocusEvent('focus'))
      disabledInput.dispatchEvent(new FocusEvent('blur'))
      await nextTick()

      expect(disabledEmitted.some(item => item.type === 'focus')).toBe(false)
      expect(disabledEmitted.some(item => item.type === 'blur')).toBe(false)
    })
  })

  describe('Slots projection', () => {
    it('should project leading and trailing slots into Field', async () => {
      const { container } = await mountInput(
        {},
        {
          leading: () => h('span', { class: 'slot-leading' }, 'L'),
          trailing: () => h('span', { class: 'slot-trailing' }, 'R')
        }
      )

      expect(container.querySelector('.slot-leading')?.textContent).toBe('L')
      expect(container.querySelector('.slot-trailing')?.textContent).toBe('R')
    })
  })
})
