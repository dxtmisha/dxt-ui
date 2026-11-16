// @vitest-environment jsdom
import './testWarnings'
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import type { FieldElement } from '../FieldElement'
import { FieldSpace } from '../FieldSpace'

describe('FieldSpace', () => {
  it('should return correct minWidth when inputElement is set and keep fieldElement lazy until accessed', () => {
    const mockInput = document.createElement('input')
    Object.defineProperty(mockInput, 'offsetWidth', { value: 120, configurable: true })

    const getFieldElement = vi.fn(() => ({
      inputElement: ref(mockInput)
    }) as unknown as FieldElement)

    const space = new FieldSpace({}, getFieldElement)
    expect(getFieldElement).not.toHaveBeenCalled()
    expect(space.minWidth).toBe('120px')
    expect(getFieldElement).toHaveBeenCalledTimes(1)
  })

  it('should return undefined minWidth when inputElement is undefined', () => {
    const getFieldElement = () => ({
      inputElement: ref(undefined)
    }) as unknown as FieldElement

    const space = new FieldSpace({}, getFieldElement)
    expect(space.minWidth).toBeUndefined()
  })

  it('should return correct value text when inputElement is missing and value prop is string', () => {
    const getFieldElement = () => ({
      inputElement: ref(undefined)
    }) as unknown as FieldElement

    const space = new FieldSpace({ value: 'hello' }, getFieldElement)
    expect(space.value).toBe('hello')
  })

  it('should return empty string when inputElement is present or value is non-string', () => {
    const mockInput = document.createElement('input')
    const spaceWithInput = new FieldSpace({ value: 'hello' }, () => ({
      inputElement: ref(mockInput)
    }) as unknown as FieldElement)
    expect(spaceWithInput.value).toBe('')

    const spaceWithNumber = new FieldSpace({ value: 123 }, () => ({
      inputElement: ref(undefined)
    }) as unknown as FieldElement)
    expect(spaceWithNumber.value).toBe('')
  })
})
