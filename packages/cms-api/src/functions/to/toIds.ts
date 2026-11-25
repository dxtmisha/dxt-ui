import {
  isArray,
  isPositiveInteger,
  uniqueArray
} from '@dxtmisha/functional-basic'

/**
 * Deduplicates and filters a list of identifiers to valid positive safe integers.
 *
 * Оставляет только уникальные корректные положительные целые идентификаторы из переданного списка.
 * @param ids Raw list of record identifiers / Исходный список идентификаторов записей
 * @returns Deduplicated array of positive integer IDs / Уникальный массив положительных целых идентификаторов
 */
export function toIds(ids?: readonly unknown[]): number[] {
  if (!isArray(ids)) {
    return []
  }

  return uniqueArray(ids).filter((id): id is number => isPositiveInteger(id))
}
