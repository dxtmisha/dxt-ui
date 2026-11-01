import { copyObject } from './copyObject'
import { forOwn } from './forOwn'
import { isObject } from './isObject'
import { replaceRecursive } from './replaceRecursive'

import { type ObjectItem } from '../types/basicTypes'

/**
 * Copies and recursively merges own enumerable properties from a replacement object into a target object,
 * optionally replacing a specific entry matched by key or value (`indexStart`) in place while preserving key order and cascade priority.
 *
 * Копирует и рекурсивно объединяет собственные перечисляемые свойства из объекта замены в целевой объект,
 * опционально заменяя найденную по ключу или значению запись (`indexStart`) на месте с сохранением порядка ключей и приоритета по списку обработки.
 * @template [I=unknown] item value type / тип значения элементов
 * @param array target object / целевой объект
 * @param replacement source object with replacement properties / исходный объект с новыми свойствами
 * @param indexStart property key or value at which to inject replacement / ключ или значение свойства, начиная с которого выполняется замена
 * @returns new merged object / новый объединенный объект
 * @warning This method is intended exclusively for processing plain JSON-like objects (such as data received via API or configurations); built-in class instances (`Date`, `RegExp`, `Map`, `Set`) and functions are not supported. /
 * Этот метод предназначен исключительно для обработки простых JSON-подобных объектов (таких как данные, полученные через API или файлы конфигураций); экземпляры встроенных классов (`Date`, `RegExp`, `Map`, `Set`) и функции не поддерживаются.
 */
export function splice<I = unknown>(
  array?: ObjectItem<I> | null,
  replacement?: ObjectItem<I> | I | null,
  indexStart?: string | null
): ObjectItem<I> {
  if (!isObject(array)) {
    return isObject<I>(replacement) ? replaceRecursive({}, replacement) : {}
  }

  if (isObject<I>(replacement)) {
    if (indexStart) {
      const returnData: ObjectItem<I> = {}
      let isInitialized = false

      forOwn(array, (item, index) => {
        if (
          !isInitialized && (
            indexStart === index
            || indexStart === item
          )
        ) {
          isInitialized = true
          replaceRecursive(returnData, replacement, true, true)
        } else if (isInitialized) {
          replaceRecursive(returnData, { [index]: item }, true, true)
        } else {
          returnData[index] = isObject(item) ? copyObject(item) : item
        }
      })

      return isInitialized ? returnData : replaceRecursive(array, replacement)
    }

    return replaceRecursive(array, replacement)
  }

  return copyObject(array)
}
