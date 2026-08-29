import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignComponent } from '../DesignComponent'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

describe('DesignComponent', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('initializes DesignComponent with command name and options', () => {
    vi.spyOn(PropertiesFile, 'getRoot').mockReturnValue('.')
    vi.spyOn(PropertiesConfig, 'getDesignName').mockReturnValue('dxt')
    vi.spyOn(PropertiesConfig, 'getProjectName').mockReturnValue('dxt-ui')

    const component = new DesignComponent('Badge', { size: 'small' })
    expect(component).toBeDefined()
  })
})
