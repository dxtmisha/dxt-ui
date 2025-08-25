import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract, isObject,
  type ListDataItem, toBind
} from '@dxt-ui/functional'

import { List } from './List'

import {
  type ListProps
} from './props'
import {
  type ListClasses,
  type ListComponents,
  type ListEmits,
  type ListExpose,
  type ListSlots
} from './types'

/**
 * ListDesign
 */
export class ListDesign<
  COMP extends ListComponents,
  EXPOSE extends ListExpose,
  CLASSES extends ListClasses,
  P extends ListProps
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
        space: this.getSubClass('space'),
        line: this.getSubClass('line'),
        subtitle: this.getSubClass('subtitle'),
        html: this.getSubClass('html'),
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
    const children: VNode[] = []

    this.item.data.fullData.value
      .forEach((item) => {
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
            // children.push(...setup.renderMenuItem(item))
            break
          case 'menu-group':
            // children.push(setup.renderMenuGroup(item))
            break
          default:
            children.push(this.renderItem(item))
            break
        }
      })

    children.push(h('div'))

    return children
  }

  /**
   * Generates an element.
   *
   * Генерирует элемент.
   * @param item selected element/ выбранный элемент
   */
  protected readonly renderItem = (item: ListDataItem): VNode => {
    return this.components.renderOne('listItem', {
      key: item.value,
      tag: this.props.tag,
      divider: this.props.divider,
      ...toBind(this.props.itemAttrs ?? {}, item),
      onClick: this.item.event.onClick
    }) as VNode
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
    return this.components.renderOne('listGroup', {
      ...toBind(
        toBind(
          this.props,
          this.props.groupAttrs ?? {}
        ),
        {
          class: this.classes?.value.group
        }
      ),
      head: {
        ...item,
        value: item?.index
      },
      list: item.value,
      onClick: this.item.event.onClick
    }) as VNode
  }

  /**
   * Generates a menu group.
   *
   * Генерирует группу меню.
   * @param item selected element/ выбранный элемент
   */
  /* protected readonly renderMenuItem = (item: ListDataItem): VNode[] => {
    return setup.renderMenu(
      {
        control: (binds: UseMenuControl) => this.renderMenuControl(item, binds)
      },
      {
        ...item?.menuAttrs,
        list: item.value,
        onClick: setup.onClick
      }
    )
  } */

  /**
   * Generates a control element for the menu.
   *
   * Генерирует элемент управления для меню.
   * @param item selected element/ выбранный элемент
   * @param binds data for working with the menu/ данные для работы с меню
   */
  /* protected readonly renderMenuControl = (
    item: ListDataItem,
    binds: UseMenuControl
  ) => {
    return setup.renderItem({
      iconTrailing: this.props.axis === 'x' ? this.props.iconArrowDown : this.props.iconArrowRight,
      iconTrailingTurnOnly: true,

      ...item,
      type: undefined,
      value: undefined,
      menuAttrs: undefined,

      ...binds.binds,

      focus: this.props.focus === item?.index,
      open: binds.open.value || binds.isSelected.value,
      iconTurn: binds.open.value,
      class: [
        binds.class,
        this.classes?.value.menu,
        this.item.windowClasses.get().static
      ]
    })
  } */

  /**
   * Generates an adapted group with changes in the menu when the rail status is active.
   *
   * Генерирует адаптированную группу с изменениями в меню при активности статуса rail.
   * @param item selected element/ выбранный элемент
   */
  /* protected readonly renderMenuGroup = (item: ListDataItem): VNode => {
    const divider = item.divider || this.props.divider

    return h(
      'div',
      {
        'class': {
          [this.classes?.value.menuGroup]: true,
          [`${this.classes?.value.menuGroup}--divider`]: divider
        },
        'data-divider': divider ? 'divider' : undefined
      },
      [
        setup.renderGroup(item),
        setup.renderMenuItem(item)
      ]
    )
  } */
}
