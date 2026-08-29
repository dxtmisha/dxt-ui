// export:none

import { toCamelCase, toCamelCaseFirst } from '@dxtmisha/functional-basic'

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
 * Class for managing and resolving the data structure of a design system component.
 * It serves as a central hub for reading component metadata, generating class mappings, and resolving style tokens.
 *
 * Класс для управления и разрешения структуры данных компонента дизайн-системы.
 * Служит центральным узлом для чтения метаданных компонента, генерации маппингов классов и разрешения стилевых токенов.
 */
export class DesignStructure {
  /** Component identifier name / Идентификатор имени компонента */
  protected readonly component: string

  /** Cached structure list / Кэшированный список структуры */
  protected items?: DesignStructureList

  /** Cached structure classes list / Кэшированный список классов структуры */
  protected itemsClasses?: DesignStructureClassesList

  /** Cached styles list / Кэшированный список стилей */
  protected itemsStyles?: string[]

  /**
   * Constructor for DesignStructure.
   *
   * Конструктор для DesignStructure.
   * @param component component name or identifier / название или идентификатор компонента
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
   * @returns structure list / список элементов структуры
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
   * @returns structure classes list / список классов структуры
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
   * @returns array of style declarations / массив объявлений стилей
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
   * @returns design system name / название дизайн-системы
   */
  getDesign(): string {
    return PropertiesConfig.getDesignName()
  }

  /**
   * Returns the name of the design with a capital letter.
   *
   * Возвращает название дизайна с заглавной буквы.
   * @returns capitalized design system name / название дизайн-системы с заглавной буквы
   */
  getDesignFirst(): string {
    return toCamelCaseFirst(PropertiesConfig.getDesignName())
  }

  /**
   * Returns the name of the component.
   *
   * Возвращает название компонента.
   * @returns component name / название компонента
   */
  getComponentName(): string {
    return this.component
  }

  /**
   * Returns the name of the component with a capital letter.
   *
   * Возвращает название компонента с заглавной буквой.
   * @returns capitalized component name / название компонента с заглавной буквы
   */
  getComponentNameFirst(): string {
    return toCamelCaseFirst(this.component)
  }

  /**
   * Returns the full name of the component, including design and component name.
   *
   * Возвращает полное название компонента, включая название дизайна и компонента.
   * @returns full component name / полное название компонента
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
   * @returns component filename / имя файла компонента
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
   * @returns path cache key / ключ кэша пути
   */
  getPathName(): string {
    return `${PropertiesConfig.getDesignName()}-${this.component}`
  }

  /**
   * Returns the name of the file with data about the subclass.
   *
   * Возвращает название файла с данными о подклассе.
   * @returns classes path cache key / ключ кэша пути классов
   */
  protected getPathClasses(): string {
    return `${this.getPathName()}-${UI_STRUCTURE_CLASSES}`
  }

  /**
   * Data generation.
   *
   * Генерация данных.
   * @returns resolved structure list / разрешенный список структуры
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
   * @returns resolved structure classes list / разрешенный список классов структуры
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
   * @returns generated component styles / сгенерированные стили компонента
   */
  protected makeStyles(): string[] {
    return new DesignStructureStyles(this.component).get()
  }
}
