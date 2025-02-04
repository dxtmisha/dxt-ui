import { copyObject } from './copyObject'
import { forEach } from './forEach'
import { isObject } from './isObject'
import { uniqueArray } from './uniqueArray'

import {
  type ObjectItem,
  type ObjectOrArray
} from '../types/basicTypes'

/**
 * Merge one or more arrays recursively.
 *
 * Рекурсивное слияние одного или более массивов.
 * @param array the array in which elements are replaced / массив, элементы которого будут заменены
 * @param replacement arrays from which elements will be extracted / массивы, из которых будут браться элементы для замены
 * @param isMerge merge one or more arrays / сливает один или большее количество массивов
 */
export function replaceRecursive<I>(
  array: ObjectItem<I>,
  replacement?: ObjectOrArray<I>,
  isMerge = true
): ObjectItem<I> {
  const returnData: ObjectItem<I> = copyObject(array)

  if (
    isObject(array)
    && isObject(replacement)
  ) {
    forEach<I, void>(
      replacement,
      (item, index) => {
        const data = array?.[index]

        if (
          isObject(data)
          && isObject(item)
        ) {
          if (
            isMerge
            && Array.isArray(data)
            && Array.isArray(item)
          ) {
            returnData[index] = copyObject(uniqueArray([...data, ...item])) as I
          } else {
            returnData[index] = replaceRecursive<I>(
              (Array.isArray(data) ? { ...data } : data) as ObjectItem<I>,
              item as ObjectOrArray<I>,
              isMerge
            ) as I
          }
        } else {
          returnData[index] = isObject(item) ? copyObject(item) : item
        }
      }
    )
  }

  return returnData
}
