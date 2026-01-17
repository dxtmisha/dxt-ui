import type { LibraryComponentItem } from '../../types/libraryTypes'
import { PluginData } from './PluginData'

/**
 * Class for connecting components.
 *
 * Класс для подключения компонентов.
 */
export class PluginComponents {
  /**
   * Constructor
   * @param id file identification / идентификация файла
   * @param code file content / содержимое файла
   * @param pluginData plugin data / данные плагина
   */
  constructor(
    protected readonly id: string,
    protected readonly code: string,
    protected readonly pluginData: PluginData
  ) {
  }

  /**
   * Initializes the data.
   *
   * Инициализирует данные.
   */
  init(): string {
    if (this.pluginData.hasComponent(this.code)) {
      const list = this.pluginData.getComponents(this.code)

      if (list) {
        let code = this.getCode()

        list.forEach((component) => {
          if (this.isImport(component)) {
            code = this.importComponent(code, component)
          }
        })

        return code
      }
    }

    return this.code
  }

  /**
   * Checks if the component was connected.
   *
   * Проверяет, был ли подключен компонент.
   * @param item data on the component / данные по компоненту
   */
  protected isImport(item: LibraryComponentItem): boolean {
    return this.code.includes(item.path)
  }

  /**
   * Checks if there is a script element.
   *
   * Проверяет, есть ли элемент script.
   */
  protected isScript(): boolean {
    return Boolean(this.code.match(/<script[^>]*setup/))
  }

  /**
   * Returns the file code, adding a script if it’s not there.
   *
   * Возвращает код файла, добавляя script, если его нет.
   */
  protected getCode(): string {
    if (this.isScript()) {
      return this.code
    }

    return `<script setup></script>${this.code}`
  }

  /**
   * Component connection.
   *
   * Подключение компонента.
   * @param code file content / содержимое файла
   * @param item data on the component / данные по компоненту
   */
  protected importComponent(
    code: string,
    item: LibraryComponentItem
  ): string {
    return code.replace(
      /(<script[^\r\n]+)/,
      `$1\r\nimport {${item.code}} from'${item.importPath}';`
    )
  }
}
