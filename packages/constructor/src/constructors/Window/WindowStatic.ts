// ai-none

import { ref, watch, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract, EventItem, isDomRuntime, setRef } from '@dxtmisha/functional'

import { WindowElement } from './WindowElement'

import { __WINDOW_TYPE_BODY_NAME } from './basicTypes'
import type { WindowProps } from './props'

/**
 * Class for working with a static window.
 *
 * Класс для работы со статичным окном.
 */
export class WindowStatic extends DesignLifecycleAbstract {
  protected event?: EventItem<Window, Event>
  protected watchStop?: WatchStopHandle

  readonly item = ref<boolean>(false)

  /**
   * Checks whether static mode is enabled.
   *
   * Проверяет, включён ли статический режим.
   * @param props component properties / свойства компонента
   * @returns true if staticMode is true / true, если staticMode равен true
   */
  static is(props?: WindowProps): boolean {
    return Boolean(props?.staticMode)
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param element function returning element manager / функция, возвращающая менеджер элементов
   */
  constructor(
    protected readonly props: WindowProps,
    protected readonly element: () => WindowElement
  ) {
    super()
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  override readonly onMounted = (): void => {
    if (this.is() && isDomRuntime()) {
      requestAnimationFrame(this.listener)
    }

    this.watchStop?.()
    this.watchStop = watch(() => this.props.staticMode, this.make)
  }

  /**
   * Cleanup lifecycle listeners on unmount.
   *
   * Очистка слушателей жизненного цикла при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.watchStop?.()
    this.watchStop = undefined
    this.stop()
  }

  /**
   * Checks if the static mode is enabled.
   *
   * Проверяет, включен ли режим статичности.
   * @returns true if static mode is active / true, если статический режим активен
   */
  is(): boolean {
    return Boolean(this.props.staticMode)
  }

  /**
   * Starts the status tracking event.
   *
   * Стартует событие слежения за статусами.
   */
  start(): void {
    if (!isDomRuntime()) {
      return
    }

    if (!this.event) {
      this.event = new EventItem(window, ['resize'], this.listener)
    }

    this.event.start()
  }

  /**
   * Restores the data to its previous state.
   *
   * Восстанавливает данные в прежнее состояние.
   */
  stop(): void {
    if (this.event?.isActive()) {
      this.event.stop()
      this.event = undefined
    }
  }

  /**
   * Checks if the static window is active.
   *
   * Проверяет, активно ли статичное окно.
   * @returns true if static window is active / true, если статичное окно активно
   */
  protected isStatic(): boolean {
    if (!isDomRuntime()) {
      return false
    }

    const element = this.element?.()?.getMain?.()

    return Boolean(
      element
      && getComputedStyle(element)
        .getPropertyValue(__WINDOW_TYPE_BODY_NAME)
        .includes('--STATIC--')
    )
  }

  /**
   * The function called when an event is triggered.
   *
   * Вызываемая функция при срабатывании события.
   */
  protected readonly listener = (): void => {
    setRef(this.item, this.isStatic())
  }

  /**
   * Performs status check and activates events when turned on.
   *
   * Выполняет проверку статуса и активизирует события при включении.
   */
  protected readonly make = (): void => {
    if (this.is()) {
      this.start()
    } else {
      this.stop()
    }
  }
}
