import { type ComputedRef, inject } from 'vue'
import type { ConstrClassObject } from '@dxtmisha/functional'

import { Skeleton } from './Skeleton'
import type { SkeletonClassesList, SkeletonPropsInclude } from './basicTypes'

import { SKELETON_NAME_STATUS } from './const'

/**
 * Class for connecting to and working with the Skeleton component.
 *
 * Класс для подключения и работы с компонентом Skeleton.
 */
export class SkeletonInclude {
  /** Skeleton display states / Состояния отображения Skeleton */
  protected readonly status = inject<ComputedRef<boolean> | undefined>(SKELETON_NAME_STATUS, undefined)

  /** A list of available classes for the Skeleton / Список доступных классов для Skeleton */
  readonly classesSkeleton: SkeletonClassesList

  /**
   * Constructor for initializing SkeletonInclude properties.
   *
   * Конструктор для инициализации свойств SkeletonInclude.
   * @param props input data / входные данные
   * @param classDesign design name / название дизайна
   * @param classesList list of available classes / список доступных классов
   */
  constructor(
    protected readonly props: SkeletonPropsInclude,
    readonly classDesign: string,
    protected readonly classesList?: (keyof SkeletonClassesList)[]
  ) {
    this.classesSkeleton = Skeleton.getClassesListByDesign(classDesign)
  }

  /**
   * Returns the available list for the skeleton.
   *
   * Возвращает доступный список для скелетона.
   * @returns classes list object / объект списка классов
   */
  get classes(): ConstrClassObject {
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
  }

  /**
   * Values for the skeleton.
   *
   * Значения для скелетона.
   * @returns skeleton bindings / привязки скелетона
   */
  get binds() {
    return {
      isSkeleton: this.props.isSkeleton
    }
  }

  /**
   * Indicates whether the Skeleton status is enabled.
   *
   * Указывает, включён ли статус Skeleton.
   * @returns status indicator / индикатор статуса
   */
  isSkeleton(): boolean {
    return Boolean(this.status && this.status.value)
  }
}
