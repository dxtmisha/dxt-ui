import { PropertiesFile } from '../Properties/PropertiesFile'

const TEMPORARY_DIR = './ai-tmp'

/**
 * ApiTmp
 */
export class ApiTmp {
  protected idFile = 1

  /**
   * Generates a unique file path for the temporary prompt.
   *
   * Генерирует уникальный путь к файлу для временного промпта.
   */
  protected getFileName(): string {
    return `${TEMPORARY_DIR}/Prompt-${this.idFile++}.txt`
  }

  /**
   * Creates a temporary file with the prompt content and returns the path formatted for the CLI.
   *
   * Создает временный файл с содержимым промпта и возвращает путь, отформатированный для CLI.
   * @param content Prompt content / Содержимое промпта
   * @returns Formatted file path (e.g., @./ai-tmp/Prompt-1.txt) / Отформатированный путь к файлу
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
