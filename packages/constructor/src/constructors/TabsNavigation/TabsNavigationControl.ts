import { EventItem, eventStopPropagation, isDomRuntime, ListDataRef } from '@dxtmisha/functional'

import { TabsNavigationFocus } from './TabsNavigationFocus'
import { TabsNavigationSelected } from './TabsNavigationSelected'

/**
 * Class for managing tab navigation keyboard control and keyboard event listeners.
 *
 * Класс для управления контролем клавиатурной навигации вкладок и обработчиками клавиатурных событий.
 */
export class TabsNavigationControl {
  /** Reference to the keydown EventItem wrapper / Ссылка на обертку события EventItem для нажатия клавиш */
  protected event?: EventItem<HTMLElement, any>

  /**
   * Constructor for initializing keyboard control components.
   *
   * Конструктор для инициализации компонентов управления клавиатурой.
   * @param selected selection management helper / объект управления выделением
   * @param focus focus management helper / объект управления фокусом
   * @param data data list manager / объект менеджера списка данных
   */
  constructor(
    protected readonly selected: TabsNavigationSelected,
    protected readonly focus: TabsNavigationFocus,
    protected readonly data: ListDataRef
  ) {
  }

  /**
   * Returns event bindings for focus and blur for the tablist container.
   *
   * Возвращает привязки событий фокуса и потери фокуса для контейнера tablist.
   * @returns object containing focus and blur event handlers / объект с обработчиками событий focus и blur
   */
  get binds() {
    return {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }
  }

  /**
   * Returns the first item's index identifier in the list.
   *
   * Возвращает строковый идентификатор первого элемента в списке.
   * @returns first tab index or undefined / индекс первой вкладки или undefined
   */
  getFirstItem(): string | undefined {
    return this.data.getFirstItemByParent(undefined)?.index
  }

  /**
   * Handler for the focus event, initiates global keyboard event listener.
   *
   * Обработчик события фокуса, инициализирует глобальный слушатель событий клавиатуры.
   */
  readonly onFocus = () => {
    this.start()
  }

  /**
   * Handler for the blur event, stops and removes keyboard event listener.
   *
   * Обработчик события потери фокуса, останавливает и удаляет слушатель событий клавиатуры.
   */
  readonly onBlur = () => {
    this.stop()
  }

  /**
   * Returns the current focus index value or falls back to the first item index.
   *
   * Возвращает индекс текущего фокуса или индекс первого элемента в качестве альтернативы.
   * @returns current active focus index / индекс текущего активного фокуса
   */
  protected getFocus(): string | undefined {
    return this.focus.get() || this.getFirstItem()
  }

  /**
   * Starts the keyboard keydown event listener.
   *
   * Запускает прослушивание события keydown на клавиатуре.
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
   * Stops the keyboard keydown event listener and resets focus state.
   *
   * Останавливает прослушивание события keydown на клавиатуре и сбрасывает состояние фокуса.
   */
  protected stop() {
    if (this.event) {
      this.event.stop()
      this.event = undefined
      this.focus.reset()
    }
  }

  /**
   * Moves focus to the previous logical tab item.
   *
   * Перемещает фокус на предыдущую вкладку по логике списка.
   * @returns instance of this control class / текущий экземпляр класса управления
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
   * Moves focus to the next logical tab item.
   *
   * Перемещает фокус на следующую вкладку по логике списка.
   * @returns instance of this control class / текущий экземпляр класса управления
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
   * Callback handling keydown keyboard events for arrow keys, enter, and space.
   *
   * Обратный вызов, обрабатывающий события клавиатуры keydown для стрелок, ввода и пробела.
   * @param event native KeyboardEvent object / объект нативного события KeyboardEvent
   */
  protected readonly on = (event: KeyboardEvent) => {
    if (this.data.getLength()) {
      const item = this.data.getFocusItem()
      const key = event.code || event.key || (event as any).keyCode

      switch (key) {
        case 'ArrowLeft':
        case 'Left':
        case 37:
          eventStopPropagation(event)
          this.prev()
          break
        case 'ArrowRight':
        case 'Right':
        case 39:
          eventStopPropagation(event)
          this.next()
          break
        case 'Enter':
        case 13:
        case 'Space':
        case 'Spacebar':
        case ' ':
        case 32:
          event.preventDefault()

          if (
            item
            && !item.disabled
          ) {
            this.selected.set(item.index)
          }
          break
      }
    }
  }
}
