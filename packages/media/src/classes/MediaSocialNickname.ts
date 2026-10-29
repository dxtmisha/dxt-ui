import { MediaSocials } from './MediaSocials'
import { MediaSocialValue } from './MediaSocialValue'

import type {
  InputSocialTypeValue,
  InputSocialValue
} from '../types/socialTypes'

/**
 * Class for formatting and resolving social network nicknames and handles.
 * Formats username handles with platform-specific prefixes (e.g. '@', 'u/') and validates against nickname patterns.
 *
 * Класс для форматирования и разрешения никнеймов и хэндлов социальных сетей.
 * Форматирует имена пользователей с префиксами платформы (например, '@', 'u/') и проверяет соответствие шаблонам никнеймов.
 */
export class MediaSocialNickname {
  /**
   * Protected constructor.
   *
   * Защищенный конструктор.
   */
  protected constructor() {}

  /**
   * Returns the formatted nickname for a social network by its code and value.
   * If the social network does not support nicknames or the value is invalid, returns an empty string.
   *
   * Возвращает отформатированный никнейм для социальной сети по ее коду и значению.
   * Если социальная сеть не поддерживает никнеймы или значение невалидно, возвращает пустую строку.
   * @param code social network code / код социальной сети
   * @param value username, URL, partial value, number, null, or undefined / имя пользователя, ссылка, частичное значение, число, null или undefined
   * @returns formatted nickname with prefix or empty string / отформатированный никнейм с префиксом или пустая строка
   */
  static get(
    code: InputSocialTypeValue,
    value: InputSocialValue
  ): string {
    const item = MediaSocials.get(code)

    if (
      !item
      || (
        item.nickname === undefined
        && item.nicknameClear === undefined
      )
    ) {
      return ''
    }

    const extractedValue = MediaSocialValue.getByItem(item, value)
    const cleanValue = this.toClean(extractedValue, item.nicknameClear)

    if (!cleanValue) {
      return ''
    }

    return `${item.nickname ?? ''}${cleanValue}`
  }

  /**
   * Cleans and validates the nickname value against pattern.
   *
   * Очищает и проверяет значение никнейма на соответствие шаблону.
   * @param value raw username or extracted value / чистое имя пользователя или извлеченное значение
   * @param nicknameClear pattern to match or clean nickname value / шаблон для извлечения или очистки никнейма
   * @returns cleaned nickname string or empty string / очищенная строка никнейма или пустая строка
   */
  protected static toClean(
    value: string,
    nicknameClear?: RegExp
  ): string {
    if (!value) {
      return ''
    }

    if (nicknameClear) {
      const match = value.match(nicknameClear)

      if (!match) {
        return ''
      }

      return match[1] ?? match[0]
    }

    return value
  }
}
