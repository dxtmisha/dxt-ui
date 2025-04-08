import { computed, ref, watchEffect } from 'vue'

import { getElementId } from '../../functions/getElementId'
import { toNumber } from '../../functions/toNumber'

import { ImageData } from './ImageData'
import { ImageAdaptiveGroup } from './ImageAdaptiveGroup'
import { ImageCalculationList } from './ImageCalculationList'

import type { ConstrValue } from '../../types/constructor'
import type { ImageProps } from './props'
import type { ImageElement, ImageItem, ImageSize } from './typesBasic'

enum ImageAdaptiveItemType {
  x = 'x',
  y = 'y'
}

const GROUP_BASIC = 'main'

/**
 * The value in pixels indicating when an element is still considered active,
 * even if it has gone off the screen.<br>
 * Значение в пикселях, указывающее, когда элемент считается еще активным,
 * даже если он ушел за экран.
 */
export const MAX_BEYOND = 512

/**
 * A class for managing the adapted scaling of a specific element.<br>
 * Класс для управления адаптированным масштабированием конкретного элемента.
 */
export class ImageAdaptiveItem {
  readonly percent = ref<ImageSize>({
    width: 0,
    height: 0
  })

  protected beyond: boolean = false
  protected visible: boolean = false

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param data image data /<br>данные изображения
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly data: ImageData,
    public readonly element: ConstrValue<ImageElement>
  ) {
    watchEffect(() => {
      if (this.is()) {
        ImageAdaptiveGroup.add(this)
      } else {
        ImageAdaptiveGroup.remove(this)
      }
    })
  }

  /**
   * Is the element active for size alignment.<br>
   * Активен ли элемент для выравнивания размера.
   */
  readonly active = computed<boolean>(
    () => Boolean(this.props.adaptive && (this.width.value || this.height.value)) && this.data.isImage()
  )

  /**
   * Returns the name of the group.<br>
   * Возвращает название группы.
   */
  readonly group = computed<string>(() => this.props.adaptiveGroup ?? GROUP_BASIC)

  /**
   * Returns the physical width of the object.<br>
   * Возвращает физическую ширину объекта.
   */
  readonly width = computed<number>(() => toNumber(this.props.objectWidth ?? 0))

  /**
   * Returns the physical height of the object.<br>
   * Возвращает физическую высоту объекта.
   */
  readonly height = computed<number>(() => toNumber(this.props?.objectHeight ?? 0))

  /**
   * Returns the axis for scaling.<br>
   * Возвращает ось для масштабирования.
   */
  readonly type = computed<ImageAdaptiveItemType | undefined>(() => {
    if (
      this.width.value
      && this.percent.value.width > 0
    ) {
      return ImageAdaptiveItemType.x
    }

    if (
      this.height.value
      && this.percent.value.height > 0
    ) {
      return ImageAdaptiveItemType.y
    }

    return undefined
  })

  /**
   * Calculation of the base size of the image to determine how to scale the image.<br>
   * Вычисление базового размера изображения, чтобы определить, как надо масштабировать изображение.
   */
  readonly size = computed<number>(() => {
    if (
      this.element.value
      && this.data.isImage()
    ) {
      const data = this.data.image.value as ImageItem

      switch (this.type.value) {
        case ImageAdaptiveItemType.x:
          return data.height * (this.element.value.offsetWidth * this.percent.value.width / data.width)
        case ImageAdaptiveItemType.y:
          return data.width * (this.element.value.offsetHeight * this.percent.value.height / data.height)
      }
    }

    return 0
  })

  /**
   * Multiplier for determining the level of image scaling relative to other elements.<br>
   * Множитель для определения уровня масштабирования изображения относительно других элементов.
   */
  readonly factor = computed<number>(() => {
    const element = this.element.value

    if (element) {
      const size = this.size.value

      if (
        this.type.value === ImageAdaptiveItemType.x
        && size > element.offsetHeight
      ) {
        return element.offsetHeight / size
      }

      if (
        this.type.value === ImageAdaptiveItemType.y
        && size > element.offsetWidth
      ) {
        return element.offsetWidth / size
      }
    }

    return 1
  })

  /**
   * Checks if the element’s conditions are suitable for scaling.<br>
   * Проверяет, подходить ли у элемента условия для масштабирования.
   */
  is(): boolean {
    return this.active.value && Boolean(this.element.value?.closest('body'))
  }

  /**
   * Checks for compliance with the group.<br>
   * Проверяет на соответствие группе.
   * @param name name of the checked group /<br>название проверяемой группы
   */
  isGroup(name: string): boolean {
    return this.group.value === name
  }

  /**
   * Is it available for calculation.<br>
   * Доступен ли для вычисления.
   */
  isBeyond(): boolean {
    return this.beyond
  }

  /**
   * Is the element visible.<br>
   * Виден ли элемент.
   */
  isVisible(): boolean {
    return this.visible
  }

  /**
   * Returns the identifier of the element.<br>
   * Возвращает идентификатор элемента.
   */
  getId(): string {
    return getElementId(this.element.value)
  }

  /**
   * Returns values for the background-size property.<br>
   * Возвращает значения для свойства background-size.
   */
  getBackgroundSize(): string | null {
    const factorMax = ImageCalculationList.get(this.group.value).getFactorMax()

    switch (this.type.value) {
      case ImageAdaptiveItemType.x:
        return `${100 * this.percent.value.width * factorMax}% auto`
      case ImageAdaptiveItemType.y:
        return `auto ${100 * this.percent.value.height * factorMax}%`
    }

    return null
  }

  /**
   * Size change for calculation.<br>
   * Изменение размера для вычисления.
   * @param width width value /<br>значение ширины
   * @param height height value /<br>значение высоты
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
   * Removal of an element from the scaling list.<br>
   * Удаление элемента из списка для масштабирования.
   */
  remove(): void {
    if (this.is()) {
      ImageAdaptiveGroup.remove(this)
    }
  }

  /**
   * Updating the visibility and activity status of the element.<br>
   * Обновление статуса видимости и активности элемента.
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
