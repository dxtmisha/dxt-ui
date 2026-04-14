import { describe, it, expect } from 'vitest'
import { getRequestString } from '../getRequestString'

describe('getRequestString', () => {
  describe('Basic Functionality', () => {
    it('should transform a flat object into a query string', () => {
      const data = { search: 'apple', page: 2 }
      expect(getRequestString(data)).toBe('page=2&search=apple')
    })

    it('should URI encode keys and values?', () => {
      const data = { 'full name': 'John Doe', 'expr+': 'a+b=c' }
      expect(getRequestString(data)).toBe('expr%2B=a%2Bb%3Dc&full%20name=John%20Doe')
    })

    it('should trim keys before encoding', () => {
      const data = { ' admin ': 'true' }
      expect(getRequestString(data)).toBe('admin=true')
    })

    it('should return an empty string for an empty object', () => {
      expect(getRequestString({})).toBe('')
    })

    it('should allow custom delimiters (sign and separator)', () => {
      const data = { a: 1, b: 2 }
      // Using ':' instead of '=' and ';' instead of '&'
      expect(getRequestString(data, ':', ';')).toBe('a:1;b:2')
    })
  })

  describe('Nested Structures', () => {
    it('should handle nested objects using PHP-style brackets', () => {
      const data = {
        user: {
          id: 1,
          name: 'admin'
        }
      }
      expect(getRequestString(data)).toBe('user[id]=1&user[name]=admin')
    })

    it('should handle nested arrays', () => {
      const data = {
        tags: ['red', 'blue']
      }
      expect(getRequestString(data)).toBe('tags[]=blue&tags[]=red')
    })

    it('should handle arrays of objects', () => {
      const data = {
        users: [
          { id: 1 },
          { id: 2 }
        ]
      }
      expect(getRequestString(data)).toBe('users[][id]=1&users[][id]=2')
    })

    it('should handle deeply nested structures', () => {
      const data = {
        a: {
          b: [
            { c: 1 }
          ]
        }
      }
      expect(getRequestString(data)).toBe('a[b][][c]=1')
    })
  })

  describe('Data Types', () => {
    it('should handle booleans and numbers correctly', () => {
      const data = {
        active: true,
        count: 0,
        price: 10.5
      }
      expect(getRequestString(data)).toBe('active=true&count=0&price=10.5')
    })

    it('should convert null and undefined to empty strings', () => {
      // Based on toString implementation: String(value ?? '')
      const data = {
        a: null,
        b: undefined
      }
      expect(getRequestString(data)).toBe('a=&b=')
    })

    it('should handle various types in arrays', () => {
      const data = {
        list: [1, 'two', false, null]
      }
      expect(getRequestString(data)).toBe('list[]=&list[]=1&list[]=false&list[]=two')
    })
  })

  describe('Edge Cases', () => {
    it('should skip items with empty keys (after trim)', () => {
      const data = {
        ' ': 'skipped',
        'valid': 'ok'
      }
      expect(getRequestString(data)).toBe('valid=ok')
    })

    it('should sort results alphabetically by the final key-value string', () => {
      const data = { z: 1, a: 10, b: { c: 2 } }
      // a=10, b[c]=2, z=1
      expect(getRequestString(data)).toBe('a=10&b[c]=2&z=1')
    })

    it('should handle special characters in complex keys', () => {
      const data = {
        'tags[]': [1, 2]
      }
      // tags%5B%5D[]=1&tags%5B%5D[]=2
      expect(getRequestString(data)).toBe('tags%5B%5D[]=1&tags%5B%5D[]=2')
    })
  })
})
