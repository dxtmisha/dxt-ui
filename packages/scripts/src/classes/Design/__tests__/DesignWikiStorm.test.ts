import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { DesignWikiStormItem } from '../DesignWikiStormItem'

class TestDesignWikiStormItem extends DesignWikiStormItem {
  public testCleanType(type: string) {
    return this.cleanType(type)
  }

  public testGetDirName() {
    return this.getDirName()
  }
}

describe('DesignWikiStorm and DesignWikiStormItem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('cleans type strings in cleanType()', () => {
    const item = new TestDesignWikiStormItem('my-project', ['src', 'components'], { dir: 'Button' } as any)

    expect(item.testCleanType('(ButtonClasses)')).toBe('ButtonClasses')
    expect(item.testCleanType('(ButtonClasses) | undefined')).toBe('ButtonClasses')
    expect(item.testCleanType('((value: boolean) => void)')).toBe('(value: boolean) => void')
    expect(item.testCleanType('string')).toBe('string')
  })

  it('returns directory name from library data', () => {
    const item = new TestDesignWikiStormItem('my-project', ['src'], { dir: 'CustomCard' } as any)
    expect(item.testGetDirName()).toBe('CustomCard')
  })

  it('uses PropertiesFile.toUrl to resolve wikiData.ts path', async () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    const toUrlSpy = vi.spyOn(PropertiesFile, 'toUrl')
    const item = new TestDesignWikiStormItem('my-project', ['src', 'components'], { dir: 'Button' } as any)
    await item.init()
    expect(toUrlSpy).not.toHaveBeenCalled()

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    await item.init()
    expect(toUrlSpy).toHaveBeenCalledWith(['.', 'src', 'components', 'Button', 'wikiData.ts'])
  })
})
