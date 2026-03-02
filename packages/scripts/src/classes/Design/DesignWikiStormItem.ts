import { toCamelCaseFirst } from '@dxtmisha/functional'
import { type WikiDataItem, WikiStorybook, WikiStorybookProp } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import type { LibraryData } from '../../types/libraryTypes'
import type { WebTypesAttributeItem, WebTypesAttributes, WebTypesTagItem } from '../../types/webTypes'

export class DesignWikiStormItem {
  protected wiki?: WikiStorybook

  constructor(
    protected readonly project: string,
    protected readonly path: string[],
    protected readonly data: LibraryData
  ) {
  }

  get(): WebTypesTagItem | undefined {
    if (this.wiki) {
      const name = `${toCamelCaseFirst(PropertiesConfig.getDesignName())}${this.wiki.getName()}`

      return {
        name,
        description: this.wiki.getDescription(),
        source: {
          module: `${this.project}/${name}`,
          symbol: name
        },
        attributes: this.getAttributes()
      }
    }

    return undefined
  }

  getAttribute(item: WikiStorybookProp): WebTypesAttributeItem {
    return {
      name: item.getName(),
      description: item.getDescription(),
      default: item.getDefaultValue(),
      value: {
        kind: 'expression',
        type: item.getType()
      }
    }
  }

  getAttributes(): WebTypesAttributes {
    const attributes: WebTypesAttributes = []

    if (this.wiki) {
      this.wiki.getWikiObject()
        .forEach(
          props => attributes.push(this.getAttribute(props))
        )
    }

    return attributes
  }

  getDirName() {
    return this.data.dir
  }

  async init(): Promise<this> {
    this.wiki = await this.initWiki()
    return this
  }

  protected async getData(): Promise<WikiDataItem | undefined> {
    const filePath = this.getPaths(['wikiData.ts'])

    if (PropertiesFile.is(filePath)) {
      const wiki: Record<string, any> = await import(filePath.join('/'))
      const data: WikiDataItem | undefined = Object.values(wiki).find(item => 'component' in item)

      if (data) {
        return data
      }
    }

    return undefined
  }

  protected getDirs(): string[] {
    return [
      '.',
      ...this.path,
      this.getDirName()
    ]
  }

  protected getPaths(paths: string[]): string[] {
    return [
      ...this.getDirs(),
      ...paths
    ]
  }

  protected async initWiki(): Promise<WikiStorybook | undefined> {
    const data = await this.getData()

    if (data) {
      return new WikiStorybook(
        data.component,
        data.props,
        data.defaults,
        data.wikiDesign,
        wiki,
        wikiDescriptions
      )
    }

    return undefined
  }
}
