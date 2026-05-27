import { EventItem, forEach } from '@dxtmisha/functional'

import { ImageAdaptiveItem } from './ImageAdaptiveItem'
import { ImageCalculationList } from './ImageCalculationList'

/**
 * Class for working with image scaling according to the physical size of the object in the image.
 *
 * Класс для работы с масштабированием изображения по физическому размеру объекта на изображении.
 */
export class ImageAdaptiveGroup {
  /** List of all elements for tracking / Список всех элементов для отслеживания */
  protected static objects: ImageAdaptiveItem[] = []

  /** List of elements that are currently being calculated / Список элементов, которые рассчитываются в данный момент */
  protected static objectsAdaptive: ImageAdaptiveItem[] = []

  /** Cache of IDs of visible elements / Кэш идентификаторов видимых элементов */
  private static cache: string[] = []

  /** Scroll event handler / Обработчик события прокрутки */
  protected static event?: EventItem<Window, Event, any>

  /** Flag for tracking the frame calculation time / Флаг для отслеживания времени вычисления кадра */
  protected static time?: boolean

  /**
   * Checks if an element is present in the list.
   *
   * Проверяет, присутствует ли элемент в списке.
   * @param item object for working with images / объект для работы с изображениями
   * @returns element status / статус элемента
   */
  static is(item: ImageAdaptiveItem): boolean {
    return this.objects.findIndex(itemValue => itemValue === item) !== -1
  }

  /**
   * Adding a new element for tracking.
   *
   * Добавление нового элемента для отслеживания.
   * @param item object for working with images / объект для работы с изображениями
   */
  static add(item: ImageAdaptiveItem): void {
    if (!this.is(item)) {
      this.objects.push(item)
      this.make()
    }
  }

  /**
   * Removal of the element.
   *
   * Удаление элемента.
   * @param item object for working with images / объект для работы с изображениями
   */
  static remove(item: ImageAdaptiveItem): void {
    const key = this.objects.findIndex(itemValue => itemValue === item)

    if (key !== -1) {
      this.objects.splice(key, 1)
      this.cache = []
    }

    this.make()
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
    if (
      this.event
      && this.objects.length < 1
    ) {
      this.event.stop()
      this.event = undefined
    } else if (this.objects.length > 0) {
      if (!this.event) {
        this.event = new EventItem(window, ['scroll-sync'], () => this.start()).start()
      }

      if (!this.time) {
        this.time = true
        requestAnimationFrame(() => {
          this.time = false
          this.start()
        })
      }
    }
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
    } else {
      this.event?.stop()
    }
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
   * Calculates the dimensions of an element relative to the image size,
   * the size of the element, and its physical location on the image.
   *
   * Вычисляет размеры элемента относительно размера изображения,
   * размера элемента и его физического расположения на изображении.
   */
  protected static makeSize(): void {
    ImageCalculationList.reset()

    this.objectsAdaptive.forEach((item) => {
      const element = item.element.value

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
   * Calculation of the basic scaling of an element without taking into account other elements.
   *
   * Вычисление базового масштабирования элемента без учета других элементов.
   */
  protected static makePercent(): void {
    if (ImageCalculationList.isSize()) {
      this.objectsAdaptive.forEach((item) => {
        const element = item.element.value
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
   * Checks if there is an active element at the moment.
   *
   * Проверяет, есть ли в текущий момент активный элемент.
   * @returns active element status / статус активного элемента
   */
  private static isAdaptive(): boolean {
    return Boolean(this.objects.find(item => item.is()))
  }

  /**
   * Checks whether the composition of visible elements has changed.
   *
   * Проверяет, изменился ли состав видимых элементов.
   * @param visible list of IDs of visible elements / список идентификаторов видимых элементов
   * @returns cache status / статус кэша
   */
  private static isCache(visible: string[]): boolean {
    return this.cache.join('|') !== visible.join('|')
  }
}
