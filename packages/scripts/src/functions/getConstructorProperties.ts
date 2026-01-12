// export:none

import { forEach } from '@dxtmisha/functional-basic'
import { PropertiesFile } from '../classes/Properties/PropertiesFile'
import type { PropertyItem, PropertyList } from '../types/propertyTypes'

import { UI_DIR_CONSTRUCTOR, UI_DIR_IN, UI_FILE_PROPERTY } from '../config'

/**
 * Returns properties of the constructor.
 *
 * Возвращает свойства у конструктора.
 * @param names list of constructors/ список конструкторов
 */
export const getConstructorProperties = (names: string[]): PropertyList => {
  const data: PropertyList = {}

  try {
    const dir = __dirname

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
