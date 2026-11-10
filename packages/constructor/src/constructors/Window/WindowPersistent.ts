// ai-none

import { ref, watch, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import { WindowClassesData } from './WindowClassesData'
import { WindowElement } from './WindowElement'

import type { WindowProps } from './props'

/**
 * Class for managing the animation output before closing the window.
 *
 * Класс управления выводом анимации перед закрытием окна.
 */
export class WindowPersistent extends DesignLifecycleAbstract {
  readonly item = ref<boolean>(false)

  protected watchStop?: WatchStopHandle

  /**
   * Checks whether persistent functionality is active.
   *
   * Проверяет, активна ли функциональность постоянного окна.
   * @param props component properties / свойства компонента
   * @returns true if persistent is enabled / true, если постоянный режим включён
   */
  static is(props?: WindowProps): boolean {
    return Boolean(props?.persistent)
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param classes function returning class manager / функция, возвращающая менеджер классов
   * @param element function returning element manager / функция, возвращающая менеджер элементов
   */
  constructor(
    protected readonly props: WindowProps,
    protected readonly classes: () => WindowClassesData,
    protected readonly element: () => WindowElement
  ) {
    super()
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  override readonly onMounted = (): void => {
    this.watchStop?.()
    this.watchStop = watch(this.item, (value) => {
      const element = this.element().getMain()

      if (element) {
        if (value) {
          this.removeEvent()

          element.classList.add(this.classes().list.persistent)
          element.addEventListener('animationend', this.onTransitionend)
        } else {
          element.classList.remove(this.classes().list.persistent)
        }
      }
    })
  }

  /**
   * Cleanup lifecycle listeners on unmount.
   *
   * Очистка слушателей жизненного цикла при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.watchStop?.()
    this.watchStop = undefined
    this.removeEvent()
  }

  /**
   * Request to enable animation.
   *
   * Запрос на включение анимации.
   * @returns true if animation was enabled / true, если анимация была включена
   */
  on(): boolean {
    if (this.props.persistent) {
      this.item.value = true
      return true
    }

    return false
  }

  /**
   * Request to disable animation.
   *
   * Запрос на выключение анимации.
   * @returns this instance / текущий экземпляр
   */
  disabled(): this {
    if (this.item.value) {
      this.item.value = false
    }

    return this
  }

  /**
   * Event of the animation end of the closing prohibition.
   *
   * Событие окончания анимации запрета на закрытие.
   */
  protected readonly onTransitionend = (): void => {
    this.removeEvent()
    this.disabled()
  }

  /**
   * Removes the event of the end of the animation.
   *
   * Удаляет событие окончания анимации.
   */
  protected removeEvent(): void {
    this.element().getMain()
      ?.removeEventListener('animationend', this.onTransitionend)
  }
}
