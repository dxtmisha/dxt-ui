import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ChipGroup } from './ChipGroup'

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
    // const children: any[] = []

    return h('div', {
      // ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    })
  }

  /**
   * List rendering.<br>
   * Рендеринг списка.
   */
  protected readonly renderList = (): VNode[] => {
    const setup = this.setup()
    const children: any[] = []

    setup.data.value.forEach((item) => {
      const chip = setup.renderItem(item)
      if (chip) {
        children.push(chip)
      }
    })

    return children
  }

  /**
   * Element rendering.<br>
   * Рендеринг элемента.
   * @param item selected element /<br>выбранный элемент
   */
  protected readonly renderItem = (item: ChipGroupItem): VNode | undefined => {
    const setup = this.setup()

    return this.components.renderOne(
      'chip',
      {
        ...this.props.chipAttrs,
        class: setup.classes.value.item,
        iconHide: this.props.iconWhenSelected && !item.selected,
        ...item,
        onClick: setup.onClick
      },
      undefined,
      item.index)
  }
}
