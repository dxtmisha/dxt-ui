import { describe, it, expect } from 'vitest'
import { getIndexForRender } from '../getIndexForRender'

describe('getIndexForRender', () => {
  it('should return name when no other identifiers are provided', () => {
    expect(getIndexForRender('li')).toBe('li')
    expect(getIndexForRender('div', {})).toBe('div')
  })

  it('should append external index argument', () => {
    expect(getIndexForRender('div', {}, 'arg-1')).toBe('div.arg-1')
  })

  it('should append index from props', () => {
    expect(getIndexForRender('button', { index: 'prop-1' })).toBe('button.prop-1')
  })

  it('should append class from props', () => {
    expect(getIndexForRender('span', { class: 'red-text' })).toBe('span.red-text')
  })

  it('should append id from props', () => {
    expect(getIndexForRender('input', { id: 'x-field' })).toBe('input.x-field')
  })

  it('should combine all identifiers in the correct order: name.indexArg.indexProp.class.id', () => {
    const props = {
      index: 'p-idx',
      class: 'my-class',
      id: 'my-id'
    }
    expect(getIndexForRender('comp', props, 'a-idx')).toBe('comp.a-idx.p-idx.my-class.my-id')
  })

  it('should ignore non-string index in props', () => {
    expect(getIndexForRender('div', { index: 123 })).toBe('div')
    expect(getIndexForRender('div', { index: true })).toBe('div')
  })

  it('should handle partial combinations correctly', () => {
    expect(getIndexForRender('div', { id: 'id1' }, 'arg1')).toBe('div.arg1.id1')
    expect(getIndexForRender('div', { class: 'c1' }, 'arg1')).toBe('div.arg1.c1')
    expect(getIndexForRender('div', { index: 'idx1', id: 'id1' })).toBe('div.idx1.id1')
  })

  it('should handle undefined props or index arguments gracefully', () => {
    expect(getIndexForRender('div', undefined, undefined)).toBe('div')
  })
})
