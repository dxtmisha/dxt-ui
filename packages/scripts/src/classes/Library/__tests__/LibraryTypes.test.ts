import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryTypes } from '../LibraryTypes'
import { LibraryItems } from '../LibraryItems'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

describe('LibraryTypes', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('generates global component declarations for Vue', () => {
    vi.spyOn(PropertiesConfig, 'getProjectName').mockReturnValue('ui')
    const items = new LibraryItems()
    vi.spyOn(items, 'getComponentList').mockReturnValue([
      {
        name: 'button',
        design: 'dxt',
        alias: 'dxt.button',
        codeFull: 'DxtButton',
        dir: 'Button'
      }
    ])
    const writeSpy = vi.spyOn(items, 'write').mockImplementation(() => {})

    const types = new LibraryTypes(items)
    types.make()

    expect(writeSpy).toHaveBeenCalledWith(
      'types',
      expect.arrayContaining([
        expect.stringContaining("declare module '@vue/runtime-core'"),
        expect.stringContaining('DxtButton: typeof _DxtButton')
      ])
    )
  })
})
