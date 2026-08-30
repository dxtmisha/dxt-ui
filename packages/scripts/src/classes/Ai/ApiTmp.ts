import { PropertiesFile } from '../Properties/PropertiesFile'

/** Temporary directory path for prompt files / Путь к временной директории для файлов промптов */
const TEMPORARY_DIR = './ai-tmp'

/**
 * Manager for temporary prompt files used during CLI AI executions.
 * Handles unique file creation and cleanup of files created by the instance.
 *
 * Менеджер временных файлов промптов, используемых при выполнении CLI ИИ.
 * Обеспечивает создание уникальных файлов и очистку файлов, созданных экземпляром.
 */
export class ApiTmp {
  /** Global file counter for generating unique temporary filenames across all instances / Глобальный счетчик файлов для генерации уникальных временных имен файлов во всех экземплярах */
  protected static idFileGlobal = 0

  /** List of temporary file paths created by this instance / Список путей временных файлов, созданных этим экземпляром */
  protected readonly createdFiles: string[] = []

  /**
   * Generates a unique file path for the temporary prompt.
   *
   * Генерирует уникальный путь к временному файлу для промпта.
   * @returns unique temporary file path / уникальный путь к временному файлу
   */
  protected getFileName(): string {
    ApiTmp.idFileGlobal += 1

    return `${TEMPORARY_DIR}/Prompt-${ApiTmp.idFileGlobal}.txt`
  }

  /**
   * Creates a temporary file with the prompt content and returns the path formatted for the CLI.
   *
   * Создает временный файл с содержимым промпта и возвращает путь, отформатированный для CLI.
   * @param content prompt content / содержимое промпта
   * @returns formatted file path (e.g., @./ai-tmp/Prompt-1.txt) / отформатированный путь к файлу (например, @./ai-tmp/Prompt-1.txt)
   */
  createFile(content: string): string {
    const name = this.getFileName()

    this.createdFiles.push(name)
    PropertiesFile.writeByPath(name, content.trim())

    return `Please read the following file as it contains the prompt instructions: @${name}`
  }

  /**
   * Cleans up temporary files created by this instance without touching files of concurrent instances.
   *
   * Очищает временные файлы, созданные этим экземпляром, не затрагивая файлы параллельных экземпляров.
   */
  removeFile(): void {
    for (const name of this.createdFiles) {
      PropertiesFile.removeFile(name)
    }

    this.createdFiles.length = 0
  }
}
