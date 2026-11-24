// ai-none

import type { Ref } from 'vue'
import {
  DesignLifecycleAbstract,
  getKey,
  getMouseClient,
  isDomRuntime,
  isFilled
} from '@dxtmisha/functional'

import type { EnabledInclude } from '../../classes/EnabledInclude'
import type { ModelValueInclude } from '../../classes/ModelValueInclude'
import type { ClockDialControl } from './ClockDialControl'
import type { ClockDialEmit } from './ClockDialEmit'
import type { ClockDialList } from './ClockDialList'
import type { ClockDialSelect } from './ClockDialSelect'
import type { ClockDialProps } from './props'

/**
 * Class for managing user pointer, touch, and keyboard interactions on the ClockDial component.
 *
 * Класс для управления взаимодействием пользователя с помощью указателя, касания и клавиатуры на компоненте ClockDial.
 */
export class ClockDialEvent extends DesignLifecycleAbstract {
  /** Flag indicating that value was modified during current drag session / Флаг, указывающий на изменение значения во время текущей сессии перетаскивания */
  protected isChanged = false

  /** Flag indicating active pointer drag interaction / Флаг активности взаимодействия перетаскивания */
  protected isDragging = false

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props component input properties / входные свойства компонента
   * @param element container element reference / ссылка на элемент контейнера
   * @param control clock dial keyboard and step control manager factory / фабрика менеджера управления клавиатурой и шагами циферблата часов
   * @param emit event emission manager factory / фабрика менеджера эмита событий
   * @param enabled enabled state helper factory / фабрика помощника состояния активности
   * @param list clock dial list manager factory / фабрика менеджера списка циферблата часов
   * @param model model value helper factory / фабрика помощника значения модели
   * @param select coordinate hit-testing selector factory / фабрика селектора проверки попадания координат
   */
  constructor(
    protected readonly props: Readonly<ClockDialProps>,
    protected readonly element: Readonly<Ref<HTMLElement | undefined>>,
    protected readonly control: () => ClockDialControl,
    protected readonly emit: () => ClockDialEmit,
    protected readonly enabled: () => EnabledInclude,
    protected readonly list: () => ClockDialList,
    protected readonly model: () => ModelValueInclude<number>,
    protected readonly select: () => ClockDialSelect
  ) {
    super()
  }

  /**
   * Checks if interactive event handling is enabled for current props.
   *
   * Проверяет, включена ли интерактивная обработка событий для текущих свойств.
   * @param props component input properties / входные свойства компонента
   * @returns true if event handling is enabled / true, если обработка событий активна
   */
  static is(props?: Readonly<ClockDialProps>): boolean {
    return !props?.clock
  }

  /**
   * Cleanup lifecycle listeners and drag state on unmount.
   *
   * Очищает слушатели жизненного цикла и состояние перетаскивания при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.isDragging = false
    this.isChanged = false
    this.stopListeners()
  }

  /**
   * Click event handler on a clock dial mark element.
   *
   * Обработчик события клика по элементу метки циферблата часов.
   * @param event native mouse event / нативное событие мыши
   */
  readonly onClick = (event: MouseEvent): void => {
    if (
      !this.enabled().isEnabled
      || this.props.clock
    ) {
      return
    }

    this.element.value?.focus()

    const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-value]')
    const rawValue = target?.dataset?.value

