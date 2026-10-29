import { isDangerousProtocol } from '../functions/isDangerousProtocol'
import { isUrlPrefix } from '../functions/isUrlPrefix'
import { replacePrefix } from '../functions/replacePrefix'
import { toClear } from '../functions/toClear'
import { toLower } from '../functions/toLower'

import { MediaSocials } from './MediaSocials'

import type {
  InputSocialItem,
  InputSocialTypeValue,
  InputSocialValue
} from '../types/socialTypes'

/** Regular expression to trim leading slashes and @ symbols / Регулярное выражение для удаления начальных слэшей и символов @ */
const REGEX_LEADING_TRIM = /^[/@]+/

/** Regular expression to find query parameters or hash fragment / Регулярное выражение для поиска параметров запроса или хеш-фрагмента */
const REGEX_QUERY_OR_HASH = /[?#]/

/** Regular expression to trim trailing slashes / Регулярное выражение для удаления завершающих слэшей */
const REGEX_TRAILING_SLASHES = /\/+$/

/**
 * Class for generating and formatting social network profile URLs.
 * Constructs full profile URLs from usernames or partial values using platform prefixes and suffixes.
 *
 * Класс для генерации и форматирования ссылок на профили социальных сетей.
 * Создает полные ссылки на профили из имен пользователей или частичных значений с использованием префиксов и суффиксов платформы.
 */
export class MediaSocialUrl {
  /**
   * Protected constructor.
   *
   * Защищенный конструктор.
   */
  protected constructor() {}

  /**
   * Constructs the full profile URL/string for a social network by its code and username/value.
   *
   * Создает полную строку/ссылку профиля для социальной сети по ее коду и имени пользователя/значению.
   * @param code social network code / код социальной сети
   * @param value username, partial value, number, null, or undefined / имя пользователя, частичное значение, число, null или undefined
   * @returns full profile URL or string / полная ссылка на профиль или строка
   */
  static get(
    code: InputSocialTypeValue,
    value: InputSocialValue
  ): string {
    const itemValue = toClear(value)

    if (
      !itemValue
      || isDangerousProtocol(itemValue)
    ) {
      return ''
    }

    const item = MediaSocials.get(code)
    const formattedValue = this.toPrefix(itemValue, item)
      ?? toLower(value)

    return this.toSuffix(formattedValue, item?.suffix)
  }

  /**
   * Formats the URL string using the item's prefix configuration.
   *
   * Форматирует строку URL с использованием префикса конфигурации элемента.
   * @param value cleared username or partial URL string / очищенная строка имени пользователя или частичной ссылки
   * @param item social network configuration / конфигурация социальной сети
   * @returns formatted profile URL string, or undefined if item has no prefix / сформированная строка ссылки на профиль или undefined, если у элемента нет префикса
   */
  protected static toPrefix(
    value: string,
    item?: InputSocialItem
  ): string | undefined {
    if (item?.prefix) {
      if (isUrlPrefix(value, item.prefixClear)) {
        return replacePrefix(value, item, true)
      }

      const cleanValue = value.replace(REGEX_LEADING_TRIM, '')

      return `${item.prefix}${cleanValue}`
    }

    return undefined
  }

  /**
   * Appends the platform suffix to the URL string path if it does not already end with it,
   * properly positioning it before query parameters or hash fragments.
   *
   * Добавляет суффикс платформы к пути строки URL, если он им еще не заканчивается,
   * корректно позиционируя его перед параметрами запроса или хеш-фрагментами.
   * @param value URL or profile string / строка URL или профиля
   * @param suffix platform URL suffix / суффикс URL платформы
   * @returns URL string with suffix / строка URL с суффиксом
   */
  protected static toSuffix(
    value: string,
    suffix?: string
  ): string {
    if (!suffix) {
      return value
    }

    const queryIndex = value.search(REGEX_QUERY_OR_HASH)
    const base = queryIndex !== -1 ? value.substring(0, queryIndex) : value
    const tail = queryIndex !== -1 ? value.substring(queryIndex) : ''
    const cleanBase = base.replace(REGEX_TRAILING_SLASHES, '')

    if (cleanBase.endsWith(suffix)) {
      return `${cleanBase}${tail}`
    }

    return `${cleanBase}${suffix}${tail}`
  }
}
