import { computed, type ComputedRef, inject } from 'vue'

import { Skeleton } from './Skeleton'

import { SKELETON_NAME_STATUS } from './const.ts'

/**
 * Returns the property for implementing the select.
 *
 * Возвращает свойство для внедрения селекта.
 * @param classDesign design name/ название дизайна
 */
export const useSkeleton = function (
  classDesign: string
) {
  const status = inject<ComputedRef<boolean> | undefined>(SKELETON_NAME_STATUS, undefined)

  return {
    isSkeleton: computed<boolean>(() => Boolean(status && status.value)),
    classesSkeleton: Skeleton.getClassesListByDesign(classDesign)
  }
}
