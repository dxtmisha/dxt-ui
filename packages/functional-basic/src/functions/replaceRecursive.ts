import { copyObject } from './copyObject'
import { forOwn } from './forOwn'
import { isArray } from './isArray'
import { isObject } from './isObject'
import { isObjectNotArray } from './isObjectNotArray'
import { uniqueArray } from './uniqueArray'

import {
  type ObjectItem,
  type ObjectOrArray
} from '../types/basicTypes'

/**
 * Recursively merges a target object with elements from a replacement object or array without mutating the source data.
 *
 * Рекурсивно объединяет целевой объект с элементами из объекта или массива замены без мутации исходных данных.
 * @template [I=unknown] item value type / тип значения элементов
 * @param target the object in which elements are replaced / целевой объект, элементы которого будут заменены
 * @param replacement object or array from which elements will be extracted / объект или массив, из которого извлекаются элементы для замены
 * @param [isMerge=true] merge arrays without duplicates or overwrite them / объединять массивы без дубликатов или перезаписывать их
 * @param [disableCopy=false] disables deep cloning of target (used internally during recursion or for mutable accumulators) / запрещает глубокое копирование target (используется внутри рекурсии или для мутабельных аккумуляторов)
 * @returns new merged object / новый объединенный объект
 * @warning This method is intended exclusively for processing plain JSON-like objects and arrays (such as data received via API or configurations); built-in class instances (`Date`, `RegExp`, `Map`, `Set`) and functions are not supported. /
 * Этот метод предназначен исключительно для обработки простых JSON-подобных объектов и массивов (таких как данные, полученные через API или файлы конфигураций); экземпляры встроенных классов (`Date`, `RegExp`, `Map`, `Set`) и функции не поддерживаются.
 */
export function replaceRecursive<I = unknown>(
  target?: ObjectItem<I> | null,
  replacement?: ObjectOrArray<I> | readonly I[] | null,
  isMerge: boolean = true,
  disableCopy: boolean = false
): ObjectItem<I> {
  if (!isObject(target)) {
    return (isObject(replacement) ? copyObject(replacement) : {}) as ObjectItem<I>
  }

  const returnData: ObjectItem<I> = disableCopy ? target : copyObject(target)

  if (isObject<I>(replacement)) {
    forOwn(
      replacement,
      (item, index) => {
        const data = returnData[index]

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
            isMerge,
            true
          ) as I
        } else {
          returnData[index] = isObject(item) ? copyObject(item) : item
        }
      }
    )
  }

  return returnData
}
