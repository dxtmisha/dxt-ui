import { ref, watch } from 'vue'

import { WindowClasses } from './WindowClasses'
import { WindowElement } from './WindowElement'

import type { WindowProps } from './props'

/**
 * Class for managing the animation output before closing the window.
 *
 * Класс управления выводом анимации перед закрытием окна.
 */
export class WindowPersistent {
  readonly item = ref<boolean>(false)

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(
    protected readonly props: WindowProps,
    protected readonly classes: WindowClasses,
    protected readonly element: WindowElement
  ) {
    watch(this.item, (value) => {
      const element = this.element.getMain()

      if (element) {
        if (value) {
          this.removeEvent()

          element.classList.add(this.classes.list.persistent)
          element.addEventListener('animationend', this.onTransitionend)
        } else {
          element.classList.remove(this.classes.list.persistent)
        }
      }
    })
  }

  /**
   * Request to enable animation.
   *
   * Запрос на включение анимации.
   */
  on(): boolean {
    if (this.props.persistent) {
      this.item.value = true
      return true
    }

    return false
  }

  /**
   * Request to disable animation.
   *
   * Запрос на выключение анимации.
   */
  disabled(): this {
    if (this.item.value) {
      this.item.value = false
    }

    return this
  }

  /**
   * Event of the animation end of the closing prohibition.
   *
   * Событие окончания анимации запрета на закрытие.
   */
  protected readonly onTransitionend = (): void => {
    this.removeEvent()
    this.disabled()
  }

  /**
   * Removes the event of the end of the animation.
   *
   * Удаляет событие окончания анимации.
   */
  protected removeEvent() {
    this.element.getMain()
      ?.removeEventListener('animationend', this.onTransitionend)
  }
}
