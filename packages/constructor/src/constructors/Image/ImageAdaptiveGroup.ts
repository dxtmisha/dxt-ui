// ai-none

import { forEach, isDomRuntime, ServerStorage } from '@dxtmisha/functional'

import { ImageAdaptiveItem } from './ImageAdaptiveItem'
import { ImageCalculationList } from './ImageCalculationList'

/** Storage structure for adaptive group / Структура хранилища для адаптивной группы */
type ImageAdaptiveGroupStorage = {
  /** Cache of visible element IDs / Кэш идентификаторов видимых элементов */
  cache: string[]
  /** List of all tracked adaptive items / Список всех отслеживаемых адаптивных элементов */
  objects: ImageAdaptiveItem[]
  /** List of currently calculated adaptive items / Список рассчитываемых в данный момент адаптивных элементов */
  objectsAdaptive: ImageAdaptiveItem[]
  /** Flag for tracking frame calculation time / Флаг отслеживания времени вычисления кадра */
  time?: boolean
}

/** Server storage key for image adaptive group / Ключ серверного хранилища для адаптивной группы изображений */
const SERVER_STORAGE_KEY_ADAPTIVE = '__ui:image-adaptive-group__'

/**
 * Class for managing and coordinating image scaling according to the physical size of objects across a group.
 * It tracks active adaptive items, calculates base scaling proportions relative to viewport bounds,
 * and synchronizes background sizes to ensure consistent visual dimensions.
 *
 * Класс для управления и координации масштабирования изображений по физическому размеру объектов внутри группы.
 * Отслеживает активные адаптивные элементы, вычисляет базовые пропорции масштабирования относительно границ экрана
 * и синхронизирует размеры фона для обеспечения визуальной согласованности.
 */
export class ImageAdaptiveGroup {
  /**
   * Checks if an element is present in the list.
   *
   * Проверяет, присутствует ли элемент в списке.
   * @param item object for working with images / объект для работы с изображениями
   * @returns true if the element is present in the list / true, если элемент присутствует в списке
   */
  static is(item: ImageAdaptiveItem): boolean {
    return this.objects.findIndex(itemValue => itemValue === item) !== -1
  }

  /**
   * Adds a new element for tracking and schedules calculation if needed.
   *
   * Добавляет новый элемент для отслеживания и планирует вычисление при необходимости.
   * @param item object for working with images / объект для работы с изображениями
   */
  static add(item: ImageAdaptiveItem): void {
    if (!this.is(item)) {
      this.objects.push(item)
      this.make()
    }
  }

  /**
   * Removes an element from tracking and clears the cache.
   *
   * Удаляет элемент из отслеживания и очищает кэш.
   * @param item object for working with images / объект для работы с изображениями
   */
  static remove(item: ImageAdaptiveItem): void {
    const key = this.objects.findIndex(itemValue => itemValue === item)

    if (key !== -1) {
      this.objects.splice(key, 1)
      this.cache = []
      this.make()
    }
  }

  /**
   * Resets all cached data and rereads scaling for all elements.
   *
   * Обнуляет все кэшированные данные и перечитывает масштабирование для всех элементов.
   */
  static reset(): void {
    this.cache = []
    this.start()
  }

  /**
   * Starts the calculation process or turns it off if there are no active elements in the list.
   *
   * Запускает процесс вычисления или отключает его, если в списке нет активных элементов.
   */
  static make(): void {
    if (this.objects.length < 1) {
      this.objectsAdaptive = []
      this.cache = []
      return
    }

    if (!this.time && isDomRuntime()) {
      this.time = true
      requestAnimationFrame(() => {
        this.time = false
        this.start()
      })
    }
  }

  /**
   * Returns a request-isolated storage object from ServerStorage.
   *
   * Возвращает изолированный в рамках запроса объект хранилища из ServerStorage.
   * @returns storage object / объект хранилища
   */
  protected static get storage(): ImageAdaptiveGroupStorage {
    return ServerStorage.get(SERVER_STORAGE_KEY_ADAPTIVE, () => ({
      cache: [],
      objects: [],
      objectsAdaptive: []
    }))
  }

  /**
   * Returns cache of IDs of visible elements.
   *
   * Возвращает кэш идентификаторов видимых элементов.
   * @returns array of element IDs / массив идентификаторов элементов
   */
  protected static get cache(): string[] {
    return this.storage.cache
  }

  /**
   * Sets cache of IDs of visible elements.
   *
   * Устанавливает кэш идентификаторов видимых элементов.
   * @param value array of element IDs / массив идентификаторов элементов
   */
  protected static set cache(value: string[]) {
    this.storage.cache = value
  }

  /**
   * Returns list of all elements for tracking.
   *
   * Возвращает список всех элементов для отслеживания.
   * @returns array of adaptive items / массив адаптивных элементов
   */
  protected static get objects(): ImageAdaptiveItem[] {
    return this.storage.objects
  }

