import {
  ref,
  type Ref,
  watch
} from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type ConstrStyles,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName,
  toNumber
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { TextInclude } from '../../classes/TextInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { RoleType } from '../../types/roleTypes'
import { defaultsProgress, type ProgressProps } from './props'
import type {
  ProgressComponents,
  ProgressEmits,
  ProgressSlots
} from './types'

/** Progress dependency constructors type / Тип конструкторов зависимостей Progress */
export type ProgressConstructors = {
  /** Localized text strings helper constructor / Конструктор помощника локализованных текстовых строк */
  text: typeof TextInclude
}

/**
 * Base class for working with the loader (orchestrator).
 * It manages loader states, transitions, accessibility attributes, and dynamic value calculations.
 *
 * Базовый класс для работы с загрузчиком (оркестратор).
 * Управляет состояниями загрузчика, анимациями, атрибутами доступности и вычислением динамических значений.
 */
export class Progress extends DesignLogicAbstract<
  HTMLDivElement,
  ProgressComponents,
  ProgressEmits,
  ProgressSlots,
  ProgressProps,
  ProgressConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ProgressConstructors> = {
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    }
  }

  /** Timer instance for delayed visibility updates / Экземпляр таймера для отложенного обновления видимости */
  protected timeout?: ReturnType<typeof setTimeout>

  /** Reactive state for hiding animation / Реактивное состояние для анимации скрытия */
  readonly hide = ref<boolean>(false)

  /** Reactive state for visibility status / Реактивное состояние для статуса видимости */
  readonly visible = ref<boolean>(false)

  /**
   * Constructor for initializing Progress logic.
   *
   * Конструктор для инициализации логики Progress.
   * @param props input properties / входные свойства
   * @param element root element reference / ссылка на корневой элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components connected component registry / реестр подключённых компонентов
   * @param slots named slot registry / реестр именованных слотов
   * @param emits component event emitter / функция событий компонента
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   * @param hasLifecycle whether to register component lifecycle hooks / регистрировать ли хуки жизненного цикла компонента
   */
  constructor(
    props: Readonly<ProgressProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<ProgressComponents, ProgressProps>,
    slots?: ProgressSlots,
    emits?: ConstrEmit<ProgressEmits>,
    constructors?: Partial<ProgressConstructors>,
    hasLifecycle: boolean = true
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors,
      hasLifecycle
    )
  }

  /**
   * List of ARIA attributes for the progress element.
   *
   * Список ARIA-атрибутов для элемента прогресса.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    const { max, value } = this.props
    const valueMinMax = value
      ? AriaStaticInclude.valueMinMax(value, 0, max)
      : undefined

    return {
      ...AriaStaticInclude.role(this.role),
      ...AriaStaticInclude.label(this.label),
      ...valueMinMax
    }
  }

  /**
   * Properties for the main element.
   *
   * Свойства для главного элемента.
   * @returns main element properties / свойства главного элемента
   */
  get binds(): ConstrBind {
    const properties: ConstrBind = {
      onAnimationend: this.onAnimation,
      ...this.aria
    }

    if (this.props.circular) {
      properties.viewBox = '0 0 48 48'
    }

    return properties
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns list of computed classes / список вычисленных классов
   */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('hide')]: this.hide.value,
      [this.naming.getStatusClass('visible')]: this.visible.value,
      [this.naming.getStatusClass('value')]: this.isValue(),
      [this.naming.getStatusClass('clientOnly')]: !this.isRender()
    }
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
      return this.i('text').loading
    }

    return undefined
  }

  /**
   * Returns the maximum allowable value.
   *
   * Возвращает максимально допустимое значение.
   * @returns maximum value / максимальное значение
   */
  get max(): number {
    return toNumber(this.props.max ?? defaultsProgress.max)
  }

  /**
   * Returns the role for the component.
   *
   * Возвращает роль для компонента.
   * @returns ARIA role string / строка роли ARIA
   */
  get role(): RoleType {
    if (this.isValue()) {
      return 'progressbar'
    }

    return 'status'
  }

  /**
   * Returns the property for style.
   *
   * Возвращает свойство для стиля.
   * @returns custom CSS variables / пользовательские переменные CSS
   */
  get styles(): ConstrStyles {
    return {
      [this.naming.getStyle('value')]: this.valueInPercent
    }
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
   * Returns current progress value.
   *
   * Возвращает текущее значение прогресса.
   * @returns current progress value / текущее значение прогресса
   */
  get value(): number {
    return toNumber(this.props.value ?? 0)
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
   * Checks whether the progress element is ready for rendering.
   *
   * Проверяет, готов ли элемент прогресса к рендерингу.
   * @returns true if progress can be rendered / true, если прогресс может быть отрендерен
   */
  isRender(): boolean {
    return this.isValue() || !this.props.clientOnly || this.isMounted.value
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
    if (animationName.includes('-hidden')) {
      this.hide.value = false
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

  /**
   * Method triggers when the visible property changes to change the status of the output of the element.
   *
   * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
   */
  protected readonly switch = (): void => {
    if (!this.isRender()) {
      return
    }

    const visible = this.props.visible

    clearTimeout(this.timeout)

    if (this.isValue()) {
      this.reset()
    } else if (Boolean(this.visible.value) !== visible) {
      const delay = toNumber(this.props.delay ?? defaultsProgress.delay)
      const delayHide = toNumber(this.props.delayHide ?? defaultsProgress.delayHide)

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
   * Hook executed when component mounts.
   *
   * Хук, выполняемый при монтировании компонента.
   */
  protected override readonly onMounted = (): void => {
    this.switch()
    watch(() => this.props.visible, this.switch)
    watch(() => this.props.value, this.switch)
  }

  /**
   * Hook executed when component unmounts.
   *
   * Хук, выполняемый при размонтировании компонента.
   */
  protected override readonly onUnmounted = (): void => {
    clearTimeout(this.timeout)
  }
}
