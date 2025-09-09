import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp, getElementId } from '@dxt-ui/functional'

import { CaptionInclude } from '../../classes/CaptionInclude'
import { PrefixInclude } from '../../classes/PrefixInclude'
import { SuffixInclude } from '../../classes/SuffixInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'

import { IconTrailingInclude } from '../Icon'
import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { ProgressInclude } from '../Progress'
import { SkeletonInclude } from '../Skeleton'

import { FieldIcons } from './FieldIcons'
import { FieldSize } from './FieldSize'

import type { FieldComponents, FieldEmits, FieldSlots } from './types'
import type { FieldProps } from './props'
import type { FieldControl } from './basicTypes'

/**
 * Field
 */
export class Field {
  readonly icon: IconTrailingInclude

  readonly caption: CaptionInclude
  readonly prefix: PrefixInclude
  readonly suffix: SuffixInclude

  readonly fieldLabel: FieldLabelInclude
  readonly fieldMessage: FieldMessageInclude

  readonly progress: ProgressInclude
  readonly enabled: EnabledInclude
  readonly event: EventClickInclude
  readonly skeleton: SkeletonInclude

  readonly icons: FieldIcons
  readonly size: FieldSize

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
    protected readonly props: FieldProps,
    protected readonly refs: ToRefs<FieldProps>,
    protected readonly element: Ref<HTMLLabelElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<FieldComponents, FieldProps>,
    protected readonly slots?: FieldSlots,
    protected readonly emits?: ConstrEmit<FieldEmits>
  ) {
    this.icon = new IconTrailingInclude(this.props, this.className, this.components)

    this.caption = new CaptionInclude(this.props, this.className, this.slots)
    this.prefix = new PrefixInclude(this.props, this.className, this.slots)
    this.suffix = new SuffixInclude(this.props, this.className, this.slots)

    this.fieldLabel = new FieldLabelInclude(
      this.props,
      this.className,
      this.components,
      this.slots,
      this.refs.counterTop,
      this.propsSkeleton
    )
    this.fieldMessage = new FieldMessageInclude(
      this.props,
      this.className,
      this.components,
      undefined,
      computed(() => !this.props.counterTop),
      this.propsSkeleton
    )

    this.progress = new ProgressInclude(
      this.props,
      this.className,
      this.components,
      {
        circular: true,
        position: 'static',
        dense: true
      }
    )

    this.enabled = new EnabledInclude(this.props, this.progress)
    this.event = new EventClickInclude(this.props, this.enabled, this.emits)
    this.skeleton = new SkeletonInclude(
      this.props,
      this.classDesign,
      ['classBackground']
    )

    this.icons = new FieldIcons(this.props, this.className)
    this.size = new FieldSize(this.element, this.className)
  }

  /** Checks if an error needs to be displayed/ Проверяет, надо ли выводить ошибку */
  readonly isValidation = computed<boolean>(() => Boolean(
    this.props.validationMessage
    && (
      this.props.forceShowMessage
      || (
        !this.props.readonly
        && !this.props.disabled
      )
    )
  ))

  /** Values for the class/ Значения для класса */
  readonly classes = computed(() => ({
    [`${this.className}--cancel`]: this.icons.isCancel.value,
    [`${this.className}--suffix`]: this.props.suffix,
    [`${this.className}--validation`]: this.isValidation.value
  }))

  /**
   * Returns data for the slot.
   *
   * Возвращает данные для слота
   */
  getControl(): FieldControl {
    return {
      id: getElementId(),
      className: `${this.className}__body__input ${this.skeleton.classesSkeleton.classText}`,
      classHidden: `${this.className}__body__hidden`
    }
  }

  /** Values for the skeleton/ Значения для скелетона */
  protected readonly propsSkeleton = computed(() => ({
    isSkeleton: this.props.isSkeleton
  }))
}
