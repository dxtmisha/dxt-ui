import { type ConstrBind } from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { InputPhoneData } from './InputPhoneData'
import type { MaskPropsInclude } from '../Mask'

import type { InputPhonePropsBasic } from './props'

/** Special characters and patterns configuration for input phone mask / Конфигурация специальных символов и шаблонов для маски ввода телефона */
const inputPhoneMaskSpecial = {
  '$': {
    match: /[123567890]/,
    pattern: '[123567890]+'
  },
  '~': {
    match: /[123456790]/,
    pattern: '[123456790]+'
  },
  '=': {
    match: /[123456789]/,
    pattern: '[123456789]+'
  },
  '*': {
    match: /[0-9]/
  }
}

/**
 * Class for working with the phone mask.
 *
 * Класс для работы с маской телефона.
 */
export class InputPhoneMask {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param data data manager / менеджер данных
   * @param value field value / значение поля
   */
  constructor(
    protected readonly props: InputPhonePropsBasic,
    protected readonly data: InputPhoneData,
    protected readonly value?: FieldValueInclude
  ) { }

  /**
   * Gets the mask pattern for the current country.
   *
   * Возвращает шаблон маски для текущей страны.
   * @returns mask pattern or array of patterns / шаблон маски или массив шаблонов
   */
  get mask(): string | string[] {
    const masks = this.data.item.value?.[this.props.countryBlock ? 'mask' : 'maskFull']

    if (
      masks
      && masks.length > 0
    ) {
      return masks
    }

    return '+************'
  }

  /**
   * Gets properties for the Mask component.
   *
   * Возвращает свойства для компонента Mask.
   * @returns mask component properties / свойства компонента маски
   */
  get maskProps(): ConstrBind<MaskPropsInclude> {
    const mask = this.mask

    return {
      modelValue: this.props.modelValue,
      value: this.value?.item.value ?? this.data.valueDefault.value,

      mask: {
        mask,
        visible: mask.length < 2,
        groupSave: false,
        special: inputPhoneMaskSpecial,
        check: '.{7,}'
      },

      maskAttrs: this.props.maskAttrs
    }
  }
}
