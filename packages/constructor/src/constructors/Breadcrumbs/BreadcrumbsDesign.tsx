import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { Breadcrumbs } from './Breadcrumbs'

import {
  type BreadcrumbsProps
} from './props'
import {
  type BreadcrumbsClasses,
  type BreadcrumbsComponents,
  type BreadcrumbsEmits,
  type BreadcrumbsExpose,
  type BreadcrumbsSlots
} from './types'

/**
 * BreadcrumbsDesign class constructor for managing classes, styles, and rendering the Breadcrumbs component.
 *
 * Класс-конструктор дизайна BreadcrumbsDesign для управления классами, стилями и рендерингом компонента Breadcrumbs.
 */
export class BreadcrumbsDesign<
  COMP extends BreadcrumbsComponents,
  EXPOSE extends BreadcrumbsExpose,
  CLASSES extends BreadcrumbsClasses,
  P extends BreadcrumbsProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  BreadcrumbsEmits,
  EXPOSE,
  BreadcrumbsSlots,
  CLASSES,
  P
> {
  /** Main component instance / Основной экземпляр компонента */
  protected readonly item: Breadcrumbs

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
    options?: ConstrOptions<COMP, BreadcrumbsEmits, P>,
    ItemConstructor: typeof Breadcrumbs = Breadcrumbs
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.getDesign(),
      this.getName(),
      this.components,
      this.element,
      this.emits,
      this.props,
      this.refs,
      this.slots
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
        item: this.getSubClass('item')
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
    return h('nav', {
      ...this.item.binds,
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    }, this.renderChildren())
  }

  /**
   * Renders the breadcrumb items.
   *
   * Рендерит элементы хлебных крошек.
   * @returns list of child virtual nodes / список дочерних виртуальных узлов
   */
  readonly renderChildren = (): VNode[] => {
    const children: VNode[] = []
    const length = (this.props.list?.length ?? 1) - 1

    this.props.list?.forEach((item, key) => {
      this.components.renderAdd(
        children,
        'breadcrumbItem',
        toBinds(
          item,
          {
            readonly: key === length,
            isSkeleton: this.props.isSkeleton,
            class: this.classes?.value.item,
            onClick: this.item.event.onClick
          }
        ),
        undefined,
        item?.value || item?.label || key
      )
    })

    return children
  }
}
