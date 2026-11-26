/**
 * Escapes characters that could break a double-quoted CSS attribute selector value.
 *
 * Экранирует символы, которые могут нарушить значение CSS-селектора атрибута в двойных кавычках.
 * @param value raw attribute value / исходное значение атрибута
 * @returns escaped selector value / экранированное значение селектора
 */
export function escapeAttributeValue(value: unknown): string {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\a ')
    .replace(/\r/g, '\\d ')
}
