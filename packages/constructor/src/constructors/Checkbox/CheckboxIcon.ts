// ai-none

import { type ConstrBind, getBind } from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { IconValue } from '../Icon'
import type { ImagePropsBasic } from '../Image'
import type { CheckboxProps } from './props'

/**
 * Class for working with icons for checkbox.
 *
 * Класс для работы с иконками для checkbox.
 */
export class CheckboxIcon {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param value function returning object for working with values / функция, возвращающая объект для работы со значениями
   */
  constructor(
    protected readonly props: Readonly<CheckboxProps>,
    protected readonly value: () => FieldValueInclude<boolean>
  ) {
  }

  /**
   * Returns data for the icon.
   *
   * Возвращает данные для иконки.
   * @returns icon binding data / данные привязки иконки
   */
  get item(): ConstrBind<ImagePropsBasic> {
    return getBind(this.getIcon(), 'value')
  }

  /**
   * Returns the name of the icon.
   *
   * Возвращает название иконки.
   * @returns icon value or undefined / значение иконки или undefined
   */
  protected getIcon(): IconValue | undefined {
    if (
      this.value().boolean
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
