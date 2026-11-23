// ai-none

import type {
  ConstrBind,
  ConstrEmit,
  ListSelectedList,
  NumberOrStringOrBoolean
} from '@dxtmisha/functional'

import type { EventClickInclude } from '../../classes/EventClickInclude'
import type { ModelInclude } from '../../classes/ModelInclude'

import type { MenuProps } from '../Menu'
import type { WindowEmitOptions } from '../Window'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { MenuCountryEmits } from './types'

/**
 * Class for handling MenuCountry events and forwarding updates.
 *
 * Класс для обработки событий MenuCountry и передачи обновлений.
 */
export class MenuCountryEvent {
  /**
   * Constructor
   *
   * Конструктор
   * @param eventClick function returning click event helper / функция, возвращающая помощник события клика
   * @param model function returning model helper / функция, возвращающая помощник модели
   * @param emits function called when an event is triggered / функция, вызываемая при возникновении события
   */
  constructor(
    protected readonly eventClick: () => EventClickInclude,
    protected readonly model: () => ModelInclude<ListSelectedList | undefined>,
    protected readonly emits?: ConstrEmit<MenuCountryEmits>
  ) {
  }

  /**
   * Returns event bindings for the menu component.
   *
   * Возвращает привязки событий для компонента меню.
   * @returns event bindings object / объект привязок событий
   */
  get binds(): Pick<
    ConstrBind<MenuProps>,
    'onClick' | 'onWindow' | 'onUpdate:selected' | 'onUpdateValue'
  > {
    return {
      'onClick': this.onClick,
      'onWindow': this.onWindow,
      'onUpdate:selected': this.onUpdateSelected,
      'onUpdateValue': this.onUpdateValue
    }
  }

  /**
   * Click handler.
   *
   * Обработчик клика.
   * @param event mouse event object / объект события мыши
   * @param options optional event value options / необязательные параметры значения события
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    this.eventClick().onClick(event, options)
  }

  /**
   * Selected value update handler.
   *
   * Обработчик обновления выбранного значения.
   * @param value selected list value / выбранное значение списка
   */
  readonly onUpdateSelected = (value: ListSelectedList): void => {
    this.model().emit(value)
  }

  /**
   * Value update handler.
   *
   * Обработчик обновления значения.
   * @param value updated item value / обновлённое значение элемента
   */
  readonly onUpdateValue = (value?: NumberOrStringOrBoolean): void => {
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
