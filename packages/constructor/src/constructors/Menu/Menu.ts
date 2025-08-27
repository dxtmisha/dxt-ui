import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp, ListData } from '@dxt-ui/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'

import { BarsInclude } from '../Bars'
import { WindowInclude } from '../Window'

import { MenuRequest } from './MenuRequest'
import { MenuSearch } from './MenuSearch'

import { MenuOpen } from './MenuOpen'
import { MenuFocus } from './MenuFocus'
import { MenuControl } from './MenuControl'
import { MenuDataLite } from './MenuDataLite'
import { MenuWindow } from './MenuWindow'

import type { MenuComponents, MenuEmits, MenuSlots } from './types'
import type { MenuProps } from './props'
import type { MenuControlBasic } from './basicTypes'

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

  /** Open state manager for Menu/ Класс управления состоянием открытия Menu */
  readonly open: MenuOpen
  /** Focus manager for Menu/ Класс управления фокусом Menu */
  readonly focus: MenuFocus

  readonly dataLite: MenuDataLite
  /** Window manager for Menu/ Класс управления окном Menu */
  readonly menuWindow: MenuWindow

  /** Keyboard control for Menu/ Клавиатурное управление для Menu */
  readonly control: MenuControl

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

    this.data = new ListData(
      this.request.item,
      undefined,
      undefined,
      undefined,
      this.refs.selected,
      this.refs.keyValue,
      this.refs.keyLabel,
      this.refs.lite
    )

    this.bars = new BarsInclude(
      this.props,
      this.className,
      this.components,
      this.emits
    )

    this.open = new MenuOpen(this.element)
    this.focus = new MenuFocus(props, this.data, this.element)

    this.dataLite = new MenuDataLite(this.data, this.open, this.focus)
    this.menuWindow = new MenuWindow(
      this.request,
      this.data,
      this.dataLite,
      this.open,
      this.focus
    )

    this.window = new WindowInclude(
      this.props,
      this.className,
      this.components,
      this.emits,
      this.menuWindow.getExtra()
    )

    this.control = new MenuControl(
      this.data,
      this.open,
      this.focus,
      this.search,
      this.window
    )

    this.event = new EventClickInclude(undefined, undefined, this.emits)
  }

  /**
   * Returns properties for keyboard control.
   *
   * Возвращает свойства для клавиатурного управления.
   */
  getControlBinds(): MenuControlBasic {
    return {
      list: this.data.fullData,
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
