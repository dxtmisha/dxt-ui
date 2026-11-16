// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { TextInclude } from '../../../classes/TextInclude'
import { FieldCounter, type FieldCounterConstructors } from '../FieldCounter'
import type { FieldCounterProps } from '../props'

/**
 * Inspectable subclass exposing DesignLogicAbstract protected members for unit testing.
 *
 * Подкласс для доступа к защищённым членам DesignLogicAbstract в модульных тестах.
 */
class InspectableFieldCounter extends FieldCounter {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof FieldCounterConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Creates a FieldCounter instance inside an effectScope for isolated testing.
 *
 * Создаёт экземпляр FieldCounter внутри effectScope для изолированного тестирования.
 * @param properties component properties / свойства компонента
 * @param constructors dependency overrides / переопределения зависимостей
 * @returns field counter instance and cleanup handle / экземпляр FieldCounter и обработчик очистки
 */
function createFieldCounter(
  properties: FieldCounterProps = {},
  constructors?: Partial<FieldCounterConstructors>
) {
  const scope = effectScope()
  const props = reactive<FieldCounterProps>({ ...properties })
  const element = ref<HTMLElement | undefined>()
  const naming = new DesignName('d1.fieldCounter')

  let instance!: InspectableFieldCounter

  scope.run(() => {
    instance = new InspectableFieldCounter(
      props,
      element,
      naming,
      undefined,
      undefined,
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

describe('FieldCounter (unit)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should keep TextInclude uninstantiated until ariaText reaches announcement threshold', () => {
      const { instance, props, stop } = createFieldCounter({
        counter: 10,
        maxlength: 100
      })
      cleanups.push(stop)

      expect(instance.hasInstance('text')).toBe(false)
      expect(instance.item).toBe('10 / 100')
      expect(instance.ariaText).toBeUndefined()
      expect(instance.hasInstance('text')).toBe(false)

      props.counter = 90
      expect(instance.ariaText).toBe('Remaining 10 characters')
      expect(instance.hasInstance('text')).toBe(true)
      expect(instance.instantiatedItems.text).toBeInstanceOf(TextInclude)
    })

    it('should support dependency injection override for text constructor', () => {
      class CustomTextInclude extends TextInclude {
        override get characterLimit(): string {
          return 'Custom limit reached'
        }

        override get characterRemaining(): string {
          return 'Left: [left]'
        }
      }

      const { instance, props, stop } = createFieldCounter(
        {
          counter: 95,
          maxlength: 100
        },
        {
          text: CustomTextInclude
        }
      )
      cleanups.push(stop)

      expect(instance.ariaText).toBe('Left: 5')
      props.counter = 100
      expect(instance.ariaText).toBe('Custom limit reached')
    })

    it('should format item output for counter-only, counter with maxlength, and custom templates', () => {
      const { instance, props, stop } = createFieldCounter({
        counter: 25
      })
      cleanups.push(stop)

      expect(instance.item).toBe('25')

      props.maxlength = 100
      expect(instance.item).toBe('25 / 100')

      props.template = '[c] of [m] ([c])'
      expect(instance.item).toBe('25 of 100 (25)')
    })

    it('should use custom textCharacterLimit and textCharacterRemaining properties', () => {
      const { instance, props, stop } = createFieldCounter({
        counter: 95,
        maxlength: 100,
        textCharacterLimit: 'Лимит исчерпан',
        textCharacterRemaining: 'Осталось [left] симв.'
      })
      cleanups.push(stop)

      expect(instance.ariaText).toBe('Осталось 5 симв.')

      props.counter = 100
      expect(instance.ariaText).toBe('Лимит исчерпан')
    })
  })

  describe('Boundary values, zero/falsy traps, and limit thresholds', () => {
    it('should treat numeric 0 and string "0" as valid counter values', () => {
      const { instance, props, stop } = createFieldCounter({
        counter: 0
      })
      cleanups.push(stop)

      expect(instance.is()).toBe(true)
      expect(instance.counter).toBe(0)
      expect(instance.item).toBe('0')

      props.counter = '0'
      expect(instance.is()).toBe(true)
      expect(instance.counter).toBe(0)
    })

    it('should evaluate threshold boundaries accurately for maxlengthOnce default (10% rounded up) and explicit values', () => {
      const { instance, props, stop } = createFieldCounter({
        counter: 84,
        maxlength: 95
      })
      cleanups.push(stop)

      // Math.ceil(95 * 0.1) === 10 -> triggers at remaining <= 10 (counter >= 85)
      expect(instance.getMaxlengthOnce()).toBe(10)
      expect(instance.getRemaining()).toBe(11)
      expect(instance.ariaText).toBeUndefined()

      props.counter = 85
      expect(instance.getRemaining()).toBe(10)
      expect(instance.ariaText).toBe('Remaining 10 characters')

      props.maxlengthOnce = 3
      expect(instance.getMaxlengthOnce()).toBe(3)
      expect(instance.ariaText).toBeUndefined()

      props.counter = 92
      expect(instance.ariaText).toBe('Remaining 3 characters')

      props.counter = 95
      expect(instance.getRemaining()).toBe(0)
      expect(instance.ariaText).toBe('Character limit exceeded')

      props.counter = 99
      expect(instance.getRemaining()).toBe(-4)
      expect(instance.ariaText).toBe('Character limit exceeded')
    })

    it('should handle maxlengthOnce = 0 without falsy fallback', () => {
      const { instance, props, stop } = createFieldCounter({
        counter: 9,
        maxlength: 10,
        maxlengthOnce: 0
      })
      cleanups.push(stop)

      expect(instance.getMaxlengthOnce()).toBe(0)
      expect(instance.ariaText).toBeUndefined()

      props.counter = 10
      expect(instance.ariaText).toBe('Character limit exceeded')
    })
  })

  describe('Empty, nullish, and non-numeric inputs', () => {
    it('should return is() = false when neither counter nor positive maxlength is set', () => {
      const { instance, props, stop } = createFieldCounter()
      cleanups.push(stop)

      expect(instance.is()).toBe(false)
      expect(instance.isMax()).toBe(false)
      expect(instance.counter).toBe(0)
      expect(instance.max).toBe(0)
      expect(instance.ariaText).toBeUndefined()

      props.maxlength = 0
      expect(instance.isMax()).toBe(false)
      expect(instance.is()).toBe(false)

      props.maxlength = -5
      expect(instance.isMax()).toBe(false)
      expect(instance.is()).toBe(false)
    })

    it('should coerce invalid numeric strings, NaN, and Infinity safely to 0', () => {
      const { instance, stop } = createFieldCounter({
        counter: 'not-a-number',
        maxlength: Infinity
      })
      cleanups.push(stop)

      expect(instance.counter).toBe(0)
      expect(instance.max).toBe(0)
      expect(instance.isMax()).toBe(false)
      expect(instance.item).toBe('0')

      const nanInstance = createFieldCounter({
        counter: Number.NaN,
        maxlength: Number.NaN
      })
      cleanups.push(nanInstance.stop)
      expect(nanInstance.instance.counter).toBe(0)
      expect(nanInstance.instance.max).toBe(0)
    })
  })
})
