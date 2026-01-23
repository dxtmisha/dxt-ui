import { PluginCode } from './PluginCode'
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
   * @param code file content / содержимое файла
   * @param pluginData plugin data / данные плагина
   */
  constructor(
    protected readonly code: PluginCode,
    protected readonly pluginData: PluginData
  ) {
  }

  /**
   * Initializes the data.
   *
   * Инициализирует данные.
   */
  make(): void {
    if (
      this.code.isVue()
      && this.pluginData.hasComponent(this.code.getCode())
    ) {
      const list = this.pluginData.getComponents(this.code.getCode())

      if (list) {
        const imports = list.map(item => this.importComponent(item)).join('\r\n')

        this.code.addAfterScript(imports)
      }
    }
  }

  /**
   * Returns the path to the component.
   *
   * Возвращает путь к компоненту.
   * @param item component data / данные компонента
   */
  protected getPath(item: PluginComponentItem): string {
    return `${this.pluginData.getPackageName()}/${item.name}`
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
