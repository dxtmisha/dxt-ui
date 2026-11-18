import { describe, expect, it } from 'vitest'
import { normalizeCmsOptionalText } from '../normalizeCmsOptionalText'

describe('normalizeCmsOptionalText', () => {
  it('preserves undefined and null values', () => {
    expect(normalizeCmsOptionalText()).toBeUndefined()
    expect(normalizeCmsOptionalText(undefined)).toBeUndefined()
    expect(normalizeCmsOptionalText(null)).toBeNull()
  })

  it('trims text and converts blank strings to null', () => {
    expect(normalizeCmsOptionalText('')).toBeNull()
    expect(normalizeCmsOptionalText('   \t\n  ')).toBeNull()
    expect(normalizeCmsOptionalText('  hello world  ')).toBe('hello world')
  })
})
