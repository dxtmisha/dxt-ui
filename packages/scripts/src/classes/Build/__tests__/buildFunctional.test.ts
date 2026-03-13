import { describe, expect, it, vi } from 'vitest'
import { BuildFunctional } from '../buildFunctional'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { UI_DIRS_LIBRARY } from '../../../config'

vi.mock('@dxtmisha/functional', () => ({
  func1: vi.fn(),
  func2: vi.fn()
}))

vi.mock('../../Properties/PropertiesFile', () => ({
  PropertiesFile: {
    writeByPath: vi.fn()
  }
}))

describe('BuildFunctional', () => {
  it('getList should return keys of the functional package', () => {
    const build = new BuildFunctional()
    const list = build.getList()
    expect(list).toContain('func1')
    expect(list).toContain('func2')
    expect(list).toHaveLength(2)
  })

  it('make should call PropertiesFile.writeByPath with correct arguments', () => {
    const build = new BuildFunctional()
    build.make()

    expect(PropertiesFile.writeByPath).toHaveBeenCalledWith(
      [...UI_DIRS_LIBRARY, 'functional.ts'],
      expect.stringContaining('export { func1 } from \'@dxtmisha/functional\'')
    )
    expect(PropertiesFile.writeByPath).toHaveBeenCalledWith(
      [...UI_DIRS_LIBRARY, 'functional.ts'],
      expect.stringContaining('export { func2 } from \'@dxtmisha/functional\'')
    )
    expect(PropertiesFile.writeByPath).toHaveBeenCalledWith(
      [...UI_DIRS_LIBRARY, 'functional.ts'],
      expect.stringContaining('export type * from \'@dxtmisha/functional\'')
    )
  })
})