  /**
   * Returns list of elements currently being calculated.
   *
   * Возвращает список элементов, рассчитываемых в данный момент.
   * @returns array of adaptive items / массив адаптивных элементов
   */
  protected static get objectsAdaptive(): ImageAdaptiveItem[] {
    return this.storage.objectsAdaptive
  }

  /**
   * Sets list of elements currently being calculated.
   *
   * Устанавливает список элементов, рассчитываемых в данный момент.
   * @param value array of adaptive items / массив адаптивных элементов
   */
  protected static set objectsAdaptive(value: ImageAdaptiveItem[]) {
    this.storage.objectsAdaptive = value
  }

  /**
   * Returns flag for tracking frame calculation time.
   *
   * Возвращает флаг для отслеживания времени вычисления кадра.
   * @returns boolean flag or undefined / булев флаг или undefined
   */
  protected static get time(): boolean | undefined {
    return this.storage.time
  }

  /**
   * Sets flag for tracking frame calculation time.
   *
   * Устанавливает флаг для отслеживания времени вычисления кадра.
   * @param value boolean flag or undefined / булев флаг или undefined
   */
  protected static set time(value: boolean | undefined) {
    this.storage.time = value
  }

  /**
   * Checks if there is an active element at the moment.
   *
   * Проверяет, есть ли в текущий момент активный элемент.
   * @returns true if an active element exists / true, если существует активный элемент
   */
  protected static isAdaptive(): boolean {
    return Boolean(this.objects.find(item => item.is()))
  }

  /**
   * Checks whether the composition of visible elements has changed.
   *
   * Проверяет, изменился ли состав видимых элементов.
   * @param visible list of IDs of visible elements / список идентификаторов видимых элементов
   * @returns true if the list of visible elements has changed / true, если список видимых элементов изменился
   */
  protected static isCache(visible: string[]): boolean {
    return this.cache.join('|') !== visible.join('|')
  }

  /**
   * Returns a list of elements that are visible or constantly being calculated.
   *
   * Возвращает список идентификаторов элементов, которые видны или постоянно вычисляются.
   * @returns list of IDs / список идентификаторов
   */
  protected static getItemIdByVisible(): string[] {
    return forEach(this.objectsAdaptive, item => item.id)
  }

  /**
   * Updates the list of elements available for calculation. These are the
   * elements that are close to the border of the visible area.
   *
   * Обновляет список доступных для вычисления элементов. Это те элементы,
   * которые близки к границе видимой области.
   */
  protected static makeAdaptive(): void {
    this.objectsAdaptive = []
    this.objects.forEach((item) => {
      item.make()

      if (item.isBeyond()) {
        this.objectsAdaptive.push(item)
      }
    })
  }

  /**
   * Calculation of the largest element to determine the base size.
   * This parameter is used for scaling other elements,
   * reducing them to the necessary proportion.
   *
   * Вычисление самого большого элемента для определения базового размера.
   * Этот параметр используется для масштабирования других элементов,
   * уменьшая их до нужной пропорции.
   */
  protected static makeFactorMax(): void {
    if (ImageCalculationList.isSize()) {
      this.objectsAdaptive.forEach((item) => {
        ImageCalculationList.get(item.group)
          .makeFactorMax(item.factor.value)
      })
    }
  }

  /**
   * Calculation of the basic scaling of an element without taking into account other elements.
   *
   * Вычисление базового масштабирования элемента без учета других элементов.
   */
  protected static makePercent(): void {
    if (ImageCalculationList.isSize()) {
      this.objectsAdaptive.forEach((item) => {
        const element = item.getElement()
        const calculation = ImageCalculationList.get(item.group)

        if (element) {
          const width = calculation.width
          const height = calculation.height

          item.setPercent(
            item.width * (width ? 1 / width : 0) * (calculation.offsetWidth / element.offsetWidth),
            item.height * (height ? 1 / height : 0) * (calculation.offsetHeight / element.offsetHeight)
          )
        }
      })
    }
  }

  /**
   * Calculates the dimensions of an element relative to the image size,
   * the size of the element, and its physical location on the image.
   *
   * Вычисляет размеры элемента относительно размера изображения,
   * размера элемента и его физического расположения на изображении.
   */
  protected static makeSize(): void {
    ImageCalculationList.reset()

    this.objectsAdaptive.forEach((item) => {
      const element = item.getElement()

      if (element) {
        ImageCalculationList.get(item.group)
          .makeWidth(item.width)
          .makeHeight(item.height)
          .makeOffsetWidth(element.offsetWidth)
          .makeOffsetHeight(element.offsetHeight)
      }
    })
  }

  /**
   * Method for starting the calculation of scaling elements in the list.
   *
   * Метод для запуска вычисления масштабирования элементов в списке.
   */
  protected static start(): void {
    if (this.isAdaptive()) {
      this.makeAdaptive()

      const visible = this.getItemIdByVisible()

      if (this.isCache(visible)) {
        this.cache = visible

        this.makeSize()
        this.makePercent()
        this.makeFactorMax()
      }
    }
  }
}
