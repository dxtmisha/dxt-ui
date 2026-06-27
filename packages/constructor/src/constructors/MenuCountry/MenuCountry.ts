import { computed, type ComputedRef, type Ref, type ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  forEach,
  type GeoFlagNational,
  GeoFlagRef,
  type ListSelectedList,
  type NumberOrStringOrBoolean
} from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { MenuInclude } from '../Menu'

import type { MenuCountryComponents, MenuCountryEmits, MenuCountrySlots } from './types'
import type { MenuCountryProps } from './props'

/**
 * Class for managing the country selection menu.
 * It integrates menu functionality, event handling, and model state for selecting countries,
 * including automatic flag list generation based on country codes.
 *
 * Класс для управления меню выбора страны.
 * Интегрирует функциональность меню, обработку событий и состояние модели для выбора стран,
 * включая автоматическую генерацию списка флагов на основе кодов стран.
 */
export class MenuCountry {
  /** Menu manager / Менеджер меню */
  readonly menu: MenuInclude

  /** Event manager / Менеджер событий */
  readonly event: EventClickInclude

  /** Model manager / Менеджер модели */
  readonly model: ModelInclude<ListSelectedList | undefined>

  /** List of flags / Список флагов */
  readonly flagList: ComputedRef<GeoFlagNational[]>

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits function called when an event is triggered / функция, вызываемая при возникновении события
   * @param constructors object with classes / объект с классами
   * @param constructors.EventClickIncludeConstructor class for working with click events / класс для работы с событиями клика
   * @param constructors.MenuIncludeConstructor class for working with menu / класс для работы с меню
   * @param constructors.ModelIncludeConstructor class for working with models / класс для работы с моделями
   */
  constructor(
    protected readonly props: MenuCountryProps,
    protected readonly refs: ToRefs<MenuCountryProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MenuCountryComponents, MenuCountryProps>,
    protected readonly slots?: MenuCountrySlots,
    protected readonly emits?: ConstrEmit<MenuCountryEmits>,
    constructors: {
      EventClickIncludeConstructor?: typeof EventClickInclude
      MenuIncludeConstructor?: typeof MenuInclude
      ModelIncludeConstructor?: typeof ModelInclude<ListSelectedList | undefined>
    } = {}
  ) {
    const {
      EventClickIncludeConstructor = EventClickInclude,
      MenuIncludeConstructor = MenuInclude,
      ModelIncludeConstructor = ModelInclude
    } = constructors

    this.flagList = this.initFlagList()

    this.event = new EventClickIncludeConstructor(undefined, undefined, this.emits)
    this.model = new ModelIncludeConstructor('selected', this.emits)

    this.menu = new MenuIncludeConstructor(
      this.className,
      this.props,
      this.components,
      () => ({
        'list': this.list.value,
        'selected': this.props.selected,
        'isSelectedByValue': this.props.isSelectedByValue,
        'onClick': this.event.onClick,
        'onUpdate:selected': (value: ListSelectedList) => this.model.emit(value),
        'onUpdateValue': (value: NumberOrStringOrBoolean) => this.emits?.('updateValue', value)
      })
    )
  }

  /** List of flags / Список флагов */
  protected readonly list = computed<GeoFlagNational[]>(() => {
    if (this.props.showPhoneCode) {
      return forEach(
        this.flagList.value,
        (flag) => {
          if (flag.phoneCode) {
            return {
              ...flag,
              caption: `+${flag.phoneCode}`
            }
          }

          return undefined
        }
      ) as GeoFlagNational[]
    }

    return this.flagList.value
  })

  /**
   * Initializes the flag list.
   *
   * Инициализирует список флагов.
   * @protected
   * @returns reactive list of national flag items / реактивный список элементов национальных флагов
   */
  protected initFlagList(): ComputedRef<GeoFlagNational[]> {
    return new GeoFlagRef(this.refs.language).getNational(this.refs.list)
  }
}
