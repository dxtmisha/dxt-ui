import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  isObject,
  type ListDataItem,
  type ListList,
  type ListType,
  toBinds
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { NavigationRail } from './NavigationRail'

import {
  type NavigationRailPropsBasic
} from './props'
import {
  type NavigationRailClasses,
  type NavigationRailComponents,
  type NavigationRailEmits,
  type NavigationRailExpose,
  type NavigationRailSlots
} from './types'
import type { WindowControlItem } from '../Window'

/**
 * Design constructor class for NavigationRail component, rendering side navigation rail layout and child items.
 *
 * Дизайн-класс конструктора для компонента NavigationRail, выполняющий рендеринг макета боковой панели навигации и ее дочерних элементов.
 */
export class NavigationRailDesign<
  COMP extends NavigationRailComponents,
  EXPOSE extends NavigationRailExpose,
  CLASSES extends NavigationRailClasses,
  P extends NavigationRailPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    NavigationRailEmits,
    EXPOSE,
    NavigationRailSlots,
    CLASSES,
    P
  > {
  /** Constructor logic instance / Экземпляр логики конструктора */
  protected readonly item: NavigationRail

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, NavigationRailEmits, P>,
    ItemConstructor: typeof NavigationRail = NavigationRail
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
   * Initialization of exposed properties. /
   * Инициализация экспортируемых свойств.
   * @returns object with exposed properties / объект с экспортируемыми свойствами
   */
  protected initExpose(): EXPOSE {
    return {
      isSelected: () => this.item.data.isSelected.value,
      getSelectedList: () => this.item.data.selectedList.value,
      getSelectedNames: () => this.item.data.selectedNames.value,
      getSelectedValues: () => this.item.data.selectedValues.value
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes. /
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        space: this.getSubClass('space'),
        line: this.getSubClass('line'),
        html: this.getSubClass('html'),
        management: this.getSubClass('management'),
        menu: this.getSubClass('menu')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles. /
   * Доработка полученного списка стилей.
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering. /
   * Метод для рендеринга.
   * @returns rendered VNode / сгенерированный VNode
   */
  protected initRender(): VNode {
    return h(
      'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        ...AriaStaticInclude.role(this.props.role),
        tabindex: this.props.control ? undefined : this.props.tabindex,
        onFocus: this.item.control.onFocus,
        onBlur: this.item.control.onBlur
      },
      this.renderData()
    )
  }

  /**
   * Generates all elements from the list. /
   * Генерирует все элементы из списка.
   * @returns array of rendered VNodes / массив сгенерированных узлов VNode
   */
  readonly renderData = (): VNode[] => {
    return this.renderDataByItem('item', this.item.list)
  }

  /**
   * Generates an element. /
   * Генерирует элемент.
   * @param type type of list / тип списка
   * @param item selected element / выбранный элемент
   * @param inMenu is item inside menu / находится ли элемент в меню
   * @returns rendered VNode / сгенерированный узел VNode
   */
  readonly renderItem = (
    type: ListType,
    item: ListDataItem,
    inMenu: boolean = false
  ): VNode => {
    return this.components.renderOne(
      inMenu ? 'navigationItem' : 'navigationRailItem',
      this.getItemAttrs(type, item)
    ) as VNode
  }

  /**
   * Generates a menu element. /
   * Генерирует элемент меню.
   * @param item selected element / выбранный элемент
   * @param props data for working with the menu / данные для работы с меню
   * @param inMenu is item inside menu / находится ли элемент в меню
   * @returns rendered VNode / сгенерированный узел VNode
   */
  readonly renderItemMenu = (
    item: ListDataItem,
    props: WindowControlItem,
    inMenu: boolean = false
  ): VNode => {
    return this.components.renderOne(
      inMenu ? 'navigationItem' : 'navigationRailItem',
      toBinds(
        {
          iconTrailing: inMenu ? this.props.iconArrowRight : undefined
        },
        this.item.getItemManagementFormMenu(item, Boolean(props.open.value)),
        props.binds
      )
    ) as VNode
  }

  /**
   * Generates a break between elements. /
   * Генерирует разрыв между элементами.
   * @param item selected element / выбранный элемент
   * @returns rendered space VNode / сгенерированный узел разрыва VNode
   */
  readonly renderSpace = (item: ListDataItem): VNode => {
    return h('div', {
      key: item.value,
      class: this.classes?.value.space,
      ...AriaStaticInclude.role('separator')
    })
  }

  /**
   * Generates a dividing line. /
   * Генерирует линию разделения.
   * @param item selected element / выбранный элемент
   * @returns rendered line VNode / сгенерированный узел линии VNode
   */
  readonly renderLine = (item: ListDataItem): VNode => {
    return h('div', {
      key: item.value,
      class: this.classes?.value.line,
      ...AriaStaticInclude.role('separator')
    })
  }

  /**
   * Generates HTML code by the slot name or the value of the `label` field. /
   * Генерирует HTML-код по названию слота или значению поля `label`.
   * @param item selected element / выбранный элемент
   * @returns rendered html VNode / сгенерированный узел HTML VNode
   */
  readonly renderHtml = (item: ListDataItem): VNode => {
    const props = {
      key: item.label && isObject(item.value) ? item.label : item.value,
      class: this.classes?.value.html
    }

    if (
      this.slots
      && item.value in this.slots
    ) {
      return h('div', props, this.initSlot(item.value))
    }

    return h('div', {
      ...props,
      innerHTML: item.label
    })
  }

  /**
   * Generates a menu of lists. /
   * Генерирует меню списков.
   * @param item selected element / выбранный элемент
   * @param inMenu is menu inside another menu / находится ли меню в другом меню
   * @returns rendered menu VNode / сгенерированный узел меню VNode
   */
  readonly renderMenu = (
    item: ListDataItem,
    inMenu: boolean = false
  ): VNode => {
    return this.components.renderOne(
      'listMenu',
      {
        divider: this.props.divider,
        disabled: item.disabled
      },
      {
        head: (props: WindowControlItem) => this.renderItemMenu(item, props, inMenu),
        list: () => this.renderDataByItem('menu', this.item.getList(item), true)
      }
    ) as VNode
  }

  /**
   * Generates all elements from the list. /
   * Генерирует все элементы из списка.
   * @param type type of list / тип списка
   * @param data selected element / выбранный элемент
   * @param inMenu is list inside menu / находится ли список в меню
   * @returns array of rendered VNodes / массив сгенерированных узлов VNode
   */
  protected renderDataByItem(
    type: ListType,
    data: ListList,
    inMenu: boolean = false
  ): VNode[] {
    const children: VNode[] = []

    data.forEach((item) => {
      switch (item.type) {
        case 'space':
          children.push(this.renderSpace(item))
          break
        case 'line':
          children.push(this.renderLine(item))
          break
        case 'html':
          children.push(this.renderHtml(item))
          break
        case 'menu':
          children.push(this.renderMenu(item, inMenu))
          break
        default:
          children.push(this.renderItem(type, item, inMenu))
          break
      }
    })

    children.push(h('div'))
    return children
  }

  /**
   * Returns binding properties for the item. /
   * Возвращает привязочные свойства для элемента.
   * @param type type of list / тип списка
   * @param item selected element / выбранный элемент
   * @returns binding properties for item / привязочные свойства элемента
   */
  protected getItemAttrs(
    type: ListType,
    item: ListDataItem
  ) {
    switch (type) {
      case 'menu':
        return this.item.getItemMenu(item)
      default:
        return this.item.getItem(item)
    }
  }
}
