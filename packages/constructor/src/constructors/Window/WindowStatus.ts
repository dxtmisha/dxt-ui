import { ref } from 'vue'

import { WindowElement } from './WindowElement'

import { WindowStatusItem } from './basicTypes'

/**
 * A class that changes the status of the current component. This is needed for
 * working with animation and behavior of the element when opening/closing.
 *
 * Класс, отвечающий за изменение статуса текущего компонента. Это нужно для работы
 * с анимацией и поведением элемента при открытии/закрытии.
 */
export class WindowStatus {
  readonly item = ref<WindowStatusItem>(WindowStatusItem.close)

  /**
   * Constructor
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(
    protected readonly element: WindowElement
  ) {
  }

  /**
   * Checks if the current status is closed (hide).
   *
   * Проверяет, является ли текущий статус закрытым (hide).
   */
  isHide(): boolean {
    return this.item.value === WindowStatusItem.hide
  }

  /**
   * Checks if the current status is open (open/flash).
   *
   * Проверяет, является ли текущий статус открытым (open/flash).
   */
  isOpen(): boolean {
    return this.item.value === WindowStatusItem.open || this.item.value === WindowStatusItem.flash
  }

  /**
   * Change the current status.
   *
   * Изменить текущий статус.
   * @param value value/ значение
   */
  set(value: WindowStatusItem): this {
    this.item.value = value
    this.update()

    return this
  }

  /**
   * Translates status to display.
   *
   * Переводит статус в display.
   */
  toDisplay(): this {
    this.set(WindowStatusItem.display)
    return this
  }

  /**
   * Translates status to preparation.
   *
   * Переводит статус в preparation.
   */
  toPreparation(): this {
    this.set(WindowStatusItem.preparation)
    return this
  }

  /**
   * Translates status to flash.
   *
   * Переводит статус в flash.
   */
  toFlash(): this {
    this.set(WindowStatusItem.flash)
    return this
  }

  /**
   * Translates status to open.
   *
   * Переводит статус в open.
   */
  toOpen(): this {
    this.set(WindowStatusItem.open)
    return this
  }

  /**
   * Translates status to hide.
   *
   * Переводит статус в hide.
   */
  toHide(): this {
    this.set(WindowStatusItem.hide)
    return this
  }

  /**
   * Translates status to close.
   *
   * Переводит статус в close.
   */
  toClose(): this {
    this.set(WindowStatusItem.close)
    return this
  }

  /**
   * Updates the data-status attribute on the main element and teleport element.
   *
   * Обновляет атрибут data-status на основном элементе и элементе телепорта.
   */
  update(): void {
    const element = this.element.getMain()

    if (element) {
      const teleportElement = element.parentElement

      element.dataset.status = this.item.value

      if (
        teleportElement
        && teleportElement.dataset.windowTeleport
      ) {
        teleportElement.dataset.status = this.item.value
      }
    }
  }
}
