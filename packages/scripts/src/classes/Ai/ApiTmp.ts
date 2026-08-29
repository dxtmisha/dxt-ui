import { PropertiesFile } from '../Properties/PropertiesFile'

/** Temporary directory path for prompt files / Путь к временной директории для файлов промпта */
const TEMPORARY_DIR = './ai-tmp'

/**
 * Manager for temporary prompt files used during CLI AI executions.
 * Handles unique file creation and cleanup of temporary directories.
 *
 * Менеджер временных файлов промптов, используемых при выполнении CLI AI.
 * Обеспечивает создание уникальных файлов и очистку временных директорий.
 */
export class ApiTmp {
  /** File counter for generating unique temporary filenames / Счетчик файлов для генерации уникальных временных имен */
  protected idFile = 1

  /**
   * Generates a unique file path for the temporary prompt.
   *
   * Генерирует уникальный путь к файлу для временного промпта.
   * @returns unique temporary file path / уникальный путь к временному файлу
   */
  protected getFileName(): string {
    return `${TEMPORARY_DIR}/Prompt-${this.idFile++}.txt`
  }

  /**
   * Creates a temporary file with the prompt content and returns the path formatted for the CLI.
   *
   * Создает временный файл с содержимым промпта и возвращает путь, отформатированный для CLI.
   * @param content prompt content / содержимое промпта
   * @returns formatted file path (e.g., @./ai-tmp/Prompt-1.txt) / отформатированный путь к файлу
   */
  createFile(content: string): string {
    const name = this.getFileName()

    PropertiesFile.writeByPath(name, content.trim())

    return `Please read the following file as it contains the prompt instructions: @${name}`
  }

  /**
   * Cleans up temporary files and directories.
   *
   * Очищает временные файлы и директории.
   */
  removeFile(): void {
    PropertiesFile.removeDir(TEMPORARY_DIR)
  }
}
