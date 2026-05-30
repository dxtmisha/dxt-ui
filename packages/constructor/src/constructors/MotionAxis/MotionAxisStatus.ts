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
 * Class for managing the lifecycle and transition status of MotionAxis slides.
 * It handles the sequence: start, preparation, active slide updates, scroll blocking, and event emissions.
 *
 * Класс для управления жизненным циклом и статусом перехода слайдов MotionAxis.
 * Обрабатывает последовательность: запуск, подготовка, обновление активных слайдов, блокировка прокрутки и отправка событий.
 */
export class MotionAxisStatus {
  /** Element preparation status / Статус подготовки элемента */
  readonly preparation = ref<MotionAxisSelectedValue>()

  /** Active element status / Статус активного элемента */
  readonly active = ref<MotionAxisSelectedValue>()

  /**
   * Constructor for initializing status managers.
   *
   * Конструктор для инициализации менеджеров статуса.
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
   * Checks if the element is in preparation status.
   *
   * Проверяет, находится ли элемент в статусе подготовки.
   * @param key element key / ключ элемента
   * @returns true if slide is in preparation / true если слайд готовится
   */
  isPreparation(key: string): boolean {
    return this.preparation.value === key
  }

  /**
   * Checks if the element is active.
   *
   * Проверяет, активен ли элемент.
   * @param key element key / ключ элемента
   * @returns true if active / true если активен
   */
  isActive(key: string): boolean {
    return this.active.value === key
  }

  /**
   * Returns the selected element's identifier.
   *
   * Возвращает выбранный элемент.
   * @returns selected slide ID / ID выбранного слайда
   */
  get() {
    return this.selected.item.value
  }

  /**
   * Changes the active slide and starts the transition animation.
   *
   * Изменяет активный слайд.
   * @param selected selected slide / выбранный слайд
   * @returns this instance / текущий экземпляр класса
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
   * @param selected selected slide / выбранный слайд
   * @returns this instance / текущий экземпляр класса
   */
  setFlash(selected: MotionAxisProps['selected']): this {
    this.selected.set(selected)
    this.active.value = selected

    return this
  }

  /**
   * Beginning of transition activation. Sets previous and preparation states.
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
   * Waiting for element preparation and triggering transition layout events.
   *
   * Ожидание подготовки элемента.
   * @param limit limit of checks / лимит проверок
   */
  protected expectation(limit: number = 64) {
    if (limit <= 0) {
      return
    }

    requestAnimationFrame(() => {
      const preparation = this.element.getElementPreparation()

      if (!this.element.get()) {
        return
      }

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
        this.expectation(limit--)
      }
    })
  }

  /**
   * Transition animation end sequence. Resets tracking states and scroll lock.
   *
   * Остановка и удаление всех данных.
   */
  protected readonly end = () => {
    this.previous.set(undefined)
    this.preparation.value = undefined

    this.emit('end')
    this.element.returnScroll()
  }

  /**
   * Emits transition status events upward to design wrappers.
   *
   * Вызывает события движения наверх.
   * @param type transition lifecycle phase / фаза жизненного цикла перехода
   */
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
