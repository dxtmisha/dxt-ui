import { executeFunction } from '@dxtmisha/functional-basic'
import { FigmaStorageData, type FigmaStorageDataValue } from './FigmaStorageData'
import { getFigmaItemByIdOrRoot } from '../functions/getFigmaItemByIdOrRoot'

import type { UiFigmaNode } from '../types/figmaTypes'

/**
 * Class for working with Figma storage (PluginData).
 *
 * Класс для работы с хранилищем Figma (PluginData).
 */
export class FigmaStorage<T> {
  /**
   * Getting an instance of the class for working with Figma storage (PluginData).
   *
   * Получение экземпляра класса для работы с хранилищем Figma (PluginData).
   * @param name value name / название значения
   * @param item object for storing data / объект для хранения данных
   * @returns current instance / текущий экземпляр
   */
  static getInstance<T>(
    name: string,
    item: UiFigmaNode = figma.root
  ): FigmaStorage<T> {
    const id = 'id' in item ? item.id : 'root'
    const key = `${id}:${name}`

    if (key in items) {
      return items[key] as FigmaStorage<T>
    }

    const storage = new FigmaStorage<T>(name, item as PluginDataMixin)

    items[key] = storage as FigmaStorage<unknown>
    return storage
  }

  /**
   * Getting an instance of the class for working with Figma storage (PluginData).
   *
   * Получение экземпляра класса для работы с хранилищем Figma (PluginData).
   * @param name value name / название значения
   * @param id object id / id объекта
   * @returns current instance / текущий экземпляр
   */
  static async getInstanceById<T>(
    name: string,
    id?: string
  ): Promise<FigmaStorage<T>> {
    const item = await getFigmaItemByIdOrRoot(id)
    return FigmaStorage.getInstance<T>(name, item)
  }

  /**
   * Resets all cached storage instances.
   *
   * Сбрасывает все кэшированные экземпляры хранилища.
   */
  static reset(): void {
    for (const key of Object.keys(items)) {
      delete items[key]
    }
  }

  protected data: FigmaStorageData<T>

  /**
   * Constructor
   * @param name value name / название значения
   * @param item object for storing data / объект для хранения данных
   * @param cache cache time / время кэширования
   */
  constructor(
    protected readonly name: string,
    protected readonly item: PluginDataMixin = figma.root,
    protected readonly cache?: number
  ) {
    this.data = new FigmaStorageData<T>(name, cache)
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @param defaultValue default value / значение по умолчанию
   * @returns stored data or default value / сохраненные данные или значение по умолчанию
   */
  get<D extends T | (() => T) | undefined = undefined>(
    defaultValue?: D
  ): [D] extends [undefined] ? T | undefined : T {
    this.make()

    if (this.data.isValue()) {
      return this.data.get() as [D] extends [undefined] ? T | undefined : T
    }

    if (defaultValue !== undefined) {
      return this.set(defaultValue) as [D] extends [undefined] ? T | undefined : T
    }

    return undefined as [D] extends [undefined] ? T | undefined : T
  }

  /**
   * Changing data in storage.
   *
   * Изменение данных в хранилище.
   * @param value new values / новые значения
   * @returns current value / текущее значение
   */
  set(value?: T | (() => T)): T | undefined {
    this.data.update(executeFunction(value))

    this.item.setPluginData(
      this.data.getName(),
      JSON.stringify(this.data.toValue())
    )

    return this.data.get()
  }

  /**
   * Removing data from storage.
   *
   * Удаление данных из хранилища.
   * @returns current instance / текущий экземпляр
   */
  remove(): this {
    this.data.remove()

    this.item.setPluginData(this.data.getName(), '')

    return this
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @returns data from storage / данные из хранилища
   */
  protected getValue(): FigmaStorageDataValue<T> | undefined {
    const value = this.item.getPluginData(this.data.getName())

    if (value) {
      try {
        return JSON.parse(value)
      } catch (e) {
        console.error('FigmaStorage', this.data.getName(), e)
      }
    }

    return undefined
  }

  /**
   * Making an instance from storage data.
   *
   * Создание экземпляра из данных хранилища.
   * @returns current instance / текущий экземпляр
   */
  protected make(): this {
    if (this.data.isNull()) {
      this.data.setByObject(this.getValue())
    }

    return this
  }
}

const items: Record<string, FigmaStorage<unknown>> = {}
