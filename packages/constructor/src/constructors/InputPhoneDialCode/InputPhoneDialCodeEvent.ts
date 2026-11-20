// ai-none

import {
  type ConstrBind,
  type ConstrEmit,
  isArray,
  type ListSelectedList,
  type NumberOrStringOrBoolean
} from '@dxtmisha/functional'

import type { ModelValueInclude } from '../../classes/ModelValueInclude'

import type { MenuCountryProps } from '../MenuCountry'
import type { WindowEmitOptions } from '../Window'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { InputPhoneDialCodeEmits } from './types'

/**
 * Class for handling InputPhoneDialCode events and delegating country selection updates.
 *
 * Класс для обработки событий InputPhoneDialCode и делегирования обновлений выбора страны.
 */
export class InputPhoneDialCodeEvent {
  /**
   * Constructor
   * @param model function returning model value helper / функция, возвращающая помощник значения модели
   * @param emits function called when an event is triggered / функция, вызываемая при возникновении события
   */
  constructor(
    protected readonly model: () => ModelValueInclude<ListSelectedList | undefined>,
    protected readonly emits?: ConstrEmit<InputPhoneDialCodeEmits>
  ) {
  }

  /**
   * Returns event bindings for the country menu component.
   *
   * Возвращает привязки событий для компонента меню выбора страны.
   * @returns event bindings object / объект привязок событий
   */
  get binds(): Pick<
    ConstrBind<MenuCountryProps>,
    'onUpdateValue' | 'onClick' | 'onWindow'
  > {
    return {
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
    if (
      options?.type === 'group'
      || isArray(options?.value)
    ) {
      return
    }

    this.model().onClick(event, options)
  }

  /**
   * Updates the model value and emits the updateValue event.
   *
   * Обновляет значение модели и генерирует событие updateValue.
   * @param value new country code value / новое значение кода страны
   */
  readonly onUpdate = (value?: NumberOrStringOrBoolean): void => {
    this.model().onUpdate(value)
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
