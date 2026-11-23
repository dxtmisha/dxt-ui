import { ref, type Ref } from 'vue'
import { executePromise } from '@dxtmisha/functional'

import type {
  TouchEventCallback,
  TouchEventClient,
  TouchEventTypeX,
  TouchEventTypeY
} from '../types/touchEventTypes'

/** Distance threshold in pixels for directional swipe detection / Порог смещения в пикселях для определения направления свайпа */
const MAX_MOVE = 80

/** Delay in milliseconds before resetting CSS touch variables when end callback returns false / Задержка в миллисекундах перед сбросом CSS-переменных касания при возврате false из end-колбэка */
const RESET_DELAY_MS = 400

/**
 * Class for handling touch and mouse events with gesture detection.
 *
 * Класс для обработки событий касания и мыши с определением жестов.
 */
export class TouchEventInclude {
  /** Pending reset timer identifier / Идентификатор отложенного таймера сброса */
  private resetTimer?: ReturnType<typeof setTimeout>

  /**
   * Constructor.
   *
   * Конструктор.
   * @param start callback on touch/mouse start / колбэк при начале касания/клика
   * @param move callback on touch/mouse move / колбэк при движении
   * @param end callback on touch/mouse end / колбэк при завершении
   * @param element optional element reference / необязательная ссылка на элемент
   */
  constructor(
    private readonly start?: (mouse: TouchEventClient, touche?: Touch) => void,
    private readonly move?: TouchEventCallback,
    private readonly end?: TouchEventCallback,
    private readonly element?: Ref<HTMLElement | undefined>
  ) {
  }

  /**
   * Current touch point / Текущая точка касания
   */
  readonly touche = ref<Touch>()

  /**
   * Touchpoint during move / Точка касания во время движения
   */
  readonly toucheMove = ref<Touch>()

  /**
   * Current mouse position / Текущая позиция мыши
   */
  readonly mouse = ref<TouchEventClient>()

  /**
   * Mouse position during move / Позиция мыши во время движения
   */
  readonly mouseMove = ref<TouchEventClient>()

  /**
   * Touch event handlers / Обработчики событий касания
   */
  readonly onTouch = {
    onTouchstart: (event: TouchEvent): void => {
      this.touche.value = event.targetTouches?.[0]
      this.mouse.value = {
        x: this.touche.value?.clientX ?? 0,
        y: this.touche.value?.clientY ?? 0
      }

      this.update(event.target)
    },
    onTouchend: (event: TouchEvent): void => this.reset(event.target),
    onTouchcancel: (event: TouchEvent): void => this.reset(event.target),
    onTouchmove: (event: TouchEvent): void => {
      this.toucheMove.value = event.targetTouches?.[0]
      this.mouseMove.value = {
        x: this.toucheMove.value?.clientX ?? 0,
        y: this.toucheMove.value?.clientY ?? 0
      }

      this.updateMove(event.target)
    }
  }

  /**
   * Mouse event handlers / Обработчики событий мыши
   */
  readonly onMouse = {
    onMousedown: (event: MouseEvent): void => {
      this.mouse.value = {
        x: event.clientX,
        y: event.clientY
      }

      this.update(event.target)
    },
    onMouseup: (event: MouseEvent): void => this.reset(event.target),
    onMousemove: (event: MouseEvent): void => {
      this.mouseMove.value = {
        x: event.clientX,
        y: event.clientY
      }

      this.updateMove(event.target)
    }
  }

  /**
   * Clears any pending delayed reset timer.
   *
   * Очищает активный таймер отложенного сброса.
   */
  private clearResetTimer(): void {
    if (this.resetTimer !== undefined) {
      clearTimeout(this.resetTimer)
      this.resetTimer = undefined
    }
  }

  /**
   * Gets the target element for touch events.
   *
   * Получает целевой элемент для событий касания.
   * @param target event target / целевой объект события
   * @returns resolved HTML element or null / найденный HTML-элемент или null
   */
  private getElement(target: EventTarget | null): HTMLElement | null {
    if (this.element?.value) {
      return this.element.value
    }

    if (target instanceof HTMLElement) {
      return target.closest<HTMLElement>('[data-touch]')
    }

    return null
  }

  /**
   * Determines horizontal direction type from client X coordinate.
   *
   * Определяет тип горизонтального направления из координаты X.
   * @param clientX horizontal coordinate / горизонтальная координата
   * @returns horizontal direction / горизонтальное направление
   */
  private getTypeX(clientX: number): TouchEventTypeX {
    if (clientX >= MAX_MOVE) {
      return 'right'
    }

    if (clientX < -MAX_MOVE) {
      return 'left'
    }

    return 'none'
  }

