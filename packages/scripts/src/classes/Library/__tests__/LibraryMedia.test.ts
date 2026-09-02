import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryMedia } from '../LibraryMedia'
import { LibraryItems } from '../LibraryItems'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

describe('LibraryMedia', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('generates style entry and icon registration when icons are present', () => {
    vi.spyOn(PropertiesConfig, 'getProjectName').mockReturnValue('ui')
    vi.spyOn(PropertiesConfig, 'getDesignName').mockReturnValue('dxt')
    vi.spyOn(PropertiesFile, 'getRoot').mockReturnValue('.')
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue([])
    vi.spyOn(PropertiesFile, 'is').mockImplementation((path: any) => {
      const p = Array.isArray(path) ? path.join('/') : path
      return p.includes('icons')
    })
    vi.spyOn(PropertiesFile, 'readDirRecursive').mockReturnValue(['navigation/arrow.svg'])

    const items = new LibraryItems()
    const writeSpy = vi.spyOn(items, 'write').mockImplementation(() => {})

    const media = new LibraryMedia(items)
    media.make()

    expect(writeSpy).toHaveBeenCalledWith(
      'media',
      expect.arrayContaining([
        expect.stringContaining('export const dxtMakeIcons = (): void => {')
      ])
    )
    expect(writeSpy).toHaveBeenCalledWith(
      'style',
      expect.arrayContaining([
        expect.stringContaining('import \'../styles/Ui/main.scss\'')
      ])
    )
  })
})
