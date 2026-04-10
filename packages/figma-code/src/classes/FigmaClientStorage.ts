import { executeFunction } from '@dxtmisha/functional-basic'
import { FigmaStorageData, type FigmaStorageDataValue } from './FigmaStorageData'

/**
 * Class for working with Figma client storage (clientStorage).
 *
 * Класс для работы с клиентским хранилищем Figma (clientStorage).
 */
export class FigmaClientStorage<T> {
  /**
   * Getting an instance of the class for working with Figma client storage (clientStorage).
   *
   * Получение экземпляра класса для работы с клиентским хранилищем Figma (clientStorage).
   * @param name value name/ название значения
   * @returns current instance/ текущий экземпляр
   */
  static getInstance<T>(name: string) {
    if (name in items) {
      return items[name] as FigmaClientStorage<T>
    }

    const storage = new FigmaClientStorage<T>(name)

    items[name] = storage
    return storage
  }

  protected data: FigmaStorageData<T>

  /**
   * Constructor
   * @param name value name/ название значения
   * @param cache cache time/ время кэширования
   */
  constructor(
    protected readonly name: string,
    protected readonly cache?: number
  ) {
    this.data = new FigmaStorageData<T>(name, cache)
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @param defaultValue default value/ значение по умолчанию
   */
  async get(defaultValue?: T | (() => T | Promise<T>)): Promise<T | undefined> {
    await this.make()

    if (this.data.isValue()) {
      return this.data.get()
    }

    if (defaultValue !== undefined) {
      return await this.set(defaultValue)
    }

    return undefined
  }

  /**
   * Changing data in storage.
   *
   * Изменение данных в хранилище.
   * @param value new values/ новые значения
   * @returns current value/ текущее значение
   */
  async set(value?: T | (() => T | Promise<T>)): Promise<T | undefined> {
    this.data.update(await executeFunction(value))

    await figma.clientStorage.setAsync(
      this.data.getName(),
      this.data.toValue()
    )

    return this.data.get()
  }

  /**
   * Removing data from storage.
   *
   * Удаление данных из хранилища.
   * @returns current instance/ текущий экземпляр
   */
  async remove(): Promise<this> {
    this.data.remove()

    await figma.clientStorage.deleteAsync(this.data.getName())

    return this
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @returns data from storage/ данные из хранилища
   */
  protected async getValue(): Promise<FigmaStorageDataValue<T> | undefined> {
    return await figma.clientStorage.getAsync(this.data.getName())
  }

  /**
   * Making an instance from storage data.
   *
   * Создание экземпляра из данных хранилища.
   * @returns current instance/ текущий экземпляр
   */
  protected async make(): Promise<this> {
    if (this.data.isNull()) {
      this.data.setByObject(
        await this.getValue()
      )
    }

    return this
  }
}

const items: Record<string, FigmaClientStorage<any>> = {}
