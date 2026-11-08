import { describe, it, expect, beforeEach } from 'vitest'
import { defineComponent, h } from 'vue'
import { ComponentStorage } from '../ComponentStorage'
import { ComponentStorageInstance } from '../ComponentStorageInstance'

const CardStub = defineComponent({
  name: 'CardStub',
  props: {
    title: { type: String, default: '' },
    elevated: { type: Boolean, default: false }
  },
  render() {
    return h('div', { class: { elevated: this.elevated } }, this.title)
  }
})

const BadgeStub = defineComponent({
  name: 'BadgeStub',
  props: {
    count: { type: Number, default: 0 }
  },
  render() {
    return h('span', String(this.count))
  }
})

class ComponentStorageTestAccess extends ComponentStorage {
  static reset(): void {
    this.item = undefined
  }
}

describe('ComponentStorage', () => {
  beforeEach(() => {
    ComponentStorageTestAccess.reset()
  })

  describe('getItem() singleton lifecycle', () => {
    it('should lazily create and return a single shared ComponentStorageInstance', () => {
      const firstInstance = ComponentStorage.getItem()
      const secondInstance = ComponentStorage.getItem()

      expect(firstInstance).toBeInstanceOf(ComponentStorageInstance)
      expect(firstInstance).toBe(secondInstance)
    })
  })

  describe('add(), has(), and get()', () => {
    it('should return false for has() and undefined for get() when component is not registered', () => {
      expect(ComponentStorage.has('card')).toBe(false)
      expect(ComponentStorage.get('card')).toBeUndefined()
    })

    it('should register a component via add() and retrieve it with merged props via get()', () => {
      ComponentStorage.add('card', CardStub, {
        title: 'Default Card',
        elevated: true,
        class: 'card-base'
      })

      expect(ComponentStorage.has('card')).toBe(true)

      const resolved = ComponentStorage.get('card', {
        title: 'Custom Card',
        class: 'card-custom'
      })

      expect(resolved).toEqual({
        component: CardStub,
        props: {
          title: 'Custom Card',
          elevated: true,
          class: ['card-base', 'card-custom']
        }
      })
    })

    it('should register a component without default props', () => {
      ComponentStorage.add('badge', BadgeStub)

      expect(ComponentStorage.has('badge')).toBe(true)
      expect(ComponentStorage.get('badge', { count: 0 })).toEqual({
        component: BadgeStub,
        props: { count: 0 }
      })
    })
  })

  describe('addList()', () => {
    it('should register multiple components into the shared instance', () => {
      ComponentStorage.addList([
        { name: 'card', component: CardStub, props: { title: 'Card 1' } },
        { name: 'badge', component: BadgeStub, props: { count: 5 } }
      ])

      expect(ComponentStorage.has('card')).toBe(true)
      expect(ComponentStorage.has('badge')).toBe(true)
      expect(ComponentStorage.get('card')?.props).toEqual({ title: 'Card 1' })
      expect(ComponentStorage.get('badge', { count: 0 })?.props).toEqual({ count: 0 })
    })
  })
})
