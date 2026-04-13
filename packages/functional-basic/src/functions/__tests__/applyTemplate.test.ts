import { describe, it, expect } from 'vitest'
import { applyTemplate } from '../applyTemplate'

describe('applyTemplate', () => {
  it('should replace %d, %e, etc. with values from an array', () => {
    expect(applyTemplate('Hello %d and %e', ['world', 'user'])).toBe('Hello world and user')
  })

  it('should replace [key] or {key} with the corresponding value from an object', () => {
    expect(applyTemplate('Hello [name]', { name: 'world' })).toBe('Hello world')
    expect(applyTemplate('Hello {name}', { name: 'world' })).toBe('Hello world')
  })

  it('should replace [key]...[/key] or {key}...{/key} and substitute inner content', () => {
    expect(applyTemplate('Visit [link]my site[/link] now', { link: '<a href="https://example.com">[content]</a>' }))
      .toBe('Visit <a href="https://example.com">my site</a> now')
    expect(applyTemplate('Visit {link}my site{/link} now', { link: '<a href="https://example.com">{content}</a>' }))
      .toBe('Visit <a href="https://example.com">my site</a> now')
  })

  it('should handle multiple occurrences of the same key', () => {
    expect(applyTemplate('[name] is [name]', { name: 'Bob' })).toBe('Bob is Bob')
    expect(applyTemplate('{name} is {name}', { name: 'Bob' })).toBe('Bob is Bob')
  })

  it('should return the original text if no templates match', () => {
    expect(applyTemplate('Just raw text')).toBe('Just raw text')
  })

  it('should return the original text with unreplaced templates if replacement is empty', () => {
    expect(applyTemplate('Hello [name]')).toBe('Hello [name]')
    expect(applyTemplate('Hello {name}')).toBe('Hello {name}')
    expect(applyTemplate('Hello %d')).toBe('Hello %d')
  })
})
