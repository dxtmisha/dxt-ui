/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { nextTick, ref } from 'vue'

import { computedByLanguage } from '../computedByLanguage'
import { GeoRef } from '../../classes/ref/GeoRef'

describe('computedByLanguage', () => {
  beforeEach(() => {
    // Ensure language is set so GeoRef.get().value is truthy
    GeoRef.set('en-US')
  })

  describe('main getter', () => {
    it('should return the value from the getter when language is set', () => {
      const result = computedByLanguage(() => 'translated')
      expect(result.value).toBe('translated')
    })

    it('should return undefined by default when getter returns undefined', () => {
      const result = computedByLanguage(() => undefined as any)
      expect(result.value).toBeUndefined()
    })
  })

  describe('getterNone fallback', () => {
    it('should return getterNone when getter returns undefined', () => {
      const result = computedByLanguage(
        () => undefined as any,
        () => 'fallback'
      )
      expect(result.value).toBe('fallback')
    })

    it('should return a raw getterNone value when getter returns undefined', () => {
      const result = computedByLanguage(
        () => undefined as any,
        'static fallback' as any
      )
      expect(result.value).toBe('static fallback')
    })

    it('should prefer the getter value over getterNone', () => {
      const result = computedByLanguage(
        () => 'primary',
        () => 'fallback' as any
      )
      expect(result.value).toBe('primary')
    })
  })

  describe('conditions', () => {
    it('should call getter when conditions return true', () => {
      const result = computedByLanguage(
        () => 'conditional value',
        () => 'fallback' as any,
        () => true
      )
      expect(result.value).toBe('conditional value')
    })

    it('should use getterNone when conditions return false', () => {
      const result = computedByLanguage(
        () => 'conditional value',
        () => 'fallback' as any,
        () => false
      )
      expect(result.value).toBe('fallback')
    })
  })

  describe('reactivity', () => {
    it('should re-compute when a reactive dependency inside getter changes', async () => {
      const message = ref('hello')
      const result = computedByLanguage(() => message.value.toUpperCase())

      expect(result.value).toBe('HELLO')

      message.value = 'world'
      await nextTick()

      expect(result.value).toBe('WORLD')
    })

    it('should re-compute when conditions dependency changes', async () => {
      const conditionRef = ref(false)
      const result = computedByLanguage(
        () => 'active',
        () => 'inactive' as any,
        () => conditionRef.value
      )

      expect(result.value).toBe('inactive')

      conditionRef.value = true
      await nextTick()

      expect(result.value).toBe('active')
    })
  })
})
