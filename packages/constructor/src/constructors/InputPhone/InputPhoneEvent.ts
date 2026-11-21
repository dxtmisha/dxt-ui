import type { ConstrEmit } from '@dxtmisha/functional'

import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'

import type { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import type { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import type { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { InputPhoneData } from './InputPhoneData'

import type { FieldAllProps, FieldBasicEmits, FieldValidationItem } from '../../types/fieldTypes'

/**
 * Event manager for the InputPhone component.
 * Extends FieldEventInclude to enrich emitted event payloads with resolved phone metadata (`detail`).
 *
 * Менеджер событий для компонента InputPhone.
 * Расширяет FieldEventInclude, добавляя контекст метаданных телефона (`detail`) в данные событий.
 */
export class InputPhoneEvent extends FieldEventInclude {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param change function returning object for working with data change label / функция, возвращающая объект для работы с меткой об изменении данных
   * @param value function returning object for working with values / функция, возвращающая объект для работы со значениями
   * @param data function returning phone data manager / функция, возвращающая менеджер данных телефона
   * @param validation function returning object for working with validity / функция, возвращающая объект для работы с валидностью
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param form function returning object for working with the form element context / функция, возвращающая объект для работы с контекстом элемента формы
   */
  constructor(
    props: FieldAllProps,
    change: () => FieldChangeInclude,
    value: () => FieldValueInclude,
    protected readonly data: () => InputPhoneData,
    validation?: () => FieldValidationInclude,
    emits?: ConstrEmit<FieldBasicEmits>,
    form?: () => FieldFormInclude
  ) {
    super(
      props,
      change,
      value,
      validation,
      emits,
      form
    )
  }

  /**
   * Returns input data enriched with resolved phone metadata in `detail`.
   *
   * Возвращает данные ввода, обогащённые метаданными телефона в поле `detail`.
   * @returns validation item data / данные элемента валидации
   */
  protected override getData(): FieldValidationItem {
    const data = super.getData()

    return {
      ...data,
      detail: {
        ...this.data().getDetail(),
        ...this.props.detail
      }
    }
  }
}
