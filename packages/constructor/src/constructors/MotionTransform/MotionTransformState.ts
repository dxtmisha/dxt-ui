import { ref, watch } from 'vue'
import { DesignLifecycleAbstract, isDomRuntime } from '@dxtmisha/functional'

import type { TabIndexInclude } from '../../classes/TabIndexInclude'
import type { MotionTransformElement } from './MotionTransformElement'
import type { MotionTransformSize } from './MotionTransformSize'
import type { MotionTransformProps } from './props'

/**
 * State management class.
 *
 * Класс управления состоянием.
 */
export class MotionTransformState extends DesignLifecycleAbstract {
  /** Open state flag / Флаг состояния открытия */
  readonly open = ref<boolean>(false)
  /** Temporary show state for animation / Временный флаг показа для анимации */
  readonly show = ref<boolean>(false)
  /** Teleportation state flag / Флаг состояния телепортации */
  readonly teleport = ref<boolean>(false)

  protected timer?: ReturnType<typeof setTimeout>

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param element class object getter for managing an element / геттер объекта класса для управления элементом
   * @param size class object getter for managing sizes / геттер объекта класса для управления размерами
   * @param tabIndex class object getter for managing tab indices / геттер объекта класса для управления табуляцией
   */
  constructor(
    protected readonly props: MotionTransformProps,
    protected readonly element: () => MotionTransformElement,
    protected readonly size: () => MotionTransformSize,
    protected readonly tabIndex: () => TabIndexInclude<HTMLDivElement>
  ) {
    super()
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  override readonly onMounted = (): void => {
    watch([() => this.element().getElement(), this.show], this.makeShow)
    watch([() => this.element().getElement(), this.open], this.makeOpen)
    watch([() => this.element().getElement(), this.teleport], this.makeTeleport)
    watch(() => this.props.open, () => this.set(Boolean(this.props.open)))

    this.makeShow()
    this.makeOpen()
    this.makeTeleport()

    if (this.props.open) {
      requestAnimationFrame(() => {
        this.open.value = Boolean(this.props.open)
        this.calculations()
      })
    }
  }

  /**
   * Cleanup lifecycle listeners on unmount.
   *
   * Очистка слушателей жизненного цикла при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    clearTimeout(this.timer)
  }

  /**
   * Checks if the element is open.
   *
   * Проверяет, открыт ли элемент.
   * @returns open status / статус открытия
   */
  isOpen(): boolean {
    return this.open.value
  }

  /**
   * Checks if the element should be shown.
   *
   * Проверяет, следует ли показывать элемент.
   * @returns visibility status / статус видимости
   */
  isShow(): boolean {
    return this.open.value || this.show.value
  }

  /**
   * Checks if teleportation should be disabled.
   *
   * Проверяет, нужно ли отключить телепортацию.
   * @returns true if teleport is close / true, если телепортация закрыта
   */
  isTeleportClose(): boolean {
    return this.teleport.value && !this.open.value
  }

  /**
   * Changes in the state of the open window.
   *
   * Изменения состояния открытого окна.
   * @param open opening status / статус открытия
   * @param animation opening with animation / открытие с анимацией
   */
  set(
    open: boolean,
    animation = true
  ): void {
    if (this.open.value !== open) {
      clearTimeout(this.timer)

      if (open) {
        this.tabIndex().updateOldElement()
      }

      if (
        animation
        && this.element().isAnimation()
      ) {
        this.show.value = true

        requestAnimationFrame(() => {
          this.calculations()
          this.make()

          requestAnimationFrame(() => {
            this.open.value = open
          })
        })
      } else {
        this.open.value = open
        this.calculations()
      }

      this.timer = setTimeout(() => this.reset(), 480)
    }
  }

  /**
   * Status switching.
   *
   * Переключение статуса.
   */
  toggle(): void {
    this.set(!this.open.value)
  }

  /**
   * Resets the data to the initial state.
   *
   * Сбрасывает данные в первичное состояние.
   * @returns current instance / текущий экземпляр
   */
  reset(): this {
    if (this.show.value) {
      this.show.value = false

      if (this.isTeleportClose()) {
        this.teleport.value = false
      }

      this.make()
      this.tabIndex().toggle(this.open.value)
      this.size().reset()
    }

    if (
      !this.open.value
      && this.props.clickOpen
      && isDomRuntime()
    ) {
      requestAnimationFrame(() => {
        if (
          !document.activeElement
          || document.activeElement === document.body
          || !document.activeElement.isConnected
        ) {
          this.element().elementHead?.focus()
        }
      })
    }

    return this
  }

  /**
   * Update of the display class.
   *
   * Обновление класса показа.
   */
  protected readonly makeShow = (): void => {
    const element = this.element().getElement()

    if (element) {
      element.dataset.show = this.show.value ? 'show' : 'none'
    }
  }

  /**
   * Update of the opening class.
   *
   * Обновление класса открытия.
   */
  protected readonly makeOpen = (): void => {
    const element = this.element().getElement()

    if (element) {
      element.dataset.open = this.open.value ? 'open' : 'none'
    }
  }

  /**
   * Update of the teleport class.
   *
   * Обновление класса телепорта.
   */
  protected readonly makeTeleport = (): void => {
    const element = this.element().getElement()

    if (element) {
      element.dataset.teleport = this.teleport.value ? 'teleport' : 'none'
    }
  }

  /**
   * Calculations before animation.
   *
   * Вычисления перед анимацией.
   */
  protected calculations(): void {
    this.size().update()
    this.toTeleport()
  }

  /**
   * Animation control.
   *
   * Управление анимацией.
   */
  protected toTeleport(): void {
    if (this.element().isWindow()) {
      this.teleport.value = this.isShow()
    }
  }

  /**
   * Updates the list of styles.
   *
   * Обновляет список стилей.
   */
  protected make(): void {
    this.makeShow()
    this.makeMain()
    this.makeContext()
  }

  /**
   * Updates the list of styles for the main element.
   *
   * Обновляет список стилей для главного элемента.
   */
  protected makeMain(): void {
    const element = this.element().getElement()

    if (element) {
      const style = this.element().style
      const size = this.size()

      if (this.show.value) {
        element.style.setProperty(style.top, size.top)
        element.style.setProperty(style.left, size.left)
        element.style.setProperty(style.height, size.height)
        element.style.setProperty(style.scale, size.scale)
        element.style.setProperty(style.headWidth, size.headWidth)
        element.style.setProperty(style.headHeight, size.headHeight)
        element.style.setProperty(style.headScale, size.headScale)
        element.style.setProperty(style.bodyHeight, size.bodyHeight)
      } else {
        element.style.removeProperty(style.top)
        element.style.removeProperty(style.left)
        element.style.removeProperty(style.height)
        element.style.removeProperty(style.scale)
        element.style.removeProperty(style.headWidth)
        element.style.removeProperty(style.headHeight)
        element.style.removeProperty(style.headScale)
        element.style.removeProperty(style.bodyHeight)
      }
    }
  }

  /**
   * Updates the list of styles for the context element.
   *
   * Обновляет список стилей для элемента контекста.
   */
  protected makeContext(): void {
    const context = this.element().getElementContext()

    if (context) {
      const style = this.element().style
      const size = this.size()

      if (
        this.element().isWindow()
        && this.isShow()
      ) {
        context.style.setProperty(style.contextWidth, size.contextWidth)
        context.style.setProperty(style.contextHeight, size.contextHeight)
      } else {
        context.style.removeProperty(style.contextWidth)
        context.style.removeProperty(style.contextHeight)
      }
    }
  }
}
