import { watch } from 'vue'
import { EventItem, isDomRuntime, ListData } from '@dxt-ui/functional'

import { WindowInclude } from '../Window'
import { MenuOpen } from './MenuOpen'
import { MenuFocus } from './MenuFocus'
import { MenuSearch } from './MenuSearch'

/**
 * Class for managing the menu.
 *
 * Класс для управления меню.
 */
export class MenuControl {
  protected readonly event: EventItem<HTMLElement, any>

  /**
   * Constructor
   * @param data object of the class for working with the list/ объект класса для работы со списком
   * @param open object of the class for working with the window opening state/ объект класса для работы со состоянием открытия окна
   * @param focus object of the class for working with focus/ объект класса для работы с фокусировкой
   * @param search class object for working with search/ объект класса для работы с поиском
   * @param window object for working with the window/ объект для работы с окном
   */
  constructor(
    protected readonly data: ListData,
    protected readonly open: MenuOpen,
    protected readonly focus: MenuFocus,
    protected readonly search: MenuSearch,
    protected readonly window: WindowInclude
  ) {
    this.event = new EventItem<HTMLElement, any>(
      isDomRuntime() ? document.body : undefined,
      ['keydown', 'keypress'],
      this.on
    )

    watch(
      this.open.item,
      () => this.toggle(this.open.item.value)
    )
  }

  /**
   * Changes the activity of the event.
   *
   * Изменяет активность события.
   * @param open opening status/ статус открытия
   */
  toggle(open: boolean) {
    this.event.toggle(open)

    if (!open) {
      this.resetActive()
    }
  }

  /**
   * Checks if the event target is not an input.
   *
   * Проверяет, не является ли цель события input.
   * @param target selected element/ выбранный элемент
   */
  protected isNotInput(target: HTMLElement): boolean {
    return ['INPUT', 'TEXTAREA'].indexOf(target.nodeName) === -1
      || Boolean(this.getActiveElement())
  }

  protected getActiveElement(): HTMLInputElement | undefined {
    if (isDomRuntime()) {
      const element = document.activeElement as HTMLInputElement

      if (
        element
        && element.dataset?.menuControl === '1'
      ) {
        return element
      }
    }

    return undefined
  }

  protected updateSearch(event: KeyboardEvent) {
    const element = this.getActiveElement()

    if (element) {
      requestAnimationFrame(() => this.search.set(element.value))
    } else {
      this.search.add(event.key)
    }
  }

  /**
   * Resets events for the secondary element.
   *
   * Сбрасывает события для вторичного элемента.
   */
  protected resetActive() {
    this.getActiveElement()?.blur()
  }

  /**
   * Method for tracking keys when a window is open.
   *
   * Метод для отслеживания нажатий при открытом окне.
   * @param event event object/ объект события
   */
  protected readonly on = (event: KeyboardEvent) => {
    if (
      this.isNotInput(event.target as HTMLElement)
      && this.open.isFocus()
      && this.data.getLength()
    ) {
      if (event.type === 'keypress') {
        this.updateSearch(event)
      } else {
        const key = event.code || event.key || (event as any).keyCode

        switch (key) {
          case 'Backspace':
          case 8:
            this.updateSearch(event)
            break
          case 'ArrowUp':
          case 38:
            event.preventDefault()
            this.focus.previous()
            break
          case 'ArrowDown':
          case 40:
            event.preventDefault()
            this.focus.next()
            break
          case 'Enter':
          case 'ArrowRight':
          case ' ':
          case 13:
          case 39:
            event.preventDefault()
            this.focus.click()
            break
          case 'Space':
          case 32:
            if (!this.getActiveElement()) {
              event.preventDefault()
              this.focus.click()
            }
            break
          case 'ArrowLeft':
          case 37:
            event.preventDefault()

            if (this.focus.isGroup()) {
              this.focus.click()
            } else {
              this.window.expose.setOpen(false).then()
            }

            break
        }
      }
    }
  }
}
