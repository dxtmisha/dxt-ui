/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { nextTick, ref } from 'vue'

import { computedByLanguage } from '../computedByLanguage'
import { GeoRef } from '../../classes/ref/GeoRef'

vi.mock('../../classes/ref/GeoRef', () => {
  const geoData = ref({
    country: 'US',
    language: 'en',
    standard: 'en-US',
    firstDay: '1'
  })
  return {
    GeoRef: {
      get: vi.fn(() => geoData),
      set: vi.fn((code: string) => {
        const [lang, country] = code.split('-')
        geoData.value = {
          country: country || 'US',
          language: lang || 'en',
          standard: code,
          firstDay: '1'
        }
      })
    }
  }
})

describe('computedByLanguage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    GeoRef.set('en-US')
  })

  describe('main getter', () => {
    it('should return the value from the getter when language is set', () => {
      const result = computedByLanguage(() => 'translated')
      expect(result.value).toBe('translated')
    })

    it('should return undefined by default when getter returns undefined and no getterNone is provided', () => {
      const result = computedByLanguage(() => undefined)
      expect(result.value).toBeUndefined()
    })

    it('should preserve falsy values returned by getter without triggering fallback', () => {
      const zeroResult = computedByLanguage(() => 0, () => 100)
      const emptyResult = computedByLanguage(() => '', () => 'default')
      const falseResult = computedByLanguage(() => false, () => true)
      const nullResult = computedByLanguage(() => null, () => 'fallback')

      expect(zeroResult.value).toBe(0)
      expect(emptyResult.value).toBe('')
      expect(falseResult.value).toBe(false)
      expect(nullResult.value).toBeNull()
    })
  })

  describe('getterNone fallback', () => {
    it('should return getterNone factory result when getter returns undefined', () => {
      const result = computedByLanguage(
        () => undefined,
        () => 'fallback'
      )
      expect(result.value).toBe('fallback')
    })

    it('should return a raw getterNone value when getter returns undefined', () => {
      const result = computedByLanguage(
        () => undefined,
        'static fallback'
      )
      expect(result.value).toBe('static fallback')
    })

    it('should prefer the getter value over getterNone', () => {
      const result = computedByLanguage(
        () => 'primary',
        () => 'fallback'
      )
      expect(result.value).toBe('primary')
    })

    it('should correctly infer heterogeneous types between getter and getterNone', () => {
      const result = computedByLanguage(
        () => undefined as string | undefined,
        () => 42
      )
      expect(result.value).toBe(42)
    })
  })

  describe('conditions guard', () => {
    it('should call getter when conditions return true', () => {
      const result = computedByLanguage(
        () => 'conditional value',
        () => 'fallback',
        () => true
      )
      expect(result.value).toBe('conditional value')
    })

    it('should use getterNone when conditions return false', () => {
      const result = computedByLanguage(
        () => 'conditional value',
        () => 'fallback',
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
        () => 'inactive',
        () => conditionRef.value
      )

      expect(result.value).toBe('inactive')

      conditionRef.value = true
      await nextTick()

      expect(result.value).toBe('active')
    })

    it('should re-compute when GeoRef language changes', async () => {
      const result = computedByLanguage(() => `locale-${GeoRef.get().value.language}`)

      expect(result.value).toBe('locale-en')

      GeoRef.set('ru-RU')
      await nextTick()

      expect(result.value).toBe('locale-ru')
    })

    it('should use getterNone when GeoRef.get().value is falsy', async () => {
      const { GeoRef } = await import('../../classes/ref/GeoRef')
      const geoData = GeoRef.get()

      const result = computedByLanguage(
        () => 'active',
        () => 'inactive'
      )

      expect(result.value).toBe('active')

      // Set geo value to undefined (simulating not set)
      const originalValue = geoData.value
      // @ts-expect-error Simulating missing geo context in tests
      geoData.value = undefined
      await nextTick()

      expect(result.value).toBe('inactive')

      // Restore
      geoData.value = originalValue
    })
  })

  describe('debugOptions', () => {
    it('should pass debugOptions to Vue computed', () => {
      const onTrack = vi.fn()
      const trigger = ref(1)

      const result = computedByLanguage(
        () => `value-${trigger.value}`,
        () => 'fallback',
        undefined,
        { onTrack }
      )

      expect(result.value).toBe('value-1')
      expect(onTrack).toHaveBeenCalled()
    })
  })
})
