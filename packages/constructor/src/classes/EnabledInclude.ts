import { computed } from 'vue'
import { ProgressInclude } from '../constructors/Progress/ProgressInclude.ts'

import type { EnabledProps } from '../types/enabledTypes.ts'

/**
 * Use to control the activity of the item.
 *
 * Использование для управления активности элемента.
 */
export class EnabledInclude {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param progress object for working with progress/ объект для работы с прогрессами
   */
  constructor(
    protected readonly props: EnabledProps,
    protected readonly progress?: ProgressInclude
  ) {
  }

  /**
   * Checks if the element is active
   *
   * Проверяет, активен ли элемент
   */
  readonly isEnabled = computed<boolean>(() =>
    !this.props.disabled
    && !this.props.readonly
    && (
      !this.progress
      || !this.progress.isProgress.value
    )
  )

  /**
   * checks if the read-only status is enabled/ проверяет, включён ли статус "только для чтения"
   */
  readonly isReadonly = computed<boolean>(() => Boolean(this.props.readonly))

  /**
   * checks if the element is disabled/ проверяет, отключён ли элемент
   */
  readonly isDisabled = computed<boolean>(() => Boolean(this.props.disabled))

  /**
   * checks if the element is disabled or the value is empty/
   * проверяет, отключён ли элемент или пустое ли значение
   */
  readonly isDisabledOrUndefined = computed<boolean | undefined>(() => this.isDisabled.value || undefined)
}
