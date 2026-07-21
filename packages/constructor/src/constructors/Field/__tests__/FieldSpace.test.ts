// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { FieldSpace } from '../FieldSpace'

describe('FieldSpace', () => {
  it('should return correct minWidth when inputElement is set', () => {
    const mockInput = document.createElement('input')
    Object.defineProperty(mockInput, 'offsetWidth', { value: 120, configurable: true })

    const mockFieldElement = {
      inputElement: ref(mockInput)
    } as any

    const space = new FieldSpace({}, mockFieldElement)
    expect(space.minWidth).toBe('120px')
  })

  it('should return undefined minWidth when inputElement is undefined', () => {
    const mockFieldElement = {
      inputElement: ref(undefined)
    } as any

    const space = new FieldSpace({}, mockFieldElement)
    expect(space.minWidth).toBeUndefined()
  })

  it('should return correct value text when inputElement is missing and value prop is string', () => {
    const mockFieldElement = {
      inputElement: ref(undefined)
    } as any

    const space = new FieldSpace({ value: 'hello' }, mockFieldElement)
    expect(space.value).toBe('hello')
  })

  it('should return empty string value when inputElement is present', () => {
    const mockInput = document.createElement('input')
    const mockFieldElement = {
      inputElement: ref(mockInput)
    } as any

    const space = new FieldSpace({ value: 'hello' }, mockFieldElement)
    expect(space.value).toBe('')
  })
})
