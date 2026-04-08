import { executeFunction, getCurrentTime, isNull } from '@dxtmisha/functional-basic'

/** Type for storing data in Figma Client Storage/ Тип для хранения данных в Figma Client Storage */
type FigmaClientStorageValue<T> = {
  /** Value/ Значение */
  value: T
  /** Age/ Возраст */
  age: number
}

/**
 * Class for working with Figma client storage (clientStorage).
 *
 * Класс для работы с клиентским хранилищем Figma (clientStorage).
 */
export class FigmaClientStorage<T> {
  /** Current value in the instance/ Текущее значение в экземпляре */
  protected value?: T

  /** Value update time/ Время обновления значения */
  protected age?: number

  /**
   * Constructor
   * @param name value name/ название значения
   * @param cache cache time/ время кэширования
   */
  constructor(
    protected readonly name: string,
    protected readonly cache?: number
  ) {
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @param defaultValue default value/ значение по умолчанию
   */
  async get(defaultValue?: T | (() => T | Promise<T>)): Promise<T | undefined> {
    await this.make()

    if (
      this.value !== undefined
      && this.isCache()
    ) {
      return this.value
    }

    if (defaultValue !== undefined) {
      return await this.set(defaultValue)
    }

    return undefined
  }

  /**
   * Getting the storage key name.
   *
   * Получение имени ключа в хранилище.
   * @returns storage key name/ имя ключа в хранилище
   */
  getName(): string {
    return this.name
  }

  /**
   * Changing data in storage.
   *
   * Изменение данных в хранилище.
   * @param value new values/ новые значения
   * @returns current value/ текущее значение
   */
  async set(value?: T | (() => T | Promise<T>)): Promise<T | undefined> {
    this.value = await executeFunction(value)
    this.age = this.getTime()

    if (this.value === undefined) {
      await this.remove()
    } else {
      await figma.clientStorage.setAsync(
        this.getName(),
        this.toValue()
      )
    }

    return this.value
  }

  /**
   * Removing data from storage.
   *
   * Удаление данных из хранилища.
   * @returns current instance/ текущий экземпляр
   */
  async remove(): Promise<this> {
    this.value = undefined
    this.age = undefined

    await figma.clientStorage.deleteAsync(this.getName())

    return this
  }

  /**
   * Checks for storage time limit.
   *
   * Проверяет на лимит времени хранения.
   */
  protected isCache() {
    return isNull(this.cache)
      || (
        this.age
        && this.age + (this.cache * 1000) >= this.getTime()
      )
  }

  /**
   * Getting the current time.
   *
   * Получение текущего времени.
   * @returns current time/ текущее время
   */
  protected getTime(): number {
    return getCurrentTime()
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @returns data from storage/ данные из хранилища
   */
  protected async getValue(): Promise<FigmaClientStorageValue<T> | undefined> {
    return await figma.clientStorage.getAsync(this.getName())
  }

  /**
   * Making an instance from storage data.
   *
   * Создание экземпляра из данных хранилища.
   * @returns current instance/ текущий экземпляр
   */
  protected async make(): Promise<this> {
    if (this.value === undefined) {
      const value = await this.getValue()

      if (value) {
        this.value = value.value
        this.age = value.age
      }
    }

    return this
  }

  /**
   * Converting data for storage.
   *
   * Преобразование данных для хранения.
   * @returns data for storage/ данные для хранения
   */
  protected toValue(): FigmaClientStorageValue<T> {
    return {
      value: this.value as T,
      age: this.age as number
    }
  }
}
