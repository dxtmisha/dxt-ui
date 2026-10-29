import { MediaSocialIcon } from './MediaSocialIcon'
import { MediaSocialNickname } from './MediaSocialNickname'
import { MediaSocials } from './MediaSocials'
import { MediaSocialUrl } from './MediaSocialUrl'
import { MediaSocialValue } from './MediaSocialValue'

import type {
  InputSocialIcons,
  InputSocialItem,
  InputSocialList,
  InputSocialTypeValue,
  InputSocialValue
} from '../types/socialTypes'

/**
 * Class for working with social network configurations.
 * Provides helpers to retrieve the social list, find items, and format/parse profile URLs.
 *
 * Класс для работы с конфигурациями социальных сетей.
 * Предоставляет вспомогательные методы для получения списка, поиска элементов и форматирования/парсинга ссылок на профили.
 */
export class MediaSocial {
  /**
   * Protected constructor.
   *
   * Защищенный конструктор.
   */
  protected constructor() {}

  /**
   * Returns a social network configuration by its code.
   *
   * Возвращает конфигурацию социальной сети по ее коду.
   * @param code social network code / код социальной сети
   * @returns social network configuration or undefined / конфигурация социальной сети или undefined
   */
  static get(code: InputSocialTypeValue): InputSocialItem | undefined {
    return MediaSocials.get(code)
  }

  /**
   * Returns the list of all social network configurations.
   *
   * Возвращает список всех конфигураций социальных сетей.
   * @returns list of social networks / список конфигураций социальных сетей
   */
  static getList(): InputSocialList {
    return MediaSocials.getList()
  }

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
  static getNickname(
    code: InputSocialTypeValue,
    value: InputSocialValue
  ): string {
    return MediaSocialNickname.get(code, value)
  }

  /**
   * Constructs the full profile URL/string for a social network by its code and username/value.
   *
   * Создает полную строку/ссылку профиля для социальной сети по ее коду и имени пользователя/значению.
   * @param code social network code / код социальной сети
   * @param value username, partial value, number, null, or undefined / имя пользователя, частичное значение, число, null или undefined
   * @returns full profile URL or string / полная ссылка на профиль или строка
   */
  static getUrl(
    code: InputSocialTypeValue,
    value: InputSocialValue
  ): string {
    return MediaSocialUrl.get(code, value)
  }

  /**
   * Extracts the raw username/value from a full profile URL using the social network's prefix/suffix.
   *
   * Извлекает чистое имя пользователя/значение из полной ссылки профиля с использованием префикса/суффикса социальной сети.
   * @param code social network code / код социальной сети
   * @param url full profile URL, string, number, null, or undefined / полная ссылка на профиль, строка, число, null или undefined
   * @returns raw username or value / чистое имя пользователя или значение
   */
  static getValue(
    code: InputSocialTypeValue,
    url: InputSocialValue
  ): string {
    return MediaSocialValue.get(code, url)
  }

  /**
   * Registers a custom icon for the specified social network.
   *
   * Регистрирует пользовательскую иконку для указанной социальной сети.
   * @param code social network code / код социальной сети
   * @param icon icon name or path / имя или путь к иконке
   * @returns class constructor for method chaining / конструктор класса для цепочечных вызовов
   */
  static addIcon(
    code: InputSocialTypeValue,
    icon: string
  ): typeof MediaSocial {
    MediaSocialIcon.add(code, icon)

    return this
  }

  /**
   * Registers custom icons for multiple social networks.
   *
   * Регистрирует пользовательские иконки для нескольких социальных сетей.
   * @param icons dictionary of social network codes and their icons / словарь кодов социальных сетей и их иконок
   * @returns class constructor for method chaining / конструктор класса для цепочечных вызовов
   */
  static addIcons(icons: InputSocialIcons): typeof MediaSocial {
    MediaSocialIcon.addList(icons)

    return this
  }
}
