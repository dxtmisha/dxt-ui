import { applyTemplate } from '../functions/applyTemplate'
import { forEach } from '../functions/forEach'
import { isFilled } from '../functions/isFilled'
import { isString } from '../functions/isString'
import { toArray } from '../functions/toArray'

import { Api } from './Api'
import { Geo } from './Geo'

export type TranslateCode = string | string[]
export type TranslateList<T extends TranslateCode[]> = {
  [K in T[number] as K extends readonly string[] ? K[0] : K]: string
}
export type TranslateItemOrList<T extends TranslateCode> = T extends string[] ? TranslateList<T> : string

/**
 * Class for getting the translated text.
 *
 * Класс для получения переведенного текста.
 */
export class Translate {
  protected static url = '/api/translate'
  protected static propsName = 'list'
  protected static readonly data: Record<string, string> = {}

  protected static cache: string[] = []
  protected static resolveList: (() => void)[] = []
  protected static timeout?: any

  /**
   * Getting the translation text by its code.
   *
   * Получение текста перевода по его коду.
   * @param name code name/ название кода
   * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
   */
  static async get(
    name: string,
    replacement?: string[] | Record<string, string | number>
  ): Promise<string> {
    const fullName = this.getName(name)

    if (fullName in this.data) {
      return this.replacement(this.data[fullName] as string, replacement)
    }

    if (!Api.isLocalhost()) {
      await this.add(name)
    }

    return this.replacement(this.data?.[fullName] ?? name)
  }

  /**
   * Getting the translation text by its code (Sync).
   *
   * Получение текста перевода по его коду (Sync).
   * @param name code name/ название кода
   * @param first If set to false, returns an empty string if there is no text/
   * если установлено false, возвращает пустую строку, если нет текста
   * @param replacement If set, replaces the text with the specified values/
   * если установлено, заменяет текст на указанные значения
   */
  static getSync(
    name: string,
    first: boolean = false,
    replacement?: string[] | Record<string, string | number>
  ): string {
    const fullName = this.getName(name)

    if (fullName in this.data) {
      return this.replacement(String(this.data[fullName]), replacement)
    }

    return first ? ' ' : name
  }

  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>> {
    return new Promise((resolve) => {
      const list: Record<string, string> = {}
      let end = 0

      for (const name of names) {
        const code = (Array.isArray(name) ? name[0] : name) as string
        const replacement = Array.isArray(name) ? name.slice(1) : undefined

        this.get(code, replacement)
          .then((text) => {
            list[code] = text

            if (++end >= names.length) {
              resolve(list as TranslateList<T>)
            }
          })
      }
    })
  }

  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations/ список кодов для получения переводов
   * @param first If set to false, returns an empty string if there is no text/
   * если установлено false, возвращает пустую строку, если нет текста
   */
  static getListSync<T extends TranslateCode[]>(names: T, first: boolean = false): TranslateList<T> {
    const list: Record<string, string> = {}

    for (const name of names) {
      const code = (Array.isArray(name) ? name[0] : name) as string
      const replacement = Array.isArray(name) ? name.slice(1) : undefined

      list[code] = this.getSync(code, first, replacement)
    }

    return list as TranslateList<T>
  }

  /**
   * Added a list of translated texts.
   *
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static add(names: string | string[]): Promise<void> {
    return new Promise((resolve) => {
      const list = this.getNamesNone(names)

      if (list.length > 0) {
        this.cache.push(...this.getNamesNone(names))
        this.resolveList.push(resolve)

        if (this.timeout) {
          clearTimeout(this.timeout)
        }

        this.timeout = setTimeout(() => {
          this.timeout = undefined
          this.make().then(() => {
            this.resolveList.forEach(resolve => resolve())
            this.resolveList = []
          })
        }, 160)
      } else {
        resolve()
      }
    })
  }

  /**
   * Adds texts in sync mode.
   *
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static addSync(data: Record<string, string>): void {
    forEach(data, (text, key) => {
      if (
        isString(text)
        && isFilled(text)
      ) {
        this.data[this.getName(key)] = text
      }
    })
  }

  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(data: Record<string, string>): Promise<void> {
    if (isFilled(data)) {
      if (Api.isLocalhost()) {
        this.addSync(data)
      } else {
        const names = Object.keys(data)

        if (names.length > 0) {
          await this.add(names)
        }
      }
    }
  }

  /**
   * Change the path to the script for obtaining the translation.
   *
   * Изменить путь к скрипту для получения перевода.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(url: string): Translate {
    this.url = url
    return Translate
  }

  static setPropsName(name: string): Translate {
    this.propsName = name
    return this
  }

  /**
   * Getting the full title for translation.
   *
   * Получение полного названия для перевода.
   * @param name code name/ название кода
   */
  protected static getName(name: string): string {
    return `${Geo.getLocation()}-${name}`
  }

  /**
   * Returns a list of names that are not yet in the list.
   *
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  protected static getNamesNone(names: string | string[]): string[] {
    const data: string[] = []

    toArray(names).forEach((name) => {
      if (
        name !== '__TRANSLATE_START__'
        && name !== '__TRANSLATE_END__'
        && !(this.getName(name) in this.data)
      ) {
        data.push(name)
      }
    })

    return data
  }

  /**
   * Getting the list of translations from the server.
   *
   * Получение списка переводов с сервера.
   */
  protected static async getResponse(): Promise<Record<string, string>> {
    const data = (await Api.get<Record<string, string>>({
      api: false,
      path: this.url,
      request: {
        [this.propsName]: this.cache
      },
      toData: true,
      global: true
    }))

    return data ?? {}
  }

  /**
   * Replaces the text with the specified values.
   *
   * Заменяет текст на указанные значения.
   * @param text text to replace/ текст для замены
   * @param replacement values for replacement/ значения для замены
   */
  protected static replacement(
    text: string,
    replacement?: string[] | Record<string, string | number>
  ): any {
    if (replacement) {
      return applyTemplate(text, replacement)
    }

    return text
  }

  /**
   * Adding translation data from the server.
   *
   * Добавление данных по переводу с сервера.
   */
  protected static async make(): Promise<void> {
    const list = await this.getResponse()

    this.cache.forEach((name) => {
      this.data[this.getName(name)] = list?.[name] ?? ''
    })

    this.cache = []
  }
}
