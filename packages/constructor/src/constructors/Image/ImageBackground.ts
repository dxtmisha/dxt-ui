import { computed } from 'vue'
import { isFilled, type NumberOrString } from '@dxtmisha/functional'

import { ImageData } from './ImageData'
import { ImageCoordinator } from './ImageCoordinator'
import { ImageAdaptiveItem } from './ImageAdaptiveItem'

import { type ImageProps } from './props'

/** Regular expression to detect a percentage suffix / Регулярное выражение для определения суффикса процента */
const REGEXP_PERCENT = /%$/

/**
 * Computes CSS background-related values for an image component.
 * It derives the `background-image` URL, the raw image source, and
 * the `background-size` value based on props, coordinator, and adaptive state.
 *
 * Вычисляет CSS-значения, связанные с фоном, для компонента изображения.
 * Получает URL для `background-image`, исходный путь к изображению и значение
 * `background-size` на основе props, координатора и адаптивного состояния.
 */
export class ImageBackground {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param data image data / данные изображения
   * @param coordinator object for working with coordinates / объект для работы с координатами
   * @param adaptive an object for working with adapted scaling / объект для работы с адаптированным масштабированием
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly data: ImageData,
    protected readonly coordinator: ImageCoordinator,
    protected readonly adaptive: ImageAdaptiveItem
  ) {
  }

  /**
   * Returns the CSS `url(...)` string for the background-image property,
   * or `null` if no image source is available.
   *
   * Возвращает строку CSS `url(...)` для свойства background-image,
   * или `null`, если источник изображения отсутствует.
   * @returns formatted CSS url string or null / отформатированная строка CSS url или null
   */
  get image(): string | null {
    const image = this.imageSrc

    if (image) {
      return `url("${image}")`
    }

    return null
  }

  /**
   * Returns the raw image source URL or path extracted from the image data.
   * Handles both string and object image representations.
   *
   * Возвращает исходный URL или путь к изображению, извлечённый из данных изображения.
   * Обрабатывает как строковые, так и объектные представления изображения.
   * @returns image source string or null / строка источника изображения или null
   */
  get imageSrc(): string | null {
    const image = this.data.image.value

    switch (typeof image) {
      case 'string':
        return image
      case 'object':
        return image.src
      default:
        return null
    }
  }

  /**
   * Reactive computed value for the CSS `background-size` property.
   * Resolves priority: coordinator → adaptive → props size.
   *
   * Реактивное вычисляемое значение для свойства CSS `background-size`.
   * Приоритет: координатор → адаптивный → размер из props.
   */
  readonly size = computed<string | null>(() => {
    if (this.coordinator.is()) {
      return this.getSizeByCoordinator()
    }

    if (this.adaptive.is()) {
      const size = this.adaptive.backgroundSize

      if (size) {
        return size
      }
    }

    return this.getSizeForItem()
  })

  /**
   * Returns `true` if a background image value is present.
   *
   * Возвращает `true`, если значение фонового изображения присутствует.
   * @returns boolean indicating image presence / булево значение наличия изображения
   */
  isImage() {
    return Boolean(this.image)
  }

  /**
   * Calculates the CSS `background-size` string based on image aspect ratio.
   * Returns `auto <height>` for landscape images, `<width> auto` for portrait.
   *
   * Вычисляет строку CSS `background-size` на основе соотношения сторон изображения.
   * Возвращает `auto <height>` для альбомных изображений, `<width> auto` для портретных.
   * @param width width value / значение ширины
   * @param height height value / значение высоты
   * @returns background-size string or null / строка background-size или null
   */
  protected getSize(
    width: NumberOrString,
    height: NumberOrString
  ): string | null {
    const image = this.data.image.value

    if (typeof image === 'object') {
      return image.height < image.width ? `auto ${height}` : `${width} auto`
    }

    return null
  }

  /**
   * Returns the background-size string computed from the coordinator's dimensions.
   *
   * Возвращает строку background-size, вычисленную из размеров координатора.
   * @returns background-size string or null / строка background-size или null
   */
  protected getSizeByCoordinator(): string | null {
    const {
      width,
      height
    } = this.coordinator.backgroundSize

    return this.getSize(width, height)
  }

  /**
   * Returns the background-size string derived from the `size` prop.
   * If the value ends with `%`, delegates to `getSize`; otherwise returns it as-is.
   *
   * Возвращает строку background-size из пропа `size`.
   * Если значение заканчивается на `%`, делегирует в `getSize`; иначе возвращает как есть.
   * @returns background-size string or null / строка background-size или null
   */
  protected getSizeForItem(): string | null {
    const size = this.props.size

    if (isFilled(size)) {
      return REGEXP_PERCENT.test(size.toString()) ? this.getSize(size, size) : size.toString()
    }

    return null
  }
}
