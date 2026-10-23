import { forEach } from '../functions/forEach'
import { isArray } from '../functions/isArray'
import { isFilled } from '../functions/isFilled'
import { toArray } from '../functions/toArray'

import { Geo } from './Geo'
import {
  type GeoPhoneValue,
  type GeoPhoneMap,
  type GeoPhoneMapInfo
} from '../types/geoTypes'

/**
 * A class for storing and processing phone number masks.
 *
 * Класс для хранения и обработка маски телефона.
 */
export class GeoPhone {
  /** Phone masks list / Список масок телефонов */
  protected static list?: GeoPhoneValue[]
  /** Phone codes map / Карта телефонных кодов */
  protected static map?: Record<string, GeoPhoneMap>

  /**
   * Getting an object with information about the phone code and country.
   *
   * Получение объекта с информацией о телефонном коде и стране.
   * @param code country and language code / код страны и языка
   * @returns phone mask item or undefined / объект маски телефона или undefined
   */
  static get(code: string): GeoPhoneValue | undefined {
    return this.getList().find(item => code === item.value)
  }

  /**
   * Retrieves complete mask data by country code.
   *
   * Получает полные данные о маске по коду страны.
   * @param code country and language code / код страны и языка
   * @returns phone mask map item or undefined / элемент карты маски телефона или undefined
   */
  static getByCode(code: string): GeoPhoneMap | undefined {
    const item = this.get(code)

    if (item) {
      return this.getByPhone(item.phone.toString())?.item
    }

    return undefined
  }

  /**
   * Getting information by phone.
   *
   * Получение информации по телефону.
   * @param phone phone number / номер телефон
   * @returns phone mask info / информация о маске телефона
   */
  static getByPhone(phone: string): GeoPhoneMapInfo {
    const fullPhone = this.toNumber(phone)
    const code: string[] = ['']

    let focus = this.getMap()
    let item: GeoPhoneMap | undefined

    for (const number of fullPhone) {
      code[code.length - 1] += number

      if (number in focus) {
        if (focus[number]?.value) {
          item = focus[number]
          code.push('')
        }

        focus = focus[number]?.next ?? {}
      } else {
        break
      }
    }

    if (item) {
      code.pop()

      return {
        item,
        phone: fullPhone
          .join('')
          .slice(code.join('').length)
      }
    }

    return {
      item: undefined,
      phone: fullPhone.join('')
    }
  }

  /**
   * We get an array from a list of all phone numbers.
   *
   * Получаем массив из списка всех телефонных кодов.
   * @returns list of phone masks / список масок телефонов
   */
  static getList(): GeoPhoneValue[] {
    if (!this.list) {
      this.makeList()
    }

    return this.list ?? []
  }

  /**
   * We get a map of a tree, sorted by its code.
   *
   * Получаем карту дерева, отсортированную по его коду.
   * @returns phone codes tree map / карта дерева телефонных кодов
   */
  static getMap(): Record<string, GeoPhoneMap> {
    if (!this.map) {
      this.makeMap()
    }

    return this.map ?? {}
  }

  /**
   * Deletes the country code from the input number.
   *
   * Удаляет код страны по входному номеру.
   * @param phone phone number / номер телефон
   * @returns phone number without leading zero or country prefix / номер телефона без ведущего нуля или префикса страны
   */
  static removeZero(phone: string): string {
    if (phone.match(/^0/)) {
      return phone.replace(/^0/, '')
    } else if (phone.match(/^89/)) {
      return phone.replace(/^8/, '')
    }

    return phone
  }

  /**
   * Convert to phone mask.
   *
   * Преобразовать в маску телефона.
   * @param phone phone number / номер телефон
   * @param masks a mask to transform a phone number / маска для преобразования номер телефон
   * @returns masked phone string or undefined / отформатированный по маске номер телефона или undefined
   */
  static toMask(
    phone: string,
    masks?: string[]
  ): string | undefined {
    if (
      isFilled(phone)
      && isArray(masks)
      && masks.length > 0
    ) {
      const value = this.removeZero(phone)
      const length = value.length

      for (const mask of masks) {
        if (this.getUnnecessaryLength(mask) === length) {
          return this.toStandard(value, mask)
        }
      }
    }

    return undefined
  }

