import { describe, expect, it } from 'vitest'
import { toCodes } from '../toCodes'

describe('toCodes', () => {
  it('returns an empty array for missing or empty inputs', () => {
    expect(toCodes()).toEqual([])
    expect(toCodes(undefined)).toEqual([])
    expect(toCodes([])).toEqual([])
  })

  it('trims valid codes, filters out blank, whitespace-containing, and non-string values, and deduplicates without mutating input', () => {
    const input = ['  admin  ', 'users:read', 'admin', 'bad code', '   ', '', 123, null, undefined, 'users:read  '] as const

    expect(toCodes(input)).toEqual(['admin', 'users:read'])
    expect(input).toEqual(['  admin  ', 'users:read', 'admin', 'bad code', '   ', '', 123, null, undefined, 'users:read  '])
  })
})
