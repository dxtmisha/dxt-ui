// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldMessageMessage } from '../FieldMessageMessage'

describe('FieldMessageMessage', () => {
  it('should return correct active message from item getter', () => {
    const f1 = new FieldMessageMessage({})
    expect(f1.item).toBeUndefined()

    const f2 = new FieldMessageMessage({ helperMessage: 'Helper' })
    expect(f2.item).toBe('Helper')

    const f3 = new FieldMessageMessage({ validationMessage: 'Validation' })
    expect(f3.item).toBe('Validation')

    const f4 = new FieldMessageMessage({ helperMessage: 'Helper', validationMessage: 'Validation' })
    expect(f4.item).toBe('Validation')
  })

  it('should verify is() condition correctly', () => {
    const f1 = new FieldMessageMessage({})
    expect(f1.is()).toBe(false)

    const f2 = new FieldMessageMessage({ helperMessage: 'Helper' })
    expect(f2.is()).toBe(true)

    const mockSlotsHelper = { helper: () => {} } as any
    const f3 = new FieldMessageMessage({}, mockSlotsHelper)
    expect(f3.is()).toBe(true)

    const mockSlotsValidation = { validation: () => {} } as any
    const f4 = new FieldMessageMessage({}, mockSlotsValidation)
    expect(f4.is()).toBe(true)
  })

  it('should verify isValidation() condition correctly', () => {
    const f1 = new FieldMessageMessage({ helperMessage: 'Helper' })
    expect(f1.isValidation()).toBe(false)

    const f2 = new FieldMessageMessage({ validationMessage: 'Validation' })
    expect(f2.isValidation()).toBe(true)

    const mockSlotsValidation = { validation: () => {} } as any
    const f3 = new FieldMessageMessage({}, mockSlotsValidation)
    expect(f3.isValidation()).toBe(true)
  })
})
