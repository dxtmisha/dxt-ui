import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { GitRead } from '../Git/GitRead'
import { AiDocItem } from './AiDocItem'

import type { GitFileItem } from '../../types/gitTypes'

/**
 * Class for generating AI documentation.
 *
 * Класс для генерации AI документации.
 */
export class AiDoc {
  /**
   * Main method to generate documentation.
   *
   * Основной метод для генерации документации.
   */
  async make() {
    const dirs = PropertiesConfig.getAiDocDirectory()
    const path = PropertiesConfig.getAiDocStorybookPath()

    console.log(`AI documentation: ${path}`)

    if (
      dirs
      && dirs.length
    ) {
      for (const dir of dirs) {
        await this.makeDirectory(dir)
      }
    }
  }

  /**
   * Process a specific directory.
   *
   * Обрабатывает конкретную директорию.
   * @param dir - directory path / путь к директории
   */
  async makeDirectory(dir: string) {
    console.log('')
    console.log(`Dir: ${dir}...`)

    for (const item of this.getListByDirectory(dir)) {
      await this.makeItem(item)
    }
  }

  /**
   * Get list of files in a directory.
   *
   * Получает список файлов в директории.
   * @param dir - directory path / путь к директории
   */
  protected getListByDirectory(dir: string) {
    return GitRead.filterByDirectory(
      GitRead.getListByDirectory(dir)
    )
  }

  /**
   * Process a specific item.
   *
   * Обрабатывает конкретный элемент.
   * @param item - file item / элемент файла
   */
  protected async makeItem(item: GitFileItem) {
    const path = PropertiesConfig.getAiDocStorybookPath()

    console.warn('item.path:', item.path)

    // const docItem = new AiDocItem(path, item)
    // await docItem.make()
  }
}
