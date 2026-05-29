import { computed, onMounted, onUnmounted, type Ref, ref, watchEffect } from 'vue'
import { getElementId, toNumber } from '@dxtmisha/functional'

import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'

import { ImageAdaptiveGroup } from './ImageAdaptiveGroup'
import { ImageCalculationList } from './ImageCalculationList'
import { ImageData } from './ImageData'

import { type ImageElement, type ImageItem, type ImageSize } from './basicTypes'
import { type ImageProps } from './props'

/**
 * Types of image scaling axis /
 * Типы осей масштабирования изображения
 */
enum ImageAdaptiveItemType {
  /** Scaling by X axis / Масштабирование по оси X */
  x = 'x',
  /** Scaling by Y axis / Масштабирование по оси Y */
  y = 'y'
}

/** Basic group name / Базовое название группы */
const GROUP_BASIC = 'main'

/**
 * The value in pixels indicating when an element is still considered active,
 * even if it has gone off the screen. /
 * Значение в пикселях, указывающее, когда элемент считается еще активным,
 * даже если он ушел за экран.
 */
export const MAX_BEYOND = 512

/**
 * A class for managing the adapted scaling of a specific element.
 * It calculates the object's proportions and determines the necessary
 * image size to maintain visual consistency within a group.
 *
 * Класс для управления адаптированным масштабированием конкретного элемента.
 * Вычисляет пропорции объекта и определяет необходимый размер изображения
 * для поддержания визуальной целостности внутри группы.
 */
export class ImageAdaptiveItem {
  /** Scaling percentages / Проценты масштабирования */
  readonly percent = ref<ImageSize>({
    width: 0,
    height: 0
  })

  /** Checks if the element is beyond the screen / Проверяет, вышел ли элемент за экран */
  protected beyond: boolean = false

  /** Checks if the element is visible / Проверяет, видим ли элемент */
  protected visible: boolean = false

  /**
   * Constructor for creating a scaling manager for an element.
   *
   * Конструктор для создания менеджера масштабирования элемента.
   * @param props input data / входные данные
   * @param clientOnly class for working with ClientOnly / класс для работы с ClientOnly
   * @param data image data / данные изображения
   * @param element image element for scaling / элемент изображения для масштабирования
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly clientOnly: ClientOnlyInclude,
    protected readonly data: ImageData,
    public readonly element: Ref<ImageElement>
  ) {
    onMounted(() => {
      watchEffect(() => {
        if (this.is()) {
          ImageAdaptiveGroup.add(this)
        } else {
          ImageAdaptiveGroup.remove(this)
        }
      })
    })

    onUnmounted(() => {
      ImageAdaptiveGroup.remove(this)
    })
  }

  /**
   * Is the element active for size alignment.
   *
   * Активен ли элемент для выравнивания размера.
   * @returns true if active / true, если активен
   */
  get active(): boolean {
    return Boolean(
      this.props.adaptive
      && this.clientOnly.isRender()
      && (this.width || this.height)
    )
      && this.data.isImage()
  }

  /**
   * Returns the identifier of the element.
   *
   * Возвращает идентификатор элемента.
   * @returns identifier string / строка идентификатора
   */
  get id(): string {
    return getElementId(this.element.value)
  }

  /**
   * Returns the name of the group.
   *
   * Возвращает название группы.
   * @returns group name / название группы
   */
  get group(): string {
    return this.props.adaptiveGroup ?? GROUP_BASIC
  }

  /**
   * Returns the physical width of the object.
   *
   * Возвращает физическую ширину объекта.
   * @returns physical width / физическая ширина
   */
  get width(): number {
    return toNumber(this.props.objectWidth ?? 0)
  }

  /**
   * Returns the physical height of the object.
   *
   * Возвращает физическую высоту объекта.
   * @returns physical height / физическая высота
   */
  get height(): number {
    return toNumber(this.props?.objectHeight ?? 0)
  }

  /**
   * Returns the axis for scaling.
   *
   * Возвращает ось для масштабирования.
   * @returns adaptive item type or undefined / тип адаптивного элемента или undefined
   */
  get type(): ImageAdaptiveItemType | undefined {
    if (
      this.width
      && this.percent.value.width > 0
    ) {
      return ImageAdaptiveItemType.x
    }

    if (
      this.height
      && this.percent.value.height > 0
    ) {
      return ImageAdaptiveItemType.y
    }

    return undefined
  }

