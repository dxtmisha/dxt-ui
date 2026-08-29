import { afterEach, describe, expect, it, vi } from 'vitest'
import { ComponentCreator } from '../ComponentCreator'
import { ComponentItem } from '../ComponentItem'
import { PropertiesFile } from '../../Properties/PropertiesFile'

class TestComponentCreator extends ComponentCreator {
  public testGetDirs() {
    return this.getDirs()
  }
}

describe('ComponentCreator', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('collects only empty component directories in getDirs()', () => {
    vi.spyOn(PropertiesFile, 'readDirOnlyRecursive').mockReturnValue([
      'src/components/C1',
      'src/components/C2'
    ])

    vi.spyOn(PropertiesFile, 'readDir').mockImplementation((paths: any) => {
      const pathStr = Array.isArray(paths) ? paths.join('/') : paths
      if (pathStr.includes('C1')) {
        return [] // empty
      }
      return ['C2.vue'] // not empty
    })

    const creator = new TestComponentCreator()
    const dirs = creator.testGetDirs()

    expect(dirs).toEqual(['src/components/C1'])
  })

  it('scaffolds component templates for discovered empty directories', () => {
    vi.spyOn(PropertiesFile, 'readDirOnlyRecursive').mockReturnValue([
      'src/components/Button'
    ])
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue([])
    const makeSpy = vi.spyOn(ComponentItem.prototype, 'make').mockImplementation(() => {})

    const creator = new ComponentCreator()
    creator.make()

    expect(makeSpy).toHaveBeenCalled()
  })
})
