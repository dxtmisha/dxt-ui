import { computed } from 'vue'

import { FieldTypeInclude } from '../../classes/field/FieldTypeInclude.ts'
import type { FieldValueInclude } from '../../classes/field/FieldValueInclude.ts'
import type { FieldAllProps } from '../../types/fieldTypes.ts'
import type { MaskPropsInclude } from './basicTypes.ts'
import { getBind } from '@dxtmisha/functional/src/functions/render/getBind.ts'

/**
 * Mask management class.
 *
 * Класс управления маской.
 */
export class MaskInclude {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param value object for working with values/ объект для работы со значениями
   * @param type object for working with the input type/ объект для работы с типом ввода
   */

  constructor(
    protected readonly props: MaskPropsInclude,
    protected readonly value: FieldValueInclude,
    protected readonly type?: FieldTypeInclude
  ) {
  }

  /**
   * Checks if the mask is active.
   *
   * Проверяет, активна ли маска.
   */
  readonly is = computed<boolean>(() => {
    const type = this.type?.get()

    return this.props.maskNone !== true
      && Boolean(
        this.props.mask
        || (
          type
          && [
            'number',
            'number-format',
            'currency',
            'datetime',
            'date',
            'year-month',
            'time',
            'hour-minute'
          ].indexOf(type) !== -1
        )
      )
  })

  /**
   * Returns the basic properties for working with a mask.<br>
   * Возвращает базовые свойства для работы с маской.
   */
  readonly bindsBasic = computed<ConstrBind<MaskProps>>(() => {
    return {
      type: this.type?.get(),
      name: this.props.name,
      currency: this.props.currency,
      currencyHide: this.props.currencyHide,
      ...getBind(
        this.props.mask,
        this.props.maskAttrs,
        'mask'
      ),

      valueDefault: '',
      visible: this.props.maskVisible,

      right: this.props.align === 'right',
      center: this.props.align === 'center'
    }
  })

  /**
   * Returns all properties for working with the mask.<br>
   * Возвращает все свойства для работы с маской.
   */
  readonly binds = computed<ConstrBind<MaskProps> | undefined>(() => {
    if (this.is.value) {
      return {
        ...this.bindsBasic.value,
        value: (this.props.modelValue ?? this.props.value) as string
      }
    }

    return undefined
  })

  /**
   * Returns data for the mask.<br>
   * Возвращает данные для маски.
   */
  setup(): UseMaskSetup {
    return {
      isMask: this.is,
      maskBind: this.binds
    }
  }
}
