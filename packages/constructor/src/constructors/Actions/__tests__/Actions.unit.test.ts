// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Actions, type ActionsConstructors } from '../Actions'
import { AreaInclude } from '../../../classes/AreaInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { TextInclude } from '../../../classes/TextInclude'
import { getAreaValue } from '../../../functions/getAreaValue'
import { setAreaValue } from '../../../functions/setAreaValue'
import type { ActionsProps, ActionsSlots } from '../index'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

/**
 * Inspectable subclass of Actions exposing internal instances for testing.
 *
 * Проверяемый подкласс Actions, предоставляющий доступ к внутренним экземплярам.
 */
class InspectableActions extends Actions {
  /**
   * Returns internal instances map for lazy-evaluation verification.
   *
   * Возвращает внутреннюю карту экземпляров для проверки ленивой инициализации.
   * @returns instantiated constructors map / карта созданных экземпляров конструкторов
   */
  get instantiatedItems(): Partial<Record<keyof ActionsConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Helper to mount Actions inside a real Vue component setup context.
 *
 * Вспомогательная функция для монтирования Actions внутри реального setup-контекста Vue.
 * @param properties initial props / начальные свойства
 * @param slots optional slots / опциональные слоты
 * @param constructors optional constructor overrides / опциональные переопределения конструкторов
 * @returns mounted actions instance and reactive props / экземпляр Actions и реактивные свойства
 */
function createMountedActions(
  properties: ActionsProps = {},
  slots?: ActionsSlots,
  constructors?: Partial<ActionsConstructors>
): { actions: InspectableActions, props: ActionsProps } {
  const naming = new DesignName('d1.actions')
  const props = reactive<ActionsProps>({ ...properties })
  let actions!: InspectableActions

  const TestComponent = defineComponent({
    setup() {
      const element = ref<HTMLDivElement>()
      actions = new InspectableActions(
        props,
        element,
        naming,
        undefined,
        slots,
        undefined,
        constructors
      )

      return () => h('div')
    }
  })

  const host = document.createElement('div')
  document.body.appendChild(host)
  const app = createApp(TestComponent)
  app.mount(host)

  cleanups.push(() => {
    app.unmount()
    host.remove()
  })

  return { actions, props }
}

describe('Actions (Unit)', () => {
  describe('List visibility and alignment methods', () => {
    it('should evaluate isList() and isSecondary() to false when undefined or empty arrays', () => {
      const { actions } = createMountedActions()

      expect(actions.isList()).toBe(false)
      expect(actions.isSecondary()).toBe(false)

      const { actions: emptyArrays } = createMountedActions({
        list: [],
        listSecondary: []
      })

      expect(emptyArrays.isList()).toBe(false)
      expect(emptyArrays.isSecondary()).toBe(false)
    })

    it('should evaluate isList() based on list prop and default slot', () => {
      const { actions: withList } = createMountedActions({ list: [{ label: 'Action 1' }] })
      expect(withList.isList()).toBe(true)

      const { actions: withSlot } = createMountedActions({}, { default: () => 'custom' })
      expect(withSlot.isList()).toBe(true)

      const { actions: withEmptyAndSlot } = createMountedActions(
        { list: [] },
        { default: () => 'custom' }
      )
      expect(withEmptyAndSlot.isList()).toBe(true)
    })

    it('should evaluate isSecondary() based on listSecondary prop and secondary slot', () => {
      const { actions: withSecondary } = createMountedActions({
        listSecondary: [{ label: 'Secondary 1' }]
      })
      expect(withSecondary.isSecondary()).toBe(true)

      const { actions: withSlot } = createMountedActions({}, { secondary: () => 'secondary-slot' })
      expect(withSlot.isSecondary()).toBe(true)

      const { actions: withEmptyAndSlot } = createMountedActions(
        { listSecondary: [] },
        { secondary: () => 'secondary-slot' }
      )
      expect(withEmptyAndSlot.isSecondary()).toBe(true)
    })

    it('should evaluate isLeft() properly for all align values', () => {
      expect(createMountedActions({ align: 'left' }).actions.isLeft()).toBe(true)
      expect(createMountedActions({ align: 'none' }).actions.isLeft()).toBe(true)
      expect(createMountedActions({ align: 'right' }).actions.isLeft()).toBe(false)
      expect(createMountedActions({ align: 'center' }).actions.isLeft()).toBe(false)
      expect(createMountedActions({ align: 'block' }).actions.isLeft()).toBe(false)
      expect(createMountedActions({ align: 'auto' }).actions.isLeft()).toBe(false)
      expect(createMountedActions().actions.isLeft()).toBe(false)
    })

    it('should reactively update isList() and isSecondary() when reactive props change', async () => {
      const { actions, props } = createMountedActions()

      expect(actions.isList()).toBe(false)
      expect(actions.isSecondary()).toBe(false)

      props.list = [{ label: 'New Item' }]
      props.listSecondary = [{ label: 'New Secondary' }]
      await nextTick()

      expect(actions.isList()).toBe(true)
      expect(actions.isSecondary()).toBe(true)

      props.list = []
      props.listSecondary = undefined
      await nextTick()

      expect(actions.isList()).toBe(false)
      expect(actions.isSecondary()).toBe(false)
    })
  })

  describe('ARIA getter and lazy TextInclude resolution', () => {
    it('should compute aria with default textActions, custom textActions, ariaLabel, and role', () => {
      const { actions: defaultActions } = createMountedActions()
      expect(defaultActions.aria).toEqual({
        'aria-label': 'Actions'
      })
      expect(defaultActions.instantiatedItems.text).toBeInstanceOf(TextInclude)

      const { actions: withCustomText } = createMountedActions({
        textActions: 'Custom Actions Text'
      })
      expect(withCustomText.aria).toEqual({
        'aria-label': 'Custom Actions Text'
      })

      const { actions: withCustomLabel } = createMountedActions({
        ariaLabel: 'Custom Bar'
      })
      expect(withCustomLabel.aria).toEqual({
        'aria-label': 'Custom Bar'
      })
      // TextInclude should stay lazy when ariaLabel short-circuits ??
      expect(withCustomLabel.instantiatedItems.text).toBeUndefined()

      const { actions: withRole } = createMountedActions({
        role: 'toolbar'
      })
      expect(withRole.aria).toEqual({
        'aria-label': 'Actions',
        'role': 'toolbar'
      })
    })
  })

  describe('Lazy instantiation, AreaInclude provide, and Dependency Injection', () => {
    it('should eagerly initialize area on setup and keep event and text lazy', () => {
      const { actions } = createMountedActions()

      expect(actions.instantiatedItems.area).toBeInstanceOf(AreaInclude)
      expect(actions.instantiatedItems.event).toBeUndefined()
      expect(actions.instantiatedItems.text).toBeUndefined()
    })

    it('should instantiate event on demand and cache the instance', () => {
      const { actions } = createMountedActions()

      const eventInstance = actions.i('event')
      expect(eventInstance).toBeInstanceOf(EventClickInclude)
      expect(actions.instantiatedItems.event).toBe(eventInstance)
      expect(actions.i('event')).toBe(eventInstance)
    })

    it('should provide reactive area value across setup and update when props.area changes', async () => {
      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      const props = reactive<ActionsProps>({})
      let injectedValue: string | undefined

      const ChildConsumer = defineComponent({
        setup() {
          return () => {
            injectedValue = getAreaValue()
            return h('span', injectedValue ?? '')
          }
        }
      })

      const ParentActions = defineComponent({
        setup() {
          const element = ref<HTMLDivElement>()
          new Actions(props, element, new DesignName('d1.actions'))
          return () => h(ChildConsumer)
        }
      })

      const OuterScope = defineComponent({
        setup() {
          setAreaValue(ref('outer-section'))
          return () => h(ParentActions)
        }
      })

      const app = createApp(OuterScope)
      app.mount(host)
      cleanups.push(() => app.unmount())

      await nextTick()
      expect(injectedValue).toBe('outer-section')

      props.area = 'actions'
      await nextTick()
      expect(injectedValue).toBe('actions')

      props.area = undefined
      await nextTick()
      expect(injectedValue).toBe('outer-section')
    })

    it('should allow overriding constructors via Dependency Injection', () => {
      class CustomArea extends AreaInclude {}
      class CustomEvent extends EventClickInclude {}
      class CustomText extends TextInclude {}

      const { actions } = createMountedActions(
        { area: 'custom-area' },
        undefined,
        {
          area: CustomArea,
          event: CustomEvent,
          text: CustomText
        }
      )

      expect(actions.instantiatedItems.area).toBeInstanceOf(CustomArea)
      expect(actions.i('event')).toBeInstanceOf(CustomEvent)
      expect(actions.i('text')).toBeInstanceOf(CustomText)
    })
  })
})
