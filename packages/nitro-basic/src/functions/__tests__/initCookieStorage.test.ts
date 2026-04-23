import { describe, it, expect, vi, beforeEach } from 'vitest'
import { initCookieStorage } from '../initCookieStorage'
import { CookieStorage } from '@dxtmisha/functional-basic'
import * as h3 from 'h3'

vi.mock('h3', () => ({
  getCookie: vi.fn(),
  setCookie: vi.fn()
}))

describe('initCookieStorage', () => {
  const mockEvent = {} as any

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize CookieStorage with get and set listeners', () => {
    initCookieStorage(mockEvent)

    // Check if init was called by verifying if listeners are set in CookieStorage
    const internal = CookieStorage as any
    expect(internal.getListener).toBeDefined()
    expect(internal.setListener).toBeDefined()
  })

  it('should call h3 getCookie when getListener is invoked', () => {
    initCookieStorage(mockEvent)
    const getListener = (CookieStorage as any).getListener

    vi.mocked(h3.getCookie).mockReturnValue('test-value')

    const result = getListener('test-key')

    expect(h3.getCookie).toHaveBeenCalledWith(mockEvent, 'test-key')
    expect(result).toBe('test-value')
  })

  it('should call h3 setCookie with default options when setListener is invoked', () => {
    initCookieStorage(mockEvent)
    const setListener = (CookieStorage as any).setListener

    setListener('test-key', 'test-value')

    expect(h3.setCookie).toHaveBeenCalledWith(
      mockEvent,
      'test-key',
      'test-value',
      {
        maxAge: 7 * 24 * 60 * 60,
        sameSite: 'strict'
      }
    )
  })

  it('should override default options with provided options in setListener', () => {
    initCookieStorage(mockEvent, 3600, 'lax')
    const setListener = (CookieStorage as any).setListener

    setListener('test-key', 'test-value', { age: 500, sameSite: 'strict' })

    expect(h3.setCookie).toHaveBeenCalledWith(
      mockEvent,
      'test-key',
      'test-value',
      {
        maxAge: 500,
        sameSite: 'strict'
      }
    )
  })

  it('should merge additional arguments in setListener', () => {
    initCookieStorage(mockEvent)
    const setListener = (CookieStorage as any).setListener

    setListener('test-key', 'test-value', { arguments: { httpOnly: true, secure: true } } as any)

    expect(h3.setCookie).toHaveBeenCalledWith(
      mockEvent,
      'test-key',
      'test-value',
      expect.objectContaining({
        httpOnly: true,
        secure: true
      })
    )
  })
})
