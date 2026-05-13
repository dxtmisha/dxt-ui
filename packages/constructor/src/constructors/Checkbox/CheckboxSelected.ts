import { ref, type ToRefs, watch } from 'vue'
import { anyToString, type ConstrEmit } from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'
import { type FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { CheckboxEmits } from './types'
import type { CheckboxProps } from './props'

/**
 * Class for managing the selected state of a checkbox.
 *
 * Класс для управления состоянием выбора флажка.
 */
export class CheckboxSelected {
  /**
   * Internal reactive state for the selected value.
   *
   * Внутреннее реактивное состояние для выбранного значения.
   */
  protected readonly selected = ref<string>()

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param value field value inclusion object / объект включения значения поля
   */
  constructor(
    protected readonly props: CheckboxProps,
    protected readonly refs: ToRefs<CheckboxProps>,
    protected readonly value: FieldValueInclude,
    protected readonly emits?: ConstrEmit<CheckboxEmits>
  ) {
    watch(
      [refs.selected],
      this.update,
      { immediate: true }
    )

    new ModelInclude<string | undefined>(
      'selected',
      this.emits,
      this.selected
    )

    watch(this.value.item, this.updateByValue)
  }

  /**
   * Updates the selected state based on the field value.
   *
   * Обновляет состояние выбора на основе значения поля.
   */
  protected readonly updateByValue = () => {
    const valueVariant = anyToString(this.props.valueVariant)

    if (
      this.value.item.value
      && this.selected.value !== valueVariant
    ) {
      this.selected.value = valueVariant
    }
  }

  /**
   * Updates the value state and the internal selected state based on the selected prop.
   *
   * Обновляет состояние значения и внутреннее состояние выбора на основе свойства selected.
   */
  protected readonly update = () => {
    if (this.props.selected === undefined) {
      return
    }

    this.value.set(this.props.selected === this.props.valueVariant)
    this.selected.value = this.props.selected
  }
}
