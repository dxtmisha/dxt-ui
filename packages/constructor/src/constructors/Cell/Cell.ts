import { computed, type Ref, type ToRefs } from 'vue'
import {
  type ConstrClass,
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'
import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { LabelInclude } from '../../classes/LabelInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'

import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import { EventClickInclude } from '../../classes/EventClickInclude'

import type { CellComponents, CellEmits, CellSlots } from './types'
import type { CellProps } from './props'
import type { CellClassesSub } from './basicTypes'

/**
 * Cell
 */
export class Cell {
  readonly progress: ProgressInclude
  readonly skeleton: SkeletonInclude

  readonly label: LabelInclude
  readonly description: DescriptionInclude
  readonly caption: CaptionInclude
  readonly enabled: EnabledInclude

  readonly icon: IconTrailingInclude
  readonly ripple: RippleInclude

  readonly event: EventClickInclude

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
   * @param constructors object with classes/ объект с классами
   * @param constructors.CaptionConstructor class for creating a caption/ класс для создания подписи
   * @param constructors.DescriptionConstructor class for creating a description/ класс для создания описания
   * @param constructors.EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   * @param constructors.IconConstructor class for creating an icon/ класс для создания иконки
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param constructors.RippleConstructor class for creating a ripple effect/ класс для создания эффекта волны
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
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
    constructors?: {
      CaptionConstructor?: typeof CaptionInclude
      DescriptionConstructor?: typeof DescriptionInclude
      EnabledConstructor?: typeof EnabledInclude
      EventConstructor?: typeof EventClickInclude
      IconConstructor?: typeof IconTrailingInclude
      LabelConstructor?: typeof LabelInclude
      ProgressConstructor?: typeof ProgressInclude
      RippleConstructor?: typeof RippleInclude
      SkeletonConstructor?: typeof SkeletonInclude
    }
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
    } = constructors ?? {}

    const progress = new ProgressConstructor(
      props,
      className,
      components,
      {
        position: 'bottom'
      }
    )

    this.skeleton = new SkeletonConstructor(
      props,
      classDesign,
      ['classTextVariant']
    )

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
    this.enabled = new EnabledConstructor(props, progress)

    this.icon = new IconConstructor(props, className, components)
    this.progress = progress
    this.ripple = new RippleConstructor(className, components, this.enabled)

    this.event = new EventConstructor(
      props,
      this.enabled,
      emits
    )
  }

  /**
   * Computed CSS classes for the cell component.
   *
   * Вычисляемые CSS классы для компонента ячейки.
   */
  readonly classes = computed<ConstrClass>(() => ({
    [`${this.className}--description`]: this.description.is.value,
    [getClassTagAStatic(this.classDesign)]: true
  }))

  /**
   * Computed role for the cell component.
   *
   * Вычисляемая роль для компонента ячейки.
   */
  readonly role = computed<string | undefined>(() => {
    if (this.props.role) {
      return this.props.role
    }

    if (this.props.dynamic) {
      return 'button'
    }

    return undefined
  })

  /**
   * Returns a list of sub-element CSS classes for the cell component.
   *
   * Возвращает список CSS классов для под-элементов компонента ячейки.
   */
  getClassesSub(): CellClassesSub {
    return {
      label: `${this.className}__label`,
      description: `${this.className}__description`,
      caption: `${this.className}__caption`,
      trailing: `${this.className}__trailing`
    }
  }
}
