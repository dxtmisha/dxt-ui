import { type Ref, type ToRefs } from 'vue'
import {
  type ConstrClass,
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'
import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import type { CellClassesSub } from './basicTypes'
import type { CellComponents, CellEmits, CellSlots } from './types'
import type { CellProps } from './props'

/**
 * Class representing a list item or cell element (Cell).
 * Provides coordination for components such as icons, progress, ripples, labels, descriptions, and click events.
 *
 * Класс, представляющий элемент списка или ячейку (Cell).
 * Обеспечивает координацию работы таких компонентов, как иконки, прогресс, волны, метки, описания и события клика.
 */
export class Cell {
  /** Progress indicator manager instance / Экземпляр менеджера индикатора прогресса */
  readonly progress: ProgressInclude
  /** Skeleton loader manager instance / Экземпляр менеджера скелетонов */
  readonly skeleton: SkeletonInclude

  /** Label text manager instance / Экземпляр менеджера текста метки */
  readonly label: LabelInclude
  /** Description text manager instance / Экземпляр менеджера текста описания */
  readonly description: DescriptionInclude
  /** Caption text manager instance / Экземпляр менеджера текста подписи */
  readonly caption: CaptionInclude
  /** Activation state manager instance / Экземпляр менеджера состояния активности */
  readonly enabled: EnabledInclude

  /** Main and trailing icons manager instance / Экземпляр менеджера основной и хвостовой иконок */
  readonly icon: IconTrailingInclude
  /** Ripple effect manager instance / Экземпляр менеджера эффекта свечения (ripple) */
  readonly ripple: RippleInclude

  /** Click event manager instance / Экземпляр менеджера событий клика */
  readonly event: EventClickInclude

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param refs input properties in the form of reactive references / входные свойства в виде реактивных ссылок
   * @param element target HTML element / целевой HTML-элемент
   * @param classDesign design system prefix / префикс дизайн-системы
   * @param className base CSS class name / базовое имя CSS-класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   * @param constructors.CaptionConstructor class for creating a caption / класс для создания подписи
   * @param constructors.DescriptionConstructor class for creating a description / класс для создания описания
   * @param constructors.EnabledConstructor class for creating the enabled state / класс для создания состояния активности
   * @param constructors.EventConstructor class for creating an event / класс для создания события
   * @param constructors.IconConstructor class for creating an icon / класс для создания иконки
   * @param constructors.LabelConstructor class for creating a label / класс для создания метки
   * @param constructors.ProgressConstructor class for creating a progress indicator / класс для создания индикатора прогресса
   * @param constructors.RippleConstructor class for creating a ripple effect / класс для создания эффекта волны
   * @param constructors.SkeletonConstructor class for creating a skeleton / класс для создания скелета
   */
  constructor(
    protected readonly props: CellProps,
    protected readonly refs: ToRefs<CellProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<CellComponents, CellProps>,
    protected readonly slots?: CellSlots,
    protected readonly emits?: ConstrEmit<CellEmits>,
    constructors: {
      CaptionConstructor?: typeof CaptionInclude
      DescriptionConstructor?: typeof DescriptionInclude
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
      CaptionConstructor = CaptionInclude,
      DescriptionConstructor = DescriptionInclude,
      EnabledConstructor = EnabledInclude,
      EventConstructor = EventClickInclude,
      IconConstructor = IconTrailingInclude,
      LabelConstructor = LabelInclude,
      ProgressConstructor = ProgressInclude,
      RippleConstructor = RippleInclude,
      SkeletonConstructor = SkeletonInclude
    } = constructors

    this.progress = new ProgressConstructor(className, props, components, { position: 'bottom' })
    this.skeleton = new SkeletonConstructor(props, classDesign, ['classTextVariant'])

    this.label = new LabelConstructor(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      this.skeleton
    )
    this.caption = new CaptionConstructor(props, className, slots)
    this.description = new DescriptionConstructor(props, className, slots, this.skeleton)
    this.enabled = new EnabledConstructor(props, this.progress)

    this.icon = new IconConstructor(props, className, components)
    this.ripple = new RippleConstructor(className, components, this.enabled)

    this.event = new EventConstructor(props, this.enabled, emits)
  }

  /**
   * Computed CSS classes for the cell component.
   *
   * Вычисляемые CSS классы для компонента ячейки.
   */
  get classes(): ConstrClass {
    return {
      [`${this.className}--description`]: this.description.is,
      [getClassTagAStatic(this.classDesign)]: true
    }
  }

  /**
   * Returns a list of sub-element CSS classes for the cell component.
   *
   * Возвращает список CSS классов для под-элементов компонента ячейки.
   */
  get classesSub(): CellClassesSub {
    return {
      label: `${this.className}__label`,
      description: `${this.className}__description`,
      caption: `${this.className}__caption`,
      trailing: `${this.className}__trailing`
    }
  }

  /**
   * Computed role for the cell component.
   *
   * Вычисляемая роль для компонента ячейки.
   */
  get role(): string | undefined {
    if (this.props.role) {
      return this.props.role
    }

    if (this.props.dynamic) {
      return 'button'
    }

    return undefined
  }

  /**
   * Computed HTML attributes and bindings for the main cell element.
   *
   * Вычисляемые HTML-атрибуты и привязки для главного элемента ячейки.
   */
  get binds() {
    const props = {
      'data-value': this.props.value,
      'data-divider': this.props.divider ? 'active' : undefined,
      ...this.event.binds,
      ...AriaStaticInclude.role(this.role)
    }

    if (this.props.dynamic) {
      return {
        ...props,
        tabindex: '0'
      }
    }

    return props
  }
}
