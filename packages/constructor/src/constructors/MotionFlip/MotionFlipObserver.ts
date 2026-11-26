// ai-none

import { watch, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { MotionFlipAction } from './MotionFlipAction'
import type { MotionFlipElement } from './MotionFlipElement'
import type { MotionFlipItems } from './MotionFlipItems'
import type { MotionFlipProps } from './props'

/**
 * Class for managing DOM mutation observations to auto-trigger FLIP animations.
 *
 * Класс для управления наблюдением за изменениями DOM для автоматического запуска FLIP-анимаций.
 */
export class MotionFlipObserver extends DesignLifecycleAbstract {
  /** Mutation observer instance / Экземпляр наблюдателя за мутациями */
  protected observer?: MutationObserver

  /** Reactive watcher stop handle / Обработчик остановки реактивного наблюдателя */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor
   * @param props input data / входные данные
   * @param action action controller getter / геттер контроллера действий
   * @param elementManager element manager getter / геттер менеджера элемента
   * @param items item list controller getter / геттер контроллера списка элементов
   */
  constructor(
    protected readonly props: Readonly<MotionFlipProps>,
    protected readonly action: () => MotionFlipAction,
    protected readonly elementManager: () => MotionFlipElement,
    protected readonly items: () => MotionFlipItems
  ) {
    super()
  }

  /**
   * Checks whether automatic DOM mutation observation should be enabled.
   *
   * Проверяет, должно ли быть включено автоматическое наблюдение за мутациями DOM.
   * @param props component properties / свойства компонента
   * @returns true if automatic observation is active / true, если автоматическое наблюдение активно
   */
  static is(props?: MotionFlipProps): boolean {
    return Boolean(props?.auto && !props?.disabled)
  }

  /**
   * Starts mutation observation and reactive watchers when component mounts.
   *
   * Запускает наблюдение за мутациями и реактивные наблюдатели при монтировании компонента.
   */
  override readonly onMounted = (): void => {
    this.update()

    this.stopWatch?.()
    this.stopWatch = watch(
      [
        () => this.props.auto,
        () => this.props.disabled,
        () => this.elementManager().getElement()
      ],
      this.update
    )
  }

  /**
   * Disconnects mutation observer and stops watchers when component unmounts.
   *
   * Отключает наблюдатель мутаций и останавливает наблюдатели при размонтировании компонента.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
    this.stop()
  }

  /**
   * Updates observer state based on auto property, disabled state, and element availability.
   *
   * Обновляет состояние наблюдателя в зависимости от свойства auto, состояния disabled и доступности элемента.
   */
  protected readonly update = (): void => {
    if (MotionFlipObserver.is(this.props)) {
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
    const action = this.action()

    if (action.isEnable()) {
      action.go()
      this.takeRecords()
    }
  }

  /**
   * Starts DOM mutation observation on target element.
   *
   * Запускает наблюдение за мутациями DOM на целевом элементе.
   */
  protected start(): void {
    const element = this.elementManager().getElement()

    if (element && typeof MutationObserver !== 'undefined') {
      this.stop()
      this.items().init()

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
