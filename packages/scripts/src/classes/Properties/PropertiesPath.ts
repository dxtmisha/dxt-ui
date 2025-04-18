// export:none

import { replaceRecursive, toKebabCase } from '@dxt-ui/functional'

import { PropertiesConfig } from './PropertiesConfig'
import { PropertiesTool } from './PropertiesTool'
import { PropertiesFile } from './PropertiesFile'
import { PropertiesCache } from './PropertiesCache'

import {
  type PropertyListOrData
} from '../../types/propertyTypes'

import { UI_DIRS_COMPONENTS, UI_DIRS_TOKENS } from '../../config'

export type PropertiesPathItem = {
  design: string
  paths?: string[]
  pathsComponent?: string[]
}

export type PropertiesPathList = PropertiesPathItem[]

const DIR_CACHE = 'read'

/**
 * Class for working with paths by the given name of the design.
 *
 * Класс для работы с путями по заданному названию дизайна.
 */
export class PropertiesPath {
  private readonly paths: PropertiesPathList
  private readonly constructorType: boolean = false

  /**
   * Constructor
   * @param designs list of design names corresponding to folder names/
   * список названий дизайнов, соответствующих названиям папок
   */
  constructor(
    private designs: string[]
  ) {
    this.paths = []

    designs.forEach((design) => {
      this.paths.push({
        design: toKebabCase(design),
        paths: this.getDir(design),
        pathsComponent: this.getDirComponents(design)
      })
    })

    if (
      this.paths?.[1]
      && PropertiesTool.isConstructor(this.paths?.[1].design)
    ) {
      delete this.paths[1]
      this.constructorType = true
    }
  }

  isConstructor(): boolean {
    return this.constructorType
  }

  /**
   * Returns the names of available designs.
   *
   * Возвращает названия доступных дизайнов.
   */
  getDesigns(): string[] {
    return this.designs
  }

  /**
   * Gets a list of available paths to the file of global component settings.
   *
   * Получает список доступных путей к файлу глобальных настроек компонента.
   * @param name design name/ название дизайна
   */
  getPath(name: string): PropertiesPathItem | undefined {
    return this.paths.find(item => item.design === name)
  }

  /**
   * List of available paths.
   *
   * Список доступных путей.
   */
  getPaths(): PropertiesPathList {
    return this.paths
  }

  /**
   * Processes all token values for the selected design and combines them into one-big array.
   *
   * Обрабатывает все значения токена у выбранного дизайна и соединяет их в одну-большую массива.
   * @param name name of the group/ названия группы
   * @param design design name/ название дизайна
   * @param callback function for processing/ функция для обработки
   */
  to(
    name: string,
    design: string,
    callback: (
      path: string[] | undefined,
      pathsComponent: string[] | undefined,
      design: string
    ) => PropertyListOrData
  ): PropertyListOrData {
    return PropertiesCache.get<PropertyListOrData>([DIR_CACHE, name], `${name}-${design}`, () => {
      let data: PropertyListOrData = {}
      const item = this.getPath(design)

      if (item) {
        data = replaceRecursive(
          data,
          callback(
            item.paths,
            item.pathsComponent,
            design
          )
        )
      }

      return data
    })
  }

  /**
   * Processes all token values for all designs and combines them into one-big array.
   *
   * Обрабатывает все значения токена у всех дизайнов и соединяет их в одну-большую массива.
   * @param name name of the group/ названия группы
   * @param callback function for processing/ функция для обработки
   */
  toAll(
    name: string,
    callback: (
      path: string[] | undefined,
      pathsComponent: string[] | undefined,
      design: string
    ) => PropertyListOrData
  ): PropertyListOrData {
    return PropertiesCache.get<PropertyListOrData>([DIR_CACHE], name, () => {
      let data: PropertyListOrData = {}

      this.designs.forEach((design) => {
        data = replaceRecursive(data, this.to(name, design, callback))
      })

      return data
    })
  }

  /**
   * Returns the path to a file by design name.
   *
   * Возвращает путь к файлу по названию дизайна.
   * @param name design name/ название дизайна
   */
  private getDir(name: string): string[] | undefined {
    if (PropertiesTool.isConstructor(name)) {
      return undefined
    }

    return [PropertiesFile.getRoot(), ...UI_DIRS_TOKENS]
  }

  /**
   * Returns the path to a file by design name.
   *
   * Возвращает путь к файлу по названию дизайна.
   * @param name design name/ название дизайна
   */
  private getDirComponents(name: string): string[] | undefined {
    if (PropertiesTool.isConstructor(name)) {
      return undefined
    }

    return [
      PropertiesFile.getRoot(),
      ...UI_DIRS_COMPONENTS,
      PropertiesConfig.getProjectName()
    ]
  }
}
