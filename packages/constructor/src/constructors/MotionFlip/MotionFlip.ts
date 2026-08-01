import type { Ref, ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { MotionFlipAction } from './MotionFlipAction'
import { MotionFlipElement } from './MotionFlipElement'
import { MotionFlipItems } from './MotionFlipItems'
import { MotionFlipObserver } from './MotionFlipObserver'

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
  /** Action controller / Контроллер действий */
  readonly action: MotionFlipAction

  /** Element manager / Менеджер элемента */
  readonly elementManager: MotionFlipElement

  /** Item list controller / Контроллер списка элементов */
  readonly items: MotionFlipItems

  /** Observer controller / Контроллер наблюдения */
  readonly observer: MotionFlipObserver

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
   * @param constructors object with classes / объект с классами
   * @param constructors.MotionFlipActionConstructor class for managing actions / класс для управления действиями
   * @param constructors.MotionFlipElementConstructor class for working with elements / класс для работы с элементами
   * @param constructors.MotionFlipItemsConstructor class for working with items / класс для работы со списком элементов
   * @param constructors.MotionFlipObserverConstructor class for managing mutation observations / класс для управления наблюдением за мутациями
   */
  constructor(
    protected readonly props: MotionFlipProps,
    protected readonly refs: ToRefs<MotionFlipProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MotionFlipComponents, MotionFlipProps>,
    protected readonly slots?: MotionFlipSlots,
    protected readonly emits?: ConstrEmit<MotionFlipEmits>,
    constructors: {
      MotionFlipActionConstructor?: typeof MotionFlipAction
      MotionFlipElementConstructor?: typeof MotionFlipElement
      MotionFlipItemsConstructor?: typeof MotionFlipItems
      MotionFlipObserverConstructor?: typeof MotionFlipObserver
    } = {}
  ) {
    const {
      MotionFlipActionConstructor = MotionFlipAction,
      MotionFlipElementConstructor = MotionFlipElement,
      MotionFlipItemsConstructor = MotionFlipItems,
      MotionFlipObserverConstructor = MotionFlipObserver
    } = constructors

    this.elementManager = new MotionFlipElementConstructor(this.element, this.className)
    this.items = new MotionFlipItemsConstructor(this.elementManager)
    this.action = new MotionFlipActionConstructor(this.props, this.elementManager, this.items)
    this.observer = new MotionFlipObserverConstructor(this.props, this.action, this.elementManager, this.items)
  }
}
