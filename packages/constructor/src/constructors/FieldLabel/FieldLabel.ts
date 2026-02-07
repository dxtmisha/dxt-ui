import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrClassObject, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { LabelInclude } from '../../classes/LabelInclude'
import { FieldCounterInclude } from '../FieldCounter'
import { ProgressInclude } from '../Progress'
import { SkeletonInclude } from '../Skeleton'

import type { FieldLabelComponents, FieldLabelEmits, FieldLabelSlots } from './types'
import type { FieldLabelProps } from './props'

/**
 * FieldLabel
 */
export class FieldLabel {
  /** Label include/ Подключение метки */
  readonly label: LabelInclude

  /** Field counter include/ Подключение счетчика поля */
  readonly fieldCounter: FieldCounterInclude<FieldLabelProps>

  /** Progress include/ Подключение прогресса */
  readonly progress: ProgressInclude

  /** Skeleton include/ Подключение скелетона */
  readonly skeleton: SkeletonInclude

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
   * @param LabelConstructor class for creating a label/ класс для создания метки
   * @param FieldCounterConstructor class for working with field counter/ класс для работы со счетчиком поля
   * @param ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   */
  constructor(
    protected readonly props: FieldLabelProps,
    protected readonly refs: ToRefs<FieldLabelProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<FieldLabelComponents, FieldLabelProps>,
    protected readonly slots?: FieldLabelSlots,
    protected readonly emits?: ConstrEmit<FieldLabelEmits>,
    LabelConstructor: typeof LabelInclude = LabelInclude,
    FieldCounterConstructor: typeof FieldCounterInclude = FieldCounterInclude,
    ProgressConstructor: typeof ProgressInclude = ProgressInclude,
    SkeletonConstructor: typeof SkeletonInclude = SkeletonInclude
  ) {
    const skeleton = new SkeletonConstructor(this.props, this.classDesign, ['classTextVariant'])

    this.label = new LabelConstructor(
      this.props,
      this.className,
      undefined,
      this.slots,
      undefined,
      undefined,
      true,
      skeleton
    )

    this.fieldCounter = new FieldCounterConstructor(
      this.props,
      this.className,
      this.components
    )

    this.progress = new ProgressConstructor(
      this.props,
      this.className,
      this.components,
      {
        circular: true,
        position: 'static',
        dense: true
      }
    )

    this.skeleton = skeleton
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * Возвращает объект классов, включающий классы скелетона, если он активен.
   */
  readonly classes = computed<ConstrClassObject>(() => {
    return {
      ...this.skeleton.classes.value
    }
  })
}
