import { AriaStaticInclude } from './AriaStaticInclude'
import { ProgressInclude } from '../constructors/Progress'

import type { AriaList } from '../types/ariaTypes'
import type { EnabledProps } from '../types/enabledTypes'

/**
 * Use to control the activity of the item.
 *
 * Использование для управления активности элемента.
 */
export class EnabledInclude {
  /**
   * Constructor
   * @param props input property / входное свойство
   * @param progress object for working with progress / объект для работы с прогрессами
   */
  constructor(
    protected readonly props: EnabledProps,
    protected readonly progress?: ProgressInclude
  ) {
  }

  /**
   * Checks if the element is active.
   *
   * Проверяет, активен ли элемент.
   * @returns active state / состояние активности
   */
  get isEnabled(): boolean {
    return !this.props.disabled
      && !this.props.readonly
      && (
        !this.progress
        || !this.progress.is
      )
      && Boolean(
        !('dynamic' in this.props)
        || this.props.dynamic
      )
  }

  /**
   * checks if the read-only status is enabled / проверяет, включён ли статус "только для чтения"
   * @returns readonly state / состояние только для чтения
   */
  get isReadonly(): boolean {
    return Boolean(this.props.readonly)
  }

  /**
   * checks if the element is disabled / проверяет, отключён ли элемент
   * @returns disabled state / состояние отключения
   */
  get isDisabled(): boolean {
    return Boolean(this.props.disabled)
  }

  /**
   * checks if the element is disabled or the value is empty /
   * проверяет, отключён ли элемент или пустое ли значение
   * @returns disabled state or undefined / состояние отключения или undefined
   */
  get isDisabledOrUndefined(): boolean | undefined {
    return this.isDisabled || undefined
  }

  /**
   * list of aria properties for the enabled state /
   * список aria свойств для состояния активности
   * @returns aria properties list / список свойств aria
   */
  get aria(): AriaList {
    return AriaStaticInclude.disabled(!this.isEnabled)
  }
}
