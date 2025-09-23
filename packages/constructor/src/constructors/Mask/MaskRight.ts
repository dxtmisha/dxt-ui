import { MaskType } from './MaskType'

import { type MaskProps } from './props'

/**
 * Class for handling alignment of masked value (direction & numeric rules).
 *
 * Класс для управления выравниванием маски (направление и числовые правила).
 */
export class MaskRight {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type mask type helper/ объект помощник типа маски
   */
  constructor(
    protected readonly props: MaskProps,
    protected readonly type: MaskType
  ) {
  }

  /**
   * Returns whether the content should visually end-align (numeric, rtl, currency).
   *
   * Возвращает, нужно ли визуально выравнивать по концу (числа, rtl, валюта).
   */
  isEnd(): boolean {
    return this.props.align !== 'left' && (
      this.props.dir === 'rtl'
      || (this.type.isCurrency() && !this.props.currencyHide)
      || this.type.isNumberFormat()
    )
  }

  /**
   * Checks if alignment is right (explicit right or end alignment).
   *
   * Проверяет, что выравнивание справа (явно right или конечное).
   */
  isRight(): boolean {
    return this.props.align === 'right' || this.isEnd()
  }
}
