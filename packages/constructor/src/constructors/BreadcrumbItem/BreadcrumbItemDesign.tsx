import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { BreadcrumbItem } from './BreadcrumbItem'

import {
  type BreadcrumbItemProps
} from './props'
import {
  type BreadcrumbItemClasses,
  type BreadcrumbItemComponents,
  type BreadcrumbItemEmits,
  type BreadcrumbItemExpose,
  type BreadcrumbItemSlots
} from './types'

/**
 * BreadcrumbItemDesign class constructor for managing classes, styles, and rendering the BreadcrumbItem component.
 *
 * Класс-конструктор дизайна BreadcrumbItemDesign для управления классами, стилями и рендерингом компонента BreadcrumbItem.
 */
export class BreadcrumbItemDesign<
  COMP extends BreadcrumbItemComponents,
  EXPOSE extends BreadcrumbItemExpose,
  CLASSES extends BreadcrumbItemClasses,
  P extends BreadcrumbItemProps
> extends DesignConstructorAbstract<
  HTMLAnchorElement | HTMLSpanElement,
  COMP,
  BreadcrumbItemEmits,
  EXPOSE,
  BreadcrumbItemSlots,
  CLASSES,
  P
  > {
  /** Main component instance / Основной экземпляр компонента */
  protected readonly item: BreadcrumbItem

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
    options?: ConstrOptions<COMP, BreadcrumbItemEmits, P>,
    ItemConstructor: typeof BreadcrumbItem = BreadcrumbItem
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
   * @returns exposed properties / экспортируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.event.expose
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        iconArrow: this.getSubClass('iconArrow')
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
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected initRender(): VNode {
    if (this.props.readonly) {
      return this.renderReadonly()
    }

    return this.renderLink()
  }

  /**
   * Renders the arrow icon component.
   *
   * Рендерит компонент иконки стрелки.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderIconArrow = (): VNode[] => {
    if (
      this.components
      && !this.item.enabled.isReadonly
    ) {
      return this.components.render(
        'icon',
        {
          icon: this.props.back ? this.props.iconArrowLeft : this.props.iconArrowRight,
          dir: true,
          class: this.classes?.value.iconArrow
        },
        undefined,
        'icon-arrow'
      )
    }

    return []
  }

  /**
   * Renders the child nodes of the component.
   *
   * Рендерит дочерние узлы компонента.
   * @returns list of child virtual nodes / список дочерних виртуальных узлов
   */
  readonly renderChildren = (): any[] => {
    return [
      ...this.item.icon.renderIcon(),
      ...this.item.label.render(),
      ...this.renderIconArrow()
    ]
  }

  /**
   * Renders the readonly element.
   *
   * Рендерит элемент в режиме только для чтения.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  readonly renderReadonly = (): VNode => {
    return h('span', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    }, this.renderChildren())
  }

  /**
   * Renders the link element.
   *
   * Рендерит элемент ссылки.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  readonly renderLink = (): VNode => {
    return h('a', {
      ...this.getAttrs(),
      ref: this.element,
      ...this.item.binds,
      class: this.classes?.value.main
    }, this.renderChildren())
  }
}
