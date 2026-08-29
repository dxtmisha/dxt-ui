import { describe, expect, it } from 'vitest'
import { getNameDirByPaths } from '../getNameDirByPaths'

describe('getNameDirByPaths', () => {
  it('extracts the last directory name from array of path segments', () => {
    expect(getNameDirByPaths(['packages', 'scripts', 'src', 'functions'])).toBe('functions')
    expect(getNameDirByPaths(['packages', 'ui'])).toBe('ui')
  })

  it('extracts the last directory name from a single path string', () => {
    expect(getNameDirByPaths('packages/scripts/src')).toBe('src')
  })
})
