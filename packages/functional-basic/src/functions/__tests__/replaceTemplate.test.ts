import { describe, it, expect } from 'vitest'
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

  it('should handle function as replacement value', () => {
    const template = 'Status: [status]'
    const replaces = {
      status: () => 'Online'
    }
    expect(replaceTemplate(template, replaces)).toBe('Status: Online')
  })

  it('should ignore patterns not found in string', () => {
    const template = 'Hello world'
    const replaces = {
      missing: 'test'
    }
    expect(replaceTemplate(template, replaces)).toBe('Hello world')
  })
})
