import { h, type VNode } from 'vue'
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
 * GridItemDesign
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
  protected readonly item: GridItem

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
    return {} as EXPOSE
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
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    return h('div', {
      ...this.getAttrs(),
      class: this.classes?.value.main
    }, this.initSlot('default'))
  }
}
