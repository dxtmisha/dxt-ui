import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { GitRead } from '../Git/GitRead'
import { AiDocType } from './AiDocType'

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
      try {
        await AiDocType.make(item)
      } catch (e) {
        console.error(`Error processing file ${item}:`, e)
      }
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
}
