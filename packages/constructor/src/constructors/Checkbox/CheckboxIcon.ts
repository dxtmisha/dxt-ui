import { computed } from 'vue'
import { getBind } from '@dxtmisha/functional'

import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { IconValue } from '../Icon'
import type { CheckboxProps } from './props'

/**
 * Class for working with icons for checkbox.
 *
 * Класс для работы с иконками для checkbox.
 */
export class CheckboxIcon {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param value object for working with values /<br>объект для работы со значениями
   */
  constructor(
    protected readonly props: CheckboxProps,
    protected readonly value: FieldValueInclude<boolean>
  ) {
  }

  /**
   * Returns data for the icon.
   *
   * Возвращает данные для иконки.
   */
  readonly item = computed(
    () => getBind(this.getIcon(), 'value')
  )

  /**
   * Returns the name of the icon.
   *
   * Возвращает название иконки.
   */
  protected getIcon(): IconValue | undefined {
    if (
      this.value.boolean.value
      && !this.props.loading
    ) {
      if (this.props.indeterminate) {
        return this.props.iconIndeterminate
      }

      return this.props.iconCheckbox
    }

    return undefined
  }
}
