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
 * @param array the target object / целевой объект
 * @param replacement the source object / исходные объекты
 * @param indexStart index at which to start changing the array / индекс, по которому начинает изменять массив
 * @returns modified array / измененный массив
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
      let isInitialized = false

      forEach<I, void>(array, (item, index) => {
        if (
          !isInitialized && (
            indexStart === index
            || indexStart === item
          )
        ) {
          isInitialized = true
          returnData = replaceRecursive(returnData, replacement as ObjectOrArray)
        } else if (isInitialized) {
          returnData = replaceRecursive(returnData, { [index]: item })
        } else {
          returnData[index] = isObject(item) ? copyObject(item) : item
        }
      })

      return isInitialized ? returnData : replaceRecursive(array, replacement as ObjectOrArray)
    }

    return replaceRecursive(array, replacement as ObjectOrArray)
  }

  return copyObject(array)
}
