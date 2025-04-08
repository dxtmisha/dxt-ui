// @node

import { forEach } from '@dxt-ui/functional'
import {
  PropertiesFile,
  type PropertyItem,
  type PropertyList
} from '@dxt-ui/scripts'

import {
  UI_DIR_CONSTRUCTOR,
  UI_DIR_IN,
  UI_FILE_PROPERTY
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

  return data
}
