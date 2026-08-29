import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryPlugin } from '../LibraryPlugin'
import { LibraryItems } from '../LibraryItems'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

describe('LibraryPlugin', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('generates Vite plugin file for the design system', () => {
    vi.spyOn(PropertiesConfig, 'getDesignName').mockReturnValue('dxt')

    const items = new LibraryItems()
    const writeSpy = vi.spyOn(items, 'write').mockImplementation(() => {})

    const plugin = new LibraryPlugin(items)
    plugin.make()

    expect(writeSpy).toHaveBeenCalledWith(
      'plugin',
      expect.arrayContaining([
        expect.stringContaining('export function uiDxtVitePlugin('),
        expect.stringContaining('\'vite-plugin-dxt-ui\'')
      ])
    )
  })
})
