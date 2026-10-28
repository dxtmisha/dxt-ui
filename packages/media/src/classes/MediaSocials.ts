import { MediaSocialIcon } from './MediaSocialIcon'

import type {
  InputSocialItem,
  InputSocialList,
  InputSocialType,
  InputSocialTypeValue
} from '../types/socialTypes'

import { inputSocialList } from '../media/socialList'

/**
 * Class for working with social network configurations and metadata catalog.
 * Provides centralized lookup by code with lazy Map indexing,
 * list retrieval, and enriches items with custom icons from MediaSocialIcon.
 *
 * Класс для работы с конфигурациями и каталогом метаданных социальных сетей.
 * Обеспечивает централизованный поиск по коду с ленивым Map-индексированием,
 * получение списка и обогащение элементов кастомными иконками из MediaSocialIcon.
 */
export class MediaSocials {
  /** Cache index of social network items by code / Индексный кэш элементов социальных сетей по коду */
  protected static codeMap?: Map<string, Readonly<InputSocialItem>>

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
  static get(code: InputSocialType | InputSocialTypeValue): InputSocialItem | undefined {
    const item = this.find(code)

    if (item) {
      return MediaSocialIcon.toItem(item)
    }

    return undefined
  }

  /**
   * Returns the list of all social network configurations.
   *
   * Возвращает список всех конфигураций социальных сетей.
   * @returns list of social networks / список конфигураций социальных сетей
   */
  static getList(): InputSocialList {
    return inputSocialList.map(item => MediaSocialIcon.toItem(item))
  }

  /**
   * Finds a social network configuration item by code.
   *
   * Находит элемент конфигурации социальной сети по коду.
   * @param code social network code / код социальной сети
   * @returns social network configuration or undefined / конфигурация социальной сети или undefined
   */
  protected static find(code: InputSocialType | InputSocialTypeValue): InputSocialItem | undefined {
    if (!code) {
      return undefined
    }

    if (!this.codeMap) {
      this.codeMap = new Map()

      for (const item of inputSocialList) {
        if (!this.codeMap.has(item.code)) {
          this.codeMap.set(item.code, item)
        }
      }
    }

    return this.codeMap.get(code)
  }
}
