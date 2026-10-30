import { computed, markRaw, ref, shallowRef, toRaw } from 'vue'
import { describe, expect, it } from 'vitest'
import { type ApiData, type ApiErrorItem } from '@dxtmisha/functional-basic'
import { getApiErrorRef } from '../getApiErrorRef'

describe('getApiErrorRef', () => {
  const mockErrorItem = markRaw({
    getCode: () => 'NOT_FOUND',
    getMessage: () => 'Resource not found',
    getStatus: () => 404
  } as unknown as ApiErrorItem)

  describe('Standard functional requirements (Happy path)', () => {
    it('should return errorObject when API response has an errorObject', () => {
      const apiData = ref<ApiData<unknown>>({
        errorObject: mockErrorItem
      })
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBe(mockErrorItem)
    })

    it('should return errorObject when status is error', () => {
      const apiData = ref<ApiData<unknown>>({
        status: 'error',
        errorObject: mockErrorItem
      })
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBe(mockErrorItem)
    })

    it('should return errorObject when success is false', () => {
      const apiData = ref<ApiData<unknown>>({
        success: false,
        errorObject: mockErrorItem
      })
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBe(mockErrorItem)
    })

    it('should return errorObject when status is warning and errorObject exists', () => {
      const apiData = ref<ApiData<unknown>>({
        status: 'warning',
        errorObject: mockErrorItem
      })
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBe(mockErrorItem)
    })
  })

  describe('Successful responses (returns undefined)', () => {
    it('should return undefined when success is true', () => {
      const apiData = ref<ApiData<unknown>>({
        success: true,
        data: { id: 1 }
      })
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBeUndefined()
    })

    it('should return undefined when status is success', () => {
      const apiData = ref<ApiData<unknown>>({
        status: 'success',
        data: 'ok'
      })
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBeUndefined()
    })

    it('should return undefined when response is an array', () => {
      const apiData = ref([{ id: 1 }, { id: 2 }])
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBeUndefined()
    })

    it('should return undefined when statusObject has HTTP 200', () => {
      const apiData = ref<ApiData<unknown>>({
        statusObject: { status: 200 }
      })
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBeUndefined()
    })
  })

  describe('Nullish, empty and primitive inputs', () => {
    it('should return undefined when ref value is undefined', () => {
      const apiData = ref<ApiData<unknown> | undefined>(undefined)
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBeUndefined()
    })

    it('should return undefined when ref value is null', () => {
      const apiData = ref(null) as unknown as ReturnType<typeof ref<ApiData<unknown> | undefined>>
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBeUndefined()
    })

    it('should return undefined for string, number, or boolean values', () => {
      const stringRef = ref('error message') as unknown as ReturnType<typeof ref<ApiData<unknown> | undefined>>
      const numberRef = ref(500) as unknown as ReturnType<typeof ref<ApiData<unknown> | undefined>>
      const booleanRef = ref(false) as unknown as ReturnType<typeof ref<ApiData<unknown> | undefined>>

      expect(getApiErrorRef(stringRef).value).toBeUndefined()
      expect(getApiErrorRef(numberRef).value).toBeUndefined()
      expect(getApiErrorRef(booleanRef).value).toBeUndefined()
    })
  })

  describe('Error state without errorObject', () => {
    it('should return undefined if status is error but errorObject is missing', () => {
      const apiData = ref<ApiData<unknown>>({
        status: 'error'
      })
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBeUndefined()
    })

    it('should return undefined if success is false but errorObject is missing', () => {
      const apiData = ref<ApiData<unknown>>({
        success: false
      })
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBeUndefined()
    })
  })

  describe('Reactivity dynamics', () => {
    it('should dynamically update when the ref changes from undefined to error and back to success', () => {
      const apiData = ref<ApiData<unknown> | undefined>(undefined)
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBeUndefined()

      // Transition to error
      apiData.value = {
        status: 'error',
        errorObject: mockErrorItem
      }
      expect(errorRef.value).toBe(mockErrorItem)

      // Transition to success
      apiData.value = {
        status: 'success',
        data: { ok: true }
      }
      expect(errorRef.value).toBeUndefined()
    })

    it('should support ComputedRef and shallowRef', () => {
      const source = ref<ApiData<unknown>>({ errorObject: mockErrorItem })
      const computedSource = computed(() => source.value)
      const shallowSource = shallowRef<ApiData<unknown>>({ errorObject: mockErrorItem })

      expect(getApiErrorRef(computedSource).value).toBe(mockErrorItem)
      expect(getApiErrorRef(shallowSource).value).toBe(mockErrorItem)
    })

    it('should unwrap reactive proxy via toRaw when non-markRaw objects are used', () => {
      const rawError = {
        getCode: () => 'AUTH_FAILED',
        getMessage: () => 'Unauthorized',
        getStatus: () => 401
      } as unknown as ApiErrorItem

      const apiData = ref<ApiData<unknown>>({
        status: 'error',
        errorObject: rawError
      })
      const errorRef = getApiErrorRef(apiData)

      expect(toRaw(errorRef.value)).toBe(rawError)
    })
  })

  describe('Idempotency and side-effect freedom', () => {
    it('should produce identical results on repeated reads of .value without side effects', () => {
      const apiData = ref<ApiData<unknown>>({
        status: 'error',
        errorObject: mockErrorItem
      })
      const errorRef = getApiErrorRef(apiData)

      expect(errorRef.value).toBe(mockErrorItem)
      expect(errorRef.value).toBe(mockErrorItem)
      expect(apiData.value).toEqual({
        status: 'error',
        errorObject: mockErrorItem
      })
    })
  })
})
