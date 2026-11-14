// ai-none

import { ref, watch, type Ref, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract, frame, isDomRuntime } from '@dxtmisha/functional'

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
export class WindowOpen extends DesignLifecycleAbstract {
  /** Reactive state of window open status / Реактивное состояние статуса открытия окна */
  readonly item = ref<boolean>(false)

  /** Reactive state indicating when opening transition has fully ended / Реактивное состояние, указывающее на полное завершение перехода открытия */
  readonly openEnd = ref<boolean>(false)

  /** Reactive state indicating whether the window is in floating menu mode (--MENU--) / Реактивное состояние, указывающее, находится ли окно в режиме всплывающего меню (--MENU--) */
  readonly isMenu = ref<boolean>(false)

  /** Reactive state indicating if the window has been opened at least once / Реактивное состояние, указывающее, открывалось ли окно хотя бы раз */
  protected readonly first = ref<boolean>(false)

  /** Count of consecutive open/toggle click attempts / Количество последовательных попыток клика открытия/переключения */
  protected clicks: number = 0

  /** Timer ID for interval check of element DOM presence / Идентификатор таймера для периодической проверки присутствия элемента в DOM */
  protected timer?: ReturnType<typeof setInterval>

  /** Timeout ID for delayed closing / Идентификатор таймера для отложенного закрытия */
  protected timeoutClose?: ReturnType<typeof setTimeout>

  /** Timeout ID for resetting consecutive clicks / Идентификатор таймера для сброса последовательных кликов */
  protected timeoutClicks?: ReturnType<typeof setTimeout>

  /** Animation frame ID for transition staging / Идентификатор кадра анимации для поэтапного перехода */
  protected frameId?: number

  /** Sequence counter to cancel stale async transitions / Счётчик последовательности для отмены устаревших асинхронных переходов */
  protected frameSeq: number = 0

