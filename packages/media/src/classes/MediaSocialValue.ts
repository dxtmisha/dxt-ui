import { isDangerousProtocol } from '../functions/isDangerousProtocol'
import { isUrlPrefix } from '../functions/isUrlPrefix'
import { toClear } from '../functions/toClear'
import { toLower } from '../functions/toLower'

import { MediaSocials } from './MediaSocials'

import type {
  InputSocialItem,
  InputSocialTypeValue,
  InputSocialValue
} from '../types/socialTypes'

/** Regular expression to find query parameters or hash fragment / Регулярное выражение для поиска параметров запроса или хеш-фрагмента */
const REGEX_QUERY_OR_HASH = /[?#]/

/** Regular expression to strip port from URL domain / Регулярное выражение для удаления порта из домена URL */
const REGEX_PORT = /^([a-z0-9_.-]+):\d+(?=\/|$)/i

/** Regular expression to strip leading @ symbols / Регулярное выражение для удаления начальных символов @ */
const REGEX_LEADING_AT = /^@+/

/** Regular expression to strip leading slashes and @ symbols / Регулярное выражение для удаления начальных слэшей и символов @ */
const REGEX_LEADING_SLASH_OR_AT = /^[/@]+/

/** Regular expression to strip trailing slashes / Регулярное выражение для удаления завершающих слэшей */
const REGEX_TRAILING_SLASHES = /\/+$/

/**
 * Class for extracting clean username or value from social network profile URLs and inputs.
 * Parses input strings, removes query parameters, hashes, prefixes, and suffixes based on social configuration.
 *
 * Класс для извлечения чистого имени пользователя или значения из ссылок на профили социальных сетей и введенных данных.
 * Разбирает входные строки, удаляет параметры запроса, хеши, префиксы и суффиксы на основе конфигурации социальной сети.
 */
export class MediaSocialValue {
  /**
   * Protected constructor.
   *
   * Защищенный конструктор.
   */
  protected constructor() {}

  /**
   * Extracts the raw username/value from a full profile URL using the social network's prefix/suffix.
   *
   * Извлекает чистое имя пользователя/значение из полной ссылки профиля с использованием префикса/суффикса социальной сети.
   * @param code social network code / код социальной сети
   * @param url full profile URL, string, number, null, or undefined / полная ссылка на профиль, строка, число, null или undefined
   * @returns raw username or value / чистое имя пользователя или значение
   */
  static get(
    code: InputSocialTypeValue,
    url: InputSocialValue
  ): string {
    return this.getByItem(MediaSocials.get(code), url)
  }

  /**
   * Extracts the raw username/value from a full profile URL using an already resolved social network configuration item.
   *
   * Извлекает чистое имя пользователя/значение из полной ссылки профиля с использованием уже найденной конфигурации социальной сети.
   * @param item social network configuration item / конфигурация социальной сети
   * @param url full profile URL, string, number, null, or undefined / полная ссылка на профиль, строка, число, null или undefined
   * @returns raw username or value / чистое имя пользователя или значение
   */
  static getByItem(
    item: InputSocialItem | undefined,
    url: InputSocialValue
  ): string {
    if (isDangerousProtocol(url)) {
      return ''
    }

    if (!item) {
      return toLower(url)
    }

    const { prefixClear, suffix } = item
    let value = this.toClearUrl(url)

    value = this.toPrefix(value, prefixClear)
    value = this.toSuffix(value, suffix)
    value = this.toSlash(value)
    value = this.toAt(value)

    return value
  }

  /**
   * Cleans leading @ symbols from the value.
   *
   * Удаляет начальные символы @ из значения.
   * @param value URL or username string / строка ссылки или имени пользователя
   * @returns value without leading @ symbols / значение без начальных символов @
   */
  protected static toAt(value: string): string {
    return value.replace(REGEX_LEADING_AT, '')
  }

  /**
   * Cleans the input value, strips query parameters, hash fragments, port, and guards against dangerous protocols.
   *
   * Очищает входящее значение, удаляет параметры запроса, хеши, порт, защищает от опасных протоколов.
   * @param url full profile URL, string, number, null, or undefined / полная ссылка на профиль, строка, число, null или undefined
   * @returns cleaned URL string without query, hash, port, or dangerous protocols / очищенная строка ссылки без query, hash, порта или опасных протоколов
   */
  protected static toClearUrl(url: InputSocialValue): string {
    const value = toClear(url)

    if (
      !value
      || isDangerousProtocol(value)
    ) {
      return ''
    }

    return this.toQueryOrHash(value)
      .replace(REGEX_PORT, '$1')
  }

  /**
   * Clears the prefix from the URL value using the prefixClear regular expression.
   *
   * Очищает префикс из значения ссылки с использованием регулярного выражения prefixClear.
   * @param value URL string / строка ссылки
   * @param prefixClear regex pattern for prefix cleaning / регулярное выражение для очистки префикса
   * @returns URL value without prefix / значение ссылки без префикса
   */
  protected static toPrefix(
    value: string,
    prefixClear?: RegExp
  ): string {
    if (
      prefixClear
      && isUrlPrefix(value, prefixClear)
    ) {
      return value
        .replace(prefixClear, '')
        .replace(REGEX_LEADING_SLASH_OR_AT, '')
    }

    return value
  }

  /**
   * Cleans the URL value by removing query parameters and hash fragments.
   *
   * Очищает значение ссылки, удаляя параметры запроса и хеш-фрагменты.
   * @param value URL string / строка ссылки
   * @returns URL value without query parameters or hash / значение ссылки без параметров запроса или хеша
   */
  protected static toQueryOrHash(value: string): string {
    const queryOrHashIndex = value.search(REGEX_QUERY_OR_HASH)

    if (queryOrHashIndex !== -1) {
      return value.substring(0, queryOrHashIndex)
    }

    return value
  }

  /**
   * Clears trailing slashes from the value.
   *
   * Удаляет завершающие слэши из значения.
   * @param value URL or username string / строка ссылки или имени пользователя
   * @returns value without trailing slashes / значение без завершающих слэшей
   */
  protected static toSlash(value: string): string {
    return value.replace(REGEX_TRAILING_SLASHES, '')
  }

  /**
   * Clears the suffix from the URL value if it ends with the specified suffix.
   *
   * Очищает суффикс из значения ссылки, если оно оканчивается на указанный суффикс.
   * @param value URL string / строка ссылки
   * @param suffix suffix string / строка суффикса
   * @returns URL value without suffix / значение ссылки без суффикса
   */
  protected static toSuffix(
    value: string,
    suffix?: string
  ): string {
    if (
      suffix
      && value.endsWith(suffix)
    ) {
      return value.substring(0, value.length - suffix.length)
    }

    return value
  }
}
