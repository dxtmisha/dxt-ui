// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, expectTypeOf, it } from 'vitest'
import { defineComponent, effectScope, h, reactive, ref } from 'vue'
import {
  ComponentStorage,
  type ComponentStorageReturn,
  type ConstrBind,
  DesignName
} from '@dxtmisha/functional'

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

describe('ComponentOutlet (unit)', () => {
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
      expectTypeOf(outlet.binds).toEqualTypeOf<ConstrBind>()

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
      expectTypeOf(resolved).toEqualTypeOf<ComponentStorageReturn | undefined>()

      scope.stop()
    })

    it('should return undefined or current element instance from getElement() even when detached', () => {
      const scope = effectScope()
      const props = reactive<ComponentOutletProps>({})
      const element = ref<Element>()
      const naming = new DesignName('d1.componentOutlet')

      const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!
      const { getElement } = outlet

      expect(getElement()).toBeUndefined()

      const buttonElement = document.createElement('button')
      element.value = buttonElement

      expect(getElement<HTMLButtonElement>()).toBe(buttonElement)

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

    it('should return undefined instead of null when Vue resets template ref to null on unmount', () => {
      const scope = effectScope()
      const props = reactive<ComponentOutletProps>({})
      const element = ref<Element | undefined>(document.createElement('div'))
      const naming = new DesignName('d1.componentOutlet')

      const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!
      expect(outlet.getElement()).toBe(element.value)

      // Simulate Vue resetting template ref to null upon component unmount
      ;(element as unknown as { value: Element | null }).value = null
      expect(outlet.getElement()).toBeUndefined()

      scope.stop()
    })
  })

  describe('Immutability and security boundaries', () => {
    it('should safely return undefined for prototype property names without prototype leakage', () => {
      const scope = effectScope()
      const element = ref<Element>()
      const naming = new DesignName('d1.componentOutlet')

      for (const dangerousName of ['__proto__', 'constructor', 'prototype', 'toString']) {
        const props = reactive<ComponentOutletProps>({ name: dangerousName })
        const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!
        expect(outlet.component).toBeUndefined()
      }

      scope.stop()
    })

    it('should not mutate caller-passed props.props or storage defaults when resolving component', () => {
      const ImmutableWidget = defineComponent({
        setup() {
          return () => h('div')
        }
      })

      const storageDefaults = { mode: 'default', class: 'base' }
      const callerProps = { label: 'Title', class: 'extra' }
      ComponentStorage.add('immutable-widget', ImmutableWidget, storageDefaults)

      const scope = effectScope()
      const props = reactive<ComponentOutletProps>({
        name: 'immutable-widget',
        props: callerProps
      })
      const element = ref<Element>()
      const naming = new DesignName('d1.componentOutlet')

      const outlet = scope.run(() => new ComponentOutlet(props, element, naming))!
      const resolved = outlet.component

      expect(resolved?.props).toEqual({
        mode: 'default',
        label: 'Title',
        class: ['base', 'extra']
      })
      expect(storageDefaults).toEqual({ mode: 'default', class: 'base' })
      expect(callerProps).toEqual({ label: 'Title', class: 'extra' })

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
