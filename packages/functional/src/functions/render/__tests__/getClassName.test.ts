import { describe, it, expect } from 'vitest'
import { getClassName } from '../getClassName'

describe('getClassName', () => {
  it('should return undefined when props is undefined', () => {
    expect(getClassName(undefined)).toBeUndefined()
  })

  it('should return undefined when class prop is missing', () => {
    expect(getClassName({})).toBeUndefined()
    expect(getClassName({ id: 'test' })).toBeUndefined()
  })

  it('should return the class name when it is a string', () => {
    expect(getClassName({ class: 'my-class' })).toBe('my-class')
    expect(getClassName({ class: 'class1 class2' })).toBe('class1 class2')
  })

  it('should return undefined when class prop is an object (current limitation)', () => {
    expect(getClassName({ class: { 'active': true } })).toBeUndefined()
  })

  it('should return undefined when class prop is an array (current limitation)', () => {
    expect(getClassName({ class: ['c1', 'c2'] })).toBeUndefined()
  })

  it('should return undefined for other non-string types', () => {
    // @ts-expect-error testing invalid input
    expect(getClassName({ class: 123 })).toBeUndefined()
    // @ts-expect-error testing invalid input
    expect(getClassName({ class: true })).toBeUndefined()
  })
})
