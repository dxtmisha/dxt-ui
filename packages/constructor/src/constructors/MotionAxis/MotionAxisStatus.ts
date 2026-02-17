import { ref } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { MotionAxisElement } from './MotionAxisElement'
import { MotionAxisPrevious } from './MotionAxisPrevious'
import { MotionAxisSelected } from './MotionAxisSelected'
import { MotionAxisStyles } from './MotionAxisStyles'

import type { MotionAxisSelectedValue } from './basicTypes'
import type { MotionAxisEmits } from './types'
import type { MotionAxisProps } from './props'

/**
 * Class for managing statuses.
 *
 * Класс для управления статусами.
 */
export class MotionAxisStatus {
  /** Element preparation status / Статус подготовки элемента */
  readonly preparation = ref<MotionAxisSelectedValue>()

  /** Active element status/ Статус активного элемента */
  readonly active = ref<MotionAxisSelectedValue>()

  /**
   * Constructor
   * @param props input data / входные данные
   * @param element class object for managing an element / объект класса для управления элементом
   * @param selected class object for managing the active element / объект класса для управления активным элементом
   * @param previous object for managing the outgoing slide / объект управления уходящим слайдом
   * @param styles class object for managing styles / объект класса для управления стилями
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    props: MotionAxisProps,
    protected readonly element: MotionAxisElement,
    protected readonly selected: MotionAxisSelected,
    protected readonly previous: MotionAxisPrevious,
    protected readonly styles: MotionAxisStyles,
    protected readonly emits?: ConstrEmit<MotionAxisEmits>
  ) {
    this.active.value = props.selected
  }

  /**
   * Returns the selected element.
   *
   * Возвращает выбранный элемент.
   */
  get() {
    return this.selected.item.value
  }

  /**
   * Changes the active slide.
   *
   * Изменяет активный слайд.
   * @param selected selected slide / выбранный слайд
   */
  set(selected: MotionAxisProps['selected']): this {
    if (
      !this.selected.is(selected)
    ) {
      this.selected.set(selected)
      this.start()
    }

    return this
  }

  /**
   * Beginning of activation.
   *
   * Начало активации.
   */
  start() {
    this.element.toStart()

    this.previous.set(this.active.value)
    this.preparation.value = this.selected.item.value

    this.emits?.('start', this.preparation.value)
    this.element.blockScroll()
    this.expectation()
  }

  /**
   * Waiting for element preparation.
   *
   * Ожидание подготовки элемента.
   */
  protected expectation() {
    requestAnimationFrame(() => {
      const preparation = this.element.getElementPreparation()

      if (
        preparation
        && preparation.offsetHeight > 0
      ) {
        this.styles.addNext()

        requestAnimationFrame(() => {
          this.element.toEnd()
          this.element.toMove()

          this.element.initEvent(this.end)
          this.active.value = this.selected.item.value
        })
      } else {
        this.expectation()
      }
    })
  }

  /**
   * Stopping and deleting all data.
   *
   * Остановка и удаление всех данных.
   */
  protected readonly end = () => {
    this.previous.set(undefined)
    this.preparation.value = undefined

    this.emits?.('end', this.active.value)
    this.element.returnScroll()
  }
}
