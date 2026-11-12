// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    provide: vi.fn()
  }
})

import { Actions, type ActionsConstructors } from '../Actions'
import { AreaInclude } from '../../../classes/AreaInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { TextInclude } from '../../../classes/TextInclude'
import type { ActionsPropsBasic, ActionsSlots } from '../index'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
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

describe('Actions (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.actions')

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize and evaluate list states to false when empty', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ActionsPropsBasic = reactive({})

      scope.run(() => {
        const actions = new Actions(props, element, naming)

        expect(actions.isList()).toBe(false)
        expect(actions.isSecondary()).toBe(false)
      })

      scope.stop()
    })

    it('should evaluate isList() properly based on list prop and default slot', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const actionsEmpty = new Actions(reactive({}), element, naming)
        expect(actionsEmpty.isList()).toBe(false)

        const actionsWithList = new Actions(
          reactive({ list: [{ label: 'Action 1' }] }),
          element,
          naming
        )
        expect(actionsWithList.isList()).toBe(true)

        const slotsWithDefault: ActionsSlots = { default: () => 'custom' }
        const actionsWithSlot = new Actions(
          reactive({}),
          element,
          naming,
          undefined,
          slotsWithDefault
        )
        expect(actionsWithSlot.isList()).toBe(true)

        const actionsWithBoth = new Actions(
          reactive({ list: [{ label: 'Action 1' }] }),
          element,
          naming,
          undefined,
          slotsWithDefault
        )
        expect(actionsWithBoth.isList()).toBe(true)
      })

      scope.stop()
    })

    it('should evaluate isSecondary() properly based on listSecondary prop and secondary slot', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const actionsEmpty = new Actions(reactive({}), element, naming)
        expect(actionsEmpty.isSecondary()).toBe(false)

        const actionsWithSecondary = new Actions(
          reactive({ listSecondary: [{ label: 'Secondary 1' }] }),
          element,
          naming
        )
        expect(actionsWithSecondary.isSecondary()).toBe(true)

        const slotsWithSecondary: ActionsSlots = { secondary: () => 'secondary-slot' }
        const actionsWithSlot = new Actions(
          reactive({}),
          element,
          naming,
          undefined,
          slotsWithSecondary
        )
        expect(actionsWithSlot.isSecondary()).toBe(true)

        const actionsWithBoth = new Actions(
          reactive({ listSecondary: [{ label: 'Secondary 1' }] }),
          element,
          naming,
          undefined,
          slotsWithSecondary
        )
        expect(actionsWithBoth.isSecondary()).toBe(true)
      })

      scope.stop()
    })

    it('should evaluate isLeft() properly based on align prop', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        expect(new Actions(reactive({ align: 'left' }), element, naming).isLeft()).toBe(true)
        expect(new Actions(reactive({ align: 'none' }), element, naming).isLeft()).toBe(true)
        expect(new Actions(reactive({ align: 'right' }), element, naming).isLeft()).toBe(false)
        expect(new Actions(reactive({ align: 'center' }), element, naming).isLeft()).toBe(false)
        expect(new Actions(reactive({ align: 'block' }), element, naming).isLeft()).toBe(false)
        expect(new Actions(reactive({ align: 'auto' }), element, naming).isLeft()).toBe(false)
        expect(new Actions(reactive({}), element, naming).isLeft()).toBe(false)
      })

      scope.stop()
    })

    it('should compute aria getter with default actions label and role', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const defaultActions = new Actions(reactive({}), element, naming)
        expect(defaultActions.aria).toEqual({
          'aria-label': 'Actions'
        })

        const withCustomLabel = new Actions(
          reactive({ ariaLabel: 'Custom Bar' }),
          element,
          naming
        )
        expect(withCustomLabel.aria).toEqual({
          'aria-label': 'Custom Bar'
        })

        const withCustomText = new Actions(
          reactive({ textActions: 'Custom Actions Text' }),
          element,
          naming
        )
        expect(withCustomText.aria).toEqual({
          'aria-label': 'Custom Actions Text'
        })

        const withRole = new Actions(
          reactive({ role: 'toolbar' }),
          element,
          naming
        )
        expect(withRole.aria).toEqual({
          'aria-label': 'Actions',
          'role': 'toolbar'
        })
      })

      scope.stop()
    })

    it('should reactively update isList and isSecondary when reactive props change', async () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ActionsPropsBasic = reactive({})

      await scope.run(async () => {
        const actions = new Actions(props, element, naming)

        expect(actions.isList()).toBe(false)
        expect(actions.isSecondary()).toBe(false)

        props.list = [{ label: 'New Item' }]
        await nextTick()
        expect(actions.isList()).toBe(true)

        props.listSecondary = [{ label: 'New Secondary' }]
        await nextTick()
        expect(actions.isSecondary()).toBe(true)

        props.list = undefined
        props.listSecondary = undefined
        await nextTick()
        expect(actions.isList()).toBe(false)
        expect(actions.isSecondary()).toBe(false)
      })

      scope.stop()
    })
  })

  describe('Lazy instantiation & Dependency Injection', () => {
    it('should initialize area on instantiation', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ActionsPropsBasic = reactive({ area: 'actions' })

      scope.run(() => {
        const actions = new InspectableActions(props, element, naming)
        expect(actions.instantiatedItems.area).toBeInstanceOf(AreaInclude)
        expect(actions.instantiatedItems.event).toBeUndefined()
      })

      scope.stop()
    })

    it('should instantiate event on demand when i("event") is accessed', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ActionsPropsBasic = reactive({})

      scope.run(() => {
        const actions = new InspectableActions(props, element, naming)
        expect(actions.instantiatedItems.event).toBeUndefined()

        const eventInstance = actions.i('event')
        expect(eventInstance).toBeInstanceOf(EventClickInclude)
        expect(actions.instantiatedItems.event).toBe(eventInstance)

        // Multiple calls return the exact same cached instance
        expect(actions.i('event')).toBe(eventInstance)
      })

      scope.stop()
    })

    it('should allow overriding constructors via Dependency Injection', () => {
      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      class CustomArea extends AreaInclude {}
      class CustomEvent extends EventClickInclude {}
      class CustomText extends TextInclude {}

      let actionsInstance: InspectableActions | undefined

      const TestComponent = defineComponent({
        setup() {
          const element = ref<HTMLDivElement>()
          actionsInstance = new InspectableActions(
            reactive({ area: 'custom-area' }),
            element,
            naming,
            undefined,
            undefined,
            undefined,
            {
              area: CustomArea,
              event: CustomEvent,
              text: CustomText
            }
          )
          return () => h('div')
        }
      })

      const app = createApp(TestComponent)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(actionsInstance?.instantiatedItems.area).toBeInstanceOf(CustomArea)
      expect(actionsInstance?.i('event')).toBeInstanceOf(CustomEvent)
      expect(actionsInstance?.i('text')).toBeInstanceOf(CustomText)
    })
  })
})
