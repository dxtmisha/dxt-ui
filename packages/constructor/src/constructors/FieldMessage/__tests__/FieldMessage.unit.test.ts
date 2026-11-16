// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { FieldCounterInclude } from '../../FieldCounter'
import { SkeletonInclude } from '../../Skeleton'
import { FieldMessage, type FieldMessageConstructors } from '../FieldMessage'
import { FieldMessageMessage } from '../FieldMessageMessage'
import type { FieldMessageProps } from '../props'
import type { FieldMessageComponents, FieldMessageSlots } from '../types'

/**
 * Inspectable subclass exposing DesignLogicAbstract protected members for unit testing.
 *
 * Подкласс для доступа к защищённым членам DesignLogicAbstract в модульных тестах.
 */
class InspectableFieldMessage extends FieldMessage {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof FieldMessageConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Creates a FieldMessage instance inside an effectScope for isolated unit testing.
 *
 * Создаёт экземпляр FieldMessage внутри effectScope для изолированного модульного тестирования.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @param components registered sub-components / зарегистрированные субкомпоненты
 * @param constructors dependency overrides / переопределения зависимостей
 * @returns field message instance, reactive props, and cleanup callback / экземпляр FieldMessage, реактивные свойства и функция очистки
 */
function createFieldMessage(
  properties: FieldMessageProps = {},
  slots?: FieldMessageSlots,
  components?: DesignComponents<FieldMessageComponents, FieldMessageProps>,
  constructors?: Partial<FieldMessageConstructors>
) {
  const scope = effectScope()
  const props = reactive<FieldMessageProps>({ ...properties })
  const element = ref<HTMLElement | undefined>()
  const naming = new DesignName('d1.fieldMessage')

  let instance!: InspectableFieldMessage

  scope.run(() => {
    instance = new InspectableFieldMessage(
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
    stop: () => scope.stop()
  }
}

describe('FieldMessage (unit)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should keep all subordinate helpers uninstantiated before access and when disabled', () => {
      const { instance, stop } = createFieldMessage({
        disabled: true,
        helperMessage: 'Helper',
        counterShow: true,
        counter: 5,
        isSkeleton: true
      })
      cleanups.push(stop)

      expect(instance.hasInstance('fieldCounter')).toBe(false)
      expect(instance.hasInstance('message')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)

      expect(instance.is()).toBe(false)
      expect(instance.hasInstance('message')).toBe(false)
      expect(instance.hasInstance('fieldCounter')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)
    })

    it('should keep fieldCounter and skeleton uninstantiated when inactive', () => {
      const { instance, stop } = createFieldMessage({
        helperMessage: 'Helper'
      })
      cleanups.push(stop)

      expect(instance.is()).toBe(true)
      expect(instance.hasInstance('message')).toBe(true)
      expect(instance.instantiatedItems.message).toBeInstanceOf(FieldMessageMessage)
      expect(instance.hasInstance('fieldCounter')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)

      expect(instance.callInstance('fieldCounter', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('skeleton', item => item.classes, {})).toEqual({})
      expect(instance.hasInstance('fieldCounter')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)
    })

    it('should instantiate fieldCounter and skeleton strictly on demand when enabled', () => {
      const { instance, props, stop } = createFieldMessage({})
      cleanups.push(stop)

      expect(instance.is()).toBe(false)
      expect(instance.hasInstance('fieldCounter')).toBe(false)

      props.counterShow = true
      props.counter = 0
      expect(instance.is()).toBe(true)
      expect(instance.hasInstance('fieldCounter')).toBe(true)
      expect(instance.instantiatedItems.fieldCounter).toBeInstanceOf(FieldCounterInclude)

      props.isSkeleton = true
      expect(instance.callInstance('skeleton', item => item.classes, {})).toEqual({
        'd1-skeleton__textVariant': true
      })
      expect(instance.hasInstance('skeleton')).toBe(true)
      expect(instance.instantiatedItems.skeleton).toBeInstanceOf(SkeletonInclude)
    })
  })

  describe('Classes, visibility predicates, and slot data', () => {
    it('should compute validation class, helper/validation states, and slot data', () => {
      const { instance, props, stop } = createFieldMessage({
        helperMessage: 'Helper text',
        validationMessage: undefined
      })
      cleanups.push(stop)

      expect(instance.classes).toEqual({
        'd1-fieldMessage--validation': false
      })
      expect(instance.isHelper()).toBe(true)
      expect(instance.isValidation()).toBe(false)
      expect(instance.slotHelperData).toEqual({
        message: 'Helper text',
        helperMessage: 'Helper text',
        validationMessage: undefined
      })
      expect(instance.slotValidationData).toEqual({
        message: undefined,
        helperMessage: 'Helper text',
        validationMessage: undefined
      })

      props.validationMessage = 'Error text'
      expect(instance.classes).toEqual({
        'd1-fieldMessage--validation': true
      })
      expect(instance.isValidation()).toBe(true)
      expect(instance.slotValidationData).toEqual({
        message: 'Error text',
        helperMessage: 'Helper text',
        validationMessage: 'Error text'
      })
    })

    it('should allow display when disabled if forceShow is true', () => {
      const { instance, props, stop } = createFieldMessage({
        disabled: true,
        forceShow: false,
        helperMessage: 'Helper text'
      })
      cleanups.push(stop)

      expect(instance.is()).toBe(false)

      props.forceShow = true
      expect(instance.is()).toBe(true)
    })
  })

  describe('Dependency injection', () => {
    it('should support dependency injection overrides via constructors parameter', () => {
      class CustomMessage extends FieldMessageMessage {
        override isHelper(): boolean {
          return true
        }
      }

      class CustomSkeletonInclude extends SkeletonInclude {
        override get classes() {
          return { 'custom-skeleton': true }
        }
      }

      const { instance, stop } = createFieldMessage(
        {
          isSkeleton: true
        },
        undefined,
        undefined,
        {
          message: CustomMessage,
          skeleton: CustomSkeletonInclude
        }
      )
      cleanups.push(stop)

      expect(instance.isHelper()).toBe(true)
      expect(instance.callInstance('skeleton', item => item.classes, {})).toEqual({
        'custom-skeleton': true
      })
    })
  })
})
