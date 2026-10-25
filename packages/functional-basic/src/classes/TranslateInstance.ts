// ai-none

import { applyTemplate } from '../functions/applyTemplate'
import { forEach } from '../functions/forEach'
import { isApiSuccess } from '../functions/isApiSuccess'
import { isArray } from '../functions/isArray'
import { isFilled } from '../functions/isFilled'
import { isString } from '../functions/isString'
import { toArray } from '../functions/toArray'

import { Api } from './Api'
import { ErrorCenter } from './ErrorCenter'
import { TranslateFile } from './TranslateFile'

import {
  TRANSLATE_GLOBAL_PREFIX,
  TRANSLATE_TIME_OUT,
  type TranslateBatch,
  type TranslateCode,
  type TranslateDataFile,
  type TranslateList
} from '../types/translateTypes'

/**
 * Class for getting the translated text.
 * Queued requests and their cache writes retain the language and location of the original call.
 *
 * Класс для получения переведенного текста.
 * Запросы в очереди и запись их результатов в кеш сохраняют язык и регион исходного вызова.
 */
export class TranslateInstance {
  /** List of translations / Список переводов */
  protected readonly data: Record<string, string> = {}

  /** Pending batches grouped by language and location / Ожидающие партии, сгруппированные по языку и региону */
  protected batches: TranslateBatch[] = []

  /** Timeout for getting translations / Таймаут для получения переводов */
  protected timeout?: ReturnType<typeof setTimeout>

  /** Flag indicating whether to read from the API / Флаг, указывающий, нужно ли читать из API */
  protected isReadApi: boolean = true

  /**
   * Creates an instance of the class.
   *
   * Создает экземпляр класса.
   * @param url URL for getting translations / URL для получения переводов
   * @param propsName Property name for getting translations / Имя свойства для получения переводов
   * @param files List of files with translations / Список файлов с переводами
   */
  constructor(
    protected url: string = '/api/translate',
    protected propsName: string = 'list',
    protected readonly files: TranslateFile = new TranslateFile()
  ) { }

