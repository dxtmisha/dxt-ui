// export:none

import { isFilled } from '@dxtmisha/functional-basic'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { PropertiesCache } from '../Properties/PropertiesCache'
import { DesignConstructor } from './DesignConstructor'

import { UI_DIR_CONSTRUCTOR, UI_DIR_IN, UI_DIRS_LIBRARY, UI_FILE_STYLE_SCSS } from '../../config'

/**
 * Class for managing design constructors.
 *
 * Класс для управления конструкторами дизайна.
 */
export class DesignConstructors {
  /**
   * Constructor
   * @param name component name/ название компонента
   */
  constructor(
    protected readonly name?: string
  ) {
  }

  /**
   * Starts the process of creating or updating constructors.
   *
   * Запускает процесс создания или обновления конструкторов.
   */
  make(): void {
    PropertiesCache.clear()

    if (isFilled(this.name)) {
      new DesignConstructor(this.name).make()
    } else {
      this.getComponents()
        .forEach((component) => {
          console.log(`Constructor update: ${component}`)
          new DesignConstructor(component).make()
        })
    }

    this.makeStyle()
  }

  /**
   * Returns a list of components.
   *
   * Возвращает список компонентов.
   */
  getComponents(): string[] {
    return PropertiesFile.readDir(this.getDir())
  }

  /**
   * Returns a list of component styles.
   *
   * Возвращает список стилей компонентов.
   */
  getComponentsStyle(): string[] {
    const list: string[] = []

    this.getComponents()
      .forEach((component) => {
        const pathComponent = [...this.getDir(), component, UI_FILE_STYLE_SCSS]
        const style = PropertiesFile.readFileOnly(pathComponent)

        if (style) {
          list.push(
            style
              .replace(/@use[^;]+;/ig, '')
              .replace(/(@include )([^. ;]+)\.(mixin[^. ;]+;)/, '$1$3')
              .trim()
          )
        }
      })

    return list
  }

  /**
   * Returns the directory path for constructors.
   *
   * Возвращает путь к директории конструкторов.
   */
  protected getDir(): string[] {
    return [
      PropertiesFile.getRoot(),
      UI_DIR_IN,
      UI_DIR_CONSTRUCTOR
    ]
  }

  /**
   * Generates a common style file.
   *
   * Генерирует общий файл стилей.
   */
  protected makeStyle(): void {
    const path: string[] = [...UI_DIRS_LIBRARY, UI_FILE_STYLE_SCSS]
    const styles = this.getComponentsStyle()

    PropertiesFile.writeByPath(path, [
      '@use "@dxtmisha/styles/properties" as ui;',
      ...styles
    ].join('\r\n\r\n'))
  }
}
