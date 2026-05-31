import {
  onMounted,
  onUnmounted,
  ref,
  type ToRefs,
  watch
} from 'vue'
import {
  type ConstrClassObject,
  type ConstrStyles,
  toNumber
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'
import { TextInclude } from '../../classes/TextInclude'

import type { ProgressProps } from './props'

/**
 * Base class for working with the loader.
 * It manages loader states, transitions, accessibility attributes, and dynamic value calculations.
 *
 * Базовый класс для работы с загрузчиком.
 * Управляет состояниями загрузчика, анимациями, атрибутами доступности и вычислением динамических значений.
 */
export class Progress {
  /** Timer instance for delayed visibility updates / Экземпляр таймера для отложенного обновления видимости */
  protected timeout?: any

  /** Reactive state for hiding animation / Реактивное состояние для анимации скрытия */
  readonly hide = ref<boolean>(false)

  /** Reactive state for visibility status / Реактивное состояние для статуса видимости */
  readonly visible = ref<boolean>(false)

  /** Instance for client-only rendering / Экземпляр для рендеринга только на клиенте */
  readonly clientOnly: ClientOnlyInclude

  /** Instance for handling localized text strings / Экземпляр для обработки локализованных текстовых строк */
  readonly text: TextInclude

  /**
   * Constructor for progress control.
   *
   * Конструктор для управления прогрессом.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param className class name / название класса
   * @param constructors object with helper classes / объект с вспомогательными классами
   */
  constructor(
    protected readonly props: ProgressProps,
    protected readonly refs: ToRefs<ProgressProps>,
    protected readonly className: string,
    constructors: {
      TextIncludeConstructor?: typeof TextInclude
      ClientOnlyIncludeConstructor?: typeof ClientOnlyInclude
    } = {}
  ) {
    const {
      TextIncludeConstructor = TextInclude,
      ClientOnlyIncludeConstructor = ClientOnlyInclude
    } = constructors

    this.clientOnly = new ClientOnlyIncludeConstructor(this.props)
    this.text = new TextIncludeConstructor(this.props)

    onMounted(() => {
      watch(
        [refs.visible],
        this.switch,
        { immediate: true }
      )
    })

    onUnmounted(() => {
      clearTimeout(this.timeout)
    })
  }

  /**
   * Returns the tag type for the element.
   *
   * Возвращает тип тега для элемента.
   * @returns tag type / тип тега
   */
  get tag(): string {
    return this.props.circular ? 'svg' : 'div'
  }

  /**
   * Returns values.
   *
   * Возвращает значения.
   * @returns current progress value / текущее значение прогресса
   */
  get value(): number {
    return toNumber(this.props.value ?? 0)
  }

  /**
   * Returns the maximum allowable value.
   *
   * Возвращает максимально допустимое значение.
   * @returns maximum value / максимальное значение
   */
  get max(): number {
    return toNumber(this.props.max ?? 100)
  }

  /**
   * Returns values in percentages.
   *
   * Возвращает значения в процентах.
   * @returns calculated percentage / вычисленный процент
   */
  get valueInPercent(): string | null {
    if (this.isValue()) {
      const value = this.value
      const percent = (100 / this.max * value)

      if (this.props.circular) {
        return percent.toString()
      }

      return `${100 - percent}%`
    }

    return null
  }

  /**
   * Returns the label text.
   *
   * Возвращает текст метки.
   * @returns aria-label or loading text / aria-label или текст загрузки
   */
  get label(): string | undefined {
    if (this.props.ariaLabel) {
      return this.props.ariaLabel
    }

    if (
      !this.isValue()
      && this.props.visible
    ) {
      return this.text.loading
    }

    return undefined
  }

  /**
   * Returns the role for the component.
   *
   * Возвращает роль для компонента.
   * @returns aria role string / строка роли aria
   */
  get role(): string {
    if (this.isValue()) {
      return 'progressbar'
    }

    return 'status'
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns list of computed classes / список вычисленных классов
   */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--hide`]: this.hide.value,
      [`${this.className}--visible`]: this.visible.value,
      [`${this.className}--value`]: this.isValue(),
      [`${this.className}--clientOnly`]: !this.clientOnly.isRender()
    }
  }

  /**
   * Returns the property for style.
   *
   * Возвращает свойство для стиля.
   * @returns custom CSS variables / пользовательские переменные CSS
   */
  get styles(): ConstrStyles {
    return {
      [`--${this.className}-sys-value`]: this.valueInPercent
    }
  }

  /**
   * Properties for the main element.
   *
   * Свойства для главного элемента.
   * @returns main element properties / свойства главного элемента
   */
  get binds() {
    const props: Record<string, any> = {
      onAnimationend: this.onAnimation,
      ...AriaStaticInclude.role(this.role),
      ...AriaStaticInclude.label(this.label)
    }

    if (this.props.circular) {
      props.viewBox = '0 0 48 48'
    }

    if (this.props.value) {
      return {
        ...props,
        ...AriaStaticInclude.valueMinMax(
          this.props.value,
          0,
          this.props.max
        )
      }
    }

    return props
  }

  /**
   * Checks if there are any values.
   *
   * Проверяет, есть ли значения.
   * @returns check result / результат проверки
   */
  isValue(): this is { props: { value: number } } {
    return this.value > 0
  }

  /**
   * Monitors the animation event for hiding the element.
   *
   * Следит за событием анимации для скрытия элемента.
   * @param event DOM animation event / событие анимации DOM
   */
  readonly onAnimation = ({ animationName }: AnimationEvent): void => {
    if (animationName.match('-hidden')) {
      this.hide.value = false
    }
  }

  /**
   * Method triggers when the visible property changes to change the status of the output of the element.
   *
   * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
   */
  protected readonly switch = (): void => {
    if (!this.clientOnly.isRender()) {
      return
    }

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
   * @returns current instance / текущий экземпляр
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
   * @returns current instance / текущий экземпляр
   */
  protected reset(): this {
    this.hide.value = false
    this.visible.value = false

    return this
  }
}
