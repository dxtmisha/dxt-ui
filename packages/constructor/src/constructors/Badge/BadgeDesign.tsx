import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Badge } from './Badge'

import type {
  BadgePropsBasic
} from './props'
import type {
  BadgeClasses,
  BadgeComponents,
  BadgeEmits,
  BadgeExpose,
  BadgeSlots
} from './types'

/**
 * BadgeDesign constructor class responsible for assembling and rendering the Badge component.
 * It manages class resolution, styles initialization, and the final DOM VNode rendering tree.
 *
 * Класс-конструктор BadgeDesign, отвечающий за сборку и рендеринг компонента бейджа.
 * Управляет разрешением классов, инициализацией стилей и финальным деревом рендеринга VNode DOM.
 */
export class BadgeDesign<
  COMP extends BadgeComponents,
  EXPOSE extends BadgeExpose,
  CLASSES extends BadgeClasses,
  P extends BadgePropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    BadgeEmits,
    EXPOSE,
    BadgeSlots,
    CLASSES,
    P
  > {
  /** Badge control item instance / Экземпляр элемента управления бейджем */
  protected readonly item: Badge

  /**
   * Constructor for creating a BadgeDesign instance.
   *
   * Конструктор для создания экземпляра дизайна бейджа.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor badge item class / класс элемента бейджа
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, BadgeEmits, P>,
    ItemConstructor: typeof Badge = Badge
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
   * @returns exposed properties object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns custom classes object / объект пользовательских классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        label: this.naming.getSubClass('label'),
        icon: this.naming.getSubClass('icon')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns custom styles object / объект пользовательских стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node / виртуальная нода
   */
  protected initRender(): VNode {
    const children: VNode[] = []

    if (!this.props.dot) {
      children.push(
        ...this.item.callInstance('label', item => item.render(undefined, this.item.aria), []),
        ...this.item.callInstance('icon', item => item.renderIcon(), [])
      )
    }

    return h(
      'span',
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      children
    )
  }
}
