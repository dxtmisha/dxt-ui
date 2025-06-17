import { replaceRecursive } from '../../functions/replaceRecursive.ts'

import {
  type StorybookArgsItem,
  type StorybookArgsToDescription,
  type StorybookArgsToList,
  StorybookCategory, StorybookControl
} from '../../types/storybookTypes.ts'
import { Geo } from '../Geo.ts'
import { isArray } from '../../functions/isArray.ts'
import { isObjectNotArray } from '../../functions/isObjectNotArray.ts'

/**
 * Class representing a Storybook wiki
 *
 * Класс, представляющий wiki для Storybook
 */
export class WikiStorybook {
  protected readonly wiki: StorybookArgsToList

  /**
   * Creates a new instance of WikiStorybook
   *
   * Создает новый экземпляр WikiStorybook
   * @param design - Design name/ Название дизайна
   * @param wikiDesign - Design values for the wiki/ Значения дизайна для wiki
   * @param wikiBasic - Basic values for the wiki (optional)/ Базовые значения для wiki (необязательно)
   */
  constructor(
    protected readonly design: string,
    protected readonly wikiDesign: StorybookArgsToList,
    protected readonly wikiBasic?: StorybookArgsToList
  ) {
    this.wiki = this.initWiki()
  }

  /**
   * Initializes the wiki with the design and basic values
   *
   * Инициализирует wiki с дизайном и базовыми значениями
   */
  private initWiki(): StorybookArgsToList {
    if (this.wikiBasic) {
      return replaceRecursive(
        this.wikiDesign,
        this.wikiBasic ?? {}
      )
    }

    return this.wikiDesign
  }
}
