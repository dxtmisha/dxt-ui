import { inputSocialList } from '../media/socialList'
import type { InputSocialIcons, InputSocialItem, InputSocialList, InputSocialType, InputSocialTypeValue } from '../types/socialTypes'

/**
 * Class for working with social network configurations.
 * Provides helpers to retrieve the social list, find items, and format/parse profile URLs.
 *
 * Класс для работы с конфигурациями социальных сетей.
 * Предоставляет вспомогательные методы для получения списка, поиска элементов и форматирования/парсинга ссылок на профили.
 */
export class MediaSocial {
  /** Custom icons registry / Реестр кастомных иконок */
  static readonly icons = {} as InputSocialIcons

  /**
   * Returns a social network configuration by its code.
   *
   * Возвращает конфигурацию социальной сети по ее коду.
   * @param code social network code / код социальной сети
   * @returns social network configuration or undefined / конфигурация социальной сети или undefined
   */
  static get(code: InputSocialType | InputSocialTypeValue): InputSocialItem | undefined {
    const item = inputSocialList.find(item => item.code === code)

    if (item) {
      if (code in this.icons) {
        return {
          ...item,
          icon: this.icons[code]
        }
      }

      return { ...item }
    }

    return undefined
  }

  /**
   * Constructs the full profile URL/string for a social network by its code and username/value.
   *
   * Создает полную строку/ссылку профиля для социальной сети по ее коду и имени пользователя/значению.
   * @param code social network code / код социальной сети
   * @param value username or partial value / имя пользователя или частичное значение
   * @returns full profile URL or string / полная ссылка на профиль или строка
   */
  static getUrl(
    code: InputSocialType | InputSocialTypeValue,
    value: string
  ): string {
    const item = this.get(code)

    if (
      item
      && !this.isUrl(value, item.prefix)
      && (item.prefix || item.suffix)
    ) {
      const {
        prefix = '',
        suffix = ''
      } = item

      return `${prefix}${value}${suffix}`
    }

    return value
  }

  /**
   * Extracts the raw username/value from a full profile URL using the social network's prefix/suffix.
   *
   * Извлекает чистое имя пользователя/значение из полной ссылки профиля с использованием префикса/суффикса социальной сети.
   * @param code social network code / код социальной сети
   * @param url full profile URL or string / полная ссылка на профиль или строка
   * @returns raw username or value / чистое имя пользователя или значение
   */
  static getValue(code: InputSocialType | InputSocialTypeValue, url: string): string {
    const item = this.get(code)

    if (!item) {
      return url
    }

    let value = url
    const { prefix = '', suffix = '' } = item

    if (this.isUrl(value, prefix)) {
      value = value.substring(prefix.length)
    }

    if (suffix && value.endsWith(suffix)) {
      value = value.substring(0, value.length - suffix.length)
    }

    return value
  }

  /**
   * Returns the list of all social network configurations.
   *
   * Возвращает список всех конфигураций социальных сетей.
   * @returns list of social networks / список конфигураций социальных сетей
   */
  static getList(): InputSocialList {
    return inputSocialList
  }

  /**
   * Adds a custom icon for the specified social network.
   *
   * Добавляет кастомную иконку для указанной социальной сети.
   * @param code social network code / код социальной сети
   * @param icon icon name or path / имя или путь к иконке
   */
  static addIcon(code: InputSocialTypeValue, icon: string): void {
    this.icons[code] = icon
  }

  /**
   * Adds custom icons for multiple social networks.
   *
   * Добавляет кастомные иконки для нескольких социальных сетей.
   * @param icons dictionary of social network codes and their icons / словарь кодов социальных сетей и их иконок
   */
  static addIcons(icons: InputSocialIcons): void {
    Object.assign(this.icons, icons)
  }

  /**
   * Checks if the value is a full URL by checking if it starts with the prefix.
   *
   * Проверяет, является ли значение полной ссылкой, проверяя, начинается ли оно с префикса.
   * @param value checked value / проверяемое значение
   * @param prefix url prefix / префикс ссылки
   * @returns true if the value starts with the prefix / true, если значение начинается с префикса
   */
  protected static isUrl(value: string, prefix?: string): boolean {
    return Boolean(prefix && value.startsWith(prefix))
  }
}
