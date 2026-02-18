import { type Ref, ref, type ToRefs, watch } from 'vue'

import { MotionAxisSlides } from './MotionAxisSlides'
import { MotionAxisStatus } from './MotionAxisStatus'

import type { MotionAxisSelectedValue } from './basicTypes'
import type { MotionAxisProps } from './props'

/**
 * Class for motion control.
 *
 * Класс для управления движением.
 */
export class MotionAxisGo {
  readonly axis = ref<MotionAxisProps['axis']>()
  readonly direction = ref<MotionAxisProps['direction']>()

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element window element / элемент окна
   * @param slides list of slides / список слайдов
   * @param status class object for managing the active element / объект класса для управления активным элементом
   */
  constructor(
    protected readonly props: Readonly<MotionAxisProps>,
    protected readonly refs: ToRefs<MotionAxisProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly slides: MotionAxisSlides,
    protected readonly status: MotionAxisStatus
  ) {
    this.axis.value = props.axis
    this.direction.value = props.direction

    watch([refs.axis], () => this.setAxis(props.axis))
    watch([refs.direction], () => this.setDirection(props.direction))
  }

  /**
   * Previous slide.
   *
   * Перемещение слайда на один шаг назад.
   */
  readonly back = () => {
    this.direction.value = 'back'
    this.status.set(this.slides.getByIndex(-1))
  }

  /**
   * Next slide.
   *
   * Перемещение слайда на один шаг вперед.
   */
  readonly next = () => {
    this.direction.value = 'next'
    this.status.set(this.slides.getByIndex(+1))
  }

  /**
   * Moving the slide to the selected slide with automatic selection of animation direction.
   *
   * Перемещение слайда на выбранный слайд с автоматическим выбором направления анимации.
   * @param selected selected item / выбранный элемент
   */
  readonly to = (selected: MotionAxisSelectedValue) => {
    const active = this.slides.findIndex(this.status.get())
    const to = this.slides.findIndex(selected)

    if (
      active !== -1
      && to !== -1
      && to !== active
    ) {
      if (active > to) {
        this.direction.value = 'back'
      } else {
        this.direction.value = 'next'
      }

      this.status.set(selected)
    }
  }

  /**
   * Move to the upper slide.
   *
   * Переместите на верхний слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly top = (selected: MotionAxisProps['selected']) => {
    this.axis.value = 'y'
    this.direction.value = 'back'
    this.status.set(selected)
  }

  /**
   * Move to the right slide.
   *
   * Переместите на правый слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly right = (selected: MotionAxisProps['selected']) => {
    this.axis.value = 'x'
    this.direction.value = 'next'
    this.status.set(selected)
  }

  /**
   * Move to the lower slide.
   *
   * Переместите на нижний слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly bottom = (selected: MotionAxisProps['selected']) => {
    this.axis.value = 'y'
    this.direction.value = 'next'
    this.status.set(selected)
  }

  /**
   * Move to the left slide.
   *
   * Переместите на левый слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly left = (selected: MotionAxisProps['selected']) => {
    this.axis.value = 'x'
    this.direction.value = 'back'
    this.status.set(selected)
  }

  /**
   * Move to the back slide.
   *
   * Переместите на задний слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly down = (selected: MotionAxisProps['selected']) => {
    this.axis.value = 'z'
    this.direction.value = 'back'
    this.status.set(selected)
  }

  /**
   * Move to the front slide.
   *
   * Переместите на передний слайд.
   * @param selected selected item / выбранный элемент
   */
  readonly up = (selected: MotionAxisProps['selected']) => {
    this.axis.value = 'z'
    this.direction.value = 'next'
    this.status.set(selected)
  }

  /**
   * Changes the axis.
   *
   * Изменяет ось.
   * @param axis axis name / название оси
   */
  readonly setAxis = (axis: MotionAxisProps['axis']) => {
    this.axis.value = axis
  }

  /**
   * Changes the direction.
   *
   * Изменяет направление.
   * @param direction direction name / название направления
   */
  readonly setDirection = (direction: MotionAxisProps['direction']) => {
    this.direction.value = direction
  }
}
