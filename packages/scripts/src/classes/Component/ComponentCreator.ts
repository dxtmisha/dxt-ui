// export:none

import { getComponentPaths } from '../../functions/getComponentPaths'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { ComponentItem } from './ComponentItem'

import { UI_DIRS_COMPONENTS } from '../../config'

/**
 * Class for scaffolding components in empty directories.
 *
 * Класс для создания заготовок компонентов в пустых директориях.
 */
export class ComponentCreator {
  /**
   * Constructor
   */
  constructor() {
  }

  /**
   * Scans directories and scaffolds component templates.
   *
   * Сканирует директории и создает шаблоны компонентов.
   */
  make(): void {
    this
      .getDirs()
      .forEach(path => new ComponentItem(path).make())
  }

  /**
   * Collects only empty component directories.
   *
   * Собирает только пустые директории компонентов.
   */
  protected getDirs(): string[] {
    return PropertiesFile.readDirOnlyRecursive(UI_DIRS_COMPONENTS)
      .filter(
        path => PropertiesFile.readDir(getComponentPaths(path)).length === 0
      )
  }
}
