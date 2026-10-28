/** Character code for space ' ' / Код символа пробела ' ' */
const CHAR_SPACE = 32

/** Character code for colon ':' / Код символа двоеточия ':' */
const CHAR_COLON = 58

/** Maximum length of a dangerous protocol scheme before the colon / Максимальная длина схемы опасного протокола до двоеточия */
const MAX_PROTOCOL_SCHEME_LENGTH = 15

/** Regular expression to detect dangerous URL protocols / Регулярное выражение для обнаружения опасных протоколов URL */
const REGEX_DANGEROUS_PROTOCOL = /^(?:javascript|data|vbscript):/i

/**
 * Checks if the character code represents an ASCII (0-31), DEL (127), C1 (128-159) control character,
 * or a Unicode zero-width/formatting evasion character (ZWSP, ZWNJ, ZWJ, word joiner, BOM).
 *
 * Проверяет, представляет ли код символа управляющий символ ASCII (0-31), DEL (127), C1 (128-159)
 * или невидимый форматирующий символ Unicode (символ нулевой ширины, ZWNJ, ZWJ, разделитель слов, BOM).
 * @param charCode character code / код символа
 * @returns true if control or evasion character / true, если управляющий или невидимый символ
 */
function isControlOrEvasionCharacter(charCode: number): boolean {
  return (
    charCode <= 31
    || charCode === 127
    || (charCode >= 128 && charCode <= 159)
    || (charCode >= 0x200B && charCode <= 0x200D)
    || charCode === 0x2060
    || charCode === 0xFEFF
  )
}

/**
 * Checks if the character code represents an ASCII space or Unicode whitespace separator.
 *
 * Проверяет, представляет ли код символа пробел ASCII или пробельный разделитель Unicode.
 * @param charCode character code / код символа
 * @returns true if whitespace character / true, если пробельный символ
 */
function isWhitespace(charCode: number): boolean {
  return (
    charCode === CHAR_SPACE
    || charCode === 160
    || (charCode >= 0x2000 && charCode <= 0x200A)
    || charCode === 0x2028
    || charCode === 0x2029
    || charCode === 0x202F
    || charCode === 0x205F
    || charCode === 0x3000
  )
}

/**
 * Checks if the value contains a dangerous URL protocol (such as javascript:, data:, vbscript:).
 * Safely strips leading whitespace and evasion control characters before verification.
 *
 * Проверяет, содержит ли значение опасный протокол URL (например, javascript:, data:, vbscript:).
 * Безопасно удаляет начальные пробелы и управляющие символы до проверки.
 * @param value checked value / проверяемое значение
 * @returns true if the value has a dangerous protocol / true, если значение содержит опасный протокол
 */
export function isDangerousProtocol(value: unknown): boolean {
  if (typeof value !== 'string' || value.length === 0) {
    return false
  }

  let cleanValue = ''

  for (let index = 0; index < value.length; index += 1) {
    const charCode = value.charCodeAt(index)

    if (
      isControlOrEvasionCharacter(charCode)
      || (cleanValue.length === 0 && isWhitespace(charCode))
    ) {
      continue
    }

    cleanValue += value[index]

    if (charCode === CHAR_COLON) {
      return REGEX_DANGEROUS_PROTOCOL.test(cleanValue)
    }

    if (cleanValue.length > MAX_PROTOCOL_SCHEME_LENGTH) {
      return false
    }
  }

  return false
}
