import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Breadcrumbs } from './Breadcrumbs'

import type {
  BreadcrumbsPropsBasic
} from './props'
import type {
  BreadcrumbsClasses,
  BreadcrumbsComponents,
  BreadcrumbsEmits,
  BreadcrumbsExpose,
  BreadcrumbsSlots
} from './types'

/**
 * BreadcrumbsDesign class constructor for managing classes, styles, and rendering
 * the semantic `<nav>` landmark and trail of `BreadcrumbItem` components.
 *
 * Класс-конструктор дизайна BreadcrumbsDesign для управления классами, стилями и рендерингом
 * семантического ориентира `<nav>` и цепочки компонентов `BreadcrumbItem`.
 */
export class BreadcrumbsDesign<
  COMP extends BreadcrumbsComponents,
  EXPOSE extends BreadcrumbsExpose,
  CLASSES extends BreadcrumbsClasses,
  P extends BreadcrumbsPropsBasic
> extends DesignConstructorAbstract<
    HTMLElement,
    COMP,
    BreadcrumbsEmits,
    EXPOSE,
    BreadcrumbsSlots,
    CLASSES,
    P
  > {
  /** Breadcrumbs logic orchestrator instance / Экземпляр оркестратора логики Breadcrumbs */
  protected readonly item: Breadcrumbs

  /**
   * Constructor for creating a BreadcrumbsDesign instance.
   *
   * Конструктор для создания экземпляра BreadcrumbsDesign.
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
      this.props,
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
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
        item: this.naming.getSubClass('item')
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
   * A method for rendering the `<nav>` landmark and included `BreadcrumbItem` trail.
   *
   * Метод для рендеринга ориентира `<nav>` и подключённой цепочки `BreadcrumbItem`.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected initRender(): VNode {
    return h(
      'nav',
      mergeProps(
        this.item.binds,
        this.getAttrs(),
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      this.item.callInstance('breadcrumbItem', item => item.render(), [])
    )
  }
}
