import { ref } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { MotionAxisElement } from './MotionAxisElement'
import { MotionAxisPrevious } from './MotionAxisPrevious'
import { MotionAxisSelected } from './MotionAxisSelected'
import { MotionAxisStyles } from './MotionAxisStyles'

import type { MotionAxisEmitType, MotionAxisSelectedValue } from './basicTypes'
import type { MotionAxisEmits } from './types'
import type { MotionAxisProps } from './props'

/**
 * Class for managing statuses.
 *
 * Класс для управления статусами.
 */
export class MotionAxisStatus {
  /** Element preparation status/ Статус подготовки элемента */
  readonly preparation = ref<MotionAxisSelectedValue>()

  /** Active element status/ Статус активного элемента */
  readonly active = ref<MotionAxisSelectedValue>()

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element class object for managing an element/ объект класса для управления элементом
   * @param selected class object for managing the active element/ объект класса для управления активным элементом
   * @param previous object for managing the outgoing slide/ объект управления уходящим слайдом
   * @param styles class object for managing styles/ объект класса для управления стилями
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
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
   * Checks if the element is in preparation status.
   *
   * Проверяет, находится ли элемент в статусе подготовки.
   * @param key element key/ ключ элемента
   */
  isPreparation(key: string): boolean {
    return this.preparation.value === key
  }

  /**
   * Checks if the element is active.
   *
   * Проверяет, активен ли элемент.
   * @param key element key/ ключ элемента
   */
  isActive(key: string): boolean {
    return this.active.value === key
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
   * @param selected selected slide/ выбранный слайд
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
   * Instantly changes the active slide without animation.
   *
   * Мгновенно изменяет активный слайд без анимации.
   * @param selected selected slide/ выбранный слайд
   */
  setFlash(selected: MotionAxisProps['selected']): this {
    this.selected.set(selected)
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
          this.emit('start')
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

    this.emit('end')
    this.element.returnScroll()
  }

  protected emit(type: MotionAxisEmitType): void {
    if (
      this.emits
      && this.selected.item.value !== undefined
    ) {
      if (type === 'start') {
        this.emits('start', this.selected.item.value)
      } else {
        this.emits('end', this.selected.item.value)
      }

      this.emits('motionAxis', {
        type,
        selected: this.selected.item.value,
        previous: this.previous.get(),
        preparation: this.preparation.value,
        active: this.active.value
      })
    }
  }
}
