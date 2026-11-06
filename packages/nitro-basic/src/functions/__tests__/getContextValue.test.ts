import { afterEach, describe, expect, it } from 'vitest'
import { appContext } from '../initContext'
import { getContextValue } from '../getContextValue'

describe('getContextValue', () => {
  afterEach(() => {
    appContext.unset()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should retrieve string, object, and Headers values by key from active context', () => {
      const headers = new Headers({ 'content-type': 'text/html;charset=UTF-8' })
      const storage = { user: 'Alice' }
      const id = { code: 10000 }

      appContext.call(
        {
          cookie: 'theme=dark',
          headers,
          storage,
          id
        },
        () => {
          expect(getContextValue<string>('cookie')).toBe('theme=dark')
          expect(getContextValue<Headers>('headers')).toBe(headers)
          expect(getContextValue<{ user: string }>('storage')).toBe(storage)
          expect(getContextValue<{ code: number }>('id')).toEqual({ code: 10000 })
        }
      )
    })

    it('should return undefined when key does not exist in active context', () => {
      appContext.call({ existingKey: 'value' }, () => {
        expect(getContextValue('missingKey')).toBeUndefined()
      })
    })
  })

  describe('Inactive context and nullish boundaries', () => {
    it('should return undefined when no appContext is active', () => {
      expect(getContextValue('headers')).toBeUndefined()
      expect(getContextValue('cookie')).toBeUndefined()
      expect(getContextValue('storage')).toBeUndefined()
    })

    it('should return undefined for empty or whitespace keys when not present', () => {
      appContext.call({ a: 1 }, () => {
        expect(getContextValue('')).toBeUndefined()
        expect(getContextValue('   ')).toBeUndefined()
      })
    })

    it('should retrieve value for empty string key if explicitly defined in context', () => {
      appContext.call({ '': 'empty-key-value' }, () => {
        expect(getContextValue<string>('')).toBe('empty-key-value')
      })
    })
  })

  describe('Falsy, numeric, boolean, and special data types', () => {
    it('should accurately return falsy values (0, false, empty string, null, NaN)', () => {
      appContext.call(
        {
          zero: 0,
          negative: -42,
          boolFalse: false,
          boolTrue: true,
          emptyString: '',
          nullValue: null,
          undefValue: undefined,
          nanValue: Number.NaN,
          emptyArray: [],
          emptyObject: {}
        },
        () => {
          expect(getContextValue<number>('zero')).toBe(0)
          expect(getContextValue<number>('negative')).toBe(-42)
          expect(getContextValue<boolean>('boolFalse')).toBe(false)
          expect(getContextValue<boolean>('boolTrue')).toBe(true)
          expect(getContextValue<string>('emptyString')).toBe('')
          expect(getContextValue<null>('nullValue')).toBeNull()
          expect(getContextValue<undefined>('undefValue')).toBeUndefined()
          expect(Number.isNaN(getContextValue<number>('nanValue'))).toBe(true)
          expect(getContextValue<unknown[]>('emptyArray')).toEqual([])
          expect(getContextValue<Record<string, unknown>>('emptyObject')).toEqual({})
        }
      )
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle Cyrillic, Vietnamese, CJK, and emoji keys and values', () => {
      appContext.call(
        {
          'ключ': 'Привет Мир',
          'khóa': 'Xin chào Việt Nam',
          '键': '你好世界',
          '🚀': '🔥✨'
        },
        () => {
          expect(getContextValue<string>('ключ')).toBe('Привет Мир')
          expect(getContextValue<string>('khóa')).toBe('Xin chào Việt Nam')
          expect(getContextValue<string>('键')).toBe('你好世界')
          expect(getContextValue<string>('🚀')).toBe('🔥✨')
        }
      )
    })
  })

  describe('Statefulness, async persistence, and SSR request isolation', () => {
    it('should isolate values across concurrent async SSR executions', async () => {
      const task = async (userKey: string, delay: number) => {
        return await appContext.call({ cookie: `session=${userKey}` }, async () => {
          await new Promise(resolve => setTimeout(resolve, delay))
          return getContextValue<string>('cookie')
        })
      }

      const results = await Promise.all([
        task('alpha', 20),
        task('beta', 5),
        task('gamma', 12)
      ])

      expect(results).toEqual([
        'session=alpha',
        'session=beta',
        'session=gamma'
      ])
      expect(getContextValue('cookie')).toBeUndefined()
    })
  })
})
