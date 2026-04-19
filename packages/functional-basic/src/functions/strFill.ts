/**
 * The method creates a string of length count, consisting of the characters value.
 *
 * Метод создает строку длиной count, состоящую из символов value.
 * @param value character for filling/ символ для заполнения
 * @param count length of the string/ длина строки
 * @returns filled string/ заполненная строка
 */
export function strFill(value: string, count: number): string {
  return String(value).repeat(count)
}
