import { getCurrentTime, isNull } from '@dxtmisha/functional-basic'
import { FigmaPostCode } from '@dxtmisha/figma'

/** Type for storing data in Figma Storage/ Тип для хранения данных в Figma Storage */
export type FigmaStorageDataValue<T> = {
  /** Value/ Значение */
  value: T
  /** Age/ Возраст */
  age: number
}

/**
 * Class for managing Figma storage data.
 *
 * Класс для управления данными хранилища Figma.
 * @template T type of data/ тип данных
 */
export class FigmaStorageData<T> {
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
   * Checks if the value is null or undefined.
   *
   * Проверяет, является ли значение null или undefined.
   */
  isNull(): boolean {
    return isNull(this.value)
  }

  /**
   * Checks for storage time limit.
   *
   * Проверяет на лимит времени хранения.
   */
  isCache(): boolean {
    return Boolean(
      isNull(this.cache)
      || (
        this.age
        && this.age + (this.cache * 1000) >= getCurrentTime()
      )
    )
  }

  /**
   * Checks if the value is defined and within the cache limit.
   *
   * Проверяет, определено ли значение и находится ли оно в пределах лимита кэша.
   */
  isValue(): boolean {
    return this.value !== undefined && this.isCache()
  }

  /**
   * Returns the current value.
   *
   * Возвращает текущее значение.
   */
  get(): T | undefined {
    return this.value
  }

  /**
   * Returns the update time of the value.
   *
   * Возвращает время обновления значения.
   */
  getAge(): number | undefined {
    return this.age
  }

  /**
   * Returns the storage key name.
   *
   * Возвращает имя ключа в хранилище.
   */
  getName(): string {
    return `${FigmaPostCode.get()}-${this.name}`
  }

  /**
   * Returns the cache time.
   *
   * Возвращает время кэширования.
   */
  getCache(): number | undefined {
    return this.cache
  }

  /**
   * Sets the value and age.
   *
   * Устанавливает значение и время.
   * @param value new value/ новое значение
   * @param age update time/ время обновления
   */
  set(
    value?: T,
    age?: number
  ): this {
    return this
      .setValue(value)
      .setAge(age)
  }

  /**
   * Sets data from a FigmaStorageDataValue object.
   *
   * Устанавливает данные из объекта FigmaStorageDataValue.
   * @param value data object/ объект данных
   */
  setByObject(value?: FigmaStorageDataValue<T>): this {
    if (value) {
      return this.set(value.value, value.age)
    }

    return this
  }

  /**
   * Sets the value.
   *
   * Устанавливает значение.
   * @param value new value/ новое значение
   */
  setValue(value?: T): this {
    this.value = value

    return this
  }

  /**
   * Sets the update time.
   *
   * Устанавливает время обновления.
   * @param age update time/ время обновления
   */
  setAge(age?: number): this {
    this.age = age

    return this
  }

  /**
   * Updates the value and sets the current time as age.
   *
   * Обновляет значение и устанавливает текущее время.
   * @param value new value/ новое значение
   */
  update(value?: T): this {
    if (value !== undefined) {
      return this
        .setValue(value)
        .setAge(getCurrentTime())
    }

    return this.remove()
  }

  /**
   * Removes the data.
   *
   * Удаляет данные.
   */
  remove(): this {
    return this.set(
      undefined,
      undefined
    )
  }

  /**
   * Converts data to a FigmaStorageDataValue object for storage.
   *
   * Преобразует данные в объект FigmaStorageDataValue для хранения.
   */
  toValue(): FigmaStorageDataValue<T> {
    return {
      value: this.value as T,
      age: this.age as number
    }
  }
}
