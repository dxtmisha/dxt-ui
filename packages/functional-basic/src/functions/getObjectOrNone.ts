import { isObjectNotArray } from './isObjectNotArray'

import { type FunctionAnyType } from '../types/basicTypes'

/** Preserved object type or the empty-object fallback type / Сохранённый тип объекта или тип пустого объекта */
export type ObjectOrNoneReturn<T> = [T] extends [never]
  ? Record<string, unknown>
  : T extends readonly unknown[] | FunctionAnyType<never, unknown> | (abstract new (...parameters: never[]) => unknown)
    ? Record<string, unknown>
    : T extends object
      ? T & Record<string, unknown>
      : Record<string, unknown>

/**
 * Returns a non-array object unchanged, including empty objects and class instances.
 * Other values produce a new empty object on each call.
 *
 * Возвращает объект, не являющийся массивом, без изменений, включая пустые объекты и экземпляры классов.
 * Для остальных значений каждый вызов создаёт новый пустой объект.
 * @param value input value / входное значение
 * @returns original non-array object or a new empty object / исходный объект, не являющийся массивом, или новый пустой объект
 */
export function getObjectOrNone<T>(value?: T): ObjectOrNoneReturn<T> {
  return (isObjectNotArray(value) ? value : {}) as unknown as ObjectOrNoneReturn<T>
}
