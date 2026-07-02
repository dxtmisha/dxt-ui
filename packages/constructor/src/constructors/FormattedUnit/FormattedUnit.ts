import { type Ref, type ToRefs } from 'vue'
import { isFilled, type ConstrEmit, type DesignComp, GeoUnit } from '@dxtmisha/functional'

import type { FormattedUnitComponents, FormattedUnitEmits, FormattedUnitSlots } from './types'
import type { FormattedUnitProps } from './props'

/**
 * Class for managing unit formatting and automatic conversions.
 *
 * Класс для управления логикой форматирования единиц измерения и автоматической конвертации.
 */
export class FormattedUnit {
  /**
   * Constructor.
   *
   * Конструктор.
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
    protected readonly props: FormattedUnitProps,
    protected readonly refs: ToRefs<FormattedUnitProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<FormattedUnitComponents, FormattedUnitProps>,
    protected readonly slots?: FormattedUnitSlots,
    protected readonly emits?: ConstrEmit<FormattedUnitEmits>
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
    const unitKey = this.props.unit

    if (
      isFilled(value)
      && this.props.format
      && unitKey
    ) {
      return new GeoUnit(this.props.language).format(value, unitKey)
    }

    return value?.toString() || ''
  }
}
