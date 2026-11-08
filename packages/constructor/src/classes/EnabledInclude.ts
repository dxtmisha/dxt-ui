import { AriaStaticInclude } from './AriaStaticInclude'

import type { AriaList } from '../types/ariaTypes'
import type { EnabledProps } from '../types/enabledTypes'
import type { ProgressInclude } from '../constructors/Progress'

/**
 * Utility class for controlling the interactive activity state of a component.
 * Manages enabled, disabled, and readonly statuses while taking progress states into account.
 *
 * Утилитарный класс для управления состоянием интерактивной активности компонента.
 * Управляет статусами активности, отключения и "только для чтения" с учетом состояний индикатора прогресса.
 */
export class EnabledInclude {
  /**
   * Constructor for initializing EnabledInclude.
   *
   * Конструктор для инициализации EnabledInclude.
   * @param props input properties / входные свойства
   * @param progress callback returning object for working with progress / функция обратного вызова, возвращающая объект для работы с прогрессами
   */
  constructor(
    protected readonly props: EnabledProps & {
      /** Dynamic interactive state / Динамическое интерактивное состояние */
      dynamic?: boolean
    },
    protected readonly progress?: () => ProgressInclude | undefined
  ) {
  }

  /**
   * List of ARIA properties for the enabled state.
   *
   * Список ARIA-свойств для состояния активности.
   * @returns aria properties list / список свойств aria
   */
  get aria(): AriaList {
    return AriaStaticInclude.disabled(!this.isEnabled)
  }

  /**
   * Checks if the element is disabled.
   *
   * Проверяет, отключён ли элемент.
   * @returns disabled state / состояние отключения
   */
  get isDisabled(): boolean {
    return Boolean(this.props.disabled)
  }

  /**
   * Checks if the element is disabled or returns undefined if enabled.
   *
   * Проверяет, отключён ли элемент, или возвращает undefined, если активен.
   * @returns disabled state or undefined / состояние отключения или undefined
   */
  get isDisabledOrUndefined(): boolean | undefined {
    return this.isDisabled || undefined
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
      && !this.getProgress()?.is
      && Boolean(
        !('dynamic' in this.props)
        || this.props.dynamic
      )
  }

  /**
   * Checks if the read-only status is enabled.
   *
   * Проверяет, включён ли статус "только для чтения".
   * @returns readonly state / состояние только для чтения
   */
  get isReadonly(): boolean {
    return Boolean(this.props.readonly)
  }

  /**
   * Returns the progress state manager if provided.
   *
   * Возвращает менеджер состояния прогресса, если он предоставлен.
   * @returns progress state manager or undefined / менеджер состояния прогресса или undefined
   */
  protected getProgress(): ProgressInclude | undefined {
    return this.progress?.()
  }
}
