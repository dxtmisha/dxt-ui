import { isArray, isFilled } from '@dxtmisha/functional-basic'
import type { SdkMcpServer } from '../types/McpTypes'

/**
 * Base abstract class for managing MCP item collections (Tools, Resources, Prompts).
 *
 * Базовый абстрактный класс для управления коллекциями элементов MCP (инструменты, ресурсы, промпты).
 */
export abstract class McpItemAbstract<Item, Input = Item | Item[]> {
  /** Registered items list / Список зарегистрированных элементов */
  protected items: Item[] = []

  /**
   * Constructor for McpItemAbstract.
   *
   * Конструктор для McpItemAbstract.
   * @param items Initial item, array of items or manager instance / Начальный элемент, массив элементов или экземпляр менеджера
   */
  constructor(items?: Input) {
    if (isFilled(items)) {
      this.add(items)
    }
  }

  /**
   * Checks if an item with the given key is registered.
   *
   * Проверяет, зарегистрирован ли элемент с указанным ключом.
   * @param key Item identifier or name / Идентификатор или имя элемента
   * @returns true if item exists / true, если элемент существует
   */
  hasItem(key: string): boolean {
    return this.items.some(item => this.isMatch(item, key))
  }

  /**
   * Finds a registered item by its key.
   *
   * Находит зарегистрированный элемент по его ключу.
   * @param key Item identifier or name / Идентификатор или имя элемента
   * @returns found item or undefined / найденный элемент или undefined
   */
  getItem(key: string): Item | undefined {
    return this.items.find(item => this.isMatch(item, key))
  }

  /**
   * Returns a copy of all registered items.
   *
   * Возвращает копию всех зарегистрированных элементов.
   * @returns array of registered items / массив зарегистрированных элементов
   */
  getItems(): Item[] {
    return [...this.items]
  }

  /**
   * Adds an item, array of items, or merges another manager instance.
   *
   * Добавляет элемент, массив элементов или объединяет другой экземпляр менеджера.
   * @param input Item, array of items or manager instance / Элемент, массив элементов или экземпляр менеджера
   * @returns current instance / текущий экземпляр
   */
  abstract add(input: Input): this

  /**
   * Adds a single item to the registry.
   *
   * Добавляет один элемент в реестр.
   * @param item Item to add / Элемент для добавления
   * @returns current instance / текущий экземпляр
   */
  addItem(item: Item): this {
    const key = this.getKey(item)

    if (this.hasItem(key)) {
      this.removeItem(key)
    }

    this.items.push(item)
    return this
  }

  /**
   * Adds multiple items to the registry.
   *
   * Добавляет несколько элементов в реестр.
   * @param items Array of items to add / Массив элементов для добавления
   * @returns current instance / текущий экземпляр
   */
  addItems(items: Item[]): this {
    if (isArray(items)) {
      items.forEach(item => this.addItem(item))
    }

    return this
  }

  /**
   * Removes an item from the registry by its key.
   *
   * Удаляет элемент из реестра по его ключу.
   * @param key Identifier or name of the item to remove / Идентификатор или имя элемента для удаления
   * @returns current instance / текущий экземпляр
   */
  removeItem(key: string): this {
    this.items = this.items.filter(item => !this.isMatch(item, key))
    return this
  }

  /**
   * Registers all managed items into an SDK McpServer instance.
   *
   * Регистрирует все управляемые элементы в экземпляре SDK McpServer.
   * @param sdkServer SDK McpServer instance / Экземпляр SDK McpServer
   */
  abstract register(sdkServer: SdkMcpServer): void

  /**
   * Extracts the unique key from an item.
   *
   * Извлекает уникальный ключ из элемента.
   * @param item Target item / Целевой элемент
   * @returns unique key string / строка уникального ключа
   * @protected
   */
  protected abstract getKey(item: Item): string

  /**
   * Checks if an item matches the given key.
   *
   * Проверяет, соответствует ли элемент указанному ключу.
   * @param item Target item / Целевой элемент
   * @param key Key to match against / Ключ для проверки
   * @returns true if item matches key / true, если элемент соответствует ключу
   * @protected
   */
  protected isMatch(item: Item, key: string): boolean {
    return this.getKey(item) === key
  }
}
