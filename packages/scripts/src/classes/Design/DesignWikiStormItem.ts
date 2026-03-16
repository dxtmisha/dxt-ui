import { toCamelCaseFirst } from '@dxtmisha/functional'
import { type WikiDataItem, WikiStorybook, WikiStorybookProp } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import type { LibraryData } from '../../types/libraryTypes'
import type { WebTypesAttributeItem, WebTypesAttributes, WebTypesTagItem } from '../../types/webTypes'

/**
 * Resolver for extracting and formatting IDE metadata for a specific component.
 * It coordinates the transformation of Storybook-specific wiki data into JetBrains Web-Types tag and attribute definitions.
 *
 * Резолвер для извлечения и форматирования метаданных IDE для конкретного компонента.
 * Координирует преобразование данных вики для Storybook в определения тегов и атрибутов JetBrains Web-Types.
 */
export class DesignWikiStormItem {
  protected wiki?: WikiStorybook

  /**
   * Constructor for DesignWikiStormItem.
   *
   * Конструктор для DesignWikiStormItem.
   * @param project name of the project for module mapping / имя проекта для маппинга модулей
   * @param path array of directory path segments to the component / массив сегментов пути к директории компонента
   * @param data component metadata from the library / метаданные компонента из библиотеки
   */
  constructor(
    protected readonly project: string,
    protected readonly path: string[],
    protected readonly data: LibraryData
  ) {
  }

  /**
   * Returns the tag definition for web-types.
   *
   * Возвращает определение тега для web-types.
   */
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

  /**
   * Returns the attribute definition.
   *
   * Возвращает определение атрибута.
   * @param item prop item / элемент свойства
   */
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

  /**
   * Returns a list of attributes.
   *
   * Возвращает список атрибутов.
   */
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

  /**
   * Returns the directory name.
   *
   * Возвращает имя директории.
   */
  getDirName() {
    return this.data.dir
  }

  /**
   * Initializes the class.
   *
   * Инициализирует класс.
   */
  async init(): Promise<this> {
    this.wiki = await this.initWiki()
    return this
  }

  /**
   * Gets data from wikiData.ts.
   *
   * Получает данные из wikiData.ts.
   */
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

  /**
   * Returns the list of directories.
   *
   * Возвращает список директорий.
   */
  protected getDirs(): string[] {
    return [
      '.',
      ...this.path,
      this.getDirName()
    ]
  }

  /**
   * Returns the full path to the file.
   *
   * Возвращает полный путь к файлу.
   * @param paths path segments / сегменты пути
   */
  protected getPaths(paths: string[]): string[] {
    return [
      ...this.getDirs(),
      ...paths
    ]
  }

  /**
   * Initializes the wiki object.
   *
   * Инициализирует объект wiki.
   */
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
