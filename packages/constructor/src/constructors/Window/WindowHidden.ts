// ai-none

import { watch } from 'vue'
import type { WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract, isInput } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import type { TeleportInclude } from '../../classes/TeleportInclude'

import type { WindowClassesData } from './WindowClassesData'
import type { WindowStatic } from './WindowStatic'
import type { WindowOpen } from './WindowOpen'
import type { WindowProps } from './props'

const elementBlockCount = new WeakMap<HTMLElement, number>()

/**
 * A class for managing the hiding of elements outside the window when it is open.
 *
 * Класс для управления скрытием элементов вне окна при его открытии.
 */
export class WindowHidden extends DesignLifecycleAbstract {
  protected watchOpenEnd?: WatchStopHandle
  protected hidden: boolean = false
  protected blockedElements: HTMLElement[] = []

  /**
   * Checks if hidden mode can be activated.
   *
   * Проверяет, может ли быть активирован скрытый режим.
   * @param props input data / входные данные
   * @returns true if hidden mode can be active / true, если скрытый режим может быть активен
   */
  static is(props?: WindowProps): boolean {
    return Boolean(props?.inert && !props?.embedded && !props?.staticMode)
  }

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

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  override readonly onMounted = (): void => {
    this.watchOpenEnd?.()
    this.watchOpenEnd = watch(
      [
        this.open().openEnd,
        () => Boolean(this.open().isMenu?.value)
      ],
      this.update
    )
    this.update()
  }

  /**
   * Cleanup lifecycle listeners on unmount.
   *
   * Очистка слушателей жизненного цикла при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.watchOpenEnd?.()
    this.watchOpenEnd = undefined
    this.toShow()
  }

  /**
   * Updates hidden state for elements outside the window based on openEnd and menu mode status.
   *
   * Обновляет состояние скрытия для элементов вне окна на основе статуса openEnd и режима меню.
   */
  readonly update = (): void => {
    if (
      !WindowHidden.is(this.props)
      || this.staticMode().item.value
      || this.open().isMenu?.value
    ) {
      this.toShow()
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
   * @returns object with aria attribute key and value / объект с ключом и значением aria-атрибута
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
   * @returns list of elements outside the window / список элементов вне окна
   */
  protected findElements(): NodeListOf<HTMLElement> {
    const id = this.classes().getId()
    return document.querySelectorAll<HTMLElement>(
      `body > *:not([data-window-teleport="${id}"]):not(.${id}):not(script):not(style)`
    )
  }

  /**
   * Hides elements outside the window by adding aria-hidden and inert attributes.
   *
   * Скрывает элементы вне окна, добавляя атрибуты aria-hidden и inert.
   */
  protected toHidden(): void {
    if (
      this.hidden
      || !this.props.autoTabIndex
      || isInput(document.activeElement)
    ) {
      return
    }

    this.hidden = true

    const elements = this.findElements()
    const aria = this.getAriaData()

    elements.forEach((element: HTMLElement) => {
      const hasExternalBlock = (
        element.hasAttribute(aria.key)
        || element.hasAttribute('inert')
      ) && !element.hasAttribute('data-window-block')

      if (
        hasExternalBlock
        || this.teleport().isTeleportElement(element)
      ) {
        return
      }

      const count = (elementBlockCount.get(element) ?? 0) + 1
      elementBlockCount.set(element, count)
      this.blockedElements.push(element)

      element.setAttribute(aria.key, aria.value)
      element.setAttribute('data-window-block', 'true')

      if (!this.classes().isWindowOrTeleport(element)) {
        element.setAttribute('inert', '')
      }
    })
  }

  /**
   * Shows previously hidden elements by removing aria-hidden and inert attributes when no window blocks them.
   *
   * Показывает ранее скрытые элементы, удаляя атрибуты aria-hidden и inert, когда ни одно окно их не блокирует.
   */
  protected toShow(): void {
    if (!this.hidden) {
      return
    }

    this.hidden = false

    const aria = this.getAriaData()

    this.blockedElements.forEach((element: HTMLElement) => {
      const nextCount = (elementBlockCount.get(element) ?? 1) - 1

      if (nextCount <= 0) {
        elementBlockCount.delete(element)
        element.removeAttribute(aria.key)
        element.removeAttribute('inert')
        element.removeAttribute('data-window-block')
      } else {
        elementBlockCount.set(element, nextCount)
      }
    })

    this.blockedElements = []
  }
}
