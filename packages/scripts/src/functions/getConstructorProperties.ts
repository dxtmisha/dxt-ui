// export:none

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { forEach } from '@dxtmisha/functional-basic'
import { hasNativeDirname } from './hasNativeDirname'

import { PropertiesFile } from '../classes/Properties/PropertiesFile'
import type { PropertyItem, PropertyList } from '../types/propertyTypes'

import { UI_DIR_CONSTRUCTOR, UI_DIR_IN, UI_FILE_PROPERTY } from '../config'

/**
 * Reads and returns design property definitions for the specified list of component constructors.
 *
 * Считывает и возвращает определения свойств дизайна для указанного списка конструкторов компонентов.
 * @param names list of constructor names / список названий конструкторов
 * @returns map of constructor property collections / карта коллекций свойств конструкторов
 */
export const getConstructorProperties = (names: string[]): PropertyList => {
  const data: PropertyList = {}

  try {
    const dir = hasNativeDirname()
      ? __dirname
      : dirname(fileURLToPath(import.meta.url))

    forEach(
      names,
      (name) => {
        const paths: string[] = [
          dir,
          '..',
          '..',
          '..',
          'constructor',
          UI_DIR_IN,
          UI_DIR_CONSTRUCTOR,
          name,
          UI_FILE_PROPERTY
        ]

        const item = PropertiesFile.readFile<PropertyItem>(paths)

        if (item) {
          data[name] = item
        }
      }
    )
  } catch (e) {
    console.error('getConstructorProperties', e)
  }

  return data
}
