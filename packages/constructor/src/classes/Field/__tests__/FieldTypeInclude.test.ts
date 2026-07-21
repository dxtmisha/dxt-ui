// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldTypeInclude } from '../FieldTypeInclude'
import { FieldVisibilityInclude } from '../FieldVisibilityInclude'

describe('FieldTypeInclude', () => {
  it('should return type from props', () => {
    const typeInclude = new FieldTypeInclude({ type: 'email' })
    expect(typeInclude.get()).toBe('email')
    expect(typeInclude.item).toBe('email')
  })

  it('should fallback to text if type is undefined', () => {
    const typeInclude = new FieldTypeInclude({})
    expect(typeInclude.get()).toBe('text')
  })

  it('should return text if type is password and visibility is toggled to true', () => {
    const visibility = new FieldVisibilityInclude()
    const typeInclude = new FieldTypeInclude({ type: 'password' }, visibility)

    expect(typeInclude.get()).toBe('password')

    visibility.toggle()
    expect(typeInclude.get()).toBe('text')
  })
})
