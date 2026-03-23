import { executeFunction, isNull } from '@dxtmisha/functional-basic'

/** Type for storing data in Figma/ Тип для хранения данных в Figma */
type FigmaStorageValue<T> = {
  /** Value/ Значение */
  value: T
  /** Age/ Возраст */
  age: number
}

/**
 * Class for working with Figma storage (PluginData).
 *
 * Класс для работы с хранилищем Figma (PluginData).
 */
export class FigmaStorage<T> {
  /** Current value in the instance/ Текущее значение в экземпляре */
  protected value?: T

  /** Value update time/ Время обновления значения */
  protected age?: number

  /**
   * Constructor
   * @param name value name/ название значения
   * @param item object for storing data/ объект для хранения данных
   * @param cache cache time/ время кэширования
   */
  constructor(
    protected readonly name: string,
    protected readonly item: PluginDataMixin = figma.root,
    protected readonly cache?: number
  ) {
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @param defaultValue default value/ значение по умолчанию
   */
  get(defaultValue?: T | (() => T)): T | undefined {
    this.make()

    if (
      this.value !== undefined
      && this.isCache()
    ) {
      return this.value
    }

    if (defaultValue !== undefined) {
      return this.set(defaultValue)
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
  set(value?: T | (() => T)): T | undefined {
    this.value = executeFunction(value)
    this.age = this.getTime()

    if (this.value === undefined) {
      this.remove()
    } else {
      this.item.setPluginData(
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
  remove(): this {
    this.value = undefined
    this.age = undefined

    this.item.setPluginData(this.getName(), '')

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
    return new Date().getTime()
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @returns data from storage/ данные из хранилища
   */
  protected getValue(): FigmaStorageValue<T> | undefined {
    const value = this.item.getPluginData(this.getName())

    if (value) {
      try {
        return JSON.parse(value)
      } catch (e) {
        console.error('FigmaStorage', this.getName(), e)
      }
    }

    return undefined
  }

  /**
   * Making an instance from storage data.
   *
   * Создание экземпляра из данных хранилища.
   * @returns current instance/ текущий экземпляр
   */
  protected make(): this {
    if (this.value === undefined) {
      const value = this.getValue()

      if (value) {
        this.value = value.value
        this.age = value.age
      }
    }

    return this
  }

  /**
   * Converting data to a string for storage.
   *
   * Преобразование данных в строку для хранения.
   * @returns string for storage/ строка для хранения
   */
  protected toValue(): string {
    return JSON.stringify({
      value: this.value,
      age: this.age
    })
  }
}
