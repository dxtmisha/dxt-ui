import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryList } from '../LibraryList'
import { LibraryItems } from '../LibraryItems'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'
import { PropertiesFile } from '../../Properties/PropertiesFile'

class TestLibraryList extends LibraryList {
  public testGetDesigns() {
    return this.getDesigns()
  }

  public testGetReg(names: string[], only?: boolean) {
    return this.getReg(names, only)
  }

  public testGetRegName(names: string[]) {
    return this.getRegName(names)
  }

  public testGetVars() {
    return this.getVars()
  }

  public testGetVarsReg() {
    return this.getVarsReg()
  }

  public testGetComponents() {
    return this.getComponents()
  }
}

describe('LibraryList', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('collects design names and alternative design names', () => {
    vi.spyOn(PropertiesConfig, 'getDesignName').mockReturnValue('c2')
    vi.spyOn(PropertiesConfig, 'getDesignAlternativeName').mockReturnValue(['dxt'])

    const items = new LibraryItems()
    const list = new TestLibraryList(items)

    expect(list.testGetDesigns()).toEqual(['c2', 'dxt'])
  })

  it('generates component regular expressions correctly', () => {
    vi.spyOn(PropertiesConfig, 'getDesignName').mockReturnValue('dxt')
    vi.spyOn(PropertiesConfig, 'getDesignAlternativeName').mockReturnValue([])

    const items = new LibraryItems()
    const list = new TestLibraryList(items)

    const reg = list.testGetReg(['button', 'user-badge'], true)
    expect(reg).toContain('dxt')
    expect(reg).toContain('button')
  })

  it('extracts CSS variables and creates vars regular expression', () => {
    vi.spyOn(PropertiesConfig, 'getDesignName').mockReturnValue('dxt')
    vi.spyOn(PropertiesConfig, 'getProjectName').mockReturnValue('ui')
    vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue(`
      :root {
        --dxt-button-color: #fff;
        --dxt-badge-bg: #000;
        --other-var: 123;
      }
    `)

    const items = new LibraryItems()
    const list = new TestLibraryList(items)

    const vars = list.testGetVars()
    expect(vars).toContain('button-color')
    expect(vars).toContain('badge-bg')

    const varsReg = list.testGetVarsReg()
    expect(varsReg).toContain('button-color')
  })

  it('creates design.ts overview file on make()', () => {
    const items = new LibraryItems()
    const writeSpy = vi.spyOn(items, 'write').mockImplementation(() => {})

    const list = new LibraryList(items)
    list.make()

    expect(writeSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.arrayContaining([
        expect.stringContaining('export const designName'),
        expect.stringContaining('export const componentsList')
      ])
    )
  })
})
