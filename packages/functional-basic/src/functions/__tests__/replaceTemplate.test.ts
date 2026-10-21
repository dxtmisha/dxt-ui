import { describe, expect, it } from 'vitest'
import { replaceTemplate } from '../replaceTemplate'

describe('replaceTemplate', () => {
  it('should replace patterns in a string', () => {
    const template = 'Hello [name], welcome to [place]!'
    const replaces = {
      name: 'John',
      place: 'Earth'
    }
    expect(replaceTemplate(template, replaces)).toBe('Hello John, welcome to Earth!')
  })

  it('should handle multiple occurrences of the same pattern', () => {
    const template = '[tag] - [tag] - [tag]'
    const replaces = {
      tag: 'item'
    }
    expect(replaceTemplate(template, replaces)).toBe('item - item - item')
  })

  it('should handle function as replacement value', () => {
    const template = 'Status: [status]'
    const replaces = {
      status: () => 'Online'
    }
    expect(replaceTemplate(template, replaces)).toBe('Status: Online')
  })

  it('should handle function returning empty string', () => {
    const template = 'Prefix:[empty]:Postfix'
    const replaces = {
      empty: () => ''
    }
    expect(replaceTemplate(template, replaces)).toBe('Prefix::Postfix')
  })

  it('should handle numbers and booleans as replacement values', () => {
    const template = 'Page [page] of [total] (Active: [active], Zero: [zero])'
    const replaces = {
      page: 1,
      total: 10,
      active: true,
      zero: 0
    }
    expect(replaceTemplate(template, replaces)).toBe('Page 1 of 10 (Active: true, Zero: 0)')
  })

  it('should preserve dollar signs and special replacement tokens literally', () => {
    const template = 'Price: [price], Escaped: [double], Matched: [pattern], Quote: [quote]'
    const replaces = {
      price: '$100',
      double: '$$50',
      pattern: '$& special',
      quote: '$\' end'
    }
    expect(replaceTemplate(template, replaces)).toBe(
      'Price: $100, Escaped: $$50, Matched: $& special, Quote: $\' end'
    )
  })

  it('should prevent cascading/secondary placeholder injection', () => {
    const template = 'Message: [first]'
    const replaces = {
      first: '[second]',
      second: 'INJECTED'
    }
    expect(replaceTemplate(template, replaces)).toBe('Message: [second]')
  })

  it('should handle special characters in placeholder names', () => {
    const template = 'User: [user.name], Path: [dir/file], Math: [a+b]'
    const replaces = {
      'user.name': 'Admin',
      'dir/file': 'src/app',
      'a+b': 'result'
    }
    expect(replaceTemplate(template, replaces)).toBe('User: Admin, Path: src/app, Math: result')
  })

  it('should ignore patterns not found in string', () => {
    const template = 'Hello world'
    const replaces = {
      missing: 'test'
    }
    expect(replaceTemplate(template, replaces)).toBe('Hello world')
  })

  it('should keep unreplaced markers intact when key is missing in replaces', () => {
    const template = 'Hello [name], your [missing] is ready'
    const replaces = {
      name: 'Alice'
    }
    expect(replaceTemplate(template, replaces)).toBe('Hello Alice, your [missing] is ready')
  })

  it('should handle empty string template', () => {
    expect(replaceTemplate('', { name: 'John' })).toBe('')
  })

  it('should handle empty replaces object', () => {
    const template = 'Hello [name]'
    expect(replaceTemplate(template, {})).toBe('Hello [name]')
  })

  it('should safely return value if replaces is not an object', () => {
    const template = 'Hello [name]'
    expect(replaceTemplate(template, null as any)).toBe('Hello [name]')
    expect(replaceTemplate(template, undefined as any)).toBe('Hello [name]')
  })
})
