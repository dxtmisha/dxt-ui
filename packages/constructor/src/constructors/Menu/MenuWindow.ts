import { ListData } from '@dxt-ui/functional'

import { type WindowEmitOptions } from '../Window'

import { MenuRequest } from './MenuRequest'
import { MenuDataLite } from './MenuDataLite'
import { MenuOpen } from './MenuOpen'
import { MenuFocus } from './MenuFocus'

/**
 * Window manager for Menu component
 *
 * Класс управления окном для компонента Menu
 */
export class MenuWindow {
  /**
   * Constructor
   * @param request menu request handler/ обработчик запросов меню
   * @param data list data manager/ менеджер данных списка
   * @param dataLite lite data manager/ менеджер облегченных данных
   * @param open open state manager/ менеджер состояния открытия
   * @param focus focus manager/ менеджер фокуса
   */
  constructor(
    protected readonly request: MenuRequest,
    protected readonly data: ListData,
    protected readonly dataLite: MenuDataLite,
    protected readonly open: MenuOpen,
    protected readonly focus: MenuFocus
  ) {
  }

  /**
   * Returns extra methods for window management
   *
   * Возвращает дополнительные методы для управления окном
   * @returns object with window management methods/ объект с методами управления окном
   */
  getExtra() {
    return {
      preparation: this.preparation,
      opening: this.opening,
      closing: this.closing,
      onWindow: this.onWindow
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
    this.dataLite.activate()
  }

  /**
   * Actions performed after opening the window
   *
   * Действия, выполняемые после открытия окна
   * @returns Promise that resolves to true when opening actions are complete/
   * Promise, который разрешается в true после завершения действий открытия
   */
  protected readonly opening = async (): Promise<boolean> => {
    this.dataLite.deactivate()

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
    this.dataLite.deactivate()
    this.focus.reset()

    return true
  }

  /**
   * Event listener for the window state changes
   *
   * Обработчик событий изменения состояния окна
   * @param options window emit options containing open status/
   * параметры события окна, содержащие статус открытия
   */
  protected readonly onWindow = ({ open }: WindowEmitOptions) => {
    this.open.set(open)
  }
}
