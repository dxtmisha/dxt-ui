// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, provide, reactive } from 'vue'
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

import { Switch } from '../Switch'
import { SwitchDesign } from '../SwitchDesign'
import { defaultsSwitch, type SwitchProps } from '../props'
import type {
  SwitchClasses,
  SwitchComponents,
  SwitchEmits,
  SwitchExpose,
  SwitchSlots
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
 * Inspectable Switch subclass exposing lazy instance checks for integration assertions.
 *
 * Подкласс Switch для проверки ленивого создания зависимостей в интеграционных тестах.
 */
class InspectableSwitch extends Switch {
  getInstancesMap(): Partial<Record<keyof CheckboxConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Mounts the integrated Switch component with real FieldMessage, Progress, and Ripple constructors.
 *
 * Монтирует интегрированный компонент Switch с реальными конструкторами FieldMessage, Progress и Ripple.
 * @param initialProps initial switch properties / начальные свойства переключателя
 * @param slots component slots / слоты компонента
 * @param formRegistration optional Form registration mock / опциональный мок регистрации в форме
 * @returns mounted wrapper utilities / вспомогательные методы смонтированного компонента
 */
function mountSwitch(
  initialProps: Partial<SwitchProps> = {},
  slots: SwitchSlots = {},
  formRegistration?: FormElementRegistration
) {
  const props = reactive<SwitchProps>({
    ...(defaultsSwitch as SwitchProps),
    iconCheckbox: 'check',
    iconIndeterminate: 'remove',
    ...initialProps
  })

  const emitted: Array<[string, ...unknown[]]> = []
  let exposed!: SwitchExpose
  let logicInstance!: InspectableSwitch

  class TestSwitchDesign extends SwitchDesign<
    SwitchComponents,
    SwitchExpose,
    SwitchClasses,
    SwitchProps
  > {
    get logic(): InspectableSwitch {
      return this.item as InspectableSwitch
    }
  }

  const Child = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-switch': true,
          'd1-switch--block': Boolean(props.block),
          'd1-switch--disabled': Boolean(props.disabled),
          'd1-switch--required': Boolean(props.required)
        }
      }))

      const design = new TestSwitchDesign(
        'd1.switch',
        props,
        {
          emits: ((type: keyof SwitchEmits, ...args: unknown[]) => {
            emitted.push([String(type), ...args])
          }) as (type: keyof SwitchEmits, ...args: unknown[]) => void,
          classes: classesToken,
          components: {
            image: MockImage,
            fieldMessage: RealFieldMessage,
            progress: RealProgress,
            ripple: RealRipple
          }
        },
        InspectableSwitch
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

describe('Switch (integration)', () => {
  it('should keep optional dependencies uninstantiated for minimal switch and render track hierarchy', () => {
    const { container, logicInstance } = mountSwitch({
      disabled: true
    })

    expect(container.querySelector('.d1-switch__body > .d1-switch__track > .d1-switch__item > .d1-switch__icon')).not.toBeNull()
    expect(container.querySelector('input[type="checkbox"]')?.getAttribute('role')).toBe('switch')
    expect(container.querySelector('.d1-switch__track')?.getAttribute('aria-hidden')).toBe('true')
    expect(logicInstance.hasInstance('label')).toBe(false)
    expect(logicInstance.hasInstance('description')).toBe(false)
    expect(logicInstance.hasInstance('message')).toBe(false)
    expect(logicInstance.hasInstance('progress')).toBe(false)
    expect(logicInstance.hasInstance('ripple')).toBe(false)
    expect(logicInstance.hasInstance('selected')).toBe(false)
    expect(logicInstance.hasInstance('skeleton')).toBe(false)
    expect(logicInstance.hasInstance('form')).toBe(false)
  })

  it('should synchronize modelValue on user input and prop updates, and respect value prop without modelValue coercion', async () => {
    const { container, props, emitted, exposed } = mountSwitch({
      label: 'Notifications',
      modelValue: false
    })

    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(input.checked).toBe(false)
    expect(input.hasAttribute('value')).toBe(false)

    input.checked = true
    input.dispatchEvent(new Event('input'))
    await nextTick()

    expect(exposed.getValue()).toBe(true)
    expect(container.querySelector('.real-mock-image')?.getAttribute('data-icon')).toBe('check')
    expect(emitted).toContainEqual(['update:modelValue', true])
    expect(emitted).toContainEqual(['update:value', true])

    props.modelValue = true
    await nextTick()
    props.modelValue = false
    await nextTick()
    expect(input.checked).toBe(false)
    expect(container.querySelector('.real-mock-image')?.getAttribute('data-icon')).toBe('')

    const withValueOnly = mountSwitch({
      label: 'Value prop only',
      value: true
    })
    const valueOnlyInput = withValueOnly.container.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(valueOnlyInput.checked).toBe(true)
    expect(withValueOnly.exposed.getValue()).toBe(true)
  })

  it('should ignore user input when disabled or readonly', async () => {
    const { container, props, exposed, emitted } = mountSwitch({
      label: 'Locked',
      modelValue: false,
      disabled: true
    })

    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
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

  it('should synchronize selected and valueVariant in both directions', async () => {
    const { container, props, emitted } = mountSwitch({
      label: 'Feature A',
      selected: 'feature-b',
      valueVariant: 'feature-a'
    })

    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(input.checked).toBe(false)

    props.selected = 'feature-a'
    await nextTick()
    expect(input.checked).toBe(true)

    props.selected = 'feature-b'
    await nextTick()
    expect(input.checked).toBe(false)

    input.checked = true
    input.dispatchEvent(new Event('input'))
    await nextTick()

    expect(emitted).toContainEqual(['update:selected', 'feature-a'])
    expect(emitted).toContainEqual(['update:modelSelected', 'feature-a'])
  })

  it('should project default and description slots and render helper/validation messages', async () => {
    const { container, props } = mountSwitch(
      {
        helperMessage: 'Helpful info',
        required: true
      },
      {
        default: () => h('strong', 'Slot Label'),
        description: () => h('em', 'Slot Description')
      }
    )

    expect(container.querySelector('.d1-switch__label strong')?.textContent).toBe('Slot Label')
    expect(container.querySelector('.d1-switch__description em')?.textContent).toBe('Slot Description')
    expect(container.querySelector('.d1-fieldMessage__info')?.textContent).toBe('Helpful info')

    props.validationMessage = 'Field is required'
    await nextTick()

    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(input.getAttribute('aria-invalid')).toBe('true')
    expect(container.querySelector('.d1-fieldMessage__error')?.textContent).toBe('Field is required')
  })

  it('should render multilingual and unicode labels cleanly', () => {
    const { container } = mountSwitch({
      label: 'Включить уведомления — Tiếng Việt 🚀',
      description: 'Подробное описание переключателя'
    })

    expect(container.querySelector('.d1-switch__label')?.textContent).toContain('Включить уведомления — Tiếng Việt 🚀')
    expect(container.querySelector('.d1-switch__description')?.textContent).toContain('Подробное описание переключателя')
  })

  it('should apply skeleton classes on track, icon, and label and integrate with Form context', async () => {
    const register = vi.fn()
    const updateData = vi.fn()
    const { container, logicInstance } = mountSwitch(
      {
        name: 'autosave',
        label: 'Autosave',
        description: 'Save changes automatically',
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
    expect(container.querySelector('.d1-switch__track')?.className).toContain('d1-skeleton__background')
    expect(container.querySelector('.d1-switch__icon')?.className).toContain('d1-skeleton__background')
    expect(container.querySelector('.d1-switch__label')?.className).toContain('d1-skeleton__text')
    expect(register).toHaveBeenCalledWith(expect.objectContaining({ name: 'autosave' }))

    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
    input.checked = true
    input.dispatchEvent(new Event('input'))
    await nextTick()

    expect(updateData).toHaveBeenCalled()
  })

  it('should activate CheckboxSelected condition when selected becomes defined after mount', async () => {
    const { container, props, logicInstance } = mountSwitch({
      label: 'Dynamic selected',
      valueVariant: undefined,
      selected: undefined
    })

    expect(logicInstance.hasInstance('selected')).toBe(false)

    props.valueVariant = 'ok'
    props.selected = 'ok'
    await nextTick()

    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(logicInstance.hasInstance('selected')).toBe(true)
    expect(input.checked).toBe(true)
  })

  it('should emit focus and blur events from the switch input', async () => {
    const { container, emitted } = mountSwitch({ label: 'Focus switch' })
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

    input.dispatchEvent(new FocusEvent('focus'))
    input.dispatchEvent(new FocusEvent('blur'))
    await nextTick()

    expect(emitted.some(([name]) => name === 'focus')).toBe(true)
    expect(emitted.some(([name]) => name === 'blur')).toBe(true)
  })

  it('should render warningMessage and match numeric 0 valueVariant round-trip selection', async () => {
    const { container, props } = mountSwitch({
      label: 'Zero option',
      valueVariant: 0,
      selected: '0',
      warningMessage: 'Double-check toggle'
    })

    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(input.checked).toBe(true)
    expect(container.textContent).toContain('Double-check toggle')

    props.selected = '1'
    await nextTick()
    expect(input.checked).toBe(false)

    props.selected = '0'
    await nextTick()
    expect(input.checked).toBe(true)
  })
})
