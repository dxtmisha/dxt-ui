import { inject, ref } from 'vue'
import type { ConstrEmit, ConstrStyles } from '@dxtmisha/functional'

import type { ImageEventData } from '../Image'

import {
  COLLAGE_ITEM_SCALE,
  COLLAGE_NAME_UPDATE,
  type CollageItemDimensionsExpose,
  type CollageUpdate
} from './basicTypes'
import type { CollageItemEmits } from './types'
import type { CollageItemProps } from './props'

/**
 * Class for managing dimensional properties and aspect ratio calculations for CollageItem. /
 * Класс для управления свойствами размеров и расчетом соотношения сторон для CollageItem.
 */
export class CollageItemDimensions {
  /** Reactive reference to calculated height factor / Реактивная ссылка на вычисленный коэффициент высоты */
  readonly height = ref<number | undefined>()

  /** Reactive reference to calculated width factor / Реактивная ссылка на вычисленный коэффициент ширины */
  readonly width = ref<number | undefined>()

  /** Injected callback from parent Collage for layout update / Внедренный коллбэк от родительского Collage для обновления макета */
  readonly update = inject<CollageUpdate | undefined>(
    COLLAGE_NAME_UPDATE,
    undefined
  )

  /** Property names map / Карта имен свойств */
  protected readonly property: {
    /** CSS property for item height factor / CSS-свойство для коэффициента высоты элемента */
    height: string
    /** CSS property for item width factor / CSS-свойство для коэффициента ширины элемента */
    width: string
  }

  /**
   * Constructor for CollageItemDimensions.
   *
   * Конструктор для CollageItemDimensions.
   * @param props input component properties / входные свойства компонента
   * @param className base class name of the component / базовое имя класса компонента
   * @param emits constructor emitter for component events / конструктор событий для событий компонента
   */
  constructor(
    protected readonly props: CollageItemProps,
    protected readonly className: string,
    protected readonly emits?: ConstrEmit<CollageItemEmits>
  ) {
    this.property = {
      height: `--${className}-sys-height`,
      width: `--${className}-sys-width`
    }
  }

  /**
   * Returns inline layout styles including CSS custom properties for masonry and aspect sizing.
   *
   * Возвращает инлайн-стили макета, включая пользовательские CSS-свойства для плиточных и пропорциональных размеров.
   * @returns calculated CSS styles object / объект вычисленных CSS-стилей
   */
  get styles(): ConstrStyles {
    const styles: ConstrStyles = {}

    if (this.height.value !== undefined) {
      styles[this.property.height] = `${this.height.value}`
    }

    if (this.width.value !== undefined) {
      styles[this.property.width] = `${this.width.value}`
    }

    return styles
  }

  /**
   * Returns bindings and data attributes for the element.
   *
   * Возвращает привязки и data-атрибуты для элемента.
   * @returns dictionary of bindings and attributes / словарь привязок и атрибутов
   */
  get binds(): Record<string, any> {
    return {
      'data-value': this.props.value,
      'data-height': this.height.value,
      'data-width': this.width.value
    }
  }

  /**
   * Exported dimensional methods.
   *
   * Экспонируемые методы размеров.
   * @returns object with exported dimensional methods / объект с экспонируемыми методами размеров
   */
  get expose(): CollageItemDimensionsExpose {
    return {
      getHeight: this.getHeight,
      getWidth: this.getWidth
    }
  }

  /**
   * Returns calculated height factor.
   *
   * Возвращает вычисленный коэффициент высоты.
   * @returns calculated height factor / вычисленный коэффициент высоты
   */
  readonly getHeight = (): number | undefined => this.height.value

  /**
   * Returns calculated width factor.
   *
   * Возвращает вычисленный коэффициент ширины.
   * @returns calculated width factor / вычисленный коэффициент ширины
   */
  readonly getWidth = (): number | undefined => this.width.value

  /**
   * Handles image load event, computes proportional grid factors, triggers updates, and emits load event.
   *
   * Обрабатывает событие загрузки изображения, вычисляет пропорциональные коэффициенты сетки, запускает обновления и вызывает событие загрузки.
   * @param event image load event payload / полезная нагрузка события загрузки изображения
   */
  readonly onLoad = (event: ImageEventData): void => {
    const image = event.image

    if (
      typeof image === 'object'
      && image?.width
      && image?.height
    ) {
      this.height.value = Math.floor(image.height * COLLAGE_ITEM_SCALE / image.width)
      this.width.value = Math.floor(image.width * COLLAGE_ITEM_SCALE / image.height)
    }

    if (this.update) {
      this.update()
    }

    this.emits?.('load', event)
  }
}
