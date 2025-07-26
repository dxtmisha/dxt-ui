import { computed, type Ref, type ToRefs } from 'vue'
import {
  type ConstrClass,
  type ConstrEmit,
  DesignComp
} from '@dxt-ui/functional'
import { getClassTegAStatic } from '../../functions/getClassTegAStatic.ts'

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
import type { CellPropsBasic } from './props'
import type { CellClassesSub } from './basicTypes.ts'

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
   */
  constructor(
    protected readonly props: CellPropsBasic,
    protected readonly refs: ToRefs<CellPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<CellComponents, CellPropsBasic>,
    protected readonly slots?: CellSlots,
    protected readonly emits?: ConstrEmit<CellEmits>
  ) {
    const progress = new ProgressInclude(
      props,
      className,
      components,
      {
        circular: true,
        inverse: true
      }
    )

    this.skeleton = new SkeletonInclude(
      props,
      classDesign,
      ['classText']
    )

    this.label = new LabelInclude(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      this.skeleton
    )
    this.caption = new CaptionInclude(props, className, slots)
    this.description = new DescriptionInclude(props, className, slots, this.skeleton)
    this.enabled = new EnabledInclude(props, progress)

    this.icon = new IconTrailingInclude(props, className, components)
    this.progress = progress
    this.ripple = new RippleInclude(className, components, this.enabled)

    this.event = new EventClickInclude(
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
    [getClassTegAStatic(this.classDesign)]: true
  }))

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
