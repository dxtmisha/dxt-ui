import { onUnmounted } from 'vue'
import { getMouseClient } from '@dxtmisha/functional'

import type { EnabledInclude } from '../../classes/EnabledInclude'
import type { ModelValueInclude } from '../../classes/ModelValueInclude'
import type { ClockDialEmit } from './ClockDialEmit'
import type { ClockDialSelect } from './ClockDialSelect'
import type { ClockDialProps } from './props'

/**
 * Class for managing user pointer and touch interactions on the ClockDial component.
 *
 * Класс для управления взаимодействием пользователя с помощью указателя и касания на компоненте ClockDial.
 */
export class ClockDialEvent {
  /** Flag indicating that value was modified during current drag session / Флаг, указывающий на изменение значения во время текущей сессии перетаскивания */
  protected isChanged = false

  /** Flag indicating active pointer drag interaction / Флаг активности взаимодействия перетаскивания */
  protected isDragging = false

  /**
   * Constructor
   * @param props component input properties / входные свойства компонента
   * @param emitsItem event emission manager / менеджер эмита событий
   * @param enabled enabled state helper instance / экземпляр помощника состояния активности
   * @param model model value helper instance / экземпляр помощника значения модели
   * @param select coordinate hit-testing selector / селектор проверки попадания координат
   */
  constructor(
    protected readonly props: ClockDialProps,
    protected readonly emitsItem: ClockDialEmit,
    protected readonly enabled: EnabledInclude,
    protected readonly model: ModelValueInclude<number>,
    protected readonly select: ClockDialSelect
  ) {
    onUnmounted(() => {
      this.stopListeners()
    })
  }

  /**
   * Click event handler on a clock dial mark element.
   *
   * Обработчик события клика по элементу метки циферблата часов.
   * @param event native mouse event / нативное событие мыши
   */
  readonly onClick = (event: MouseEvent): void => {
    if (!this.enabled.isEnabled) {
      return
    }

    const target = (event.target as HTMLElement)?.closest<HTMLElement>('[data-value]')

    if (target?.dataset?.value !== undefined) {
      const value = Number(target.dataset.value)

      if (!isNaN(value)) {
        this.model.set(value)
        this.emitsItem.emit('input', value)
        this.emitsItem.emit('change', value)
      }
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
      !this.enabled.isEnabled
      || ('button' in event && event.button !== 0)
    ) {
      return
    }

    event.preventDefault()
    this.isDragging = true
    this.isChanged = false

    this.updateByCoordinates(event)
    this.startListeners()
  }

  /**
   * Global pointer up/end event listener completing drag session.
   *
   * Глобальный слушатель завершения взаимодействия указателя.
   */
  protected readonly onPointerEnd = (): void => {
    if (this.isDragging) {
      this.isDragging = false
      this.stopListeners()

      if (this.isChanged) {
        this.emitsItem.emit('change')
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
   * Attaches window-level event listeners for smooth drag tracking.
   *
   * Прикрепляет слушатели событий на уровне окна для плавного отслеживания перетаскивания.
   */
  protected startListeners(): void {
    window.addEventListener('mousemove', this.onPointerMove)
    window.addEventListener('mouseup', this.onPointerEnd)
    window.addEventListener('touchmove', this.onPointerMove, { passive: false })
    window.addEventListener('touchend', this.onPointerEnd)
    window.addEventListener('touchcancel', this.onPointerEnd)
  }

  /**
   * Detaches window-level event listeners.
   *
   * Удаляет слушатели событий на уровне окна.
   */
  protected stopListeners(): void {
    window.removeEventListener('mousemove', this.onPointerMove)
    window.removeEventListener('mouseup', this.onPointerEnd)
    window.removeEventListener('touchmove', this.onPointerMove)
    window.removeEventListener('touchend', this.onPointerEnd)
    window.removeEventListener('touchcancel', this.onPointerEnd)
  }

  /**
   * Updates selected clock value and emits input event by pointer event coordinates.
   *
   * Обновляет выбранное значение часов и генерирует событие input по координатам события указателя.
   * @param event native mouse or touch event / нативное событие мыши или касания
   */
  protected updateByCoordinates(event: MouseEvent | TouchEvent): void {
    const { x, y } = getMouseClient(event)
    const selectedItem = this.select.selectByCoordinates(x, y)

    if (selectedItem) {
      this.isChanged = true
      this.emitsItem.emit('input')
    }
  }
}
