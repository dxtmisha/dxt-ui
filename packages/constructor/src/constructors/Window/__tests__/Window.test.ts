// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Window } from '../Window'
import type { WindowPropsBasic } from '../props'

/**
 * Inspectable subclass exposing instances map and condition lifecycle triggers for test verification.
 *
 * Подкласс для проверки карты экземпляров зависимостей и вызовов условий.
 */
class InspectableWindow extends Window {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Record<string, unknown> {
    return this.instances as Record<string, unknown>
  }

  /**
   * Simulates component mount lifecycle.
   *
   * Симулирует жизненный цикл монтирования компонента.
   */
  triggerMounted(): void {
    this.isMounted.value = true
    this.callLifecycle('onMounted')
    this.initConditions()
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

describe('Window', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should not eagerly instantiate optional conditional classes upon creation', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({}) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!

      expect(windowItem).toBeDefined()
      // Conditional instances must remain undefined when props are not set
      expect(windowItem.instantiatedItems.persistent).toBeUndefined()
      expect(windowItem.instantiatedItems.staticMode).toBeUndefined()
      expect(windowItem.instantiatedItems.hidden).toBeUndefined()
      expect(windowItem.instantiatedItems.image).toBeUndefined()

      scope.stop()
    })

    it('should track isMounted state through lifecycle triggers', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({}) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!

      expect(windowItem.isRender()).toBe(false)
      expect(windowItem.isMounted.value).toBe(false)

      windowItem.triggerMounted()
      expect(windowItem.isRender()).toBe(true)
      expect(windowItem.isMounted.value).toBe(true)

      windowItem.triggerUnmounted()
      expect(windowItem.isRender()).toBe(false)
      expect(windowItem.isMounted.value).toBe(false)

      scope.stop()
    })

    it('should support dependency injection overrides', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({}) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      class MockClient {
        is(): boolean {
          return true
        }
      }

      const windowItem = scope.run(() => new InspectableWindow(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        {
          client: MockClient as any
        }
      ))!

      expect(windowItem.i('client')).toBeInstanceOf(MockClient)

      scope.stop()
    })

    it('should activate conditional items when props are set and mounted', async () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({
        persistent: true,
        staticMode: true,
        image: 'test.jpg'
      }) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!

      windowItem.triggerMounted()
      await nextTick()

      expect(windowItem.instantiatedItems.persistent).toBeDefined()
      expect(windowItem.instantiatedItems.staticMode).toBeDefined()
      expect(windowItem.instantiatedItems.image).toBeUndefined()
      expect(windowItem.i('image')).toBeDefined()
      expect(windowItem.instantiatedItems.image).toBeDefined()

      scope.stop()
    })

    it('should activate hidden item conditionally when inert is true without staticMode', async () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({
        inert: true,
        staticMode: false,
        embedded: false
      }) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!

      windowItem.triggerMounted()
      await nextTick()

      expect(windowItem.instantiatedItems.hidden).toBeDefined()

      scope.stop()
    })

    it('should correctly identify menu roles via isMenu()', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({}) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!

      expect(windowItem.isMenu()).toBe(false)

      props.role = 'menu'
      expect(windowItem.isMenu()).toBe(true)

      props.role = 'menuitemcheckbox'
      expect(windowItem.isMenu()).toBe(true)

      props.role = 'menuitemradio'
      expect(windowItem.isMenu()).toBe(true)

      props.role = 'dialog'
      expect(windowItem.isMenu()).toBe(false)

      scope.stop()
    })

    it('should return binds with correct attributes and modal aria', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({
        role: 'dialog',
        ariaLabelledby: 'title-id'
      }) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!
      const binds = windowItem.binds

      expect(binds.key).toBe('main')
      expect(binds['data-window']).toBeDefined()
      expect(binds.role).toBe('dialog')
      expect(binds['aria-labelledby']).toBe('title-id')
      expect(binds['aria-modal']).toBe(true)

      scope.stop()
    })

    it('should return slotData with control binds and event handlers', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({}) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!
      const slotData = windowItem.slotData

      expect(slotData.classesWindow).toBeDefined()
      expect(slotData.class).toBeDefined()
      expect(slotData.open).toBeDefined()
      expect(typeof slotData.onClick).toBe('function')
      expect(typeof slotData.onKeydown).toBe('function')
      expect(typeof slotData.onContextmenu).toBe('function')
      expect(slotData.binds).toBeDefined()

      scope.stop()
    })

    it('should return classes object with appropriate status classes', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({
        embedded: true
      }) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!
      const classes = windowItem.classes

      const id = (windowItem.i('classesData') as any).getId()
      expect(classes[id]).toBe(true)
      expect(classes[naming.getStatusClass('embedded')]).toBe(true)

      scope.stop()
    })

    it('should trigger onUnmounted lifecycle on subordinate instances', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({
        persistent: true
      }) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!
      windowItem.triggerMounted()

      const persistent = windowItem.i('persistent')
      const stopSpy = vi.spyOn(persistent, 'onUnmounted')

      windowItem.triggerUnmounted()
      expect(stopSpy).toHaveBeenCalled()

      scope.stop()
    })
  })
})
