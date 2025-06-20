import { WikiStorybookItem } from './WikiStorybookItem'

import {
  type StorybookArgs,
  type StorybookArgsToItem,
  type StorybookArgsToList
} from '../../types/storybookTypes'

/**
 * Class representing a Storybook wiki
 *
 * Класс, представляющий wiki для Storybook
 */
export class WikiStorybook {
  /**
   * Creates a new instance of WikiStorybook
   *
   * Создает новый экземпляр WikiStorybook
   * @param component - Component name/ Название компонента
   * @param propsNames - Name of the props/ Название свойств
   * @param wikiDesign - Design values for the wiki/ Значения дизайна для wiki
   * @param wikiBasic - Basic values for the wiki/ Базовые значения для wiki
   */
  constructor(
    protected readonly component: string,
    protected readonly propsNames: string[],
    protected readonly wikiDesign: StorybookArgsToList,
    protected readonly wikiBasic: StorybookArgsToList
  ) {
  }

  /**
   * Returns the properties wiki for the component
   *
   * Возвращает wiki свойств для компонента
   * @return The properties wiki for the component/ Wiki свойств для компонента
   */
  getWiki(): StorybookArgs {
    return this.initPropsWiki()
  }

  /**
   * Returns a wiki item by its name
   *
   * Возвращает элемент wiki по его имени
   * @param name - The name of the wiki item/ Имя элемента wiki
   */
  protected getWikiItem(name: string): StorybookArgsToItem | undefined {
    return this.wikiDesign?.[name] ?? this.wikiBasic?.[name]
  }

  /**
   * Initializes the properties list for the component
   *
   * Инициализирует список свойств для компонента
   * @return The list of properties for the component/ Список свойств для компонента
   */
  initPropsWiki(): StorybookArgs {
    const list: StorybookArgs = {}

    this.propsNames.forEach((name) => {
      const nameByComponent = `${this.component}.${name}`
      const wiki = this.getWikiItem(nameByComponent) ?? this.getWikiItem(name)

      if (wiki) {
        list[name] = new WikiStorybookItem(wiki).to()
      }
    })

    return list
  }
}
