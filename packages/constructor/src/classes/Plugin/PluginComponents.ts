import { PluginCode } from './PluginCode'
import { PluginData } from './PluginData'

import type { PluginComponentItem } from '../../types/pluginTypes'

/**
 * Class for automatically injecting component imports into Vue SFC files.
 *
 * Класс для автоматического добавления импортов компонентов в файлы Vue SFC.
 */
export class PluginComponents {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param code file content / содержимое файла
   * @param pluginData plugin data / данные плагина
   */
  constructor(
    protected readonly code: PluginCode,
    protected readonly pluginData: PluginData
  ) {
  }

  /**
   * Scans the Vue file for used components and injects their import statements.
   *
   * Сканирует файл Vue на наличие используемых компонентов и добавляет их импорты.
   */
  make(): void {
    if (
      this.code.isVue()
      && this.pluginData.hasComponent(this.code.getCode())
    ) {
      const list = this.pluginData.getComponents(this.code.getCode())

      if (
        list
        && list.length > 0
      ) {
        const imports = list.map(item => this.importComponent(item)).join('\r\n')

        this.code.addAfterScript(imports)
      }
    }
  }

  /**
   * Returns the import path for the component.
   *
   * Возвращает путь импорта для компонента.
   * @param item component data / данные компонента
   * @returns component import path / путь импорта компонента
   */
  protected getPath(item: PluginComponentItem): string {
    return `${this.pluginData.getPackageName()}/${item.name}`
  }

  /**
   * Generates the ES module import string for a component.
   *
   * Генерирует строку ES-импорта для компонента.
   * @param item component data / данные компонента
   * @returns import statement string / строка выражения импорта
   */
  protected importComponent(
    item: PluginComponentItem
  ): string {
    return `import { ${item.name} } from'${this.getPath(item)}';`
  }
}
