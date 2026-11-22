// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, provide, reactive, ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { FieldMessageDesign } from '../../FieldMessage/FieldMessageDesign'
import { defaultsFieldMessage, type FieldMessageProps } from '../../FieldMessage/props'
import type { FieldMessageClasses, FieldMessageComponents, FieldMessageExpose } from '../../FieldMessage/types'

import { ProgressDesign } from '../../Progress/ProgressDesign'
import { defaultsProgress, type ProgressProps } from '../../Progress/props'
import type { ProgressClasses, ProgressComponents, ProgressExpose } from '../../Progress/types'

import { RippleDesign } from '../../Ripple/RippleDesign'
import { defaultsRipple, type RippleProps } from '../../Ripple/props'
import type { RippleClasses, RippleComponents, RippleExpose } from '../../Ripple/types'

import type { CheckboxConstructors } from '../../Checkbox'
import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'

import { Radio } from '../Radio'
import { RadioDesign } from '../RadioDesign'
import { defaultsRadio, type RadioProps } from '../props'
import type {
  RadioClasses,
  RadioComponents,
  RadioEmits,
  RadioExpose,
  RadioSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const MockImage = defineComponent({
  name: 'MockImage',
  props: {
    value: [String, Object]
  },
  setup(componentProps) {
    return () => h('span', {
      'class': 'real-mock-image',
      'data-icon': typeof componentProps.value === 'string'
        ? componentProps.value
        : (componentProps.value as Record<string, unknown>)?.value ?? ''
    })
  }
})

const RealFieldMessage = defineComponent({
  name: 'RealFieldMessage',
  inheritAttrs: false,
  props: Object.keys(defaultsFieldMessage).concat([
    'disabled',
    'forceShow',
    'hasHtmlCode',
    'helperMessage',
    'validationMessage',
    'warningMessage',
    'warning',
    'helperId',
    'validationId',
    'warningId',
    'counterId'
  ]),
  setup(componentProps) {
    const design = new FieldMessageDesign<
      FieldMessageComponents,
      FieldMessageExpose,
      FieldMessageClasses,
      FieldMessageProps
    >(
      'd1.fieldMessage',
      componentProps as FieldMessageProps,
      {
        classes: computed<ConstrClasses>(() => ({
          main: { 'd1-fieldMessage': true }
        }))
      }
    )

    return design.render()
  }
})

const RealProgress = defineComponent({
  name: 'RealProgress',
  inheritAttrs: false,
  props: Object.keys(defaultsProgress).concat(['visible', 'circular', 'inverse']),
  setup(componentProps) {
    const typedProps = componentProps as ProgressProps
    const design = new ProgressDesign<
      ProgressComponents,
      ProgressExpose,
      ProgressClasses,
      ProgressProps
    >(
      'd1.progress',
      typedProps,
      {
        classes: computed<ConstrClasses>(() => ({
          main: {
            'd1-progress': true,
            'd1-progress--visible': Boolean(typedProps.visible)
          }
        }))
      }
    )

    return design.render()
  }
})

const RealRipple = defineComponent({
  name: 'RealRipple',
  inheritAttrs: false,
  props: Object.keys(defaultsRipple).concat(['disabled']),
  setup(componentProps) {
    const design = new RippleDesign<
      RippleComponents,
      RippleExpose,
      RippleClasses,
      RippleProps
    >(
      'd1.ripple',
      componentProps as RippleProps,
      {
        classes: computed<ConstrClasses>(() => ({
          main: { 'd1-ripple': true }
        }))
      }
    )

    return design.render()
  }
})

/**
 * Inspectable Radio subclass exposing lazy instance checks for integration assertions.
 *
 * Подкласс Radio для проверки ленивого создания зависимостей в интеграционных тестах.
 */
class InspectableRadio extends Radio {
  getInstancesMap(): Partial<Record<keyof CheckboxConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Mounts the integrated Radio component with real FieldMessage, Progress, and Ripple constructors.
 *
 * Монтирует интегрированный компонент Radio с реальными конструкторами FieldMessage, Progress и Ripple.
 * @param initialProps initial radio properties / начальные свойства радиокнопки
 * @param slots component slots / слоты компонента
 * @param formRegistration optional Form registration mock / опциональный мок регистрации в форме
 * @returns mounted wrapper utilities / вспомогательные методы смонтированного компонента
 */
function mountRadio(
  initialProps: Partial<RadioProps> = {},
  slots: RadioSlots = {},
  formRegistration?: FormElementRegistration
) {
  const props = reactive<RadioProps>({
    ...(defaultsRadio as RadioProps),
    iconCheckbox: 'radio_button_unchecked',
    iconIndeterminate: 'remove',
    ...initialProps
  })

  const emitted: Array<[string, ...unknown[]]> = []
  let exposed!: RadioExpose
  let logicInstance!: InspectableRadio

  class TestRadioDesign extends RadioDesign<
    RadioComponents,
    RadioExpose,
    RadioClasses,
    RadioProps
  > {
    get logic(): InspectableRadio {
      return this.item as InspectableRadio
    }
  }

  const Child = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-radio': true,
          'd1-radio--block': Boolean(props.block),
          'd1-radio--disabled': Boolean(props.disabled),
          'd1-radio--required': Boolean(props.required)
        }
      }))

      const design = new TestRadioDesign(
        'd1.radio',
        props,
        {
          emits: ((type: keyof RadioEmits, ...args: unknown[]) => {
            emitted.push([String(type), ...args])
          }) as (type: keyof RadioEmits, ...args: unknown[]) => void,
          classes: classesToken,
          components: {
            image: MockImage,
            fieldMessage: RealFieldMessage,
            progress: RealProgress,
            ripple: RealRipple
          }
        },
        InspectableRadio
      )

      logicInstance = design.logic
      exposed = design.expose()
      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      if (formRegistration) {
        provide(FORM_NAME_ELEMENT, formRegistration)
      }

      return () => h(Child, null, slots as Record<string, () => unknown>)
    }
  })

  const container = document.createElement('div')
  document.body.appendChild(container)
  const app = createApp(Root)
  app.mount(container)

  mountedCleanups.push(() => {
    app.unmount()
    container.remove()
  })

  return {
    container,
    props,
    emitted,
    exposed,
    logicInstance
  }
}

