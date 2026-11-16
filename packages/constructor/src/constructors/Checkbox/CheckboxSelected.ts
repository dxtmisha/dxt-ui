// ai-none

import { ref, watch } from 'vue'
import { anyToString, DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { ModelInclude } from '../../classes/ModelInclude'

import type { CheckboxProps } from './props'

/**
 * Class for managing the selected state of a checkbox.
 *
 * Класс для управления состоянием выбора флажка.
 */
export class CheckboxSelected extends DesignLifecycleAbstract {
  /**
   * Checks whether selected state synchronization is enabled in properties.
   *
   * Проверяет, включена ли синхронизация состояния выбора в свойствах.
   * @param props input data / входные данные
   * @returns true if selected or valueVariant is defined / true, если задано selected или valueVariant
   */
  static is(props?: Readonly<CheckboxProps>): boolean {
    return props?.selected !== undefined || props?.valueVariant !== undefined
  }

  /**
   * Internal reactive state for the selected value.
   *
   * Внутреннее реактивное состояние для выбранного значения.
   */
  protected readonly selected = ref<string>()

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param value function returning field value inclusion object / функция, возвращающая объект включения значения поля
   * @param model function returning model inclusion object / функция, возвращающая объект включения модели
   */
  constructor(
    protected readonly props: Readonly<CheckboxProps>,
    protected readonly value: () => FieldValueInclude<boolean>,
    protected readonly model?: () => ModelInclude<string | undefined>
  ) {
    super()

    this.update()
  }

  /**
   * Registers reactive watchers when the component mounts.
   *
   * Регистрирует реактивные наблюдатели при монтировании компонента.
   */
  override readonly onMounted = (): void => {
    watch(
      () => this.props.selected,
      this.update
    )
    watch(this.value().item, this.updateByValue)
    watch(this.selected, (newValue) => {
      this.model?.().emit(newValue)
    })
  }

  /**
   * Updates the selected state based on the field value.
   *
   * Обновляет состояние выбора на основе значения поля.
   */
  protected readonly updateByValue = (): void => {
    const valueVariant = anyToString(this.props.valueVariant)

    if (
      this.value().item.value
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
  protected readonly update = (): void => {
    if (this.props.selected === undefined) {
      return
    }

    this.value().set(this.props.selected === this.props.valueVariant)
    this.selected.value = this.props.selected
  }
}
