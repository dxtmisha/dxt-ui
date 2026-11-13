// ai-none

import { type ConstrBind, type ConstrEmit, type DesignComponents, type DesignName, getBind } from '@dxtmisha/functional'

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
  /**
   * Checks whether image inclusion is enabled by the supplied properties.
   *
   * Проверяет, включено ли изображение переданными свойствами.
   * @param props image inclusion properties / свойства включения изображения
   * @returns true when an image is configured / true, если изображение задано
   */
  static is(props?: ImagePropsInclude): boolean {
    return Boolean(props?.image)
  }

  /** Sub-component key identifier / Идентификатор ключа субкомпонента */
  protected override readonly name = 'image'
  /** Property name containing image attributes / Имя свойства, содержащего атрибуты изображения */
  protected override readonly propsAttrsName = 'imageAttrs'

  /**
   * Constructor for working with images.
   *
   * Конструктор для работы с изображениями.
   * @param props input component properties / входные свойства компонента
   * @param naming component naming helper / помощник именования компонента
   * @param components registry of design components / реестр дизайн-компонентов
   * @param emits constructor emitter for component events / конструктор событий для событий компонента
   * @param extra additional design attributes or settings / дополнительные дизайн-атрибуты или настройки
   * @param index unique index key for rendering / уникальный ключ индекса для рендеринга
   */
  constructor(
    props: ComponentIncludeProps<ImagePropsInclude>,
    naming: DesignName,
    components?: DesignComponents<ImageComponentInclude, ImagePropsInclude>,
    protected readonly emits?: ConstrEmit<ImageEmitsInclude>,
    extra?: ComponentIncludeExtra<ImageProps>,
    index?: string
  ) {
    super(props, naming, components, extra, index)
  }

  /**
   * Checks whether the image should be displayed.
   *
   * Проверяет, нужно ли отображать изображение.
   * @returns true if the image property is defined / true, если свойство изображения задано
   */
  override get is(): boolean {
    return ImageInclude.is(this.getProps())
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
  protected override toBinds(): Partial<ConstrBind<ImageProps>> {
    const binds = super.toBinds()

    return {
      ...binds,
      onLoad: binds.onLoad ?? this.onLoad
    }
  }
}
