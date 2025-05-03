import { computed, type ComputedRef, inject } from 'vue'

import { Skeleton } from './Skeleton.ts'
import type { SkeletonClassesList } from './basicTypes.ts'

import { SKELETON_NAME_STATUS } from './const.ts'

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
   * @param classDesign design name/ название дизайна
   */
  constructor(
    classDesign: string
  ) {
    this.classesSkeleton = Skeleton.getClassesListByDesign(classDesign)
  }

  /**
   * Indicates whether the Skeleton status is enabled/ Указывает, включён ли статус Skeleton
   */
  readonly isSkeleton = computed<boolean>(() => Boolean(this.status && this.status.value))
}
