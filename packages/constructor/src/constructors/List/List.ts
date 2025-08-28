import { toRef, type Ref, type ToRefs, computed } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  DesignComp,
  ListData,
  type ListDataItem,
  toBinds
} from '@dxt-ui/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'

import { WindowClassesInclude } from '../Window'

import type { ListComponents, ListEmits, ListSlots } from './types'
import type { ListProps } from './props'
import type { IconValue } from '../Icon'

/**
 * List
 */
export class List {
  readonly data: ListData
  readonly event: EventClickInclude

  readonly windowClasses: WindowClassesInclude

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
   */
  constructor(
    protected readonly props: ListProps,
    protected readonly refs: ToRefs<ListProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ListComponents, ListProps>,
    protected readonly slots?: ListSlots,
    protected readonly emits?: ConstrEmit<ListEmits>
  ) {
    this.data = new ListData(
      toRef(this.props, 'list'),
      this.refs.focus,
      this.refs.highlight,
      this.refs.highlightLengthStart,
      this.refs.selected,
      this.refs.keyValue,
      this.refs.keyLabel,
      this.refs.lite
    )

    this.event = new EventClickInclude(undefined, undefined, emits)
    this.windowClasses = new WindowClassesInclude(classDesign)
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
      ...this.props.itemAttrs ?? {}
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
      { key: item.value }
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
   * Gets binding properties for a group management item with down arrow
   *
   * Получает привязочные свойства для элемента управления группой со стрелкой вниз
   * @param item List item data/ данные элемента списка
   * @param open Whether the group is open/ открыта ли группа
   */
  getItemManagementFormGroup(
    item: ConstrBind<ListDataItem>,
    open: boolean
  ): ConstrBind<ListDataItem> {
    return this.getItemManagement(
      item,
      open,
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
      item,
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
    return {
      divider: this.props.divider,
      ...toBinds(
        this.props.itemAttrs,
        this.props.itemManagementAttrs,
        item,
        {
          class: [
            `${this.className}__management`,
            this.windowClasses.get().static
          ]
        }
      ),
      focus: this.props.focus === item?.index,
      open,
      iconTurn: open,
      iconTrailing: icon,
      iconTrailingTurnOnly: true
    }
  }
}
