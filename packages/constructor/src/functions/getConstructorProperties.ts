import { forEach } from '@dxt-ui/functional'
import { PropertiesFile, type PropertyList } from '@dxt-ui/scripts'

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
  return forEach(
    names,
    (name) => {
      return {
        [name]: PropertiesFile.readFile([
          PROPERTY_DIR_IN,
          DESIGN_DIR_CONSTRUCTOR,
          name,
          PROPERTY_FILE_MAIN
        ]) ?? {}
      }
    }
  ) as any as PropertyList
}
