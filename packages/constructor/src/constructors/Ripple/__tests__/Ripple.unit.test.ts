// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import type { ImageCoordinator } from '@dxtmisha/functional-basic'

import { Ripple, type RippleConstructors } from '../Ripple'
import { RippleItem } from '../RippleItem'
import type { RippleProps } from '../props'

/**
 * Exposes internal DesignLogicAbstract instances map for lazy-loading verification.
 *
 * Предоставляет внутреннюю карту экземпляров DesignLogicAbstract для проверки ленивой инициализации.
 */
class InspectableRipple extends Ripple {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof RippleConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Creates a PointerEvent-like object with configurable button, isPrimary, and offset coordinates.
 *
 * Создаёт объект события указателя с настраиваемыми button, isPrimary и координатами смещения.
 * @param options pointer event properties / свойства события указателя
 * @param options.button mouse button index / индекс кнопки мыши
 * @param options.isPrimary whether the pointer is primary / является ли указатель основным
 * @param options.offsetX horizontal offset coordinate / координата смещения по X
 * @param options.offsetY vertical offset coordinate / координата смещения по Y
 * @returns pointer event instance / экземпляр события указателя
 */
function createPointerDownEvent(options: {
  button?: number
  isPrimary?: boolean
  offsetX?: number
  offsetY?: number
} = {}): PointerEvent {
  const {
    button = 0,
    isPrimary = true,
    offsetX = 24,
    offsetY = 36
  } = options

  const event = new MouseEvent('pointerdown', { button }) as PointerEvent

  Object.defineProperty(event, 'isPrimary', {
    configurable: true,
    value: isPrimary
  })
  Object.defineProperty(event, 'offsetX', {
    configurable: true,
    value: offsetX
  })
  Object.defineProperty(event, 'offsetY', {
    configurable: true,
    value: offsetY
  })

  return event
}

describe('Ripple', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should trigger RippleItem.add with pointer offsetX and offsetY on primary main-button press', () => {
      const scope = effectScope()
      const container = document.createElement('span')
      const element = ref<HTMLSpanElement | undefined>(container)
      const props = reactive<RippleProps>({ disabled: false })
      const ripple = scope.run(() => new Ripple(props, element, new DesignName('d1.ripple')))!

      const addSpy = vi.spyOn(ripple.i('item'), 'add')

      ripple.onPointerdown(createPointerDownEvent({
        button: 0,
        isPrimary: true,
        offsetX: 42,
        offsetY: 84
      }))

      expect(addSpy).toHaveBeenCalledTimes(1)
      expect(addSpy).toHaveBeenCalledWith({ x: 42, y: 84 })
      expect(container.children).toHaveLength(1)

      const waveElement = container.children[0] as HTMLSpanElement
      expect(waveElement.classList.contains('d1-ripple__item')).toBe(true)
      expect(waveElement.style.getPropertyValue('--d1-ripple-sys-x')).toBe('42px')
      expect(waveElement.style.getPropertyValue('--d1-ripple-sys-y')).toBe('84px')

      scope.stop()
    })

    it('should support multiple sequential pointerdown presses', () => {
      const scope = effectScope()
      const container = document.createElement('span')
      const element = ref<HTMLSpanElement | undefined>(container)
      const props = reactive<RippleProps>({})
      const ripple = scope.run(() => new Ripple(props, element, new DesignName('d1.ripple')))!

      ripple.onPointerdown(createPointerDownEvent({ offsetX: 10, offsetY: 15 }))
      ripple.onPointerdown(createPointerDownEvent({ offsetX: 60, offsetY: 75 }))

      expect(container.children).toHaveLength(2)
      expect((container.children[0] as HTMLSpanElement).style.getPropertyValue('--d1-ripple-sys-x')).toBe('10px')
      expect((container.children[1] as HTMLSpanElement).style.getPropertyValue('--d1-ripple-sys-x')).toBe('60px')

      scope.stop()
    })
  })

  describe('Pointer event filtering and boundary conditions', () => {
    it.each([
      [-1, 'no button pressed / hover move'],
      [1, 'middle (auxiliary) mouse button'],
      [2, 'right (secondary) mouse button'],
      [3, 'browser back button'],
      [4, 'browser forward button']
    ])('should ignore pointerdown when button is %i (%s)', (button) => {
      const scope = effectScope()
      const container = document.createElement('span')
      const element = ref<HTMLSpanElement | undefined>(container)
      const props = reactive<RippleProps>({})
      const ripple = scope.run(() => new InspectableRipple(props, element, new DesignName('d1.ripple')))!

      ripple.onPointerdown(createPointerDownEvent({
        button,
        isPrimary: true,
        offsetX: 30,
        offsetY: 30
      }))

      expect(Object.keys(ripple.instantiatedItems)).toHaveLength(0)
      expect(container.children).toHaveLength(0)

      scope.stop()
    })

    it('should ignore non-primary pointers (e.g. second finger in multi-touch)', () => {
      const scope = effectScope()
      const container = document.createElement('span')
      const element = ref<HTMLSpanElement | undefined>(container)
      const props = reactive<RippleProps>({})
      const ripple = scope.run(() => new InspectableRipple(props, element, new DesignName('d1.ripple')))!

      ripple.onPointerdown(createPointerDownEvent({
        button: 0,
        isPrimary: false,
        offsetX: 50,
        offsetY: 50
      }))

      expect(Object.keys(ripple.instantiatedItems)).toHaveLength(0)
      expect(container.children).toHaveLength(0)

      scope.stop()
    })

    it.each([
      [0, 0, '0px', '0px'],
      [-5, -12, '-5px', '-12px'],
      [12.5, 99.75, '12.5px', '99.75px']
    ])('should accurately forward boundary coordinates (%d, %d)', (offsetX, offsetY, expectedX, expectedY) => {
      const scope = effectScope()
      const container = document.createElement('span')
      const element = ref<HTMLSpanElement | undefined>(container)
      const props = reactive<RippleProps>({})
      const ripple = scope.run(() => new Ripple(props, element, new DesignName('d1.ripple')))!

      ripple.onPointerdown(createPointerDownEvent({ offsetX, offsetY }))

      const waveElement = container.children[0] as HTMLSpanElement
      expect(waveElement.style.getPropertyValue('--d1-ripple-sys-x')).toBe(expectedX)
      expect(waveElement.style.getPropertyValue('--d1-ripple-sys-y')).toBe(expectedY)

      scope.stop()
    })
  })

  describe('Reactive props and unmounted element handling', () => {
    it('should not instantiate RippleItem or add waves when disabled is true, and should activate when enabled', () => {
      const scope = effectScope()
      const container = document.createElement('span')
      const element = ref<HTMLSpanElement | undefined>(container)
      const props = reactive<RippleProps>({ disabled: true })
      const ripple = scope.run(() => new InspectableRipple(props, element, new DesignName('d1.ripple')))!

      ripple.onPointerdown(createPointerDownEvent({ offsetX: 20, offsetY: 20 }))
      expect(Object.keys(ripple.instantiatedItems)).toHaveLength(0)
      expect(container.children).toHaveLength(0)

      props.disabled = false
      ripple.onPointerdown(createPointerDownEvent({ offsetX: 20, offsetY: 20 }))
      expect(ripple.instantiatedItems.item).toBeInstanceOf(RippleItem)
      expect(container.children).toHaveLength(1)

      scope.stop()
    })

    it('should safely handle pointerdown when element ref is undefined (SSR / before mount)', () => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(undefined)
      const props = reactive<RippleProps>({})
      const ripple = scope.run(() => new Ripple(props, element, new DesignName('d1.ripple')))!

      expect(() => {
        ripple.onPointerdown(createPointerDownEvent({ offsetX: 15, offsetY: 25 }))
      }).not.toThrow()

      scope.stop()
    })
  })

  describe('Statefulness, lazy instantiation, and Dependency Injection', () => {
    it('should keep RippleItem lazy upon construction and instantiate only on first access', () => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const props = reactive<RippleProps>({})
      const ripple = scope.run(() => new InspectableRipple(props, element, new DesignName('d1.ripple')))!

      expect(Object.keys(ripple.instantiatedItems)).toHaveLength(0)

      const itemInstance = ripple.i('item')
      expect(itemInstance).toBeInstanceOf(RippleItem)
      expect(ripple.instantiatedItems.item).toBe(itemInstance)
      expect(ripple.i('item')).toBe(itemInstance)

      scope.stop()
    })

    it('should support custom RippleItem constructor override via Dependency Injection', () => {
      const recordedCoordinates: Array<ImageCoordinator | undefined> = []

      /**
       * Custom RippleItem implementation for testing Dependency Injection.
       *
       * Пользовательская реализация RippleItem для тестирования внедрения зависимостей.
       */
      class CustomRippleItem extends RippleItem {
        /**
         * Records coordinates instead of mutating DOM.
         *
         * Записывает координаты вместо изменения DOM.
         * @param coordinator layout coordinates / координаты макета
         */
        override add(coordinator?: ImageCoordinator): void {
          recordedCoordinates.push(coordinator)
        }
      }

      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const props = reactive<RippleProps>({})
      const ripple = scope.run(() => new InspectableRipple(
        props,
        element,
        new DesignName('d1.ripple'),
        undefined,
        undefined,
        undefined,
        { item: CustomRippleItem }
      ))!

      expect(Object.keys(ripple.instantiatedItems)).toHaveLength(0)

      ripple.onPointerdown(createPointerDownEvent({ offsetX: 77, offsetY: 88 }))

      expect(ripple.i('item')).toBeInstanceOf(CustomRippleItem)
      expect(recordedCoordinates).toEqual([{ x: 77, y: 88 }])

      scope.stop()
    })
  })
})
