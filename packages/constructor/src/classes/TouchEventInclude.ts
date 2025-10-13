import { ref, type Ref } from 'vue'
import { executePromise } from '@dxtmisha/functional'

import type {
  TouchEventCallback,
  TouchEventClient,
  TouchEventTypeX,
  TouchEventTypeY
} from '../types/touchEventTypes'

const MAX_MOVE = 80

/**
 * Class for handling touch and mouse events with gesture detection.
 *
 * Класс для обработки событий касания и мыши с определением жестов.
 */
export class TouchEventInclude {
  /**
   * Current touch point
   *
   * Текущая точка касания
   */
  readonly touche = ref<Touch>()

  /**
   * Touchpoint during move
   *
   * Точка касания во время движения
   */
  readonly toucheMove = ref<Touch>()

  /**
   * Current mouse position
   *
   * Текущая позиция мыши
   */
  readonly mouse = ref<TouchEventClient>()

  /**
   * Mouse position during move
   *
   * Позиция мыши во время движения
   */
  readonly mouseMove = ref<TouchEventClient>()

  /**
   * Constructor
   * @param start callback on touch/mouse start/ колбэк при начале касания/клика
   * @param move callback on touch/mouse move/ колбэк при движении
   * @param end callback on touch/mouse end/ колбэк при завершении
   * @param element optional element reference/ необязательная ссылка на элемент
   */
  constructor(
    private readonly start?: (mouse: TouchEventClient, touche?: Touch) => void,
    private readonly move?: TouchEventCallback,
    private readonly end?: TouchEventCallback,
    private readonly element?: Ref<HTMLElement | undefined>
  ) {
  }

  /**
   * Touch event handlers
   *
   * Обработчики событий касания
   */
  readonly onTouch = {
    onTouchstart: (event: TouchEvent) => {
      this.touche.value = event.targetTouches?.[0]
      this.mouse.value = {
        x: this.touche.value?.clientX ?? 0,
        y: this.touche.value?.clientY ?? 0
      }

      this.update(event.target as HTMLElement)
    },
    onTouchend: (event: TouchEvent) => this.reset(event.target as HTMLElement),
    onTouchcancel: (event: TouchEvent) => this.reset(event.target as HTMLElement),
    onTouchmove: (event: TouchEvent) => {
      this.toucheMove.value = event.targetTouches?.[0]
      this.mouseMove.value = {
        x: this.toucheMove.value?.clientX ?? 0,
        y: this.toucheMove.value?.clientY ?? 0
      }

      this.updateMove(event.target as HTMLElement)
    }
  }

  /**
   * Mouse event handlers
   *
   * Обработчики событий мыши
   */
  readonly onMouse = {
    onMousedown: (event: MouseEvent) => {
      this.mouse.value = {
        x: event.clientX,
        y: event.clientY
      }

      this.update(event.target as HTMLElement)
    },
    onMouseup: (event: MouseEvent) => this.reset(event.target as HTMLElement),
    onMousemove: (event: MouseEvent) => {
      this.mouseMove.value = {
        x: event.clientX,
        y: event.clientY
      }

      this.updateMove(event.target as HTMLElement)
    }
  }

  /**
   * Gets the target element for touch events.
   *
   * Получает целевой элемент для событий касания.
   * @param target event target element/ целевой элемент события
   */
  private getElement(target: HTMLElement) {
    return this.element?.value ?? target.closest<HTMLElement>('[data-touch]')
  }

  /**
   * Determines horizontal direction type from client X coordinate.
   *
   * Определяет тип горизонтального направления из координаты X.
   * @param clientX horizontal coordinate/ горизонтальная координата
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
   * @param clientY vertical coordinate/ вертикальная координата
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
   * @param callback callback function/ функция обратного вызова
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
   * Сбрасывает состояние касания/мыши и CSS свойства после завершения взаимодействия.
   * @param target selected item/ выбранный элемент
   */
  private reset(target: HTMLElement) {
    const elementValue = this.getElement(target)

    this
      .callback(this.end)
      .then((client) => {
        if (elementValue) {
          if (client) {
            this.resetData(elementValue)
          } else {
            setTimeout(() => this.resetData(elementValue), 400)
          }
        }
      })
  }

  /**
   * Resets all touch/mouse state and removes CSS custom properties.
   *
   * Сбрасывает все состояния касания/мыши и удаляет CSS кастомные свойства.
   * @param elementValue target element/ целевой элемент
   */
  private resetData(elementValue: HTMLElement) {
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
   * Обновляет начальную позицию касания/мыши и устанавливает CSS кастомные свойства.
   * @param target selected item/ выбранный элемент
   */
  private update(target: HTMLElement) {
    const elementValue = this.getElement(target)
    const toucheValue = this.mouse.value

    if (
      elementValue
      && toucheValue
    ) {
      elementValue.style.setProperty('--sys-touch-start-x', `${toucheValue.x}px`)
      elementValue.style.setProperty('--sys-touch-start-y', `${toucheValue.y}px`)

      executePromise(this.start?.(toucheValue, this.touche.value)).then()
    }
  }

  /**
   * Updates touch/mouse position during movement and sets CSS custom properties.
   *
   * Обновляет позицию касания/мыши во время движения и устанавливает CSS кастомные свойства.
   * @param target selected item/ выбранный элемент
   */
  private updateMove(target: HTMLElement) {
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
  }
}
