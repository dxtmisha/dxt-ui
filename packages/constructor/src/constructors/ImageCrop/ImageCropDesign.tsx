import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ImageCrop } from './ImageCrop'

import {
  type ImageCropPropsBasic
} from './props'
import {
  type ImageCropClasses,
  type ImageCropComponents,
  type ImageCropEmits,
  type ImageCropExpose,
  type ImageCropSlots
} from './types'

/**
 * Design constructor class representing the visual assembly of the ImageCrop component.
 * It manages class lists, style lists, exposure options, and h-rendering.
 *
 * Класс конструктора дизайна, представляющий визуальную сборку компонента ImageCrop.
 * Управляет списками классов, стилей, экспортом свойств и рендерингом виртуальных узлов.
 */
export class ImageCropDesign<
  COMP extends ImageCropComponents,
  EXPOSE extends ImageCropExpose,
  CLASSES extends ImageCropClasses,
  P extends ImageCropPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ImageCropEmits,
    EXPOSE,
    ImageCropSlots,
    CLASSES,
    P
  > {
  /** Orchestrator item / Элемент оркестратора */
  protected readonly item: ImageCrop

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ImageCropEmits, P>,
    ItemConstructor: typeof ImageCrop = ImageCrop
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns object of exported properties / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        body: this.getSubClass('body'),
        image: this.getSubClass('image'),
        cropArea: this.getSubClass('cropArea'),
        loading: this.getSubClass('loading')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return this.item.cropImage.styles
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected initRender(): VNode {
    const children: any[] = [
      ...this.item.image.render(),
      ...this.item.cropArea.render(),
      ...this.item.progress.render()
    ]

    this.initSlot('default', children)

    return h(
      'div',
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...this.item.aria
      },
      h('div', this.getKeyClass('body'), children)
    )
  }
}
