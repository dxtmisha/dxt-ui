import { ref } from 'vue'
import { frame } from '@dxtmisha/functional'

import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'
import { TabIndexInclude } from '../../classes/TabIndexInclude'

import { WindowStatus } from './WindowStatus'
import { WindowClient } from './WindowClient'
import { WindowHook } from './WindowHook'

import { WindowElement } from './WindowElement'

import { WindowFlash } from './WindowFlash'
import { WindowCoordinates } from './WindowCoordinates'
import { WindowPosition } from './WindowPosition'
import { WindowOrigin } from './WindowOrigin'
import { WindowEmit } from './WindowEmit'
import { WindowStyles } from './WindowStyles'

import { __WINDOW_TYPE_BODY_NAME } from './basicTypes'
import type { WindowProps } from './props'

/**
 * Class for managing the status of an open window.
 *
 * Класс для управления статусом открытого окна.
 */
export class WindowOpen {
  /** Reactive state of window open status / Реактивное состояние статуса открытия окна */
  readonly item = ref<boolean>(false)

  /** Reactive state indicating when opening transition has fully ended / Реактивное состояние, указывающее на полное завершение перехода открытия */
  readonly openEnd = ref<boolean>(false)

  /** Reactive state indicating if the window has been opened at least once / Реактивное состояние, указывающее, открывалось ли окно хотя бы раз */
  protected readonly first = ref<boolean>(false)

  /** Count of consecutive open/toggle click attempts / Количество последовательных попыток клика открытия/переключения */
  protected clicks: number = 0

  /** Timer ID for interval check of element DOM presence / Идентификатор таймера для периодической проверки присутствия элемента в DOM */
  protected timer?: any

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param clientOnly class object to check if rendering on client side / объект класса для проверки рендеринга на стороне клиента
   * @param client object for working with mouse pointer coordinates / объект для работы с координатами указателя мыши
   * @param hook object for working with hooks / объект для работы с хуками
   * @param element an object of the class for working with elements / объект класса для работы с элементами
   * @param tabIndex class object for working with tab indices / объект класса для работы с табуляцией
   * @param status object for working with statuses / объект для работы со статусами
   * @param flash class object for working with fast window opening / объект класса для работы с быстрым открытием окна
   * @param coordinates object for working with coordinates / объект для работы с координатами
   * @param position object for working with the position of the element / объект для работы с положением элемента
   * @param origin the object for work is in the initial position upon opening / объект для работы в начальной позиции при открытии
   * @param emit the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param styles an object for working with the styles of an element / объект для работы со стилями элемента
   */
  constructor(
    protected readonly props: WindowProps,
    protected readonly clientOnly: ClientOnlyInclude,
    protected readonly client: WindowClient,
    protected readonly hook: WindowHook,
    protected readonly element: WindowElement,
    protected readonly tabIndex: TabIndexInclude,
    protected readonly status: WindowStatus,
    protected readonly flash: WindowFlash,
    protected readonly coordinates: WindowCoordinates,
    protected readonly position: WindowPosition,
    protected readonly origin: WindowOrigin,
    protected readonly emit: WindowEmit,
    protected readonly styles: WindowStyles
  ) {
  }

  /**
   * Checks whether the element should be kept in the DOM.
   *
   * Проверяет, надо ли элемент оставить в DOM.
   * @returns check result / результат проверки
   */
  get inDom(): boolean {
    return this.item.value
      || this.props.staticMode
      || (
        Boolean(this.props.inDom)
        && this.first.value
      )
  }

  /**
   * Checks if the element is still in the DOM, and if not, closes the window.
   *
   * Проверяет, находится ли элемент все еще в DOM, и если нет, закрывает окно.
   * @returns true if the element is in the DOM, or false if it was closed / true, если элемент в DOM, или false, если окно было закрыто
   */
  async checkInDom(): Promise<boolean> {
    const main = this.element.getMain()

    if (this.item.value) {
      if (
        !main
        || !document.body.contains(main)
      ) {
        clearTimeout(this.timer)
        this.item.value = false
        this.openEnd.value = false
        return false
      }
    } else {
      clearTimeout(this.timer)
    }

    return true
  }

  /**
   * Checks if there are active click interactions in progress.
   *
   * Проверяет, происходят ли сейчас активные клики.
   * @returns true if clicks are in progress / true, если происходят клики
   */
  isClicks(): boolean {
    return this.clicks > 0
  }

  /**
   * Changes the current state.
   *
   * Изменяет текущее состояние.
   * @param open the value of the current state / значение текущего состояния
   * @returns promise that resolves when the state is toggled / промис, который разрешается при переключении состояния
   */
  readonly set = async (open?: boolean): Promise<void> => {
    if (this.item.value !== Boolean(open)) {
      await this.toggle()
    }
  }

