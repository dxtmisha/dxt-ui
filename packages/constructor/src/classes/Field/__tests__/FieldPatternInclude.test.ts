// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldPatternInclude } from '../FieldPatternInclude'
import { FieldTypeInclude } from '../FieldTypeInclude'

describe('FieldPatternInclude', () => {
  it('should return explicit pattern if provided', () => {
    const patternInclude = new FieldPatternInclude({ pattern: '[a-z]+' })
    expect(patternInclude.item).toBe('[a-z]+')
  })

  it('should return default pattern based on type if no pattern provided', () => {
    const emailType = new FieldTypeInclude({ type: 'email' })
    const patternEmail = new FieldPatternInclude({}, emailType)
    expect(patternEmail.item).toBe('[\\S]+@[\\S]{2,}\\.[\\w]{2,}')

    const passwordType = new FieldTypeInclude({ type: 'password' })
    const patternPassword = new FieldPatternInclude({}, passwordType)
    expect(patternPassword.item).toBe('[0-9a-zA-Z\\-!@#$%^&*]+')
  })

  it('should return undefined if neither pattern nor type matches default list', () => {
    const textType = new FieldTypeInclude({ type: 'text' })
    const patternText = new FieldPatternInclude({}, textType)
    expect(patternText.item).toBeUndefined()
  })
})
