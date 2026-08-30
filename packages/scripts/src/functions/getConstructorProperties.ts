// export:none

import { forEach } from '@dxtmisha/functional-basic'

import { PropertiesFile } from '../classes/Properties/PropertiesFile'
import type { PropertyItem, PropertyList } from '../types/propertyTypes'

import {
  UI_DIRS_CONSTRUCTOR,
  UI_FILE_PROPERTY,
  UI_PROJECT_CONSTRUCTOR_NAME
} from '../config'

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
    const root = PropertiesFile.getRoot()
    const rootProject = PropertiesFile.getRootProject()

    const candidateBases: string[][] = [
      [root, ...UI_DIRS_CONSTRUCTOR],
      [root, '..', UI_PROJECT_CONSTRUCTOR_NAME, ...UI_DIRS_CONSTRUCTOR],
      ...(rootProject ? [[rootProject, UI_PROJECT_CONSTRUCTOR_NAME, ...UI_DIRS_CONSTRUCTOR]] : [])
    ]

    const base = candidateBases.find(item => PropertiesFile.is(item))

    if (base) {
      forEach(names, (name) => {
        const item = PropertiesFile.readFile<PropertyItem>([...base, name, UI_FILE_PROPERTY])

        if (item) {
          data[name] = item
        }
      })
    }
  } catch (e) {
    console.error('getConstructorProperties', e)
  }

  return data
}

