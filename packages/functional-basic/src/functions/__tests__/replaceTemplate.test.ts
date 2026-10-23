import { describe, expect, it } from 'vitest'
import { replaceTemplate } from '../replaceTemplate'
import { type FunctionOr } from '../../types/basicTypes'

type TemplateReplaces = Record<string, FunctionOr<string | number | boolean>>

describe('replaceTemplate', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should replace single and multiple distinct placeholders in a string', () => {
      const template = 'Hello [name], welcome to [place]!'
      const replaces: TemplateReplaces = {
        name: 'John',
        place: 'Earth'
      }

      expect(replaceTemplate(template, replaces)).toBe('Hello John, welcome to Earth!')
    })

    it('should replace multiple occurrences of the same placeholder', () => {
      const template = '[tag] - [tag] - [tag]'
      const replaces: TemplateReplaces = {
        tag: 'item'
      }

      expect(replaceTemplate(template, replaces)).toBe('item - item - item')
    })

    it('should invoke function values to resolve dynamic replacement strings', () => {
      const template = 'Status: [status], Count: [count], Enabled: [enabled]'
      const replaces: TemplateReplaces = {
        status: () => 'Online',
        count: () => 42,
        enabled: () => false
      }

      expect(replaceTemplate(template, replaces)).toBe('Status: Online, Count: 42, Enabled: false')
    })

    it('should handle function returning empty string', () => {
      const template = 'Prefix:[empty]:Postfix'
      const replaces: TemplateReplaces = {
        empty: () => ''
      }

      expect(replaceTemplate(template, replaces)).toBe('Prefix::Postfix')
    })
  })

  describe('Type coercion and falsy replacement values', () => {
    it('should accurately convert numbers and booleans (including 0 and false) to strings', () => {
      const template = 'Page [page] of [total] (Active: [active], Disabled: [disabled], Zero: [zero], Negative: [negative])'
      const replaces: TemplateReplaces = {
        page: 1,
        total: 10,
        active: true,
        disabled: false,
        zero: 0,
        negative: -5
      }

      expect(replaceTemplate(template, replaces)).toBe(
        'Page 1 of 10 (Active: true, Disabled: false, Zero: 0, Negative: -5)'
      )
    })

    it('should replace with empty string when replacement resolves to null or undefined at runtime', () => {
      const template = 'Start-[nullValue]-[undefinedValue]-[nullCallback]-End'
      const replaces = {
        nullValue: null,
        undefinedValue: undefined,
        nullCallback: () => null
      } as unknown as TemplateReplaces

      expect(replaceTemplate(template, replaces)).toBe('Start----End')
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should preserve dollar signs and RegExp replacement tokens literally', () => {
      const template = 'Price: [price], Escaped: [double], Matched: [pattern], Quote: [quote]'
      const replaces: TemplateReplaces = {
        price: '$100',
        double: '$$50',
        pattern: '$& special',
        quote: '$\' end'
      }

      expect(replaceTemplate(template, replaces)).toBe(
        'Price: $100, Escaped: $$50, Matched: $& special, Quote: $\' end'
      )
    })

    it('should prevent cascading or secondary placeholder injection', () => {
      const template = 'Message: [first]'
      const replaces: TemplateReplaces = {
        first: '[second]',
        second: 'INJECTED'
      }

      expect(replaceTemplate(template, replaces)).toBe('Message: [second]')
    })

    it('should handle special characters in placeholder key names', () => {
      const template = 'User: [user.name], Path: [dir/file], Math: [a+b]'
      const replaces: TemplateReplaces = {
        'user.name': 'Admin',
        'dir/file': 'src/app',
        'a+b': 'result'
      }

      expect(replaceTemplate(template, replaces)).toBe('User: Admin, Path: src/app, Math: result')
    })

    it('should leave unreplaced markers, empty brackets, and unclosed brackets intact', () => {
      const template = 'Hello [name], your [missing] is [] and [unclosed'
      const replaces: TemplateReplaces = {
        name: 'Alice'
      }

      expect(replaceTemplate(template, replaces)).toBe('Hello Alice, your [missing] is [] and [unclosed')
    })
  })

  describe('Empty, non-matching, and invalid boundary inputs', () => {
    it('should return original string immediately when no opening bracket is present', () => {
      const template = 'Hello world'
      const replaces: TemplateReplaces = {
        missing: 'test'
      }

      expect(replaceTemplate(template, replaces)).toBe('Hello world')
    })

    it('should return empty string for an empty template', () => {
      expect(replaceTemplate('', { name: 'John' })).toBe('')
    })

    it('should keep placeholders intact when replaces object is empty', () => {
      const template = 'Hello [name]'

      expect(replaceTemplate(template, {})).toBe('Hello [name]')
    })

    it('should safely return value when replaces is null or undefined', () => {
      const template = 'Hello [name]'

      expect(replaceTemplate(template, null as unknown as TemplateReplaces)).toBe('Hello [name]')
      expect(replaceTemplate(template, undefined as unknown as TemplateReplaces)).toBe('Hello [name]')
    })

    it('should safely return value when value is not a string at runtime', () => {
      expect(replaceTemplate(null as unknown as string, { name: 'John' })).toBeNull()
      expect(replaceTemplate(undefined as unknown as string, { name: 'John' })).toBeUndefined()
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Cyrillic, Vietnamese, CJK, and Emoji keys and values', () => {
      const template = '[приветствие], [tên]! [emoji]'
      const replaces: TemplateReplaces = {
        приветствие: 'Привет',
        tên: 'Nguyễn',
        emoji: '🚀✨'
      }

      expect(replaceTemplate(template, replaces)).toBe('Привет, Nguyễn! 🚀✨')
    })
  })
})
