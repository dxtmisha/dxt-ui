// ai-none

import type { Ref } from 'vue'
import { isDomRuntime } from '@dxtmisha/functional'

import { WindowPersistent } from './WindowPersistent'
import { WindowClassesData } from './WindowClassesData'
import { WindowElement } from './WindowElement'
import { WindowStatic } from './WindowStatic'
import { WindowOpen } from './WindowOpen'

import { __WINDOW_TYPE_BODY_NAME } from './basicTypes'
import type { WindowProps } from './props'

/**
 * Class for managing the opening and closing of the window.
 *
 * Класс для управления открытием и закрытием окна.
 */
export class WindowVerification {
  /** Target element / Целевой элемент */
  protected target?: HTMLElement

  /** Element in focus / Элемент в фокусе */
  protected focus?: HTMLElement

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param isMounted reactive mounted state on client / реактивное состояние монтирования на клиенте
   * @param persistent function returning persistent manager / функция, возвращающая менеджер анимации закрытия
   * @param classes function returning class manager / функция, возвращающая менеджер классов
   * @param element function returning element manager / функция, возвращающая менеджер элементов
   * @param staticMode function returning static mode manager / функция, возвращающая менеджер статического режима
   * @param open function returning open state manager / функция, возвращающая менеджер состояния открытия
   */
  constructor(
    protected readonly props: WindowProps,
    protected readonly isMounted: Ref<boolean>,
    protected readonly persistent: () => WindowPersistent,
    protected readonly classes: () => WindowClassesData,
    protected readonly element: () => WindowElement,
    protected readonly staticMode: () => WindowStatic,
    protected readonly open: () => WindowOpen
  ) {
  }

  /**
   * Updates the window opening status.
   *
   * Обновляет статус открытия окна.
   * @param target the selected window / выбранное окно
   */
  async update(target: HTMLElement): Promise<void> {
    if (this.open().isClicks()) {
      return
    }

    this.target = target
    this.focus = this.getFocus()

    if (!this.isMounted.value) {
      return
    }

    if (!this.isTargetInBody()) {
      return
    }

    if (WindowStatic.is(this.props) && this.staticMode().item.value) {
      return
    }

    this.open().pressed()

    if (this.open().item.value) {
      if (
        this.isOpenOnly()
        || this.isBlockOther()
      ) {
        return
      } else if (this.isContextmenu()) {
        await this.open()
          .reset()
          .watchPosition()
      } else if (!this.focus) {
        await this.open().toggle()
      } else if (!this.isFocus()) {
        if (this.isNotBlock()) {
          if (this.isChildren()) {
            setTimeout(() => {
              requestAnimationFrame(async () => {
                if (
                  this.focus
                  && !['open', 'flash'].includes(this.focus.dataset.status ?? '')
                  && this.isMenu()
                ) {
                  await this.open().toggle()
                }
              })
            }, 40)
          } else {
            await this.open().toggle()
          }
        }
      } else if (this.isTarget()) {
        if (this.isNotBlockChildren()) {
          if (!(WindowPersistent.is(this.props) && this.persistent().on())) {
            await this.open().toggle()
          }
        }
      } else if (
        this.isClose()
        || this.isAutoClose()
        || !this.isChildren()
      ) {
        await this.open().toggle()
      }
    } else if (this.isEnabled()) {
      await this.open().toggle()
    }
  }

  /**
   * Returns the element in focus.
   *
   * Возвращает элемент в фокусе.
   * @returns element in focus or undefined / элемент в фокусе или undefined
   */
  getFocus(): HTMLElement | undefined {
    return this.classes().findMain(this.getTarget())
  }

  /**
   * Returns the target element for checking and updating status.
   *
   * Возвращает целевой элемент для проверки и обновления статуса.
   * @returns target element / целевой элемент
   */
  protected getTarget<R extends HTMLElement>(): R {
    return (this.target ?? this.element().getMain() ?? (isDomRuntime() ? document.body : undefined)) as R
  }

  /**
   * Checks if the selected element is in focus.
   *
   * Проверяет, находится ли выбранный элемент в фокусе.
   * @returns true if the element is in focus / true, если элемент находится в фокусе
   */
  protected isFocus(): boolean {
    return this.element().getMain() === this.focus
  }

  /**
   * Checks if the target element is the window itself.
   *
   * Проверяет, является ли элемент-цель самим окном.
   * @returns true if the target element is the window itself / true, если целевой элемент является самим окном
   */
  protected isTarget(): boolean {
    return this.element().getMain() === this.target
  }

  /**
   * Checks if the target element is inside the body.
   *
   * Проверяет, находится ли целевой элемент в теле документа (body).
   * @returns true if the target element is in the body / true, если целевой элемент находится в body
   */
  protected isTargetInBody(): boolean {
    return Boolean(this.target?.closest('body'))
  }

