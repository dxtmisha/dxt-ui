// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldVisibilityInclude } from '../FieldVisibilityInclude'

describe('FieldVisibilityInclude', () => {
  it('should initialize with visibility state false', () => {
    const visibility = new FieldVisibilityInclude()
    expect(visibility.item.value).toBe(false)
  })

  it('should toggle visibility state correctly', () => {
    const visibility = new FieldVisibilityInclude()
    visibility.toggle()
    expect(visibility.item.value).toBe(true)

    visibility.toggle()
    expect(visibility.item.value).toBe(false)
  })
})