describe('Radio (integration)', () => {
  it('should keep optional dependencies uninstantiated for minimal radio', () => {
    const { logicInstance } = mountRadio({
      disabled: true
    })

    expect(logicInstance.hasInstance('label')).toBe(false)
    expect(logicInstance.hasInstance('description')).toBe(false)
    expect(logicInstance.hasInstance('message')).toBe(false)
    expect(logicInstance.hasInstance('progress')).toBe(false)
    expect(logicInstance.hasInstance('ripple')).toBe(false)
    expect(logicInstance.hasInstance('selected')).toBe(false)
    expect(logicInstance.hasInstance('skeleton')).toBe(false)
    expect(logicInstance.hasInstance('form')).toBe(false)
  })

  it('should synchronize modelValue on user input and prop updates', async () => {
    const { container, props, emitted, exposed } = mountRadio({
      label: 'Option',
      modelValue: false
    })

    const input = container.querySelector('input[type="radio"]') as HTMLInputElement
    expect(input.checked).toBe(false)

    input.checked = true
    input.dispatchEvent(new Event('input'))
    await nextTick()

    expect(exposed.getValue()).toBe(true)
    expect(container.querySelector('.real-mock-image')?.getAttribute('data-icon')).toBe('radio_button_unchecked')
    expect(emitted).toContainEqual(['update:modelValue', true])
    expect(emitted).toContainEqual(['update:value', true])

    props.modelValue = true
    await nextTick()
    props.modelValue = false
    await nextTick()
    expect(input.checked).toBe(false)
    expect(container.querySelector('.real-mock-image')?.getAttribute('data-icon')).toBe('')
  })

  it('should ignore user input when disabled or readonly', async () => {
    const { container, props, exposed, emitted } = mountRadio({
      label: 'Locked',
      modelValue: false,
      disabled: true
    })

    const input = container.querySelector('input[type="radio"]') as HTMLInputElement
    input.checked = true
    input.dispatchEvent(new Event('input'))
    await nextTick()

    expect(exposed.getValue()).toBe(false)
    expect(emitted).toEqual([])

    props.disabled = false
    props.readonly = true
    await nextTick()

    expect(input.getAttribute('aria-readonly')).toBe('true')
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
    input.dispatchEvent(clickEvent)
    await nextTick()
    expect(clickEvent.defaultPrevented).toBe(true)

    input.checked = true
    input.dispatchEvent(new Event('input'))
    await nextTick()

    expect(input.checked).toBe(false)
    expect(exposed.getValue()).toBe(false)
    expect(emitted).toEqual([])
  })

  it('should coordinate a multi-option radio group via selected and valueVariant', async () => {
    const selected = ref('space')

    const RadioOption = defineComponent({
      props: {
        valueVariant: {
          type: String,
          required: true
        },
        label: {
          type: String,
          required: true
        }
      },
      setup(optionProps) {
        const reactiveProps = reactive<RadioProps>({
          ...(defaultsRadio as RadioProps),
          iconCheckbox: 'radio_button_unchecked',
          iconIndeterminate: 'remove',
          name: 'mission',
          get selected() {
            return selected.value
          },
          valueVariant: optionProps.valueVariant,
          label: optionProps.label
        })

        const design = new RadioDesign<
          RadioComponents,
          RadioExpose,
          RadioClasses,
          RadioProps
        >(
          'd1.radio',
          reactiveProps,
          {
            emits: (type, ...args) => {
              if (type === 'update:selected' && typeof args[0] === 'string') {
                selected.value = args[0]
              }
            },
            classes: computed<ConstrClasses>(() => ({
              main: { 'd1-radio': true }
            })),
            components: {
              image: MockImage,
              fieldMessage: RealFieldMessage,
              progress: RealProgress,
              ripple: RealRipple
            }
          }
        )

        return design.render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp({
      render: () => h('div', [
        h(RadioOption, { valueVariant: 'space', label: 'Space' }),
        h(RadioOption, { valueVariant: 'ocean', label: 'Ocean' })
      ])
    })
    app.mount(container)
    mountedCleanups.push(() => {
      app.unmount()
      container.remove()
    })

    await nextTick()

    const inputs = container.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>
    expect(inputs[0]?.checked).toBe(true)
    expect(inputs[1]?.checked).toBe(false)

    inputs[1]!.checked = true
    inputs[1]!.dispatchEvent(new Event('input'))
    await nextTick()
    await nextTick()

    expect(selected.value).toBe('ocean')
    expect(inputs[0]?.checked).toBe(false)
    expect(inputs[1]?.checked).toBe(true)
  })

  it('should project default and description slots and render helper/validation messages', async () => {
    const { container, props } = mountRadio(
      {
        helperMessage: 'Helpful info',
        required: true
      },
      {
        default: () => h('strong', 'Slot Label'),
        description: () => h('em', 'Slot Description')
      }
    )

    expect(container.querySelector('.d1-radio__label strong')?.textContent).toBe('Slot Label')
    expect(container.querySelector('.d1-radio__description em')?.textContent).toBe('Slot Description')
    expect(container.querySelector('.d1-fieldMessage__info')?.textContent).toBe('Helpful info')

    props.validationMessage = 'Field is required'
    await nextTick()

    const input = container.querySelector('input[type="radio"]') as HTMLInputElement
    expect(input.getAttribute('aria-invalid')).toBe('true')
    expect(container.querySelector('.d1-fieldMessage__error')?.textContent).toBe('Field is required')
  })

  it('should render multilingual and unicode labels cleanly', () => {
    const { container } = mountRadio({
      label: 'Выбор варианта — Tiếng Việt 🚀',
      description: 'Подробное описание'
    })

    expect(container.querySelector('.d1-radio__label')?.textContent).toContain('Выбор варианта — Tiếng Việt 🚀')
    expect(container.querySelector('.d1-radio__description')?.textContent).toContain('Подробное описание')
  })

  it('should apply skeleton classes and integrate with Form context', async () => {
    const register = vi.fn()
    const updateData = vi.fn()
    const { container, logicInstance } = mountRadio(
      {
        name: 'plan',
        label: 'Pro Plan',
        description: 'All features',
        isSkeleton: true
      },
      {},
      {
        register,
        updateData,
        getValue: vi.fn()
      }
    )

    expect(logicInstance.hasInstance('skeleton')).toBe(true)
    expect(logicInstance.hasInstance('form')).toBe(true)
    expect(container.querySelector('.d1-radio__label')?.className).toContain('d1-skeleton__text')
    expect(register).toHaveBeenCalledWith(expect.objectContaining({ name: 'plan' }))

    const input = container.querySelector('input[type="radio"]') as HTMLInputElement
    input.checked = true
    input.dispatchEvent(new Event('input'))
    await nextTick()

    expect(updateData).toHaveBeenCalled()
  })

  it('should activate CheckboxSelected condition when selected becomes defined after mount', async () => {
    const { container, props, logicInstance } = mountRadio({
      label: 'Dynamic selected',
      valueVariant: undefined,
      selected: undefined
    })

    expect(logicInstance.hasInstance('selected')).toBe(false)

    props.valueVariant = 'ok'
    props.selected = 'ok'
    await nextTick()

    const input = container.querySelector('input[type="radio"]') as HTMLInputElement
    expect(logicInstance.hasInstance('selected')).toBe(true)
    expect(input.checked).toBe(true)
  })

  it('should emit focus and blur events from the radio input', async () => {
    const { container, emitted } = mountRadio({ label: 'Select plan' })
    const input = container.querySelector('input[type="radio"]') as HTMLInputElement

    input.dispatchEvent(new FocusEvent('focus'))
    input.dispatchEvent(new FocusEvent('blur'))
    await nextTick()

    expect(emitted.some(([name]) => name === 'focus')).toBe(true)
    expect(emitted.some(([name]) => name === 'blur')).toBe(true)
  })

  it('should render warningMessage and match numeric 0 valueVariant round-trip selection', async () => {
    const { container, props } = mountRadio({
      label: 'Zero option',
      valueVariant: 0,
      selected: '0',
      warningMessage: 'Double-check selection'
    })

    const input = container.querySelector('input[type="radio"]') as HTMLInputElement
    expect(input.checked).toBe(true)
    expect(container.textContent).toContain('Double-check selection')

    props.selected = '1'
    await nextTick()
    expect(input.checked).toBe(false)

    props.selected = '0'
    await nextTick()
    expect(input.checked).toBe(true)
  })
})
