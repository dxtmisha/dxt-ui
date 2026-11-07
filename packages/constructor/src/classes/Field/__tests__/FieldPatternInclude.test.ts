// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldPatternInclude } from '../FieldPatternInclude'

describe('FieldPatternInclude', () => {
  it('should return explicit pattern if provided', () => {
    const patternInclude = new FieldPatternInclude({ pattern: '[a-z]+' })
    expect(patternInclude.item).toBe('[a-z]+')
  })

  it('should return default pattern based on type if no pattern provided', () => {
    const patternEmail = new FieldPatternInclude({ type: 'email' })
    expect(patternEmail.item).toBe('[\\S]+@[\\S]{2,}\\.[\\w]{2,}')

    const patternPassword = new FieldPatternInclude({ type: 'password' })
    expect(patternPassword.item).toBe('[0-9a-zA-Z\\-!@#$%^&*]+')
  })

  it('should return undefined if neither pattern nor type matches default list', () => {
    const patternText = new FieldPatternInclude({ type: 'text' })
    expect(patternText.item).toBeUndefined()
  })
})