    if (isFilled(rawValue)) {
      const value = Number(rawValue)

      if (!Number.isNaN(value)) {
        const mark = this.list().find(value)

        if (mark && !mark.disabled) {
          const emit = this.emit()

          this.model().set(value)
          emit.emit('input')
          emit.emit('change')
        }
      }
    }
  }

  /**
   * Keyboard keydown event listener on focused clock dial.
   * Handles arrow keys navigation (ArrowUp, ArrowDown, ArrowLeft, ArrowRight) and Home/End.
   *
   * Слушатель события нажатия клавиш клавиатуры на сфокусированном циферблате часов.
   * Обрабатывает навигацию стрелками (ArrowUp, ArrowDown, ArrowLeft, ArrowRight) и Home/End.
   * @param event native keyboard event / нативное событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    if (
      event.isComposing
      || !this.enabled().isEnabled
      || this.props.clock
    ) {
      return
    }

    const key = getKey(event)

    switch (key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault()
        this.control().increase()
        break
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault()
        this.control().decrease()
        break
      case 'Home':
        event.preventDefault()
        this.control().toEdge(false)
        break
      case 'End':
        event.preventDefault()
        this.control().toEdge(true)
        break
    }
  }

  /**
   * Start drag event listener for mouse and touch on the interactive censor area.
   *
   * Слушатель события начала перетаскивания для мыши и касания на интерактивной области цензора.
   * @param event native mouse or touch event / нативное событие мыши или касания
   */
  readonly onStart = (event: MouseEvent | TouchEvent): void => {
    if (
      !this.enabled().isEnabled
      || this.props.clock
      || ('button' in event && event.button !== 0)
    ) {
      return
    }

    this.element.value?.focus()

    if (event.cancelable !== false) {
      event.preventDefault()
    }

    this.isDragging = true
    this.isChanged = false

    this.updateByCoordinates(event)
    this.startListeners()
  }

  /**
   * Global pointer up/end/cancel/blur event listener completing drag session.
   *
   * Глобальный слушатель завершения или отмены взаимодействия указателя.
   */
  protected readonly onPointerEnd = (): void => {
    if (this.isDragging) {
      this.isDragging = false
      this.stopListeners()

      if (this.isChanged) {
        this.emit().emit('change')
        this.isChanged = false
      }
    }
  }

  /**
   * Global pointer move event listener during drag.
   *
   * Глобальный слушатель перемещения указателя во время перетаскивания.
   * @param event mouse or touch event / событие мыши или касания
   */
  protected readonly onPointerMove = (event: MouseEvent | TouchEvent): void => {
    if (this.isDragging) {
      this.updateByCoordinates(event)
    }
  }

  /**
   * Attaches window-level event listeners for smooth drag tracking and cancellation cleanup.
   *
   * Прикрепляет слушатели событий на уровне окна для плавного отслеживания перетаскивания и очистки при отмене.
   */
  protected startListeners(): void {
    if (!isDomRuntime()) {
      return
    }

    window.addEventListener('mousemove', this.onPointerMove)
    window.addEventListener('mouseup', this.onPointerEnd)
    window.addEventListener('touchmove', this.onPointerMove, { passive: false })
    window.addEventListener('touchend', this.onPointerEnd)
    window.addEventListener('touchcancel', this.onPointerEnd)
    window.addEventListener('pointercancel', this.onPointerEnd)
    window.addEventListener('blur', this.onPointerEnd)
  }

  /**
   * Detaches window-level event listeners.
   *
   * Удаляет слушатели событий на уровне окна.
   */
  protected stopListeners(): void {
    if (!isDomRuntime()) {
      return
    }

    window.removeEventListener('mousemove', this.onPointerMove)
    window.removeEventListener('mouseup', this.onPointerEnd)
    window.removeEventListener('touchmove', this.onPointerMove)
    window.removeEventListener('touchend', this.onPointerEnd)
    window.removeEventListener('touchcancel', this.onPointerEnd)
    window.removeEventListener('pointercancel', this.onPointerEnd)
    window.removeEventListener('blur', this.onPointerEnd)
  }

  /**
   * Updates selected clock value and emits input event by pointer event coordinates.
   *
   * Обновляет выбранное значение часов и генерирует событие input по координатам события указателя.
   * @param event native mouse or touch event / нативное событие мыши или касания
   */
  protected updateByCoordinates(event: MouseEvent | TouchEvent): void {
    const { x, y } = getMouseClient(event)
    const selectedItem = this.select().selectByCoordinates(x, y)

    if (selectedItem) {
      this.isChanged = true
      this.emit().emit('input')
    }
  }
}
