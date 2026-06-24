import { toCamelCaseFirst } from '@dxtmisha/functional'
import { type WikiDataItem, WikiStorybook, WikiStorybookProp } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import type { LibraryData } from '../../types/libraryTypes'
import type { WebTypesVueComponentItem, WebTypesPropItem, WebTypesSlots, WebTypesEventItem, WebTypesProperty } from '../../types/webTypes'
import { forEach } from '@dxtmisha/functional-basic'

/**
 * List of basic types that do not need to be wrapped in quotes for web-types/
 * Список базовых типов, которые не нужно оборачивать в кавычки для web-types
 */
const BASE_TYPES = /^(boolean|number|string|null|any|void|object|unknown|never)$/

/**
 * Resolver for extracting and formatting IDE metadata for a specific component.
 * It coordinates the transformation of Storybook-specific wiki data into JetBrains Web-Types tag and attribute definitions.
 *
 * Резолвер для извлечения и форматирования метаданных IDE для конкретного компонента.
 * Координирует преобразование данных вики для Storybook в определения тегов и атрибутов JetBrains Web-Types.
 */
export class DesignWikiStormItem {
  protected wiki?: WikiStorybook
  protected dataComponent?: WikiDataItem

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
  async get(): Promise<WebTypesVueComponentItem | undefined> {
    if (this.wiki) {
      const name = `${toCamelCaseFirst(PropertiesConfig.getDesignName())}${this.wiki.getName()}`

      const component: WebTypesVueComponentItem = {
        name,
        description: this.wiki.getDescription(),
        source: {
          module: `${this.project}/${name}`,
          symbol: name
        },
        props: this.getProps()
      }

      const slots = await this.getSlots()

      if (slots) {
        component.slots = slots
      }

      const events = await this.getEvents()

      if (events && events.length > 0) {
        component.js = {
          events
        }
      }

      return component
    }

    return undefined
  }

  /**
   * Returns the prop definition.
   *
   * Возвращает определение свойства.
   * @param item prop item / элемент свойства
   */
  getProp(item: WikiStorybookProp): WebTypesPropItem {
    const type = this.prepareType(item.getType())
    const cleaned = type ? this.cleanType(type) : undefined
    return {
      name: item.getName(),
      description: item.getDescription(),
      default: item.getDefaultValue() ?? undefined,
      type: cleaned
    }
  }

  /**
   * Returns a list of props.
   *
   * Возвращает список свойств.
   */
  getProps(): WebTypesPropItem[] {
    const props: WebTypesPropItem[] = []

    if (this.wiki) {
      this.wiki.getWikiObject()
        .forEach(
          item => props.push(this.getProp(item))
        )
    }

    return props
  }

  /**
   * Returns a list of slots.
   *
   * Возвращает список слотов.
   */
  async getSlots(): Promise<WebTypesSlots | undefined> {
    const data = await this.getData()

    if (data && data.slots) {
      const slots: WebTypesSlots = []

      data.slots.forEach(
        slot => {
          const vueProperties: WebTypesProperty[] = (slot.properties ?? []).map(p => ({
            name: p.name,
            type: p.type ? this.cleanType(p.type) : undefined,
            description: p.description
          }))

          slots.push({
            'name': slot.name,
            'description': slot.description,
            'vue-properties': vueProperties
          })
        }
      )

      return slots
    }

    return undefined
  }

  /**
   * Returns a list of events.
   *
   * Возвращает список событий.
   */
  async getEvents(): Promise<WebTypesEventItem[] | undefined> {
    const data = await this.getData()

    if (data && data.events) {
      const events: WebTypesEventItem[] = []

      data.events.forEach(
        event => {
          let typeString = '() => void'
          if (event.properties && event.properties.length > 0) {
            const args = event.properties
              .map(p => `${p.name}: ${p.type ? this.cleanType(p.type) : 'any'}`)
              .join(', ')
            typeString = `(${args}) => void`
          }

          events.push({
            name: event.name,
            description: event.description,
            type: typeString
          })
        }
      )

      return events
    }

    return undefined
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
    if (!this.dataComponent) {
      const filePath = this.getPaths(['wikiData.ts'])

      if (PropertiesFile.is(filePath)) {
        try {
          const wiki: Record<string, any> = await import(filePath.join('/'))
          this.dataComponent = Object.values(wiki).find(item => 'component' in item)
        } catch (error) {
          console.error(filePath, error)
        }
      }
    }

    return this.dataComponent
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
   * Formats a type string for web-types.
   *
   * Форматирует строку типа для web-types.
   * @param type original type string / исходная строка типа
   */
  protected prepareType(type?: string): string | undefined {
    if (type) {
      return forEach(
        type.split('|'),
        (item) => {
          const trimmed = item.trim()

          if (trimmed === 'undefined') {
            return undefined
          }

          if (BASE_TYPES.test(trimmed)) {
            return trimmed
          }

          return `'${trimmed}'`
        }
      )
        .join(' | ')
    }

    return type
  }

  /**
   * Cleans a type string by removing redundant parentheses, e.g., (CellClassesSub) | undefined -> CellClassesSub | undefined
   *
   * Очищает строку типа, удаляя лишние скобки, например: (CellClassesSub) | undefined -> CellClassesSub | undefined
   */
  protected cleanType(type: string): string {
    return type
      .replace(/^\(([^()]+)\)$/, '$1')
      .replace(/^\(([^()]+)\)\s*\|\s*undefined$/, '$1 | undefined')
      .trim()
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
