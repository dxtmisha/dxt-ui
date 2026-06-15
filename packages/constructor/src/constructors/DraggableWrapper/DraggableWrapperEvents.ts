import type { DraggableWrapperProps } from './props.ts'

/**
 * Class managing draggable event validation and filters.
 *
 * Класс, управляющий валидацией и фильтрами событий перетаскивания.
 */
export class DraggableWrapperEvents {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: DraggableWrapperProps
  ) {
  }

  /**
   * Checks if the event is a drag end event.
   *
   * Проверяет, является ли событие событием окончания перетаскивания.
   * @param event event object / объект события
   * @returns check result / результат проверки
   */
  isEnd(event: Event): boolean {
    return ['mouseup', 'contextmenu', 'touchend', 'touchcancel'].includes(event.type)
  }

  /**
   * Checks if no mouse buttons are pressed during a mouse event.
   *
   * Проверяет, не нажата ли ни одна кнопка мыши во время события мыши.
   * @param event event object / объект события
   * @returns check result / результат проверки
   */
  isNoButtons(event: Event): boolean {
    return event instanceof MouseEvent && event.buttons === 0
  }
}
