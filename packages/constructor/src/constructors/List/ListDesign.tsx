import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  isObject,
  type ListDataItem,
  type ListList,
  type ListType
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { List } from './List'

import type { ListGroupSlotsPropsInclude } from '../ListGroup'
import type { WindowControlItem } from '../Window'
import type { ListPropsBasic } from './props'
import type {
  ListClasses,
  ListComponents,
  ListEmits,
  ListExpose,
  ListSlots
} from './types'

/**
 * ListDesign is a design constructor for the List component.
 * It connects the List logic, sets up slots, classes, styles, and defines the rendering function.
 *
 * ListDesign — конструктор дизайна для компонента List.
 * Он связывает логику List, настраивает слоты, классы, стили и определяет функцию рендеринга.
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
  /** List logic orchestrator instance / Экземпляр логического оркестратора List */
  protected readonly item: List

  /**
   * Constructor.
   *
   * Конструктор.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ListEmits, P>,
    ItemConstructor: typeof List = List
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
   * Initialization of all the necessary properties for exposure.
   *
   * Инициализация всех необходимых свойств для экспозиции.
   * @returns exposed properties / экспонируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      isSelected: () => this.item.i('data').isSelected.value,
      getSelectedList: () => this.item.i('data').selectedList.value,
      getSelectedNames: () => this.item.i('data').selectedNames.value,
      getSelectedValues: () => this.item.i('data').selectedValues.value
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns initialized classes / инициализированные классы
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        space: this.naming.getSubClass('space'),
        line: this.naming.getSubClass('line'),
        subtitle: this.naming.getSubClass('subtitle'),
        html: this.naming.getSubClass('html'),
        management: this.naming.getSubClass('management'),
        group: this.naming.getSubClass('group'),
        menu: this.naming.getSubClass('menu'),
        filterInput: this.naming.getSubClass('filterInput'),
        none: this.naming.getSubClass('none')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns initialized styles / инициализированные стили
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the component.
   *
   * Метод для рендеринга компонента.
   * @returns component virtual node / виртуальный узел компонента
   */
  protected initRender(): VNode {
    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        AriaStaticInclude.role(this.props.role),
        this.props.ariaMultiselectable !== undefined
          ? AriaStaticInclude.multiselectable(this.props.ariaMultiselectable)
          : {},
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value,
          tabindex: this.props.control ? undefined : this.props.tabindex,
          onFocus: () => this.item.i('control').onFocus(),
          onBlur: () => this.item.i('control').onBlur()
        }
      ),
      [
        ...this.renderFilterInput(),
        ...this.renderData()
      ]
    )
  }

  /**
   * Generates all elements from the list.
   *
   * Генерирует все элементы из списка.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderData = (): VNode[] => {
    return this.renderDataByItem('item', this.item.list, true)
  }

  /**
   * Generates an element.
   *
   * Генерирует элемент.
   * @param type type of list / тип списка
   * @param item selected element / выбранный элемент
   * @returns item virtual node or undefined / виртуальный узел элемента или undefined
   */
  readonly renderItem = (
    type: ListType,
    item: ListDataItem
  ): VNode | undefined => {
    return this.components?.renderOne(
      'listItem',
      this.getItemAttrs(type, item)
    )
  }

  /**
   * Generates a group element.
   *
   * Генерирует групповой элемент.
   * @param item selected element / выбранный элемент
   * @param props data for working with the group / данные для работы с группой
   * @returns group head virtual node or undefined / виртуальный узел заголовка группы или undefined
   */
  readonly renderItemGroup = (
    item: ListDataItem,
    props: ListGroupSlotsPropsInclude
  ): VNode | undefined => {
    return this.components?.renderOne(
      'listItem',
      this.item.getItemManagementFormGroup(item, props)
    )
  }

  /**
   * Generates a menu element.
   *
   * Генерирует элемент меню.
   * @param item selected element / выбранный элемент
   * @param props data for working with the menu / данные для работы с меню
   * @returns menu head virtual node or undefined / виртуальный узел заголовка меню или undefined
   */
  readonly renderItemMenu = (
    item: ListDataItem,
    props: WindowControlItem
  ): VNode | undefined => {
    return this.components?.renderOne(
      'listItem',
      mergeProps(
        this.item.getItemManagementFormMenu(item, Boolean(props.open.value)),
        props.binds
      )
    )
  }

  /**
   * Render filter input.
   *
   * Рендер фильтра ввода.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderFilterInput = (): VNode[] => {
    if (this.props.showSearch) {
      return [
        h(
          'div',
          {
            class: [
              this.classes?.value.filterInput,
              this.item.i('windowClasses').get().static
            ]
          },
          this.components?.render(
            'input',
            mergeProps(
              {
                ref: this.item.i('control').inputElement,
                icon: this.props.iconSearch,
                onInputLite: this.item.i('control').onInput
              },
              this.props.inputSearchAttrs ?? {},
              {
                inputAttrs: mergeProps(
                  {
                    'data-menu-control': '1'
                  },
                  (this.props.inputSearchAttrs?.inputAttrs as Record<string, unknown>) ?? {}
                )
              }
            )
          ) ?? []
        )
      ]
    }

    return []
  }

  /**
   * Generates an element indicating that nothing was found.
   *
   * Генерирует элемент, указывающий на то, что ничего не найдено.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderNone = (): VNode[] => {
    if (this.props.filterMode) {
      return [
        h(
          'div',
          {
            class: this.classes?.value.none,
            ...AriaStaticInclude.live('polite'),
            ...AriaStaticInclude.atomic(true)
          },
          h(
            'span',
            this.item.i('text').notFound
          )
        )
      ]
    }

    return []
  }

  /**
   * Generates a break between elements.
   *
   * Генерирует разрыв между элементами.
   * @param item selected element / выбранный элемент
   * @returns space virtual node / виртуальный узел отступа
   */
  readonly renderSpace = (item: ListDataItem): VNode => {
    return h('div', {
      key: item.value,
      class: [
        this.classes?.value.space,
        this.item.i('windowClasses').get().static
      ],
      ...AriaStaticInclude.role('separator')
    })
  }

  /**
   * Generates a dividing line.
   *
   * Генерирует линию разделения.
   * @param item selected element / выбранный элемент
   * @returns line virtual node / виртуальный узел разделительной линии
   */
  readonly renderLine = (item: ListDataItem): VNode => {
    return h('div', {
      key: item.value,
      class: [
        this.classes?.value.line,
        this.item.i('windowClasses').get().static
      ],
      ...AriaStaticInclude.role('separator')
    })
  }

  /**
   * Generates a subtitle.
   *
   * Генерирует подзаголовок.
   * @param item selected element / выбранный элемент
   * @returns subtitle virtual node / виртуальный узел подзаголовка
   */
  readonly renderSubtitle = (item: ListDataItem): VNode => {
    return h('div', {
      key: item.value,
      class: [
        this.classes?.value.subtitle,
        this.item.i('windowClasses').get().static
      ],
      ...AriaStaticInclude.role('separator')
    }, item.label)
  }

  /**
   * Generates HTML code by the slot name or the value of the `label` field.
   *
   * Генерирует HTML-код по названию слота или значению поля `label`.
   * @param item selected element / выбранный элемент
   * @returns HTML virtual node / виртуальный узел HTML
   */
  readonly renderHtml = (item: ListDataItem): VNode => {
    const props = {
      key: item.label && isObject(item.value) ? item.label : item.value,
      class: [
        this.classes?.value.html,
        this.item.i('windowClasses').get().static
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
   * @param item selected element / выбранный элемент
   * @returns group virtual node or undefined / виртуальный узел группы или undefined
   */
  readonly renderGroup = (item: ListDataItem): VNode | undefined => {
    return this.components?.renderOne(
      'listGroup',
      {
        open: this.item.isOpenGroup(item),
        divider: this.props.divider,
        disabled: item.disabled
      },
      {
        head: (props: ListGroupSlotsPropsInclude) => this.renderItemGroup(item, props),
        list: () => this.renderDataByItem('group', this.item.getList(item))
      }
    )
  }

  /**
   * Generates a menu of lists.
   *
   * Генерирует меню списков.
   * @param item selected element / выбранный элемент
   * @param first is the first element / является ли первым элементом
   * @returns menu virtual node or undefined / виртуальный узел меню или undefined
   */
  readonly renderMenu = (item: ListDataItem, first: boolean): VNode | undefined => {
    return this.components?.renderOne(
      'listMenu',
      {
        divider: this.props.divider,
        axis: first ? (this.props.axis === 'x' ? 'y' : 'x') : 'x',
        disabled: item.disabled
      },
      {
        head: (props: WindowControlItem) => this.renderItemMenu(item, props),
        list: () => this.renderDataByItem('menu', this.item.getList(item))
      }
    )
  }

  /**
   * Generates all elements from the list.
   *
   * Генерирует все элементы из списка.
   * @param type type of list / тип списка
   * @param data selected element / выбранный элемент
   * @param first is the first element / является ли первым элементом
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  renderDataByItem(
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
          if (this.isHighlight(item)) {
            const node = this.renderGroup(item)

            if (node) {
              children.push(node)
            }
          }
          break
        case 'menu':
          if (this.isHighlight(item)) {
            const node = this.renderMenu(item, first)

            if (node) {
              children.push(node)
            }
          }
          break
        default: {
          const node = this.renderItem(type, item)

          if (node) {
            children.push(node)
          }
          break
        }
      }
    })

    if (type === 'item') {
      children.push(...this.renderNone())
    }

    children.push(h('div'))
    return children
  }

  /**
   * Determines if highlighting is required.
   *
   * Определяет, требуется ли выделение.
   * @param item selected element / выбранный элемент
   * @returns true if highlighting is required / true, если требуется выделение
   */
  protected isHighlight(item: ListDataItem): boolean {
    if (!this.props.filterMode) {
      return true
    }

    return this.item.i('data').getSubList(item).isHighlightActive()
  }

  /**
   * Returns binding properties for the item.
   *
   * Возвращает привязочные свойства для элемента.
   * @param type type of list / тип списка
   * @param item selected element / выбранный элемент
   * @returns binding properties / привязочные свойства
   */
  protected getItemAttrs(
    type: ListType,
    item: ListDataItem
  ): ConstrBind<ListDataItem> {
    switch (type) {
      case 'group':
        return this.item.getItemGroup(item)
      case 'menu':
        return this.item.getItemMenu(item)
      default:
        return this.item.getItem(item)
    }
  }
}
