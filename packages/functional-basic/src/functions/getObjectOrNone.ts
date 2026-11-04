import { isObjectNotArray } from './isObjectNotArray'

/** Return type for getObjectOrNone / Возвращаемый тип для getObjectOrNone */
export type ObjectOrNoneReturn<T> = [Exclude<T, undefined | null>] extends [never]
  ? Record<string, unknown>
  : Exclude<T, undefined | null> & Record<string, unknown>

/**
 * Returns the object if the object’s values are set.
 *
 * Возвращает объект, если заданы значения объекта.
 * @param value let’s assume that this is an object / предположим, что это объект
 * @returns object or empty object / объект или пустой объект
 */
export function getObjectOrNone<T>(value?: T): ObjectOrNoneReturn<T> {
  return (isObjectNotArray(value) ? value : {}) as unknown as ObjectOrNoneReturn<T>
}
