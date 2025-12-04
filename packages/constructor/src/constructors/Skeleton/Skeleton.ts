import { computed, type ComputedRef, inject, provide, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxtmisha/functional'

import type { SkeletonClassesList } from './basicTypes'
import type { SkeletonComponents, SkeletonEmits, SkeletonSlots } from './types'
import type { SkeletonProps } from './props'

import { SKELETON_NAME_STATUS } from './const'

/**
 * Skeleton
 */
export class Skeleton {
  protected status?: ComputedRef<boolean>

  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов для текуший элемента.
   */
  readonly classes: SkeletonClassesList

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: SkeletonProps,
    protected readonly refs: ToRefs<SkeletonProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly components?: DesignComp<SkeletonComponents, SkeletonProps>,
    protected readonly slots?: SkeletonSlots,
    protected readonly emits?: ConstrEmit<SkeletonEmits>
  ) {
    this.status = inject<ComputedRef<boolean> | undefined>(SKELETON_NAME_STATUS, undefined)
    this.classes = Skeleton.getClassesList(this.className)

    provide(SKELETON_NAME_STATUS, this.isActive)
  }

  /**
   * Checks if the loading mode is enabled.
   *
   * Проверяет, включен ли режим загрузки.
   */
  readonly isActive = computed<boolean>(() => Boolean(this.status?.value || this.props.active))

  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов.
   * @param className class name/ название класса
   */
  static getClassesList(className: string): SkeletonClassesList {
    return {
      classText: `${className}__text`,
      classTextVariant: `${className}__textVariant`,
      classBackground: `${className}__background`,
      classBackgroundAfter: `${className}__backgroundAfter`,
      classBackgroundBefore: `${className}__backgroundBefore`,
      classBackgroundVariant: `${className}__backgroundVariant`,
      classBorder: `${className}__border`,
      classBorderVariant: `${className}__borderVariant`,
      classNone: `${className}__none`
    }
  }

  /**
   * Returns a list of available classes by design name.
   *
   * Возвращает список доступных классов по названию дизайна.
   * @param design design name/ названия дизайна
   */
  static getClassesListByDesign(design: string): SkeletonClassesList {
    return this.getClassesList(`${design}-skeleton`)
  }
}
