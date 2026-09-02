import { afterEach, describe, expect, it, vi } from 'vitest'
import { Styles } from '../Styles'
import { Properties } from '../../Properties/Properties'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { PropertiesItems } from '../../Properties/PropertiesItems'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'
import { PropertyCategory, PropertyKey, PropertyType } from '../../../types/propertyTypes'

describe('Styles', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('orchestrates generation of root, classes, properties, list, and entry files for each design', () => {
    vi.spyOn(PropertiesConfig, 'getProjectName').mockReturnValue('dxt')

    const mockPropertyData = {
      'dxt.root.spacing': {
        value: '16px',
        [PropertyKey.name]: '--spacing',
        [PropertyKey.category]: PropertyCategory.root,
        [PropertyKey.variable]: PropertyType.var,
        [PropertyKey.css]: '16px'
      },
      'dxt.class.btn': {
        value: {
          color: {
            [PropertyKey.name]: 'color',
            [PropertyKey.variable]: PropertyType.property,
            [PropertyKey.css]: '#fff'
          }
        },
        [PropertyKey.name]: 'btnPrimary',
        [PropertyKey.category]: PropertyCategory.class
      }
    }

    const mockItems = new PropertiesItems(mockPropertyData as any)

    vi.spyOn(Properties.prototype as any, 'read').mockReturnValue(mockPropertyData)
    vi.spyOn(PropertiesItems.prototype, 'getDesigns').mockReturnValue(['dxt', 'c2'])

    const writtenFiles: { path: any, name: string, ext?: string, content?: any }[] = []
    vi.spyOn(PropertiesFile, 'write').mockImplementation((path, name, content, ext) => {
      writtenFiles.push({ path, name, ext, content })
    })
    vi.spyOn(PropertiesFile, 'is').mockImplementation((path) => {
      // Return false specifically for main.scss so it generates
      return false
    })

    const styles = new Styles()
    const result = styles.make()

    expect(result).toBe(styles)

    // Check that files for design 'dxt' were written
    const fileNames = writtenFiles.map(f => f.name)
    expect(fileNames).toContain('vars')
    expect(fileNames).toContain('classes')
    expect(fileNames).toContain('properties')
    expect(fileNames).toContain('list')
    expect(fileNames).toContain('basic')
    expect(fileNames).toContain('style')
    expect(fileNames).toContain('main')

    // Check content of entry files
    const basicFile = writtenFiles.find(f => f.name === 'basic')
    expect(basicFile?.content).toContain('@use "./vars";')
    expect(basicFile?.content).toContain('@use "./properties";')
    expect(basicFile?.content).toContain('@use "./classes";')

    const styleFile = writtenFiles.find(f => f.name === 'style')
    expect(styleFile?.content).toContain(`@include variables.setDesignsDesign('dxt');`)

    const mainFile = writtenFiles.find(f => f.name === 'main')
    expect(mainFile?.content).toContain(`@include ui.initDesignBody('dxt.main');`)
  })

  it('skips main.scss generation if it already exists', () => {
    vi.spyOn(PropertiesConfig, 'getProjectName').mockReturnValue('dxt')

    vi.spyOn(Properties.prototype as any, 'read').mockReturnValue({})
    vi.spyOn(PropertiesItems.prototype, 'getDesigns').mockReturnValue(['dxt'])

    const writtenFiles: { name: string }[] = []
    vi.spyOn(PropertiesFile, 'write').mockImplementation((path, name) => {
      writtenFiles.push({ name })
    })
    vi.spyOn(PropertiesFile, 'is').mockImplementation((path) => {
      // Simulate that main.scss exists
      return true
    })

    const styles = new Styles()
    styles.make()

    expect(writtenFiles.map(f => f.name)).not.toContain('main')
  })
})
