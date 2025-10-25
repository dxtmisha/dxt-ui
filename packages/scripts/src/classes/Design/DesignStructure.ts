// export:none

import { toCamelCase, toCamelCaseFirst } from '@dxtmisha/functional'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesCache } from '../Properties/PropertiesCache'
import { DesignStructureRead } from './DesignStructureRead'
import { DesignStructureClasses } from './DesignStructureClasses'
import { DesignStructureStyles } from './DesignStructureStyles'

import type {
  DesignStructureClassesList,
  DesignStructureList
} from '../../types/designTypes'

import {
  UI_DIR_STRUCTURE,
  UI_STRUCTURE_CLASSES
} from '../../config'

/**
 * Class for processing structured components.
 *
 * Класс для обработки структурированных компонентов.
 */
export class DesignStructure {
  protected readonly component: string

  protected items?: DesignStructureList
  protected itemsClasses?: DesignStructureClassesList
  protected itemsStyles?: string[]

  constructor(path: string)
  constructor(design: string, component: string)
  /**
   * Constructor
   * @param component component name/ название компонента
   */
  constructor(
    component?: string
  ) {
    this.component = toCamelCase(component ?? 'component')
  }

  /**
   * Getting all data from the structure.
   *
   * Получение всех данных из структуры.
   */
  get(): DesignStructureList {
    if (this.items === undefined) {
      this.items = this.make()
    }

    return this.items
  }

  /**
   * Obtaining a list of subclasses from a structure.
   *
   * Получение списка подклассов из структуры.
   */
  getClasses(): DesignStructureClassesList {
    if (this.itemsClasses === undefined) {
      this.itemsClasses = this.makeClasses()
    }

    return this.itemsClasses
  }

  /**
   * Returns all styles from tokens.
   *
   * Возвращает все стили из токенов.
   */
  getStyles(): string[] {
    if (this.itemsStyles === undefined) {
      this.itemsStyles = this.makeStyles()
    }

    return this.itemsStyles
  }

  /**
   * Returns the name of the design.
   *
   * Возвращает название дизайна.
   */
  getDesign(): string {
    return PropertiesConfig.getDesignName()
  }

  /**
   * Returns the name of the design with a capital letter.
   *
   * Возвращает название дизайна с заглавной буквы.
   */
  getDesignFirst(): string {
    return toCamelCaseFirst(PropertiesConfig.getDesignName())
  }

  /**
   * Returns the name of the component.
   *
   * Возвращает название компонента.
   */
  getComponentName(): string {
    return this.component
  }

  /**
   * Returns the name of the component with a capital letter.
   *
   * Возвращает название компонента с заглавной буквой.
   */
  getComponentNameFirst(): string {
    return toCamelCaseFirst(this.component)
  }

  /**
   * Returns the full name of the component, including design and component name.
   *
   * Возвращает полное название компонента, включая название дизайна и компонента.
   */
  getFullComponentName(): string {
    const design = this.getDesignFirst()
    const component = this.getComponentNameFirst()

    return `${design}${component}`
  }

  /**
   * Returns the names of component files.
   *
   * Возвращает названия файлов компонентов.
   */
  getFileName(): string {
    return toCamelCaseFirst(this.getPathName())
  }

  /**
   * Returns the name of the cache file.
   * It contains all processed properties.
   *
   * Возвращает название файла для кэша.
   * Это полный массив со всеми обработанными свойствами.
   */
  getPathName(): string {
    return `${PropertiesConfig.getDesignName()}-${this.component}`
  }

  /**
   * Returns the name of the file with data about the subclass.
   *
   * Возвращает название файла с данными о подклассе.
   */
  protected getPathClasses(): string {
    return `${this.getPathName()}-${UI_STRUCTURE_CLASSES}`
  }

  /**
   * Data generation.
   *
   * Генерация данных.
   */
  protected make(): DesignStructureList {
    return PropertiesCache.get<DesignStructureList>(
      [UI_DIR_STRUCTURE],
      this.getPathName(),
      () => {
        return new DesignStructureRead(this.component).get()
      }
    )
  }

  /**
   * Generation of data for the subclass.
   *
   * Генерация данных для подкласса.
   */
  protected makeClasses(): DesignStructureClassesList {
    return PropertiesCache.get<DesignStructureClassesList>(
      [UI_DIR_STRUCTURE],
      this.getPathClasses(),
      () => {
        return new DesignStructureClasses(this.component).get()
      }
    )
  }

  /**
   * Performing transformation of tokens into styles for the component.
   *
   * Выполнение преобразования токенов в стили для компонента.
   */
  protected makeStyles(): string[] {
    return new DesignStructureStyles(this.component).get()
  }
}