  /**
   * Opens the window.
   *
   * Открывает окно.
   * @returns promise that resolves when the window is opened / промис, который разрешается при открытии окна
   */
  readonly open = async (): Promise<void> => this.set(true)

  /**
   * Closes the window.
   *
   * Закрывает окно.
   * @returns promise that resolves when the window is closed / промис, который разрешается при закрытии окна
   */
  readonly close = async (): Promise<void> => this.set(false)

  /**
   * Switches the state, that is, opens or closes the window, depending on the value of item.
   *
   * Переключает состояние, то есть открывает или закрывает окно, в зависимости от значения item.
   * @returns promise that resolves when toggle is complete / промис, который разрешается по завершении переключения
   */
  readonly toggle = async (): Promise<void> => {
    if (this.clicks > 1) {
      return
    }

    const toOpen = !this.item.value

    if (await this.hook.before(toOpen)) {
      if (toOpen) {
        this.reset()
        this.status.toDisplay()

        await this.setOpen(toOpen)

        requestAnimationFrame(async () => {
          this.status.update()
          await this.hook.preparation()
          await this.watchPosition()
          this.styles.updateType(true)

          requestAnimationFrame(async () => {
            this.position.updateScroll()
            this.status.toPreparation()

            requestAnimationFrame(async () => {
              if (this.flash.isClose()) {
                this.status.toFlash()
              } else {
                this.status.toOpen()
              }

              requestAnimationFrame(() => {
                this.hook.opening()
                this.resetClicks()

                if (!this.props.embedded) {
                  this.tabIndex.goTo()
                  this.openEnd.value = true
                }
              })

              this.emit.on(this.item.value)
              this.timer = setInterval(() => this.checkInDom(), 400)
            })
          })
        })
      } else {
        this.client.reset()

        if (this.flash.isOpen()) {
          this.toClose()
        } else {
          requestAnimationFrame(() => {
            this.status.toHide()
            this.resetClicks()
          })
        }
      }
    }
  }

  /**
   * Close handler on animation end.
   *
   * Обработчик закрытия по окончании анимации.
   */
  closeForEvent(): void {
    if (this.status.isHide()) {
      this.toClose()
    } else if (!this.status.isOpen()) {
      this.hook.closing().then()
    }
  }

  /**
   * Resets all data to initial values.
   *
   * Сбрасывает все данные к начальным значениям.
   * @returns this instance / текущий экземпляр класса
   */
  reset(): this {
    this.coordinates.reset()
    this.origin.reset()

    return this
  }

  /**
   * The method increases the number of clicks.
   *
   * Метод увеличивает количество кликов.
   * @returns this instance / текущий экземпляр класса
   */
  pressed(): this {
    this.clicks++
    setTimeout(() => this.resetClicks(), 128)
    return this
  }

  /**
   * The method resets the number of clicks.
   *
   * Метод сбрасывает количество кликов.
   * @returns this instance / текущий экземпляр класса
   */
  resetClicks(): this {
    this.clicks = 0
    return this
  }

  /**
   * The method updates the current position.
   *
   * Метод обновляет текущее положение.
   * @returns promise that resolves when position watching is complete / промис, который разрешается по завершении обновления положения
   */
  async watchPosition(): Promise<void> {
    if (
      this.item.value
      && this.element.isMain()
      && this.clientOnly.isRender()
    ) {
      this.position.update()
      this.position.updateBody()
      this.styles.update()

      this.origin.update()
      this.styles.update()

      this.watchCoordinates()
    } else {
      this.reset()
    }
  }

  /**
   * Changes values and triggers events.
   *
   * Изменяет значения и вызывает события.
   * @param open the value of the current state / значение текущего состояния
   * @returns this instance / текущий экземпляр класса
   */
  async setOpen(open: boolean): Promise<this> {
    this.item.value = open

    if (open && !this.first.value) {
      this.first.value = true
    }

    return this
  }

  /**
   * Changing the location of the menu window.
   *
   * Изменение расположения окна меню.
   * @returns this instance / текущий экземпляр класса
   */
  protected watchCoordinates(): this {
    frame(
      () => {
        const element = this.element.getMain()

        if (element) {
          const isMenu = getComputedStyle(element)
            .getPropertyValue(__WINDOW_TYPE_BODY_NAME)
            .includes('--MENU--')

          if (isMenu && this.position.update()) {
            this.styles.update()
          }

          this.styles.updateType(isMenu)
        }
      },
      () => this.item.value && !this.status.isHide()
    )

    return this
  }

  /**
   * Transition to the closing state.
   *
   * Переход в состояние закрытия.
   */
  protected toClose(): void {
    setTimeout(async () => {
      await this.setOpen(false)

      await this.hook.closing()

      this.resetClicks()
      this.tabIndex.reset()
      this.openEnd.value = false
      this.emit.on(this.item.value)
    }, 48)

    this.status.toClose()
  }
}
