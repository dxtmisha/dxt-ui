import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { ApiMethodItem, type ApiFetch } from '@dxtmisha/functional-basic'

import { getOptions } from '../getOptions'

describe('getOptions', () => {
  describe('String method normalization', () => {
    it.each([
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'HEAD',
      'custom-method'
    ])('should wrap HTTP method string "%s" into { method: ... }', (method) => {
      expect(getOptions(method)).toEqual({ method })
    })

    it('should support ApiMethodItem enum values', () => {
      expect(getOptions(ApiMethodItem.get)).toEqual({ method: ApiMethodItem.get })
      expect(getOptions(ApiMethodItem.post)).toEqual({ method: ApiMethodItem.post })
      expect(getOptions(ApiMethodItem.delete)).toEqual({ method: ApiMethodItem.delete })
    })
  })

  describe('Options object preservation', () => {
    it('should return the passed options object unchanged by reference', () => {
      const options: ApiFetch = {
        method: ApiMethodItem.post,
        request: { id: 1 },
        headers: { 'X-Custom': '1' }
      }
      expect(getOptions(options)).toBe(options)
    })

    it('should preserve Vue ref instances unchanged', () => {
      const optionsRef = ref<ApiFetch>({
        method: ApiMethodItem.get,
        request: { page: '1' }
      })
      const result = getOptions(optionsRef)

      expect(result).toBe(optionsRef)
      expect((result as typeof optionsRef).value.request).toEqual({ page: '1' })
    })
  })

  describe('Default and fallback behavior', () => {
    it('should return an empty object if options are omitted', () => {
      expect(getOptions()).toEqual({})
    })

    it('should return an empty object if undefined is passed explicitly', () => {
      expect(getOptions(undefined)).toEqual({})
    })
  })
})
