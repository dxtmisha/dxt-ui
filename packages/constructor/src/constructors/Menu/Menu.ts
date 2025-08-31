import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp, ListData } from '@dxt-ui/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'

import { BarsInclude } from '../Bars'
import { WindowInclude } from '../Window'

import { MenuRequest } from './MenuRequest'
import { MenuSearch } from './MenuSearch'

import { MenuWindow } from './MenuWindow'

import type { MenuComponents, MenuEmits, MenuSlots } from './types'
import type { MenuProps } from './props'
import type { MenuControlBasic } from './basicTypes'
import type { ListPropsBasic } from '../List'

/**
 * Menu
 */
export class Menu {
  readonly request: MenuRequest
  readonly search: MenuSearch

  readonly data: ListData

  readonly bars: BarsInclude
  /** Include for working with the Window component/ Подключение для работы с компонентом Window */
  readonly window: WindowInclude

  /** Window manager for Menu/ Класс управления окном Menu */
  readonly menuWindow: MenuWindow

  readonly event: EventClickInclude

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
    protected readonly props: MenuProps,
    protected readonly refs: ToRefs<MenuProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MenuComponents, MenuProps>,
    protected readonly slots?: MenuSlots,
    protected readonly emits?: ConstrEmit<MenuEmits>
  ) {
    this.request = new MenuRequest(this.props)
    this.search = new MenuSearch()

    // TODO: DELETE
    this.data = new ListData(
      this.request.item,
      undefined,
      undefined,
      undefined,
      this.refs.selected,
      this.refs.keyValue,
      this.refs.keyLabel
    )

    this.bars = new BarsInclude(
      this.props,
      this.className,
      this.components,
      this.emits
    )

    this.menuWindow = new MenuWindow(this.request, this.data)
    this.window = new WindowInclude(
      this.props,
      this.className,
      this.components,
      this.emits,
      this.menuWindow.getExtra()
    )

    this.event = new EventClickInclude(undefined, undefined, this.emits)
  }

  /**
   * Getting data for binding to the List component.
   *
   * Получение данных для привязки к компоненту List.
   */
  readonly binds = computed<ListPropsBasic>(() => {
    return {
      list: this.props.list,
      liteThreshold: this.props.liteThreshold,
      keyLabel: this.props.keyLabel,
      keyValue: this.props.keyValue,

      tag: this.props.tag,
      onClick: this.event.onClick
    }
  })

  /**
   * Getting data for binding to controls.
   *
   * Получение данных для привязки к контролам.
   * @returns data for binding to controls/ данные для привязки к контролам
   */
  getControlBinds(): MenuControlBasic {
    return {
      isSelected: this.data.isSelected,
      selectedList: this.data.selectedList,
      selectedNames: this.data.selectedNames,
      selectedValues: this.data.selectedValues
    }
  }

  /**
   * Click on the slot handler.
   *
   * Обработчик клика по слоту.
   * @param event event object/ объект события
   */
  readonly onClickSlot = (event: Event) => {
    const element = event.target as HTMLElement
    const item = element.closest<HTMLElement>('*[data-value]')

    if (
      item
      && !element.closest(`.${this.className}__list`)
    ) {
      this.emits?.('clickSlot', item.dataset.value)
    }
  }
}
