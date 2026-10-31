import { describe, expect, it } from 'vitest'
import { getClassName } from '../getClassName'

describe('getClassName', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return the class name when it is a single class string', () => {
      expect(getClassName({ class: 'my-class' })).toBe('my-class')
    })

    it('should return multiple space-separated classes when string contains them', () => {
      expect(getClassName({ class: 'class1 class2 class3' })).toBe('class1 class2 class3')
    })

    it('should extract class from an object containing other arbitrary properties', () => {
      expect(
        getClassName({
          id: 'test-id',
          class: 'ui-button',
          disabled: false,
          tabindex: 0,
          onClick: () => {}
        })
      ).toBe('ui-button')
    })
  })

  describe('Vue object and array class syntax normalization', () => {
    it('should normalize an object with boolean flags into class string', () => {
      expect(getClassName({ class: { active: true, disabled: false, primary: true } })).toBe('active primary')
    })

    it('should return undefined when all keys in object syntax are falsy', () => {
      expect(getClassName({ class: { active: false, hidden: 0, disabled: null } })).toBeUndefined()
    })

    it('should normalize a simple array of class strings', () => {
      expect(getClassName({ class: ['class1', 'class2'] })).toBe('class1 class2')
    })

    it('should normalize mixed nested arrays and objects', () => {
      expect(getClassName({ class: ['btn', { active: true, disabled: false }, ['nested-1', { 'nested-2': true }]] }))
        .toBe('btn active nested-1 nested-2')
    })

    it('should return undefined when array of classes is empty or contains only falsy entries', () => {
      expect(getClassName({ class: [] })).toBeUndefined()
      expect(getClassName({ class: ['', null, undefined, false] })).toBeUndefined()
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return undefined when props is undefined or called with no arguments', () => {
      expect(getClassName(undefined)).toBeUndefined()
      expect(getClassName()).toBeUndefined()
    })

    it('should return undefined when props is null', () => {
      expect(getClassName(null)).toBeUndefined()
    })

    it('should return undefined when props is an empty object', () => {
      expect(getClassName({})).toBeUndefined()
    })

    it('should return undefined when class prop is missing', () => {
      expect(getClassName({ id: 'test-only', name: 'demo' })).toBeUndefined()
    })

    it('should return undefined when class prop is explicitly undefined or null', () => {
      expect(getClassName({ class: undefined })).toBeUndefined()
      expect(getClassName({ class: null })).toBeUndefined()
    })

    it('should return undefined when class is an empty string', () => {
      expect(getClassName({ class: '' })).toBeUndefined()
    })
  })

  describe('Type coercion, non-standard data types, and primitives', () => {
    it('should return undefined for primitive truthy props without throwing TypeError', () => {
      expect(getClassName(true)).toBeUndefined()
      expect(getClassName(false)).toBeUndefined()
      expect(getClassName(123)).toBeUndefined()
      expect(getClassName(0)).toBeUndefined()
      expect(getClassName('some-string')).toBeUndefined()
      expect(getClassName(Symbol('test'))).toBeUndefined()
      expect(getClassName(100n)).toBeUndefined()
    })

    it('should return undefined when class prop is a number, boolean, or function', () => {
      expect(getClassName({ class: 123 })).toBeUndefined()
      expect(getClassName({ class: 0 })).toBeUndefined()
      expect(getClassName({ class: true })).toBeUndefined()
      expect(getClassName({ class: false })).toBeUndefined()
      expect(getClassName({ class: () => 'dynamic' })).toBeUndefined()
    })
  })

  describe('TypeScript ergonomics and custom interfaces', () => {
    it('should accept custom strongly-typed interfaces without index signature', () => {
      interface CustomComponentProps {
        class?: string
        disabled?: boolean
        variant?: 'primary' | 'secondary'
      }

      const componentProps: CustomComponentProps = {
        class: 'ui-btn',
        disabled: false,
        variant: 'primary'
      }

      expect(getClassName(componentProps)).toBe('ui-btn')
    })
  })

  describe('Determinism and immutability', () => {
    it('should not mutate the input props object across invocations', () => {
      const originalProps = Object.freeze({
        class: Object.freeze(['btn', 'btn--active']),
        otherProp: 'static'
      })

      expect(getClassName(originalProps)).toBe('btn btn--active')
      expect(getClassName(originalProps)).toBe('btn btn--active')
      expect(originalProps.otherProp).toBe('static')
    })
  })
})
