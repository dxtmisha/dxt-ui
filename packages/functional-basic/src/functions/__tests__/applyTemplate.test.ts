import { describe, it, expect } from 'vitest'
import { applyTemplate } from '../applyTemplate'

describe('applyTemplate', () => {
  it('should handle positional markers (%d, %e) from an array', () => {
    expect(applyTemplate('Hello %d and %e', ['world', 'user'])).toBe('Hello world and user')
  })

  it('should replace out-of-bounds positional markers with empty strings', () => {
    expect(applyTemplate('Value: %d, %e', ['first'])).toBe('Value: first, ')
  })

  it('should ignore positional markers not in the LIST_NAME (a-c, w-z)', () => {
    // Only %d through %v are supported
    expect(applyTemplate('%a %b %c %w %x %y %z', ['val'])).toBe('%a %b %c %w %x %y %z')
  })

  it('should handle multiple occurrences of the same positional marker', () => {
    expect(applyTemplate('%d %d', ['A'])).toBe('A A')
  })

  it('should replace [key] or {key} with values from an object', () => {
    expect(applyTemplate('Hello [name]', { name: 'world' })).toBe('Hello world')
    expect(applyTemplate('Hello {name}', { name: 'world' })).toBe('Hello world')
  })

  it('should handle "falsy" values in object replacement using "key in" check', () => {
    expect(applyTemplate('[v1] [v2] [v3]', { v1: 0, v2: false, v3: '' })).toBe('0 false ')
  })

  it('should handle null or undefined values in objects correctly', () => {
    expect(applyTemplate('[v1] [v2]', { v1: null as any, v2: undefined as any })).toBe(' ')
  })

  it('should return original placeholder if key is missing in object', () => {
    expect(applyTemplate('Hello [name]', {})).toBe('Hello [name]')
  })

  it('should handle blocked tags [tag]content[/tag]', () => {
    const replacement = { link: '<a href="https://example.com">[content]</a>' }
    expect(applyTemplate('Go [link]here[/link].', replacement)).toBe('Go <a href="https://example.com">here</a>.')
  })

  it('should handle "falsy" values in blocked tags', () => {
    expect(applyTemplate('[box]text[/box]', { box: 0 })).toBe('0')
    expect(applyTemplate('[box]text[/box]', { box: false })).toBe('false')
    expect(applyTemplate('[box]text[/box]', { box: '' })).toBe('')
  })

  it('should replace {content} or [content] inside blocked tag values', () => {
    // The code uses [[{]content[\]}] regex
    expect(applyTemplate('[t]C[/t]', { t: '{content}' })).toBe('C')
    expect(applyTemplate('[t]C[/t]', { t: '[content]' })).toBe('C')
  })

  it('should handle mixed bracket types for blocked tags as long as the key matches', () => {
    // Current regex allows [tag]...{/tag} because it only captures the key name (\1)
    expect(applyTemplate('[tag]text{/tag}', { tag: 'val' })).toBe('val')
  })

  it('should handle non-string text input by converting to string', () => {
    expect(applyTemplate(123 as any, {})).toBe('123')
    expect(applyTemplate(null as any, {})).toBe('null')
  })

  it('should return original text if no templates match', () => {
    expect(applyTemplate('Just raw text')).toBe('Just raw text')
  })
})
