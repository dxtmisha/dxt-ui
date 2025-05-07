import { computed, ref, type Ref, type ToRefs, watch } from 'vue'
import { type ConstrClassObject, type ConstrEmit, type ConstrStyles, DesignComp, toNumber } from '@dxt-ui/functional'

import type { ProgressComponents, ProgressEmits, ProgressSlots } from './types'
import type { ProgressProps } from './props'

/**
 * Base class for working with the loader.
 *
 * Базовый класс для работы с загрузчиком.
 */
export class Progress {
  protected timeout?: any

  readonly hide = ref<boolean>(false)
  readonly visible = ref<boolean>(false)

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: ProgressProps,
    protected readonly refs: ToRefs<ProgressProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ProgressComponents, ProgressProps>,
    protected readonly slots?: ProgressSlots,
    protected readonly emits?: ConstrEmit<ProgressEmits>
  ) {
    watch(
      [refs.visible],
      this.switch,
      { immediate: true }
    )
  }

  /**
   * Returns the tag type for the element.
   *
   * Возвращает тип тега для элемента.
   */
  readonly tag = computed<string>(() => this.props.circular ? 'svg' : 'div')

  /**
   * Returns values.
   *
   * Возвращает значения.
   */
  readonly value = computed(() => toNumber(this.props.value ?? 0))

  /**
   * Returns values in percentages.
   *
   * Возвращает значения в процентах.
   */
  readonly valueInPercent = computed<string | null>(() => {
    if (this.isValue()) {
      const value = this.value.value
      const percent = (100 / this.getMax() * value)

      if (this.props.circular) {
        return percent.toString()
      }

      return `${100 - percent}%`
    }

    return null
  })

  /**
   * Values for the class.
   *
   * Значения для класса.
   */
  readonly classes = computed<ConstrClassObject>(() => {
    return {
      [`${this.className}--hide`]: this.hide.value,
      [`${this.className}--visible`]: this.visible.value,
      [`${this.className}--value`]: this.isValue()
    }
  })

  /**
   * Returns the property for style.
   *
   * Возвращает свойство для стиля.
   */
  readonly styles = computed<ConstrStyles>(() => {
    return {
      [`--${this.className}-sys-value`]: this.valueInPercent.value
    }
  })

  /**
   * Monitors the animation event for hiding the element.
   *
   * Следит за событием анимации для скрытия элемента.
   * @param animationName A string containing the value of the animation-name that generated the animation/
   * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
   */
  readonly onAnimation = ({ animationName }: AnimationEvent): void => {
    if (animationName.match('-hidden')) {
      this.hide.value = false
    }
  }

  /**
   * Checks if there are any values.
   *
   * Проверяет, есть ли значения.
   */
  isValue(): this is { props: { value: number } } {
    return this.value.value > 0
  }

  /**
   * Returns the maximum allowable value.
   *
   * Возвращает максимально допустимое значение.
   */
  getMax(): number {
    return toNumber(this.props.max ?? 100)
  }

  /**
   * The mode is triggered when the visible property changes to change the output status of the element.
   *
   * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
   */
  protected readonly switch = (): void => {
    const visible = this.props.visible

    clearTimeout(this.timeout)

    if (this.isValue()) {
      this.reset()
    } else if (Boolean(this.visible.value) !== visible) {
      const delay = toNumber(this.props.delay ?? 0)
      const delayHide = toNumber(this.props.delayHide ?? 0)

      if (visible && delay) {
        this.timeout = setTimeout(() => this.update(), delay)
      } else if (!visible && delayHide) {
        this.timeout = setTimeout(() => this.update(), delayHide)
      } else {
        this.update()
      }
    }
  }

  /**
   * Updates dependent data when the visible property changes.
   *
   * Обновляет зависимые данные при изменении свойства visible.
   */
  protected update(): this {
    this.hide.value = !this.props.visible
    this.visible.value = Boolean(this.props.visible)

    return this
  }

  /**
   * Resets values to their initial state.
   *
   * Сбрасывает значения до начального положения.
   */
  protected reset(): this {
    this.hide.value = false
    this.visible.value = false

    return this
  }
}
