// ai-none

import { ref, watch } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { MotionAxisSlides } from './MotionAxisSlides'
import type { MotionAxisStatus } from './MotionAxisStatus'

import type { MotionAxisSelectedValue } from './basicTypes'
import type { MotionAxisProps } from './props'

/**
 * Class for controlling axis movement, slide navigation, and directions.
 * It manages transitions in 3D axes (X, Y, Z) and directions (back, next, auto).
 *
 * Класс для управления движением по осям, навигацией по слайдам и направлениями.
 * Управляет переходами в трехмерных осях (X, Y, Z) и направлениях (back, next, auto).
 */
export class MotionAxisGo extends DesignLifecycleAbstract {
  /** Active transition axis / Активная ось перехода */
  readonly axis = ref<MotionAxisProps['axis']>()
  /** Active transition direction / Активное направление перехода */
  readonly direction = ref<MotionAxisProps['direction']>()

  /**
   * Constructor for initializing slide navigation controls.
   *
   * Конструктор для инициализации элементов управления навигацией по слайдам.
   * @param props input data / входные данные
   * @param slides getter for slides list / геттер списка слайдов
   * @param status getter for active element status manager / геттер менеджера статуса активного элемента
   */
  constructor(
    protected readonly props: Readonly<MotionAxisProps>,
    protected readonly slides: () => MotionAxisSlides,
    protected readonly status: () => MotionAxisStatus
  ) {
    super()

    this.axis.value = props.axis
    this.direction.value = props.direction
  }

  /**
   * Registers reactive watchers for axis and direction props on mount.
   *
   * Регистрирует реактивные наблюдатели для свойств axis и direction при монтировании.
   */
  override readonly onMounted = (): void => {
    watch(() => this.props.axis, () => this.setAxis(this.props.axis))
    watch(() => this.props.direction, () => this.setDirection(this.props.direction))
  }

  /**
   * Navigates to the previous slide in sequence.
   *
   * Перемещение слайда на один шаг назад.
   */
  readonly back = (): void => {
    this.direction.value = 'back'
    this.status().set(this.slides().getByIndex(-1))
  }

  /**
   * Navigates to the next slide in sequence.
   *
   * Перемещение слайда на один шаг вперед.
   */
  readonly next = (): void => {
    this.direction.value = 'next'
    this.status().set(this.slides().getByIndex(+1))
  }

  /**
   * Navigates to a specific slide with automatic direction selection.
   *
   * Перемещение слайда на выбранный слайд с автоматическим выбором направления анимации.
   * @param selected selected item / выбранный элемент
   */
  readonly to = (selected: MotionAxisSelectedValue): void => {
    const slides = this.slides()
    const status = this.status()
    const active = slides.findIndex()
    const to = slides.findIndex(selected)

    if (
      to !== -1
      && to !== active
    ) {
      if (active === -1) {
        status.setFlash(selected)
        return
      }

      if (active > to) {
        this.direction.value = 'back'
      } else {
        this.direction.value = 'next'
      }

      status.set(selected)
    }
  }

  /**
   * Navigates upwards (moves slide down or moves view up on Y-axis).
   *
   * Переместите на верхний слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly top = (selected: MotionAxisProps['selected']): void => {
    this.axis.value = 'y'
    this.direction.value = 'back'
    this.status().set(selected)
  }

  /**
   * Navigates rightwards (moves slide left or moves view right on X-axis).
   *
   * Переместите на правый слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly right = (selected: MotionAxisProps['selected']): void => {
    this.axis.value = 'x'
    this.direction.value = 'next'
    this.status().set(selected)
  }

  /**
   * Navigates downwards (moves slide up or moves view down on Y-axis).
   *
   * Переместите на нижний слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly bottom = (selected: MotionAxisProps['selected']): void => {
    this.axis.value = 'y'
    this.direction.value = 'next'
    this.status().set(selected)
  }

  /**
   * Navigates leftwards (moves slide right or moves view left on X-axis).
   *
   * Переместите на левый слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly left = (selected: MotionAxisProps['selected']): void => {
    this.axis.value = 'x'
    this.direction.value = 'back'
    this.status().set(selected)
  }

  /**
   * Navigates backward/deeper in 3D depth (Z-axis, down/far).
   *
   * Переместите на задний слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly down = (selected: MotionAxisProps['selected']): void => {
    this.axis.value = 'z'
    this.direction.value = 'back'
    this.status().set(selected)
  }

  /**
   * Navigates forward/closer in 3D depth (Z-axis, up/near).
   *
   * Переместите на передний слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly up = (selected: MotionAxisProps['selected']): void => {
    this.axis.value = 'z'
    this.direction.value = 'next'
    this.status().set(selected)
  }

  /**
   * Sets the active transition axis explicitly.
   *
   * Изменяет ось.
   * @param axis axis name / название оси
   */
  readonly setAxis = (axis: MotionAxisProps['axis']): void => {
    this.axis.value = axis
  }

  /**
   * Sets the active transition direction explicitly.
   *
   * Изменяет направление.
   * @param direction direction name / название направления
   */
  readonly setDirection = (direction: MotionAxisProps['direction']): void => {
    this.direction.value = direction
  }
}
