import { forEach, isArray } from '@dxtmisha/functional-basic'
import type {
  McpResourceContent,
  McpResourceItem,
  McpResourceRecord,
  McpResourceResult
} from '../types/McpTypes'

/**
 * Abstract class for managing and providing Model Context Protocol (MCP) resources.
 * Serves as a base template for custom resource generators and handlers.
 *
 * Абстрактный класс для управления и предоставления ресурсов Model Context Protocol (MCP).
 * Служит базовым шаблоном для пользовательских генераторов и обработчиков ресурсов.
 */
export abstract class McpResourceAbstract {
  /** List of resource items / Список элементов ресурсов */
  protected items: McpResourceItem[] = []
  /** URI scheme protocol for resources / Протокол схемы URI для ресурсов */
  protected scheme: string = 'dxt'

  /**
   * Constructor
   *
   * Конструктор
   * @param items List of initial resource items or records / Список начальных элементов или записей ресурсов
   * @param scheme Optional URI scheme protocol (defaults to 'dxt') / Опциональный протокол схемы URI (по умолчанию 'dxt')
   */
  constructor(
    items: (McpResourceItem | McpResourceRecord)[] = [],
    scheme: string = 'dxt'
  ) {
    this.scheme = scheme
    this.addItems(items)
  }

  /**
   * Returns current URI scheme protocol.
   *
   * Возвращает текущий протокол схемы URI.
   * @returns string
   */
  getScheme(): string {
    return this.scheme
  }

  /**
   * Sets new URI scheme protocol.
   *
   * Устанавливает новый протокол схемы URI.
   * @param scheme New URI scheme / Новый протокол схемы URI
   * @returns this
   */
  setScheme(scheme: string): this {
    this.scheme = scheme
    return this
  }

  /**
   * Checks if a resource with the specified URI exists.
   *
   * Проверяет, существует ли ресурс с указанным URI.
   * @param uri Resource URI / URI ресурса
   * @returns boolean
   */
  hasItem(uri: string): boolean {
    const targetUri = this.normalizeUri(uri)
    return this.items.some(item => item.uri === targetUri || item.uri === uri)
  }

  /**
   * Returns a resource item matching the specified URI.
   *
   * Возвращает элемент ресурса, соответствующий указанному URI.
   * @param uri Resource URI / URI ресурса
   * @returns McpResourceItem | undefined
   */
  getItem(uri: string): McpResourceItem | undefined {
    const targetUri = this.normalizeUri(uri)
    return this.items.find(item => item.uri === targetUri || item.uri === uri)
  }

  /**
   * Returns a resource item matching the specified name.
   *
   * Возвращает элемент ресурса, соответствующий указанному имени.
   * @param name Resource name / Имя ресурса
   * @returns McpResourceItem | undefined
   */
  getItemByName(name: string): McpResourceItem | undefined {
    return this.items.find(item => item.name === name)
  }

  /**
   * Returns the list of all registered resource items.
   *
   * Возвращает список всех зарегистрированных элементов ресурсов.
   * @returns McpResourceItem[]
   */
  getItems(): McpResourceItem[] {
    return this.items
  }

  /**
   * Adds a single resource item or record.
   *
   * Добавляет один элемент или запись ресурса.
   * @param item Resource item or record / Элемент или запись ресурса
   * @returns this
   */
  addItem(item: McpResourceItem | McpResourceRecord): this {
    const normalizedItem = this.normalizeItem(item)

    const existingIndex = this.items.findIndex(existingItem => existingItem.uri === normalizedItem.uri)
    if (existingIndex >= 0) {
      this.items[existingIndex] = normalizedItem
    } else {
      this.items.push(normalizedItem)
    }

    return this
  }

  /**
   * Adds multiple resource items or records.
   *
   * Добавляет множество элементов или записей ресурсов.
   * @param items List of resource items or records / Список элементов или записей ресурсов
   * @returns this
   */
  addItems(items: (McpResourceItem | McpResourceRecord)[]): this {
    if (isArray(items)) {
      forEach(items, (item: McpResourceItem | McpResourceRecord) => {
        this.addItem(item)
      })
    }

    return this
  }

  /**
   * Removes a resource by its URI.
   *
   * Удаляет ресурс по его URI.
   * @param uri Resource URI / URI ресурса
   * @returns this
   */
  removeItem(uri: string): this {
    this.items = this.items.filter(item => item.uri !== uri)
    return this
  }

  /**
   * Clears all registered resource items.
   *
   * Очищает все зарегистрированные элементы ресурсов.
   * @returns this
   */
  resetItems(): this {
    this.items = []
    return this
  }

  /**
   * Normalizes a resource URI string into a valid URI format with a scheme.
   *
   * Нормализует строку URI ресурса в валидный формат URI со схемой.
   * @param uri Resource URI string / Строка URI ресурса
   * @returns string
   */
  normalizeUri(uri: string): string {
    if (uri.includes('://')) {
      return uri
    }

    return `${this.getScheme()}:///${uri.replace(/^\/+/, '')}`
  }

  /**
   * Abstract method to read the content of a resource.
   *
   * Абстрактный метод для чтения содержимого ресурса.
   * @param resource Resource item definition / Определение элемента ресурса
   * @param uri Requested resource URI / Запрошенный URI ресурса
   * @param extra Extra context / Дополнительный контекст
   * @returns Promise<McpResourceResult | McpResourceContent | McpResourceContent[] | string> | McpResourceResult | McpResourceContent | McpResourceContent[] | string
   */
  abstract read(
    resource: McpResourceItem,
    uri: URL,
    extra?: unknown
  ): Promise<McpResourceResult | McpResourceContent | McpResourceContent[] | string> | McpResourceResult | McpResourceContent | McpResourceContent[] | string

  /**
   * Transforms registered items into executable MCP resource definitions with bound read handlers.
   *
   * Преобразует зарегистрированные элементы в исполняемые определения ресурсов MCP с привязанными обработчиками чтения.
   * @returns McpResourceItem[]
   */
  toMcpResources(): McpResourceItem[] {
    return this.items.map(item => ({
      ...item,
      handler: (uri: URL, extra?: unknown) => this.read(item, uri, extra)
    }))
  }

  /**
   * Normalizes a resource item or record into standard McpResourceItem structure.
   *
   * Нормализует элемент или запись ресурса в стандартную структуру McpResourceItem.
   * @param item Resource item or record / Элемент или запись ресурса
   * @returns McpResourceItem
   */
  protected normalizeItem(item: McpResourceItem | McpResourceRecord): McpResourceItem {
    return {
      uri: this.normalizeUri(item.uri),
      name: item.name,
      mimeType: item.mimeType || 'text/plain',
      description: item.description,
      text: item.text,
      blob: item.blob,
      handler: (item as McpResourceItem).handler,
      _meta: (item as McpResourceItem)._meta
    }
  }
}
