import { toRef, type Ref, type ToRefs, computed, onMounted, nextTick } from 'vue'
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

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'

import { WindowClassesInclude } from '../Window'

import { ListSearch } from './ListSearch'
import { ListFocus } from './ListFocus'
import { ListGo } from './ListGo'
import { ListControl } from './ListControl'

import type { IconValue } from '../Icon'
import type { ListGroupSlotsPropsInclude } from '../ListGroup'
import type { ListComponents, ListEmits, ListSlots } from './types'
import type { ListProps } from './props'

/** Maximum number of lists/ Максимальное количество списков */
let listIdMax = 1

/**
 * List
 */
export class List {
  readonly search: ListSearch
  readonly focus: ListFocus

  readonly data: ListDataRef
  readonly event: EventClickInclude

  readonly go: ListGo
  readonly control: ListControl

  readonly windowClasses: WindowClassesInclude

  /** Unique list identifier/ Уникальный идентификатор списка */
  protected readonly id: number = ++listIdMax

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
   * @param constructors.ListSearchConstructor class for working with search/ класс для работы с поиском
   * @param constructors.WindowClassesIncludeConstructor class for working with window classes/ класс для работы с классами окна
   */
  constructor(
    protected readonly props: ListProps,
    protected readonly refs: ToRefs<ListProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ListComponents, ListProps>,
    protected readonly slots?: ListSlots,
    protected readonly emits?: ConstrEmit<ListEmits>,
    constructors?: {
      EventClickIncludeConstructor?: typeof EventClickInclude
      ListControlConstructor?: typeof ListControl
      ListDataRefConstructor?: typeof ListDataRef
      ListFocusConstructor?: typeof ListFocus
      ListGoConstructor?: typeof ListGo
      ListSearchConstructor?: typeof ListSearch
      WindowClassesIncludeConstructor?: typeof WindowClassesInclude
    }
  ) {
    const {
      EventClickIncludeConstructor = EventClickInclude,
      ListControlConstructor = ListControl,
      ListDataRefConstructor = ListDataRef,
      ListFocusConstructor = ListFocus,
      ListGoConstructor = ListGo,
      ListSearchConstructor = ListSearch,
      WindowClassesIncludeConstructor = WindowClassesInclude
    } = constructors ?? {}

    this.search = new ListSearchConstructor(this.props)
    this.focus = new ListFocusConstructor(this.props, this.element, this.id)

    this.data = new ListDataRefConstructor(
      toRef(this.props, 'list'),
      this.focus.focus,
      this.search.highlight,
      this.refs.highlightLengthStart,
      this.refs.filterMode,
      this.refs.selected,
      this.refs.keyValue,
      this.refs.keyLabel,
      this.refs.liteThreshold,
      undefined,
      this.refs.max
    )

    this.go = new ListGoConstructor(this.props, this.focus, this.data, this.emits)
    this.control = new ListControlConstructor(this.props, this.search, this.data, this.go)

    this.event = new EventClickIncludeConstructor(undefined, undefined, emits)
    this.windowClasses = new WindowClassesIncludeConstructor(classDesign)

    onMounted(async () => {
      await nextTick()
      this.go.preparationBySelected()
    })
  }

  /**
   * Computed list data
   *
   * Вычисляемые данные списка
   * */
  readonly list = computed<ListList>(() => {
    if (this.props.lite) {
      return this.data.liteData.value
    }

    return this.data.fullData.value
  })

  /**
   * Computed CSS classes for the cell component.
   *
   * Вычисляемые CSS классы для компонента ячейки.
   */
  readonly classes = computed<ConstrClass>(() => ({
    [`${this.className}--highlightActive`]: Boolean(this.props.filterMode) && this.data.isHighlight()
  }))

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
      || data.isHighlight()
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
        key: item.value,
        role: this.props.roleItem
      }
    )
  }

  /**
   * Gets binding properties for a group item in the list
   *
   * Получает привязочные свойства для группового элемента в списке
   * @param item List item data/ данные элемента списка
   */
  getItemGroup(
    item: ConstrBind<ListDataItem>
  ) {
    return toBinds(
      this.itemBinds.value,
      this.props.itemGroupAttrs,
      item,
      {
        key: item.value,
        class: `${this.className}__group`
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
   * Gets binding properties for a group management item with down arrow
   *
   * Получает привязочные свойства для элемента управления группой со стрелкой вниз
   * @param item List item data/ данные элемента списка
   * @param props additional properties/ дополнительные свойства
   */
  getItemManagementFormGroup(
    item: ConstrBind<ListDataItem>,
    props: ListGroupSlotsPropsInclude
  ): ConstrBind<ListDataItem> {
    return this.getItemManagement(
      {
        ...item,
        ...props,
        filterMode: false,
        ...AriaStaticInclude.haspopup('listbox')
      },
      props.open,
      this.props.iconArrowDown
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
      open,
      this.props.iconArrowRight
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
   * @param icon Icon to display/ иконка для отображения
   */
  protected getItemManagement(
    item: ConstrBind<ListDataItem>,
    open: boolean,
    icon?: IconValue
  ): ConstrBind<ListDataItem> {
    return toBinds(
      this.itemBinds.value,
      this.props.itemManagementAttrs,
      item,
      {
        'class': [
          `${this.className}__management`,
          this.windowClasses.get().static
        ],
        'focus': item?.index === this.focus.focus.value,
        'selectedChild': this.isOpenGroup(item),
        open,
        'iconTurn': open,
        'iconTrailing': icon,
        'iconTrailingTurnOnly': true,
        'data-status': open ? 'open' : 'close'
      }
    )
  }
}
