import type { Ref, ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { MotionFlipElement } from './MotionFlipElement'
import { MotionFlipItems } from './MotionFlipItems'

import type { MotionFlipCallback } from './basicTypes'
import type {
  MotionFlipComponents,
  MotionFlipEmits,
  MotionFlipSlots
} from './types'
import type { MotionFlipProps } from './props'

/**
 * Class for managing FLIP layout animations.
 * Performs smooth position and dimensions transitions during layout changes.
 *
 * Класс для управления FLIP анимациями макета.
 * Выполняет плавные переходы положения и размеров при изменениях макета.
 */
export class MotionFlip {
  /** Element manager / Менеджер элемента */
  readonly elementManager: MotionFlipElement

  /** Item list controller / Контроллер списка элементов */
  readonly items: MotionFlipItems

  /** Flag indicating active transition cleanup / Флаг активности завершения перехода */
  protected isTransitioning = false

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: MotionFlipProps,
    protected readonly refs: ToRefs<MotionFlipProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MotionFlipComponents, MotionFlipProps>,
    protected readonly slots?: MotionFlipSlots,
    protected readonly emits?: ConstrEmit<MotionFlipEmits>
  ) {
    this.elementManager = new MotionFlipElement(this.element, this.className)
    this.items = new MotionFlipItems(this.elementManager)
  }

  /**
   * Checks if element is available and animation is enabled.
   *
   * Проверяет, доступен ли элемент и включена ли анимация.
   * @returns true if animation is enabled and element exists / true, если анимация включена и элемент существует
   */
  readonly isEnable = (): boolean => !this.props.disabled && this.elementManager.isEnable()

  /**
   * FLIP update animation handler.
   *
   * Обработчик обновления FLIP анимации.
   * @param callback function performing DOM updates / функция, выполняющая обновления DOM
   * @returns promise resolving when update sequence completes / промис, завершающийся при завершении обновления
   */
  readonly update = async (callback: MotionFlipCallback): Promise<void> => {
    if (!this.isEnable()) {
      await callback()
      return
    }

    this.items.init()
    await callback()

    requestAnimationFrame(() => {
      this.items.update()
      this.elementManager.addClassFreeze()

      requestAnimationFrame(() => this.elementManager.addClassGo())
    })
  }

  /**
   * Handle transition end event to clear animation state.
   *
   * Обрабатывает событие окончания перехода для сброса состояния анимации.
   * @param event transition event / событие перехода
   */
  readonly onTransition = (event: TransitionEvent): void => {
    if (
      this.items.resetItem(event)
      && !this.isTransitioning
    ) {
      this.isTransitioning = true

      requestAnimationFrame(() => {
        this.elementManager.resetStatus()
        this.isTransitioning = false
      })
    }
  }
}
