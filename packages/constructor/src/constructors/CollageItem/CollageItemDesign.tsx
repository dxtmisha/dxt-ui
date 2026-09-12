import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { CollageItem } from './CollageItem'

import {
  type CollageItemProps
} from './props'
import {
  type CollageItemClasses,
  type CollageItemComponents,
  type CollageItemEmits,
  type CollageItemExpose,
  type CollageItemSlots
} from './types'

/**
 * CollageItemDesign
 */
export class CollageItemDesign<
  COMP extends CollageItemComponents,
  EXPOSE extends CollageItemExpose,
  CLASSES extends CollageItemClasses,
  P extends CollageItemProps
> extends DesignConstructorAbstract<
  HTMLElement,
  COMP,
  CollageItemEmits,
  EXPOSE,
  CollageItemSlots,
  CLASSES,
  P
> {
  protected readonly item: CollageItem

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, CollageItemEmits, P>,
    ItemConstructor: typeof CollageItem = CollageItem
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.event.expose,
      ...this.item.dimensions.expose
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        body: this.getSubClass('body'),
        image: this.getSubClass('image'),
        icon: this.getSubClass('icon'),
        collageBar: this.getSubClass('collageBar')
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
    return {
      ...this.item.dimensions.styles
    }
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    const children: VNode[] = [
      ...this.renderBody(),
      ...this.item.collageBar.render(
        {
          body: this.slots?.barBody,
          trailing: this.slots?.barTrailing
        }
      )
    ]

    return h(
      'figure',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...this.item.dimensions.binds
      },
      children
    )
  }

  /**
   * Body area rendering.
   *
   * Рендеринг области тела.
   */
  readonly renderBody = (): VNode[] => {
    const tag = this.props.tag ?? 'a'
    const children: VNode[] = [
      ...this.item.image.render(),
      ...this.item.icon.renderIcon()
    ]

    return [
      h(
        tag,
        {
          class: [
            this.classes?.value.body,
            tag === 'a' ? getClassTagAStatic(this.getDesign()) : undefined
          ],
          ...this.item.event.binds
        },
        children
      )
    ]
  }
}
