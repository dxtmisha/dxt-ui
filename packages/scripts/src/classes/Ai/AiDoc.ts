import { ServerStorage } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { GitRead } from '../Git/GitRead'
import { AiDocType } from './AiDocType'

/**
 * Class for generating AI documentation.
 * It manages the process of reading directories, fetching files, and
 * delegating the documentation generation to specific processors.
 *
 * Класс для генерации AI-документации.
 * Управляет процессом чтения директорий, получения файлов и делегирования
 * генерации документации специализированным процессорам.
 */
export class AiDoc {
  /**
   * Constructor for AiDoc. Sets error status config for ServerStorage.
   *
   * Конструктор для AiDoc. Устанавливает конфигурацию статуса ошибок для ServerStorage.
   */
  constructor() {
    ServerStorage.setErrorStatus(true)
  }

  /**
   * Main method to generate documentation for configured directories.
   *
   * Основной метод для генерации документации по настроенным директориям.
   * @returns promise that resolves when generation is complete / промис, завершающийся по окончании генерации
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
   * Process a specific directory, generating documentation for its files.
   *
   * Обрабатывает конкретную директорию, генерируя документацию для её файлов.
   * @param dir directory path / путь к директории
   * @returns promise that resolves when processing is complete / промис, завершающийся по окончании обработки
   */
  async makeDirectory(dir: string) {
    console.log('')
    console.log(`Dir: ${dir}...`)

    for (const item of this.getListByDirectory(dir)) {
      try {
        await AiDocType.make(item)
      } catch (e) {
        console.error(`Error processing file ${item}:`, e)
        process.exit(602)
      }
    }
  }

  /**
   * Get filtered list of files in a directory via Git tracker.
   *
   * Получает отфильтрованный список файлов в директории через Git трекер.
   * @param dir directory path / путь к директории
   * @returns list of file paths / список путей к файлам
   */
  protected getListByDirectory(dir: string) {
    return GitRead.filterByDirectory(
      GitRead.getListByDirectory(dir)
    )
  }
}
