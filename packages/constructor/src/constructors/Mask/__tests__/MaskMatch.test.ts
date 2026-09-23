import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskMatch } from '../MaskMatch'
import type { MaskSpecial } from '../MaskSpecial'
import type { MaskProps } from '../props'

describe('MaskMatch', () => {
  let mockProps: MaskProps
  let mockSpecial: MaskSpecial
  let maskMatch: MaskMatch

  beforeEach(() => {
    mockProps = {}

    mockSpecial = {
      item: ref(['d', 'w']),
      getMatch: vi.fn((groupName: string) => {
        if (groupName === 'd') return /[0-9]/
        if (groupName === 'w') return '[a-zA-Z]'
        return undefined
      })
    } as unknown as MaskSpecial

    maskMatch = new MaskMatch(mockProps, mockSpecial)
  })

  it('should match characters using default pattern (digits)', () => {
    expect(maskMatch.is('5')).toBe(true)
    expect(maskMatch.is('a')).toBe(false)
  })

  it('should match characters using group-specific RegExp rule', () => {
    expect(maskMatch.is('9', 'd')).toBe(true)
    expect(maskMatch.is('x', 'd')).toBe(false)
  })

  it('should match characters using group-specific string pattern', () => {
    expect(maskMatch.is('z', 'w')).toBe(true)
    expect(maskMatch.is('1', 'w')).toBe(false)
  })

  it('should fallback to props.match if group rule is not found', () => {
    mockProps.match = /[A-Z]/
    expect(maskMatch.is('K')).toBe(true)
    expect(maskMatch.is('k')).toBe(false)
  })

  it('should retrieve matching definition via get()', () => {
    expect(maskMatch.get('d')).toEqual(/[0-9]/)
    expect(maskMatch.get('w')).toBe('[a-zA-Z]')
    expect(maskMatch.get('unknown')).toEqual(/[0-9]/)
  })

  it('should filter string returning only allowed characters across all special groups', () => {
    const filtered = maskMatch.filter('a1-b2#c3')
    // 'd' matches digits, 'w' matches letters, punctuation is ignored
    expect(filtered).toEqual(['a', '1', 'b', '2', 'c', '3'])
  })
})
