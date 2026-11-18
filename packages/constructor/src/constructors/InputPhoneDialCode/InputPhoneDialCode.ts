import { computed } from 'vue'
import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract,
  Geo,
  type ListSelectedList,
  type NumberOrStringOrBoolean
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'

import { ButtonInclude, type ButtonProps } from '../Button'
import { MenuCountryInclude, type MenuCountryProps } from '../MenuCountry'
import type { WindowEmitOptions } from '../Window'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { InputPhoneDialCodeProps } from './props'
import type { InputPhoneDialCodeComponents, InputPhoneDialCodeEmits, InputPhoneDialCodeSlots } from './types'

/** InputPhoneDialCode dependency constructors type / Тип конструкторов зависимостей InputPhoneDialCode */
export type InputPhoneDialCodeConstructors = {
  /** Button constructor / Конструктор кнопки */
  button: typeof ButtonInclude
  /** Click event constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Country menu constructor / Конструктор меню выбора страны */
  menu: typeof MenuCountryInclude
  /** Model value constructor / Конструктор значения модели */
  model: typeof ModelValueInclude<ListSelectedList | undefined>
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
    menu: {
      item: MenuCountryInclude,
      parameters: () => [
        () => ({
          ...this.props,
          menuCountryAttrs: {
            ...this.props.menuCountryAttrs,
            menuAttrs: {
              ...this.props.menuCountryAttrs?.menuAttrs,
              windowAttrs: {
                ...this.props.menuCountryAttrs?.menuAttrs?.windowAttrs,
                disableFocusReturn: true
              }
            }
          }
        }),
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
        this.i('event'),
        computed(() => this.props.modelSelected || this.props.value || Geo.getCountry())
      ]
    }
  }

  /**
   * Computed list of currently selected country items from the menu.
   *
   * Вычисляемый список выбранных элементов страны из меню.
   */
  readonly item = computed(() => {
    return this.i('menu').getElement()?.getSelectedList()
  })

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
    const item = this.item.value?.[0]
    const props: ConstrBind<ButtonProps> = {
      ...(this.props.disabled !== undefined ? { disabled: this.props.disabled } : {}),
      icon: item?.icon,
      iconTrailing: this.props.disabled ? undefined : this.props.iconArrowDown,
      iconTurn: this.i('menu').getElement()?.getOpen()
    }

    if (
      item
      && this.props.labelType
    ) {
      switch (this.props.labelType) {
        case 'code':
          return {
            ...props,
            label: item.caption
          }
        case 'name':
          return {
            ...props,
            label: item.label
          }
        case 'none':
        default:
          return props
      }
    }

    return props
  }

  /**
   * Returns binding attributes for the country menu component.
   *
   * Возвращает привязочные атрибуты для компонента меню выбора страны.
   * @returns country menu bindings / привязки меню выбора страны
   */
  get bindsMenu(): ConstrBind<MenuCountryProps> {
    return {
      selected: this.i('model').value.value,
      showPhoneCode: true,
      onUpdateValue: this.onUpdate,
      onClick: this.onClick,
      onWindow: this.onWindow
    }
  }

  /**
   * Click handler for country selection.
   *
   * Обработчик клика при выборе страны.
   * @param event mouse event object / объект события мыши
   * @param options optional event value options / необязательные параметры значения события
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    this.i('model').onClick(event, options)
  }

  /**
   * Updates the model value and emits the updateValue event.
   *
   * Обновляет значение модели и генерирует событие updateValue.
   * @param value new country code value / новое значение кода страны
   */
  readonly onUpdate = (value?: NumberOrStringOrBoolean): void => {
    this.i('model').onUpdate(value)
    this.emits?.('updateValue', value)
  }

  /**
   * Window state change handler.
   *
   * Обработчик изменения состояния окна.
   * @param options window emit options / параметры события окна
   */
  readonly onWindow = (options: WindowEmitOptions): void => {
    this.emits?.('window', options)
  }
}
