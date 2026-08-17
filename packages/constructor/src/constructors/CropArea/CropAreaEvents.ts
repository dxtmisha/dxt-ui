import { getMouseClient, type ImageCoordinator } from '@dxtmisha/functional-basic'

import type { CropAreaClassesData } from './CropAreaClassesData'
import type { CropAreaEmit } from './CropAreaEmit'
import type { CropAreaPosition } from './CropAreaPosition'
import type { CropAreaCoordinator, CropAreaDirection } from './basicTypes'
import type { CropAreaProps } from './props'

/**
 * Class managing interaction drag events for CropArea.
 *
 * Класс, управляющий событиями перетаскивания и взаимодействия для CropArea.
 */
export class CropAreaEvents {
  /** Mouse start position / Начальная позиция мыши */
  protected startMouse: ImageCoordinator = { x: 0, y: 0 }

  /** Initial coordinator snapshot before drag / Снимок начальных координат перед перетаскиванием */
  protected startCoordinator: CropAreaCoordinator = [0, 0, 0, 0]

  /** Currently active drag direction / Текущее активное направление перетаскивания */
  protected activeDirection?: CropAreaDirection

  /** Bounding rectangle of the component / Ограничивающий прямоугольник компонента */
  protected rect?: DOMRect

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props component properties / свойства компонента
   * @param classes classes manager / менеджер классов
   * @param position position coordinator manager / менеджер координат позиции
   * @param emit emit manager / менеджер событий
   */
  constructor(
    protected readonly props: CropAreaProps,
    protected readonly classes: CropAreaClassesData,
    protected readonly position: CropAreaPosition,
    protected readonly emit: CropAreaEmit
  ) {
  }

  /**
   * Returns bound attributes for the element.
   *
   * Возвращает привязанные атрибуты для элемента.
   * @returns element binding properties / свойства привязки элемента
   */
  get binds() {
    return {
      onMousedown: this.onMousedown,
      onTouchstart: this.onMousedown
    }
  }

  /**
   * Checks if the event indicates interaction finish.
   *
   * Проверяет, указывает ли событие на завершение взаимодействия.
   * @param event event object / объект события
   * @returns true if finished / true, если завершено
   */
  isEnd(event: Event): boolean {
    return ['mouseup', 'contextmenu', 'touchend', 'touchcancel'].includes(event.type)
  }

  /**
   * Checks if no mouse buttons are pressed during mouse interaction.
   *
   * Проверяет, не нажата ли ни одна кнопка мыши во время взаимодействия.
   * @param event event object / объект события
   * @returns true if no buttons pressed / true, если кнопки не нажаты
   */
  isNoButtons(event: Event): boolean {
    return event instanceof MouseEvent && event.buttons === 0
  }

  /**
   * Start interaction event handler.
   *
   * Обработчик события начала взаимодействия.
   * @param event mouse or touch event / событие мыши или касания
   */
  readonly onMousedown = (event: MouseEvent | TouchEvent): void => {
    const target = event.target as HTMLElement | null
    const direction = target?.dataset?.value as CropAreaDirection | undefined

    if (direction && !this.position.isDirectionDisabled(direction)) {
      event.preventDefault()
      event.stopPropagation()

      this.activeDirection = direction
      this.rect = this.classes.rect
      this.startCoordinator = [...this.position.get()]
      this.startMouse = getMouseClient(event)

      this.classes.setBlockSelection(true)
      this.addListeners()
    }
  }

