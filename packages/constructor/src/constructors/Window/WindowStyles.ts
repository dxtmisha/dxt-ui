// ai-none

import { watch, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract, type DesignName } from '@dxtmisha/functional'

import { WindowElement } from './WindowElement'
import { WindowCoordinates } from './WindowCoordinates'
import { WindowPosition } from './WindowPosition'
import { WindowOrigin } from './WindowOrigin'

/**
 * Style management class.
 *
 * Класс управления стилями.
 */
export class WindowStyles extends DesignLifecycleAbstract {
  protected watchStop?: WatchStopHandle

  /**
   * Constructor.
   *
   * Конструктор.
   * @param naming component naming helper / помощник именования компонента
   * @param coordinates function returning coordinates manager / функция, возвращающая менеджер координат
   * @param element function returning element manager / функция, возвращающая менеджер элементов
   * @param origin function returning origin manager / функция, возвращающая менеджер начальной точки
   * @param position function returning position manager / функция, возвращающая менеджер позиции
   */
  constructor(
    protected readonly naming: DesignName,
    protected readonly coordinates: () => WindowCoordinates,
    protected readonly element: () => WindowElement,
    protected readonly origin: () => WindowOrigin,
    protected readonly position: () => WindowPosition
  ) {
    super()
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  override readonly onMounted = (): void => {
    this.update()
    this.watchStop?.()
    this.watchStop = watch(this.element().getElement(), () => this.update())
  }

  /**
   * Cleanup lifecycle listeners on unmount.
   *
   * Очистка слушателей жизненного цикла при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.watchStop?.()
    this.watchStop = undefined
  }

  /**
   * Data update.
   *
   * Обновление данных.
   */
  update(): void {
    const element = this.element().getMain()

    if (element) {
      element.style.setProperty(this.naming.getStyle('inset-x'), this.position().getStyleX())
      element.style.setProperty(this.naming.getStyle('inset-y'), this.position().getStyleY())
      element.style.setProperty(`--${this.naming.getName()}-origin-x`, this.origin().getStyleX())
      element.style.setProperty(`--${this.naming.getName()}-origin-y`, this.origin().getStyleY())
      element.style.setProperty(this.naming.getStyle('control-width'), `${this.coordinates().getControlWidth()}px`)
      element.style.setProperty(this.naming.getStyle('control-height'), `${this.coordinates().getControlHeight()}px`)
      element.style.setProperty(this.naming.getStyle('location'), this.coordinates().getLocation())
    }
  }

  /**
   * Updates the window type (menu or modal).
   *
   * Обновляет тип окна (меню или модальное).
   * @param isMenu whether the window is a menu / является ли окно меню
   */
  updateType(isMenu: boolean): void {
    const element = this.element().getMain()

    if (
      element && (
        (isMenu && (element.dataset.windowMenu !== 'menu'))
        || (!isMenu && (element.dataset.windowMenu === 'menu'))
      )
    ) {
      const teleportElement = element.parentElement

      element.dataset.windowMenu = isMenu ? 'menu' : 'modal'

      if (
        teleportElement
        && teleportElement.dataset.windowTeleport
      ) {
        teleportElement.dataset.windowMenu = element.dataset.windowMenu
      }
    }
  }
}
