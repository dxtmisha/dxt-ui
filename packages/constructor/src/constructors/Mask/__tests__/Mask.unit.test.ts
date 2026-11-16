// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { Mask, type MaskConstructors } from '../Mask'
import type { MaskElementInput } from '../basicTypes'
import type { MaskProps } from '../props'
import type { MaskEmits } from '../types'

/**
 * Inspectable subclass exposing DesignLogicAbstract protected members for unit testing.
 *
 * Подкласс для доступа к защищённым членам DesignLogicAbstract в модульных тестах.
 */
class InspectableMask extends Mask {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof MaskConstructors, unknown>> {
    return this.instances
  }

  /**
   * Triggers mount lifecycle hooks for isolated unit testing.
   *
   * Вызывает обработчики жизненного цикла монтирования для модульного тестирования.
   */
  mount(): void {
    this.isMounted.value = true
    this.callLifecycle('onMounted')
    this.onMounted?.()
  }

  /**
   * Triggers unmount lifecycle hooks for isolated unit testing.
   *
   * Вызывает обработчики жизненного цикла размонтирования для модульного тестирования.
   */
  unmount(): void {
    this.callLifecycle('onUnmounted')
    this.onUnmounted?.()
  }
}

/**
 * Creates a Mask orchestrator instance inside an effectScope for isolated unit testing.
 *
 * Создаёт оркестратор Mask внутри effectScope для изолированного модульного тестирования.
 * @param properties component properties / свойства компонента
 * @param emits emit callback / функция генерации событий
 * @param constructors dependency overrides / переопределения зависимостей
 * @returns mask instance, reactive props, element ref, and cleanup callback / экземпляр Mask, реактивные свойства, ссылка на элемент и функция очистки
 */
function createMask(
  properties: MaskProps = {},
  emits?: (...args: unknown[]) => void,
  constructors?: Partial<MaskConstructors>
) {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)

  const scope = effectScope()
  const props = reactive<MaskProps>({ ...properties })
  const element = ref<MaskElementInput>()
  const naming = new DesignName('d1.mask')

  let instance!: InspectableMask

  scope.run(() => {
    instance = new InspectableMask(
      props,
      element,
      naming,
      undefined,
      undefined,
      emits as unknown as ((type: keyof MaskEmits, ...args: unknown[]) => void) | undefined,
      constructors
    )
  })

  return {
    instance,
    props,
    element,
    stop: () => {
      instance.unmount()
      scope.stop()
      ServerStorage.reset()
    }
  }
}

