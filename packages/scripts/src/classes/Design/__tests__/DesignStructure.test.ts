import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignStructure } from '../DesignStructure'
import { DesignStructureStyles } from '../DesignStructureStyles'
import { PropertiesCache } from '../../Properties/PropertiesCache'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

class TestDesignStructure extends DesignStructure {
  public testGetPathName() {
    return this.getPathName()
  }

  public testGetPathClasses() {
    return this.getPathClasses()
  }
}

describe('DesignStructure', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    PropertiesCache.clear()
  })

  it('normalizes component name and builds cache path names', () => {
    vi.spyOn(PropertiesConfig, 'getDesignName').mockReturnValue('dxt')

    const structure = new TestDesignStructure('user-profile')

    expect(structure.getFullComponentName()).toBe('DxtUserProfile')
    expect(structure.getFileName()).toBe('DxtUserProfile')
    expect(structure.testGetPathName()).toBe('dxt-userProfile')
    expect(structure.testGetPathClasses()).toBe('dxt-userProfile-classes')
  })

  it('caches structure items and returns them on get()', () => {
    const structure = new DesignStructure('button')
    const mockList = [{ name: 'label', type: 'string' }] as any

    vi.spyOn(PropertiesCache, 'get').mockReturnValue(mockList)

    expect(structure.get()).toEqual(mockList)
    expect(structure.get()).toEqual(mockList)
  })

  it('caches classes list and returns them on getClasses()', () => {
    const structure = new DesignStructure('button')
    const mockClasses = [{ name: 'button', classes: ['root'] }] as any

    vi.spyOn(PropertiesCache, 'get').mockReturnValue(mockClasses)

    expect(structure.getClasses()).toEqual(mockClasses)
  })

  it('caches styles and returns them on getStyles()', () => {
    const structure = new DesignStructure('button')
    vi.spyOn(DesignStructureStyles.prototype, 'get').mockReturnValue(['.dxt-button { display: flex; }'])

    expect(structure.getStyles()).toEqual(['.dxt-button { display: flex; }'])
  })
})