  /**
   * Movement interaction event handler.
   *
   * Обработчик события движения при взаимодействии.
   * @param event mouse or touch event / событие мыши или касания
   */
  readonly onMousemove = (event: MouseEvent | TouchEvent): void => {
    if (this.isEnd(event) || this.isNoButtons(event)) {
      event.preventDefault()
      event.stopPropagation()

      this.classes.setBlockSelection(false)
      this.removeListeners()
      this.activeDirection = undefined

      return
    }

    if (!this.activeDirection || !this.rect || this.rect.width === 0 || this.rect.height === 0) {
      return
    }

    event.stopPropagation()

    const currentMouse = getMouseClient(event)
    const deltaX = (100 / this.rect.width) * (currentMouse.x - this.startMouse.x)
    const deltaY = (100 / this.rect.height) * (currentMouse.y - this.startMouse.y)

    switch (this.activeDirection) {
      case 'top': {
        const updated = this.position.moveSingle('top', this.startCoordinator[0], deltaY)
        if (updated !== undefined) {
          this.emit.onResize('top', updated, this.position.get())
        }
        break
      }
      case 'right': {
        const updated = this.position.moveSingle('right', this.startCoordinator[1], -deltaX)
        if (updated !== undefined) {
          this.emit.onResize('right', updated, this.position.get())
        }
        break
      }
      case 'bottom': {
        const updated = this.position.moveSingle('bottom', this.startCoordinator[2], -deltaY)
        if (updated !== undefined) {
          this.emit.onResize('bottom', updated, this.position.get())
        }
        break
      }
      case 'left': {
        const updated = this.position.moveSingle('left', this.startCoordinator[3], deltaX)
        if (updated !== undefined) {
          this.emit.onResize('left', updated, this.position.get())
        }
        break
      }
      case 'right-top': {
        const updatedTop = this.position.moveSingle('top', this.startCoordinator[0], deltaY)
        const updatedRight = this.position.moveSingle('right', this.startCoordinator[1], -deltaX)
        this.emit.onResize('right-top', updatedTop ?? updatedRight ?? 0, this.position.get())
        break
      }
      case 'right-bottom': {
        const updatedBottom = this.position.moveSingle('bottom', this.startCoordinator[2], -deltaY)
        const updatedRight = this.position.moveSingle('right', this.startCoordinator[1], -deltaX)
        this.emit.onResize('right-bottom', updatedBottom ?? updatedRight ?? 0, this.position.get())
        break
      }
      case 'left-top': {
        const updatedTop = this.position.moveSingle('top', this.startCoordinator[0], deltaY)
        const updatedLeft = this.position.moveSingle('left', this.startCoordinator[3], deltaX)
        this.emit.onResize('left-top', updatedTop ?? updatedLeft ?? 0, this.position.get())
        break
      }
      case 'left-bottom': {
        const updatedBottom = this.position.moveSingle('bottom', this.startCoordinator[2], -deltaY)
        const updatedLeft = this.position.moveSingle('left', this.startCoordinator[3], deltaX)
        this.emit.onResize('left-bottom', updatedBottom ?? updatedLeft ?? 0, this.position.get())
        break
      }
      case 'center': {
        const coordinator = this.position.moveCenter(this.startCoordinator, deltaX, deltaY)
        this.emit.onResize('center', 0, coordinator)
        break
      }
    }
  }

  /**
   * Adds global event listeners.
   *
   * Добавляет глобальные слушатели событий.
   */
  protected addListeners(): void {
    window.addEventListener('mousemove', this.onMousemove)
    window.addEventListener('mouseup', this.onMousemove)
    window.addEventListener('contextmenu', this.onMousemove)
    window.addEventListener('touchmove', this.onMousemove, { passive: false })
    window.addEventListener('touchend', this.onMousemove, { passive: false })
    window.addEventListener('touchcancel', this.onMousemove, { passive: false })
  }

  /**
   * Removes global event listeners.
   *
   * Удаляет глобальные слушатели событий.
   */
  protected removeListeners(): void {
    window.removeEventListener('mousemove', this.onMousemove)
    window.removeEventListener('mouseup', this.onMousemove)
    window.removeEventListener('contextmenu', this.onMousemove)
    window.removeEventListener('touchmove', this.onMousemove)
    window.removeEventListener('touchend', this.onMousemove)
    window.removeEventListener('touchcancel', this.onMousemove)
  }
}
