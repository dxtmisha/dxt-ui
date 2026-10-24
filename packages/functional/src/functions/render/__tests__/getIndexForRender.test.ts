import { describe, it, expect } from 'vitest'
import { getIndexForRender } from '../getIndexForRender'

describe('getIndexForRender', () => {
  describe('Identifier composition', () => {
    it('should return the name when no other identifiers are provided', () => {
      expect(getIndexForRender('li')).toBe('li')
      expect(getIndexForRender('div', {})).toBe('div')
    })

    it('should append an external index argument', () => {
      expect(getIndexForRender('div', {}, 'arg-1')).toBe('div.arg-1')
    })

    it('should append index from props', () => {
      expect(getIndexForRender('button', { index: 'prop-1' })).toBe('button.prop-1')
    })

    it('should append id from props', () => {
      expect(getIndexForRender('input', { id: 'x-field' })).toBe('input.x-field')
    })

    it('should combine identifiers in name.externalIndex.propsIndex.id order', () => {
      expect(getIndexForRender('comp', { index: 'property', id: 'identifier' }, 'external'))
        .toBe('comp.external.property.identifier')
    })

    it.each(['запись', 'tiếng Việt', '項目', '🚀'])('should preserve the Unicode identifier %s', (identifier) => {
      expect(getIndexForRender('item', { id: identifier }, 'list')).toBe(`item.list.${identifier}`)
    })
  })

  describe('Presentation independence', () => {
    it.each([undefined, '', 'red-text', ['red-text'], { active: true }])(
      'should ignore presentation classes %j',
      (className) => {
        expect(getIndexForRender('span', { class: className })).toBe('span')
        expect(getIndexForRender('span', { class: className, id: 'item' }, 'entry')).toBe('span.entry.item')
      }
    )

    it('should not generate an identifier from a component class alone', () => {
      expect(getIndexForRender({ render: () => null }, { class: 'red-text' })).toBeUndefined()
    })

    it('should leave source properties unchanged across repeated calls', () => {
      const classNames = { active: true }
      const props = Object.freeze({ class: classNames, index: 'property', id: 'identifier' })

      expect(getIndexForRender('item', props)).toBe('item.property.identifier')
      expect(getIndexForRender('item', props)).toBe('item.property.identifier')
      expect(props).toEqual({ class: classNames, index: 'property', id: 'identifier' })
      expect(props.class).toBe(classNames)
    })
  })

  describe('Absent and non-string identifiers', () => {
    it('should ignore non-string index in props', () => {
      expect(getIndexForRender('div', { index: 123 })).toBe('div')
      expect(getIndexForRender('div', { index: true })).toBe('div')
    })

    it('should handle partial combinations correctly', () => {
      expect(getIndexForRender('div', { id: 'id1' }, 'arg1')).toBe('div.arg1.id1')
      expect(getIndexForRender('div', { class: 'c1' }, 'arg1')).toBe('div.arg1')
      expect(getIndexForRender('div', { index: 'idx1', id: 'id1' })).toBe('div.idx1.id1')
    })

    it('should handle undefined props or index arguments gracefully', () => {
      expect(getIndexForRender('div', undefined, undefined)).toBe('div')
    })

    it('should return undefined when every identity contribution is absent', () => {
      expect(getIndexForRender('')).toBeUndefined()
      expect(getIndexForRender({ render: () => null })).toBeUndefined()
    })

    it('should use props identifiers for a component definition', () => {
      expect(getIndexForRender({ render: () => null }, { id: 'instance' }, 'component')).toBe('.component.instance')
    })
  })
})
