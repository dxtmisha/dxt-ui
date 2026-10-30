import { executeFunction } from '../functions/executeFunction'
import { isDomRuntime } from '../functions/isDomRuntime'
import { sanitizeLocation } from '../functions/sanitizeLocation'

import { Cookie } from './Cookie'
import { DataStorage } from './DataStorage'

/**
 * Cookie key for storing the geo code /
 * Ключ куки для хранения кода гео
 */
export const UI_GEO_COOKIE_KEY = 'ui-geo-code'

/**
 * Storage key for storing the geo code /
 * Ключ хранилища для сохранения кода гео
 */
const STORAGE_NAME_CODE = '__ui:geo-code__'

/**
 * Default fallback location code /
 * Код локации по умолчанию
 */
const DEFAULT_LOCATION = 'en-GB'

/**
 * Class for managing and resolving the current location code within Geo.
 * Handles persistence in DataStorage and Cookie, DOM fallback detection, and default fallbacks.
 *
 * Класс для управления и определения текущего кода локации внутри Geo.
 * Обрабатывает сохранение в DataStorage и Cookie, определение по DOM и значения по умолчанию.
 */
export class GeoLocation {
  /**
   * Data storage instance for geo code /
   * Экземпляр хранилища данных для гео-кода
   */
  protected readonly storage = new DataStorage<string>(STORAGE_NAME_CODE)

  /**
   * Current location code (e.g., 'en-GB') /
   * Текущий код локации (например, 'en-GB')
   */
  protected location: string

  /**
   * Constructor for GeoLocation.
   * Initializes the location from storage, cookies, DOM, or default fallback.
   *
   * Конструктор для GeoLocation.
   * Инициализирует местоположение из хранилища, куки, DOM или значения по умолчанию.
   * @param valueDefault optional default value or provider / опциональное значение по умолчанию или провайдер
   */
  constructor(
    protected valueDefault?: string | (() => string | undefined)
  ) {
    this.location = this.findLocation()
  }

  /**
   * Returns the current location code string.
   *
   * Возвращает строку текущего кода локации.
   * @returns current location code / текущий код локации
   */
  get(): string {
    return this.location
  }

  /**
   * Updates the current location code and optionally persists it in storage and cookie.
   *
   * Обновляет текущий код локации и опционально сохраняет его в хранилище и куки.
   * @param code optional location code (e.g., 'en-GB') / опциональный код локации (например, 'en-GB')
   * @param save whether to save the location in storage and cookie / нужно ли сохранять местоположение в хранилище и куки
   * @returns current instance / текущий экземпляр
   */
  set(code?: string, save?: boolean): this {
    this.location = sanitizeLocation(code) ?? DEFAULT_LOCATION

    if (save) {
      this.storage.set(this.location)
      this.getCookie().set(this.location)
    }

    return this
  }

  /**
   * Sets the default value or resolver for the location code.
   *
   * Устанавливает значение по умолчанию или функцию его вычисления для кода локации.
   * @param code default code value / значение кода по умолчанию
   * @returns current instance / текущий экземпляр
   */
  setValueDefault(code?: string | (() => string | undefined)): this {
    this.valueDefault = code
    this.location = this.findLocation()

    return this
  }

  /**
   * Internal method to get the geo cookie instance.
   *
   * Внутренний метод для получения экземпляра куки гео.
   * @returns cookie instance / экземпляр куки
   */
  protected getCookie(): Cookie<string> {
    return Cookie.getInstance<string>(UI_GEO_COOKIE_KEY)
  }

  /**
   * Internal method to determine the initial location.
   * Resolves in order: Cookie -> DOM sources -> default provider -> DEFAULT_LOCATION.
   *
   * Внутренний метод для определения начального местоположения.
   * Определяет по порядку: Cookie -> источники DOM -> провайдер по умолчанию -> DEFAULT_LOCATION.
   * @returns initial location code / начальный код локации
   */
  protected findLocation(): string {
    return (
      sanitizeLocation(this.getCookie().get())
      ?? this.findLocationDom()
      ?? sanitizeLocation(executeFunction(this.valueDefault))
      ?? DEFAULT_LOCATION
    )
  }

  /**
   * Internal method to determine the location from document attributes (html lang).
   *
   * Внутренний метод для определения местоположения из атрибутов документа (html lang).
   * @returns location code from document or undefined / код локации из документа или undefined
   */
  protected findLocationDocument(): string | undefined {
    if (typeof document !== 'undefined') {
      return sanitizeLocation(document.documentElement?.lang)
    }

    return undefined
  }

  /**
   * Internal method to determine the location from DOM-specific sources.
   * Returns undefined when not in a DOM runtime or when no DOM locale is available.
   *
   * Внутренний метод для определения местоположения из DOM-источников.
   * Возвращает undefined вне DOM-окружения или при отсутствии локали в DOM.
   * @returns location code from DOM or undefined / код локации из DOM или undefined
   */
  protected findLocationDom(): string | undefined {
    if (!isDomRuntime()) {
      return undefined
    }

    return (
      sanitizeLocation(this.storage.get())
      ?? this.findLocationDocument()
      ?? this.findLocationNavigator()
    )
  }

  /**
   * Internal method to determine the location from navigator properties.
   *
   * Внутренний метод для определения местоположения из свойств navigator.
   * @returns location code from navigator or undefined / код локации из navigator или undefined
   */
  protected findLocationNavigator(): string | undefined {
    if (typeof navigator !== 'undefined') {
      return sanitizeLocation(navigator.language || navigator.languages?.[0])
    }

    return undefined
  }
}
