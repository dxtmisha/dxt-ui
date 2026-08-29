import { describe, expect, it } from 'vitest'
import { toPathStandardSep } from '../toPathStandardSep'
import requirePath from 'path'

describe('toPathStandardSep', () => {
  it('converts slashes to OS-specific path separators', () => {
    const result = toPathStandardSep('packages/scripts/src')
    expect(result).toBe(['packages', 'scripts', 'src'].join(requirePath.sep))
  })

  it('handles strings without slashes', () => {
    expect(toPathStandardSep('single-segment')).toBe('single-segment')
  })
})
