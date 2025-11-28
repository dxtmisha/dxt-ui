import { computed, ref } from 'vue'
import { frame } from '@dxtmisha/functional'

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

import type { WindowProps } from './props'

/**
 * Class for managing the status of an open window.
 *
 * Класс для управления статусом открытого окна.
 */
export class WindowOpen {
  readonly item = ref<boolean>(false)

  protected readonly first = ref<boolean>(false)
  protected clicks: number = 0

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
   * @param hook object for working with hooks/ объект для работы с хуками
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param tabIndex class object for working with tab indices/ объект класса для работы с табуляцией
   * @param status object for working with statuses/ объект для работы со статусами
   * @param flash class object for working with fast window opening/ объект класса для работы с быстрым открытием окна
   * @param coordinates object for working with coordinates/ объект для работы с координатами
   * @param position object for working with the position of the element/ объект для работы с положением элемента
   * @param origin the object for work is in the initial position upon opening/ объект для работы в начальной позиции при открытии
   * @param emit the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param styles an object for working with the styles of an element/ объект для работы со стилями элемента
   */
  constructor(
    protected readonly props: WindowProps,
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
   */
  readonly inDom = computed<boolean>(() => {
    return this.item.value
      || this.props.staticMode
      || (
        Boolean(this.props.inDom)
        && this.first.value
      )
  })

  /**
   * Checks if the window is open.
   *
   * Проверяет, открыто ли окно.
   */
  isClicks(): boolean {
    return this.clicks > 0
  }

  /**
   * Changes the current state.
   *
   * Изменяет текущее состояние.
   * @param open the value of the current state/ значение текущего состояния
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
   */
  readonly open = async (): Promise<void> => this.set(true)

  /**
   * Closes the window.
   *
   * Закрывает окно.
   */
  readonly close = async (): Promise<void> => this.set(false)

  /**
   * Switches the state, that is, opens or closes the window, depending on the value of item.
   *
   * Переключает состояние, то есть открывает или закрывает окно, в зависимости от значения item.
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
                this.tabIndex.goTo()
              })
              this.emit.on(this.item.value)
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

        this.tabIndex.reset()
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
   */
  resetClicks(): this {
    this.clicks = 0
    return this
  }

  /**
   * The method updates the current position.
   *
   * Метод обновляет текущее положение.
   */
  async watchPosition(): Promise<void> {
    if (
      this.item.value
      && this.element.isMain()
    ) {
      this.position.update()
      this.position.updateBody()
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
   * @param open the value of the current state/ значение текущего состояния
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
   */
  protected watchCoordinates(): this {
    frame(
      () => {
        const element = this.element.getMain()

        if (element) {
          const isMenu = getComputedStyle(element).content === '"--MENU--"'

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
      this.emit.on(this.item.value)
    }, 48)

    this.status.toClose()
  }
}
