// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { computed } from 'vue'
import { FieldVisibilityInclude } from '../FieldVisibilityInclude'

describe('FieldVisibilityInclude', () => {
  describe('Initialization', () => {
    it('should initialize with visibility state false', () => {
      const visibility = new FieldVisibilityInclude()
      expect(visibility.item.value).toBe(false)
    })

    it('should keep state isolated between multiple instances', () => {
      const first = new FieldVisibilityInclude()
      const second = new FieldVisibilityInclude()

      first.toggle()
      expect(first.item.value).toBe(true)
      expect(second.item.value).toBe(false)
    })
  })

  describe('toggle()', () => {
    it('should toggle visibility state correctly between false and true', () => {
      const visibility = new FieldVisibilityInclude()
      visibility.toggle()
      expect(visibility.item.value).toBe(true)

      visibility.toggle()
      expect(visibility.item.value).toBe(false)
    })

    it('should return the current instance to support method chaining', () => {
      const visibility = new FieldVisibilityInclude()
      const result = visibility.toggle()

      expect(result).toBe(visibility)
      expect(visibility.item.value).toBe(true)

      visibility.toggle().toggle()
      expect(visibility.item.value).toBe(true)
    })
  })

  describe('Reactivity', () => {
    it('should trigger dependent computed properties when toggled', () => {
      const visibility = new FieldVisibilityInclude()
      const label = computed(() => (visibility.item.value ? 'visible' : 'hidden'))

      expect(label.value).toBe('hidden')

      visibility.toggle()
      expect(label.value).toBe('visible')

      visibility.toggle()
      expect(label.value).toBe('hidden')
    })
  })
})