describe('Mask (unit)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and Dependency Injection', () => {
    it('should keep all 23 subordinate dependencies lazy when props.value is omitted', () => {
      const { instance, stop } = createMask({ mask: '+1 ***' })
      cleanups.push(stop)

      expect(instance.hasInstance('buffer')).toBe(false)
      expect(instance.hasInstance('character')).toBe(false)
      expect(instance.hasInstance('characterLength')).toBe(false)
      expect(instance.hasInstance('data')).toBe(false)
      expect(instance.hasInstance('date')).toBe(false)
      expect(instance.hasInstance('emit')).toBe(false)
      expect(instance.hasInstance('event')).toBe(false)
      expect(instance.hasInstance('focus')).toBe(false)
      expect(instance.hasInstance('format')).toBe(false)
      expect(instance.hasInstance('item')).toBe(false)
      expect(instance.hasInstance('match')).toBe(false)
      expect(instance.hasInstance('pattern')).toBe(false)
      expect(instance.hasInstance('right')).toBe(false)
      expect(instance.hasInstance('rubber')).toBe(false)
      expect(instance.hasInstance('rubberItem')).toBe(false)
      expect(instance.hasInstance('rubberTransition')).toBe(false)
      expect(instance.hasInstance('selection')).toBe(false)
      expect(instance.hasInstance('special')).toBe(false)
      expect(instance.hasInstance('type')).toBe(false)
      expect(instance.hasInstance('validation')).toBe(false)
      expect(instance.hasInstance('value')).toBe(false)
      expect(instance.hasInstance('valueBasic')).toBe(false)
      expect(instance.hasInstance('view')).toBe(false)
    })

    it('should initialize value during setup including falsy numeric zero (0)', () => {
      const { instance, stop } = createMask({
        type: 'number',
        value: 0
      })
      cleanups.push(stop)

      expect(instance.hasInstance('data')).toBe(true)
      expect(instance.i('value').item.value).toBe('0')
      expect(instance.basic.value).toBe('0')
    })

    it('should support constructor overrides via constructors parameter', () => {
      const customEvent = {
        onFocus: vi.fn(),
        onBlur: vi.fn(),
        onKeydown: vi.fn(),
        onKeyup: vi.fn(),
        onBeforeinput: vi.fn(),
        onInput: vi.fn(),
        onChange: vi.fn(),
        onPaste: vi.fn(),
        onClick: vi.fn(),
        onAnimationstart: vi.fn()
      }
      const MockEventConstructor = vi.fn(function () {
        return customEvent
      }) as unknown as MaskConstructors['event']

      const { instance, stop } = createMask(
        { mask: '***' },
        undefined,
        { event: MockEventConstructor }
      )
      cleanups.push(stop)

      const binds = instance.binds
      expect(MockEventConstructor).toHaveBeenCalledTimes(1)
      expect(binds.onFocus).toBe(customEvent.onFocus)
    })
  })

  describe('Computed API, binds merging, and classes', () => {
    it('should merge external inputAttrs with internal handlers without overwriting external listeners or classes', () => {
      const externalFocus = vi.fn()
      const { instance, stop } = createMask({
        mask: '***',
        inputAttrs: {
          class: 'external-input',
          inputMode: 'numeric',
          onFocus: externalFocus
        } as Partial<HTMLInputElement>
      })
      cleanups.push(stop)

      const binds = instance.binds
      expect(binds.type).toBe('text')
      expect(binds.placeholder).toBe('')
      expect(binds.inputMode).toBe('numeric')
      expect(binds.class).toBe('external-input')
      expect(Array.isArray(binds.onFocus)).toBe(true)

      const handlers = binds.onFocus as Array<(event: FocusEvent) => void>
      handlers.forEach(handler => handler(new FocusEvent('focus')))
      expect(externalFocus).toHaveBeenCalledTimes(1)
    })

    it('should compute basic string for standard and right-aligned masks', () => {
      const { instance, props, stop } = createMask({
        mask: '+1 ***',
        value: '23'
      })
      cleanups.push(stop)

      expect(instance.basic.value).toBe('+1 23')

      props.align = 'right'
      expect(instance.basic.value).toBe('+1 23_')
    })

    it('should compute --value and --end status classes', () => {
      const { instance, props, stop } = createMask({
        mask: '***',
        value: '12'
      })
      cleanups.push(stop)

      expect(instance.classes).toEqual({
        'd1-mask--value': true,
        'd1-mask--end': false
      })

      props.dir = 'rtl'
      expect(instance.classes).toEqual({
        'd1-mask--value': true,
        'd1-mask--end': true
      })
    })
  })

  describe('Reset, set, clear, and lifecycle watchers', () => {
    it('should reset value, emit reset event, and respect numeric valueDefault: 0', () => {
      const emits = vi.fn()
      const { instance, stop } = createMask({
        type: 'number',
        valueDefault: 0,
        value: '42'
      }, emits)
      cleanups.push(stop)

      expect(instance.reset(0)).toBe(false)
      expect(emits).not.toHaveBeenCalled()

      expect(instance.set('99')).toBe(true)
      expect(instance.i('value').item.value).toBe('99')
      expect(emits).toHaveBeenCalledWith('reset', expect.any(Object), undefined)
    })

    it('should clear value to valueDefault, focus input element, and cancel pending frame on unmount', () => {
      const emits = vi.fn()
      const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation(() => 777)
      const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined)

      const { instance, element, stop } = createMask({
        mask: '***',
        value: '123',
        valueDefault: '9'
      }, emits)
      cleanups.push(stop)

      const input = document.createElement('input')
      input.focus = vi.fn()
      element.value = input

      expect(instance.clear()).toBe(true)
      expect(input.value).toBe('9')
      expect(rafSpy).toHaveBeenCalledTimes(1)

      instance.unmount()
      expect(cancelSpy).toHaveBeenCalledWith(777)
    })

    it('should update value reactively when props.value changes after mount and stop watchers on unmount', async () => {
      const { instance, props, stop } = createMask({
        mask: '***',
        value: '1'
      })
      cleanups.push(stop)

      instance.mount()

      props.value = '45'
      await nextTick()
      expect(instance.i('value').item.value).toBe('45')

      instance.unmount()

      props.value = '89'
      await nextTick()
      expect(instance.i('value').item.value).toBe('45')
    })

    it('should cancel pending MaskData animation frame on unmount', () => {
      const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation(() => 888)
      const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined)

      const { instance, element, stop } = createMask({
        mask: '***',
        value: '12'
      })
      cleanups.push(stop)

      element.value = document.createElement('input')
      instance.i('focus').in()
      instance.i('data').goSelection(false)

      expect(rafSpy).toHaveBeenCalledTimes(1)

      instance.unmount()
      expect(cancelSpy).toHaveBeenCalledWith(888)
    })
  })
})
