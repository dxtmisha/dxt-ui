import { forEach } from './forEach'

/**
 * Removes from the object all properties belonging to the exception type.
 *
 * Удаляет из объекта все свойства, принадлежащие к типу исключения.
 * @param data object for processing/ объект для обработки
 * @param exception exception value/ значение для исключения
 */
export function getObjectNoUndefined<T extends Record<string | number, any>>(
  data: T,
  exception: any = undefined
) {
  const returnData: T = {} as T

  forEach(data, (item, index) => {
    if (item !== exception) {
      returnData[index] = item
    }
  })

  return returnData
}
