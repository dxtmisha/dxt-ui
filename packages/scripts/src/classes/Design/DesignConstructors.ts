// export:none

import { isFilled, toCamelCaseFirst } from '@dxtmisha/functional-basic'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { PropertiesCache } from '../Properties/PropertiesCache'
import { DesignConstructor } from './DesignConstructor'

import { UI_DIR_CONSTRUCTOR, UI_DIR_IN, UI_DIRS_LIBRARY, UI_FILE_STYLE_SCSS } from '../../config'

/**
 * Class for orchestrating the generation and update of multiple design constructors.
 * It manages the collective lifecycle of component constructors, including bulk updates and shared style generation.
 *
 * Класс для управления генерацией и обновлением нескольких конструкторов дизайна.
 * Управляет коллективным жизненным циклом конструкторов компонентов, включая массовые обновления и генерацию общих стилей.
 */
export class DesignConstructors {
  /**
   * Constructor for DesignConstructors.
   *
   * Конструктор для DesignConstructors.
   * @param name optional specific component name to process / необязательное имя конкретного компонента для обработки
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
  async make(): Promise<void> {
    PropertiesCache.clear()

    if (isFilled(this.name)) {
      await new DesignConstructor(this.name).make()
    } else {
      for (const component of this.getComponents()) {
        console.log(`Constructor update: ${component}`)
        await new DesignConstructor(component).make()
      }
    }

    this.makeStyle()
  }

  /**
   * Returns a list of components.
   *
   * Возвращает список компонентов.
   * @returns list of component names / список имен компонентов
   */
  getComponents(): string[] {
    return PropertiesFile.readDir(this.getDir())
  }

  /**
   * Returns a list of component styles.
   *
   * Возвращает список стилей компонентов.
   * @returns list of style import strings / список строк импорта стилей
   */
  getComponentsStyle(): string[] {
    const list: string[] = []

    this.getComponents()
      .forEach((component) => {
        const name = toCamelCaseFirst(component)
        list.push(`@forward "../constructors/${name}/style";`)
      })

    return list
  }

  /**
   * Returns the directory path for constructors.
   *
   * Возвращает путь к директории конструкторов.
   * @returns directory path segments / сегменты пути директории
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

    PropertiesFile.writeByPath(path, styles.join('\r\n'))
  }
}
