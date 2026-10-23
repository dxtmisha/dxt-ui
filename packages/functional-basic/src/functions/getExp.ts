import { escapeExp } from './escapeExp'

/**
 * The object is used for matching text with a pattern.
 *
 * Конструктор создаёт объект регулярного выражения для сопоставления текста с шаблоном.
 * @param value text for replacement / текст для замены
 * @param flags regular expression flags (e.g., g - global match, i - ignore case, m - multiline match) /
 * флаги регулярного выражения (например, g - глобальное сопоставление, i - игнорирование регистра, m - многострочное сопоставление)
 * @param pattern regular expression text in which `:value` will be replaced with the escaped value /
 * текст регулярного выражения, в котором `:value` заменится на экранированное значение `value`
 * @returns regular expression / регулярное выражение
 */
export function getExp(
  value: string,
  flags = 'ig',
  pattern = ':value'
): RegExp {
  const data = escapeExp(value)

  return new RegExp(pattern.replace(/:value/g, data), flags)
}
