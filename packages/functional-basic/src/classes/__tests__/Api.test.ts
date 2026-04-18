/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { Api } from '../Api'
import { ApiInstance } from '../ApiInstance'
import { ApiStatus } from '../ApiStatus'
import { ApiResponse } from '../ApiResponse'
import { ApiHydration } from '../ApiHydration'
import { ApiMethodItem } from '../../types/apiTypes'

// Mock fetch globally
const mockFetch = vi.fn()
globalThis.fetch = mockFetch

// Mock console.error to avoid cluttering test output
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

describe('Api', () => {
  beforeEach(() => {
    mockFetch.mockClear()
    consoleErrorSpy.mockClear()

    // Setup default successful response
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      json: async () => ({ data: 'test', success: true })
    })
  })

  afterEach(() => {
    // Reset API state after each test to ensure isolation
    Api.setUrl('/api/')
    Api.setHeaders({})
    Api.setRequestDefault({})
    Api.setPreparation(async () => {})
    Api.setEnd(async () => ({}))
    Api.setTimeout(16000)
  })

  // ─────────────────────────────────────────────
  // Instance Management
  // ─────────────────────────────────────────────

  describe('getItem', () => {
    it('should return an ApiInstance', () => {
      const item = Api.getItem()
      expect(item).toBeInstanceOf(ApiInstance)
    })

    it('should return the same instance on repeated calls', () => {
      const item1 = Api.getItem()
      const item2 = Api.getItem()
      expect(item1).toBe(item2)
    })
  })

  // ─────────────────────────────────────────────
  // Static Delegation
  // ─────────────────────────────────────────────

  describe('static method delegation', () => {
    describe('setUrl', () => {
      it('should correctly update and affect requests', async () => {
        Api.setUrl('/custom-api/')
        await Api.get({ path: 'test' })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/custom-api/test'),
          expect.any(Object)
        )
      })
    })

    describe('setHeaders', () => {
      it('should correctly include headers in requests', async () => {
        Api.setHeaders({ 'X-Test': 'value' })
        await Api.get({ path: 'test' })

        const headers = mockFetch.mock.calls[0][1].headers
        expect(headers).toMatchObject({ 'X-Test': 'value' })
      })
    })

    describe('setRequestDefault', () => {
      it('should merge data into request body', async () => {
        Api.setRequestDefault({ defaultKey: 'defaultValue' })
        await Api.post({ path: 'test', request: { customKey: 'customValue' } })

        const body = JSON.parse(mockFetch.mock.calls[0][1].body)
        expect(body).toMatchObject({
          defaultKey: 'defaultValue',
          customKey: 'customValue'
        })
      })
    })

    describe('request', () => {
      it('should correctly delegate and return data', async () => {
        mockFetch.mockResolvedValueOnce({
          ok: true,
          status: 200,
          statusText: 'OK',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          json: async () => ({ data: { id: 1 }, success: true })
        })

        const result = await Api.request<{ id: number }>('test-path')
        expect(result).toMatchObject({ id: 1, success: true })
        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/test-path'),
          expect.any(Object)
        )
      })
    })

    describe('HTTP methods', () => {
      it('get, post, put, delete, patch should use correct HTTP methods', async () => {
        await Api.get({ path: 'test' })
        expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.get }))

        await Api.post({ path: 'test' })
        expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.post }))

        await Api.put({ path: 'test' })
        expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.put }))

        await Api.delete({ path: 'test' })
        expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.delete }))

        await Api.patch({ path: 'test' })
        expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.patch }))
      })
    })

    describe('utilities', () => {
      it('isLocalhost should return boolean', () => {
        expect(typeof Api.isLocalhost()).toBe('boolean')
      })

      it('getStatus should return an ApiStatus instance', () => {
        const status = Api.getStatus()
        expect(status).toBeInstanceOf(ApiStatus)
      })

      it('getResponse should return an ApiResponse instance', () => {
        const response = Api.getResponse()
        expect(response).toBeInstanceOf(ApiResponse)
      })

      it('getHydration should return an ApiHydration instance', () => {
        const hydration = Api.getHydration()
        expect(hydration).toBeInstanceOf(ApiHydration)
      })

      it('getHydrationScript should return string', () => {
        const script = Api.getHydrationScript()
        expect(typeof script).toBe('string')
        expect(script).toContain('<script')
      })

      it('setTimeout should correctly delegate', () => {
        // We can't easily check internal protected state without a spy on the instance
        // but we can check if it doesn't throw and return void
        const result = Api.setTimeout(5000)
        expect(result).toBeUndefined()
      })
    })
  })

  // ─────────────────────────────────────────────
  // URL Generation
  // ─────────────────────────────────────────────

  describe('getUrl', () => {
    it('should return a path with API prefix by default', () => {
      Api.setUrl('/api/')
      const url = Api.getUrl('users')
      expect(url).toBe('/api/users')
    })

    it('should return path without API prefix when api is false', () => {
      const url = Api.getUrl('/custom/path', false)
      expect(url).toBe('/custom/path')
    })

    it('should replace {locale} placeholder', () => {
      const url = Api.getUrl('data/{locale}/info')
      expect(url).toMatch(/data\/\w{2}-\w{2}\/info/)
    })

    it('should replace {country} placeholder', () => {
      const url = Api.getUrl('data/{country}/info')
      expect(url).toMatch(/data\/\w{2}\/info/)
    })

    it('should replace {language} placeholder', () => {
      const url = Api.getUrl('data/{language}/info')
      expect(url).toMatch(/data\/\w{2}\/info/)
    })
  })

  // ─────────────────────────────────────────────
  // Body Processing
  // ─────────────────────────────────────────────

  describe('getBody', () => {
    it('should return undefined for GET method', () => {
      const body = Api.getBody({ key: 'value' }, ApiMethodItem.get)
      expect(body).toBeUndefined()
    })

    it('should return JSON string for POST method with an object', () => {
      const body = Api.getBody({ key: 'value' }, ApiMethodItem.post)
      expect(body).toBe('{"key":"value"}')
    })

    it('should return FormData as is', () => {
      const formData = new FormData()
      formData.append('key', 'value')

      const body = Api.getBody(formData, ApiMethodItem.post)
      expect(body).toBe(formData)
    })

    it('should return string as is for POST method', () => {
      const body = Api.getBody('custom-string', ApiMethodItem.post)
      expect(body).toBe('custom-string')
    })

    it('should return undefined for empty request', () => {
      const body = Api.getBody({}, ApiMethodItem.post)
      expect(body).toBeUndefined()
    })

    it('should return undefined when called with no arguments', () => {
      const body = Api.getBody()
      expect(body).toBeUndefined()
    })
  })

  describe('getBodyForGet', () => {
    it('should return the query string for GET method', () => {
      const body = Api.getBodyForGet({ key: 'value', id: 123 }, '/path', ApiMethodItem.get)

      expect(body).toContain('?')
      expect(body).toContain('key=value')
      expect(body).toContain('id=123')
    })

    it('should use & when path already has a query string', () => {
      const body = Api.getBodyForGet({ key: 'value' }, '/path?existing=param', ApiMethodItem.get)
      expect(body).toMatch(/^&/)
    })

    it('should return empty string for non-GET methods', () => {
      const body = Api.getBodyForGet({ key: 'value' }, '/path', ApiMethodItem.post)
      expect(body).toBe('')
    })

    it('should return empty string for empty request', () => {
      const body = Api.getBodyForGet({}, '/path', ApiMethodItem.get)
      expect(body).toBe('')
    })
  })

  // ─────────────────────────────────────────────
  // Configuration
  // ─────────────────────────────────────────────

  describe('setConfig', () => {
    it('should apply urlRoot from config', async () => {
      Api.setConfig({ urlRoot: '/v2/', end: vi.fn().mockResolvedValue({}) })
      await Api.get({ path: 'test' })

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/v2/test'),
        expect.any(Object)
      )
    })

    it('should apply headers from config', async () => {
      Api.setConfig({ headers: { 'X-Config': 'header-value' }, end: vi.fn().mockResolvedValue({}) })
      await Api.get({ path: 'test' })

      const headers = mockFetch.mock.calls[0][1].headers
      expect(headers).toMatchObject({ 'X-Config': 'header-value' })
    })

    it('should apply requestDefault from config', async () => {
      Api.setConfig({ requestDefault: { configKey: 'configVal' }, end: vi.fn().mockResolvedValue({}) })
      await Api.post({ path: 'test', request: { extra: 'data' } })

      const body = JSON.parse(mockFetch.mock.calls[0][1].body)
      expect(body).toMatchObject({
        configKey: 'configVal',
        extra: 'data'
      })
    })

    it('should apply preparation from config', async () => {
      const prep = vi.fn().mockResolvedValue(undefined)
      Api.setConfig({ preparation: prep, end: vi.fn().mockResolvedValue({}) })
      await Api.get({ path: 'test' })

      expect(prep).toHaveBeenCalled()
    })

    it('should apply end from config', async () => {
      const end = vi.fn().mockResolvedValue({})
      Api.setConfig({ end })
      await Api.get({ path: 'test' })

      expect(end).toHaveBeenCalled()
    })

    it('should apply timeout from config', () => {
      const getItemSpy = vi.spyOn(Api, 'getItem')
      const setTimeoutSpy = vi.fn()
      getItemSpy.mockReturnValue({ setTimeout: setTimeoutSpy } as any)

      Api.setConfig({ timeout: 5000 })
      expect(setTimeoutSpy).toHaveBeenCalledWith(5000)

      getItemSpy.mockRestore()
    })

    it('should apply all config fields together', async () => {
      const prep = vi.fn().mockResolvedValue(undefined)
      const end = vi.fn().mockResolvedValue({})

      Api.setConfig({
        urlRoot: '/combined/',
        headers: { 'X-Combined': 'yes' },
        requestDefault: { combined: true },
        preparation: prep,
        end
      })

      await Api.post({ path: 'test', request: { data: 'value' } })

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/combined/test'),
        expect.any(Object)
      )

      const headers = mockFetch.mock.calls[0][1].headers
      expect(headers).toMatchObject({ 'X-Combined': 'yes' })

      const body = JSON.parse(mockFetch.mock.calls[0][1].body)
      expect(body).toMatchObject({ combined: true, data: 'value' })

      expect(prep).toHaveBeenCalled()
      expect(end).toHaveBeenCalled()
    })

    it('should return undefined (not chainable)', () => {
      const result = Api.setConfig({ end: vi.fn().mockResolvedValue({}) })
      expect(result).toBeUndefined()
    })

    it('should handle undefined config gracefully', () => {
      expect(() => Api.setConfig(undefined)).not.toThrow()
    })

    it('should ignore non-object config values', () => {
      // @ts-expect-error: Testing invalid input
      expect(() => Api.setConfig('invalid')).not.toThrow()
      // @ts-expect-error: Testing invalid input
      expect(() => Api.setConfig(123)).not.toThrow()
    })
  })

  // ─────────────────────────────────────────────
  // Lifecycle Delegation
  // ─────────────────────────────────────────────

  describe('lifecycle delegation', () => {
    it('setPreparation should call the internal callback', async () => {
      const prep = vi.fn().mockResolvedValue(undefined)
      Api.setPreparation(prep)
      await Api.get({ path: 'test' })
      expect(prep).toHaveBeenCalled()
    })

    it('setPreparation should return void', () => {
      const result = Api.setPreparation(vi.fn().mockResolvedValue(undefined))
      expect(result).toBeUndefined()
    })

    it('setEnd should call the internal callback', async () => {
      const end = vi.fn().mockResolvedValue({})
      Api.setEnd(end)
      await Api.get({ path: 'test' })
      expect(end).toHaveBeenCalled()
    })

    it('setEnd should return void', () => {
      const result = Api.setEnd(vi.fn().mockResolvedValue({}))
      expect(result).toBeUndefined()
    })
  })
})
