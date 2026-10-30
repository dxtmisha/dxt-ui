import { describe, expect, it } from 'vitest'
import { computed, ref } from 'vue'
import { type ItemList } from '@dxtmisha/functional-basic'
import { getBindRef } from '../getBindRef'

describe('getBindRef', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should work with a static value', () => {
      const bind = getBindRef('hello')
      expect(bind.value).toEqual({ value: 'hello' })
    })

    it('should unwrap a Ref value', () => {
      const source = ref('initial')
      const bind = getBindRef(source)
      expect(bind.value).toEqual({ value: 'initial' })
    })

    it('should pass custom property names to getBind', () => {
      const source = ref('text')
      const bind = getBindRef(source, 'label')
      expect(bind.value).toEqual({ label: 'text' })
    })

    it('should support static object with custom property name', () => {
      const bind = getBindRef('save', { class: 'btn' }, 'label')
      expect(bind.value).toEqual({ class: 'btn', label: 'save' })
    })
  })

  describe('Reactivity dynamics', () => {
    it('should be reactive when the source Ref changes', () => {
      const source = ref(10)
      const bind = getBindRef(source)
      expect(bind.value).toEqual({ value: 10 })

      source.value = 20
      expect(bind.value).toEqual({ value: 20 })
    })

    it('should handle Ref for nameExtra and react to its changes', () => {
      const source = ref('val')
      const extra = ref<ItemList>({ id: 'my-id' })
      const bind = getBindRef(source, extra)
      expect(bind.value).toEqual({ value: 'val', id: 'my-id' })

      extra.value = { id: 'new-id', class: 'btn' }
      expect(bind.value).toEqual({ value: 'val', id: 'new-id', class: 'btn' })
    })

    it('should react to nested object changes in Ref', () => {
      const source = ref({ id: 'item-1', name: 'Original' })
      const bind = getBindRef(source)

      expect(bind.value).toEqual({ value: { id: 'item-1', name: 'Original' } })

      source.value = { id: 'item-1', name: 'Updated' }
      expect(bind.value).toEqual({ value: { id: 'item-1', name: 'Updated' } })
    })

    it('should work with ComputedRef as source and extra', () => {
      const count = ref(5)
      const computedSource = computed(() => count.value * 2)
      const computedExtra = computed(() => ({ class: count.value > 5 ? 'large' : 'small' }))

      const bind = getBindRef(computedSource, computedExtra, 'count')
      expect(bind.value).toEqual({ count: 10, class: 'small' })

      count.value = 10
      expect(bind.value).toEqual({ count: 20, class: 'large' })
    })
  })

  describe('Except parameter handling', () => {
    it('should forward except parameter to getBind when except is true', () => {
      const source = ref({ customProp: 'data' })
      const bind = getBindRef(source, {}, 'value', true)

      expect(bind.value).toEqual({ customProp: 'data' })
    })
  })

  describe('Nullish and boundary inputs', () => {
    it('should handle undefined and null source refs gracefully', () => {
      const sourceUndefined = ref(undefined)
      const sourceNull = ref(null)

      expect(getBindRef(sourceUndefined).value).toEqual({})
      expect(getBindRef(sourceNull).value).toEqual({})
    })

    it('should return extra when source ref is undefined', () => {
      const source = ref(undefined)
      const extra = { id: 'static-id' }

      const bind = getBindRef(source, extra)
      expect(bind.value).toEqual({ id: 'static-id' })
    })
  })
})
