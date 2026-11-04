// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { reactive } from 'vue'
import { FieldTypeInclude } from '../FieldTypeInclude'
import { FieldVisibilityInclude } from '../FieldVisibilityInclude'
import type { FieldAllProps, FieldType } from '../../../types/fieldTypes'

describe('FieldTypeInclude', () => {
  describe('Standard type resolution', () => {
    it.each<FieldType>([
      'text',
      'search',
      'number',
      'number-format',
      'currency',
      'email',
      'datetime',
      'date',
      'year-month',
      'time',
      'hour-minute',
      'tel',
      'url',
      'checkbox',
      'radio'
    ])('should return %s directly from props', (type) => {
      const typeInclude = new FieldTypeInclude({ type })
      expect(typeInclude.get()).toBe(type)
      expect(typeInclude.item).toBe(type)
    })

    it('should fallback to text if type is undefined', () => {
      const typeInclude = new FieldTypeInclude({})
      expect(typeInclude.get()).toBe('text')
      expect(typeInclude.item).toBe('text')
    })
  })

  describe('Password visibility handling', () => {
    it('should return password when visibility callback is not provided', () => {
      const typeInclude = new FieldTypeInclude({ type: 'password' })
      expect(typeInclude.get()).toBe('password')
      expect(typeInclude.item).toBe('password')
    })

    it('should return text if type is password and visibility is toggled to true', () => {
      const visibility = new FieldVisibilityInclude()
      const typeInclude = new FieldTypeInclude({ type: 'password' }, () => visibility)

      expect(typeInclude.get()).toBe('password')

      visibility.toggle()
      expect(typeInclude.get()).toBe('text')

      visibility.toggle()
      expect(typeInclude.get()).toBe('password')
    })

    it('should not affect non-password types when visibility is true', () => {
      const visibility = new FieldVisibilityInclude()
      visibility.toggle()

      const typeInclude = new FieldTypeInclude({ type: 'email' }, () => visibility)
      expect(typeInclude.get()).toBe('email')
    })
  })

  describe('Reactivity with props', () => {
    it('should react to dynamic changes in props.type', () => {
      const props = reactive<FieldAllProps>({ type: 'email' })
      const typeInclude = new FieldTypeInclude(props)

      expect(typeInclude.get()).toBe('email')

      props.type = 'tel'
      expect(typeInclude.get()).toBe('tel')

      props.type = undefined
      expect(typeInclude.get()).toBe('text')
    })
  })
})
