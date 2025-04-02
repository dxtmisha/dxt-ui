// @node

import { forEach } from '@dxt-ui/functional'
import {
  PropertiesFile,
  type PropertyItem,
  type PropertyList
} from '@dxt-ui/scripts'

import {
  DESIGN_DIR_CONSTRUCTOR,
  PROPERTY_DIR_IN,
  PROPERTY_FILE_MAIN
} from '@dxt-ui/scripts/config'

/**
 * Returns properties of the constructor.
 *
 * Возвращает свойства у конструктора.
 * @param names list of constructors/ список конструкторов
 */
export const getConstructorProperties = (names: string[]): PropertyList => {
  const data: PropertyList = {}

  forEach(
    names,
    (name) => {
      const paths: string[] = [
        __dirname,
        '..',
        '..',
        '..',
        PROPERTY_DIR_IN,
        DESIGN_DIR_CONSTRUCTOR,
        name,
        PROPERTY_FILE_MAIN
      ]
      const item = PropertiesFile.readFile<PropertyItem>(paths)

      if (item) {
        data[name] = item
      }
    }
  )

  return data
}
