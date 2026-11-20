import { forEach } from '../functions/forEach'
import { isArray } from '../functions/isArray'
import { isFilled } from '../functions/isFilled'
import { isNumber } from '../functions/isNumber'
import { toArray } from '../functions/toArray'

import { Geo } from './Geo'
import {
  type GeoPhoneMap,
  type GeoPhoneMapInfo,
  type GeoPhoneMapInfoFull,
  type GeoPhoneValue
} from '../types/geoTypes'

/** Regular expression matching a single digit / Регулярное выражение для поиска одной цифры */
const REGEXP_DIGIT = /\d/g
/** Regular expression matching a single mask placeholder character / Регулярное выражение для поиска одного символа-заполнителя маски */
const REGEXP_MASK_PLACEHOLDER_CHAR = /[*=~$?]/
/** Regular expression matching mask placeholder characters / Регулярное выражение для поиска символов-заполнителей маски */
const REGEXP_MASK_PLACEHOLDER = /[*=~$?]/g
/** Regular expression matching non-digit sequences / Регулярное выражение для поиска нецифровых последовательностей */
const REGEXP_NON_DIGIT = /\D+/g

/**
 * A class for storing and processing phone number masks.
 *
 * Класс для хранения и обработки масок телефонных номеров.
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
    const item = this.findItem(code)

    if (item) {
      return item
    }

    const country = Geo.getByCountry(code)?.country

    if (
      country
      && country !== code
    ) {
      return this.findItem(country)
    }

    return undefined
  }

  /**
   * Retrieves complete mask data by country code, including all alternative subcode masks.
   *
   * Получает полные данные о масках по коду страны, включая все альтернативные подкоды.
   * @param code country and language code / код страны и языка
   * @returns phone mask map item or undefined / элемент карты маски телефона или undefined
   */
  static getByCode(code: string): GeoPhoneMap | undefined {
    const item = this.get(code)

    if (item) {
      const baseNode = this.getByPhone(item.phone.toString()).item
      const mask: string[] = []
      const maskFull: string[] = []

      item.mask.forEach((pattern) => {
        const maskWithin = item.withinSkip
          ? pattern
          : this.toWithin(pattern, item.within)
        const fullPattern = maskWithin.replace(REGEXP_DIGIT, '*')

        mask.push(maskWithin)

        if (!maskFull.includes(fullPattern)) {
          maskFull.push(fullPattern)
        }
      })

      return {
        items: baseNode?.value === item.value ? baseNode.items : [item],
        info: item,
        value: item.value,
        mask,
        maskFull,
        next: baseNode?.value === item.value ? baseNode.next : {}
      }
    }

    return undefined
  }

  /**
   * Returns a list of distinct dial codes for a country, including alternatives when present.
   *
   * Возвращает список уникальных телефонных кодов страны, включая альтернативные при их наличии.
   * @param code country and language code / код страны и языка
   * @returns array of dial codes without leading "+" / массив телефонных кодов без ведущего "+"
   */
  static getCodes(code: string): string[] {
    const item = this.get(code)

    if (!item) {
      return []
    }

    const primaryCode = Geo.getByCountry(item.value)?.phoneCode
    const extracted = this.extractPrefixes(item.mask)

    if (!primaryCode) {
      return extracted
    }

    const hasAlternative = extracted.some(
      prefix => prefix !== primaryCode && !prefix.startsWith(`${primaryCode}-`)
    )

    if (!hasAlternative) {
      return [primaryCode]
    }

    return [
      primaryCode,
      ...extracted.filter(prefix => prefix !== primaryCode)
    ]
  }

  /**
   * Getting information by phone.
   *
   * Получение информации по телефону.
   * @param phone phone number / номер телефона
   * @returns phone mask info / информация о маске телефона
   */
  static getByPhone(phone: string): GeoPhoneMapInfo {
    const fullPhone = this.toNumber(phone)
    const code: string[] = ['']

    let focus = this.getMap()
    let item: GeoPhoneMap | undefined

    for (const number of fullPhone) {
      code[code.length - 1] += number
      const nextNode = focus[number]

      if (nextNode) {
        if (nextNode.value) {
          item = nextNode
          code.push('')
        }

        focus = nextNode.next
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
   * Getting complete information by phone, including full and formatted phone number.
   *
   * Получение полной информации по телефону, включая полный и отформатированный номер.
   * @param phone phone number / номер телефона
   * @param isPartial whether to format incomplete phone numbers using the closest fitting mask / форматировать ли неполные номера по ближайшей подходящей маске
   * @returns extended phone mask info / расширенная информация о маске телефона
   */
  static getByPhoneFull(
    phone: string,
    isPartial: boolean = false
  ): GeoPhoneMapInfoFull {
    const data = this.getByPhone(phone)
    const full = this.cleanPhone(phone)

    return {
      ...data,
      full,
      format: this.toMask(full, data.item?.maskFull, false, isPartial) ?? phone
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
   * Removes all non-digit characters from the phone string.
   *
   * Удаляет все нецифровые символы из строки телефона.
   * @param value the value to clean / очищаемая строка
   * @returns string containing only digits / строка, содержащая только цифры
   */
  static cleanPhone(value: string): string {
    return value.replace(REGEXP_NON_DIGIT, '')
  }

  /**
   * Finds a phone metadata item directly by exact country code.
   *
   * Находит элемент метаданных телефона по точному коду страны.
   * @param code country code / код страны
   * @protected
   * @returns phone mask item or undefined / объект маски телефона или undefined
   */
  protected static findItem(code: string): GeoPhoneValue | undefined {
    return this.getList().find(entry => code === entry.value)
  }

  /**
   * Deletes all characters that do not belong to the mask.
   *
   * Удаляет все символы, не относящиеся к маске.
   * @param mask a mask to transform a phone number / маска для преобразования номера телефона
   * @protected
   * @returns count of mask placeholder characters / количество символов-заполнителей маски
   */
  protected static getUnnecessaryLength(mask: string): number {
    return mask.match(REGEXP_MASK_PLACEHOLDER)?.length ?? 0
  }

  /**
   * Extracts distinct static dial code prefixes from an array of phone masks.
   *
   * Извлекает уникальные статические префиксы телефонных кодов из массива масок.
   * @param masks array of phone masks / массив телефонных масок
   * @protected
   * @returns list of prefixes without leading "+" / список префиксов без ведущего "+"
   */
  protected static extractPrefixes(masks: string[]): string[] {
    const prefixes: string[] = []

    for (const mask of masks) {
      const prefixChars: string[] = []

      for (const char of mask) {
        if (REGEXP_MASK_PLACEHOLDER_CHAR.test(char)) {
          break
        }

        if (char !== '+') {
          prefixChars.push(char)
        }
      }

      const prefix = prefixChars.join('').replace(/-+$/, '')

      if (
        prefix
        && !prefixes.includes(prefix)
      ) {
        prefixes.push(prefix)
      }
    }

    return prefixes
  }

  /**
   * Returns the symbol by the internal country code.
   *
   * Возвращает символ по коду внутри страны.
   * @param within internal country code / код внутри страны
   * @protected
   * @returns internal country code symbol / символ кода внутри страны
   */
  protected static getWithinSymbol(within?: string): string {
    switch (within) {
      case '0':
        return '='
      case '06':
        return '?'
      case '4':
        return '$'
      case '8':
        return '~'
    }

    return '*'
  }

  /**
   * Deletes the country code from the input number.
   *
   * Удаляет код страны по входному номеру.
   * @param phone phone number / номер телефона
   * @protected
   * @returns phone number without leading zero or country prefix / номер телефона без ведущего нуля или префикса страны
   */
  protected static removeZero(phone: string): string {
    if (
      phone.startsWith('0')
      || phone.startsWith('89')
    ) {
      return phone.slice(1)
    }

    return phone
  }

  /**
   * Creating a list for the map.
   *
   * Формирование списка данных.
   * @protected
   * @returns void / ничего не возвращает
   */
  protected static makeList(): void {
    const list = forEach(Geo.getList(), (item) => {
      if (item?.phoneMask) {
        const phone = (item.phoneCode && Number(this.cleanPhone(item.phoneCode))) || 0
        const within = isNumber(item.phoneWithin) ? String(item.phoneWithin) : undefined

        return {
          phone,
          within,
          ...(item.phoneWithinSkip ? { withinSkip: true } : {}),
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
   * @protected
   * @returns void / ничего не возвращает
   */
  protected static makeMap(): void {
    const map: Record<string, GeoPhoneMap> = {}

    this.getList().forEach((item) => {
      item.mask.forEach((mask) => {
        let focus = map
        let value: GeoPhoneMap | undefined

        this.toNumber(mask).forEach((number) => {
          let nextNode = focus[number]

          if (!nextNode) {
            nextNode = {
              items: [],
              info: undefined,
              value: undefined,
              mask: [],
              maskFull: [],
              next: {}
            }
            focus[number] = nextNode
          }

          value = nextNode
          focus = nextNode.next
        })

        if (value) {
          if (value.value === undefined) {
            value.info = item
            value.value = item.value
          }

          const maskWithin = item.withinSkip
            ? mask
            : this.toWithin(mask, item.within)

          value.mask.push(maskWithin)
          value.maskFull.push(maskWithin.replace(REGEXP_DIGIT, '*'))

          if (!value.items.includes(item)) {
            value.items.push(item)
          }
        }
      })
    })

    this.map = map
  }

  /**
   * Convert to phone mask.
   *
   * Преобразовать в маску телефона.
   * @param phone phone number / номер телефона
   * @param masks a mask to transform a phone number / маска для преобразования номера телефона
   * @param isRemoveZero whether to remove leading zero or country prefix / нужно ли удалять ведущий ноль или префикс страны
   * @param isPartial whether to format incomplete phone numbers using the closest fitting mask / форматировать ли неполные номера по ближайшей подходящей маске
   * @protected
   * @returns masked phone string or undefined / отформатированный по маске номер телефона или undefined
   */
  protected static toMask(
    phone: string,
    masks?: string[],
    isRemoveZero: boolean = false,
    isPartial: boolean = false
  ): string | undefined {
    if (
      isFilled(phone)
      && isArray(masks)
      && masks.length > 0
    ) {
      const value = isRemoveZero ? this.removeZero(phone) : phone
      const length = value.length
      let partialMask: string | undefined
      let partialLength = Number.POSITIVE_INFINITY

      for (const mask of masks) {
        const maskLength = this.getUnnecessaryLength(mask)

        if (maskLength === length) {
          return this.toStandard(value, mask)
        }

        if (
          isPartial
          && maskLength > length
          && maskLength < partialLength
        ) {
          partialMask = mask
          partialLength = maskLength
        }
      }

      if (partialMask) {
        return this.toStandard(value, partialMask)
      }
    }

    return undefined
  }

  /**
   * The method parses a string argument and returns an array of numbers as strings.
   *
   * Метод принимает строку в качестве аргумента и возвращает массив цифр в виде строк.
   * @param value the value to parse / текстовая строка
   * @protected
   * @returns array of numbers / массив цифр
   */
  protected static toNumber(value: string): string[] {
    return this.cleanPhone(value).split('')
  }

  /**
   * Converts the phone to a standard.
   *
   * Преобразовывает телефон в стандарт.
   * @param phone phone number / номер телефона
   * @param mask a mask to transform a phone number / маска для преобразования номера телефона
   * @protected
   * @returns standardized phone string / стандартизированная строка телефона
   */
  protected static toStandard(phone: string, mask: string): string {
    let character = 0
    let result = ''
    let pendingLiterals = ''

    for (const char of mask) {
      if (REGEXP_MASK_PLACEHOLDER_CHAR.test(char)) {
        if (character >= phone.length) {
          return result
        }

        result += pendingLiterals + phone[character++]
        pendingLiterals = ''
      } else {
        pendingLiterals += char
      }
    }

    return result + pendingLiterals
  }

  /**
   * Replaces characters with the internal country code symbols.
   *
   * Заменяет символы на код внутри страны.
   * @param mask a mask to transform a phone number / маска для преобразования номера телефона
   * @param within internal country code / код внутри страны
   * @protected
   * @returns mask with internal country code symbol / маска с символом кода внутри страны
   */
  protected static toWithin(mask: string, within?: string): string {
    if (within) {
      let result = mask
      const symbol = this.getWithinSymbol(within)
      const length = within.length

      for (let index = 0; index < length; index++) {
        result = result.replace('*', symbol)
      }

      return result
    }

    return mask
  }
}
