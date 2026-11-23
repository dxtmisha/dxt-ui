import { computed } from 'vue'
import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract,
  Geo,
  type ListSelectedList
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'

import { ButtonInclude, type ButtonProps } from '../Button'
import { MenuCountryInclude, type MenuCountryProps } from '../MenuCountry'
import { InputPhoneDialCodeEvent } from './InputPhoneDialCodeEvent'
import { InputPhoneDialCodeItem } from './InputPhoneDialCodeItem'
import { InputPhoneDialCodeStatus } from './InputPhoneDialCodeStatus'

import type { InputPhoneDialCodeProps } from './props'
import type { InputPhoneDialCodeComponents, InputPhoneDialCodeEmits, InputPhoneDialCodeSlots } from './types'

/** InputPhoneDialCode dependency constructors type / Тип конструкторов зависимостей InputPhoneDialCode */
export type InputPhoneDialCodeConstructors = {
  /** Button constructor / Конструктор кнопки */
  button: typeof ButtonInclude
  /** Click event constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Dial code events handler constructor / Конструктор обработчиков событий выбора телефонного кода */
  events: typeof InputPhoneDialCodeEvent
  /** Selected country item resolver constructor / Конструктор выбранного элемента страны */
  item: typeof InputPhoneDialCodeItem
  /** Country menu constructor / Конструктор меню выбора страны */
  menu: typeof MenuCountryInclude
  /** Model value constructor / Конструктор значения модели */
  model: typeof ModelValueInclude<ListSelectedList | undefined>
  /** Status handler constructor / Конструктор статуса отключения и чтения */
  status: typeof InputPhoneDialCodeStatus
}

/**
 * Constructor class for the phone dial code selector component.
 * Manages the trigger button, the country selection menu, the click event handler,
 * and the reactive model value for the selected country code.
 *
 * Класс-конструктор компонента выбора кода страны телефонного номера.
 * Управляет кнопкой-триггером, меню выбора страны, обработчиком событий клика
 * и реактивным значением модели для выбранного кода страны.
 */
export class InputPhoneDialCode extends DesignLogicAbstract<
  HTMLDivElement,
  InputPhoneDialCodeComponents,
  InputPhoneDialCodeEmits,
  InputPhoneDialCodeSlots,
  InputPhoneDialCodeProps,
  InputPhoneDialCodeConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<InputPhoneDialCodeConstructors> = {
    button: {
      item: ButtonInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.bindsButton
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
    events: {
      item: InputPhoneDialCodeEvent,
      parameters: () => [
        () => this.i('event'),
        () => this.i('model'),
        this.emits
      ]
    },
    item: {
      item: InputPhoneDialCodeItem,
      parameters: () => [
        this.props,
        () => this.i('menu')
      ]
    },
    menu: {
      item: MenuCountryInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.bindsMenu
      ]
    },
    model: {
      item: ModelValueInclude<ListSelectedList | undefined>,
      parameters: () => [
        'selected',
        this.emits,
        undefined,
        computed(() => this.props.modelSelected || this.props.value || Geo.getCountry()),
        () => this.i('status').isBlocked()
      ]
    },
    status: {
      item: InputPhoneDialCodeStatus,
      parameters: () => [this.props]
    }
  }

  /**
   * Returns the resolved props object for the trigger button.
   * Includes the icon, trailing icon, open state indicator, and optionally
   * a label derived from the selected country based on the labelType prop.
   *
   * Возвращает объект разрешённых свойств для кнопки-триггера.
   * Включает иконку, иконку-стрелку, индикатор открытия и, при необходимости,
   * метку, производную от выбранной страны на основе свойства labelType.
   * @returns resolved button props / разрешённые свойства кнопки
   */
  get bindsButton(): ConstrBind<ButtonProps> {
    const status = this.i('status')

    return {
      ...status.binds,
      ...this.i('item').binds,
      iconTrailing: status.isBlocked() ? undefined : this.props.iconArrowDown,
      iconTurn: this.i('menu').getElement()?.getOpen()
    }
  }

  /**
   * Returns binding attributes for the country menu component.
   *
   * Возвращает привязочные атрибуты для компонента меню выбора страны.
   * @returns country menu bindings / привязки меню выбора страны
   */
  get bindsMenu(): ConstrBind<MenuCountryProps> {
    return {
      ...this.i('status').bindsMenu,
      disableFocusReturn: this.props.disableFocusReturn ?? true,
      selected: this.i('model').value.value,
      showPhoneCode: true,
      ...this.i('events').binds
    }
  }
}
