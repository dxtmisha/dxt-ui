import { type ConstrEmit, type DesignComponents, getBind, type RefOrNormal } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

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
  protected name = 'image'
  /** Property name containing image attributes / Имя свойства, содержащего атрибуты изображения */
  protected propsAttrsName = 'imageAttrs'

  /**
   * Constructor for working with images.
   *
   * Конструктор для работы с изображениями.
   * @param className base class name of the parent / имя базового класса родителя
   * @param props input component properties / входные свойства компонента
   * @param components registry of design components / реестр дизайн-компонентов
   * @param extra additional design attributes or settings / дополнительные дизайн-атрибуты или настройки
   * @param emits constructor emitter for component events / конструктор событий для событий компонента
   */
  constructor(
    className: string,
    props: ImagePropsInclude,
    components?: DesignComponents<ImageComponentInclude, ImagePropsInclude>,
    extra?: RefOrNormal<Record<string, any>>,
    protected readonly emits?: ConstrEmit<ImageEmitsInclude>
  ) {
    super(className, props, components, extra)
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
  readonly onLoad = (event: ImageEventData) => this.emits?.('load', event)

  /**
   * Resolves and returns design properties specifically bound for the image.
   *
   * Разрешает и возвращает свойства дизайна, привязанные именно к изображению.
   * @returns resolved image properties or undefined / разрешенные свойства изображения или undefined
   */
  protected getExtra(): ImageProps | undefined {
    return getBind(
      this.getProps().image,
      super.getExtra(),
      'value'
    ) as ImageProps
  }
}
