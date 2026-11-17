import {
  computed,
  mergeProps,
  nextTick,
  toRef,
  watch,
  type WatchStopHandle
} from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract,
  ListDataRef,
  type ListDataItem,
  type ListList,
  ServerStorage
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { TextInclude } from '../../classes/TextInclude'

import { WindowClassesInclude } from '../Window'

import { ListControl } from './ListControl'
import { ListFocus } from './ListFocus'
import { ListGo } from './ListGo'
import { ListSearch } from './ListSearch'

import type { IconValue } from '../Icon'
import type { ListGroupSlotsPropsInclude } from '../ListGroup'
import type { ListProps } from './props'
import type { ListComponents, ListEmits, ListSlots } from './types'

/** List dependency constructors type / Тип конструкторов зависимостей List */
export type ListConstructors = {
  /** Control constructor / Конструктор управления */
  control: typeof ListControl
  /** List data constructor / Конструктор данных списка */
  data: typeof ListDataRef
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Focus constructor / Конструктор фокусировки */
  focus: typeof ListFocus
  /** Navigation constructor / Конструктор навигации */
  go: typeof ListGo
  /** Search constructor / Конструктор поиска */
  search: typeof ListSearch
  /** Text constructor / Конструктор текста */
  text: typeof TextInclude
  /** Window classes constructor / Конструктор классов окна */
  windowClasses: typeof WindowClassesInclude
}

/**
 * Orchestrator class for the List component.
 * Coordinates list data normalization, keyboard navigation, focus management, search highlighting, and item bindings.
 *
 * Класс-оркестратор для компонента List.
 * Координирует нормализацию данных списка, клавиатурную навигацию, управление фокусом, подсветку поиска и привязки элементов.
 */
export class List extends DesignLogicAbstract<
  HTMLElement,
  ListComponents,
  ListEmits,
  ListSlots,
  ListProps,
  ListConstructors