  /**
   * Deletes all characters that do not belong to the mask.
   *
   * Удаляет все символы, не относящиеся к маске.
   * @param mask A mask to transform a phone number / маска для преобразования номер телефон
   * @returns count of mask placeholder characters / количество символов-заполнителей маски
   */
  protected static getUnnecessaryLength(mask: string): number {
    return mask.match(/\*/g)?.length ?? 0
  }

  /**
   * Returns the symbol by the internal country code.
   *
   * Возвращает символ по коду внутри страны.
   * @param within internal country code / код внутри страны
   * @returns internal country code symbol / символ кода внутри страны
   */
  protected static getWithinSymbol(within: number | string): string {
    switch (within) {
      case 4:
      case '4':
        return '$'
      case 8:
      case '8':
        return '~'
    }

    return '='
  }

  /**
   * Creating a list for the map.
   *
   * Формирование списка данных.
   * @returns void / ничего не возвращает
   */
  protected static makeList(): void {
    const list = forEach(Geo.getList(), (item) => {
      if (item?.phoneMask) {
        return {
          phone: (item?.phoneCode && Number(item.phoneCode.replace(/[^0-9]+/g, ''))) || undefined,
          within: item?.phoneWithin || 0,
          mask: toArray(item.phoneMask),
          value: item.country
        }
      }

      return undefined
    }) as GeoPhoneValue[]

    this.list = list.sort((itemA, itemB) => (itemA.phone - itemB.phone))
  }

  /**
   * Creating a map for search.
   *
   * Создание карты для поиска.
   * @returns void / ничего не возвращает
   */
  protected static makeMap(): void {
    this.map = {}

    this.getList().forEach((item) => {
      item.mask.forEach((mask) => {
        let focus = this.map!
        let value: GeoPhoneMap | undefined

        this.toNumber(mask).forEach((number) => {
          if (!(number in focus)) {
            focus[number] = {
              items: [],
              info: undefined,
              value: undefined,
              mask: [],
              maskFull: [],
              next: {}
            }
          }

          value = focus[number]
          focus = value?.next ?? {}
        })

        if (value) {
          if (value.value === undefined) {
            value.info = item
            value.value = item.value
          }

          const maskWithin = this.toWithin(mask, item.within)

          value.mask.push(maskWithin)
          value.maskFull.push(maskWithin.replace(/\d/ig, '*'))
          value.items.push(item)
        }
      })
    })
  }

  /**
   * The method parses a string argument and returns an array of numbers as strings.
   *
   * Метод принимает строку в качестве аргумента и возвращает массив цифр в виде строк.
   * @param value the value to parse / текстовая строка
   * @returns array of numbers / массив цифр
   */
  protected static toNumber(value: string): string[] {
    return value
      .replace(/\D+/ig, '')
      .split('')
  }

  /**
   * Converts the phone to a standard.
   *
   * Преобразовывает телефон в стандарт.
   * @param phone phone number / номер телефон
   * @param mask a mask to transform a phone number / маска для преобразования номер телефон
   * @returns standardized phone string / стандартизированная строка телефона
   */
  protected static toStandard(phone: string, mask: string): string {
    let character = 0
    return mask.replace(/\*/ig, () => String(phone[character++]))
  }

  /**
   * Replaces the first character with the internal country code
   *
   * Заменяет первый символ на код внутри страны.
   * @param mask a mask to transform a phone number / маска для преобразования номер телефон
   * @param within internal country code / код внутри страны
   * @returns mask with internal country code symbol / маска с символом кода внутри страны
   */
  protected static toWithin(mask: string, within: number | string): string {
    return mask.replace(/\*/, this.getWithinSymbol(within))
  }
}
