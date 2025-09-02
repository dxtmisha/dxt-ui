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
} from '@dxt-ui/functional'

import { List } from './List'

import {
  type ListPropsBasic
} from './props'
import {
  type ListClasses,
  type ListComponents,
  type ListEmits,
  type ListExpose,
  type ListSlots
} from './types'
import type { WindowControlItem } from '../Window'

/**
 * ListDesign
 */
export class ListDesign<
  COMP extends ListComponents,
  EXPOSE extends ListExpose,
  CLASSES extends ListClasses,
  P extends ListPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  ListEmits,
  EXPOSE,
  ListSlots,
  CLASSES,
  P
> {
  protected readonly item: List

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ListEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new List(
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
      isSelected: this.item.data.isSelected,
      selectedList: this.item.data.selectedList,
      selectedNames: this.item.data.selectedNames,
      selectedValues: this.item.data.selectedValues
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
        space: this.getSubClass('space'),
        line: this.getSubClass('line'),
        subtitle: this.getSubClass('subtitle'),
        html: this.getSubClass('html'),
        management: this.getSubClass('management'),
        group: this.getSubClass('group'),
        menu: this.getSubClass('menu'),
        menuGroup: this.getSubClass('menuGroup')
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
    return h(
      'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main
      },
      this.renderData()
    )
  }

  /**
   * Generates all elements from the list.
   *
   * Генерирует все элементы из списка.
   */
  protected readonly renderData = (): VNode[] => {
    return this.renderDataByItem('item', this.item.list.value, true)
  }

  /**
   * Generates an element.
   *
   * Генерирует элемент.
   * @param type type of list/ тип списка
   * @param item selected element/ выбранный элемент
   */
  protected readonly renderItem = (
    type: ListType,
    item: ListDataItem
  ): VNode => {
    return this.components.renderOne(
      'listItem',
      this.getItemAttrs(type, item)
    ) as VNode
  }

  /**
   * Generates a group element.
   *
   * Генерирует групповой элемент.
   * @param item selected element/ выбранный элемент
   * @param open is the group open/ открыта ли группа
   */
  protected readonly renderItemGroup = (item: ListDataItem, open: boolean): VNode => {
    return this.components.renderOne(
      'listItem',
      this.item.getItemManagementFormGroup(item, open)
    ) as VNode
  }

  /**
   * Generates a menu element.
   *
   * Генерирует элемент меню.
   * @param item selected element/ выбранный элемент
   * @param props data for working with the menu/ данные для работы с меню
   */
  protected readonly renderItemMenu = (
    item: ListDataItem,
    props: WindowControlItem
  ): VNode => {
    return this.components.renderOne(
      'listItem',
      toBinds(
        this.item.getItemManagementFormMenu(item, Boolean(props.open.value)),
        props.binds
      )
    ) as VNode
  }

  /**
   * Generates a break between elements.
   *
   * Генерирует разрыв между элементами.
   * @param item selected element/ выбранный элемент
   */
  protected readonly renderSpace = (item: ListDataItem): VNode => {
    return h('div', {
      key: item.value,
      class: [
        this.classes?.value.space,
        this.item.windowClasses.get().static
      ]
    })
  }

  /**
   * Generates a dividing line.
   *
   * Генерирует линию разделения.
   * @param item selected element/ выбранный элемент
   */
  protected readonly renderLine = (item: ListDataItem): VNode => {
    return h('div', {
      key: item.value,
      class: [
        this.classes?.value.line,
        this.item.windowClasses.get().static
      ]
    })
  }

  /**
   * Generates a subtitle.
   *
   * Генерирует подзаголовок.
   * @param item selected element/ выбранный элемент
   */
  protected readonly renderSubtitle = (item: ListDataItem): VNode => {
    return h('div', {
      key: item.value,
      class: [
        this.classes?.value.subtitle,
        this.item.windowClasses.get().static
      ]
    }, item.label)
  }

  /**
   * Generates HTML code by the slot name or the value of the `label` field.
   *
   * Генерирует HTML-код по названию слота или значению поля `label`.
   * @param item selected element/ выбранный элемент
   */
  protected readonly renderHtml = (item: ListDataItem): VNode => {
    const props = {
      key: item.label && isObject(item.value) ? item.label : item.value,
      class: [
        this.classes?.value.html,
        this.item.windowClasses.get().static
      ]
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
   * Generates a group of lists.
   *
   * Генерирует группу списков.
   * @param item selected element/ выбранный элемент
   */
  protected readonly renderGroup = (item: ListDataItem): VNode => {
    return this.components.renderOne(
      'listGroup',
      {
        open: this.item.isOpenGroup(item),
        divider: this.props.divider
      },
      {
        head: ({ open }: { open: boolean }) => this.renderItemGroup(item, open),
        list: () => this.renderDataByItem('group', this.item.getList(item))
      }
    ) as VNode
  }

  /**
   * Generates a menu of lists.
   *
   * Генерирует меню списков.
   * @param item selected element/ выбранный элемент
   * @param first is the first element/ является ли первым элементом
   */
  protected readonly renderMenu = (item: ListDataItem, first: boolean): VNode => {
    return this.components.renderOne(
      'listMenu',
      {
        divider: this.props.divider,
        axis: first ? (this.props.axis === 'x' ? 'y' : 'x') : 'x'
      },
      {
        head: (props: WindowControlItem) => this.renderItemMenu(item, props),
        list: () => this.renderDataByItem('menu', this.item.getList(item))
      }
    ) as VNode
  }

  /**
   * Returns binding properties for the item.
   *
   * Возвращает привязочные свойства для элемента.
   * @param type type of list/ тип списка
   * @param item selected element/ выбранный элемент
   */
  protected getItemAttrs(
    type: ListType,
    item: ListDataItem
  ) {
    switch (type) {
      case 'group':
        return this.item.getItemGroup(item)
      case 'menu':
        return this.item.getItemMenu(item)
      default:
        return this.item.getItem(item)
    }
  }

  /**
   * Generates all elements from the list.
   *
   * Генерирует все элементы из списка.
   * @param type type of list/ тип списка
   * @param data selected element/ выбранный элемент
   * @param first is the first element/ является ли первым элементом
   */
  protected renderDataByItem(
    type: ListType,
    data: ListList,
    first: boolean = false
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
        case 'subtitle':
          children.push(this.renderSubtitle(item))
          break
        case 'html':
          children.push(this.renderHtml(item))
          break
        case 'group':
          children.push(this.renderGroup(item))
          break
        case 'menu':
          children.push(this.renderMenu(item, first))
          break
        default:
          children.push(this.renderItem(type, item))
          break
      }
    })

    children.push(h('div'))
    return children
  }
}
