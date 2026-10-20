import { beforeEach, describe, expect, it } from 'vitest'
import { Api } from '../../classes/Api'
import { isApiSuccess } from '../isApiSuccess'
import type { ApiDataItem } from '../../types/apiTypes'

describe('isApiSuccess', () => {
  beforeEach(() => {
    // Reset global status before each test
    Api.getStatus().setStatus(undefined)
  })

  it('should return true for an array', () => {
    expect(isApiSuccess([])).toBe(true)
    expect(isApiSuccess([1, 2, 3])).toBe(true)
  })

  it('should return true when status is "success"', () => {
    expect(isApiSuccess({ status: 'success' })).toBe(true)
  })

  it('should return false when status is not "success"', () => {
    expect(isApiSuccess({ status: 'error' })).toBe(false)
    expect(isApiSuccess({ status: 'warning' })).toBe(false)
  })

  it('should return true when the success field is true', () => {
    expect(isApiSuccess({ success: true })).toBe(true)
  })

  it('should return false when the success field is false', () => {
    expect(isApiSuccess({ success: false })).toBe(false)
  })

  it('should prioritize explicit failure over 2xx HTTP status', () => {
    expect(isApiSuccess({
      success: false,
      statusObject: { status: 200 }
    })).toBe(false)

    expect(isApiSuccess({
      status: 'error',
      statusObject: { status: 200 }
    })).toBe(false)

    expect(isApiSuccess({
      status: 'warning',
      statusObject: { status: 200 }
    })).toBe(false)

    expect(isApiSuccess({
      statusObject: { status: 200 },
      errorObject: {} as unknown as ApiDataItem['errorObject']
    })).toBe(false)
  })

  it('should return true when `statusObject.status` is 2xx', () => {
    expect(isApiSuccess({ statusObject: { status: 200 } })).toBe(true)
    expect(isApiSuccess({ statusObject: { status: 201 } })).toBe(true)
    expect(isApiSuccess({ statusObject: { status: 204 } })).toBe(true)
    expect(isApiSuccess({ statusObject: { status: 299 } })).toBe(true)
    expect(isApiSuccess({ statusObject: { status: '200' as unknown as number } })).toBe(true)
  })

  it('should return false when `statusObject.status` is not 2xx', () => {
    expect(isApiSuccess({ statusObject: { status: 199 } })).toBe(false)
    expect(isApiSuccess({ statusObject: { status: 300 } })).toBe(false)
    expect(isApiSuccess({ statusObject: { status: 400 } })).toBe(false)
    expect(isApiSuccess({ statusObject: { status: 404 } })).toBe(false)
    expect(isApiSuccess({ statusObject: { status: 500 } })).toBe(false)
    expect(isApiSuccess({ statusObject: { status: 'invalid' as unknown as number } })).toBe(false)
  })

  it('it should fall back to global Api status if no success indicators are present', () => {
    Api.getStatus().setStatus(200)
    expect(isApiSuccess({})).toBe(true)

    Api.getStatus().setStatus(404)
    expect(isApiSuccess({})).toBe(false)
  })

  it('should return false for null, undefined, or primitive values', () => {
    expect(isApiSuccess(null)).toBe(false)
    expect(isApiSuccess(undefined)).toBe(false)
    expect(isApiSuccess('string')).toBe(false)
    expect(isApiSuccess(123)).toBe(false)
    expect(isApiSuccess(true)).toBe(false)
    expect(isApiSuccess(false)).toBe(false)
  })
})
