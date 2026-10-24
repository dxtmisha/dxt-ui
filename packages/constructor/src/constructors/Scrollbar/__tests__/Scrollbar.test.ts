// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName, ScrollbarWidthRef } from '@dxtmisha/functional'

import { Scrollbar, type ScrollbarConstructors } from '../Scrollbar'
import { ScrollbarBorder } from '../ScrollbarBorder'
import type { ScrollbarProps } from '../props'

/**
 * Inspectable subclass exposing instances map and lifecycle triggers for verification.
 *
 * Подкласс для проверки карты экземпляров зависимостей и вызовов жизненного цикла.
 */
class InspectableScrollbar extends Scrollbar {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof ScrollbarConstructors, unknown>> {
    return this.instances
  }

  /**
   * Triggers reactive condition watchers for sub-constructors.
   *
   * Запускает реактивные наблюдатели условий для подконструкторов.
   */
  testInitConditions(): void {
    this.initConditions()
  }

  /**
   * Simulates component mount lifecycle.
   *
   * Симулирует жизненный цикл монтирования компонента.
   */
  triggerMounted(): void {
    this.isMounted.value = true
    this.callLifecycle('onMounted')
  }

  /**
   * Simulates component unmount lifecycle.
   *
   * Симулирует жизненный цикл размонтирования компонента.
   */
  triggerUnmounted(): void {
    this.isMounted.value = false
    this.callLifecycle('onUnmounted')
  }
}

describe('Scrollbar', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize with default div tag and reflect custom tag updates', () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.scrollbar')

      const scrollbar = scope.run(() => new Scrollbar(props, element, naming))!

      expect(scrollbar).toBeDefined()
      expect(scrollbar.tag).toBe('div')

      props.tag = 'section'
      expect(scrollbar.tag).toBe('section')

      scope.stop()
    })

    it('should keep disabled class false before mount (SSR safety) and reflect ScrollbarWidthRef after mount', () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.scrollbar')

      /**
       * Mock ScrollbarWidthRef simulating overlay/thin scrollbar (disabled custom styling = true).
       *
       * Мок ScrollbarWidthRef, симулирующий тонкий/оверлейный скроллбар (отключение кастомной стилизации = true).
       */
      class MockScrollbarWidthThin extends ScrollbarWidthRef {
        override readonly item = ref<boolean>(true)
      }

      /**
       * Mock ScrollbarWidthRef simulating standard desktop scrollbar (disabled custom styling = false).
       *
       * Мок ScrollbarWidthRef, симулирующий стандартный десктопный скроллбар (отключение кастомной стилизации = false).
       */
      class MockScrollbarWidthStandard extends ScrollbarWidthRef {
        override readonly item = ref<boolean>(false)
      }

      const thinScrollbar = scope.run(() => new InspectableScrollbar(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        { width: MockScrollbarWidthThin }
      ))!

      // Before mount: must not instantiate width or enable disabled class (SSR hydration safety)
      expect(thinScrollbar.instantiatedItems.width).toBeUndefined()
      expect(thinScrollbar.classes).toEqual({
        'd1-scrollbar--disabled': false
      })
      expect(thinScrollbar.instantiatedItems.width).toBeUndefined()

      // After mount: instantiates width lazily and reflects item.value = true
      thinScrollbar.triggerMounted()
      expect(thinScrollbar.classes).toEqual({
        'd1-scrollbar--disabled': true
      })
      expect(thinScrollbar.instantiatedItems.width).toBeInstanceOf(MockScrollbarWidthThin)

      // After unmount: resets isMounted and disables the class
      thinScrollbar.triggerUnmounted()
      expect(thinScrollbar.classes).toEqual({
        'd1-scrollbar--disabled': false
      })

      const standardScrollbar = scope.run(() => new InspectableScrollbar(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        { width: MockScrollbarWidthStandard }
      ))!

      standardScrollbar.triggerMounted()
      expect(standardScrollbar.classes).toEqual({
        'd1-scrollbar--disabled': false
      })

      scope.stop()
    })
  })

  describe('Statefulness, lazy instantiation, and Dependency Injection', () => {
    it('should keep border and width lazy upon construction and instantiate on demand via i()', () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.scrollbar')

      const scrollbar = scope.run(() => new InspectableScrollbar(props, element, naming))!

      expect(Object.keys(scrollbar.instantiatedItems)).toHaveLength(0)

      const border = scrollbar.i('border')
      expect(border).toBeInstanceOf(ScrollbarBorder)
      expect(scrollbar.instantiatedItems.border).toBe(border)
      expect(scrollbar.i('border')).toBe(border)

      const width = scrollbar.i('width')
      expect(width).toBeInstanceOf(ScrollbarWidthRef)
      expect(scrollbar.instantiatedItems.width).toBe(width)

      scope.stop()
    })

    it.each([
      ['divider', { divider: true }],
      ['dividerTop', { dividerTop: true }],
      ['dividerBottom', { dividerBottom: true }]
    ] as const)('should automatically instantiate border when %s condition becomes true', async (_propName, targetState) => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.scrollbar')

      const scrollbar = scope.run(() => new InspectableScrollbar(props, element, naming))!
      scrollbar.testInitConditions()

      expect(scrollbar.instantiatedItems.border).toBeUndefined()

      Object.assign(props, targetState)
      await nextTick()

      expect(scrollbar.instantiatedItems.border).toBeInstanceOf(ScrollbarBorder)

      scope.stop()
    })

    it('should immediately instantiate border on initConditions if border condition is already true', () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({ divider: true })
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.scrollbar')

      const scrollbar = scope.run(() => new InspectableScrollbar(props, element, naming))!
      scrollbar.testInitConditions()

      expect(scrollbar.instantiatedItems.border).toBeInstanceOf(ScrollbarBorder)

      scope.stop()
    })

    it('should support dependency overrides for both border and width via constructors option', () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.scrollbar')

      /**
       * Custom ScrollbarBorder implementation for Dependency Injection verification.
       *
       * Пользовательская реализация ScrollbarBorder для проверки внедрения зависимостей.
       */
      class CustomBorder extends ScrollbarBorder {
        readonly isCustomBorder = true
      }

      /**
       * Custom ScrollbarWidthRef implementation for Dependency Injection verification.
       *
       * Пользовательская реализация ScrollbarWidthRef для проверки внедрения зависимостей.
       */
      class CustomWidth extends ScrollbarWidthRef {
        readonly isCustomWidth = true
      }

      const scrollbar = scope.run(() => new Scrollbar(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        {
          border: CustomBorder,
          width: CustomWidth
        }
      ))!

      expect(scrollbar.i('border')).toBeInstanceOf(CustomBorder)
      expect((scrollbar.i('border') as CustomBorder).isCustomBorder).toBe(true)
      expect(scrollbar.i('width')).toBeInstanceOf(CustomWidth)
      expect((scrollbar.i('width') as CustomWidth).isCustomWidth).toBe(true)

      scope.stop()
    })
  })
})
