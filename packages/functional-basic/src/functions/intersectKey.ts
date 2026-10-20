import { forEach } from './forEach'
import { hasKey } from './hasKey'
import { isObject } from './isObject'

/**
 * Computes the intersection of objects using keys for comparison.
 *
 * Вычисляет пересечение объектов, сравнивая ключи.
 * @param data master object with keys to check / основной проверяемый объект
 * @param comparison object to compare keys against / объект, с которым идёт сравнение
 * @returns object with intersected keys / объект с пересекающимися ключами
 */
export function intersectKey<
  T extends Record<PropertyKey, unknown>,
  C extends Record<PropertyKey, unknown>
>(
  data?: T | null,
  comparison?: C | null
): Pick<T, Extract<keyof T, keyof C>> {
  const values = {} as Pick<T, Extract<keyof T, keyof C>>

  if (
    isObject(data)
    && isObject(comparison)
  ) {
    forEach(data, (item, index) => {
      if (hasKey(comparison, index)) {
        (values as Record<PropertyKey, unknown>)[index] = item
      }
    })
  }

  return values
}
