import { describe, expect, it } from 'vitest'
import { getComponentPaths } from '../getComponentPaths'
import { UI_DIRS_COMPONENTS } from '../../config'

describe('getComponentPaths', () => {
  it('should return an array containing UI_DIRS_COMPONENTS and the given path', () => {
    const path = 'test-component'
    const result = getComponentPaths(path)

    expect(result).toEqual([...UI_DIRS_COMPONENTS, path])
  })

  it('it should work with nested paths', () => {
    const path = 'nested/test-component'
    const result = getComponentPaths(path)

    expect(result).toEqual([...UI_DIRS_COMPONENTS, path])
  })
})
