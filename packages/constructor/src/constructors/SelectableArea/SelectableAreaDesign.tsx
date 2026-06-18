import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { SelectableArea } from './SelectableArea'

import {
  type SelectableAreaPropsBasic
} from './props'
import {
  type SelectableAreaClasses,
  type SelectableAreaComponents,
  type SelectableAreaEmits,
  type SelectableAreaExpose,
  type SelectableAreaSlots
} from './types'

/**
 * SelectableAreaDesign
 */
export class SelectableAreaDesign<
  COMP extends SelectableAreaComponents,
  EXPOSE extends SelectableAreaExpose,
  CLASSES extends SelectableAreaClasses,
  P extends SelectableAreaPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SelectableAreaEmits,
    EXPOSE,
    SelectableAreaSlots,
    CLASSES,
    P
  > {
  protected readonly item: SelectableArea

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
    options?: ConstrOptions<COMP, SelectableAreaEmits, P>,
    ItemConstructor: typeof SelectableArea = SelectableArea
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
    return {
      reset: this.item.item.reset.bind(this.item.item),
      setSelected: this.item.item.setSelected.bind(this.item.item)
    } as unknown as EXPOSE
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
        item: this.getSubClass('item'),
        square: this.getSubClass('square')
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
    const defaultSlot = this.slots?.default?.({
      className: this.item.classes.getId(),
      classSelectionName: this.item.classes.list.selected,
      classNameClick: this.item.classes.list.click,
      selected: this.item.item.getSelectedValues(),
      onClick: this.item.events.onClick.bind(this.item.events)
    })

    const children: any[] = []
    if (defaultSlot) {
      children.push(defaultSlot)
    }

    children.push(
      h('div', {
        ref: this.item.square.getSquare(),
        class: this.classes?.value.square
      })
    )

    return h(this.props.tag || 'div', {
      ...this.getAttrs(),
      ...this.item.events.binds,
      ref: this.element,
      class: this.classes?.value.main
    }, children)
  }
}
