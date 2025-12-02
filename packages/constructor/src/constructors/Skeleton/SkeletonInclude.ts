import { computed, type ComputedRef, inject } from 'vue'
import type { ConstrClassObject } from '@dxtmisha/functional'

import { Skeleton } from './Skeleton'
import type { SkeletonClassesList, SkeletonPropsInclude } from './basicTypes'

import { SKELETON_NAME_STATUS } from './const'

/**
 * Класс для подключения и работы с компонентом Skeleton.
 *
 * A class for connecting to and working with the Skeleton component.
 */
export class SkeletonInclude {
  /**
   * Skeleton display states/ Состояния отображения Skeleton
   */
  protected readonly status = inject<ComputedRef<boolean> | undefined>(SKELETON_NAME_STATUS, undefined)

  /**
   * A list of available classes for the Skeleton/ Список доступных классов для Skeleton
   */
  readonly classesSkeleton: SkeletonClassesList

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param classDesign design name/ название дизайна
   * @param classesList list of available classes/ список доступных классов
   */
  constructor(
    protected readonly props: SkeletonPropsInclude,
    classDesign: string,
    protected readonly classesList?: (keyof SkeletonClassesList)[]
  ) {
    this.classesSkeleton = Skeleton.getClassesListByDesign(classDesign)
  }

  /**
   * Indicates whether the Skeleton status is enabled/ Указывает, включён ли статус Skeleton
   */
  readonly isSkeleton = computed<boolean>(() => Boolean(this.status && this.status.value))

  /**
   * Returns the available list for the skeleton/ Возвращает доступный список для скелетона
   */
  readonly classes = computed<ConstrClassObject>(() => {
    const classes: ConstrClassObject = {}

    if (
      this.classesList
      && this.props.isSkeleton
    ) {
      this.classesList.forEach((className) => {
        classes[this.classesSkeleton[className]] = true
      })
    }

    return classes
  })

  /** Values for the skeleton/ Значения для скелетона */
  readonly binds = computed(() => ({
    isSkeleton: this.props.isSkeleton
  }))
}
