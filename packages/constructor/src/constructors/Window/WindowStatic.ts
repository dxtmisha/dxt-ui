import { ref, type ToRefs, watch } from 'vue'
import { EventItem, setRef } from '@dxtmisha/functional'

import { WindowElement } from './WindowElement'

import { __WINDOW_TYPE_BODY_NAME } from './basicTypes'
import type { WindowProps } from './props'

/**
 * Class for working with a static window.
 *
 * Класс для работы со статичным окном.
 */
export class WindowStatic {
  protected event?: EventItem<Window, Event>

  readonly item = ref<boolean>(false)

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(
    protected readonly props: WindowProps,
    refs: ToRefs<WindowProps>,
    protected readonly element: WindowElement
  ) {
    watch([refs.staticMode], this.make, { immediate: true })
  }

  /**
   * Checks if the static mode is enabled.
   *
   * Проверяет, включен ли режим статичности.
   */
  isStaticMod(): boolean {
    return Boolean(this.props.staticMode)
  }

  /**
   * Starts the status tracking event.
   *
   * Стартует событие слежения за статусами.
   */
  start(): void {
    if (!this.event) {
      this.event = new EventItem(window, ['resize'], this.listener)
    }

    this.event.start()
  }

  /**
   * Restores the data to its previous state.
   *
   * Восстанавливает данные в прежнее состояние.
   */
  stop(): void {
    if (this.event) {
      this.event.stop()
      this.event = undefined
    }
  }

  /**
   * Checks if the static window is active.
   *
   * Проверяет, активно ли статичное окно.
   */
  protected isStatic(): boolean {
    const element = this.element.getMain()

    return Boolean(
      element
      && getComputedStyle(element)
        .getPropertyValue(__WINDOW_TYPE_BODY_NAME) === '"--STATIC--"'
    )
  }

  /**
   * The function called when an event is triggered.
   *
   * Вызываемая функция при срабатывании события.
   */
  protected readonly listener = (): void => {
    setRef(this.item, this.isStatic())
  }

  /**
   * Performs status check and activates events when turned on.
   *
   * Выполняет проверку статуса и активизирует события при включении.
   */
  protected readonly make = (): void => {
    if (this.isStaticMod()) {
      this.start()
      requestAnimationFrame(this.listener)
    } else {
      this.stop()
    }
  }
}
