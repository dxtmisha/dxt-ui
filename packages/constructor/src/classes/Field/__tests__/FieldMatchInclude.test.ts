// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FieldMatchInclude } from '../FieldMatchInclude'

describe('FieldMatchInclude', () => {
  let mockElement: any
  let mockValue: any
  let mockText: any

  beforeEach(() => {
    mockElement = {
      findByName: vi.fn(),
      get: vi.fn()
    }
    mockValue = {
      string: 'hello',
      item: { value: 'hello' }
    }
    mockText = {
      entriesMatch: 'Fields must match'
    }
  })

  it('should detect if matching check is enabled', () => {
    const enabled = new FieldMatchInclude({ match: 'target-name' }, mockElement, mockValue)
    expect(enabled.is()).toBe(true)

    const disabled = new FieldMatchInclude({}, mockElement, mockValue)
    expect(disabled.is()).toBe(false)
  })

  it('should extract selector and validation message properly', () => {
    const matchObj = { name: 'confirm-password', validationMessage: 'Passwords mismatched' }
    const matchInclude = new FieldMatchInclude({ match: matchObj }, mockElement, mockValue, mockText)

    expect(matchInclude.getSelectors()).toBe('confirm-password')
    expect(matchInclude.getValidationMessage()).toBe('Passwords mismatched')
  })

  it('should fallback to global text for validation message', () => {
    const matchInclude = new FieldMatchInclude({ match: 'confirm-password' }, mockElement, mockValue, mockText)
    expect(matchInclude.getValidationMessage()).toBe('Fields must match')
  })

  it('should fail check if compared elements have different values', () => {
    const targetInput = document.createElement('input')
    targetInput.value = 'world'
    mockElement.findByName.mockReturnValue(targetInput)
    mockElement.get.mockReturnValue('my-input-element')

    const matchInclude = new FieldMatchInclude({ match: 'confirm-password' }, mockElement, mockValue, mockText)
    const result = matchInclude.check()

    expect(result).toBeDefined()
    expect(result?.status).toBe(false)
    expect(result?.validationMessage).toBe('Fields must match')
    expect(result?.value).toBe('hello')
  })

  it('should pass check (return undefined) if compared elements match', () => {
    const targetInput = document.createElement('input')
    targetInput.value = 'hello'
    mockElement.findByName.mockReturnValue(targetInput)

    const matchInclude = new FieldMatchInclude({ match: 'confirm-password' }, mockElement, mockValue, mockText)
    const result = matchInclude.check()

    expect(result).toBeUndefined()
  })
})
