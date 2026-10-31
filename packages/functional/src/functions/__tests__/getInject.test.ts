/**
 * @vitest-environment jsdom
 */

import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, ref, type InjectionKey } from 'vue'

import { getInject } from '../getInject'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('getInject', () => {
  describe('Provided values', () => {
    it.each([
      { label: 'false', value: false },
      { label: 'zero', value: 0 },
      { label: 'negative zero', value: -0 },
      { label: 'empty string', value: '' },
      { label: 'NaN', value: NaN },
      { label: 'true', value: true },
      { label: 'nonzero number', value: 42 },
      { label: 'nonempty string', value: 'value' }
    ])('preserves the provided $label', ({ value }) => {
      const application = createApp({})
      application.provide('value', value)

      expect(application.runWithContext(() => getInject<typeof value>('value'))).toBe(value)
    })

    it.each([
      { label: 'null', value: null },
      { label: 'undefined', value: undefined }
    ])('returns undefined for $label', ({ value }) => {
      const application = createApp({})
      application.provide('value', value)

      expect(application.runWithContext(() => getInject<typeof value>('value'))).toBeUndefined()
    })

    it('preserves the identity and reactivity of a provided ref', () => {
      const application = createApp({})
      const provided = ref(0)
      application.provide('state', provided)
      const received = application.runWithContext(() => getInject<typeof provided>('state'))

      expect(received).toBe(provided)
      provided.value = 2
      expect(received?.value).toBe(2)
    })

    it.each([{}, []])('preserves an empty container by identity: %j', (provided) => {
      const application = createApp({})
      application.provide('container', provided)

      expect(application.runWithContext(() => getInject('container'))).toBe(provided)
    })

    it.each(['', 'ключ', 'tiếng Việt', '項目', '🚀'])('supports the exact injection key "%s"', (key) => {
      const application = createApp({})
      application.provide(key, 'provided')

      expect(application.runWithContext(() => getInject<string>(key))).toBe('provided')
    })

    it('keeps an empty cookie string from activating a nullish fallback', () => {
      const application = createApp({})
      const fallback = vi.fn(() => 'fallback=1')
      application.provide('cookie', '')

      const received = application.runWithContext(() => getInject<string>('cookie') ?? fallback())

      expect(received).toBe('')
      expect(fallback).not.toHaveBeenCalled()
    })
  })

  describe('Injection contexts', () => {
    it('returns undefined outside an injection context without warning', () => {
      const warning = vi.spyOn(console, 'warn')

      expect(getInject('missing')).toBeUndefined()
      expect(warning).not.toHaveBeenCalled()
    })

    it('keeps the Vue warning for a missing key inside an injection context', () => {
      const warning = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const application = createApp({})

      expect(application.runWithContext(() => getInject('missing'))).toBeUndefined()
      expect(warning).toHaveBeenCalledTimes(1)
      expect(warning.mock.calls[0]?.[0]).toContain('injection "missing" not found')
    })

    it('reads a provided object during component setup', () => {
      const provided = { storage: {} }
      let received: typeof provided | undefined
      const application = createApp({
        setup(): () => null {
          received = getInject<typeof provided>('storage')
          return () => null
        }
      })
      application.provide('storage', provided)

      try {
        application.mount(document.createElement('div'))
        expect(received).toBe(provided)
      } finally {
        application.unmount()
      }
    })

    it('restores the outer injection context after reading a nested application context', () => {
      const outer = createApp({})
      const inner = createApp({})
      outer.provide('value', 'outer')
      inner.provide('value', 'inner')

      outer.runWithContext(() => {
        expect(getInject<string>('value')).toBe('outer')
        expect(inner.runWithContext(() => getInject<string>('value'))).toBe('inner')
        expect(getInject<string>('value')).toBe('outer')
      })

      expect(getInject('value')).toBeUndefined()
    })
  })

  describe('Default value fallback', () => {
    it('returns raw defaultValue when key is missing', () => {
      const application = createApp({})
      vi.spyOn(console, 'warn').mockImplementation(() => {})

      const result = application.runWithContext(() => getInject('missing', 'fallback'))
      expect(result).toBe('fallback')
    })

    it('returns factory result when defaultValue is a function', () => {
      const application = createApp({})
      vi.spyOn(console, 'warn').mockImplementation(() => {})
      const factory = vi.fn(() => 42)

      const result = application.runWithContext(() => getInject('count', factory))
      expect(result).toBe(42)
      expect(factory).toHaveBeenCalledTimes(1)
    })

    it('falls back to defaultValue when provided value is null', () => {
      const application = createApp({})
      application.provide('theme', null)

      const result = application.runWithContext(() => getInject('theme', 'dark'))
      expect(result).toBe('dark')
    })

    it('falls back to defaultValue when provided value is undefined', () => {
      const application = createApp({})
      application.provide('theme', undefined)

      const result = application.runWithContext(() => getInject('theme', 'system'))
      expect(result).toBe('system')
    })

    it('prefers the provided value over defaultValue', () => {
      const application = createApp({})
      application.provide('theme', 'light')

      const fallback = vi.fn(() => 'dark')
      const result = application.runWithContext(() => getInject('theme', fallback))

      expect(result).toBe('light')
      expect(fallback).not.toHaveBeenCalled()
    })

    it.each([
      { label: 'zero', value: 0, defaultVal: 100 },
      { label: 'false', value: false, defaultVal: true },
      { label: 'empty string', value: '', defaultVal: 'fallback' },
      { label: 'NaN', value: NaN, defaultVal: 0 }
    ])('preserves falsy provided $label without activating defaultValue', ({ value, defaultVal }) => {
      const application = createApp({})
      application.provide('testKey', value)

      const fallback = vi.fn(() => defaultVal)
      const result = application.runWithContext(() => getInject('testKey', fallback))

      expect(result).toBe(value)
      expect(fallback).not.toHaveBeenCalled()
    })

    it('returns defaultValue outside injection context without warning', () => {
      const warning = vi.spyOn(console, 'warn')

      expect(getInject('outside', 'offline')).toBe('offline')
      expect(getInject('outside-fn', () => 'computed-offline')).toBe('computed-offline')
      expect(warning).not.toHaveBeenCalled()
    })
  })

  describe('InjectionKey support', () => {
    interface SessionInfo {
      id: string
      authenticated: boolean
    }

    const sessionKey: InjectionKey<SessionInfo> = Symbol('session')

    it('infers type correctly from InjectionKey without defaultValue', () => {
      const application = createApp({})
      const mockSession: SessionInfo = { id: 's-123', authenticated: true }
      application.provide(sessionKey, mockSession)

      const received = application.runWithContext(() => getInject(sessionKey))
      expect(received).toEqual(mockSession)
      expect(received?.id).toBe('s-123')
    })

    it('infers non-nullish type from InjectionKey with defaultValue', () => {
      const application = createApp({})
      vi.spyOn(console, 'warn').mockImplementation(() => {})
      const defaultSession: SessionInfo = { id: 'guest', authenticated: false }

      const received = application.runWithContext(() => getInject(sessionKey, defaultSession))
      expect(received).toEqual(defaultSession)
      expect(received.authenticated).toBe(false)
    })
  })
})
