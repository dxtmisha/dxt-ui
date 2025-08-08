import { executePromise } from '@dxt-ui/functional'

import type { WindowProps } from './props'

/**
 * A class for working with hooks when opening and closing a window.
 *
 * Класс для работы с хуками при открытии и закрытии окна.
 */
export class WindowHook {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected readonly props: WindowProps
  ) {
  }

  /**
   * Hook for preparing elements before opening/closing.
   *
   * Хук для подготовки элементов перед открытием/закрытием.
   */
  async preparation(): Promise<void> {
    if (this.props.preparation) {
      await executePromise(this.props.preparation)
    }
  }

  /**
   * Hook before opening/closing.
   *
   * Хук перед открытием/закрытием.
   * @param open current state of the window/ текущее состояние окна
   */
  async before(open: boolean) {
    if (open) {
      return await this.beforeOpening()
    }

    return await this.beforeClosing()
  }

  /**
   * Hook before opening.
   *
   * Хук перед открытием.
   */
  async beforeOpening(): Promise<boolean> {
    if (this.props.beforeOpening) {
      return await executePromise(this.props.beforeOpening)
    }

    return true
  }

  /**
   * Hook before closing.
   *
   * Хук перед закрытием.
   */
  async beforeClosing(): Promise<boolean> {
    if (this.props.beforeClosing) {
      return await executePromise(this.props.beforeClosing)
    }

    return true
  }

  /**
   * Hook after opening/closing.
   *
   * Хук после открытия/закрытия.
   * @param open current state of the window/ текущее состояние окна
   */
  async after(open: boolean): Promise<boolean> {
    if (open) {
      return await this.opening()
    }

    return await this.closing()
  }

  /**
   * Hook after opening.
   *
   * Хук после открытия.
   */
  async opening(): Promise<boolean> {
    if (this.props.opening) {
      return await executePromise(this.props.opening)
    }

    return false
  }

  /**
   * Hook after closing.
   *
   * Хук после закрытия.
   */
  async closing(): Promise<boolean> {
    if (this.props.closing) {
      return await executePromise(this.props.closing)
    }

    return false
  }
}
