import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { GridItem } from './GridItem'

import {
  type GridItemPropsBasic
} from './props'
import {
  type GridItemClasses,
  type GridItemComponents,
  type GridItemEmits,
  type GridItemExpose,
  type GridItemSlots
} from './types'

/**
 * Design constructor class for the GridItem component.
 * Connects the GridItem logic orchestrator to Vue rendering, classes, styles, and root element binding.
 *
 * Класс конструктора дизайна для компонента GridItem.
 * Связывает логический оркестратор GridItem с рендерингом Vue, классами, стилями и привязкой корневого элемента.
 */
export class GridItemDesign<
  COMP extends GridItemComponents,
  EXPOSE extends GridItemExpose,
  CLASSES extends GridItemClasses,
  P extends GridItemPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    GridItemEmits,
    EXPOSE,
    GridItemSlots,
    CLASSES,
    P
  > {
  /** Logic orchestrator instance / Экземпляр логического оркестратора */
  protected readonly item: GridItem

  /**
   * Constructor.
   *
   * Конструктор.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, GridItemEmits, P>,
    ItemConstructor: typeof GridItem = GridItem
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
   * @returns exposed component properties / экспортируемые свойства компонента
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes map / частичная карта классов
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
   * @returns component styles object / объект стилей компонента
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns VNode element / VNode элемент
   */
  protected initRender(): VNode {
    return h(
      'div',
      mergeProps(this.getAttrs(), {
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value
      }),
      this.initSlot('default')
    )
  }
}
