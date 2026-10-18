import { describe, it, expect } from 'vitest'
import { getItemByPath } from '../getItemByPath'

describe('getItemByPath', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should retrieve a top-level property', () => {
      const obj = { attr: 'value1' }
      expect(getItemByPath(obj, 'attr')).toBe('value1')
    })

    it('should retrieve a nested property using dot notation', () => {
      const obj = { nested: { deep: { id: '777' } } }
      expect(getItemByPath(obj, 'nested.deep.id')).toBe('777')
    })

    it('should work with arrays implicitly via string indexes', () => {
      const obj = { list: [{ name: 'first' }, { name: 'second' }] }
      expect(getItemByPath(obj, 'list.1.name')).toBe('second')
      expect(getItemByPath(obj, 'list.0.name')).toBe('first')
    })

    it('should retrieve complex nested structures and objects', () => {
      const obj = {
        app: {
          config: {
            auth: {
              roles: ['admin', 'user'],
              settings: { active: true }
            }
          }
        }
      }
      expect(getItemByPath(obj, 'app.config.auth.settings.active')).toBe(true)
      expect(getItemByPath(obj, 'app.config.auth.roles.0')).toBe('admin')
      expect(getItemByPath(obj, 'app.config.auth.roles.1')).toBe('user')
    })
  })

  describe('Boundary values and non-existent path handling', () => {
    it('should return undefined if top-level property does not exist', () => {
      const obj = { valid: 'yes' }
      expect(getItemByPath(obj, 'invalid')).toBeUndefined()
    })

    it('should return undefined if deeply nested property is not found', () => {
      const obj = { level1: { level2: 'exists' } }
      expect(getItemByPath(obj, 'level1.levelX.level3')).toBeUndefined()
    })

    it('should return undefined when intermediate segment is a primitive string', () => {
      const obj = { user: { address: 'New York' } }
      expect(getItemByPath(obj, 'user.address.street')).toBeUndefined()
      expect(getItemByPath(obj, 'user.address.street.number')).toBeUndefined()
    })

    it('should return undefined when intermediate segment is null', () => {
      const obj = { item: { meta: null } }
      expect(getItemByPath(obj, 'item.meta.title')).toBeUndefined()
    })

    it('should return undefined when intermediate segment is a numeric primitive (0, negative, float)', () => {
      const obj = { item: { count: 0, score: -10, pi: 3.14 } }
      expect(getItemByPath(obj, 'item.count.nested')).toBeUndefined()
      expect(getItemByPath(obj, 'item.score.val')).toBeUndefined()
      expect(getItemByPath(obj, 'item.pi.precision')).toBeUndefined()
    })

    it('should return undefined when intermediate segment is a boolean primitive', () => {
      const obj = { item: { active: false, enabled: true } }
      expect(getItemByPath(obj, 'item.active.flag')).toBeUndefined()
      expect(getItemByPath(obj, 'item.enabled.flag')).toBeUndefined()
    })

    it('should return undefined for array index out of bounds', () => {
      const obj = { list: ['a', 'b'] }
      expect(getItemByPath(obj, 'list.5')).toBeUndefined()
      expect(getItemByPath(obj, 'list.5.sub')).toBeUndefined()
    })

    it('should handle empty paths gracefully', () => {
      const obj = { key: 'val', list: { name: 'first' } }
      expect(getItemByPath(obj, '')).toBeUndefined()
      expect(getItemByPath(obj, 'list.test')).toBeUndefined()
    })
  })

  describe('Falsy and special values at leaf position', () => {
    it('should return numeric 0 at leaf position correctly', () => {
      const obj = { data: { count: 0 } }
      expect(getItemByPath(obj, 'data.count')).toBe(0)
    })

    it('should return boolean false at leaf position correctly', () => {
      const obj = { data: { active: false } }
      expect(getItemByPath(obj, 'data.active')).toBe(false)
    })

    it('should return empty string at leaf position correctly', () => {
      const obj = { data: { label: '' } }
      expect(getItemByPath(obj, 'data.label')).toBe('')
    })

    it('should return null at leaf position correctly', () => {
      const obj = { data: { value: null } }
      expect(getItemByPath(obj, 'data.value')).toBeNull()
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Cyrillic property names and values', () => {
      const obj = { пользователь: { профиль: { имя: 'Иван' } } }
      expect(getItemByPath(obj, 'пользователь.профиль.имя')).toBe('Иван')
    })

    it('should support Vietnamese property names and values', () => {
      const obj = { ngườiDùng: { địaChỉ: { thànhPhố: 'Đà Nẵng' } } }
      expect(getItemByPath(obj, 'ngườiDùng.địaChỉ.thànhPhố')).toBe('Đà Nẵng')
    })

    it('should support CJK property names and values', () => {
      const obj = { ユーザー: { プロファイル: { 名前: '太郎' } } }
      expect(getItemByPath(obj, 'ユーザー.プロファイル.名前')).toBe('太郎')
    })

    it('should support Emoji property values', () => {
      const obj = { status: { icon: '🚀' } }
      expect(getItemByPath(obj, 'status.icon')).toBe('🚀')
    })
  })
})
