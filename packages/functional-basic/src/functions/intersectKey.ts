import { forEach } from './forEach'
import { isObject } from './isObject'

/**
 * Computes the intersection of arrays using keys for comparison.
 *
 * Вычислить пересечение массивов, сравнивая ключи.
 * @param data the array with master keys to check/ основной проверяемый массив
 * @param comparison arrays to compare keys against/ массивы, с которыми идёт сравнение
 */
export function intersectKey<
  T,
  KT extends keyof T,
  C,
  KC extends keyof C
>(
  data?: T,
  comparison?: C
): Record<KT & KC, T[KT]> {
  const values = {} as Record<KT & KC, T[KT]>

  if (
    isObject(data)
    && isObject(comparison)
  ) {
    forEach<T[KT], void>(data, (item, index) => {
      if (index in comparison) {
        values[index as (KT & KC)] = item
      }
    })
  }

  return values
}
