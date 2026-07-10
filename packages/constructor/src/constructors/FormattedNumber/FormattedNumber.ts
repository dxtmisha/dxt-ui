import { type Ref, type ToRefs } from 'vue'
import { isFilled, type ConstrEmit, type DesignComp, GeoIntl } from '@dxtmisha/functional'

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
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: FormattedNumberProps,
    protected readonly refs: ToRefs<FormattedNumberProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
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
