import { describe, expect, it } from 'vitest'
import { getComponentPaths } from '../getComponentPaths'
import { UI_DIRS_COMPONENTS } from '../../config'

describe('getComponentPaths', () => {
  it('combines UI_DIRS_COMPONENTS with the provided subpath', () => {
    const result = getComponentPaths('Button')
    expect(result).toEqual([...UI_DIRS_COMPONENTS, 'Button'])
  })

  it('handles nested subpath segments', () => {
    const result = getComponentPaths('forms/Input')
    expect(result).toEqual([...UI_DIRS_COMPONENTS, 'forms/Input'])
  })
})
