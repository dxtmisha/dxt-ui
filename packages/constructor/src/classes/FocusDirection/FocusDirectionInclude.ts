import { watch, type WatchStopHandle } from 'vue'
import {
  type ConstrBind,
  DesignLifecycleAbstract,
  EventItem,
  executeFunction,
  type FunctionOr,
  isEnter,
  isFunction,
  isMetaKey,
  type RefOrNormalOrFunction
} from '@dxtmisha/functional'
import { isArrow } from '@dxtmisha/functional-basic'
import { FocusDirectionActive } from './FocusDirectionActive'
import { FocusDirectionCoordinates } from './FocusDirectionCoordinates'

/**
 * Class for managing directional focus navigation on child elements via keyboard arrow keys,
 * while keeping actual browser focus on the parent element.
 *
 * Класс для управления направленной навигацией фокуса по дочерним элементам с помощью клавиш со стрелками,
 * сохраняя фактический фокус браузера на родительском элементе.
 */
export class FocusDirectionInclude<E extends HTMLElement = HTMLElement> extends DesignLifecycleAbstract {
  /** Active descendant state manager / Менеджер состояния активного потомка */
  protected readonly active: FocusDirectionActive<E>

  /** Spatial coordinates calculator / Калькулятор пространственных координат */
  protected readonly coordinates: FocusDirectionCoordinates<E>

  /** Reactive control watcher stop handle / Функция остановки реактивного наблюдателя control */
  protected controlWatch?: WatchStopHandle

  /** Event item for keydown event / Элемент события для события нажатия клавиши */
  protected keydownEvent?: EventItem<HTMLElement, KeyboardEvent>

  /**
   * Constructor for FocusDirectionInclude.
   *
   * Конструктор для FocusDirectionInclude.
   * @param element reference or getter for the parent element / ссылка или геттер родительского элемента
   * @param selector selector for elements participating in focus / селектор элементов, участвующих в фокусировке
   * @param activeSelector selector for default element to receive focus / селектор элемента, получающего фокус по умолчанию
   * @param activeClass CSS class name indicating that element is focused / имя CSS-класса для указания, что элемент сейчас в фокусе
   * @param control whether focus navigation is enabled / включено ли управление навигацией фокуса
   */
  constructor(
    protected readonly element: RefOrNormalOrFunction<E | undefined>,
    protected readonly selector: string = '.sys-focusDirection__item',
    protected readonly activeSelector: string = '.sys-focusDirection__item--active',
    protected readonly activeClass: string = 'sys-focusDirection__item--active',
    protected readonly control: FunctionOr<boolean | undefined> = true
  ) {
    super()

    this.active = new FocusDirectionActive(
      element,
      selector,
      activeSelector,
      activeClass
    )
    this.coordinates = new FocusDirectionCoordinates(
      this.active,
      selector
    )
  }

  /**
   * Returns binding properties for the parent focus container element.
   *
   * Возвращает свойства привязки для родительского элемента контейнера фокуса.
   * @returns binding properties object / объект свойств привязки
   */
  get binds(): ConstrBind {
    if (!this.is()) {
      return {}
    }

    return {
      tabindex: 0,
      ...this.active.aria,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }
  }

  /**
   * Checks whether directional navigation control is enabled.
   *
   * Проверяет, включено ли управление направленной навигацией.
   * @returns true if control is enabled / true, если управление включено
   */
  is(): boolean {
    return Boolean(executeFunction(this.control))
  }

  /**
   * Returns the active descendant state manager instance.
   *
   * Возвращает экземпляр менеджера состояния активного потомка.
   * @returns FocusDirectionActive instance / экземпляр FocusDirectionActive
   */
  getActive(): FocusDirectionActive<E> {
    return this.active
  }

  /**
   * Returns the spatial coordinates calculator instance.
   *
   * Возвращает экземпляр калькулятора пространственных координат.
   * @returns FocusDirectionCoordinates instance / экземпляр FocusDirectionCoordinates
   */
  getCoordinates(): FocusDirectionCoordinates<E> {
    return this.coordinates
  }

