import { describe, it, expect } from 'vitest'
import { defineComponent, h } from 'vue'
import { ComponentStorageInstance } from '../ComponentStorageInstance'
import type { ComponentStorageList } from '../../types/componentStorageTypes'

const ButtonStub = defineComponent({
  name: 'ButtonStub',
  props: {
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
  },
  render() {
    return h('button', { disabled: this.disabled }, this.label)
  }
})

const IconStub = defineComponent({
  name: 'IconStub',
  props: {
    icon: { type: String, default: '' }
  },
  render() {
    return h('span', this.icon)
  }
})

describe('ComponentStorageInstance', () => {
  describe('Constructor & Initialization', () => {
    it('should initialize an empty storage when no list is passed', () => {
      const storage = new ComponentStorageInstance()

      expect(storage.has('button')).toBe(false)
      expect(storage.get('button')).toBeUndefined()
    })

    it('should pre-register components when an initial list is passed to constructor', () => {
      const initialList: ComponentStorageList = [
        { name: 'button', component: ButtonStub, props: { label: 'Default' } },
        { name: 'icon', component: IconStub, props: { icon: 'home' } }
      ]

      const storage = new ComponentStorageInstance(initialList)

      expect(storage.has('button')).toBe(true)
      expect(storage.has('icon')).toBe(true)
      expect(storage.get('button')).toEqual({
        component: ButtonStub,
        props: { label: 'Default' }
      })
      expect(storage.get('icon')).toEqual({
        component: IconStub,
        props: { icon: 'home' }
      })
    })

    it('should handle an empty initial array without errors', () => {
      const storage = new ComponentStorageInstance([])

      expect(storage.has('button')).toBe(false)
    })
  })

  describe('add() & has()', () => {
    it('should register a component without default props and support method chaining', () => {
      const storage = new ComponentStorageInstance()
      const returned = storage.add('button', ButtonStub)

      expect(returned).toBe(storage)
      expect(storage.has('button')).toBe(true)
      expect(storage.get('button')).toEqual({
        component: ButtonStub,
        props: {}
      })
    })

    it('should register a component with default props', () => {
      const storage = new ComponentStorageInstance()
      storage.add('button', ButtonStub, { label: 'Submit', disabled: false })

      expect(storage.get('button')).toEqual({
        component: ButtonStub,
        props: { label: 'Submit', disabled: false }
      })
    })

    it('should overwrite an existing component when registered with the same name', () => {
      const storage = new ComponentStorageInstance()
      storage.add('item', ButtonStub, { label: 'First' })
      storage.add('item', IconStub, { icon: 'second' })

      const result = storage.get('item')
      expect(result?.component).toBe(IconStub)
      expect(result?.props).toEqual({ icon: 'second' })
    })
  })

  describe('addList()', () => {
    it('should register multiple components from a list and return the instance', () => {
      const storage = new ComponentStorageInstance()
      const returned = storage.addList([
        { name: 'button', component: ButtonStub, props: { label: 'Click' } },
        { name: 'icon', component: IconStub }
      ])

      expect(returned).toBe(storage)
      expect(storage.has('button')).toBe(true)
      expect(storage.has('icon')).toBe(true)
      expect(storage.get('icon')).toEqual({
        component: IconStub,
        props: {}
      })
    })
  })

  describe('get() & Props Merging via toBind', () => {
    it('should return undefined for an unregistered component name', () => {
      const storage = new ComponentStorageInstance()

      expect(storage.get('non-existent')).toBeUndefined()
      expect(storage.get('')).toBeUndefined()
    })

    it('should merge default props and caller props with caller taking precedence', () => {
      const storage = new ComponentStorageInstance()
      storage.add('button', ButtonStub, {
        label: 'Default Label',
        disabled: false,
        tabIndex: 0
      })

      const result = storage.get('button', {
        label: 'Custom Label',
        disabled: true
      })

      expect(result).toEqual({
        component: ButtonStub,
        props: {
          label: 'Custom Label',
          disabled: true,
          tabIndex: 0
        }
      })
    })

    it('should preserve falsy boundary values (0, false, empty string) in merged props', () => {
      const storage = new ComponentStorageInstance()
      storage.add('button', ButtonStub, {
        label: 'Initial',
        disabled: true,
        count: 10
      })

      const result = storage.get('button', {
        label: '',
        disabled: false,
        count: 0
      })

      expect(result?.props).toEqual({
        label: '',
        disabled: false,
        count: 0
      })
    })

    it('should combine class and style properties into arrays using toBind', () => {
      const storage = new ComponentStorageInstance()
      storage.add('button', ButtonStub, {
        class: 'btn-default',
        style: { color: 'red' },
        id: 'base-id'
      })

      const result = storage.get('button', {
        class: 'btn-primary',
        style: { fontWeight: 'bold' }
      })

      expect(result?.props).toEqual({
        class: ['btn-default', 'btn-primary'],
        style: [{ color: 'red' }, { fontWeight: 'bold' }],
        id: 'base-id'
      })
    })

    it('should not mutate stored default props when returned props object is modified', () => {
      const storage = new ComponentStorageInstance()
      storage.add('button', ButtonStub, { label: 'Immutable' })

      const firstCall = storage.get<typeof ButtonStub, { label?: string }>('button')
      if (firstCall) {
        firstCall.props.label = 'Mutated Externally'
      }

      const secondCall = storage.get('button')
      expect(secondCall?.props).toEqual({ label: 'Immutable' })
    })
  })

  describe('Instance Isolation & Special Keys', () => {
    it('should keep state strictly isolated between two separate instances', () => {
      const storageA = new ComponentStorageInstance()
      const storageB = new ComponentStorageInstance()

      storageA.add('button', ButtonStub, { label: 'A' })

      expect(storageA.has('button')).toBe(true)
      expect(storageB.has('button')).toBe(false)
    })

    it('should safely handle Object.prototype keys (__proto__, constructor, toString) via Map', () => {
      const storage = new ComponentStorageInstance()

      expect(storage.has('toString')).toBe(false)
      expect(storage.has('constructor')).toBe(false)
      expect(storage.has('__proto__')).toBe(false)

      storage.add('constructor', ButtonStub, { label: 'Safe' })
      expect(storage.has('constructor')).toBe(true)
      expect(storage.get('constructor')?.props).toEqual({ label: 'Safe' })
    })
  })
})
