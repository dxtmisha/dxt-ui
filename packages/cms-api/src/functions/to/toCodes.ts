import {
  isArray,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { CmsVerification } from '../../classes/CmsVerification'

/**
 * Deduplicates and normalizes a list of entity codes to valid non-empty strings without whitespace.
 *
 * Оставляет только уникальные корректные непустые коды сущностей без пробельных символов из переданного списка.
 * @param codes Raw list of entity codes / Исходный список кодов сущностей
 * @returns Deduplicated array of normalized entity codes / Уникальный массив нормализованных кодов сущностей
 */
export function toCodes(codes?: readonly unknown[]): string[] {
  if (!isArray(codes)) {
    return []
  }

  return uniqueArray(
    codes
      .map(code => CmsVerification.normalizeCode(code, false))
      .filter(code => code.length > 0)
  )
}
