// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest'
import { Api } from '../../classes/Api'
import { isApiSuccess } from '../isApiSuccess'
import type { ApiData, ApiDataItem } from '../../types/apiTypes'

describe('isApiSuccess', () => {
  beforeEach(() => {
    Api.getStatus().setStatus(undefined)
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for array responses (empty or populated)', () => {
      expect(isApiSuccess([])).toBe(true)
      expect(isApiSuccess([1, 2, 3])).toBe(true)
      expect(isApiSuccess([{ id: 1 }])).toBe(true)
    })

    it('should return true when status is explicitly "success"', () => {
      expect(isApiSuccess({ status: 'success' })).toBe(true)
      expect(isApiSuccess({ status: 'success', data: { id: 1 } })).toBe(true)
    })

    it('should return true when the success field is explicitly true', () => {
      expect(isApiSuccess({ success: true })).toBe(true)
      expect(isApiSuccess({ success: true, items: [] })).toBe(true)
    })
  })

  describe('Explicit failure indicators and priority rules', () => {
    it('should return false when status is "error" or "warning"', () => {
      expect(isApiSuccess({ status: 'error' })).toBe(false)
      expect(isApiSuccess({ status: 'warning' })).toBe(false)
    })

    it('should return false when the success field is false', () => {
      expect(isApiSuccess({ success: false })).toBe(false)
    })

    it('should return false when errorObject is truthy', () => {
      expect(isApiSuccess({
        errorObject: { message: 'Failed' } as unknown as ApiDataItem['errorObject']
      })).toBe(false)
    })

    it('should prioritize explicit failure over 2xx HTTP status or conflicting flags', () => {
      expect(isApiSuccess({
        success: false,
        status: 'success',
        statusObject: { status: 200 }
      })).toBe(false)

      expect(isApiSuccess({
        status: 'error',
        success: true,
        statusObject: { status: 200 }
      })).toBe(false)

      expect(isApiSuccess({
        status: 'warning',
        success: true,
        statusObject: { status: 200 }
      })).toBe(false)

      expect(isApiSuccess({
        success: true,
        status: 'success',
        statusObject: { status: 200 },
        errorObject: {} as unknown as ApiDataItem['errorObject']
      })).toBe(false)
    })
  })

  describe('HTTP status code evaluation via statusObject.status', () => {
    it('should return true when statusObject.status is in the 2xx range (200-299)', () => {
      expect(isApiSuccess({ statusObject: { status: 200 } })).toBe(true)
      expect(isApiSuccess({ statusObject: { status: 201 } })).toBe(true)
      expect(isApiSuccess({ statusObject: { status: 204 } })).toBe(true)
      expect(isApiSuccess({ statusObject: { status: 299 } })).toBe(true)
    })

    it('should return true when statusObject.status is a numeric string in the 2xx range', () => {
      expect(isApiSuccess({ statusObject: { status: '200' as unknown as number } })).toBe(true)
      expect(isApiSuccess({ statusObject: { status: '204' as unknown as number } })).toBe(true)
      expect(isApiSuccess({ statusObject: { status: '299' as unknown as number } })).toBe(true)
    })

    it('should return false when statusObject.status is outside the 2xx range', () => {
      expect(isApiSuccess({ statusObject: { status: 0 } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: 100 } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: 199 } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: 300 } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: 400 } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: 404 } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: 500 } })).toBe(false)
    })

    it('should return false when statusObject.status is NaN, non-numeric string, or non-primitive', () => {
      expect(isApiSuccess({ statusObject: { status: Number.NaN } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: Number.POSITIVE_INFINITY } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: 'invalid' as unknown as number } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: '' as unknown as number } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: null as unknown as number } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: undefined } })).toBe(false)
      expect(isApiSuccess({ statusObject: { status: {} as unknown as number } })).toBe(false)
    })
  })

  describe('Global Api.getStatus() fallback and unrecognized status keys', () => {
    it('should fall back to global Api status when status, success, and statusObject keys are absent', () => {
      Api.getStatus().setStatus(200)
      expect(isApiSuccess({})).toBe(true)
      expect(isApiSuccess({ id: 42, name: 'item' })).toBe(true)

      Api.getStatus().setStatus(404)
      expect(isApiSuccess({})).toBe(false)

      Api.getStatus().setStatus(undefined)
      expect(isApiSuccess({})).toBe(false)
    })

    it('should return false without falling back to global Api status when status, success, or statusObject keys exist with non-matching values', () => {
      Api.getStatus().setStatus(200)

      expect(isApiSuccess({ status: 'pending' as unknown as ApiDataItem['status'] })).toBe(false)
      expect(isApiSuccess({ status: undefined })).toBe(false)
      expect(isApiSuccess({ success: undefined })).toBe(false)
      expect(isApiSuccess({ statusObject: undefined })).toBe(false)
      expect(isApiSuccess({ statusObject: {} as unknown as ApiDataItem['statusObject'] })).toBe(false)
    })
  })

  describe('Empty, nullish, and primitive inputs', () => {
    it('should return false when called with no arguments, null, or undefined', () => {
      expect(isApiSuccess()).toBe(false)
      expect(isApiSuccess(null)).toBe(false)
      expect(isApiSuccess(undefined)).toBe(false)
    })

    it('should return false for primitive values (strings, numbers, booleans)', () => {
      expect(isApiSuccess('string')).toBe(false)
      expect(isApiSuccess('')).toBe(false)
      expect(isApiSuccess(200)).toBe(false)
      expect(isApiSuccess(0)).toBe(false)
      expect(isApiSuccess(true)).toBe(false)
      expect(isApiSuccess(false)).toBe(false)
      expect(isApiSuccess((() => true) as unknown as ApiData<unknown>)).toBe(false)
    })
  })
})
