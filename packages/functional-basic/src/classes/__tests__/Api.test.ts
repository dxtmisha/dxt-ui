/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { Api } from '../Api'
import { ApiMethodItem } from '../../types/apiTypes'

// Mock fetch globally
const mockFetch = vi.fn()
globalThis.fetch = mockFetch

// Mock console.error to avoid cluttering test output
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {
})

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
  })

  describe('static method delegation', () => {
    it('setUrl should correctly update and affect requests', async () => {
      Api.setUrl('/custom-api/')
      await Api.get({ path: 'test' })

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/custom-api/test'),
        expect.any(Object)
      )
    })

    it('setHeaders should correctly include headers in requests', async () => {
      Api.setHeaders({ 'X-Test': 'value' })
      await Api.get({ path: 'test' })

      const headers = mockFetch.mock.calls[0][1].headers
      expect(headers).toMatchObject({ 'X-Test': 'value' })
    })

    it('setRequestDefault should merge data into request body', async () => {
      Api.setRequestDefault({ defaultKey: 'defaultValue' })
      await Api.post({ path: 'test', request: { customKey: 'customValue' } })

      const body = JSON.parse(mockFetch.mock.calls[0][1].body)
      expect(body).toMatchObject({
        defaultKey: 'defaultValue',
        customKey: 'customValue'
      })
    })

    it('request should correctly delegate and return data', async () => {
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

    it('get/post/put/delete should use correct HTTP methods', async () => {
      await Api.get({ path: 'test' })
      expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.get }))

      await Api.post({ path: 'test' })
      expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.post }))

      await Api.put({ path: 'test' })
      expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.put }))

      await Api.delete({ path: 'test' })
      expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.delete }))
    })

    it('isLocalhost should return boolean', () => {
      expect(typeof Api.isLocalhost()).toBe('boolean')
    })

    it('getStatus should return an ApiStatus instance', () => {
      const status = Api.getStatus()
      expect(status).toBeDefined()
      expect(typeof status.getStatus).toBe('function')
    })

    it('getResponse should return an ApiResponse instance', () => {
      const response = Api.getResponse()
      expect(response).toBeDefined()
      expect(typeof response.emulator).toBe('function')
    })
  })

  describe('lifecycle delegation', () => {
    it('setPreparation should call the internal callback', async () => {
      const prep = vi.fn().mockResolvedValue(undefined)
      Api.setPreparation(prep)
      await Api.get({ path: 'test' })
      expect(prep).toHaveBeenCalled()
    })

    it('setEnd should call the internal callback', async () => {
      const end = vi.fn().mockResolvedValue({})
      Api.setEnd(end)
      await Api.get({ path: 'test' })
      expect(end).toHaveBeenCalled()
    })
  })
})
