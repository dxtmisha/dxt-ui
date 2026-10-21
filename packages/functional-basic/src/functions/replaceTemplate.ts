import { executeFunction } from './executeFunction'
import { hasKey } from './hasKey'
import { isObject } from './isObject'

import { type FunctionOr } from '../types/basicTypes'

/** Regular expression for matching placeholder keys / Регулярное выражение для сопоставления ключей подстановки */
const EXP_KEY = /\[([^\]]+)\]/g

/**
 * A simplified template replacement function for substituting values or function results into `[key]` placeholders.
 *
 * Упрощенная функция замены шаблонов для подстановки значений или результатов функций в плейсхолдеры `[key]`.
 * @param value template string / строка шаблона
 * @param replaces object with data for replacement / объект с данными для замены
 * @returns replaced string / замененная строка
 */
export function replaceTemplate(
  value: string,
  replaces: Record<string, FunctionOr<string | number | boolean>>
): string {
  if (
    !isObject(replaces)
    || typeof value !== 'string'
    || !value.includes('[')
  ) {
    return value
  }

  return value.replace(EXP_KEY, (match, key: string) => {
    if (hasKey(replaces, key)) {
      const replacement = executeFunction(replaces[key])
      return replacement !== undefined && replacement !== null ? String(replacement) : ''
    }

    return match
  })
}
