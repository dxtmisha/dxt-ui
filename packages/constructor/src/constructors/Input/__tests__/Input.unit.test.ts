// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, effectScope, h, inject, provide, reactive, ref } from 'vue'
import { createApp } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { Input, type InputConstructors } from '../Input'
import { InputPassword } from '../InputPassword'
import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'
import type { InputProps } from '../props'
import type { InputComponents, InputEmits, InputSlots } from '../types'

/**
 * Inspectable subclass exposing DesignLogicAbstract protected members for unit testing.
 *
 * Подкласс для доступа к защищённым членам DesignLogicAbstract в модульных тестах.
 */
class InspectableInput extends Input {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof InputConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Creates an Input orchestrator instance inside an effectScope for isolated unit testing.
 *
 * Создаёт оркестратор Input внутри effectScope для изолированного модульного тестирования.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @param components registered sub-components / зарегистрированные субкомпоненты
 * @param emits event emitter callback / функция обратного вызова для событий
 * @param constructors dependency overrides / переопределения зависимостей
 * @returns input instance, reactive props, element ref, and cleanup callback / экземпляр Input, реактивные свойства, ref элемента и функция очистки
 */
function createInput(
  properties: InputProps = {},
  slots?: InputSlots,
  components?: DesignComponents<InputComponents, InputProps>,
  emits?: (...args: unknown[]) => void,
  constructors?: Partial<InputConstructors>
) {
  const scope = effectScope()
  const props = reactive<InputProps>({ ...properties })
  const element = ref<HTMLElement | undefined>()
  const naming = new DesignName('d1.input')

  let instance!: InspectableInput

  scope.run(() => {
    instance = new InspectableInput(
      props,
      element,
      naming,
      components,
      slots,
      emits as ((type: keyof InputEmits, ...args: unknown[]) => void) | undefined,
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

describe('Input (unit)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should instantiate only event during setup for plain text input and keep optional dependencies lazy', () => {
      const { instance, stop } = createInput({ type: 'text' })
      cleanups.push(stop)

      expect(instance.hasInstance('event')).toBe(true)
      expect(instance.hasInstance('validation')).toBe(true)

      expect(instance.hasInstance('arrow')).toBe(false)
      expect(instance.hasInstance('attributes')).toBe(false)
      expect(instance.hasInstance('change')).toBe(false)
      expect(instance.hasInstance('code')).toBe(false)
      expect(instance.hasInstance('elementItem')).toBe(false)
      expect(instance.hasInstance('field')).toBe(false)
      expect(instance.hasInstance('form')).toBe(false)
      expect(instance.hasInstance('inputMode')).toBe(false)
      expect(instance.hasInstance('mask')).toBe(false)
      expect(instance.hasInstance('match')).toBe(false)
      expect(instance.hasInstance('password')).toBe(false)
      expect(instance.hasInstance('pattern')).toBe(false)
      expect(instance.hasInstance('text')).toBe(false)
      expect(instance.hasInstance('type')).toBe(false)
      expect(instance.hasInstance('value')).toBe(false)
      expect(instance.hasInstance('visibility')).toBe(false)
    })

    it('should keep password, text, and visibility uninstantiated when resolving field binds for non-password type', () => {
      const { instance, stop } = createInput({
        type: 'email',
        iconTrailing: 'mail'
      })
      cleanups.push(stop)

      const field = instance.i('field')
      expect(field.binds.value.iconTrailing).toBe('mail')
      expect(instance.hasInstance('password')).toBe(false)
      expect(instance.hasInstance('text')).toBe(false)
      expect(instance.hasInstance('visibility')).toBe(false)
    })

    it('should instantiate password, text, and visibility lazily when type is password', () => {
      const { instance, stop } = createInput({
        type: 'password',
        iconVisibility: 'eye',
        iconVisibilityOff: 'eye-off',
        textShow: 'Show',
        textHide: 'Hide'
      })
      cleanups.push(stop)

      const field = instance.i('field')
      expect(field.binds.value.iconTrailing).toEqual({
        active: false,
        icon: 'eye',
        iconActive: 'eye-off',
        dynamic: true,
        ariaLabel: 'Show'
      })
      expect(instance.hasInstance('password')).toBe(true)
      expect(instance.hasInstance('text')).toBe(true)
      expect(instance.hasInstance('visibility')).toBe(true)

      instance.i('password').toggle()
      expect(instance.i('visibility').item.value).toBe(true)
      expect(instance.i('password').icon?.ariaLabel).toBe('Hide')
    })
  })

  describe('Form setup registration and DI overrides', () => {
    it('should instantiate and register form during setup when props.name is provided', () => {
      const registerSpy = vi.fn()
      const updateDataSpy = vi.fn()
      const container = document.createElement('div')
      let inputInstance!: InspectableInput

      const Child = defineComponent({
        setup() {
          const props = reactive<InputProps>({ name: 'email', modelValue: 'user@example.com' })
          const element = ref<HTMLElement | undefined>()
          const naming = new DesignName('d1.input')

          inputInstance = new InspectableInput(props, element, naming)
          return () => h('div')
        }
      })

      const Parent = defineComponent({
        setup() {
          const registration: FormElementRegistration = {
            getValue: () => undefined,
            register: registerSpy,
            updateData: updateDataSpy
          }
          provide(FORM_NAME_ELEMENT, registration)
          return () => h(Child)
        }
      })

      const app = createApp(Parent)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(inputInstance.hasInstance('form')).toBe(true)
      expect(registerSpy).toHaveBeenCalledTimes(1)
      expect(registerSpy).toHaveBeenCalledWith(expect.objectContaining({
        name: 'email'
      }))
    })

    it('should not instantiate form when props.name is absent and support constructor overrides', () => {
      const customToggle = vi.fn()

      class CustomPassword extends InputPassword {
        override readonly toggle = customToggle
      }

      const { instance, stop } = createInput(
        { type: 'password' },
        undefined,
        undefined,
        undefined,
        { password: CustomPassword }
      )
      cleanups.push(stop)

      expect(instance.hasInstance('form')).toBe(false)
      expect(instance.i('password')).toBeInstanceOf(CustomPassword)

      instance.i('password').toggle()
      expect(customToggle).toHaveBeenCalledTimes(1)

      const inputElement = document.createElement('input')
      inputElement.value = 'abc'
      instance.i('event').onInput({ target: inputElement } as unknown as InputEvent)
      expect(instance.hasInstance('form')).toBe(false)
    })

    it('should support inject lookup in form even when form constructor is verified', () => {
      let receivedContext: unknown
      const Child = defineComponent({
        setup() {
          receivedContext = inject(FORM_NAME_ELEMENT, undefined)
          const props = reactive<InputProps>({ name: 'fieldName' })
          const element = ref<HTMLElement | undefined>()
          const instance = new InspectableInput(props, element, new DesignName('d1.input'))
          expect(instance.hasInstance('form')).toBe(true)
          return () => h('div')
        }
      })

      const app = createApp(Child)
      const container = document.createElement('div')
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(receivedContext).toBeUndefined()
    })
  })

  describe('Binds getter and boundary values', () => {
    it('should compose binds with attributes, value, and event handlers including numeric 0', () => {
      const { instance, stop } = createInput({
        type: 'number',
        modelValue: 0,
        placeholder: 'Amount',
        inputAttrs: {
          'data-custom': 'value'
        }
      })
      cleanups.push(stop)

      const binds = instance.binds
      expect(binds.type).toBe('number')
      expect(binds.value).toBe(0)
      expect(binds.placeholder).toBe('Amount')
      expect(binds['data-custom']).toBe('value')
      expect(typeof binds.onBlur).toBe('function')
      expect(typeof binds.onInput).toBe('function')
      expect(typeof binds.onChange).toBe('function')
    })

    it('should pass text factory to FieldMatchInclude for localized match errors', () => {
      const { instance, stop } = createInput({
        match: 'password',
        textEntriesMatch: 'Custom passwords do not match'
      })
      cleanups.push(stop)

      expect(instance.i('match').getValidationMessage()).toBe('Custom passwords do not match')
    })
  })
})
