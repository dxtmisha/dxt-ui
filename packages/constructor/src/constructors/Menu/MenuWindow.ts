import { ref } from 'vue'

import { MenuRequest } from './MenuRequest'

import type { WindowProps } from '../Window'
import type { MenuProps } from './props'

/**
 * Window manager for Menu component
 *
 * Класс управления окном для компонента Menu
 */
export class MenuWindow {
  readonly lite = ref<boolean>()
  readonly control = ref<boolean>()

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param request menu request handler/ обработчик запросов меню
   */
  constructor(
    protected readonly props: MenuProps,
    protected readonly request: MenuRequest
  ) {
  }

  /**
   * Returns extra methods for window management
   *
   * Возвращает дополнительные методы для управления окном
   * @returns object with window management methods/ объект с методами управления окном
   */
  getExtra(): WindowProps {
    return {
      adaptive: 'menu',
      preparation: this.preparation,
      opening: this.opening,
      closing: this.closing,
      role: 'menu'
    }
  }

  /**
   * Preparing data before opening the menu
   *
   * Подготовка данных перед открытием меню
   * @returns Promise that resolves to true when preparation is complete/
   * Promise, который разрешается в true после завершения подготовки
   */
  protected readonly preparation = async (): Promise<void> => {
    await this.request.preparation()

    if (
      this.props.list
      && this.props.liteThreshold
      && Number(this.props.liteThreshold) <= Object.keys(this.props.list).length
    ) {
      this.lite.value = true
    }
  }

  /**
   * Actions performed after opening the window
   *
   * Действия, выполняемые после открытия окна
   * @returns Promise that resolves to true when opening actions are complete/
   * Promise, который разрешается в true после завершения действий открытия
   */
  protected readonly opening = async (): Promise<boolean> => {
    this.lite.value = false
    this.control.value = true

    return true
  }

  /**
   * Actions performed when closing the window
   *
   * Действия, выполняемые при закрытии окна
   * @returns Promise that resolves to true when closing actions are complete/
   * Promise, который разрешается в true после завершения действий закрытия
   */
  protected readonly closing = async (): Promise<boolean> => {
    this.lite.value = false
    this.control.value = false

    return true
  }
}
