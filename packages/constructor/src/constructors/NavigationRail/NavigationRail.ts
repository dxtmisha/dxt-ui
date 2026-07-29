import {
  type Ref,
  type ToRefs,
  computed,
  onMounted,
  nextTick
} from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComp,
  ListDataRef,
  type ListDataItem,
  type ListList,
  toBinds,
  type ConstrClass
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'

import { ListControl, ListFocus, ListGo } from '../List'

import type { NavigationRailComponents, NavigationRailEmits, NavigationRailSlots } from './types'
import type { NavigationRailProps } from './props'

/** Maximum number of navigation rails/ Максимальное количество панелей навигации */
let navigationRailIdMax = 1

/**
 * NavigationRail
 */
export class NavigationRail {
  readonly control: ListControl
  readonly data: ListDataRef
  readonly event: EventClickInclude
  readonly focus: ListFocus
  readonly go: ListGo

  /** Unique list identifier/ Уникальный идентификатор списка */
  protected readonly id: number = ++navigationRailIdMax

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.EventClickIncludeConstructor class for working with click event/ класс для работы с событием клика
   * @param constructors.ListControlConstructor class for working with control/ класс для работы с управлением
   * @param constructors.ListDataRefConstructor class for working with data list/ класс для работы со списком данных
   * @param constructors.ListFocusConstructor class for working with focus/ класс для работы с фокусом
   * @param constructors.ListGoConstructor class for working with navigation/ класс для работы с навигацией
   */
  constructor(
    protected readonly props: NavigationRailProps,
    protected readonly refs: ToRefs<NavigationRailProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<NavigationRailComponents, NavigationRailProps>,
    protected readonly slots?: NavigationRailSlots,
    protected readonly emits?: ConstrEmit<NavigationRailEmits>,
    constructors: {
      EventClickIncludeConstructor?: typeof EventClickInclude
      ListControlConstructor?: typeof ListControl
      ListDataRefConstructor?: typeof ListDataRef
      ListFocusConstructor?: typeof ListFocus
      ListGoConstructor?: typeof ListGo
    } = {}
  ) {
    const {
      EventClickIncludeConstructor = EventClickInclude,
      ListControlConstructor = ListControl,
      ListDataRefConstructor = ListDataRef,
      ListFocusConstructor = ListFocus,
      ListGoConstructor = ListGo
    } = constructors

    this.focus = new ListFocusConstructor(this.props as any, this.element, this.id)

    this.data = new ListDataRefConstructor(
      this.refs.list,
      this.focus.focus,
      undefined,
      undefined,
      undefined,
      this.refs.selected,
      this.refs.keyValue,
      this.refs.keyLabel
    )

    this.go = new ListGoConstructor(
      this.props,
      this.element,
      this.focus,
      this.data,
      this.emits
    )
    this.control = new ListControlConstructor(
      this.props,
      this.element,
      this.data,
      this.go
    )

    this.event = new EventClickIncludeConstructor(undefined, undefined, emits)

    if (this.props.control) {
      onMounted(async () => {
        await nextTick()
        this.go.preparationBySelected()
      })
    }
  }

  /**
   * Computed list data
   *
   * Вычисляемые данные списка
   * */
  get list(): ListList {
    return this.data.fullData.value
  }

  /**
   * Computed CSS classes for the component.
   *
   * Вычисляемые CSS классы для компонента.
   */
  get classes(): ConstrClass {
    return {}
  }

  /**
   * Computed binding properties for list items/
   * Вычисляемые привязочные свойства для элементов списка
   * */
  protected readonly itemBinds = computed(() => {
    return {
      tag: this.props.tag,
      divider: this.props.divider,
      onClick: this.event.onClick,
      ...(this.props.itemAttrs ?? {}),
      listId: this.id
    }
  })

  /**
   * Returns information about the opening status of a group item.
   *
   * Возвращает информацию о статусе открытия группового элемента.
   * @param item List item data/ данные элемента списка
   */
  isOpenGroup(
    item: ConstrBind<ListDataItem>
  ): boolean {
    const data = this.data.getSubList(item)

    return data.isSelected.value
      || data.isFocus()
  }

  /**
   * Gets binding properties for a list item
   *
   * Получает привязочные свойства для элемента списка
   * @param item List item data/ данные элемента списка
   */
  getItem(
    item: ConstrBind<ListDataItem>
  ) {
    return toBinds(
      this.itemBinds.value,
      item,
      {
        'key': item.value,
        'role': this.props.roleItem,
        'data-item': true
      }
    )
  }

  /**
   * Gets binding properties for a menu item in the list
   *
   * Получает привязочные свойства для элемента меню в списке
   * @param item List item data/ данные элемента списка
   */
  getItemMenu(
    item: ConstrBind<ListDataItem>
  ) {
    return toBinds(
      this.itemBinds.value,
      this.props.itemMenuAttrs,
      item,
      {
        key: item.value,
        class: `${this.className}__menu`
      }
    )
  }

  /**
   * Gets binding properties for a menu management item with right arrow
   *
   * Получает привязочные свойства для элемента управления меню со стрелкой вправо
   * @param item List item data/ данные элемента списка
   * @param open Whether the menu is open/ открыто ли меню
   */
  getItemManagementFormMenu(
    item: ConstrBind<ListDataItem>,
    open: boolean
  ): ConstrBind<ListDataItem> {
    return this.getItemManagement(
      {
        ...item,
        filterMode: false
      },
      open
    )
  }

  /**
   * Returns a sublist for a group item.
   *
   * Возвращает подсписок для группового элемента.
   * @param item List item data/ данные элемента списка
   */
  getList(
    item: ConstrBind<ListDataItem>
  ) {
    return this.data.getSubList(item).fullData.value
  }

  /**
   * Internal method to create management item binding properties
   *
   * Внутренний метод для создания привязочных свойств элемента управления
   * @param item List item data/ данные элемента списка
   * @param open Whether the item is open/ открыт ли элемент
   */
  protected getItemManagement(
    item: ConstrBind<ListDataItem>,
    open: boolean
  ): ConstrBind<ListDataItem> {
    return toBinds(
      this.itemBinds.value,
      this.props.itemManagementAttrs,
      item,
      {
        'class': `${this.className}__management`,
        'focus': item?.index === this.focus.focus.value,
        'selectedChild': this.isOpenGroup(item),
        open,
        'data-status': open ? 'open' : 'close',
        'selectionStyle': 'none'
      }
    )
  }
}
