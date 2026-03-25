// export:none

import { toCamelCaseFirst, toKebabCase } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { PropertiesCache } from '../Properties/PropertiesCache'
import { DesignComponent } from './DesignComponent'
import { LibraryItems } from '../Library/LibraryItems'
import { Styles } from '../Styles/Styles'

import { DesignWiki } from './DesignWiki'

import { LibraryAiWiki } from '../Library/LibraryAiWiki'
import { LibraryMedia } from '../Library/LibraryMedia'
import { LibraryList } from '../Library/LibraryList'
import { LibraryPlugin } from '../Library/LibraryPlugin'
import { LibraryTypes } from '../Library/LibraryTypes'

import { UI_FILE_PACKAGE } from '../../config'

/**
 * Orchestrator class for managing and initializing the Design System UI.
 * It coordinates the generation of styles, documentation, component structures, and library-level exports (media, plugins, types).
 *
 * Класс-оркестратор для управления и инициализации пользовательского интерфейса дизайн-системы.
 * Координирует генерацию стилей, документации, структур компонентов и экспортов на уровне библиотеки (медиа, плагины, типы).
 */
export class DesignUi {
  protected readonly components: LibraryItems

  /**
   * Constructor for DesignUi.
   *
   * Конструктор для DesignUi.
   * @param name specific component name to initialize, or empty for all / название конкретного компонента для инициализации или пусто для всех
   */
  constructor(
    protected readonly name: string = ''
  ) {
    this.components = new LibraryItems()
  }

  /**
   * Returns the component name by its name.
   *
   * Возвращает название компонента по имени.
   */
  protected get component(): string {
    return toKebabCase(this.name).trim()
  }

  /**
   * Initialization of the component.
   *
   * Инициализация компоненты.
   */
  make(): void {
    PropertiesCache.clear()

    new Styles().make()
    new DesignWiki().make()

    this.makeConstructorComponent()
    this.makePackage()

    new LibraryMedia(this.components).make()
    new LibraryList(this.components).make()
    new LibraryPlugin(this.components).make()
    new LibraryAiWiki(this.components).make()
    new LibraryTypes(this.components).make()
  }

  /**
   * Creates or updates the list of components.
   *
   * Создает или обновляет список компонентов.
   */
  protected makeConstructorComponent(): this {
    const componentDef = this.component

    if (componentDef !== '') {
      new DesignComponent(componentDef).make()
    } else {
      this.components.getComponentList()
        .forEach((component) => {
          console.log(`Component update: ${component.alias}`)

          new DesignComponent(component.name).make()
        })
    }

    return this
  }

  /**
   * Updates the package.json file by adding export paths for UI styles and saves the changes.
   *
   * Обновляет файл package.json, добавляя пути экспорта для стилей UI, и сохраняет изменения.
   */
  protected makePackage(): void {
    const packageJson = getPackageJson()
    const projectName = toCamelCaseFirst(PropertiesConfig.getProjectName())

    if (packageJson?.exports) {
      packageJson.exports['.'] = {
        types: './dist/library/types.d.ts',
        default: './dist/types.js'
      }
      packageJson.exports['./plugin'] = {
        types: './dist/library/plugin.d.ts',
        default: './dist/plugin.js'
      }
      packageJson.exports['./media'] = {
        types: './dist/library/media.d.ts',
        default: './dist/media.js'
      }
      packageJson.exports['./style.css'] = './dist/style.css'
      packageJson.exports['./style/ui.scss'] = `./src/styles/${projectName}/main.scss`
      packageJson.exports['./style/ui-properties.scss'] = `./src/styles/${projectName}/style.scss`
      packageJson.exports['./types.d.ts'] = './dist/library/types.d.ts'
      packageJson['web-types'] = './dist/web-types.json'

      PropertiesFile.writeByPath(UI_FILE_PACKAGE, packageJson)
    }
  }
}
