// ai-none

import { watch } from 'vue'
import type { WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract, isDomRuntime, isInput } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import type { TeleportInclude } from '../../classes/TeleportInclude'

import type { WindowClassesData } from './WindowClassesData'
import type { WindowStatic } from './WindowStatic'
import type { WindowOpen } from './WindowOpen'
import type { WindowProps } from './props'

let windowOpenCounter: number = 0

/**
 * A class for managing the hiding of elements outside the window when it is open.
 *
 * Класс для управления скрытием элементов вне окна при его открытии.
 */
export class WindowHidden extends DesignLifecycleAbstract {
  /**
   * Checks if hidden mode can be activated.
   *
   * Проверяет, может ли быть активирован скрытый режим.
   * @param props input data / входные данные
   */
  static is(props?: WindowProps): boolean {
    return Boolean(props?.inert && !props?.embedded && !props?.staticMode)
  }

  protected watchOpenEnd?: WatchStopHandle

  /**
   * Constructor
   * @param props input data / входные данные
   * @param classes function returning an object for working with class names / функция, возвращающая объект для работы с названиями классов
   * @param open function returning an object for working with the open state / функция, возвращающая объект для работы с состоянием открытия окна
   * @param staticMode function returning class object for working with static status / функция, возвращающая объект класса для работы со статическим статусом
   * @param teleport function returning an object for working with teleport status / функция, возвращающая объект для работы с состоянием телепорта окна
   */
  constructor(
    protected readonly props: WindowProps,
    protected readonly classes: () => WindowClassesData,
    protected readonly open: () => WindowOpen,
    protected readonly staticMode: () => WindowStatic,
    protected readonly teleport: () => TeleportInclude
  ) {
    super()
  }

  override readonly onMounted = (): void => {
    this.watchOpenEnd = watch(
      this.open().openEnd,
      this.update
    )
    this.update()
  }

  override readonly onUnmounted = (): void => {
    this.watchOpenEnd?.()
    this.toShow()
  }

  /**
   * Updates hidden state for elements outside the window based on openEnd status.
   *
   * Обновляет состояние скрытия для элементов вне окна на основе статуса openEnd.
   */
  readonly update = (): void => {
    if (
      !WindowHidden.is(this.props)
      || this.staticMode().item.value
    ) {
      return
    }

    if (this.open().openEnd.value) {
      this.toHidden()
    } else {
      this.toShow()
    }
  }

  /**
   * Returns the aria attribute data for hiding elements.
   *
   * Возвращает данные aria-атрибута для скрытия элементов.
   */
  protected getAriaData(): { key: string, value: string } {
    const ariaHidden = AriaStaticInclude.hidden()
    const [ariaKey = 'aria-hidden'] = Object.keys(ariaHidden)
    const [ariaValue = 'true'] = Object.values(ariaHidden)

    return {
      key: ariaKey,
      value: String(ariaValue)
    }
  }

  /**
   * Finds all elements outside the window that need to be hidden.
   *
   * Находит все элементы вне окна, которые нужно скрыть.
   */
  protected findElements(): NodeListOf<HTMLElement> | undefined {
    if (isDomRuntime()) {
      const id = this.classes().getId()
      return document.querySelectorAll<HTMLElement>(
        `body > *:not([data-window-teleport="${id}"]):not(.${id}):not(script):not(style)`
      )
    }

    return undefined
  }

  /**
   * Returns all elements currently blocked by a window (having the data-window-block attribute).
   *
   * Возвращает все элементы, заблокированные в данный момент окном (имеющие атрибут data-window-block).
   * @returns array of blocked elements / массив заблокированных элементов
   */
  protected findBlockedElements(): NodeListOf<HTMLElement> | HTMLElement[] {
    if (isDomRuntime()) {
      return document.querySelectorAll<HTMLElement>('[data-window-block]')
    }

    return []
  }

  /**
   * Hides elements outside the window by adding aria-hidden attribute.
   *
   * Скрывает элементы вне окна, добавляя атрибут aria-hidden.
   */
  protected toHidden(): void {
    if (
      !this.props.autoTabIndex
      || isInput(document.activeElement)
    ) {
      return
    }

    windowOpenCounter++

    const elements = this.findElements()

    if (elements) {
      const aria = this.getAriaData()

      elements.forEach((element: HTMLElement) => {
        if (
          element.hasAttribute(aria.key)
          || element.hasAttribute('inert')
          || this.teleport().isTeleportElement(element)
        ) {
          return
        }

        element.setAttribute(aria.key, aria.value)
        element.setAttribute('data-window-block', 'true')

        if (!this.classes().isWindowOrTeleport(element)) {
          element.setAttribute('inert', '')
        }
      })
    }
  }

  /**
   * Shows previously hidden elements by removing aria-hidden attribute.
   *
   * Показывает ранее скрытые элементы, удаляя атрибут aria-hidden.
   */
  protected toShow(): void {
    const blockedElements = this.findBlockedElements()

    if (
      --windowOpenCounter < 0
      || blockedElements.length === 0
    ) {
      windowOpenCounter = 0
      return
    }

    const aria = this.getAriaData()

    blockedElements.forEach((element: HTMLElement) => {
      element.removeAttribute(aria.key)
      element.removeAttribute('inert')
      element.removeAttribute('data-window-block')
    })
  }
}
