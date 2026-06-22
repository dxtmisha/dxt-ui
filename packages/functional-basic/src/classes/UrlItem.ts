import { forEach } from '../functions/forEach'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isFilled } from '../functions/isFilled'
import { transformation } from '../functions/transformation'
import { ServerStorage } from './ServerStorage'

/**
 * Isomorphic utility class for working with URLs.
 * Provides read-only getters and a single 'set' method for modifying the URL.
 *
 * Изоморфный утилитарный класс для работы с URL.
 * Предоставляет геттеры только для чтения и единственный метод «set» для изменения URL.
 */
export class UrlItem {
  /** Underlying standard URL object / Лежащий в основе стандартный объект URL */
  private url!: URL

  /**
   * Returns a request-isolated instance of UrlItem.
   *
   * Возвращает изолированный в рамках запроса экземпляр UrlItem.
   * @returns UrlItem instance / экземпляр UrlItem
   */
  static getInstance(): UrlItem {
    return ServerStorage.get('__ui:url-item__', () => new UrlItem())
  }

  /**
   * Constructs a new Url instance.
   *
   * Создает новый экземпляр Url.
   * @param url URL string or standard URL object / строка URL или стандартный объект URL
   */
  constructor(url?: string | URL) {
    this.set(url)
  }

  /** Full URL string / Полная строка URL */
  get href(): string {
    return this.url.href
  }

  /** Protocol including trailing colon / Протокол, включая ведущее двоеточие */
  get protocol(): string {
    return this.url.protocol
  }

  /** Username / Имя пользователя */
  get username(): string {
    return this.url.username
  }

  /** Password / Пароль */
  get password(): string {
    return this.url.password
  }

  /** Host (hostname and port) / Хост (имя хоста и порт) */
  get host(): string {
    return this.url.host
  }

  /** Hostname (excluding port) / Имя хоста (без порта) */
  get hostname(): string {
    return this.url.hostname
  }

  /** Port / Порт */
  get port(): string {
    return this.url.port
  }

  /** Path name / Путь к ресурсу */
  get pathname(): string {
    return this.url.pathname
  }

  /** Search string including leading question mark / Строка запроса, включая ведущий вопросительный знак */
  get search(): string {
    return this.url.search
  }

  /** Readonly search params object / Объекты параметров поиска только для чтения */
  get searchParams(): URLSearchParams {
    return this.url.searchParams
  }

  /** Hash string including leading hash sign / Хеш-строка, включая ведущий знак решетки */
  get hash(): string {
    return this.url.hash
  }

  /** Origin of the URL (readonly) / Источник URL (только для чтения) */
  get origin(): string {
    return this.url.origin
  }

  /**
   * Checks if the specified query parameter exists.
   *
   * Проверяет, существует ли указанный параметр запроса.
   * @param name parameter name / имя параметра
   * @returns check result / результат проверки
   */
  hasParam(name: string): boolean {
    return this.url.searchParams.has(name)
  }

  /**
   * Returns the value of a query parameter.
   *
   * Возвращает значение параметра запроса.
   * @param name parameter name / имя параметра
   * @returns parameter value or undefined if not found / значение параметра или undefined, если не найдено
   */
  getParam(name: string): string | undefined {
    return this.url.searchParams.get(name) ?? undefined
  }

  /**
   * Returns all query parameters as an object with transformed types.
   *
   * Возвращает все параметры запроса в виде объекта с преобразованными типами.
   * @returns Record<string, any> object of parameters / объект параметров
   */
  getParams(): Record<string, any> {
    const params: Record<string, any> = {}

    this.url.searchParams.forEach((value, key) => {
      params[key] = transformation(value)
    })

    return params
  }

  /**
   * Updates the URL value.
   *
   * Обновляет значение URL.
   * @param url URL string or standard URL object / строка URL или стандартный объект URL
   * @returns this Url instance / текущий экземпляр Url
   */
  set(url?: string | URL): this {
    if (!url) {
      if (isDomRuntime()) {
        this.url = new URL(window.location.href)
      } else {
        this.url = new URL('http://localhost')
      }
    } else if (url instanceof URL) {
      this.url = new URL(url.href)
    } else {
      const hasProtocol = /^[a-z0-9+.-]+:/i.test(url)

      if (hasProtocol) {
        this.url = new URL(url)
      } else if (isDomRuntime()) {
        this.url = new URL(url, window.location.origin)
      } else {
        this.url = new URL(url, 'http://localhost')
      }
    }

    return this
  }

  /**
   * Sets the value of a query parameter.
   *
   * Устанавливает значение параметра запроса.
   * @param name parameter name / имя параметра
   * @param value parameter value / значение параметра
   * @returns this UrlItem instance / текущий экземпляр UrlItem
   */
  setParam(name: string, value: string): this {
    this.url.searchParams.set(name, value)
    return this
  }

  /**
   * Replaces all query parameters with the specified object.
   *
   * Заменяет все параметры запроса на указанный объект.
   * @param params parameters to set / параметры для установки
   * @returns this UrlItem instance / текущий экземпляр UrlItem
   */
  setParams(params: Record<string, any>): this {
    const keys = Array.from(this.url.searchParams.keys())
    keys.forEach(key => this.deleteParam(key))

    forEach(params, (value, key) => {
      if (isFilled(value)) {
        this.setParam(key, String(value))
      }
    })

    return this
  }

  /**
   * Deletes a query parameter.
   *
   * Удаляет параметр запроса.
   * @param name parameter name / имя параметра
   * @returns this UrlItem instance / текущий экземпляр UrlItem
   */
  deleteParam(name: string): this {
    this.url.searchParams.delete(name)
    return this
  }

  /**
   * Converts the Url instance to its string representation.
   *
   * Преобразует экземпляр Url в его строковое представление.
   * @returns full URL string / полная строка URL
   */
  toString(): string {
    return this.url.toString()
  }

  /**
   * Converts the Url instance to JSON string representation.
   *
   * Преобразует экземпляр Url в строковое представление JSON.
   * @returns full URL string / полная строка URL
   */
  toJSON(): string {
    return this.url.toJSON()
  }
}
