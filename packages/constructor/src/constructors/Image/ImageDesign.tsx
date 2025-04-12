import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { Image } from './Image'

import { ImageTypeValue } from './imageTypes'
import {
  type ImageProps
} from './props'
import {
  type ImageClasses,
  type ImageComponents,
  type ImageEmits,
  type ImageExpose,
  type ImageSlots
} from './types'

/**
 * ImageDesign
 */
export class ImageDesign<
  COMP extends ImageComponents,
  EXPOSE extends ImageExpose,
  CLASSES extends ImageClasses,
  P extends ImageProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ImageEmits,
    EXPOSE,
    ImageSlots,
    CLASSES,
    P
  > {
  protected readonly item: Image

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ImageEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Image(
      this.props,
      this.element,
      this.getName(),
      this.emits
    )

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      type: this.item.type.item,
      data: this.item.data.image
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes.value,
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  protected initStyles(): ConstrStyles {
    return this.item.styles.value
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    return h(
      'span',
      {
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        translate: 'no',
        ...this.getAttrs()
      },
      this.renderValue()
    )
  }

  /**
   * Rendering the value for the component.
   *
   * Рендеринг значения для компонента.
   */
  protected readonly renderValue = (): string | VNode[] | undefined => {
    if (
      this.item.type.item.value === ImageTypeValue.pdf
    ) {
      return [h('object', { data: this.item.data.image.value })]
    }

    return this.item.text.value
  }
}
