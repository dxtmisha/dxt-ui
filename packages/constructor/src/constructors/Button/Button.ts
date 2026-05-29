import { type Ref, type ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'
import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import type { AriaList } from '../../types/ariaTypes'
import type { ButtonComponents, ButtonEmits, ButtonSlots } from './types'
import type { ButtonPropsBasic } from './props'

/**
 * Button class for managing the business logic of a button component.
 * It coordinates label, enabled state, icon, progress, ripple effect, skeleton, and event handling.
 *
 * Класс Button для управления бизнес-логикой компонента кнопки.
 * Координирует метку, состояние активности, иконку, прогресс, эффект волны, скелетон и обработку событий.
 */
export class Button {
  /** Label control instance / Экземпляр управления меткой */
  readonly label: LabelInclude

  /** Enabled state control instance / Экземпляр управления состоянием активности */
  readonly enabled: EnabledInclude

  /** Icon control instance / Экземпляр управления иконкой */
  readonly icon: IconTrailingInclude

  /** Progress control instance / Экземпляр управления индикатором прогресса */
  readonly progress: ProgressInclude

  /** Ripple effect control instance / Экземпляр управления эффектом волны */
  readonly ripple: RippleInclude

  /** Skeleton control instance / Экземпляр управления скелетоном */
  readonly skeleton: SkeletonInclude

  /** Click event control instance / Экземпляр управления событием клика */
  readonly event: EventClickInclude

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
   * @param constructors.EnabledConstructor class for creating the enabled state / класс для создания состояния активности
   * @param constructors.EventConstructor class for creating an event / класс для создания события
   * @param constructors.IconConstructor class for creating an icon / класс для создания иконки
   * @param constructors.LabelConstructor class for creating a label / класс для создания метки
   * @param constructors.ProgressConstructor class for creating a progress indicator / класс для создания индикатора прогресса
   * @param constructors.RippleConstructor class for creating a ripple effect / класс для создания эффекта волны
   * @param constructors.SkeletonConstructor class for creating a skeleton / класс для создания скелета
   */
  constructor(
    protected readonly props: ButtonPropsBasic,
    protected readonly refs: ToRefs<ButtonPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ButtonComponents, ButtonPropsBasic>,
    protected readonly slots?: ButtonSlots,
    protected readonly emits?: ConstrEmit<ButtonEmits>,
    constructors: {
      EnabledConstructor?: typeof EnabledInclude
      EventConstructor?: typeof EventClickInclude
      IconConstructor?: typeof IconTrailingInclude
      LabelConstructor?: typeof LabelInclude
      ProgressConstructor?: typeof ProgressInclude
      RippleConstructor?: typeof RippleInclude
      SkeletonConstructor?: typeof SkeletonInclude
    } = {}
  ) {
    const {
      EnabledConstructor = EnabledInclude,
      EventConstructor = EventClickInclude,
      IconConstructor = IconTrailingInclude,
      LabelConstructor = LabelInclude,
      ProgressConstructor = ProgressInclude,
      RippleConstructor = RippleInclude,
      SkeletonConstructor = SkeletonInclude
    } = constructors

    this.progress = new ProgressConstructor(
      className,
      props,
      components,
      {
        circular: true,
        inverse: true
      }
    )

    this.label = new LabelConstructor(props, className, undefined, slots)
    this.enabled = new EnabledConstructor(props, this.progress)

    this.icon = new IconConstructor(props, className, components)
    this.ripple = new RippleConstructor(className, components, this.enabled)
    this.skeleton = new SkeletonConstructor(
      props,
      classDesign,
      ['classBackground']
    )

    this.event = new EventConstructor(
      props,
      this.enabled,
      emits
    )
  }

  /**
   * Returns the tag name for the element.
   *
   * Возвращает название тега для элемента.
   * @returns tag name / название тега
   */
  get tag(): string {
    if (this.props.tag) {
      return this.props.tag
    }

    if (this.props.href) {
      return 'a'
    }

    return 'button'
  }

  /**
   * Returns values for the class.
   *
   * Возвращает значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClass {
    return {
      [`${this.className}--icon`]: this.icon.isIcon(),
      [getClassTagAStatic(this.classDesign)]: true,
      ...this.skeleton.classes
    }
  }

  /**
   * Returns list of aria properties for the button component.
   *
   * Возвращает список aria свойств для компонента Button.
   * @returns list of aria properties / список свойств aria
   */
  get aria(): AriaList {
    const aria: AriaList = {
      ...this.progress.aria.value,
      ...AriaStaticInclude.label(this.props.ariaLabel)
    }

    if (this.isTagNotButton()) {
      return {
        tabindex: '0',
        ...aria,
        ...AriaStaticInclude.role('button'),
        ...AriaStaticInclude.disabled(this.progress.is || !this.enabled.isEnabled)
      }
    }

    return aria
  }

  /**
   * Returns events for the button component.
   *
   * Возвращает события для компонента кнопки.
   * @returns object of events / объект событий
   */
  get eventList(): Record<string, any> {
    const events: Record<string, any> = {
      ...this.event.href,
      onClick: this.event.onClick
    }

    if (this.isTagNotButton()) {
      events.onKeydown = this.event.onKeydown
    }

    return events
  }

  /**
   * Checks if the tag is not a button or link.
   *
   * Проверяет, не является ли тег кнопкой или ссылкой.
   * @returns check result / результат проверки
   */
  protected isTagNotButton(): boolean {
    return Boolean(
      this.props.tag
      && ['a', 'button'].indexOf(this.props.tag) === -1
    )
  }
}
