// ai-none

import { ref } from 'vue'
import { type ConstrEmit, DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { MotionAxisElement } from './MotionAxisElement'
import type { MotionAxisPrevious } from './MotionAxisPrevious'
import type { MotionAxisSelected } from './MotionAxisSelected'
import type { MotionAxisStyles } from './MotionAxisStyles'

import type { MotionAxisEmitType, MotionAxisSelectedValue } from './basicTypes'
import type { MotionAxisEmits } from './types'
import type { MotionAxisProps } from './props'

/** Maximum number of animation frame checks while waiting for preparation element / Максимальное число проверок кадров анимации при ожидании элемента подготовки */
const EXPECTATION_FRAME_LIMIT = 64

/**
 * Class for managing the lifecycle and transition status of MotionAxis slides.
 * It handles the sequence: start, preparation, active slide updates, scroll blocking, and event emissions.
 *
 * Класс для управления жизненным циклом и статусом перехода слайдов MotionAxis.
 * Обрабатывает последовательность: запуск, подготовка, обновление активных слайдов, блокировка прокрутки и отправка событий.
 */
export class MotionAxisStatus extends DesignLifecycleAbstract {
  /** Element preparation status / Статус подготовки элемента */
  readonly preparation = ref<MotionAxisSelectedValue>()

  /** Active element status / Статус активного элемента */
  readonly active = ref<MotionAxisSelectedValue>()

  /** Pending requestAnimationFrame identifier / Идентификатор ожидающего requestAnimationFrame */
  protected animationFrameId?: number

  /** Indicates whether the instance has been unmounted / Указывает, был ли экземпляр размонтирован */
  protected isDestroyed = false

  /**
   * Constructor for initializing status managers.
   *
   * Конструктор для инициализации менеджеров статуса.
   * @param props input data / входные данные
   * @param element getter for element manager / геттер менеджера элемента
   * @param previous getter for outgoing slide manager / геттер менеджера уходящего слайда
   * @param selected getter for selected slide manager / геттер менеджера выбранного слайда
   * @param styles getter for styles manager / геттер менеджера стилей
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    props: Readonly<MotionAxisProps>,
    protected readonly element: () => MotionAxisElement,
    protected readonly previous: () => MotionAxisPrevious,
    protected readonly selected: () => MotionAxisSelected,
    protected readonly styles: () => MotionAxisStyles,
    protected readonly emits?: ConstrEmit<MotionAxisEmits>
  ) {
    super()
    this.active.value = props.selected
  }

  /**
   * Resets destroyed flag on mount.
   *
   * Сбрасывает флаг уничтожения при монтировании.
   */
  override readonly onMounted = (): void => {
    this.isDestroyed = false
  }

  /**
   * Cancels pending animation frames on unmount.
   *
   * Отменяет ожидающие кадры анимации при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.isDestroyed = true
    this.cancelExpectation()
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
  get(): MotionAxisSelectedValue {
    return this.selected().item.value
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
      !this.selected().is(selected)
    ) {
      this.selected().set(selected)
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
    this.selected().set(selected)
    this.active.value = selected

    return this
  }

  /**
   * Beginning of transition activation. Sets previous and preparation states.
   *
   * Начало активации.
   */
  start(): void {
    this.cancelExpectation()
    this.element().toStart()

    this.previous().set(this.active.value)
    this.preparation.value = this.selected().item.value

    this.element().blockScroll()
    this.expectation()
  }

  /**
   * Waiting for element preparation and triggering transition layout events.
   *
   * Ожидание подготовки элемента.
   * @param limit limit of checks / лимит проверок
   */
  protected expectation(limit: number = EXPECTATION_FRAME_LIMIT): void {
    if (limit <= 0 || this.isDestroyed) {
      return
    }

    this.cancelExpectation()
    this.animationFrameId = requestAnimationFrame(() => {
      this.animationFrameId = undefined

      if (this.isDestroyed) {
        return
      }

      const element = this.element()
      const preparation = element.getElementPreparation()

      if (!element.get()) {
        return
      }

      if (
        preparation
        && preparation.offsetHeight > 0
      ) {
        this.styles().addNext()

        this.animationFrameId = requestAnimationFrame(() => {
          this.animationFrameId = undefined

          if (this.isDestroyed) {
            return
          }

          element.toEnd()
          element.toMove()

          element.initEvent(this.end)
          this.active.value = this.selected().item.value
          this.emit('start')
        })
      } else {
        this.expectation(limit - 1)
      }
    })
  }

  /**
   * Cancels any scheduled animation frame callback.
   *
   * Отменяет запланированный обратный вызов кадра анимации.
   */
  protected cancelExpectation(): void {
    if (this.animationFrameId !== undefined && typeof cancelAnimationFrame === 'function') {
      cancelAnimationFrame(this.animationFrameId)
      this.animationFrameId = undefined
    }
  }

  /**
   * Transition animation end sequence. Resets tracking states and scroll lock.
   *
   * Остановка и удаление всех данных.
   */
  protected readonly end = (): void => {
    this.previous().set(undefined)
    this.preparation.value = undefined

    this.emit('end')
    this.element().returnScroll()
  }

  /**
   * Emits transition status events upward to design wrappers.
   *
   * Вызывает события движения наверх.
   * @param type transition lifecycle phase / фаза жизненного цикла перехода
   */
  protected emit(type: MotionAxisEmitType): void {
    const selected = this.selected().item.value

    if (
      this.emits
      && selected !== undefined
    ) {
      if (type === 'start') {
        this.emits('start', selected)
      } else {
        this.emits('end', selected)
      }

      this.emits('motionAxis', {
        type,
        selected,
        previous: this.previous().get(),
        preparation: this.preparation.value,
        active: this.active.value
      })
    }
  }
}
