import { isDomRuntime } from '@dxtmisha/functional'

import { WindowPersistent } from './WindowPersistent'
import { WindowClasses } from './WindowClasses'
import { WindowElement } from './WindowElement'
import { WindowStatic } from './WindowStatic'
import { WindowOpen } from './WindowOpen'

import type { WindowProps } from './props'

/**
 * Class for managing the opening and closing of the window.
 *
 * Класс для управления открытием и закрытием окна.
 */
export class WindowVerification {
  protected target?: HTMLElement
  protected focus?: HTMLElement

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param persistent object for working with the animation before turning off the window/ объект для работы с анимацией перед выключением окна
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param staticMode class object for working with static status/ объект класса для работы со статическим статусом
   * @param open the class object for working with the status of closing or opening the window/ объект класса для работы со статусом закрытия или открытия окна
   */

  constructor(
    protected readonly props: WindowProps,
    protected readonly persistent: WindowPersistent,
    protected readonly classes: WindowClasses,
    protected readonly element: WindowElement,
    protected readonly staticMode: WindowStatic,
    protected readonly open: WindowOpen
  ) {
  }

  /**
   * Updates the window opening status.
   *
   * Обновления статус открытия окно.
   * @param target the selected window/ выбранное окно
   */
  async update(target: HTMLElement): Promise<void> {
    if (this.open.isClicks()) {
      return
    }

    this.target = target
    this.focus = this.getFocus()

    if (!isDomRuntime()) {
      return
    }

    if (!this.isTargetInBody()) {
      return
    }

    if (this.staticMode.item.value) {
      return
    }

    this.open.pressed()

    if (this.open.item.value) {
      if (
        this.isOpenOnly()
        || this.isBlockOther()
      ) {
        return
      } else if (this.isContextmenu()) {
        await this.open
          .reset()
          .watchPosition()
      } else if (!this.focus) {
        await this.open.toggle()
      } else if (!this.isFocus()) {
        if (this.isNotBlock()) {
          if (this.isChildren()) {
            setTimeout(() => {
              requestAnimationFrame(async () => {
                if (
                  ['open', 'flash'].indexOf(this.focus?.dataset.status || '') === -1
                  && this.isMenu()
                ) {
                  await this.open.toggle()
                }
              })
            }, 40)
          } else {
            await this.open.toggle()
          }
        }
      } else if (this.isTarget()) {
        if (this.isNotBlockChildren()) {
          if (!this.persistent.on()) {
            await this.open.toggle()
          }
        }
      } else if (
        this.isClose()
        || this.isAutoClose()
        || !this.isChildren()
      ) {
        await this.open.toggle()
      }
    } else if (this.isEnabled()) {
      await this.open.toggle()
    }
  }

  /**
   * Returns the element in focus.
   *
   * Возвращает элемент в фокусе.
   */
  getFocus() {
    return this.classes.findMain(this.getTarget())
  }

  protected getTarget<R extends HTMLElement>(): R {
    return (this.target ?? this.element.getMain() ?? document.body) as R
  }

  /**
   * Checks if the selected element is in focus.
   *
   * Проверяет, находится ли выбранный элемент в фокусе.
   */
  protected isFocus(): boolean {
    return this.element.getMain() === this.focus
  }

  /**
   * Checks if the target element is the window itself.
   *
   * Проверяет, является ли элемент-цель самим окном.
   */
  protected isTarget(): boolean {
    return this.element.getMain() === this.target
  }

  protected isTargetInBody(): boolean {
    return Boolean(this.target?.closest('body'))
  }

  /**
   * Checks if the selected window is under other windows.
   *
   * Проверяет, находится ли выбранное окно под другими окнами.
   * @param target the selected window/ выбранное окно
   */
  protected isChildren(
    target: HTMLElement = this.getTarget()
  ): boolean {
    const focus = this.classes.findMain(target)

    if (focus) {
      if (focus.dataset.window === this.classes.getId()) {
        return true
      }

      const control = this.classes.findControlByElement(focus)

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
   */
  protected isEnabled(): boolean {
    console.log(
      'this.getTarget()',
      this.getTarget(),
      this.getTarget().parentElement,
      this.getTarget().parentElement?.parentElement,
      this.getTarget().closest(`.${this.classes.list.controlStatic}`),
      this.classes.list.controlStatic
    )

    return !this.props.disabled
      && !this.getTarget().closest(`.${this.classes.list.controlStatic}`)
  }

  /**
   * Checks if the window needs to be closed automatically.
   *
   * Проверяет, нужно ли автоматически закрывать окно.
   */
  protected isAutoClose(): boolean {
    return Boolean(this.props.autoClose)
      && !this.getTarget()
        .closest(`.${this.classes.list.static}, .${this.classes.getId()} .${this.classes.list.control}`)
  }

  /**
   * Checks if the change of the opening status of the window is blocked.
   *
   * Проверяет, заблокировано ли изменение статуса открытия окна.
   */
  protected isNotBlock(): boolean {
    return this.isNotBlockItem(this.focus)
  }

  /**
   * Checks if the change of the opening status of the window is blocked.
   *
   * Проверяет, заблокировано ли изменение статуса открытия окна.
   * @param item element for testing/ элемент для проверки
   */
  protected isNotBlockItem(item?: HTMLElement): boolean {
    const target = this.getTarget()

    return (!this.isMenu(target) || !this.classes.isWindow(target))
      && !this.classes.findControlByElement(item)?.closest(`.${this.classes.list.block}`)
  }

  /**
   * Checks if there is an element with a close lock.
   *
   * Проверяет, есть ли элемент с блокировкой закрытия.
   */
  protected isNotBlockChildren(): boolean {
    return !this.classes.findBody()?.querySelector(`.${this.classes.list.blockChildren}`)
      && !this.classes.findBody()?.querySelector('[data-window-open="open"]')
  }

  /**
   * Checks if there is a blocking element from other windows.
   *
   * Проверяет, есть ли блокирующий элемент от других окон.
   */
  protected isBlockOther(): boolean {
    return Boolean(this.classes.findBodyOther(`.${this.classes.list.blockOther}`))
  }

  /**
   * Checks if it needs to be opened when the right button is pressed.
   *
   * Проверяет, нужно ли открывать при нажатии правой кнопки.
   */
  protected isContextmenu(): boolean {
    return Boolean(
      this.props.contextmenu
      && this.getTarget().closest(this.classes.getSelectorControl())
    )
  }

  /**
   * Checks if the window can be closed.
   *
   * Проверяет, можно ли закрыть окно.
   */
  protected isClose(): boolean {
    return Boolean(
      this.getTarget()
        .closest(`.${this.classes.list.close}:not(.${this.classes.list.static})`)
    )
  }

  /**
   * Checks if the element is a menu.
   *
   * Проверяет, является ли элемент меню.
   */
  protected isMenu(element: HTMLElement | undefined = this.element.getMain()): boolean {
    if (element) {
      const style = getComputedStyle(element)
      return style.content === '"--MENU--"' || style.content === '"--MENU-WINDOW--"'
    }

    return false
  }

  /**
   * Checks if the element should only open.
   *
   * Проверяет, должен ли элемент только открываться.
   */
  protected isOpenOnly() {
    return Boolean(
      this.getTarget()
        .closest(`.${this.classes.list.controlOpenOnly}`)
    )
  }
}
