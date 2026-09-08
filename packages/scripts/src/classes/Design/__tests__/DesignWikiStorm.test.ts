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

  public async testGetData() {
    return this.getData()
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

  it('parses wikiData.ts and props.ts via TypeScript AST without dynamic import', async () => {
    const mockWikiDataContent = `
import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames = [
  { name: 'adaptive', type: 'string', option: ['menu', 'modal'] },
  { name: 'dense', type: 'boolean' }
]

const slotsNames = [
  { name: 'control', description: \`Control slot for window management\`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] }
]

const eventsNames = [
  { name: 'load', description: \`Event triggered when image loads\`, properties: [{ name: 'image', type: 'ImageEventData' }] },
  { name: 'update:open', description: \`Update open event\`, properties: [{ name: 'value', type: 'boolean' }] }
]

export const WindowWikiData = {
  component: 'Window',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
`
    const mockPropsContent = `
export const defaults = {
  iconClose: 'close',
  width: 'md',
  dense: false
}
`

    vi.spyOn(PropertiesFile, 'is').mockImplementation((path: any) => {
      const pathString = Array.isArray(path) ? path.join('/') : String(path)
      return pathString.includes('wikiData.ts') || pathString.includes('props.ts')
    })

    vi.spyOn(PropertiesFile, 'readFileOnly').mockImplementation((path: any) => {
      const pathString = Array.isArray(path) ? path.join('/') : String(path)
      if (pathString.includes('wikiData.ts')) {
        return mockWikiDataContent
      }
      if (pathString.includes('props.ts')) {
        return mockPropsContent
      }
      return undefined
    })

    const item = new TestDesignWikiStormItem('@dxtmisha/d1', ['src', 'components', 'Ui'], { dir: 'Window' } as any)
    const data = await item.testGetData()

    expect(data).toBeDefined()
    expect(data?.component).toBe('Window')
    expect(data?.props).toHaveLength(2)
    expect(data?.props[0]).toEqual({ name: 'adaptive', type: 'string', option: ['menu', 'modal'] })
    expect(data?.props[1]).toEqual({ name: 'dense', type: 'boolean' })
    expect(data?.slots).toHaveLength(1)
    expect(data?.slots[0].name).toBe('control')
    expect(data?.events).toHaveLength(2)
    expect(data?.events[0].name).toBe('load')
    expect(data?.defaults).toEqual({ iconClose: 'close', width: 'md', dense: false })

    const slots = await item.getSlots()
    expect(slots).toBeDefined()
    expect(slots?.[0].name).toBe('control')
    expect(slots?.[0]['vue-properties']?.[0].type).toBe('WindowControlItem')

    const events = await item.getEvents()
    expect(events).toBeDefined()
    expect(events?.[0].name).toBe('load')
    expect(events?.[0].type).toBe('(image: ImageEventData) => void')
    expect(events?.[1].name).toBe('update:open')
    expect(events?.[1].type).toBe('(value: boolean) => void')
  })

  it('parses all files in src/wiki and handles StorybookControl and StorybookCategory enums', async () => {
    const mockWikiStyleContent = `
export const wikiStyle = {
  adaptive: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      description: {
        en: 'Controls adaptive display behavior',
        ru: 'Управляет адаптивным поведением'
      }
    }
  }
}
`

    vi.spyOn(PropertiesFile, 'is').mockImplementation((path: any) => {
      const pathString = Array.isArray(path) ? path.join('/') : String(path)
      return pathString.includes('wiki')
    })

    vi.spyOn(PropertiesFile, 'readDirRecursive').mockImplementation((path: any) => {
      const pathString = Array.isArray(path) ? path.join('/') : String(path)
      if (pathString.includes('wiki')) {
        return ['wikiStyle.ts']
      }
      return []
    })

    vi.spyOn(PropertiesFile, 'readFileOnly').mockImplementation((path: any) => {
      const pathString = Array.isArray(path) ? path.join('/') : String(path)
      if (pathString.includes('wikiStyle.ts')) {
        return mockWikiStyleContent
      }
      return undefined
    })

    const item = new TestDesignWikiStormItem('@dxtmisha/c3', ['src', 'components', 'Ui'], { dir: 'Window' } as any)
    const wikiDesign = (item as any).getWikiDesign()

    expect(wikiDesign).toBeDefined()
    expect(wikiDesign.adaptive).toBeDefined()
    expect(wikiDesign.adaptive.type).toBe('select')
    expect(wikiDesign.adaptive.options.category).toBe('Styles')
    expect(wikiDesign.adaptive.options.description.en).toBe('Controls adaptive display behavior')
  })
})