  /**
   * Getting the translation text by its code.
   *
   * Получение текста перевода по его коду.
   * @param name code name / название кода
   * @param replacement If set, replaces the text with the specified values / если установлено, заменяет текст на указанные значения
   * @returns translation text / текст перевода
   */
  async get(
    name: string,
    replacement?: string[] | Record<string, string | number>
  ): Promise<string> {
    const location = this.files.getLocation()
    const language = this.files.getLanguage()
    const text = this.getText(name, location, language)

    if (text) {
      return this.replacement(text, replacement)
    }

    if (!Api.isLocalhost()) {
      await this.add(name)
    }

    return this.replacement(this.getText(name, location, language) ?? name, replacement)
  }

  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations / список кодов для получения переводов
   * @returns object with translations / объект с переводами
   */
  getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>> {
    if (names.length === 0) {
      return Promise.resolve({} as TranslateList<T>)
    }

    return new Promise((resolve) => {
      const list: Record<string, string> = {}
      let end = 0

      for (const name of names) {
        const code = (isArray(name) ? name[0] : name) as string
        const replacement = isArray(name) ? name.slice(1) : undefined

        this.get(code, replacement)
          .then((text) => {
            list[code] = text
          })
          .catch(() => {
            list[code] = code
          })
          .finally(() => {
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
   * @param names list of codes to get translations / список кодов для получения переводов
   * @param first If set to false, returns an empty string if there is no text / если установлено false, возвращает пустую строку, если нет текста
   * @returns object with translations / объект с переводами
   */
  getListSync<T extends TranslateCode[]>(names: T, first: boolean = false): TranslateList<T> {
    const list: Record<string, string> = {}

    for (const name of names) {
      const code = (isArray(name) ? name[0] : name) as string
      const replacement = isArray(name) ? name.slice(1) : undefined

      list[code] = this.getSync(code, first, replacement)
    }

    return list as TranslateList<T>
  }

  /**
   * Getting the translation text by its code (Sync).
   *
   * Получение текста перевода по его коду (Sync).
   * @param name code name / название кода
   * @param first If set to false, returns an empty string if there is no text / если установлено false, возвращает пустую строку, если нет текста
   * @param replacement If set, replaces the text with the specified values / если установлено, заменяет текст на указанные значения
   * @returns translation text / текст перевода
   */
  getSync(
    name: string,
    first: boolean = false,
    replacement?: string[] | Record<string, string | number>
  ): string {
    const text = this.getText(name)

    if (text) {
      return this.replacement(text, replacement)
    }

    return first ? ' ' : name
  }

  /**
   * Change the name of the property to get the translation.
   *
   * Изменить имя свойства для получения перевода.
   * @param name property name / имя свойства
   */
  setPropsName(name: string): this {
    this.propsName = name
    return this
  }

  /**
   * Change the read mode from the API.
   *
   * Изменить режим чтения из API.
   * @param value read mode / режим чтения
   */
  setReadApi(value: boolean): this {
    this.isReadApi = value
    return this
  }

  /**
   * Change the path to the script for obtaining the translation.
   *
   * Изменить путь к скрипту для получения перевода.
   * @param url path to the script / путь к скрипту
   */
  setUrl(url: string): this {
    this.url = url
    return this
  }

  /**
   * Added a list of translated texts.
   *
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations / список кодов для получения переводов
   * @returns promise resolving when translations are added / промис, разрешающийся после добавления переводов
   */
  add(names: string | string[]): Promise<void> {
    return new Promise((resolve) => {
      const list = this.getNamesNone(names)

      if (list.length > 0) {
        const location = this.files.getLocation()
        const language = this.files.getLanguage()
        const path = Api.getItem().getUrl(this.url, false)
        let batch = this.batches.find(item =>
          item.location === location
          && item.language === language
          && item.path === path
        )

        if (!batch) {
          batch = { location, language, path, codes: [], resolves: [] }
          this.batches.push(batch)
        }

        for (const name of list) {
          if (!batch.codes.includes(name)) {
            batch.codes.push(name)
          }
        }
        batch.resolves.push(resolve)

        if (this.timeout) {
          clearTimeout(this.timeout)
        }

        this.timeout = setTimeout(() => {
          const batches = this.batches

          this.batches = []
          this.timeout = undefined

          for (const batch of batches) {
            this.make(batch.codes, batch.location, batch.language, batch.path)
              .catch((error) => {
                ErrorCenter.on({
                  group: 'translate',
                  code: 'error',
                  details: error
                })
              })
              .finally(() => {
                batch.resolves.forEach(item => item())
              })
          }
        }, TRANSLATE_TIME_OUT)
      } else {
        resolve()
      }
    })
  }

  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value / список текстов в виде ключ-значение
   * @returns promise / промис
   */
  async addNormalOrSync(data: Record<string, string>): Promise<void> {
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
   * Adds texts in sync mode.
   *
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value / список текстов в виде ключ-значение
   */
  addSync(data: Record<string, string>): void {
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
   * Adds texts synchronously from the file.
   *
   * Добавляет тексты синхронно из файла.
   * @param data file with translations / файл с переводами
   */
  addSyncByFile(data: TranslateDataFile): void {
    this.files.add(data)
  }

  /**
   * Adds texts synchronously by location.
   *
   * Добавляет тексты синхронно по местоположению.
   * @param data list of texts by location / список текстов по местоположению
   */
  addSyncByLocation(data: Record<string, Record<string, string>>): void {
    forEach(
      data,
      (
        list,
        location
      ) => forEach(list, (text, key) => {
        const index = `${location}-${key}`

        if (!(index in this.data)) {
          this.data[index] = text
        }
      })
    )
  }

  /**
   * Checks for translation by code, taking into account fallback options.
   *
   * Проверяет наличие перевода по коду с учетом запасных вариантов.
   * @param name code name / название кода
   * @returns boolean / логическое значение
   */
  protected hasName(name: string): boolean {
    return (this.getName(name) in this.data)
      || (this.getNameByLanguage(name) in this.data)
      || (this.getNameByGlobal(name) in this.data)
  }

  /**
   * Retrieves translation text by code, returning the first matching fallback.
   *
   * Получает текст перевода по коду, возвращая первое совпадение из запасных вариантов.
   * @param name code name / название кода
   * @param location requested location / запрошенный регион
   * @param language requested language / запрошенный язык
   * @returns translation text or undefined / текст перевода или undefined
   */
  protected getText(
    name: string,
    location: string = this.files.getLocation(),
    language: string = this.files.getLanguage()
  ): string | undefined {
    const fullName = this.getName(name, location)

    if (this.data[fullName]) {
      return this.data[fullName]
    }

    const nameByLanguage = this.getNameByLanguage(name, language)

    if (this.data[nameByLanguage]) {
      return this.data[nameByLanguage]
    }

    const nameByGlobal = this.getNameByGlobal(name)

    if (this.data[nameByGlobal]) {
      return this.data[nameByGlobal]
    }

    return undefined
  }

  /**
   * Getting the full title for translation.
   *
   * Получение полного названия для перевода.
   * @param name code name / название кода
   * @param location requested location / запрошенный регион
   * @returns full title / полное название
   */
  protected getName(name: string, location: string = this.files.getLocation()): string {
    return `${location}-${name}`
  }

  /**
   * Getting the title for translation by language.
   *
   * Получение названия для перевода по языку.
   * @param name code name / название кода
   * @param language requested language / запрошенный язык
   * @returns title by language / название по языку
   */
  protected getNameByLanguage(name: string, language: string = this.files.getLanguage()): string {
    return `${language}-${name}`
  }

  /**
   * Getting the title for translation globally.
   *
   * Получение названия для перевода глобально.
   * @param name code name / название кода
   * @returns global title / глобальное название
   */
  protected getNameByGlobal(name: string): string {
    return `${TRANSLATE_GLOBAL_PREFIX}-${name}`
  }

  /**
   * Returns a list of names that are not yet in the list.
   *
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations / список кодов для получения переводов
   * @returns list of missing names / список отсутствующих имен
   */
  protected getNamesNone(names: string | string[]): string[] {
    const data: string[] = []

    toArray(names).forEach((name) => {
      if (
        name !== '__TRANSLATE_START__'
        && name !== '__TRANSLATE_END__'
        && !this.hasName(name)
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
   * @param cache list of requested codes / список запрошенных кодов
   * @param path API path resolved for the original locale / API-путь, вычисленный для исходной локали
   * @returns promise with record of translations / промис с записью переводов
   */
  protected async getResponse(cache: string[], path: string): Promise<Record<string, string>> {
    const data = (await Api.get<Record<string, string>>({
      api: false,
      path,
      request: {
        [this.propsName]: cache
      },
      toData: true,
      timeout: 12_000,
      global: true
    }))

    if (!isApiSuccess(data)) {
      ErrorCenter.on({
        group: 'translate',
        code: 'error',
        details: data
      })
    }

    return data ?? {}
  }

  /**
   * Replaces the text with the specified values.
   *
   * Заменяет текст на указанные значения.
   * @param text text to replace / текст для замены
   * @param replacement values for replacement / значения для замены
   * @returns replaced text / замененный текст
   */
  protected replacement(
    text: string,
    replacement?: string[] | Record<string, string | number>
  ): string {
    if (replacement) {
      return applyTemplate(text, replacement)
    }

    return text
  }

  /**
   * Adding translation data from the server.
   *
   * Добавление данных по переводу с сервера.
   * @param cache list of codes to fetch / список кодов для загрузки
   * @param location original batch location / исходный регион партии
   * @param language original batch language / исходный язык партии
   * @param path API path resolved for the original locale / API-путь, вычисленный для исходной локали
   * @returns promise / промис
   */
  protected async make(cache: string[], location: string, language: string, path: string): Promise<void> {
    let list: Record<string, string> | undefined

    if (this.files.isFile(location, language)) {
      list = await this.files.getList(location, language)
    } else if (this.isReadApi) {
      list = await this.getResponse(cache, path)
    }

    if (list) {
      this.makeList(list, cache, location)
    }
  }

  /**
   * Adding translation data from the list.
   *
   * Добавление данных по переводу из списка.
   * @param list list of translations / список переводов
   * @param cache list of requested codes / список запрошенных кодов
   * @param location original batch location / исходный регион партии
   */
  protected makeList(
    list: Record<string, string>,
    cache: string[],
    location: string
  ): void {
    cache.forEach((name) => {
      this.data[this.getName(name, location)] = list?.[name] ?? ''
    })
  }
}
