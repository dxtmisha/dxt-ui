import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignWikiStormItem } from '../DesignWikiStormItem'
import { DesignWikiStorm } from '../DesignWikiStorm'

class TestDesignWikiStormItem extends DesignWikiStormItem {
  public testPrepareType(type?: string) {
    return this.prepareType(type)
  }

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

  it('formats types in prepareType()', () => {
    const item = new TestDesignWikiStormItem('my-project', ['src', 'components'], { dir: 'Button' } as any)

    expect(item.testPrepareType('boolean')).toBe('boolean')
    expect(item.testPrepareType('string | number')).toBe('string | number')
    expect(item.testPrepareType('primary | secondary')).toBe('\'primary\' | \'secondary\'')
    expect(item.testPrepareType('undefined | boolean')).toBe('boolean')
  })

  it('cleans type strings in cleanType()', () => {
    const item = new TestDesignWikiStormItem('my-project', ['src', 'components'], { dir: 'Button' } as any)

    expect(item.testCleanType('(ButtonClasses)')).toBe('ButtonClasses')
    expect(item.testCleanType('(ButtonClasses) | undefined')).toBe('ButtonClasses | undefined')
    expect(item.testCleanType('string')).toBe('string')
  })

  it('returns directory name from library data', () => {
    const item = new TestDesignWikiStormItem('my-project', ['src'], { dir: 'CustomCard' } as any)
    expect(item.testGetDirName()).toBe('CustomCard')
  })
})
