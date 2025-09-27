import { forEach, isFilled, isObjectNotArray, replaceRecursive } from '@dxtmisha/functional'

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
 * Class for working with external files, which adds them to the current list of properties.
 *
 * Класс для работы с внешними файлами, который подключает их к текущему списку свойств.
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
   * Method that adds external files to the current property.
   *
   * Метод подключает внешние файлы к текущему свойству.
   * @param properties An array that needs to be transformed/
   * Массив, который нужно преобразовать
   * @param root path to the directory/ путь к директории
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