  /**
   * Checks if the selected window is under other windows.
   *
   * Проверяет, находится ли выбранное окно под другими окнами.
   * @param target the selected window / выбранное окно
   * @returns true if the window is a child / true, если окно является дочерним
   */
  protected isChildren(
    target: HTMLElement = this.getTarget()
  ): boolean {
    const focus = this.classes().findMain(target)

    if (focus) {
      if (focus.dataset.window === this.classes().getId()) {
        return true
      }

      const control = this.classes().findControlByElement(focus)

      if (control) {
        return this.isChildren(control)
      }
    }

    return false
  }

  /**
   * Checks if the window is enabled or if the conditions for opening the window are met.
   *
   * Проверяет, включено ли окно или подходят ли условия для открытия окна.
   * @returns true if the window is enabled / true, если окно включено
   */
  protected isEnabled(): boolean {
    return !this.props.disabled
      && !this.getTarget().closest(`.${this.classes().list.controlStatic}`)
  }

  /**
   * Checks if the window needs to be closed automatically.
   *
   * Проверяет, нужно ли автоматически закрывать окно.
   * @returns true if the window should close automatically / true, если окно должно закрываться автоматически
   */
  protected isAutoClose(): boolean {
    return Boolean(this.props.autoClose)
      && !this.getTarget()
        .closest(`.${this.classes().list.static}, .${this.classes().getId()} .${this.classes().list.control}`)
  }

  /**
   * Checks if the change of the opening status of the window is blocked.
   *
   * Проверяет, заблокировано ли изменение статуса открытия окна.
   * @returns true if the status change is not blocked / true, если изменение статуса не заблокировано
   */
  protected isNotBlock(): boolean {
    return this.isNotBlockItem(this.focus)
  }

  /**
   * Checks if the change of the opening status of the window is blocked for a specific item.
   *
   * Проверяет, заблокировано ли изменение статуса открытия окна для конкретного элемента.
   * @param item element for testing / элемент для проверки
   * @returns true if the status change is not blocked for the item / true, если изменение статуса не заблокировано для элемента
   */
  protected isNotBlockItem(item?: HTMLElement): boolean {
    const target = this.getTarget()

    return (!this.isMenu(target) || !this.classes().isWindow(target))
      && !this.classes().findControlByElement(item)?.closest(`.${this.classes().list.block}`)
  }

  /**
   * Checks if there is an element with a close lock.
   *
   * Проверяет, есть ли элемент с блокировкой закрытия.
   * @returns true if closing is not blocked by children / true, если закрытие не заблокировано дочерними элементами
   */
  protected isNotBlockChildren(): boolean {
    return !this.classes().findBody()?.querySelector(`.${this.classes().list.blockChildren}`)
      && !this.classes().findBody()?.querySelector('[data-window-open="open"]')
  }

  /**
   * Checks if there is a blocking element from other windows.
   *
   * Проверяет, есть ли блокирующий элемент от других окон.
   * @returns true if blocked by other windows / true, если заблокировано другими окнами
   */
  protected isBlockOther(): boolean {
    if (this.target) {
      const window = this.classes().findMain(this.target)

      if (
        window
        && (
          window === this.element().getMain()
          || this.classes().findControl()
            ?.closest(`[data-window="${window.dataset.window}"]`)
        )
      ) {
        return false
      }
    }

    return Boolean(
      this.classes().findBodyOther(`.${this.classes().list.blockOther}`)
    )
  }

  /**
   * Checks if it needs to be opened when the right button is pressed.
   *
   * Проверяет, нужно ли открывать при нажатии правой кнопки (контекстного меню).
   * @returns true if context menu is active / true, если активна правая кнопка мыши
   */
  protected isContextmenu(): boolean {
    return Boolean(
      this.props.contextmenu
      && this.getTarget().closest(this.classes().getSelectorControl())
    )
  }

  /**
   * Checks if the window can be closed.
   *
   * Проверяет, можно ли закрыть окно.
   * @returns true if the window can be closed / true, если окно можно закрыть
   */
  protected isClose(): boolean {
    return Boolean(
      this.getTarget()
        .closest(`.${this.classes().list.close}:not(.${this.classes().list.static})`)
    )
  }

  /**
   * Checks if the element is a menu.
   *
   * Проверяет, является ли элемент меню.
   * @param element the element to check / проверяемый элемент
   * @returns true if the element is a menu / true, если элемент является меню
   */
  protected isMenu(element: HTMLElement | undefined = this.element().getMain()): boolean {
    if (element && isDomRuntime()) {
      const style = getComputedStyle(element)
      const value = style.getPropertyValue(__WINDOW_TYPE_BODY_NAME)

      return value.includes('--MENU--')
        || value.includes('--MENU-WINDOW--')
    }

    return false
  }

  /**
   * Checks if the element should only open.
   *
   * Проверяет, должен ли элемент только открываться.
   * @returns true if the element only opens / true, если элемент должен только открываться
   */
  protected isOpenOnly(): boolean {
    return Boolean(
      this.getTarget()
        .closest(`.${this.classes().list.controlOpenOnly}`)
    )
  }
}
