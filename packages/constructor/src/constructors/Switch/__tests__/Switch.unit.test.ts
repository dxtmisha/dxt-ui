// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, provide, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { CheckboxIcon, type CheckboxConstructors } from '../../Checkbox'
import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'
import { Switch } from '../Switch'
import { defaultsSwitch, type SwitchProps } from '../props'
import type { SwitchComponents, SwitchEmits, SwitchSlots } from '../types'

/**
 * Inspectable subclass exposing DesignLogicAbstract protected members for unit testing.
 *
 * Подкласс для доступа к защищённым членам DesignLogicAbstract в модульных тестах.
 */
class InspectableSwitch extends Switch {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof CheckboxConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Creates a Switch orchestrator instance inside an effectScope for isolated unit testing.
 *
 * Создаёт оркестратор Switch внутри effectScope для изолированного модульного тестирования.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @param components registered sub-components / зарегистрированные субкомпоненты
 * @param emits event emitter callback / функция обратного вызова для событий
 * @param constructors dependency overrides / переопределения зависимостей
 * @returns switch instance, reactive props, element ref, and cleanup callback / экземпляр Switch, реактивные свойства, ref элемента и функция очистки
 */
function createSwitch(
  properties: SwitchProps = {},
  slots?: SwitchSlots,
  components?: DesignComponents<SwitchComponents, SwitchProps>,
  emits?: (...args: unknown[]) => void,
  constructors?: Partial<CheckboxConstructors>
) {
  const scope = effectScope()
  const props = reactive<SwitchProps>({ ...properties })
  const element = ref<HTMLLabelElement | undefined>()
  const naming = new DesignName('d1.switch')

  let instance!: InspectableSwitch

  scope.run(() => {
    instance = new InspectableSwitch(
      props,
      element,
      naming,
      components,
      slots,
      emits as ((type: keyof SwitchEmits, ...args: unknown[]) => void) | undefined,
      constructors
    )
  })

  return {
    instance,
    props,
    element,
    stop: () => scope.stop()
  }
}

describe('Switch (unit)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Switch type, defaults, and attributes configuration', () => {
    it('should inherit checkbox input type and configure FieldAttributesInclude with checkbox default type', () => {
      const { instance, stop } = createSwitch({
        valueVariant: 'enabled'
      })
      cleanups.push(stop)

      expect(instance.type).toBe('checkbox')
      expect(instance.i('attributes').listForCheckbox).toMatchObject({
        type: 'checkbox',
        value: 'enabled'
      })
    })

    it('should explicitly default modelValue and valueVariant to undefined in defaultsSwitch to prevent Vue Boolean coercion', () => {
      expect(defaultsSwitch).toHaveProperty('modelValue', undefined)
      expect(defaultsSwitch).toHaveProperty('valueVariant', undefined)
      expect(defaultsSwitch.valueVariantHide).toBe('0')
      expect(defaultsSwitch.block).toBe(true)
      expect(defaultsSwitch.itemCenter).toBe(true)
    })

    it('should isolate mutable state across independent Switch instances', () => {
      const first = createSwitch({ modelValue: true })
      const second = createSwitch({ modelValue: false })
      cleanups.push(first.stop, second.stop)

      expect(first.instance.i('value').item.value).toBe(true)
      expect(second.instance.i('value').item.value).toBe(false)

      first.instance.i('value').set(false)
      expect(first.instance.i('value').item.value).toBe(false)
      expect(second.instance.i('value').item.value).toBe(false)

      second.instance.i('value').set(true)
      expect(first.instance.i('value').item.value).toBe(false)
      expect(second.instance.i('value').item.value).toBe(true)
    })
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should instantiate only event and validation during setup for plain switch and keep optional helpers lazy', () => {
      const { instance, stop } = createSwitch({})
      cleanups.push(stop)

      expect(instance.hasInstance('event')).toBe(true)
      expect(instance.hasInstance('validation')).toBe(true)

      expect(instance.hasInstance('attributes')).toBe(false)
      expect(instance.hasInstance('change')).toBe(false)
      expect(instance.hasInstance('code')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)
      expect(instance.hasInstance('elementItem')).toBe(false)
      expect(instance.hasInstance('enabled')).toBe(false)
      expect(instance.hasInstance('form')).toBe(false)
      expect(instance.hasInstance('icon')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)
      expect(instance.hasInstance('message')).toBe(false)
      expect(instance.hasInstance('model')).toBe(false)
      expect(instance.hasInstance('progress')).toBe(false)
      expect(instance.hasInstance('ripple')).toBe(false)
      expect(instance.hasInstance('selected')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)
      expect(instance.hasInstance('value')).toBe(false)
    })

    it('should keep label and description uninstantiated when querying binds without label or description', () => {
      const { instance, stop } = createSwitch({})
      cleanups.push(stop)

      expect(instance.binds).toEqual({})
      expect(instance.hasInstance('label')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)
    })

    it('should instantiate label and description on binds access when provided', () => {
      const { instance, stop } = createSwitch({
        label: 'Dark mode',
        labelId: 'switch-lbl-1',
        description: 'Use dark theme palette',
        descriptionId: 'switch-desc-1'
      })
      cleanups.push(stop)

      expect(instance.binds).toEqual({
        'aria-labelledby': 'switch-lbl-1',
        'aria-describedby': 'switch-desc-1'
      })
      expect(instance.hasInstance('label')).toBe(true)
      expect(instance.hasInstance('description')).toBe(true)
    })

