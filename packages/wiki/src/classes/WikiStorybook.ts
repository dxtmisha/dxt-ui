import { Geo, isObjectNotArray, toCamelCase } from '@dxt-ui/functional'

import { WikiStorybookItem } from './WikiStorybookItem'

import {
  type StorybookArgs,
  type StorybookArgsToDescription,
  type StorybookArgsToItem,
  type StorybookArgsToList,
  type StorybookComponentsDescription,
  type StorybookComponentsDescriptionItem,
  type StorybookComponentsDescriptionStory,
  type StorybookProp,
  type StorybookProps
} from '../types/storybookTypes'

/**
 * Class representing a Storybook wiki
 *
 * Класс, представляющий wiki для Storybook
 */
export class WikiStorybook {
  protected list: WikiStorybookItem[]

  /**
   * Creates a new instance of WikiStorybook
   *
   * Создает новый экземпляр WikiStorybook
   * @param component - Component name/ Название компонента
   * @param props - Properties for the component/ свойства для компонента
   * @param defaults - Default values for the component/ значения по умолчанию для компонента
   * @param wikiDesign - Design values for the wiki/ значения дизайна для wiki
   * @param wikiBasic - Basic values for the wiki/ базовые значения для wiki
   * @param wikiDescriptions - Component descriptions for the wiki/ описания компонентов для wiki
   */
  constructor(
    protected readonly component: string,
    protected readonly props: StorybookProps,
    protected readonly defaults: Record<string, any>,
    protected readonly wikiDesign: StorybookArgsToList,
    protected readonly wikiBasic: StorybookArgsToList,
    protected readonly wikiDescriptions: StorybookComponentsDescription
  ) {
    this.list = this.initList()
  }

  /**
   * Returns the name of the component
   *
   * Возвращает имя компонента
   */
  getName(): string {
    return this.component
  }

  /**
   * Returns the properties wiki for the component
   *
   * Возвращает wiki свойств для компонента
   * @return The properties wiki for the component/ wiki свойств для компонента
   */
  getWiki(): StorybookArgs {
    return this.initPropsWiki()
  }

  /**
   * Returns the description of the component from the wiki
   *
   * Возвращает описание компонента из wiki
   * @return The description of the component/ описание компонента
   */
  getDescription(): string {
    return this.toDescriptionText(this.getDescriptionItem()?.description)
  }

  /**
   * Returns the values of the wiki items
   *
   * Возвращает значения элементов wiki
   * @return An object containing the values of the wiki items/ объект, содержащий значения элементов wiki
   */
  getValues(): Record<string, any> {
    const values: Record<string, any> = {}

    this.list.forEach((item) => {
      const name = item.getName()
      const value = item.getValue()

      if (value !== undefined) {
        values[name] = value
      }
    })

    return values
  }

  /**
   * Returns a Storybook item by its ID
   *
   * Возвращает элемент Storybook по его ID
   * @param id - The ID of the story/ ID истории
   */
  getStoryItem(id: string): StorybookComponentsDescriptionStory | undefined {
    const item = this.getDescriptionItem()

    if (
      item
      && item.stories
    ) {
      return item.stories.find(story => story.id === id)
    }

    return undefined
  }

  /**
   * Returns the name of the story by its ID
   *
   * Возвращает имя истории по ее ID
   * @param id - The ID of the story/ ID истории
   */
  getStoryName(id: string): string | undefined {
    return this.toDescriptionText(
      this.getStoryItem(id)?.name
    )
  }

  /**
   * Returns a wiki item by its name
   *
   * Возвращает элемент wiki по его имени
   * @param name - The name of the wiki item/ имя элемента wiki
   */
  protected getWikiItem(name: string): StorybookArgsToItem | undefined {
    if (
      name in this.wikiBasic
      || name in this.wikiDesign
    ) {
      return {
        ...(this.wikiBasic?.[name] ?? {}),
        ...(this.wikiDesign?.[name] ?? {})
      }
    }

    return undefined
  }

  /**
   * Returns the description item for the component
   *
   * Возвращает элемент описания для компонента
   * @return The description item for the component/ элемент описания для компонента
   */
  private getDescriptionItem(): StorybookComponentsDescriptionItem | undefined {
    return this.wikiDescriptions.find(item => item.name === this.component)
  }

  /**
   * Adds a default value to the wiki item and a list of options
   *
   * Добавляет значение по умолчанию к элементу wiki и список опций
   * @param item - The item to convert/ элемент для преобразования
   * @param wiki - The wiki item to which the default value and options will be added/
   * элемент wiki, к которому будут добавлены значение по умолчанию и опции
   */
  protected toWikiItemChanged(
    item: StorybookProp,
    wiki: StorybookArgsToItem
  ): StorybookArgsToItem {
    return {
      ...wiki,
      options: {
        ...wiki.options,
        type: wiki.options?.type ?? item.type,
        defaultValue: this.defaults[item.name],
        options: item.option ?? wiki.options?.options ?? undefined
      }
    }
  }

  /**
   * Converts the descriptions to text format
   *
   * Преобразует описания в текстовый формат
   * @param descriptions - The descriptions to convert/ Описания для преобразования
   */
  private toDescriptionText(descriptions?: StorybookArgsToDescription): string {
    if (descriptions) {
      const language = Geo.getLanguage()

      if (isObjectNotArray(descriptions)) {
        return descriptions?.[language]
          ?? Object.values(descriptions)?.[0]
      }

      return descriptions
    }

    return ''
  }

  /**
   * Initializes the list of wiki items for the component
   *
   * Инициализирует список элементов wiki для компонента
   * @return The list of wiki items for the component/ список элементов wiki для компонента
   */
  initList(): WikiStorybookItem[] {
    const list: WikiStorybookItem[] = []

    this.props.forEach((item) => {
      const nameByComponent = `${toCamelCase(this.component)}.${item.name}`
      const wiki = this.getWikiItem(nameByComponent) ?? this.getWikiItem(item.name)

      if (wiki) {
        list.push(
          new WikiStorybookItem(
            item.name,
            this.toWikiItemChanged(item, wiki)
          )
        )
      }
    })

    return list
  }

  /**
   * Initializes the properties list for the component
   *
   * Инициализирует список свойств для компонента
   * @return The list of properties for the component/ список свойств для компонента
   */
  initPropsWiki(): StorybookArgs {
    const list: StorybookArgs = {}

    this.list.forEach((item) => {
      list[item.getName()] = item.to()
    })

    return list
  }
}