  /**
   * Returns values for the background-size property.
   *
   * Возвращает значения для свойства background-size.
   * @returns background size string or null / строка размера фона или null
   */
  get backgroundSize(): string | null {
    const factorMax = ImageCalculationList.get(this.group).factorMax

    switch (this.type) {
      case ImageAdaptiveItemType.x:
        return `${100 * this.percent.value.width * factorMax}% auto`
      case ImageAdaptiveItemType.y:
        return `auto ${100 * this.percent.value.height * factorMax}%`
    }

    return null
  }

  /**
   * Calculation of the base size of the image to determine how to scale the image.
   *
   * Вычисление базового размера изображения, чтобы определить, как надо масштабировать изображение.
   * @returns base size in pixels / базовый размер в пикселях
   */
  readonly size = computed<number>(() => {
    if (
      this.element.value
      && this.data.isImage()
    ) {
      const data = this.data.image.value as ImageItem

      switch (this.type) {
        case ImageAdaptiveItemType.x:
          if (!data.width) {
            return 0
          }

          return data.height * (this.element.value.offsetWidth * this.percent.value.width / data.width)
        case ImageAdaptiveItemType.y:
          if (!data.height) {
            return 0
          }

          return data.width * (this.element.value.offsetHeight * this.percent.value.height / data.height)
      }
    }

    return 0
  })

  /**
   * Multiplier for determining the level of image scaling relative to other elements.
   *
   * Множитель для определения уровня масштабирования изображения относительно других элементов.
   * @returns scaling factor / коэффициент масштабирования
   */
  readonly factor = computed<number>(() => {
    const element = this.element.value

    if (element) {
      const size = this.size.value

      if (
        this.type === ImageAdaptiveItemType.x
        && size > element.offsetHeight
      ) {
        return element.offsetHeight / size
      }

      if (
        this.type === ImageAdaptiveItemType.y
        && size > element.offsetWidth
      ) {
        return element.offsetWidth / size
      }
    }

    return 1
  })

  /**
   * Checks if the element’s conditions are suitable for scaling.
   *
   * Проверяет, подходить ли у элемента условия для масштабирования.
   * @returns true if conditions are suitable for scaling / true, если условия подходят для масштабирования
   */
  is(): boolean {
    return this.active && Boolean(this.element.value?.closest('body'))
  }

  /**
   * Checks for compliance with the group.
   *
   * Проверяет на соответствие группе.
   * @param name name of the checked group / название проверяемой группы
   * @returns true if the group name matches / true, если имя группы совпадает
   */
  isGroup(name: string): boolean {
    return this.group === name
  }

  /**
   * Is it available for calculation.
   *
   * Доступен ли для вычисления.
   * @returns true if element is beyond the screen area / true, если элемент находится за пределами области экрана
   */
  isBeyond(): boolean {
    return this.beyond
  }

  /**
   * Is the element visible.
   *
   * Виден ли элемент.
   * @returns true if element is visible / true, если элемент видим
   */
  isVisible(): boolean {
    return this.visible
  }

  /**
   * Size change for calculation.
   *
   * Изменение размера для вычисления.
   * @param width width value / значение ширины
   * @param height height value / значение высоты
   * @returns instance of this class / экземпляр этого класса
   */
  setPercent(width: number, height: number): this {
    if (
      this.percent.value.width !== width
      || this.percent.value.height !== height
    ) {
      this.percent.value = {
        width,
        height
      }
    }

    return this
  }

  /**
   * Removal of an element from the scaling list.
   *
   * Удаление элемента из списка для масштабирования.
   */
  remove(): void {
    if (this.active) {
      ImageAdaptiveGroup.remove(this)
    }
  }

  /**
   * Updating the visibility and activity status of the element.
   *
   * Обновление статуса видимости и активности элемента.
   * @returns instance of this class / экземпляр этого класса
   */
  make(): this {
    this.beyond = false
    this.visible = false

    if (
      this.element.value
      && this.is()
    ) {
      if (this.props.adaptiveAlways) {
        this.beyond = true
        this.visible = true
      } else {
        const rect = this.element.value.getBoundingClientRect()

        this.beyond = !(
          rect.bottom < (0 - MAX_BEYOND)
          || rect.top > (window.innerHeight + MAX_BEYOND)
        )

        this.visible = !(
          rect.bottom < 0
          || rect.top > window.innerHeight
        )
      }
    }

    return this
  }
}
