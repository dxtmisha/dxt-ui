import type { InputSocialItem } from '../types/socialTypes'
import { isUrlPrefix } from './isUrlPrefix'

/** Regular expression to trim leading slashes and @ symbols from remaining path / Регулярное выражение для удаления начальных слэшей и символов @ из остатка пути */
const REGEX_LEADING_TRIM = /^[/@]+/

/**
 * Replaces the cleared prefix with the full URL prefix in the value.
 *
 * Notice: The `prefixClear` regular expression in `item` should start with an anchor `^`
 * and must not use stateful flags (`g` or `y`) to avoid unexpected matching behavior.
 *
 * Заменяет очищенный префикс на полный префикс URL в значении.
 *
 * Внимание: Регулярное выражение `prefixClear` в `item` должно начинаться с якоря `^`
 * и не должно содержать stateful-флаги (`g` или `y`) во избежание некорректного поведения сопоставления.
 *
 * @param value URL or string / ссылка или строка
 * @param item social network item configuration / конфигурация элемента социальной сети
 * @param isMatched whether the prefixClear pattern was already matched (bypasses RegExp check) / совпадает ли уже шаблон prefixClear (пропускает проверку RegExp)
 * @returns URL with full prefix / ссылка с полным префиксом
 */
export function replacePrefix(
  value: string,
  item: InputSocialItem,
  isMatched?: boolean
): string {
  const { prefixClear, prefix } = item

  if (
    prefixClear
    && prefix
    && (isMatched ?? isUrlPrefix(value, prefixClear))
  ) {
    const restValue = value
      .replace(prefixClear, '')
      .replace(REGEX_LEADING_TRIM, '')

    return `${prefix}${restValue}`
  }

  return value
}
