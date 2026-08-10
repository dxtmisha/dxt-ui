import { PropertiesFile } from '../Properties/PropertiesFile'

import {
  UI_FILE_AI_MCP
} from '../../config'

/**
 * Class representing an MCP item in the AI prompt generation process.
 * Handles reading `ai-mcp-resources.json` configuration files for a package directory.
 *
 * Класс, представляющий элемент MCP в процессе создания промпта для ИИ.
 * Управляет чтением конфигурационных файлов `ai-mcp-resources.json` для директории пакета.
 */
export class LibraryAiMcpItem {
  /**
   * Constructor for LibraryAiMcpItem.
   *
   * Конструктор для LibraryAiMcpItem.
   * @param dir Path segments to the directory / Сегменты пути к директории
   */
  constructor(
    protected readonly dir: string[] = []
  ) { }

  /**
   * Checks if the ai-mcp-resources.json file exists in the directory.
   *
   * Проверяет, существует ли файл ai-mcp-resources.json в директории.
   * @returns true if ai-mcp-resources.json file exists / true, если файл ai-mcp-resources.json существует
   */
  isMcp(): boolean {
    return PropertiesFile.is(this.getPath(UI_FILE_AI_MCP))
  }

  /**
   * Reads and returns the list of MCP resource definitions from ai-mcp-resources.json.
   *
   * Читает и возвращает список определений ресурсов MCP из ai-mcp-resources.json.
   * @returns list of MCP resource items or undefined / список элементов ресурсов MCP или undefined
   */
  make(): Record<string, any>[] | undefined {
    if (this.isMcp()) {
      const data = PropertiesFile.readFile<Record<string, any>[]>(this.getPath(UI_FILE_AI_MCP))

      if (
        Array.isArray(data)
        && data.length > 0
      ) {
        return data
      }
    }

    return undefined
  }

  /**
   * Constructs a full path for a file within the item's directory.
   *
   * Создает полный путь к файлу внутри директории элемента.
   * @param dirFile File name / Имя файла
   * @returns path segments / сегменты пути
   * @protected
   */
  protected getPath(dirFile: string): string[] {
    return [...this.dir, dirFile]
  }
}
