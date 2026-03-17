// export:none

import { forEach, isFilled, isObjectNotArray, replaceRecursive } from '@dxtmisha/functional-basic'

import {
  PropertiesFile,
  type PropertiesFilePath
} from './PropertiesFile'
import { PropertiesCache } from './PropertiesCache'
import { PropertiesTypes } from './PropertiesTypes'

import { PropertiesConvector } from './PropertiesConvector'
import { PropertiesStandard } from './PropertiesStandard'

import {
  PropertyKey,
  type PropertyList,
  type PropertyListOrData,
  PropertyType
} from '../../types/propertyTypes'

/**
 * Resolver for external property references.
 * This class orchestrates the inclusion of external design tokens into the primary property tree. It identifies file references, resolves paths (including nested directory imports and specific object path deep-linking via hashes), and merges the external data into the current configuration cluster.
 *
 * Резолвер внешних ссылок на свойства.
 * Этот класс координирует включение внешних токенов дизайна в основное дерево свойств. Он идентифицирует ссылки на файлы, разрешает пути (включая импорт вложенных директорий и глубокие ссылки на конкретные объекты через хеш) и объединяет внешние данные с текущим кластером конфигурации.
 */
export class PropertiesImport {
  /**
   * Constructor
   * @param properties array with all property records/ массив со всеми записями свойств
   * @param root path to the directory/ путь к директории
   */

  constructor(
    private properties: PropertyList,
    private root: string[]
  ) {
  }

  /**
   * Resolves and merges external file references within a property cluster.
   * Iterates through the properties, looks for items of type 'file', and recursively imports their content, supporting deep-linking (e.g., 'file.json#path.to.data').
   *
   * Разрешает и объединяет ссылки на внешние файлы внутри кластера свойств.
   * Итерирует по свойствам, ищет элементы типа 'file' и рекурсивно импортирует их содержимое, поддерживая глубокие ссылки (например, 'file.json#path.to.data').
   * @param properties the property list to process / список свойств для обработки
   * @param root the base path segments for resolution / базовые сегменты пути для разрешения
   */
  to(
    properties = this.properties,
    root = this.root
  ) {
    let data: PropertyList = {}

    forEach(properties, (item, name) => {
      if (
        typeof item.value === 'string'
        && PropertiesTypes.isInType(item[PropertyKey.type], [PropertyType.file])
      ) {
        const {
          path,
          link
        } = this.initLink(root, item.value)
        const read = this.readByLink(this.read(path), link)

        if (isFilled(read)) {
          PropertiesConvector.to(read)

          data = replaceRecursive(data, this.to(
            PropertiesStandard.to(read),
            [PropertiesFile.getPathDir(path)]
          ))
        }
      } else if (isObjectNotArray(item.value)) {
        data = replaceRecursive(data, {
          [name]: {
            ...item,
            value: this.to(item.value, root)
          }
        } as PropertyList)
      } else {
        data = replaceRecursive(data, { [name]: item })
      }
    })

    return data
  }

  /**
   * Returns the path to the file.
   *
   * Возвращает путь к файлу.
   * @param root path to the directory/ путь к директории
   * @param value object with data/ объект с данными
   */
  private getPath(root: string[], value: string): string[] {
    return [
      ...root,
      ...value.split('/')
    ]
  }

  /**
   * Generates the path to the file and prepares entries in the tree to go through.
   *
   * Генерирует путь к файлу и подготавливает записи в дереве, по которому надо пройтись.
   * @param root path to the directory/ путь к директории
   * @param value object with data/ объект с данными
   */
  private initLink(root: string[], value: string) {
    const link = value.split('#', 2)

    return {
      path: this.getPath(root, link[0] as string),
      link: link?.[1]
    }
  }

  /**
   * Reads a file or an entire directory.
   *
   * Читает файл или всю директорию.
   * @param path path to file/ путь к файлу
   */
  private read(path: PropertiesFilePath): PropertyListOrData | undefined {
    if (PropertiesFile.isDir(path)) {
      return this.readByDir(path)
    }

    return PropertiesCache.read<PropertyListOrData>(path) ?? {}
  }

  /**
   * Reads the file and leaves the data only along the selected path.
   *
   * Читает файл и оставляет данные только по выделенному пути.
   * @param read read data/ прочитанные данные
   * @param link the path to the entry that needs to be used/ путь к записи, который надо использовать
   */
  private readByLink(
    read: PropertyListOrData | undefined,
    link?: string
  ): PropertyListOrData | undefined {
    let data = read

    if (link) {
      for (const name of link.split('.')) {
        if (data && (name in data)) {
          data = data[name]
        } else {
          return undefined
        }
      }
    }

    return data
  }

  /**
   * Reads a directory.
   *
   * Читает директорию.
   * @param path path to file/ путь к файлу
   */
  private readByDir(path: PropertiesFilePath): PropertyListOrData {
    const files = PropertiesFile.readDir(path)
    const data: PropertyListOrData = {}

    files?.sort()
    files?.forEach((file) => {
      const parse = PropertiesFile.parse(file)

      if (parse.ext === '.json') {
        data[parse.name] = PropertiesCache.read<PropertyListOrData>([...path, file]) ?? {}
      }
    })

    return data
  }
}
