// export:none

import { replaceRecursive, toKebabCase } from '@dxtmisha/functional-basic'

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
 * Directory and path resolver for multi-design token environments.
 * This class translates abstract design names into concrete filesystem paths for global tokens and component-specific settings. It coordinates the cross-platform path discovery flow and provided cached traversal mechanisms (`to`, `toAll`) to efficiently process token files across the entire project structure.
 *
 * Резолвер директорий и путей для сред с несколькими дизайнами токенов.
 * Этот класс преобразует абстрактные названия дизайнов в конкретные пути файловой системы для глобальных токенов и настроек компонентов. Он координирует процесс обнаружения путей на разных платформах и предоставляет механизмы кэшированного обхода (`to`, `toAll`) для эффективной обработки файлов токенов во всей структуре проекта.
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
   * Executes a cached transformation for a specific design and token group.
   * Resolves paths for the target design, executes the provided callback to process the data, and caches the result for future performance. Ideal for processing individual themes or component layers within a theme.
   *
   * Выполняет кэшированную трансформацию для конкретного дизайна и группы токенов.
   * Разрешает пути для целевого дизайна, выполняет предоставленный callback для обработки данных и кэширует результат. Идеально подходит для обработки отдельных тем или слоев компонентов внутри темы.
   * @param name unique name for the processing group (used as cache key) / уникальное имя группы обработки (используется как ключ кэша)
   * @param design names of the design to process / названия дизайна для обработки
   * @param callback function that receives resolved paths and returns processed data / функция, которая получает разрешенные пути и возвращает обработанные данные
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
   * Orchestrates a global cached transformation across all registered designs.
   * Iterates through every design defined in the constructor, processes its tokens using the provided callback, and merges the results into a single unified property tree.
   *
   * Координирует глобальную кэшированную трансформацию для всех зарегистрированных дизайнов.
   * Итерирует по каждому дизайну, определенному в конструкторе, обрабатывает его токены с помощью предоставленного callback и объединяет результаты в единое унифицированное дерево свойств.
   * @param name unique name for the global processing group / уникальное имя глобальной группы обработки
   * @param callback function for processing individual designs / функция для обработки отдельных дизайнов
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
