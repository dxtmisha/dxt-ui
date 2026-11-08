// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { defineComponent, effectScope, h, reactive, ref } from 'vue'
import { ComponentStorage, DesignName } from '@dxtmisha/functional'

import { ComponentOutlet } from '../ComponentOutlet'
import type { ComponentOutletProps } from '../props'

/**
 * Clears all registered components in the shared ComponentStorage instance.
 *
 * Очищает все зарегистрированные компоненты в общем экземпляре ComponentStorage.
 */
function clearComponentStorage(): void {
  ;(ComponentStorage.getItem() as unknown as { items: Map<string, unknown> }).items.clear()
}

describe('ComponentOutlet', () => {
  beforeEach(() => {
    clearComponentStorage()
  })

  afterEach(() => {
    clearComponentStorage()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return root element ref binding in binds', () => {
      const scope = effectScope()
      const props = reactive<ComponentOutletProps>({})
      const element = ref<Element>()
      const naming = new DesignName('d1.componentOutlet')

      const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!

      expect(outlet.binds).toEqual({
        ref: element
      })
      expect(outlet.binds.ref).toBe(element)

      scope.stop()
    })

    it('should resolve registered component and merge storage default props with props.props', () => {
      const DummyButton = defineComponent({
        name: 'DummyButton',
        setup() {
          return () => h('button', 'Click')
        }
      })

      ComponentStorage.add('primary-button', DummyButton, {
        type: 'button',
        variant: 'primary',
        class: 'storage-class',
        style: { color: 'red' }
      })

      const scope = effectScope()
      const props = reactive<ComponentOutletProps>({
        name: 'primary-button',
        props: {
          variant: 'secondary',
          label: 'Save',
          class: 'instance-class',
          style: { fontWeight: 'bold' }
        }
      })
      const element = ref<Element>()
      const naming = new DesignName('d1.componentOutlet')

      const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!
      const resolved = outlet.component

      expect(resolved).toBeDefined()
      expect(resolved?.component).toBe(DummyButton)
      expect(resolved?.props).toEqual({
        type: 'button',
        variant: 'secondary',
        label: 'Save',
        class: ['storage-class', 'instance-class'],
        style: [{ color: 'red' }, { fontWeight: 'bold' }]
      })

      scope.stop()
    })

    it('should return undefined or current element instance from getElement()', () => {
      const scope = effectScope()
      const props = reactive<ComponentOutletProps>({})
      const element = ref<Element>()
      const naming = new DesignName('d1.componentOutlet')

      const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!

      expect(outlet.getElement()).toBeUndefined()

      const buttonElement = document.createElement('button')
      element.value = buttonElement

      expect(outlet.getElement<HTMLButtonElement>()).toBe(buttonElement)

      scope.stop()
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it.each([
      undefined,
      '',
      'unregistered-component',
      '   '
    ])('should return undefined from component getter when name is %j', (name) => {
      const DummyCard = defineComponent({
        setup() {
          return () => h('div')
        }
      })

      ComponentStorage.add('registered-card', DummyCard, { elevation: 2 })

      const scope = effectScope()
      const props = reactive<ComponentOutletProps>({
        name,
        props: { title: 'Ignored' }
      })
      const element = ref<Element>()
      const naming = new DesignName('d1.componentOutlet')

      const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!

      expect(outlet.component).toBeUndefined()

      scope.stop()
    })

    it('should resolve registered component when neither storage defaults nor props.props are provided', () => {
      const PlainWidget = defineComponent({
        setup() {
          return () => h('span')
        }
      })

      ComponentStorage.add('plain-widget', PlainWidget)

      const scope = effectScope()
      const props = reactive<ComponentOutletProps>({
        name: 'plain-widget'
      })
      const element = ref<Element>()
      const naming = new DesignName('d1.componentOutlet')

      const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!

      expect(outlet.component).toEqual({
        component: PlainWidget,
        props: {}
      })

      scope.stop()
    })
  })

  describe('Boundary values, falsy property values, and non-destructive merging', () => {
    it('should preserve falsy values (0, false, empty string, null) when overriding storage defaults', () => {
      const CounterWidget = defineComponent({
        setup() {
          return () => h('div')
        }
      })

      ComponentStorage.add('counter-widget', CounterWidget, {
        count: 10,
        active: true,
        placeholder: 'Enter value',
        nullableValue: 'initial'
      })

      const scope = effectScope()
      const props = reactive<ComponentOutletProps>({
        name: 'counter-widget',
        props: {
          count: 0,
          active: false,
          placeholder: '',
          nullableValue: null
        }
      })
      const element = ref<Element>()
      const naming = new DesignName('d1.componentOutlet')

      const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!

      expect(outlet.component?.props).toEqual({
        count: 0,
        active: false,
        placeholder: '',
        nullableValue: null
      })

      scope.stop()
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should resolve components with Cyrillic, Vietnamese, CJK, and emoji names and props', () => {
      const UnicodeComponent = defineComponent({
        setup() {
          return () => h('div')
        }
      })

      const componentName = 'компонент-tiếng-việt-组件-🚀'
      ComponentStorage.add(componentName, UnicodeComponent, {
        title: 'Привет мир'
      })

      const scope = effectScope()
      const props = reactive<ComponentOutletProps>({
        name: componentName,
        props: {
          subtitle: 'Xin chào Việt Nam 🇻🇳 你好世界'
        }
      })
      const element = ref<Element>()
      const naming = new DesignName('d1.componentOutlet')

      const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!

      expect(outlet.component).toEqual({
        component: UnicodeComponent,
        props: {
          title: 'Привет мир',
          subtitle: 'Xin chào Việt Nam 🇻🇳 你好世界'
        }
      })

      scope.stop()
    })
  })

  describe('Statefulness, reactivity, and instance isolation', () => {
    it('should reactively update resolved component when props.name or props.props change', () => {
      const ComponentAlpha = defineComponent({
        name: 'ComponentAlpha',
        setup() {
          return () => h('div', 'Alpha')
        }
      })
      const ComponentBeta = defineComponent({
        name: 'ComponentBeta',
        setup() {
          return () => h('div', 'Beta')
        }
      })

      ComponentStorage.add('alpha', ComponentAlpha, { mode: 'a' })
      ComponentStorage.add('beta', ComponentBeta, { mode: 'b' })

      const scope = effectScope()
      const props = reactive<ComponentOutletProps>({
        name: 'alpha',
        props: { step: 1 }
      })
      const element = ref<Element>()
      const naming = new DesignName('d1.componentOutlet')

      const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!

      expect(outlet.component?.component).toBe(ComponentAlpha)
      expect(outlet.component?.props).toEqual({ mode: 'a', step: 1 })

      props.props = { step: 2 }
      expect(outlet.component?.props).toEqual({ mode: 'a', step: 2 })

      props.name = 'beta'
      expect(outlet.component?.component).toBe(ComponentBeta)
      expect(outlet.component?.props).toEqual({ mode: 'b', step: 2 })

      props.name = 'unknown'
      expect(outlet.component).toBeUndefined()

      scope.stop()
    })

    it('should isolate element references across separate ComponentOutlet instances', () => {
      const scope = effectScope()
      const firstElement = ref<Element>(document.createElement('div'))
      const secondElement = ref<Element>(document.createElement('span'))
      const naming = new DesignName('d1.componentOutlet')

      const firstOutlet = scope.run(() => new ComponentOutlet(reactive({}), firstElement, naming))!
      const secondOutlet = scope.run(() => new ComponentOutlet(reactive({}), secondElement, naming))!

      expect(firstOutlet.getElement()).toBe(firstElement.value)
      expect(secondOutlet.getElement()).toBe(secondElement.value)
      expect(firstOutlet.getElement()).not.toBe(secondOutlet.getElement())

      scope.stop()
    })
  })
})
