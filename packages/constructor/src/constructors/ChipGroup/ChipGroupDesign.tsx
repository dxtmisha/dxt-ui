import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  forEach,
  toBinds
} from '@dxtmisha/functional'

import { ChipGroup } from './ChipGroup'

import type { ChipGroupItem } from './basicTypes'
import {
  type ChipGroupPropsBasic
} from './props'
import {
  type ChipGroupClasses,
  type ChipGroupComponents,
  type ChipGroupEmits,
  type ChipGroupExpose,
  type ChipGroupSlots
} from './types'

/**
 * ChipGroupDesign
 */
export class ChipGroupDesign<
  COMP extends ChipGroupComponents,
  EXPOSE extends ChipGroupExpose,
  CLASSES extends ChipGroupClasses,
  P extends ChipGroupPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ChipGroupEmits,
    EXPOSE,
    ChipGroupSlots,
    CLASSES,
    P
  > {
  protected readonly item: ChipGroup

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ChipGroupEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ChipGroup(
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
        item: this.getSubClass('item')
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
    const children: any[] = this.renderList()

    this.initSlot('default', children)

    return h(
      'div',
      {
        ...this.getAttrs(),
        class: this.classes?.value.main
      },
      children
    )
  }

  /**
   * List rendering.
   *
   * Рендеринг списка.
   */
  protected readonly renderList = (): VNode[] => {
    return forEach(
      this.item.getList(),
      item => this.renderItem(item)
    ) as VNode[]
  }

  /**
   * Element rendering.
   *
   * Рендеринг элемента.
   * @param item selected element/ выбранный элемент
   */
  protected readonly renderItem = (item: ChipGroupItem): VNode | undefined => {
    return this.components.renderOne(
      'chip',
      toBinds(
        {
          class: this.classes?.value.item,
          iconHide: this.props.iconWhenSelected && !item.selected,
          onClick: this.item.model.onClick
        },
        this.props.chipAttrs,
        item
      ),
      undefined,
      item.index
    )
  }
}
