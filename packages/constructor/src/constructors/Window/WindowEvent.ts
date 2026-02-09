import { watch } from 'vue'
import { EventItem, getMouseClientX, getMouseClientY, isEnter } from '@dxtmisha/functional'

import { TabIndexInclude } from '../../classes/TabIndexInclude'
import { WindowStatus } from './WindowStatus'
import { WindowClient } from './WindowClient'
import { WindowFlash } from './WindowFlash'
import { WindowOpen } from './WindowOpen'
import { WindowVerification } from './WindowVerification'

import type { WindowProps } from './props'

/**
 * A class for working with events.
 *
 * Класс для работы с событиями.
 */
export class WindowEvent {
  protected readonly event: EventItem<HTMLBodyElement, MouseEvent>

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param tabIndex class object for working with tab indices/ объект класса для работы с табуляцией
   * @param status object for working with statuses/ объект для работы со статусами
   * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
   * @param flash class object for working with fast window opening/ объект класса для работы с быстрым открытием окна
   * @param open the class object for working with the status of closing or opening the window/ объект класса для работы со статусом закрытия или открытия окна
   * @param verification an object for working with the check for changing the status of opening or closing/ объект для работы с проверкой изменения статуса открытия или закрытия
   */
  constructor(
    protected readonly props: WindowProps,
    protected readonly tabIndex: TabIndexInclude,
    protected readonly status: WindowStatus,
    protected readonly client: WindowClient,
    protected readonly flash: WindowFlash,
    protected readonly open: WindowOpen,
    protected readonly verification: WindowVerification
  ) {
    this.event = new EventItem<HTMLBodyElement, MouseEvent>(
      'body',
      ['click', 'contextmenu'],
      this.onGlobal
    )

    watch(
      [
        this.open.item,
        this.status.item
      ],
      () => this.toggle()
    )
  }

  /**
   * Events of pressing a control element.
   *
   * События нажатия на элемент управления.
   * @param event event object/ объект события
   */
  readonly onClick = async (event: MouseEvent & TouchEvent | KeyboardEvent): Promise<void> => {
    if (!this.props.contextmenu) {
      await this.on(event as MouseEvent & TouchEvent)
    }
  }

  /**
   * Events of pressing a key.
   *
   * События нажатия на клавишу.
   * @param event event object/ объект события
   */
  readonly onKeydown = async (event: MouseEvent & TouchEvent | KeyboardEvent): Promise<void> => {
    if (
      isEnter(event as KeyboardEvent)
      || this.isArrowDown(event as KeyboardEvent)
    ) {
      event.preventDefault()
      await this.onClick(event as unknown as MouseEvent & TouchEvent)
    }
  }

  /**
   * Events of pressing the right mouse button on a control element.
   *
   * События нажатия на правую кнопку мыши на элемент управления.
   * @param event event object/ объект события
   */
  readonly onContextmenu = async (event: MouseEvent & TouchEvent | KeyboardEvent): Promise<void> => {
    if (this.props.contextmenu) {
      event.preventDefault()
      await this.on(event as MouseEvent & TouchEvent)
    }
  }

  /**
   * Event of animation end when closing the window.
   *
   * Событие окончания анимации при закрытии окна.
   */
  readonly onTransition = (): void => this.open.closeForEvent()

  /**
   * Starts listening to global events.
   *
   * Стартует прослушивание глобальных событий.
   */
  start(): this {
    if (!this.props.embedded) {
      this.event.start()
    }

    return this
  }

  /**
   * Stop the global event.
   *
   * Остановить глобальное событие.
   */
  stop(): this {
    this.event.stop()
    return this
  }

  /**
   * Changes the event listening status depending on the window's open status.
   *
   * Изменяет статус прослушивания события в зависимости от статуса открытия окна.
   */
  toggle(): this {
    if (
      this.open.item.value
      && this.status.isOpen()
    ) {
      this.start()
    } else {
      this.stop()
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
   * Event activation.
   *
   * Активация события.
   * @param event event object/ объект события
   */
  protected async on(event: MouseEvent & TouchEvent): Promise<void> {
    this.tabIndex.updateOldElement()
    this.client.set(
      getMouseClientX(event),
      getMouseClientY(event)
    )

    await this.verification.update(event.target as HTMLElement)
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
      || (event.type === 'click' && (!this.props.contextmenu || this.open.item.value))
      || (event.type === 'contextmenu' && this.props.contextmenu)
    ) {
      if (this.open.item.value) {
        this.flash.setControl(event?.target as HTMLElement)
        await this.verification.update(event?.target as HTMLElement)
      } else {
        this.event.stop()
      }
    }
  }
}
