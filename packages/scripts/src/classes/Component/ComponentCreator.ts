// export:none

import { getComponentPaths } from '../../functions/getComponentPaths'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { ComponentItem } from './ComponentItem'

import { UI_DIRS_COMPONENTS } from '../../config'

/**
 * Automation utility for discovering empty component directories and scaffolding their initial structure.
 * Scans configured component paths and initializes boilerplate files for newly created component folders.
 *
 * Утилита автоматизации для обнаружения пустых директорий компонентов и создания их начальной структуры.
 * Сканирует настроенные пути компонентов и инициализирует шаблонные файлы для вновь созданных папок компонентов.
 */
export class ComponentCreator {
  /**
   * Constructor initializes ComponentCreator instance.
   *
   * Конструктор инициализирует экземпляр ComponentCreator.
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
   * @returns array of empty component directory paths / массив путей пустых директорий компонентов
   */
  protected getDirs(): string[] {
    return PropertiesFile.readDirOnlyRecursive(UI_DIRS_COMPONENTS)
      .filter(
        path => PropertiesFile.readDir(getComponentPaths(path)).length === 0
      )
  }
}
