import { type Ref } from 'vue'
import { isFilled, type ConstrEmit, type DesignComp, type DesignName, GeoIntl } from '@dxtmisha/functional'

import type { FormattedNumberComponents, FormattedNumberEmits, FormattedNumberSlots } from './types'
import type { FormattedNumberProps } from './props'

/**
 * Class for managing number and currency formatting logic.
 *
 * Класс для управления логикой форматирования чисел и валют.
 */
export class FormattedNumber {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: FormattedNumberProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComp<FormattedNumberComponents, FormattedNumberProps>,
    protected readonly slots?: FormattedNumberSlots,
    protected readonly emits?: ConstrEmit<FormattedNumberEmits>
  ) {
  }

  /**
   * Returns the formatted string value.
   *
   * Возвращает отформатированное строковое значение.
   * @returns formatted value / отформатированное значение
   */
  get item(): string {
    const value = this.props.value

    if (
      isFilled(value)
      && this.props.formatting
    ) {
      const intl = new GeoIntl(this.props.language)

      if (this.props.currency) {
        return intl.currency(value, this.props.currency)
      }

      if (this.props.unit) {
        return intl.unit(value, this.props.unit)
      }

      return intl.number(value)
    }

    return value?.toString() || ''
  }
}
