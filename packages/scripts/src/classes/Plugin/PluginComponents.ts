import { PluginData } from './PluginData'
import type { PluginComponentItem } from '../../types/pluginTypes'

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
        const code = this.getCode()
        const imports = list.map(item => this.importComponent(item)).join('\r\n')

        return this.addImportCode(code, imports)
      }
    }

    return this.code
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
   * Returns the path to the component.
   *
   * Возвращает путь к компоненту.
   * @param item component data / данные компонента
   */
  protected getPath(item: PluginComponentItem): string {
    return `${this.pluginData.getDesign()}/${item.name}`
  }

  /**
   * Adds import code to the script.
   *
   * Добавляет код импорта в скрипт.
   * @param code file content / содержимое файла
   * @param imports import code / код импорта
   */
  protected addImportCode(
    code: string,
    imports: string
  ): string {
    return code.replace(/(<script[^\r\n]+)/, `$1\r\n${imports}`)
  }

  /**
   * Generates the import string for a component.
   *
   * Генерирует строку импорта для компонента.
   * @param item component data / данные компонента
   */
  protected importComponent(
    item: PluginComponentItem
  ): string {
    return `import { ${item.name} } from'${this.getPath(item)}';`
  }
}
