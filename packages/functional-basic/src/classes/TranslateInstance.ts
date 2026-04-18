import { applyTemplate } from '../functions/applyTemplate'
import { forEach } from '../functions/forEach'
import { isFilled } from '../functions/isFilled'
import { isString } from '../functions/isString'
import { toArray } from '../functions/toArray'

import { Api } from './Api'
import { TranslateFile } from './TranslateFile'

import { TRANSLATE_GLOBAL_PREFIX, TRANSLATE_TIME_OUT, type TranslateCode, type TranslateDataFile, type TranslateList } from '../types/translateTypes'
import { ErrorCenter, isApiSuccess } from '../library'

/**
 * Class for getting the translated text.
 *
 * Класс для получения переведенного текста.
 */
export class TranslateInstance {
  /** List of translations/ Список переводов */
  protected readonly data: Record<string, string> = {}

  /** Cache of codes to get/ Кэш кодов для получения */
  protected cache: string[] = []

  /** List of resolves for promises/ Список разрешений для промисов */
  protected resolveList: (() => void)[] = []

  /** Timeout for getting translations/ Таймаут для получения переводов */
  protected timeout?: any

  /** Flag indicating whether to read from the API/ Флаг, указывающий, нужно ли читать из API */
  protected isReadApi: boolean = true

  /**
   * Creates an instance of the class.
   *
   * Создает экземпляр класса.
   * @param url URL for getting translations/ URL для получения переводов
   * @param propsName Property name for getting translations/ Имя свойства для получения переводов
   * @param files List of files with translations/ Список файлов с переводами
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
   * @param name code name/ название кода
   * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
   */
  async get(
    name: string,
    replacement?: string[] | Record<string, string | number>
  ): Promise<string> {
    const text = this.getText(name)

    if (text) {
      return this.replacement(text, replacement)
    }

    if (!Api.isLocalhost()) {
      await this.add(name)
    }

    return this.replacement(this.getText(name) ?? name)
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
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>> {
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
  getListSync<T extends TranslateCode[]>(names: T, first: boolean = false): TranslateList<T> {
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
  add(names: string | string[]): Promise<void> {
    return new Promise((resolve) => {
      const list = this.getNamesNone(names)

      if (list.length > 0) {
        this.cache.push(...list)
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
        }, TRANSLATE_TIME_OUT)
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
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
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
   * Adds texts synchronously by location.
   *
   * Добавляет тексты синхронно по местоположению.
   * @param data list of texts by location/ список текстов по местоположению
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
   * Adds texts synchronously from the file.
   *
   * Добавляет тексты синхронно из файла.
   * @param data file with translations/ файл с переводами
   */
  addSyncByFile(data: TranslateDataFile): void {
    this.files.add(data)
  }

  /**
   * Change the path to the script for obtaining the translation.
   *
   * Изменить путь к скрипту для получения перевода.
   * @param url path to the script/ путь к скрипту
   */
  setUrl(url: string): this {
    this.url = url
    return this
  }

  /**
   * Change the name of the property to get the translation.
   *
   * Изменить имя свойства для получения перевода.
   * @param name property name/ имя свойства
   */
  setPropsName(name: string): this {
    this.propsName = name
    return this
  }

  /**
   * Change the read mode from the API.
   *
   * Изменить режим чтения из API.
   * @param value read mode/ режим чтения
   */
  setReadApi(value: boolean): this {
    this.isReadApi = value
    return this
  }

  /**
   * Checks for translation by code, taking into account fallback options.
   *
   * Проверяет наличие перевода по коду с учетом запасных вариантов.
   * @param name code name/ название кода
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
   * @param name code name/ название кода
   */
  protected getText(name: string): string | undefined {
    const fullName = this.getName(name)

    if (fullName in this.data) {
      return this.data[fullName]
    }

    const nameByLanguage = this.getNameByLanguage(name)

    if (nameByLanguage in this.data) {
      return this.data[nameByLanguage]
    }

    const nameByGlobal = this.getNameByGlobal(name)

    if (nameByGlobal in this.data) {
      return this.data[nameByGlobal]
    }

    return undefined
  }

  /**
   * Getting the full title for translation.
   *
   * Получение полного названия для перевода.
   * @param name code name/ название кода
   */
  protected getName(name: string): string {
    return `${this.files.getLocation()}-${name}`
  }

  /**
   * Getting the title for translation by language.
   *
   * Получение названия для перевода по языку.
   * @param name code name/ название кода
   */
  protected getNameByLanguage(name: string): string {
    return `${this.files.getLanguage()}-${name}`
  }

  /**
   * Getting the title for translation globally.
   *
   * Получение названия для перевода глобально.
   * @param name code name/ название кода
   */
  protected getNameByGlobal(name: string): string {
    return `${TRANSLATE_GLOBAL_PREFIX}-${name}`
  }

  /**
   * Returns a list of names that are not yet in the list.
   *
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations/ список кодов для получения переводов
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
   */
  protected async getResponse(): Promise<Record<string, string>> {
    const data = (await Api.get<Record<string, string>>({
      api: false,
      path: this.url,
      request: {
        [this.propsName]: this.cache
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
   * @param text text to replace/ текст для замены
   * @param replacement values for replacement/ значения для замены
   */
  protected replacement(
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
  protected async make(): Promise<void> {
    let list: Record<string, string> | undefined

    if (this.files.isFile()) {
      list = await this.files.getList()
    } else if (this.isReadApi) {
      list = await this.getResponse()
    }

    if (list) {
      this.makeList(list)
    }
  }

  /**
   * Adding translation data from the list.
   *
   * Добавление данных по переводу из списка.
   * @param list list of translations/ список переводов
   */
  protected makeList(list: Record<string, string>): void {
    this.cache.forEach((name) => {
      this.data[this.getName(name)] = list?.[name] ?? ''
    })

    this.cache = []
  }
}
