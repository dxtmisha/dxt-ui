import { EventItem, isDomRuntime, ListDataRef } from '@dxtmisha/functional'

import { TabsNavigationSelected } from './TabsNavigationSelected'
import { TabsNavigationFocus } from './TabsNavigationFocus'

/**
 * Class for managing tab navigation control.
 *
 * Класс для управления контролем навигации вкладок.
 */
export class TabsNavigationControl {
  protected event?: EventItem<HTMLElement, any>

  /**
   * Constructor
   * @param selected selection management object/ объект управления выделением
   * @param focus focus management object/ объект управления фокусом
   * @param data data list object/ объект списка данных
   */
  constructor(
    protected readonly selected: TabsNavigationSelected,
    protected readonly focus: TabsNavigationFocus,
    protected readonly data: ListDataRef
  ) {
  }

  /**
   * Returns bindings for the element.
   *
   * Возвращает привязки для элемента.
   */
  get binds() {
    return {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }
  }

  /**
   * Returns the first item in the list.
   *
   * Возвращает первый элемент в списке.
   */
  getFirstItem(): string | undefined {
    return this.data.getFirstItemByParent(undefined)?.index
  }

  /**
   * Handler for the focus event.
   *
   * Обработчик события фокуса.
   */
  readonly onFocus = () => {
    this.start()
  }

  /**
   * Handler for the blur event.
   *
   * Обработчик события потери фокуса.
   */
  readonly onBlur = () => {
    this.stop()
  }

  /**
   * Returns the current focus value or the first item.
   *
   * Возвращает текущее значение фокуса или первый элемент.
   */
  protected getFocus(): string | undefined {
    return this.focus.get() || this.getFirstItem()
  }

  /**
   * Starts the event.
   *
   * Запускает событие.
   */
  protected start() {
    if (isDomRuntime()) {
      if (!this.event) {
        this.event = new EventItem<HTMLElement, any>(
          document.body,
          ['keydown'],
          this.on
        )
      }

      this.focus.position()
      this.event.start()
    }
  }

  /**
   * Stops the event.
   *
   * Останавливает событие.
   */
  protected stop() {
    if (this.event) {
      this.event.stop()
      this.event = undefined
      this.focus.reset()
    }
  }

  /**
   * Moves focus to the previous item.
   *
   * Перемещает фокус на предыдущий элемент.
   */
  protected prev(): this {
    const focus = this.getFocus()

    if (focus) {
      this.focus.set(
        this.data.getIndexPrev(focus)?.index
      )
    }

    return this
  }

  /**
   * Moves focus to the next item.
   *
   * Перемещает фокус на следующий элемент.
   */
  protected next(): this {
    const focus = this.getFocus()

    if (focus) {
      this.focus.set(
        this.data.getIndexNext(focus)?.index
      )
    }

    return this
  }

  /**
   * Method for tracking keys when a window is open.
   *
   * Метод для отслеживания нажатий при открытом окне.
   * @param event event object/ объект события
   */
  protected readonly on = (event: KeyboardEvent) => {
    if (this.data.getLength()) {
      const key = event.code || event.key || (event as any).keyCode

      switch (key) {
        case 'ArrowLeft':
        case 'Left':
        case 37:
          event.preventDefault()
          this.prev()
          break
        case 'ArrowRight':
        case 'Right':
        case 39:
          event.preventDefault()
          this.next()
          break
        case 'Enter':
        case 13:
        case 'Space':
        case 'Spacebar':
        case ' ':
        case 32:
          event.preventDefault()
          this.selected.set(this.focus.item.value)
          break
      }
    }
  }
}
