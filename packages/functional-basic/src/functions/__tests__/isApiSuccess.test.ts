import { describe, it, expect, beforeEach } from 'vitest'
import { isApiSuccess } from '../isApiSuccess'
import { Api } from '../../classes/Api'

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

  it('should return true when `statusObject.status` is 2xx', () => {
    expect(isApiSuccess({ statusObject: { status: 200 } })).toBe(true)
    expect(isApiSuccess({ statusObject: { status: 201 } })).toBe(true)
    expect(isApiSuccess({ statusObject: { status: 299 } })).toBe(true)
  })

  it('should return false when `statusObject.status` is not 2xx', () => {
    expect(isApiSuccess({ statusObject: { status: 400 } })).toBe(false)
    expect(isApiSuccess({ statusObject: { status: 500 } })).toBe(false)
    expect(isApiSuccess({ statusObject: { status: 199 } })).toBe(false)
    expect(isApiSuccess({ statusObject: { status: 300 } })).toBe(false)
  })

  it('it should fall back to global Api status if no success indicators are present', () => {
    Api.getStatus().setStatus(200)
    expect(isApiSuccess({})).toBe(true)

    Api.getStatus().setStatus(404)
    expect(isApiSuccess({})).toBe(false)
  })

  it('should return false for null or undefined', () => {
    // @ts-expect-error testing invalid input
    expect(isApiSuccess(null)).toBe(false)
    // @ts-expect-error testing invalid input
    expect(isApiSuccess(undefined)).toBe(false)
  })
})
