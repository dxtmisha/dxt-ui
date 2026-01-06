import { PropertiesConfig } from '../Properties/PropertiesConfig'

import type { AiDocTypeItem } from '../../types/aiTypes'
import type { GitFileItem } from '../../types/gitTypes'

import { aiDocTypes } from '../../media/ai/ai-doc-types'

/**
 * Class for managing AI documentation types.
 *
 * Класс для управления типами документации ИИ.
 */
export class AiDocType {
  /** List of available documentation types / Список доступных типов документации */
  protected static types = [...aiDocTypes]

  /**
   * Adds a new documentation type to the list.
   *
   * Добавляет новый тип документации в список.
   * @param type documentation type item / элемент типа документации
   */
  static add(type: AiDocTypeItem) {
    this.types.unshift(type)
  }

  /**
   * Generates documentation for a file item.
   *
   * Генерирует документацию для элемента файла.
   * @param item git file item / элемент файла git
   */
  static async make(item: GitFileItem) {
    const path = PropertiesConfig.getAiDocStorybookPath()

    for (const docType of aiDocTypes) {
      if (docType.check(item)) {
        const docItem = new docType.item(path, item)
        await docItem.make()

        break
      }
    }
  }
}
