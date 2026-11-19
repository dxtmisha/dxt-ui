// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { Field, type FieldConstructors } from '../Field'
import { FieldElement } from '../FieldElement'
import { FieldSize } from '../FieldSize'
import type { FieldProps } from '../props'
import type { FieldComponents, FieldSlots } from '../types'

/**
 * Inspectable subclass exposing DesignLogicAbstract protected members for unit testing.
 *
 * Подкласс для доступа к защищённым членам DesignLogicAbstract в модульных тестах.
 */
class InspectableField extends Field {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof FieldConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Creates a Field orchestrator instance inside an effectScope for isolated unit testing.
 *
 * Создаёт оркестратор Field внутри effectScope для изолированного модульного тестирования.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @param components registered sub-components / зарегистрированные субкомпоненты
 * @param constructors dependency overrides / переопределения зависимостей
 * @returns field instance, reactive props, and cleanup callback / экземпляр Field, реактивные свойства и функция очистки
 */
function createField(
  properties: FieldProps = {},
  slots?: FieldSlots,
  components?: DesignComponents<FieldComponents, FieldProps>,
  constructors?: Partial<FieldConstructors>
) {
  const scope = effectScope()
  const props = reactive<FieldProps>({ ...properties })
  const element = ref<HTMLLabelElement | undefined>()
  const naming = new DesignName('d1.field')

  let instance!: InspectableField

  scope.run(() => {
    instance = new InspectableField(
      props,
      element,
      naming,
      components,
      slots,
      undefined,
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

describe('Field (unit)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should instantiate only size during setup and keep optional dependencies lazy until needed', () => {
      const { instance, stop } = createField({})
      cleanups.push(stop)

      expect(instance.hasInstance('size')).toBe(true)
      expect(instance.instantiatedItems.size).toBeInstanceOf(FieldSize)

      expect(instance.hasInstance('caption')).toBe(false)
      expect(instance.hasInstance('enabled')).toBe(false)
      expect(instance.hasInstance('event')).toBe(false)
      expect(instance.hasInstance('fieldElement')).toBe(false)
      expect(instance.hasInstance('fieldLabel')).toBe(false)
      expect(instance.hasInstance('fieldMessage')).toBe(false)
      expect(instance.hasInstance('icon')).toBe(false)
      expect(instance.hasInstance('icons')).toBe(false)
      expect(instance.hasInstance('prefix')).toBe(false)
      expect(instance.hasInstance('progress')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)
      expect(instance.hasInstance('space')).toBe(false)
      expect(instance.hasInstance('suffix')).toBe(false)
      expect(instance.hasInstance('text')).toBe(false)

      expect(instance.classes).toEqual({
        'd1-field--cancel': false,
        'd1-field--suffix': false,
        'd1-field--warning': false,
        'd1-field--validation': false
      })
      expect(instance.hasInstance('fieldElement')).toBe(true)
      expect(instance.hasInstance('icons')).toBe(false)
      expect(instance.hasInstance('text')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)
    })

    it('should keep skeleton uninstantiated when resolving control classText while isSkeleton is false', () => {
      const { instance, props, stop } = createField({
        id: 'phone-field'
      })
      cleanups.push(stop)

      const control = instance.control
      expect(control.id).toBe('phone-field')
      expect(control.className).toBe('d1-field__body__input d1-skeleton__text')
      expect(control.binds).toEqual({
        'id': 'phone-field',
        'class': 'd1-field__body__input d1-skeleton__text',
        'disabled': undefined,
        'readonly': undefined,
        'data-input': 'phone-field'
      })
      expect(instance.hasInstance('skeleton')).toBe(false)
      expect(instance.hasInstance('prefix')).toBe(false)
      expect(instance.hasInstance('suffix')).toBe(false)
      expect(instance.hasInstance('fieldLabel')).toBe(false)

      props.isSkeleton = true
      expect(instance.control.className).toBe('d1-field__body__input d1-skeleton__text')
      expect(instance.hasInstance('skeleton')).toBe(true)
    })

    it('should instantiate prefix, suffix, icons, text, and fieldLabel only when their canCreate guards pass', () => {
      const { instance, props, stop } = createField({
        classic: true,
        cancel: 'auto',
        cancelShow: false
      })
      cleanups.push(stop)

      expect(instance.describedby).toBe('')
      expect(instance.hasInstance('prefix')).toBe(false)
      expect(instance.hasInstance('suffix')).toBe(false)
      expect(instance.hasInstance('fieldLabel')).toBe(false)
      expect(instance.hasInstance('icons')).toBe(false)
      expect(instance.hasInstance('text')).toBe(false)

      props.prefix = '+84'
      props.prefixId = 'pref-vn'
      props.suffix = 'kg'
      props.suffixId = 'suf-kg'
      props.counterTop = true
      props.counter = 3
      props.counterShow = true
      props.counterId = 'top-counter'
      props.cancelShow = true

      expect(instance.classes).toEqual({
        'd1-field--cancel': true,
        'd1-field--suffix': true,
        'd1-field--warning': false,
        'd1-field--validation': false
      })
      expect(instance.hasInstance('icons')).toBe(false)
      expect(instance.hasInstance('text')).toBe(false)

      expect(instance.i('icons').cancelBind.ariaLabel).toBeTruthy()
      expect(instance.hasInstance('icons')).toBe(true)
      expect(instance.hasInstance('text')).toBe(true)

      expect(instance.describedby).toBe('pref-vn suf-kg top-counter')
      expect(instance.hasInstance('prefix')).toBe(true)
      expect(instance.hasInstance('suffix')).toBe(true)
      expect(instance.hasInstance('fieldLabel')).toBe(true)
    })

    it('should avoid instantiating progress from enabled when loading is falsy', () => {
      const { instance, props, stop } = createField({
        loading: false
      })
      cleanups.push(stop)

      expect(instance.i('enabled').isEnabled).toBe(true)
      expect(instance.hasInstance('progress')).toBe(false)

      props.loading = true
      expect(instance.callInstance('progress', item => item.is, false)).toBe(true)
      expect(instance.hasInstance('progress')).toBe(true)
      expect(instance.i('enabled').isEnabled).toBe(false)
    })
  })

  describe('ARIA, control bindings, and validation classes', () => {
    it('should expose aria-invalid and validation class when validationMessage is active', () => {
      const { instance, props, stop } = createField({
        id: 'email-field',
        validationMessage: 'Required',
        validationId: 'email-error',
        helperMessage: 'Enter email',
        helperId: 'email-helper'
      })
      cleanups.push(stop)

      expect(instance.classes['d1-field--validation']).toBe(true)
      expect(instance.control.binds).toMatchObject({
        'aria-invalid': 'true',
        'aria-describedby': 'email-helper email-error'
      })

      props.disabled = true
      expect(instance.classes['d1-field--validation']).toBe(false)
      expect(instance.control.binds['aria-invalid']).toBeUndefined()

      props.forceShowMessage = true
      expect(instance.classes['d1-field--validation']).toBe(true)
      expect(instance.control.binds['aria-invalid']).toBe('true')
    })
  })

  describe('Dependency injection', () => {
    it('should allow overriding subordinate constructors via constructors parameter', () => {
      class CustomFieldElement extends FieldElement {
        override get id(): string {
          return 'injected-id'
        }
      }

      class CustomFieldSize extends FieldSize {
        updateCalls = 0

        override readonly update = (): void => {
          this.updateCalls += 1
        }
      }

      const { instance, stop } = createField(
        {},
        undefined,
        undefined,
        {
          fieldElement: CustomFieldElement,
          size: CustomFieldSize
        }
      )
      cleanups.push(stop)

      expect(instance.control.id).toBe('injected-id')
      expect(instance.i('size')).toBeInstanceOf(CustomFieldSize)
    })
  })
})
