import { onMounted, watch } from 'vue'
import { isDomRuntime, isInput } from '@dxtmisha/functional'
import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { WindowClassesData } from './WindowClassesData'
import { WindowStatic } from './WindowStatic'

import type { WindowOpen } from './WindowOpen'
import type { WindowProps } from './props'
import { TeleportInclude } from '../../classes/TeleportInclude.ts'

let windowOpenCounter: number = 0

/**
 * A class for managing the hiding of elements outside the window when it is open.
 *
 * Класс для управления скрытием элементов вне окна при его открытии.
 */
export class WindowHidden {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param classes an object for working with class names / объект для работы с названиями классов
   * @param staticMode class object for working with static status / объект класса для работы со статическим статусом
   * @param open an object for working with the open state of the window / объект для работы с состоянием открытия окна
   * @param teleport an object for working with the teleport status of the window / объект для работы с состоянием телепорта окна
   */
  constructor(
    protected readonly props: WindowProps,
    protected readonly classes: WindowClassesData,
    protected readonly staticMode: WindowStatic,
    protected readonly open: WindowOpen,
    protected readonly teleport: TeleportInclude
  ) {
    onMounted(() => {
      watch(
        this.open.openEnd,
        (newValue: boolean) => {
          if (
            !this.props.inert
            || this.props.embedded
            || this.staticMode.item.value
          ) {
            return
          }

          if (newValue) {
            this.toHidden()
          } else {
            this.toShow()
          }
        },
        {
          immediate: true
        }
      )
    })
  }

  /**
   * Returns the aria attribute data for hiding elements.
   *
   * Возвращает данные aria-атрибута для скрытия элементов.
   */
  protected getAriaData() {
    const ariaHidden = AriaStaticInclude.hidden()
    const ariaKey: any = Object.keys(ariaHidden)[0]
    const ariaValue: any = Object.values(ariaHidden)[0]

    return {
      key: ariaKey,
      value: ariaValue
    }
  }

  /**
   * Finds all elements outside the window that need to be hidden.
   *
   * Находит все элементы вне окна, которые нужно скрыть.
   */
  protected findElements(): NodeListOf<HTMLElement> | undefined {
    if (isDomRuntime()) {
      const id = this.classes.getId()
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
  protected findBlockedElements(): NodeListOf<HTMLElement> {
    return document.querySelectorAll<HTMLElement>('[data-window-block]')
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
          || this.teleport.isTeleportElement(element)
        ) {
          return
        }

        element.setAttribute(aria.key, aria.value)
        element.setAttribute('data-window-block', 'true')

        if (!this.classes.isWindowOrTeleport(element)) {
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
