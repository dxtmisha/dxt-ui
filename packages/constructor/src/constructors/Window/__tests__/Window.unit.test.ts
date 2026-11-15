// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
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

describe('Window (orchestrator unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

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

      windowItem.triggerUnmounted()
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

    it('should not return focus on tabIndex.reset() when disableFocusReturn is true', async () => {
      const previousButton = document.createElement('button')
      document.body.appendChild(previousButton)
      previousButton.focus()

      const scope = effectScope()
      const props: WindowPropsBasic = reactive({
        disableFocusReturn: true
      }) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!
      const tabIndex = windowItem.i('tabIndex')

      tabIndex.updateOldElement()

      const temporaryButton = document.createElement('button')
      document.body.appendChild(temporaryButton)
      temporaryButton.focus()
      document.body.removeChild(temporaryButton)

      tabIndex.reset()
      await new Promise(resolve => requestAnimationFrame(resolve))

      expect(document.activeElement).not.toBe(previousButton)

      props.disableFocusReturn = false
      previousButton.focus()
      tabIndex.updateOldElement()

      const secondTemporaryButton = document.createElement('button')
      document.body.appendChild(secondTemporaryButton)
      secondTemporaryButton.focus()
      document.body.removeChild(secondTemporaryButton)

      tabIndex.reset()
      await new Promise(resolve => requestAnimationFrame(resolve))

      expect(document.activeElement).toBe(previousButton)

      document.body.removeChild(previousButton)
      scope.stop()
    })
  })

  describe('Aggregated getters, static mode, and ARIA contract', () => {
    it('should omit role and modal aria attributes from binds in static mode', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({
        staticMode: true,
        role: 'dialog',
        ariaLabelledby: 'title-id'
      }) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!
      const binds = windowItem.binds

      expect(binds.key).toBe('main')
      expect(binds['data-window']).toBe(windowItem.i('classesData').getId())
      expect(typeof binds.onTransitionend).toBe('function')
      expect(binds.role).toBeUndefined()
      expect(binds['aria-modal']).toBeUndefined()
      expect(binds['aria-labelledby']).toBeUndefined()

      scope.stop()
    })

    it('should include aria-describedby in modal binds and react to role changes', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({
        role: 'dialog',
        ariaDescribedby: 'description-id'
      }) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!

      expect(windowItem.binds['aria-describedby']).toBe('description-id')

      props.role = 'menu'
      expect(windowItem.binds.role).toBe('menu')

      scope.stop()
    })

    it('should return false status classes by default without instantiating staticMode', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({}) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!
      const classes = windowItem.classes

      expect(classes[naming.getStatusClass('staticMode')]).toBe(false)
      expect(classes[naming.getStatusClass('embedded')]).toBe(false)
      expect(windowItem.hasInstance('staticMode')).toBe(false)

      scope.stop()
    })

    it('should expose control aria attributes and add aria-controls only while the window is in DOM', async () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({
        ariaHaspopup: 'dialog'
      }) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!
      const classesData = windowItem.i('classesData')

      const closedBinds = windowItem.slotData.binds

      expect(closedBinds.id).toBe(classesData.getControlId())
      expect(closedBinds['aria-haspopup']).toBe('dialog')
      expect(closedBinds['aria-expanded']).toBe('false')
      expect(closedBinds['aria-controls']).toBeUndefined()
      expect(closedBinds.class).toBe(classesData.list.controlId)

      await windowItem.i('open').setOpen(true)

      const openBinds = windowItem.slotData.binds

      expect(openBinds['aria-expanded']).toBe('true')
      expect(openBinds['aria-controls']).toBe(classesData.getId())
      expect(windowItem.slotData.open.value).toBe(true)

      scope.stop()
    })
  })

  describe('Lazy instantiation, guarded access, and conditions', () => {
    it('should eagerly create model and open helpers during setup only', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({}) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!

      expect(windowItem.hasInstance('model')).toBe(true)
      expect(windowItem.hasInstance('open')).toBe(true)
      expect(windowItem.hasInstance('esc')).toBe(false)
      expect(windowItem.hasInstance('event')).toBe(false)
      expect(windowItem.hasInstance('scrollbar')).toBe(false)
      expect(windowItem.hasInstance('tabIndex')).toBe(false)

      scope.stop()
    })

    it('should skip scrollbar instantiation when the scrollbar component is not registered', () => {
      const scope = effectScope()
      const props: WindowPropsBasic = reactive({}) as any
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.window')

      const windowItem = scope.run(() => new InspectableWindow(props, element, naming))!
      const result = windowItem.callInstance('scrollbar', () => 'created', 'fallback')

      expect(result).toBe('fallback')
      expect(windowItem.hasInstance('scrollbar')).toBe(false)

      scope.stop()
    })

    it('should activate esc handling on mount by default and skip it for persistent windows', async () => {
      const naming = new DesignName('d1.window')

      const defaultScope = effectScope()
      const defaultProps: WindowPropsBasic = reactive({}) as any
      const defaultItem = defaultScope.run(() => new InspectableWindow(defaultProps, ref<HTMLDivElement>(), naming))!

      defaultItem.triggerMounted()
      await nextTick()

      expect(defaultItem.hasInstance('esc')).toBe(true)

      defaultItem.triggerUnmounted()
      defaultScope.stop()

      const persistentScope = effectScope()
      const persistentProps: WindowPropsBasic = reactive({ persistent: true }) as any
      const persistentItem = persistentScope.run(() => new InspectableWindow(persistentProps, ref<HTMLDivElement>(), naming))!

      persistentItem.triggerMounted()
      await nextTick()

      expect(persistentItem.hasInstance('esc')).toBe(false)
      expect(persistentItem.hasInstance('persistent')).toBe(true)

      persistentItem.triggerUnmounted()
      persistentScope.stop()
    })

    it('should keep focus return enabled by default for the tabIndex helper', async () => {
      const previousButton = document.createElement('button')
      document.body.appendChild(previousButton)
      previousButton.focus()

      const scope = effectScope()
      const props: WindowPropsBasic = reactive({}) as any
      const windowItem = scope.run(() => new InspectableWindow(props, ref<HTMLDivElement>(), new DesignName('d1.window')))!
      const tabIndex = windowItem.i('tabIndex')

      tabIndex.updateOldElement()
      previousButton.blur()

      tabIndex.reset()
      await new Promise(resolve => requestAnimationFrame(resolve))

      expect(document.activeElement).toBe(previousButton)

      previousButton.remove()
      scope.stop()
    })
  })
})
