// ai-none

import { type ConstrEmit, type DesignComponents, type DesignName, getBind } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'

import type { ImageEventData, ImageComponentInclude, ImageEmitsInclude, ImagePropsInclude } from './basicTypes'
import type { ImageProps } from './props'
import type { ImageExpose, ImageSlots } from './types'

/**
 * A class for connecting to and working with the image component.
 * It extends ComponentIncludeAbstract to manage state, binding, and rendering logic for images.
 *
 * Класс для подключения и работы с компонентом изображения.
 * Он расширяет ComponentIncludeAbstract для управления состоянием, привязками и логикой рендеринга изображений.
 */
export class ImageInclude extends ComponentIncludeAbstract<
  ImagePropsInclude,
  ImageProps,
  ImageExpose,
  ImageSlots
> {
  /** Sub-component key identifier / Идентификатор ключа субкомпонента */
  protected override readonly name = 'image'
  /** Property name containing image attributes / Имя свойства, содержащего атрибуты изображения */
  protected override readonly propsAttrsName = 'imageAttrs'

  /**
   * Constructor for working with images.
   *
   * Конструктор для работы с изображениями.
   * @param naming component naming helper / помощник именования компонента
   * @param props input component properties / входные свойства компонента
   * @param components registry of design components / реестр дизайн-компонентов
   * @param extra additional design attributes or settings / дополнительные дизайн-атрибуты или настройки
   * @param emits constructor emitter for component events / конструктор событий для событий компонента
   */
  constructor(
    naming: DesignName,
    props: ComponentIncludeProps<ImagePropsInclude>,
    components?: DesignComponents<ImageComponentInclude, ImagePropsInclude>,
    extra?: ComponentIncludeExtra<ImageProps>,
    protected readonly emits?: ConstrEmit<ImageEmitsInclude>
  ) {
    super(naming, props, components, extra)
  }

  /**
   * Checks whether the image should be displayed /
   * Проверяет, нужно ли отображать изображение
   */
  override get is(): boolean {
    return Boolean(this.getProps().image)
  }

  /**
   * Handles the image load event and propagates it via emits.
   *
   * Обрабатывает событие загрузки изображения и передает его через emits.
   * @param event image event payload data / данные события изображения
   */
  readonly onLoad = (event: ImageEventData): void => this.emits?.('load', event)

  /**
   * Resolves and returns design properties specifically bound for the image.
   *
   * Разрешает и возвращает свойства дизайна, привязанные именно к изображению.
   * @returns resolved image properties or undefined / разрешенные свойства изображения или undefined
   */
  protected override getExtra(): ImageProps | undefined {
    return getBind(
      this.getProps().image,
      super.getExtra(),
      'value'
    ) as ImageProps
  }

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds() {
    return {
      ...super.toBinds(),
      onLoad: this.onLoad
    }
  }
}
