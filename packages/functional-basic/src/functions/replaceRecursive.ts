import { copyObject } from './copyObject'
import { forEach } from './forEach'
import { isArray } from './isArray'
import { isObject } from './isObject'
import { isObjectNotArray } from './isObjectNotArray'
import { isPrototypeKey } from './isPrototypeKey'
import { uniqueArray } from './uniqueArray'

import {
  type ObjectItem,
  type ObjectOrArray
} from '../types/basicTypes'

/**
 * Merge one or more arrays or objects recursively.
 *
 * Рекурсивное слияние одного или более массивов или объектов.
 * @param target the object in which elements are replaced / объект, элементы которого будут заменены
 * @param replacement object or array from which elements will be extracted / объект или массив, из которого будут браться элементы для замены
 * @param isMerge merge arrays or overwrite them / сливать массивы или перезаписывать их
 * @returns merged object / объединенный объект
 */
export function replaceRecursive<I>(
  target: ObjectItem<I>,
  replacement?: ObjectOrArray<I>,
  isMerge: boolean = true
): ObjectItem<I> {
  if (!isObject(target)) {
    return (isObject(replacement) ? copyObject(replacement) : {}) as ObjectItem<I>
  }

  const returnData: ObjectItem<I> = copyObject(target)

  if (isObject(replacement)) {
    forEach<I, void>(
      replacement,
      (item, index) => {
        if (isPrototypeKey(index)) {
          return
        }

        const data = returnData?.[index]

        if (
          isArray(data)
          && isArray(item)
        ) {
          returnData[index] = (
            isMerge
              ? copyObject(uniqueArray([...data, ...item]))
              : copyObject(item)
          ) as I
        } else if (
          isObjectNotArray(data)
          && isObjectNotArray(item)
        ) {
          returnData[index] = replaceRecursive<I>(
            data as ObjectItem<I>,
            item as ObjectOrArray<I>,
            isMerge
          ) as I
        } else {
          returnData[index] = isObject(item) ? copyObject(item) : item
        }
      }
    )
  }

  return returnData
}
