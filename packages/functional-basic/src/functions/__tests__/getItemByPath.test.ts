import { describe, it, expect } from 'vitest'
import { getItemByPath } from '../getItemByPath'

describe('getItemByPath', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should retrieve a top-level property', () => {
      const sourceObject = { attribute: 'value1' }
      expect(getItemByPath(sourceObject, 'attribute')).toBe('value1')
    })

    it('should retrieve a nested property using dot notation', () => {
      const sourceObject = { nested: { deep: { id: '777' } } }
      expect(getItemByPath(sourceObject, 'nested.deep.id')).toBe('777')
    })

    it('should work with arrays implicitly via string indexes', () => {
      const sourceObject = { list: [{ name: 'first' }, { name: 'second' }] }
      expect(getItemByPath(sourceObject, 'list.1.name')).toBe('second')
      expect(getItemByPath(sourceObject, 'list.0.name')).toBe('first')
    })

    it('should retrieve a top-level property with key "0" (zeroTrue in isFilled)', () => {
      const sourceObject = { 0: 'zero-indexed-item' }
      expect(getItemByPath(sourceObject, '0')).toBe('zero-indexed-item')
    })

    it('should retrieve complex nested structures and objects', () => {
      const sourceObject = {
        app: {
          config: {
            auth: {
              roles: ['admin', 'user'],
              settings: { active: true }
            }
          }
        }
      }
      expect(getItemByPath(sourceObject, 'app.config.auth.settings.active')).toBe(true)
      expect(getItemByPath(sourceObject, 'app.config.auth.roles.0')).toBe('admin')
      expect(getItemByPath(sourceObject, 'app.config.auth.roles.1')).toBe('user')
    })
  })

  describe('Boundary values and non-existent path handling', () => {
    it('should return undefined if top-level property does not exist', () => {
      const sourceObject = { valid: 'yes' }
      expect(getItemByPath(sourceObject, 'invalid')).toBeUndefined()
    })

    it('should return undefined if deeply nested property is not found', () => {
      const sourceObject = { level1: { level2: 'exists' } }
      expect(getItemByPath(sourceObject, 'level1.levelX.level3')).toBeUndefined()
    })

    it('should return undefined when intermediate segment is a primitive string', () => {
      const sourceObject = { user: { address: 'New York' } }
      expect(getItemByPath(sourceObject, 'user.address.street')).toBeUndefined()
      expect(getItemByPath(sourceObject, 'user.address.street.number')).toBeUndefined()
    })

    it('should return undefined when intermediate segment is null', () => {
      const sourceObject = { item: { meta: null } }
      expect(getItemByPath(sourceObject, 'item.meta.title')).toBeUndefined()
    })

    it('should return undefined when intermediate segment is a numeric primitive (0, negative, float)', () => {
      const sourceObject = { item: { count: 0, score: -10, pi: 3.14 } }
      expect(getItemByPath(sourceObject, 'item.count.nested')).toBeUndefined()
      expect(getItemByPath(sourceObject, 'item.score.value')).toBeUndefined()
      expect(getItemByPath(sourceObject, 'item.pi.precision')).toBeUndefined()
    })

    it('should return undefined when intermediate segment is a boolean primitive', () => {
      const sourceObject = { item: { active: false, enabled: true } }
      expect(getItemByPath(sourceObject, 'item.active.flag')).toBeUndefined()
      expect(getItemByPath(sourceObject, 'item.enabled.flag')).toBeUndefined()
    })

    it('should return undefined for array index out of bounds', () => {
      const sourceObject = { list: ['a', 'b'] }
      expect(getItemByPath(sourceObject, 'list.5')).toBeUndefined()
      expect(getItemByPath(sourceObject, 'list.5.sub')).toBeUndefined()
    })

    it('should handle empty and malformed dot paths gracefully', () => {
      const sourceObject = { key: 'value', list: { name: 'first' } }
      expect(getItemByPath(sourceObject, '')).toBeUndefined()
      expect(getItemByPath(sourceObject, '.list.name')).toBeUndefined()
      expect(getItemByPath(sourceObject, 'list.test')).toBeUndefined()
    })

    it('should safely return undefined when item is null or undefined at runtime', () => {
      expect(getItemByPath(null as unknown as Record<string, unknown>, 'a.b')).toBeUndefined()
      expect(getItemByPath(undefined as unknown as Record<string, unknown>, 'a')).toBeUndefined()
    })
  })

  describe('Falsy and special values at leaf position', () => {
    it('should return numeric 0 at leaf position correctly', () => {
      const sourceObject = { data: { count: 0 } }
      expect(getItemByPath(sourceObject, 'data.count')).toBe(0)
    })

    it('should return boolean false at leaf position correctly', () => {
      const sourceObject = { data: { active: false } }
      expect(getItemByPath(sourceObject, 'data.active')).toBe(false)
    })

    it('should return empty string at leaf position correctly', () => {
      const sourceObject = { data: { label: '' } }
      expect(getItemByPath(sourceObject, 'data.label')).toBe('')
    })

    it('should return null at leaf position correctly', () => {
      const sourceObject = { data: { value: null } }
      expect(getItemByPath(sourceObject, 'data.value')).toBeNull()
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Cyrillic property names and values', () => {
      const sourceObject = { пользователь: { профиль: { имя: 'Иван' } } }
      expect(getItemByPath(sourceObject, 'пользователь.профиль.имя')).toBe('Иван')
    })

    it('should support Vietnamese property names and values', () => {
      const sourceObject = { ngườiDùng: { địaChỉ: { thànhPhố: 'Đà Nẵng' } } }
      expect(getItemByPath(sourceObject, 'ngườiDùng.địaChỉ.thànhPhố')).toBe('Đà Nẵng')
    })

    it('should support CJK property names and values', () => {
      const sourceObject = { ユーザー: { プロファイル: { 名前: '太郎' } } }
      expect(getItemByPath(sourceObject, 'ユーザー.プロファイル.名前')).toBe('太郎')
    })

    it('should support Emoji property values', () => {
      const sourceObject = { status: { icon: '🚀' } }
      expect(getItemByPath(sourceObject, 'status.icon')).toBe('🚀')
    })
  })

  describe('Statefulness and immutability', () => {
    it('should not mutate the input object', () => {
      const sourceObject = { nested: { key: 'original' } }
      getItemByPath(sourceObject, 'nested.key')
      expect(sourceObject).toEqual({ nested: { key: 'original' } })
    })
  })
})
