// ai-none

import {
  DesignLifecycleAbstract,
  EventItem,
  getMouseClientX,
  getMouseClientY,
  isEnter
} from '@dxtmisha/functional'
import { watch, type WatchStopHandle } from 'vue'

import { TabIndexInclude } from '../../classes/TabIndexInclude'
import { WindowClient } from './WindowClient'
import { WindowFlash } from './WindowFlash'
import { WindowOpen } from './WindowOpen'
import { WindowStatus } from './WindowStatus'
import { WindowVerification } from './WindowVerification'

import type { WindowEventClickType } from './basicTypes'
import type { WindowProps } from './props'

/**
 * A class for working with events.
 *
 * Класс для работы с событиями.
 */
export class WindowEvent extends DesignLifecycleAbstract {
  protected event?: EventItem<HTMLBodyElement, MouseEvent>
  protected watchStop?: WatchStopHandle

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param client function returning client coordinates manager / функция, возвращающая менеджер клиентских координат
   * @param flash function returning flash animation manager / функция, возвращающая менеджер быстрого открытия
   * @param open function returning open state manager / функция, возвращающая менеджер состояния открытия
   * @param status function returning status manager / функция, возвращающая менеджер статусов
   * @param tabIndex function returning tab index manager / функция, возвращающая менеджер табуляции
   * @param verification function returning verification manager / функция, возвращающая менеджер проверки
   */
  constructor(
    protected readonly props: WindowProps,
    protected readonly client: () => WindowClient,
    protected readonly flash: () => WindowFlash,
    protected readonly open: () => WindowOpen,
    protected readonly status: () => WindowStatus,
    protected readonly tabIndex: () => TabIndexInclude,
    protected readonly verification: () => WindowVerification
  ) {
    super()
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  override readonly onMounted = (): void => {
    this.event = new EventItem<HTMLBodyElement, MouseEvent>(
      'body',
      ['click', 'contextmenu'],
      this.onGlobal
    )
    this.toggle()

    this.watchStop?.()
    this.watchStop = watch(
      [
        this.open().item,
        this.status().item
      ],
      () => this.toggle()
    )
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
   * Events of pressing a control element.
   *
   * События нажатия на элемент управления.
   * @param event event object / объект события
   */
  readonly onClick = async (event: WindowEventClickType): Promise<void> => {
    if (!this.props.contextmenu) {
      await this.on(event)
    }
  }

  /**
   * Events of pressing a key.
   *
   * События нажатия на клавишу.
   * @param event event object / объект события
   * @returns promise that resolves after handling keydown / промис, завершающийся после обработки нажатия клавиши
   */
  readonly onKeydown = async (event: WindowEventClickType): Promise<void> => {
    if ((event as KeyboardEvent).isComposing) {
      return
    }

    if (
      (
        isEnter(event as KeyboardEvent, false)
        || this.isArrowDown(event as KeyboardEvent)
      )
      && !this.open().item.value
    ) {
      event.preventDefault()
      await this.onClick(event)
    } else if (
      this.isTab(event as KeyboardEvent)
      && this.open().item.value
    ) {
      await this.onGlobal(event)
    }
  }

  /**
   * Events of pressing the right mouse button on a control element.
   *
   * События нажатия на правую кнопку мыши на элемент управления.
   * @param event event object / объект события
   */
  readonly onContextmenu = async (event: WindowEventClickType): Promise<void> => {
    if (this.props.contextmenu) {
      event.preventDefault()
      await this.on(event)
    }
  }

  /**
   * Event of animation end when closing the window.
   *
   * Событие окончания анимации при закрытии окна.
   */
  readonly onTransition = (): void => this.open().closeForEvent()

  /**
   * Starts listening to global events.
   *
   * Стартует прослушивание глобальных событий.
   * @returns this instance / текущий экземпляр
   */
  start(): this {
    if (!this.props.embedded && this.event) {
      this.event.start()
    }

    return this
  }

  /**
   * Stop the global event.
   *
   * Остановить глобальное событие.
   * @returns this instance / текущий экземпляр
   */
  stop(): this {
    if (this.event) {
      this.event.stop()
    }

    return this
  }

  /**
   * Changes the event listening status depending on the window's open status.
   *
   * Изменяет статус прослушивания события в зависимости от статуса открытия окна.
   * @returns this instance / текущий экземпляр
   */
  toggle(): this {
    if (this.event) {
      if (
        this.open().item.value
        && this.status().isOpen()
      ) {
        this.start()
      } else {
        this.stop()
      }
    }

    return this
  }

  /**
   * Checks if the down arrow key is pressed.
   *
   * Проверяет, нажата ли стрелка вниз.
   * @param event event object/ объект события
   */
  protected isArrowDown(event: KeyboardEvent): boolean {
    return Boolean(
      this.props.openOnArrowDown
      && (
        event.code === 'ArrowDown'
        || event.key === 'ArrowDown'
        || event.key === 'Down'
        || event.keyCode === 40
      )
    )
  }

  /**
   * Checks if the tab key is pressed.
   *
   * Проверяет, нажата ли клавиша Tab.
   * @param event event object/ объект события
   */
  protected isTab(event: KeyboardEvent): boolean {
    return event.key === 'Tab'
      || event.code === 'Tab'
      || event.keyCode === 9
  }

  /**
   * Event activation.
   *
   * Активация события.
   * @param event event object/ объект события
   */
  protected async on(event: WindowEventClickType): Promise<void> {
    this.tabIndex().updateOldElement()
    this.client().set(
      getMouseClientX(event as MouseEvent | TouchEvent),
      getMouseClientY(event as MouseEvent | TouchEvent)
    )

    if ('target' in event) {
      await this.verification().update(event.target as HTMLElement)
    }
  }

  /**
   * Callback of the event when pressing any area for checking and changing the opening state.
   *
   * Callback события при нажатии на любую область для проверки и изменения состояния открытия.
   * @param event event instance/ экземпляр события
   */
  protected readonly onGlobal = async (event?: Event): Promise<void> => {
    if (
      !event
      || this.isTab(event as KeyboardEvent)
      || (event.type === 'click' && (!this.props.contextmenu || this.open().item.value))
      || (event.type === 'contextmenu' && this.props.contextmenu)
    ) {
      if (this.open().item.value) {
        this.flash().setControl(event?.target as HTMLElement)
        await this.verification().update(event?.target as HTMLElement)
      } else if (this.event) {
        this.event.stop()
      }
    }
  }
}
