// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, provide, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { CheckboxIcon, type CheckboxConstructors } from '../../Checkbox'
import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'
import { Radio } from '../Radio'
import type { RadioProps } from '../props'
import type { RadioComponents, RadioEmits, RadioSlots } from '../types'

/**
 * Inspectable subclass exposing DesignLogicAbstract protected members for unit testing.
 *
 * Подкласс для доступа к защищённым членам DesignLogicAbstract в модульных тестах.
 */
class InspectableRadio extends Radio {
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
 * Creates a Radio orchestrator instance inside an effectScope for isolated unit testing.
 *
 * Создаёт оркестратор Radio внутри effectScope для изолированного модульного тестирования.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @param components registered sub-components / зарегистрированные субкомпоненты
 * @param emits event emitter callback / функция обратного вызова для событий
 * @param constructors dependency overrides / переопределения зависимостей
 * @returns radio instance, reactive props, element ref, and cleanup callback / экземпляр Radio, реактивные свойства, ref элемента и функция очистки
 */
function createRadio(
  properties: RadioProps = {},
  slots?: RadioSlots,
  components?: DesignComponents<RadioComponents, RadioProps>,
  emits?: (...args: unknown[]) => void,
  constructors?: Partial<CheckboxConstructors>
) {
  const scope = effectScope()
  const props = reactive<RadioProps>({ ...properties })
  const element = ref<HTMLLabelElement | undefined>()
  const naming = new DesignName('d1.radio')

  let instance!: InspectableRadio

  scope.run(() => {
    instance = new InspectableRadio(
      props,
      element,
      naming,
      components,
      slots,
      emits as ((type: keyof RadioEmits, ...args: unknown[]) => void) | undefined,
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

describe('Radio (unit)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Radio type and attributes configuration', () => {
    it('should expose radio type and configure FieldAttributesInclude with radio default type', () => {
      const { instance, stop } = createRadio({
        valueVariant: 'pro'
      })
      cleanups.push(stop)

      expect(instance.type).toBe('radio')
      expect(instance.i('attributes').listForCheckbox).toMatchObject({
        type: 'radio',
        value: 'pro'
      })
    })
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should instantiate only event and validation during setup for plain radio and keep optional helpers lazy', () => {
      const { instance, stop } = createRadio({})
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
      const { instance, stop } = createRadio({})
      cleanups.push(stop)

      expect(instance.binds).toEqual({})
      expect(instance.hasInstance('label')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)
    })

    it('should instantiate label and description on binds access when provided', () => {
      const { instance, stop } = createRadio({
        label: 'Option A',
        labelId: 'radio-lbl-1',
        description: 'Details for A',
        descriptionId: 'radio-desc-1'
      })
      cleanups.push(stop)

      expect(instance.binds).toEqual({
        'aria-labelledby': 'radio-lbl-1',
        'aria-describedby': 'radio-desc-1'
      })
      expect(instance.hasInstance('label')).toBe(true)
      expect(instance.hasInstance('description')).toBe(true)
    })

    it('should instantiate selected during setup when selected and valueVariant are provided', () => {
      const { instance, stop } = createRadio({
        selected: 'space',
        valueVariant: 'space'
      })
      cleanups.push(stop)

      expect(instance.hasInstance('selected')).toBe(true)
      expect(instance.hasInstance('model')).toBe(false)
      expect(instance.i('value').item.value).toBe(true)
      expect(instance.hasInstance('form')).toBe(false)
    })

    it('should treat numeric 0 as valid label and description', () => {
      const { instance, stop } = createRadio({
        label: 0,
        labelId: 'radio-lbl-zero',
        description: 0,
        descriptionId: 'radio-desc-zero'
      })
      cleanups.push(stop)

      expect(instance.binds).toEqual({
        'aria-labelledby': 'radio-lbl-zero',
        'aria-describedby': 'radio-desc-zero'
      })
    })
  })

  describe('Input event handling, readonly guard, and dependency injection', () => {
    it('should delegate onInput to FieldEventInclude.onChecked and emit input/change/model events', () => {
      const emits = vi.fn()
      const { instance, stop } = createRadio(
        { modelValue: false, valueVariant: 'ocean' },
        undefined,
        undefined,
        emits
      )
      cleanups.push(stop)

      const inputElement = document.createElement('input')
      inputElement.type = 'radio'
      inputElement.checked = true

      instance.onInput({ target: inputElement } as unknown as Event)

      expect(instance.i('value').item.value).toBe(true)
      expect(emits).toHaveBeenCalledWith('update:value', 'ocean')
      expect(emits).toHaveBeenCalledWith('update:modelValue', 'ocean')
      expect(emits).toHaveBeenCalledWith('input', expect.anything(), expect.objectContaining({ value: 'ocean' }))
      expect(emits).toHaveBeenCalledWith('change', expect.anything(), expect.objectContaining({ value: 'ocean' }))
    })

    it('should prevent native click and restore checked state on input when readonly', () => {
      const emits = vi.fn()
      const { instance, stop } = createRadio(
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
      inputElement.type = 'radio'
      inputElement.checked = true

      instance.onInput({ target: inputElement } as unknown as Event)

      expect(inputElement.checked).toBe(false)
      expect(instance.i('value').item.value).toBe(false)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should allow overriding subordinate constructors via DI', () => {
      const customIconSpy = vi.fn()

      class CustomRadioIcon extends CheckboxIcon {
        override get item() {
          customIconSpy()
          return { value: 'custom-radio-icon' }
        }
      }

      const { instance, stop } = createRadio(
        { modelValue: true },
        undefined,
        undefined,
        undefined,
        { icon: CustomRadioIcon }
      )
      cleanups.push(stop)

      expect(instance.i('icon').item).toEqual({ value: 'custom-radio-icon' })
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

      let radioInstance!: InspectableRadio

      const Child = defineComponent({
        setup() {
          const props = reactive<RadioProps>({ name: 'tier', valueVariant: 'pro', modelValue: true })
          const element = ref<HTMLLabelElement | undefined>()
          radioInstance = new InspectableRadio(props, element, new DesignName('d1.radio'))
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

      expect(radioInstance.hasInstance('form')).toBe(true)
      expect(register).toHaveBeenCalledWith(expect.objectContaining({
        name: 'tier'
      }))

      const inputElement = document.createElement('input')
      inputElement.type = 'radio'
      inputElement.checked = false
      radioInstance.onInput({ target: inputElement } as unknown as Event)

      expect(updateData).toHaveBeenCalled()
    })
  })
})
