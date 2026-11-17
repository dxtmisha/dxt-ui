// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, provide, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { Checkbox, type CheckboxConstructors } from '../Checkbox'
import { CheckboxIcon } from '../CheckboxIcon'
import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'
import type { CheckboxProps } from '../props'
import type { CheckboxComponents, CheckboxEmits, CheckboxSlots } from '../types'

/**
 * Inspectable subclass exposing DesignLogicAbstract protected members for unit testing.
 *
 * Подкласс для доступа к защищённым членам DesignLogicAbstract в модульных тестах.
 */
class InspectableCheckbox extends Checkbox {
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
 * Creates a Checkbox orchestrator instance inside an effectScope for isolated unit testing.
 *
 * Создаёт оркестратор Checkbox внутри effectScope для изолированного модульного тестирования.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @param components registered sub-components / зарегистрированные субкомпоненты
 * @param emits event emitter callback / функция обратного вызова для событий
 * @param constructors dependency overrides / переопределения зависимостей
 * @returns checkbox instance, reactive props, element ref, and cleanup callback / экземпляр Checkbox, реактивные свойства, ref элемента и функция очистки
 */
function createCheckbox(
  properties: CheckboxProps = {},
  slots?: CheckboxSlots,
  components?: DesignComponents<CheckboxComponents, CheckboxProps>,
  emits?: (...args: unknown[]) => void,
  constructors?: Partial<CheckboxConstructors>
) {
  const scope = effectScope()
  const props = reactive<CheckboxProps>({ ...properties })
  const element = ref<HTMLLabelElement | undefined>()
  const naming = new DesignName('d1.checkbox')

  let instance!: InspectableCheckbox

  scope.run(() => {
    instance = new InspectableCheckbox(
      props,
      element,
      naming,
      components,
      slots,
      emits as ((type: keyof CheckboxEmits, ...args: unknown[]) => void) | undefined,
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

describe('Checkbox (unit)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should instantiate only event and validation during setup for plain checkbox and keep optional helpers lazy', () => {
      const { instance, stop } = createCheckbox({})
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
      const { instance, stop } = createCheckbox({})
      cleanups.push(stop)

      expect(instance.binds).toEqual({})
      expect(instance.hasInstance('label')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)
    })

    it('should instantiate label and description on binds access when provided', () => {
      const { instance, stop } = createCheckbox({
        label: 'Accept terms',
        labelId: 'lbl-1',
        description: 'Required for registration',
        descriptionId: 'desc-1'
      })
      cleanups.push(stop)

      expect(instance.binds).toEqual({
        'aria-labelledby': 'lbl-1',
        'aria-describedby': 'desc-1'
      })
      expect(instance.hasInstance('label')).toBe(true)
      expect(instance.hasInstance('description')).toBe(true)
    })

    it('should instantiate form and selected eagerly during setup only when props enable them', () => {
      const { instance: withSelected, stop: stopSelected } = createCheckbox({
        selected: 'yes',
        valueVariant: 'yes'
      })
      cleanups.push(stopSelected)

      expect(withSelected.hasInstance('selected')).toBe(true)
      expect(withSelected.hasInstance('model')).toBe(false)
      expect(withSelected.i('value').item.value).toBe(true)
      expect(withSelected.hasInstance('form')).toBe(false)
    })

    it('should support numeric 0 as valid label and description', () => {
      const { instance, stop } = createCheckbox({
        label: 0,
        labelId: 'lbl-zero',
        description: 0,
        descriptionId: 'desc-zero'
      })
      cleanups.push(stop)

      expect(instance.binds).toEqual({
        'aria-labelledby': 'lbl-zero',
        'aria-describedby': 'desc-zero'
      })
    })

    it('should treat numeric 0 valueVariant as active in FieldValueInclude', () => {
      const { instance, stop } = createCheckbox({
        valueVariant: 0,
        modelValue: true
      })
      cleanups.push(stop)

      expect(instance.i('value').itemByFull.value).toBe(0)
    })

    it('should reactively track valueVariant transitions between undefined and defined values', () => {
      const { instance, props, stop } = createCheckbox({
        valueVariant: undefined,
        modelValue: true
      })
      cleanups.push(stop)

      expect(instance.i('value').itemByFull.value).toBe(true)

      props.valueVariant = 'opt-a'
      expect(instance.i('value').itemByFull.value).toBe('opt-a')

      props.valueVariant = undefined
      expect(instance.i('value').itemByFull.value).toBe(true)
    })
  })

  describe('Input event handling and dependency injection', () => {
    it('should delegate onInput to FieldEventInclude.onChecked and emit input/change/model events', () => {
      const emits = vi.fn()
      const { instance, stop } = createCheckbox(
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

    it('should allow overriding subordinate constructors via DI', () => {
      const customIconSpy = vi.fn()

      class CustomCheckboxIcon extends CheckboxIcon {
        override get item() {
          customIconSpy()
          return { value: 'injected-icon' }
        }
      }

      const { instance, stop } = createCheckbox(
        { modelValue: true },
        undefined,
        undefined,
        undefined,
        { icon: CustomCheckboxIcon }
      )
      cleanups.push(stop)

      expect(instance.i('icon').item).toEqual({ value: 'injected-icon' })
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

      let checkboxInstance!: InspectableCheckbox

      const Child = defineComponent({
        setup() {
          const props = reactive<CheckboxProps>({ name: 'agree', modelValue: true })
          const element = ref<HTMLLabelElement | undefined>()
          checkboxInstance = new InspectableCheckbox(props, element, new DesignName('d1.checkbox'))
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

      expect(checkboxInstance.hasInstance('form')).toBe(true)
      expect(register).toHaveBeenCalledWith(expect.objectContaining({
        name: 'agree'
      }))

      const inputElement = document.createElement('input')
      inputElement.type = 'checkbox'
      inputElement.checked = false
      checkboxInstance.onInput({ target: inputElement } as unknown as Event)

      expect(updateData).toHaveBeenCalled()
    })
  })
})
