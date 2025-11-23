import { computed, ref, watch } from 'vue'

import { TabIndexInclude } from '../../classes/TabIndexInclude'
import { MotionTransformElement } from './MotionTransformElement'
import { MotionTransformSize } from './MotionTransformSize'

import type { MotionTransformProps } from './props'

/**
 * State management class.
 *
 * Класс управления состоянием.
 */
export class MotionTransformState {
  /** Open state flag/ Флаг состояния открытия */
  readonly open = ref<boolean>(false)
  /** Temporary show state for animation/ Временный флаг показа для анимации */
  readonly show = ref<boolean>(false)
  /** Teleportation state flag/ Флаг состояния телепортации */
  readonly teleport = ref<boolean>(false)

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data/ входные данные
   * @param element class object for managing an element/ объект класса для управления элементом
   * @param tabIndex class object for managing tab indices/ объект класса для управления табуляцией
   * @param size class object for managing sizes/ объект класса для управления размерами
   */
  constructor(
    props: MotionTransformProps,
    protected element: MotionTransformElement,
    protected tabIndex: TabIndexInclude<HTMLDivElement>,
    protected size: MotionTransformSize
  ) {
    watch([this.element.element, this.show], this.makeShow)
    watch([this.element.element, this.open], this.makeOpen)
    watch([this.element.element, this.teleport], this.makeTeleport)

    if (props.open) {
      requestAnimationFrame(() => {
        this.open.value = Boolean(props.open)
        this.calculations()
      })
    }
  }

  /** Computed open flag/ Вычисляемый флаг открытия */
  readonly isOpen = computed(() => this.open.value)

  /** Checks if the element should be shown/ Проверяет, следует ли показывать элемент */
  readonly isShow = computed<boolean>(() => this.open.value || this.show.value)

  /**
   * Checks if teleportation should be disabled.
   *
   * Проверяет, нужно ли отключить телепортацию.
   */
  isTeleportClose(): boolean {
    return this.teleport.value && !this.open.value
  }

  /**
   * Changes in the state of the open window.
   *
   * Изменения состояния открытого окна.
   * @param open opening status/ статус открытия
   * @param animation opening with animation/ открытие с анимацией
   */
  set(
    open: boolean,
    animation = true
  ) {
    if (this.open.value !== open) {
      if (
        animation
        && this.element.isAnimation()
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

      setTimeout(() => this.reset(), 480)
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
   */
  reset(): this {
    if (this.show.value) {
      this.show.value = false

      if (this.isTeleportClose()) {
        this.teleport.value = false
      }

      this.make()
      this.tabIndex.toggle(this.open.value)
    }

    return this
  }

  /**
   * Update of the display class.
   *
   * Обновление класса показа.
   */
  protected readonly makeShow = () => {
    const element = this.element.getElement()

    if (element) {
      element.dataset.show = this.show.value ? 'show' : 'none'
    }
  }

  /**
   * Update of the opening class.
   *
   * Обновление класса открытия.
   */
  protected readonly makeOpen = () => {
    const element = this.element.getElement()

    if (element) {
      element.dataset.open = this.open.value ? 'open' : 'none'
    }
  }

  /**
   * Update of the teleport class.
   *
   * Обновление класса телепорта.
   */
  protected readonly makeTeleport = () => {
    const element = this.element.getElement()

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
    this.size.update()
    this.toTeleport()
  }

  /**
   * Animation control.
   *
   * Управление анимацией.
   */
  protected toTeleport(): void {
    if (this.element.isWindow()) {
      this.teleport.value = this.isShow.value
    }
  }

  /**
   * Updates the list of styles.
   *
   * Обновляет список стилей.
   */
  protected make() {
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
    const element = this.element.getElement()

    if (element) {
      const style = this.element.style

      if (this.show.value) {
        element.style.setProperty(style.top, this.size.top)
        element.style.setProperty(style.left, this.size.left)
        element.style.setProperty(style.height, this.size.height)
        element.style.setProperty(style.scale, this.size.scale)
        element.style.setProperty(style.headWidth, this.size.headWidth)
        element.style.setProperty(style.headHeight, this.size.headHeight)
        element.style.setProperty(style.headScale, this.size.headScale)
        element.style.setProperty(style.bodyHeight, this.size.bodyHeight)
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
    const context = this.element.getElementContext()

    if (context) {
      const style = this.element.style

      if (
        this.element.isWindow()
        && this.isShow.value
      ) {
        context.style.setProperty(style.contextWidth, this.size.contextWidth)
        context.style.setProperty(style.contextHeight, this.size.contextHeight)
      } else {
        context.style.removeProperty(style.contextWidth)
        context.style.removeProperty(style.contextHeight)
      }
    }
  }
}
