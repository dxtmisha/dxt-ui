import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { BreadcrumbItem } from './BreadcrumbItem'

import type {
  BreadcrumbItemPropsBasic
} from './props'
import type {
  BreadcrumbItemClasses,
  BreadcrumbItemComponents,
  BreadcrumbItemEmits,
  BreadcrumbItemExpose,
  BreadcrumbItemSlots
} from './types'

/**
 * BreadcrumbItemDesign class constructor for managing classes, styles, and rendering
 * the BreadcrumbItem component as an interactive link or static current-page span.
 *
 * Класс-конструктор дизайна BreadcrumbItemDesign для управления классами, стилями и рендерингом
 * компонента BreadcrumbItem в виде интерактивной ссылки или статического элемента текущей страницы.
 */
export class BreadcrumbItemDesign<
  COMP extends BreadcrumbItemComponents,
  EXPOSE extends BreadcrumbItemExpose,
  CLASSES extends BreadcrumbItemClasses,
  P extends BreadcrumbItemPropsBasic
> extends DesignConstructorAbstract<
    HTMLAnchorElement | HTMLSpanElement,
    COMP,
    BreadcrumbItemEmits,
    EXPOSE,
    BreadcrumbItemSlots,
    CLASSES,
    P
  > {
  /** BreadcrumbItem logic orchestrator instance / Экземпляр оркестратора логики BreadcrumbItem */
  protected readonly item: BreadcrumbItem

  /**
   * Constructor for creating a BreadcrumbItemDesign instance.
   *
   * Конструктор для создания экземпляра BreadcrumbItemDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Renders the decorative directional separator arrow icon when non-readonly and configured.
   *
   * Рендерит декоративную иконку стрелки-разделителя, если элемент не в режиме readonly и иконка задана.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderSeparator = (): VNode[] => {
    const iconArrow = this.item.iconArrow

    if (
      this.components
      && !this.item.isReadonly()
      && iconArrow
    ) {
      return this.components.render(
        'icon',
        {
          icon: iconArrow,
          dir: true,
          class: this.classes?.value.iconArrow,
          ...AriaStaticInclude.hidden()
        },
        undefined,
        'icon-arrow'
      )
    }

    return []
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties / экспортируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.i('event').expose
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
        iconArrow: this.naming.getSubClass('iconArrow')
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
   * A method for rendering the root link or span with icon, label, and separator arrow.
   *
   * Метод для рендеринга корневой ссылки или span с иконкой, меткой и стрелкой-разделителем.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected initRender(): VNode {
    return h(
      this.item.tag,
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      [
        ...this.item.callInstance('icon', item => item.renderIcon(), []),
        ...this.item.callInstance('label', item => item.render(), []),
        ...this.renderSeparator()
      ]
    )
  }
}