  /**
   * Returns binding properties for a child item element to disable direct tab focus.
   *
   * Возвращает свойства привязки для дочернего элемента для запрета прямого фокуса.
   * @param extra additional properties / дополнительные свойства
   * @returns binding properties for child element / свойства привязки для дочернего элемента
   */
  bindsItem(extra?: ConstrBind): ConstrBind {
    if (this.is()) {
      return {
        ...extra,
        tabindex: extra?.tabindex ?? -1
      }
    }

    return {
      ...extra
    }
  }

  /**
   * Handler for focus event on the container element.
   *
   * Обработчик события фокуса на элементе контейнера.
   */
  readonly onFocus = (): void => {
    if (!this.is()) {
      return
    }

    this.active.initDefault()
    this.start()
  }

  /**
   * Handler for blur event on the container element.
   *
   * Обработчик события потери фокуса на элементе контейнера.
   */
  readonly onBlur = (): void => {
    this.stop()
    this.active.clear()
  }

  /**
   * Cleanup lifecycle listeners and active reference on unmount.
   *
   * Очистка слушателей жизненного цикла и активной ссылки при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stop()
  }

  /**
   * Moves focus to the nearest element in the given direction,
   * or activates the default element if no active element is currently present.
   *
   * Перемещает фокус на ближайший элемент в указанном направлении
   * или активирует элемент по умолчанию, если активный элемент отсутствует.
   * @param direction keyboard arrow key direction / направление стрелки клавиатуры
   */
  protected move(direction: string): void {
    if (!this.active.get()) {
      this.active.initDefault()
      return
    }

    const bestCandidate = this.coordinates.findNearest(direction)

    if (bestCandidate) {
      this.active.set(bestCandidate)

      if (isFunction(bestCandidate.scrollIntoView)) {
        bestCandidate.scrollIntoView({ block: 'nearest', inline: 'nearest' })
      }
    }
  }

  /**
   * Handler for keydown event.
   *
   * Обработчик для события нажатия клавиши.
   * @param event keyboard event object / объект события клавиатуры
   */
  protected readonly onKeydown = (event: KeyboardEvent): void => {
    if (!this.is()) {
      this.onBlur()
      return
    }

    if (
      event.isComposing
      || isMetaKey(event)
    ) {
      return
    }

    const key = event.key

    if (isArrow(key)) {
      event.preventDefault()
      this.move(key)
    } else if (isEnter(event)) {
      const activeElement = this.active.get()

      if (activeElement) {
        event.preventDefault()
        activeElement.click()
      }
    }
  }

  /**
   * Starts event listeners and reactive control watcher.
   *
   * Запускает слушатели событий и реактивный наблюдатель свойства control.
   */
  protected start(): void {
    this.stopEvent()
    this.stopWatch()

    const container = this.active.getElement()

    if (
      !container
      || !this.is()
    ) {
      return
    }

    this.keydownEvent = new EventItem<HTMLElement, KeyboardEvent>(container, 'keydown', this.onKeydown)
    this.keydownEvent.start()
    this.startWatch()
  }

  /**
   * Starts a reactive watcher on the control getter to clean up focus state immediately when disabled.
   *
   * Запускает реактивный наблюдатель за геттером control для немедленной очистки состояния фокуса при отключении.
   */
  protected startWatch(): void {
    if (!isFunction(this.control)) {
      return
    }

    this.controlWatch = watch(
      () => this.is(),
      (enabled) => {
        if (!enabled) {
          this.onBlur()
        }
      },
      { flush: 'sync' }
    )
  }

  /**
   * Stops event listeners, control watcher, and releases cached active element reference.
   *
   * Останавливает слушатели событий, наблюдатель control и освобождает кэшированную ссылку на активный элемент.
   */
  protected stop(): void {
    this.stopEvent()
    this.stopWatch()
    this.active.reset()
  }

  /**
   * Stops and clears the keydown event listener.
   *
   * Останавливает и очищает слушатель события нажатия клавиши.
   */
  protected stopEvent(): void {
    this.keydownEvent?.stop()
    this.keydownEvent = undefined
  }

  /**
   * Stops and clears the reactive control watcher.
   *
   * Останавливает и очищает реактивный наблюдатель свойства control.
   */
  protected stopWatch(): void {
    this.controlWatch?.()
    this.controlWatch = undefined
  }
}
