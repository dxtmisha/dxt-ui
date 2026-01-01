import { watch } from 'vue'
import { isDomRuntime } from '@dxtmisha/functional'
import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { WindowClasses } from './WindowClasses'

import type { WindowOpen } from './WindowOpen'

/**
 * A class for managing the hiding of elements outside the window when it is open.
 *
 * Класс для управления скрытием элементов вне окна при его открытии.
 */
export class WindowHidden {
  protected elements: HTMLElement[] = []

  /**
   * Constructor
   * @param classes an object for working with class names / объект для работы с названиями классов
   * @param open an object for working with the open state of the window / объект для работы с состоянием открытия окна
   */
  constructor(
    protected classes: WindowClasses,
    protected open: WindowOpen
  ) {
    watch(
      this.open.item,
      (newValue: boolean) => {
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
   * Hides elements outside the window by adding aria-hidden attribute.
   *
   * Скрывает элементы вне окна, добавляя атрибут aria-hidden.
   */
  protected toHidden(): void {
    const elements = this.findElements()

    if (elements) {
      const aria = this.getAriaData()

      this.elements = []
      elements.forEach((element: HTMLElement) => {
        if (
          element.hasAttribute(aria.key)
          || element.hasAttribute('inert')
        ) {
          return
        }

        element.setAttribute(aria.key, aria.value)

        if (!this.classes.isWindowOrTeleport(element)) {
          element.setAttribute('inert', '')
        }

        this.elements.push(element)
      })
    } else {
      this.elements = []
    }
  }

  /**
   * Shows previously hidden elements by removing aria-hidden attribute.
   *
   * Показывает ранее скрытые элементы, удаляя атрибут aria-hidden.
   */
  protected toShow(): void {
    const aria = this.getAriaData()
    this.elements
      .forEach((element: HTMLElement) => {
        element.removeAttribute(aria.key)
        element.removeAttribute('inert')
      })
    this.elements = []
  }
}