> {
  /** Unique list identifier isolated per SSR request / Уникальный идентификатор списка с изоляцией SSR-запросов */
  protected readonly id: number = ++ServerStorage.get<{ id: number }>('__ui:list-id__', () => ({ id: 1 })).id

  /** Stop handle for the search highlight watcher / Функция остановки наблюдателя подсветки поиска */
  protected stopSearchWatch?: WatchStopHandle

  /** Whether the component has been unmounted / Был ли компонент размонтирован */
  protected isDestroyed = false

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ListConstructors> = {
    control: {
      item: ListControl,
      conditions: () => Boolean(this.props.control),
      parameters: () => [
        this.props,
        this.element,
        () => this.i('data'),
        () => this.i('go'),
        () => this.i('search')
      ]
    },
    data: {
      item: ListDataRef,
      parameters: () => [
        toRef(this.props, 'list'),
        this.i('focus').focus,
        this.i('search').highlight,
        toRef(this.props, 'highlightLengthStart'),
        toRef(this.props, 'filterMode'),
        toRef(this.props, 'selected'),
        toRef(this.props, 'keyValue'),
        toRef(this.props, 'keyLabel'),
        toRef(this.props, 'liteThreshold'),
        undefined,
        toRef(this.props, 'max')
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    },
    focus: {
      item: ListFocus,
      parameters: () => [
        this.props,
        this.element,
        this.id
      ]
    },
    go: {
      item: ListGo,
      parameters: () => [
        this.props,
        this.element,
        () => this.i('data'),
        () => this.i('focus'),
        this.emits
      ]
    },
    search: {
      item: ListSearch,
      parameters: () => [this.props]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    },
    windowClasses: {
      item: WindowClassesInclude,
      parameters: () => [this.naming.getDesign()]
    }
  }

  /**
   * Computed list data.
   *
   * Вычисляемые данные списка.
   * @returns list data / данные списка
   */
  get list(): ListList {
    const data = this.i('data')

    if (this.props.lite) {
      return data.liteData.value
    }

    return data.fullData.value
  }

  /**
   * Computed CSS classes for the list component.
   *
   * Вычисляемые CSS классы для компонента списка.
   * @returns classes object / объект классов
   */
  get classes(): ConstrClassObject {
    const isFilterMode = Boolean(this.props.filterMode)

    return {
      [this.naming.getStatusClass('highlightActive')]: isFilterMode && this.i('data').isHighlight(),
      [this.naming.getStatusClass('searchActive')]: isFilterMode && this.i('search').is()
    }
  }

  /** Computed binding properties for list items / Вычисляемые привязочные свойства для элементов списка */
  protected readonly itemBinds = computed<ConstrBind<ListDataItem>>(() => {
    return mergeProps(
      {
        tag: this.props.tag,
        divider: this.props.divider,
        selectionStyle: this.props.selectionStyle,
        lazy: this.props.lazy,
        lazyMargin: this.props.lazyMargin,
        onClick: this.i('event').onClick
      },
      this.props.itemAttrs ?? {},
      {
        listId: this.id
      }
    ) as ConstrBind<ListDataItem>
  })

  /** Mount lifecycle hook registering search highlight watcher and preparing selected item / Хук монтирования для наблюдателя поиска и подготовки выбранного элемента */
  protected override readonly onMounted = async (): Promise<void> => {
    this.stopSearchWatch = watch(
      () => (this.props.control ? this.i('search').item.value : undefined),
      () => {
        if (this.props.control) {
          this.i('go').toHighlight()
        }
      }
    )

    if (this.props.control) {
      await nextTick()

      if (!this.isDestroyed) {
        this.i('go').preparationBySelected()
      }
    }
  }

  /** Cleanup lifecycle resources on unmount / Очистка ресурсов жизненного цикла при размонтировании */
  protected override readonly onUnmounted = (): void => {
    this.isDestroyed = true
    this.stopSearchWatch?.()
    this.stopSearchWatch = undefined
  }

  /**
   * Returns information about the opening status of a group item.
   *
   * Возвращает информацию о статусе открытия группового элемента.
   * @param item List item data / данные элемента списка
   * @returns true if group is open / true, если группа открыта
   */
  isOpenGroup(
    item: ConstrBind<ListDataItem>
  ): boolean {
    const data = this.i('data').getSubList(item)

    return data.isSelected.value
      || data.isFocus()
      || data.isHighlight()
  }

  /**
   * Gets binding properties for a list item.
   *
   * Получает привязочные свойства для элемента списка.
   * @param item List item data / данные элемента списка
   * @returns binding properties / привязочные свойства
   */
  getItem(
    item: ConstrBind<ListDataItem>
  ): ConstrBind<ListDataItem> {
    return mergeProps(
      this.itemBinds.value,
      item,
      {
        'key': item.value,
        ...(this.props.roleItem !== undefined ? { role: this.props.roleItem } : {}),
        'data-item': true
      }
    ) as ConstrBind<ListDataItem>
  }

  /**
   * Gets binding properties for a group item in the list.
   *
   * Получает привязочные свойства для группового элемента в списке.
   * @param item List item data / данные элемента списка
   * @returns binding properties / привязочные свойства
   */
  getItemGroup(
    item: ConstrBind<ListDataItem>
  ): ConstrBind<ListDataItem> {
    return mergeProps(
      this.itemBinds.value,
      this.props.itemGroupAttrs ?? {},
      item,
      {
        key: item.value,
        class: this.naming.getSubClass('group')
      }
    ) as ConstrBind<ListDataItem>
  }

  /**
   * Gets binding properties for a menu item in the list.
   *
   * Получает привязочные свойства для элемента меню в списке.
   * @param item List item data / данные элемента списка
   * @returns binding properties / привязочные свойства
   */
  getItemMenu(
    item: ConstrBind<ListDataItem>
  ): ConstrBind<ListDataItem> {
    return mergeProps(
      this.itemBinds.value,
      this.props.itemMenuAttrs ?? {},
      item,
      {
        key: item.value,
        class: this.naming.getSubClass('menu')
      }
    ) as ConstrBind<ListDataItem>
  }

  /**
   * Gets binding properties for a group management item with down arrow.
   *
   * Получает привязочные свойства для элемента управления группой со стрелкой вниз.
   * @param item List item data / данные элемента списка
   * @param props additional properties / дополнительные свойства
   * @returns binding properties / привязочные свойства
   */
  getItemManagementFormGroup(
    item: ConstrBind<ListDataItem>,
    props: ListGroupSlotsPropsInclude
  ): ConstrBind<ListDataItem> {
    return this.getItemManagement(
      mergeProps(
        item,
        props,
        {
          filterMode: false,
          ...AriaStaticInclude.haspopup('listbox')
        }
      ) as ConstrBind<ListDataItem>,
      props.open,
      this.props.iconArrowDown
    )
  }

  /**
   * Gets binding properties for a menu management item with right arrow.
   *
   * Получает привязочные свойства для элемента управления меню со стрелкой вправо.
   * @param item List item data / данные элемента списка
   * @param open Whether the menu is open / открыто ли меню
   * @returns binding properties / привязочные свойства
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
   * @param item List item data / данные элемента списка
   * @returns sublist data / данные подсписка
   */
  getList(
    item: ConstrBind<ListDataItem>
  ): ListList {
    return this.i('data').getSubList(item).fullData.value
  }

  /**
   * Internal method to create management item binding properties.
   *
   * Внутренний метод для создания привязочных свойств элемента управления.
   * @param item List item data / данные элемента списка
   * @param open Whether the item is open / открыт ли элемент
   * @param icon Icon to display / иконка для отображения
   * @returns binding properties / привязочные свойства
   */
  protected getItemManagement(
    item: ConstrBind<ListDataItem>,
    open: boolean,
    icon?: IconValue
  ): ConstrBind<ListDataItem> {
    return mergeProps(
      this.itemBinds.value,
      this.props.itemManagementAttrs ?? {},
      item,
      {
        'class': [
          this.naming.getSubClass('management'),
          this.i('windowClasses').get().static
        ],
        'focus': item?.index === this.i('focus').focus.value,
        'selectedChild': this.isOpenGroup(item),
        open,
        'iconTurn': open,
        'iconTrailing': icon,
        'iconTrailingTurnOnly': true,
        'data-status': open ? 'open' : 'close',
        'selectionStyle': 'none'
      }
    ) as ConstrBind<ListDataItem>
  }
}