    it('should instantiate selected during setup when selected and valueVariant are provided', () => {
      const { instance, stop } = createSwitch({
        selected: 'dark',
        valueVariant: 'dark'
      })
      cleanups.push(stop)

      expect(instance.hasInstance('selected')).toBe(true)
      expect(instance.hasInstance('model')).toBe(false)
      expect(instance.i('value').item.value).toBe(true)
      expect(instance.hasInstance('form')).toBe(false)
    })

    it('should treat numeric 0 as valid label and description', () => {
      const { instance, stop } = createSwitch({
        label: 0,
        labelId: 'switch-lbl-zero',
        description: 0,
        descriptionId: 'switch-desc-zero'
      })
      cleanups.push(stop)

      expect(instance.binds).toEqual({
        'aria-labelledby': 'switch-lbl-zero',
        'aria-describedby': 'switch-desc-zero'
      })
    })

    it('should treat numeric 0 valueVariant as active in FieldValueInclude and track transitions reactively', () => {
      const { instance, props, stop } = createSwitch({
        valueVariant: 0,
        modelValue: true
      })
      cleanups.push(stop)

      expect(instance.i('value').itemByFull.value).toBe(0)

      props.valueVariant = 'on'
      expect(instance.i('value').itemByFull.value).toBe('on')

      props.valueVariant = undefined
      expect(instance.i('value').itemByFull.value).toBe(true)
    })
  })

  describe('Input event handling, readonly guard, and dependency injection', () => {
    it('should delegate onInput to FieldEventInclude.onChecked and emit input/change/model events', () => {
      const emits = vi.fn()
      const { instance, stop } = createSwitch(
        { modelValue: false },
        undefined,
        undefined,
        emits
      )
      cleanups.push(stop)

      const inputElement = document.createElement('input')
      inputElement.type = 'checkbox'
      inputElement.checked = true

      instance.onInput({ target: inputElement } as unknown as Event)

      expect(instance.i('value').item.value).toBe(true)
      expect(emits).toHaveBeenCalledWith('update:value', true)
      expect(emits).toHaveBeenCalledWith('update:modelValue', true)
      expect(emits).toHaveBeenCalledWith('input', expect.anything(), expect.objectContaining({ value: true }))
      expect(emits).toHaveBeenCalledWith('change', expect.anything(), expect.objectContaining({ value: true }))
    })

    it('should prevent native click and restore checked state on input when readonly', () => {
      const emits = vi.fn()
      const { instance, stop } = createSwitch(
        { modelValue: false, readonly: true },
        undefined,
        undefined,
        emits
      )
      cleanups.push(stop)

      const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
      instance.onClick(clickEvent)
      expect(clickEvent.defaultPrevented).toBe(true)

      const inputElement = document.createElement('input')
      inputElement.type = 'checkbox'
      inputElement.checked = true

      instance.onInput({ target: inputElement } as unknown as Event)

      expect(inputElement.checked).toBe(false)
      expect(instance.i('value').item.value).toBe(false)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should allow click when not readonly', () => {
      const { instance, stop } = createSwitch({ modelValue: false, readonly: false })
      cleanups.push(stop)

      const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
      instance.onClick(clickEvent)
      expect(clickEvent.defaultPrevented).toBe(false)
    })

    it('should allow overriding subordinate constructors via DI', () => {
      const customIconSpy = vi.fn()

      class CustomSwitchIcon extends CheckboxIcon {
        override get item() {
          customIconSpy()
          return { value: 'custom-switch-icon' }
        }
      }

      const { instance, stop } = createSwitch(
        { modelValue: true },
        undefined,
        undefined,
        undefined,
        { icon: CustomSwitchIcon }
      )
      cleanups.push(stop)

      expect(instance.i('icon').item).toEqual({ value: 'custom-switch-icon' })
      expect(customIconSpy).toHaveBeenCalledTimes(1)
    })

    it('should register with parent Form context during setup when name is provided', async () => {
      const register = vi.fn()
      const updateData = vi.fn()
      const registration: FormElementRegistration = {
        register,
        updateData,
        getValue: vi.fn()
      }

      let switchInstance!: InspectableSwitch

      const Child = defineComponent({
        setup() {
          const props = reactive<SwitchProps>({ name: 'notifications', modelValue: true })
          const element = ref<HTMLLabelElement | undefined>()
          switchInstance = new InspectableSwitch(props, element, new DesignName('d1.switch'))
          return () => h('div')
        }
      })

      const Parent = defineComponent({
        setup() {
          provide(FORM_NAME_ELEMENT, registration)
          return () => h(Child)
        }
      })

      const container = document.createElement('div')
      document.body.appendChild(container)
      const app = createApp(Parent)
      app.mount(container)
      cleanups.push(() => {
        app.unmount()
        container.remove()
      })

      await nextTick()

      expect(switchInstance.hasInstance('form')).toBe(true)
      expect(register).toHaveBeenCalledWith(expect.objectContaining({
        name: 'notifications'
      }))

      const inputElement = document.createElement('input')
      inputElement.type = 'checkbox'
      inputElement.checked = false
      switchInstance.onInput({ target: inputElement } as unknown as Event)

      expect(updateData).toHaveBeenCalled()
    })
  })
})
