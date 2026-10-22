// ai-none

import { ServerStorage } from '@dxtmisha/functional'
import { ImageCalculation } from './ImageCalculation'

/** Server storage key for image calculation list / Ключ серверного хранилища для списка вычислений изображений */
const SERVER_STORAGE_KEY_CALCULATION = '__ui:image-calculation-list__'

/**
 * Class for managing all ImageCalculation objects.
 *
 * Класс для управления всеми объектами ImageCalculation.
 */
export class ImageCalculationList {
  /**
   * Checks if the group has elements with sizes. It is used to check if there is data for work.
   *
   * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
   * @returns true if sizes are present / true, если размеры присутствуют
   */
  static isSize(): boolean {
    return this.items.some(item => item.isSize())
  }

  /**
   * Returns an object with data for calculation by the name of its group.
   *
   * Возвращает объект с данными для вычисления по названию его группы.
   * @param name group name / название группы
   * @returns ImageCalculation instance / экземпляр ImageCalculation
   */
  static get(name: string): ImageCalculation {
    return this.find(name) || this.init(name)
  }

  /**
   * Resets all parameters for all groups.
   *
   * Сбрасывает все параметры для всех групп.
   */
  static reset(): void {
    this.items.forEach(item => item.reset())
  }

  /**
   * Returns a request-isolated list of calculations from ServerStorage.
   *
   * Возвращает изолированный в рамках запроса список вычислений из ServerStorage.
   * @returns list of ImageCalculation objects / список объектов ImageCalculation
   */
  protected static get items(): ImageCalculation[] {
    return ServerStorage.get(SERVER_STORAGE_KEY_CALCULATION, () => [])
  }

  /**
   * Search for the ImageCalculation object by the name of the group.
   *
   * Поиск объекта ImageCalculation по названию группы.
   * @param name group name / название группы
   * @returns ImageCalculation object or undefined / объект ImageCalculation или undefined
   */
  protected static find(name: string): ImageCalculation | undefined {
    return this.items.find(item => item.is(name))
  }

  /**
   * Creating a new ImageCalculation object by the name of the group.
   *
   * Создание нового объекта ImageCalculation по названию группы.
   * @param name group name / название группы
   * @returns newly created ImageCalculation instance / созданный экземпляр ImageCalculation
   */
  protected static init(name: string): ImageCalculation {
    const item = new ImageCalculation(name)

    this.items.push(item)
    return item
  }
}
