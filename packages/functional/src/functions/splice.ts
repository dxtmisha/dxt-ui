import { copyObject } from './copyObject'
import { forEach } from './forEach'
import { isObject } from './isObject'
import { replaceRecursive } from './replaceRecursive'

import {
  type ObjectItem,
  type ObjectOrArray
} from '../types/basicTypes'

/**
 * This method is used to copy the values of all enumerable own properties from one source object to a target object.
 * In priority according to the processing list.
 *
 * Метод используется для копирования значений всех перечисляемых свойств одного объекта в другой.
 * В приоритете по списку обработки.
 * @param array the target object/ целевой объект
 * @param replacement the source object/ исходные объекты
 * @param indexStart index at which to start changing the array/ индекс, по которому начинает изменять массив
 */
export function splice<I>(
  array: ObjectItem<I>,
  replacement?: ObjectItem<I> | I,
  indexStart?: string
): ObjectItem<I> {
  if (
    isObject(array)
    && isObject(replacement)
  ) {
    if (indexStart) {
      let returnData: ObjectItem<I> = {}
      let init = false

      forEach<I, void>(array, (item, index) => {
        if (
          !init && (
            indexStart === index
            || indexStart === item
          )
        ) {
          init = true
          returnData = replaceRecursive(returnData, replacement as ObjectOrArray)
        } else if (init) {
          returnData = replaceRecursive(returnData, { [index]: item })
        } else {
          returnData[index] = isObject(item) ? copyObject(item) : item
        }
      })

      return init ? returnData : replaceRecursive(array, replacement as ObjectOrArray)
    }

    if (isObject(replacement)) {
      return replaceRecursive(array, replacement as ObjectOrArray)
    }
  }

  return copyObject(array)
}
