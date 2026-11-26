// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, provide, reactive, ref } from 'vue'
import { DesignComponents, DesignLogicAbstract, DesignName } from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../../classes/Field/FieldAttributesInclude'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'
import { Textarea, type TextareaConstructors } from '../Textarea'
import type { TextareaProps } from '../props'
import type { TextareaComponents, TextareaEmits, TextareaSlots } from '../types'

/**
 * Inspectable subclass exposing DesignLogicAbstract internal instances map for unit assertions.
 *
 * Подкласс для доступа к внутренней карте экземпляров DesignLogicAbstract в модульных тестах.
 */
class InspectableTextarea extends Textarea {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof TextareaConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Creates a Textarea logic orchestrator inside an effectScope for isolated unit testing.
 *
 * Создаёт оркестратор логики Textarea внутри effectScope для изолированного модульного тестирования.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @param components registered sub-components / зарегистрированные субкомпоненты
 * @param emits event emitter callback / функция обратного вызова для событий
 * @param constructors dependency overrides / переопределения зависимостей
 * @returns textarea instance, reactive props, element ref, and cleanup callback / экземпляр Textarea, реактивные свойства, ref элемента и функция очистки
 */
function createTextarea(
  properties: TextareaProps = {},
  slots?: TextareaSlots,
  components?: DesignComponents<TextareaComponents, TextareaProps>,
  emits?: (...args: unknown[]) => void,
  constructors?: Partial<TextareaConstructors>
) {
  const scope = effectScope()
  const props = reactive<TextareaProps>({ ...properties })
  const element = ref<HTMLElement | undefined>()
  const naming = new DesignName('d1.textarea')

  let instance!: InspectableTextarea

  scope.run(() => {
    instance = new InspectableTextarea(
      props,
      element,
      naming,
      components,
      slots,
      emits as ((type: keyof TextareaEmits, ...args: unknown[]) => void) | undefined,
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

describe('Textarea (Unit)', () => {
  const cleanups: Array<() => void> = []
  let warnSpy: ReturnType<typeof vi.spyOn>
  let errorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    expect(warnSpy).not.toHaveBeenCalled()
    expect(errorSpy).not.toHaveBeenCalled()
    vi.restoreAllMocks()
  })

  describe('Architecture and lazy instantiation', () => {
    it('should extend DesignLogicAbstract and instantiate only setup-required helpers when name is absent', () => {
      const { instance, stop } = createTextarea({ autosize: true })
      cleanups.push(stop)

      expect(instance).toBeInstanceOf(DesignLogicAbstract)
      expect(instance.hasInstance('event')).toBe(true)
      expect(instance.hasInstance('validation')).toBe(true)

      expect(instance.hasInstance('attributes')).toBe(false)
      expect(instance.hasInstance('change')).toBe(false)
      expect(instance.hasInstance('code')).toBe(false)
      expect(instance.hasInstance('elementItem')).toBe(false)
      expect(instance.hasInstance('field')).toBe(false)
      expect(instance.hasInstance('form')).toBe(false)
      expect(instance.hasInstance('value')).toBe(false)
    })

    it('should instantiate and register form during setup when props.name is provided and unregister on unmount', () => {
      const registerSpy = vi.fn()
      const updateDataSpy = vi.fn()
      const unregisterSpy = vi.fn()
      const container = document.createElement('div')
      let textareaInstance!: InspectableTextarea

      const Child = defineComponent({
        setup() {
          const props = reactive<TextareaProps>({ name: 'comment', modelValue: 'hello' })
          const element = ref<HTMLElement | undefined>()
          const naming = new DesignName('d1.textarea')

          textareaInstance = new InspectableTextarea(props, element, naming)
          return () => h('div')
        }
      })

      const Parent = defineComponent({
        setup() {
          const registration: FormElementRegistration = {
            getValue: () => undefined,
            register: registerSpy,
            updateData: updateDataSpy,
            unregister: unregisterSpy
          }
          provide(FORM_NAME_ELEMENT, registration)
          return () => h(Child)
        }
      })

      const app = createApp(Parent)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(textareaInstance.hasInstance('form')).toBe(true)
      expect(registerSpy).toHaveBeenCalledTimes(1)
      expect(registerSpy).toHaveBeenCalledWith(expect.objectContaining({
        name: 'comment'
      }))

      app.unmount()
      expect(unregisterSpy).toHaveBeenCalledTimes(1)
    })

    it('should keep form uninstantiated on input when props.name is absent', () => {
      const emitSpy = vi.fn()
      const { instance, stop } = createTextarea({}, undefined, undefined, emitSpy)
      cleanups.push(stop)

      const textareaElement = document.createElement('textarea')
      textareaElement.value = 'typed text'
      instance.i('event').onInput({ target: textareaElement } as unknown as InputEvent)

      expect(instance.hasInstance('form')).toBe(false)
      expect(emitSpy).toHaveBeenCalledWith('update:modelValue', 'typed text')
    })
  })

  describe('binds and bindsInput getters', () => {
    it('should compose binds with textareaAttrs, autosize, value, and merged event handlers', () => {
      const externalInput = vi.fn()
      const externalFocus = vi.fn()
      const emitSpy = vi.fn()

      const { instance, stop } = createTextarea(
        {
          autosize: false,
          modelValue: 'Initial',
          textareaAttrs: {
            height: 'xl',
            class: 'custom-ta',
            onInput: externalInput,
            onFocus: externalFocus
          } as Record<string, unknown>
        },
        undefined,
        undefined,
        emitSpy
      )
      cleanups.push(stop)

      const binds = instance.binds
      expect(binds.autosize).toBe(false)
      expect(binds.value).toBe('Initial')
      expect(binds.height).toBe('xl')
      expect(binds.class).toBe('custom-ta')
      expect(Array.isArray(binds.onInput)).toBe(true)
      expect(Array.isArray(binds.onFocus)).toBe(true)
      expect(typeof binds.onBlur).toBe('function')
      expect(typeof binds.onChange).toBe('function')

      const textareaElement = document.createElement('textarea')
      textareaElement.value = 'Merged input'
      const inputEvent = { target: textareaElement } as unknown as InputEvent

      for (const handler of binds.onInput as Array<(event: InputEvent) => void>) {
        handler(inputEvent)
      }

      expect(externalInput).toHaveBeenCalledTimes(1)
      expect(emitSpy).toHaveBeenCalledWith('update:modelValue', 'Merged input')
    })

    it('should compose bindsInput with FieldAttributesInclude, textareaAttrs.inputAttrs, and defined textarea props without undefined overwrites', () => {
      const { instance, stop } = createTextarea({
        placeholder: 'Write here',
        maxlength: 250,
        rows: 5,
        cols: 60,
        wrap: 'hard',
        fieldSizing: 'content',
        inputAttrs: {
          'data-from-input': '1',
          'class': 'input-cls'
        },
        textareaAttrs: {
          inputAttrs: {
            'data-from-ta': '2',
            'class': 'ta-input-cls',
            'rows': 99
          }
        }
      })
      cleanups.push(stop)

      const bindsInput = instance.bindsInput
      expect('type' in bindsInput).toBe(false)
      expect(bindsInput.placeholder).toBe('Write here')
      expect(bindsInput.maxlength).toBe(250)
      expect(bindsInput.rows).toBe(5)
      expect(bindsInput.cols).toBe(60)
      expect(bindsInput.wrap).toBe('hard')
      expect(bindsInput.fieldSizing).toBe('content')
      expect(bindsInput['data-from-input']).toBe('1')
      expect(bindsInput['data-from-ta']).toBe('2')
      expect(String(bindsInput.class)).toContain('input-cls')
      expect(String(bindsInput.class)).toContain('ta-input-cls')
    })

    it('should preserve textareaAttrs.inputAttrs rows/cols/wrap when direct props are undefined', () => {
      const { instance, stop } = createTextarea({
        textareaAttrs: {
          inputAttrs: {
            rows: 7,
            cols: 50,
            wrap: 'off'
          }
        }
      })
      cleanups.push(stop)

      const bindsInput = instance.bindsInput
      expect(bindsInput.rows).toBe(7)
      expect(bindsInput.cols).toBe(50)
      expect(bindsInput.wrap).toBe('off')
      expect('fieldSizing' in bindsInput).toBe(false)
    })

    it('should treat string "0" as filled in value and Field bindings', () => {
      const renderSpy = vi.fn(() => [])
      const components = {
        render: renderSpy
      } as unknown as DesignComponents<TextareaComponents, TextareaProps>

      const { instance, stop } = createTextarea(
        {
          modelValue: '0',
          maxlength: 50
        },
        undefined,
        components
      )
      cleanups.push(stop)

      expect(instance.i('value').boolean).toBe(true)
      expect(instance.i('value').is()).toBe(true)

      instance.i('field').render()
      expect(renderSpy).toHaveBeenLastCalledWith(
        'field',
        expect.objectContaining({
          isValue: true,
          cancelShow: true,
          value: '0',
          maxlength: 50
        }),
        undefined,
        undefined
      )
    })
  })

  describe('Dependency Injection overrides', () => {
    it('should support overriding sub-constructors via Partial<TextareaConstructors>', () => {
      /** Custom attributes subclass for DI verification / Пользовательский подкласс атрибутов для проверки DI */
      class CustomAttributes extends FieldAttributesInclude {
        override get listForTextarea(): Record<string, unknown> {
          return {
            ...super.listForTextarea,
            'data-di-attr': 'ok'
          }
        }
      }

      /** Custom value subclass for DI verification / Пользовательский подкласс значения для проверки DI */
      class CustomValue extends FieldValueInclude<string> {}

      const { instance, stop } = createTextarea(
        { modelValue: 'custom' },
        undefined,
        undefined,
        undefined,
        {
          attributes: CustomAttributes,
          value: CustomValue
        }
      )
      cleanups.push(stop)

      expect(instance.i('attributes')).toBeInstanceOf(CustomAttributes)
      expect(instance.i('value')).toBeInstanceOf(CustomValue)
      expect(instance.bindsInput['data-di-attr']).toBe('ok')
      expect(instance.binds.value).toBe('custom')
    })
  })
})