  /**
   * Determines vertical direction type from client Y coordinate.
   *
   * Определяет тип вертикального направления из координаты Y.
   * @param clientY vertical coordinate / вертикальная координата
   * @returns vertical direction / вертикальное направление
   */
  private getTypeY(clientY: number): TouchEventTypeY {
    if (clientY >= MAX_MOVE) {
      return 'bottom'
    }

    if (clientY < -MAX_MOVE) {
      return 'top'
    }

    return 'none'
  }

  /**
   * Executes callback with calculated movement data.
   *
   * Выполняет колбэк с рассчитанными данными движения.
   * @param callback callback function / функция обратного вызова
   * @returns delta coordinates if allowed, otherwise undefined / смещение координат при разрешении или undefined
   */
  private async callback(callback?: TouchEventCallback): Promise<TouchEventClient | undefined> {
    const toucheValue = this.mouse.value
    const toucheMoveValue = this.mouseMove.value

    if (
      toucheValue
      && toucheMoveValue
    ) {
      const x = toucheMoveValue.x - toucheValue.x
      const y = toucheMoveValue.y - toucheValue.y

      if (
        !callback
        || await executePromise(callback(
          this.getTypeX(x),
          this.getTypeY(y),
          x,
          y,
          toucheValue,
          toucheMoveValue,
          this.touche.value,
          this.toucheMove.value
        ))
      ) {
        return {
          x,
          y
        }
      }
    }

    return undefined
  }

  /**
   * Resets touch/mouse state and CSS properties after interaction ends.
   *
   * Сбрасывает состояние касания/мыши и CSS-свойства после завершения взаимодействия.
   * @param target selected item / выбранный элемент
   */
  private reset(target: EventTarget | null): void {
    const elementValue = this.getElement(target)

    this
      .callback(this.end)
      .then((client) => {
        if (elementValue) {
          this.clearResetTimer()

          if (client) {
            this.resetData(elementValue)
          } else {
            this.resetTimer = setTimeout(() => {
              this.resetTimer = undefined
              this.resetData(elementValue)
            }, RESET_DELAY_MS)
          }
        }
      })
      .catch(() => {})
  }

  /**
   * Resets all touch/mouse state and removes CSS custom properties.
   *
   * Сбрасывает все состояния касания/мыши и удаляет CSS-переменные.
   * @param elementValue target element / целевой элемент
   */
  private resetData(elementValue: HTMLElement): void {
    this.clearResetTimer()

    this.touche.value = undefined
    this.toucheMove.value = undefined

    this.mouse.value = undefined
    this.mouseMove.value = undefined

    elementValue.style.removeProperty('--sys-touch-start-x')
    elementValue.style.removeProperty('--sys-touch-start-y')
    elementValue.style.removeProperty('--sys-touch-move-x')
    elementValue.style.removeProperty('--sys-touch-move-y')
  }

  /**
   * Updates initial touch/mouse position and sets CSS custom properties.
   *
   * Обновляет начальную позицию касания/мыши и устанавливает CSS-переменные.
   * @param target selected item / выбранный элемент
   */
  private update(target: EventTarget | null): void {
    const elementValue = this.getElement(target)
    const toucheValue = this.mouse.value

    if (
      elementValue
      && toucheValue
    ) {
      this.clearResetTimer()

      elementValue.style.setProperty('--sys-touch-start-x', `${toucheValue.x}px`)
      elementValue.style.setProperty('--sys-touch-start-y', `${toucheValue.y}px`)

      executePromise(this.start?.(toucheValue, this.touche.value)).catch(() => {})
    }
  }

  /**
   * Updates touch/mouse position during movement and sets CSS custom properties.
   *
   * Обновляет позицию касания/мыши во время движения и устанавливает CSS-переменные.
   * @param target selected item / выбранный элемент
   */
  private updateMove(target: EventTarget | null): void {
    const elementValue = this.getElement(target)

    this
      .callback(this.move)
      .then((client) => {
        if (
          elementValue
          && client
        ) {
          elementValue.style.setProperty('--sys-touch-move-x', `${client.x}px`)
          elementValue.style.setProperty('--sys-touch-move-y', `${client.y}px`)
        }
      })
      .catch(() => {})
  }
}