  /** Watcher handle for open prop / Дескриптор наблюдателя за свойством open */
  protected watchStop?: WatchStopHandle

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param client function returning client coordinates manager / функция, возвращающая менеджер клиентских координат
   * @param coordinates function returning coordinates manager / функция, возвращающая менеджер координат
   * @param element function returning element manager / функция, возвращающая менеджер элементов
   * @param emit function returning emit manager / функция, возвращающая менеджер событий
   * @param flash function returning flash animation manager / функция, возвращающая менеджер быстрого открытия
   * @param hook function returning hook manager / функция, возвращающая менеджер хуков
   * @param origin function returning origin manager / функция, возвращающая менеджер начальной точки
   * @param position function returning position manager / функция, возвращающая менеджер положения
   * @param status function returning status manager / функция, возвращающая менеджер статусов
   * @param styles function returning styles manager / функция, возвращающая менеджер стилей
   * @param tabIndex function returning tab index manager / функция, возвращающая менеджер табуляции
   * @param isMounted reactive mounted state on client / реактивное состояние монтирования на клиенте
   */
  constructor(
    protected readonly props: WindowProps,
    protected readonly client: () => WindowClient,
    protected readonly coordinates: () => WindowCoordinates,
    protected readonly element: () => WindowElement,
    protected readonly emit: () => WindowEmit,
    protected readonly flash: () => WindowFlash,
    protected readonly hook: () => WindowHook,
    protected readonly origin: () => WindowOrigin,
    protected readonly position: () => WindowPosition,
    protected readonly status: () => WindowStatus,
    protected readonly styles: () => WindowStyles,
    protected readonly tabIndex: () => TabIndexInclude,
    protected readonly isMounted: Ref<boolean>
  ) {
    super()
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  override readonly onMounted = (): void => {
    this.watchStop?.()
    this.watchStop = watch(() => this.props.open, () => this.set(this.props.open))

    if (this.props.open) {
      this.set(this.props.open)
    }
  }

  /**
   * Cleanup lifecycle listeners on unmount.
   *
   * Очистка слушателей жизненного цикла при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.watchStop?.()
    this.watchStop = undefined
    this.clearAsync()
    this.clearClicksTimeout()
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
   * Checks if there are active click interactions in progress.
   *
   * Проверяет, происходят ли сейчас активные клики.
   * @returns true if clicks are in progress / true, если происходят клики
   */
  isClicks(): boolean {
    return this.clicks > 0
  }

  /**
   * Checks if the element is still in the DOM, and if not, closes the window.
   *
   * Проверяет, находится ли элемент все еще в DOM, и если нет, закрывает окно.
   * @returns true if the element is in the DOM, or false if it was closed / true, если элемент в DOM, или false, если окно было закрыто
   */
  async checkInDom(): Promise<boolean> {
    const main = this.element().getMain()

    if (this.item.value) {
      if (
        !main
        || !document.body.contains(main)
      ) {
        this.clearTimer()
        this.item.value = false
        this.openEnd.value = false
        this.isMenu.value = false
        return false
      }
    } else {
      this.clearTimer()
    }

    return true
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

    if (await this.hook().before(toOpen)) {
      this.clearAsync()
      const seq = this.frameSeq

      if (toOpen) {
        this.reset()
        this.status().toDisplay()

        await this.setOpen(toOpen)

        if (seq !== this.frameSeq || !this.isMounted.value) {
          return
        }

        this.frameId = requestAnimationFrame(async () => {
          this.frameId = undefined
          if (seq !== this.frameSeq || !this.isMounted.value) {
            return
          }

          this.status().update()
          await this.hook().preparation()
          if (seq !== this.frameSeq || !this.isMounted.value) {
            return
          }

          await this.watchPosition()
          if (seq !== this.frameSeq || !this.isMounted.value) {
            return
          }

          this.styles().updateType(true)

          this.frameId = requestAnimationFrame(async () => {
            this.frameId = undefined
            if (seq !== this.frameSeq || !this.isMounted.value) {
              return
            }

            this.position().updateScroll()
            this.status().toPreparation()

            this.frameId = requestAnimationFrame(async () => {
              this.frameId = undefined
              if (seq !== this.frameSeq || !this.isMounted.value) {
                return
              }

              if (this.flash().isClose()) {
                this.status().toFlash()
              } else {
                this.status().toOpen()
              }

              this.frameId = requestAnimationFrame(() => {
                this.frameId = undefined
                if (seq !== this.frameSeq || !this.isMounted.value) {
                  return
                }

                this.hook().opening()
                this.resetClicks()

                if (!this.props.embedded) {
                  this.tabIndex().goTo()
                  this.openEnd.value = true
                }
              })

              this.emit().on(this.item.value)
              this.clearTimer()
              this.timer = setInterval(() => this.checkInDom(), 400)
            })
          })
        })
      } else {
        this.client().reset()

        if (this.flash().isOpen()) {
          this.toClose()
        } else {
          this.frameId = requestAnimationFrame(() => {
            this.frameId = undefined
            if (seq !== this.frameSeq || !this.isMounted.value) {
              return
            }

            this.status().toHide()
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
    if (this.status().isHide()) {
      this.toClose()
    } else if (!this.status().isOpen()) {
      this.hook().closing().then()
    }
  }

  /**
   * Resets all data to initial values.
   *
   * Сбрасывает все данные к начальным значениям.
   * @returns this instance / текущий экземпляр класса
   */
  reset(): this {
    this.coordinates().reset()
    this.origin().reset()

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
    this.clearClicksTimeout()
    this.timeoutClicks = setTimeout(() => {
      this.timeoutClicks = undefined
      this.resetClicks()
    }, 128)
    return this
  }

  /**
   * The method resets the number of clicks.
   *
   * Метод сбрасывает количество кликов.
   * @returns this instance / текущий экземпляр класса
   */
  resetClicks(): this {
    this.clearClicksTimeout()
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
    const element = this.element().getMain()

    if (
      this.item.value
      && element
      && this.isMounted.value
    ) {
      this.isMenu.value = this.checkMenuType(element)

      this.position().update()
      this.position().updateBody()
      this.styles().update()

      this.origin().update()
      this.styles().update()

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
   * Checks whether the current window element uses the floating menu body type (--MENU--).
   *
   * Проверяет, использует ли текущий элемент окна тип всплывающего меню (--MENU--).
   * @param element window main element / главный элемент окна
   * @returns true if menu mode is active / true, если активен режим меню
   */
  protected checkMenuType(element: HTMLElement): boolean {
    const typeBody = isDomRuntime()
      ? getComputedStyle(element)
          .getPropertyValue(__WINDOW_TYPE_BODY_NAME)
          .trim()
      : ''

    return typeBody
      ? typeBody.includes('--MENU--')
      : this.props.adaptive === 'menu'
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
        const element = this.element().getMain()

        if (element) {
          const isMenu = this.checkMenuType(element)

          this.isMenu.value = isMenu

          if (isMenu && this.position().update()) {
            this.styles().update()
          }

          this.styles().updateType(isMenu)
        }
      },
      () => this.isMounted.value && this.item.value && !this.status().isHide()
    )

    return this
  }

  /**
   * Transition to the closing state.
   *
   * Переход в состояние закрытия.
   */
  protected toClose(): void {
    const seq = this.frameSeq

    if (this.timeoutClose !== undefined) {
      clearTimeout(this.timeoutClose)
    }

    this.timeoutClose = setTimeout(async () => {
      this.timeoutClose = undefined
      if (seq !== this.frameSeq || !this.isMounted.value) {
        return
      }

      await this.setOpen(false)
      if (seq !== this.frameSeq || !this.isMounted.value) {
        return
      }

      await this.hook().closing()
      if (seq !== this.frameSeq || !this.isMounted.value) {
        return
      }

      this.resetClicks()
      this.tabIndex().reset()
      this.openEnd.value = false
      this.isMenu.value = false
      this.emit().on(this.item.value)
    }, 48)

    this.status().toClose()
  }

  /**
   * Clears DOM presence check interval.
   *
   * Очищает интервал проверки присутствия элемента в DOM.
   */
  protected clearTimer(): void {
    if (this.timer !== undefined) {
      clearInterval(this.timer)
      this.timer = undefined
    }
  }

  /**
   * Clears consecutive clicks reset timeout.
   *
   * Очищает таймер сброса последовательных кликов.
   */
  protected clearClicksTimeout(): void {
    if (this.timeoutClicks !== undefined) {
      clearTimeout(this.timeoutClicks)
      this.timeoutClicks = undefined
    }
  }

  /**
   * Cancels pending animation frames, timeouts and interval timers.
   *
   * Отменяет ожидающие кадры анимации, таймеры и интервал проверки DOM.
   */
  protected clearAsync(): void {
    this.frameSeq++
    this.clearTimer()

    if (this.timeoutClose !== undefined) {
      clearTimeout(this.timeoutClose)
      this.timeoutClose = undefined
    }

    if (this.frameId !== undefined && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.frameId)
      this.frameId = undefined
    }
  }
}
