// ai-none

import { executePromise } from '@dxtmisha/functional'

import type { WindowProps } from './props'

/**
 * A class for working with hooks when opening and closing a window.
 *
 * Класс для работы с хуками при открытии и закрытии окна.
 */
export class WindowHook {
  /**
   * Constructor
   * @param props input data / входные данные
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
   * @param open current state of the window / текущее состояние окна
   * @returns true if action is allowed / true, если действие разрешено
   */
  async before(open: boolean): Promise<boolean> {
    if (open) {
      return this.beforeOpening()
    }

    return this.beforeClosing()
  }

  /**
   * Hook before opening.
   *
   * Хук перед открытием.
   * @returns true if opening is allowed / true, если открытие разрешено
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
   * @returns true if closing is allowed / true, если закрытие разрешено
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
   * @param open current state of the window / текущее состояние окна
   * @returns hook result / результат выполнения хука
   */
  async after(open: boolean): Promise<boolean> {
    if (open) {
      return this.opening()
    }

    return this.closing()
  }

  /**
   * Hook after opening.
   *
   * Хук после открытия.
   * @returns opening hook result / результат хука открытия
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
   * @returns closing hook result / результат хука закрытия
   */
  async closing(): Promise<boolean> {
    if (this.props.closing) {
      return await executePromise(this.props.closing)
    }

    return false
  }
}
