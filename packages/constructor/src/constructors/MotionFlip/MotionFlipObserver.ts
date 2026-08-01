import { onMounted, onUnmounted, watch } from 'vue'

import type { MotionFlipAction } from './MotionFlipAction'
import type { MotionFlipElement } from './MotionFlipElement'
import type { MotionFlipItems } from './MotionFlipItems'
import type { MotionFlipProps } from './props'

/**
 * Class for managing DOM mutation observations to auto-trigger FLIP animations.
 *
 * Класс для управления наблюдением за изменениями DOM для автоматического запуска FLIP-анимаций.
 */
export class MotionFlipObserver {
  /** Mutation observer instance / Экземпляр наблюдателя за мутациями */
  protected observer?: MutationObserver

  /**
   * Constructor
   * @param props input data / входные данные
   * @param action action controller / контроллер действий
   * @param elementManager element manager / менеджер элемента
   * @param items item list controller / контроллер списка элементов
   */
  constructor(
    protected readonly props: MotionFlipProps,
    protected readonly action: MotionFlipAction,
    protected readonly elementManager: MotionFlipElement,
    protected readonly items: MotionFlipItems
  ) {
    onMounted(() => {
      watch(
        [
          () => this.props.auto,
          () => this.elementManager.getElement()
        ],
        () => {
          this.update()
        },
        { immediate: true }
      )
    })

    onUnmounted(() => {
      this.stop()
    })
  }

  /**
   * Updates observer state based on auto property and element availability.
   *
   * Обновляет состояние наблюдателя в зависимости от свойства auto и доступности элемента.
   */
  protected update(): void {
    if (this.props.auto) {
      this.start()
    } else {
      this.stop()
    }
  }

  /**
   * Mutation event handler for DOM changes.
   *
   * Обработчик событий мутации для изменений DOM.
   */
  protected readonly onMutation = (): void => {
    if (this.action.isEnable()) {
      this.action.go()
      this.takeRecords()
    }
  }

  /**
   * Starts DOM mutation observation on target element.
   *
   * Запускает наблюдение за мутациями DOM на целевом элементе.
   */
  protected start(): void {
    const element = this.elementManager.getElement()

    if (element) {
      this.stop()
      this.items.init()

      this.observer = new MutationObserver(this.onMutation)
      this.observer.observe(element, {
        childList: true
      })
    }
  }

  /**
   * Stops DOM mutation observation.
   *
   * Останавливает наблюдение за мутациями DOM.
   */
  protected stop(): void {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = undefined
    }
  }

  /**
   * Drains and discards any pending mutation records from the observer.
   *
   * Извлекает и сбрасывает все ожидающие записи мутаций из наблюдателя.
   */
  protected takeRecords(): void {
    this.observer?.takeRecords()
  }
}
