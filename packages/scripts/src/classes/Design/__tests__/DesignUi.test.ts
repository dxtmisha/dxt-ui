import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignUi } from '../DesignUi'
import { DesignWiki } from '../DesignWiki'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

class TestDesignUi extends DesignUi {
  public testGetComponent() {
    return this.component
  }
}

describe('DesignUi and DesignWiki', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('normalizes component name in DesignUi', () => {
    const ui = new TestDesignUi('UserProfile')
    expect(ui.testGetComponent()).toBe('user-profile')
  })

  it('initializes wiki file if not already present in DesignWiki', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    vi.spyOn(PropertiesConfig, 'getDesignName').mockReturnValue('c2')
    const writeSpy = vi.spyOn(PropertiesFile, 'write').mockImplementation(() => {})

    const wiki = new DesignWiki()
    wiki.make()

    expect(writeSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      expect.stringContaining('export const wikiC2: StorybookArgsToList = {}'),
      'ts'
    )
  })

  it('skips writing wiki file if already present', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    const writeSpy = vi.spyOn(PropertiesFile, 'write').mockImplementation(() => {})

    const wiki = new DesignWiki()
    wiki.make()

    expect(writeSpy).not.toHaveBeenCalled()
  })
})
