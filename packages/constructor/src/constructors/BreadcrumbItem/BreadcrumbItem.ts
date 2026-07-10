import { type Ref, type ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { IconLiteInclude } from '../Icon'
import { LabelInclude } from '../../classes/LabelInclude'
import { SkeletonInclude } from '../Skeleton'

import type { BreadcrumbItemComponents, BreadcrumbItemEmits, BreadcrumbItemSlots } from './types'
import type { BreadcrumbItemProps } from './props'

/**
 * Class representing the business logic and orchestrator of the BreadcrumbItem component.
 * It manages label, icon, enabled state, and event click actions.
 *
 * Класс, представляющий бизнес-логику и оркестратор компонента BreadcrumbItem.
 * Управляет меткой, иконкой, состоянием активности и действиями при клике на событие.
 */
export class BreadcrumbItem {
  /** Icon controller / Контроллер иконки */
  readonly icon: IconLiteInclude
  /** Label controller / Контроллер метки */
  readonly label: LabelInclude
  /** Enabled state controller / Контроллер состояния активности */
  readonly enabled: EnabledInclude
  /** Click event controller / Контроллер события клика */
  readonly event: EventClickInclude
  /** Skeleton controller / Контроллер скелета */
  readonly skeleton: SkeletonInclude

  /**
   * Constructor for BreadcrumbItem.
   *
   * Конструктор для BreadcrumbItem.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.EnabledIncludeConstructor class for working with enabled / класс для работы с активностью
   * @param constructors.EventClickIncludeConstructor class for working with event click / класс для работы с событием клика
   * @param constructors.IconLiteIncludeConstructor class for working with icon / класс для работы с иконкой
   * @param constructors.LabelIncludeConstructor class for working with label / класс для работы с меткой
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton / класс для работы со скелетоном
   */
  constructor(
    protected readonly props: BreadcrumbItemProps,
    protected readonly refs: ToRefs<BreadcrumbItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<BreadcrumbItemComponents, BreadcrumbItemProps>,
    protected readonly slots?: BreadcrumbItemSlots,
    protected readonly emits?: ConstrEmit<BreadcrumbItemEmits>,
    constructors: {
      EnabledIncludeConstructor?: typeof EnabledInclude
      EventClickIncludeConstructor?: typeof EventClickInclude
      IconLiteIncludeConstructor?: typeof IconLiteInclude
      LabelIncludeConstructor?: typeof LabelInclude
      SkeletonIncludeConstructor?: typeof SkeletonInclude
    } = {}
  ) {
    const {
      EnabledIncludeConstructor = EnabledInclude,
      EventClickIncludeConstructor = EventClickInclude,
      IconLiteIncludeConstructor = IconLiteInclude,
      LabelIncludeConstructor = LabelInclude,
      SkeletonIncludeConstructor = SkeletonInclude
    } = constructors

    this.enabled = new EnabledIncludeConstructor(props)

    this.icon = new IconLiteIncludeConstructor(
      props,
      className,
      components
    )

    this.skeleton = new SkeletonIncludeConstructor(
      props,
      classDesign,
      ['classTextVariant']
    )

    this.label = new LabelIncludeConstructor(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      this.skeleton
    )

    this.event = new EventClickIncludeConstructor(
      props,
      this.enabled,
      emits
    )
  }

  /**
   * Returns attributes for the element.
   *
   * Возвращает атрибуты для элемента.
   * @returns element attributes / атрибуты элемента
   */
  get binds(): Record<string, any> {
    if (this.enabled.isEnabled) {
      return this.event.binds
    }

    return {}
  }

  /**
   * Returns values for the classes.
   *
   * Возвращает значения для классов.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClass {
    return {
      [`${this.classDesign}-a--static`]: true
    }
  }
}
