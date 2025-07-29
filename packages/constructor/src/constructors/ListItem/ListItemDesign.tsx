import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { ListItem } from './ListItem'

import {
  type ListItemProps
} from './props'
import {
  type ListItemClasses,
  type ListItemComponents,
  type ListItemEmits,
  type ListItemExpose,
  type ListItemSlots
} from './types'

/**
 * ListItemDesign
 */
export class ListItemDesign<
  COMP extends ListItemComponents,
  EXPOSE extends ListItemExpose,
  CLASSES extends ListItemClasses,
  P extends ListItemProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ListItemEmits,
    EXPOSE,
    ListItemSlots,
    CLASSES,
    P
  > {
  protected readonly item: ListItem

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ListItemEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ListItem(
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
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
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
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    }
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    // const children: any[] = []

    return h('div', {
      // ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    })
  }
}
