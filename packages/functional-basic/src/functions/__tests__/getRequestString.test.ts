import { describe, expect, it } from 'vitest'
import { getRequestString } from '../getRequestString'

describe('getRequestString', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should transform a flat object into a query string sorted alphabetically', () => {
      const data = { search: 'apple', page: 2 }
      expect(getRequestString(data)).toBe('page=2&search=apple')
    })

    it('should properly URI-encode keys and values', () => {
      const data = { 'full name': 'John Doe', 'expr+': 'a+b=c' }
      expect(getRequestString(data)).toBe('expr%2B=a%2Bb%3Dc&full%20name=John%20Doe')
    })

    it('should trim whitespace from keys before encoding', () => {
      const data = { ' admin ': 'true', '\tuser\t': '123' }
      expect(getRequestString(data)).toBe('admin=true&user=123')
    })

    it('should support custom sign and separator delimiters', () => {
      const data = { a: 1, b: 2 }
      expect(getRequestString(data, ':', ';')).toBe('a:1;b:2')
      expect(getRequestString(data, '->', '|')).toBe('a->1|b->2')
    })
  })

  describe('Nested structures and complex types', () => {
    it('should handle nested objects using PHP-style bracket notation', () => {
      const data = {
        user: {
          id: 1,
          name: 'admin'
        }
      }
      expect(getRequestString(data)).toBe('user[id]=1&user[name]=admin')
    })

    it('should handle deeply nested objects with 3+ levels', () => {
      const data = {
        level1: {
          level2: {
            level3: {
              target: 'value'
            }
          }
        }
      }
      expect(getRequestString(data)).toBe('level1[level2][level3][target]=value')
    })

    it('should handle nested arrays using empty bracket notation', () => {
      const data = {
        tags: ['blue', 'red']
      }
      expect(getRequestString(data)).toBe('tags[]=blue&tags[]=red')
    })

    it('should handle arrays of objects with empty brackets and nested keys', () => {
      const data = {
        users: [
          { id: 1 },
          { id: 2 }
        ]
      }
      expect(getRequestString(data)).toBe('users[][id]=1&users[][id]=2')
    })

    it('should handle deeply nested structures combining objects and arrays', () => {
      const data = {
        a: {
          b: [
            { c: 1 }
          ]
        }
      }
      expect(getRequestString(data)).toBe('a[b][][c]=1')
    })

    it('should handle an array passed as the root request object', () => {
      const data = ['first', 'second']
      expect(getRequestString(data)).toBe('0=first&1=second')
    })

    it('should handle an array of objects passed as the root request', () => {
      const data = [{ id: 10 }, { id: 20 }]
      expect(getRequestString(data)).toBe('0[id]=10&1[id]=20')
    })

    it('should respect the subKey parameter when passed explicitly', () => {
      const data = { a: 1, b: 2 }
      expect(getRequestString(data, '=', '&', 'filter')).toBe('filter[a]=1&filter[b]=2')

      const arrayData = ['alpha', 'beta']
      expect(getRequestString(arrayData, '=', '&', 'items')).toBe('items[]=alpha&items[]=beta')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return an empty string for an empty object or array', () => {
      expect(getRequestString({})).toBe('')
      expect(getRequestString([])).toBe('')
    })

    it('should safely return an empty string for non-object inputs', () => {
      expect(getRequestString(null as unknown as Record<string, unknown>)).toBe('')
      expect(getRequestString(undefined as unknown as Record<string, unknown>)).toBe('')
      expect(getRequestString(123 as unknown as Record<string, unknown>)).toBe('')
      expect(getRequestString('some-string' as unknown as Record<string, unknown>)).toBe('')
      expect(getRequestString(true as unknown as Record<string, unknown>)).toBe('')
      expect(getRequestString(false as unknown as Record<string, unknown>)).toBe('')
    })

    it('should skip keys that are empty or whitespace-only after trim', () => {
      const data = {
        '': 'emptyKey',
        '   ': 'spacesOnly',
        '\t\n': 'whitespaceOnly',
        'valid': 'ok'
      }
      expect(getRequestString(data)).toBe('valid=ok')
    })

    it('should not produce dangling separators for empty nested objects or arrays', () => {
      expect(getRequestString({ a: 1, b: {} })).toBe('a=1')
      expect(getRequestString({ a: 1, b: [] })).toBe('a=1')
      expect(getRequestString({ a: {}, b: {} })).toBe('')
      expect(getRequestString({ user: { profile: {}, tags: [] }, active: true })).toBe('active=true')
    })

    it('should convert null and undefined values into empty strings without omitting keys', () => {
      const data = {
        a: null,
        b: undefined
      }
      expect(getRequestString(data)).toBe('a=&b=')
    })
  })

  describe('Data types and value coercion', () => {
    it('should handle boolean values correctly (true and false as strings)', () => {
      const data = {
        active: true,
        disabled: false
      }
      expect(getRequestString(data)).toBe('active=true&disabled=false')
    })

    it('should handle numeric values correctly including zero, negatives, and floats', () => {
      const data = {
        count: 0,
        negative: -42,
        price: 10.5,
        scientific: 1e4
      }
      expect(getRequestString(data)).toBe('count=0&negative=-42&price=10.5&scientific=10000')
    })

    it('should handle special numeric values (NaN and Infinity)', () => {
      const data = {
        invalid: NaN,
        infinite: Infinity
      }
      expect(getRequestString(data)).toBe('infinite=Infinity&invalid=NaN')
    })

    it('should handle diverse data types within arrays', () => {
      const data = {
        list: [1, 'two', false, null, 0]
      }
      expect(getRequestString(data)).toBe('list[]=&list[]=0&list[]=1&list[]=false&list[]=two')
    })

    it('should ignore objects with no enumerable properties (like new Date or empty class)', () => {
      const date = new Date('2026-01-01T00:00:00.000Z')
      const data = { date, id: 1 }
      expect(getRequestString(data)).toBe('id=1')
    })
  })

  describe('Special characters, URI encoding, and security', () => {
    it('should handle keys with special characters and existing brackets', () => {
      const data = {
        'tags[]': [1, 2]
      }
      expect(getRequestString(data)).toBe('tags%5B%5D[]=1&tags%5B%5D[]=2')
    })

    it('should encode URL-reserved characters in values (&, =, ?, #, /, +)', () => {
      const data = {
        query: 'search&filter=all?test#hash+more/slash'
      }
      expect(getRequestString(data)).toBe(
        'query=search%26filter%3Dall%3Ftest%23hash%2Bmore%2Fslash'
      )
    })

    it('should properly encode HTML and XSS payloads in keys and values', () => {
      const data = {
        '<script>': '<script>alert("XSS")</script>'
      }
      expect(getRequestString(data)).toBe(
        '%3Cscript%3E=%3Cscript%3Ealert(%22XSS%22)%3C%2Fscript%3E'
      )
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should properly URI-encode Cyrillic keys and values', () => {
      const data = {
        город: 'Москва',
        страна: 'Россия'
      }
      expect(getRequestString(data)).toBe(
        '%D0%B3%D0%BE%D1%80%D0%BE%D0%B4=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B0=%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F'
      )
    })

    it('should properly URI-encode Vietnamese characters with diacritics', () => {
      const data = {
        'địa chỉ': 'Hà Nội'
      }
      expect(getRequestString(data)).toBe(
        '%C4%91%E1%BB%8Ba%20ch%E1%BB%89=H%C3%A0%20N%E1%BB%99i'
      )
    })

    it('should properly URI-encode CJK characters and emojis', () => {
      const data = {
        名前: '田中',
        emoji: '🔥🚀'
      }
      expect(getRequestString(data)).toBe(
        '%E5%90%8D%E5%89%8D=%E7%94%B0%E4%B8%AD&emoji=%F0%9F%94%A5%F0%9F%9A%80'
      )
    })
  })

  describe('Sorting and determinism', () => {
    it('should sort query parameters alphabetically by the final formatted string', () => {
      const data = { z: 1, a: 10, b: { c: 2 } }
      expect(getRequestString(data)).toBe('a=10&b[c]=2&z=1')
    })

    it('should produce identical output over multiple successive invocations', () => {
      const data = { search: 'test', page: 1, filter: { status: 'active', tags: ['a', 'b'] } }
      const firstRun = getRequestString(data)

      for (let index = 0; index < 5; index++) {
        expect(getRequestString(data)).toBe(firstRun)
      }
    })
  })
})
