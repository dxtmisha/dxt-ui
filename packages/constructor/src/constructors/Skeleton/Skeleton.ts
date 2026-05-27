import { computed, type ComputedRef, inject, provide } from 'vue'

import type { SkeletonClassesList } from './basicTypes'
import type { SkeletonProps } from './props'

import { SKELETON_NAME_STATUS } from './const'

/**
 * Class for managing the Skeleton component logic.
 * It coordinates reactive loading states via parent-child provider injection and resolves CSS class lists.
 *
 * Класс для управления логикой компонента Skeleton.
 * Координирует реактивные состояния загрузки через внедрение провайдера между родителем и потомком и разрешает списки классов CSS.
 */
export class Skeleton {
  /** Reactive computed status of the parent skeleton / Реактивный вычисляемый статус родительского скелетона */
  protected status?: ComputedRef<boolean>

  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов для текущего элемента.
   */
  readonly classes: SkeletonClassesList

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param className class name / название класса
   */
  constructor(
    protected readonly props: SkeletonProps,
    protected readonly className: string
  ) {
    this.status = inject<ComputedRef<boolean> | undefined>(SKELETON_NAME_STATUS, undefined)
    this.classes = Skeleton.getClassesList(this.className)

    provide(SKELETON_NAME_STATUS, computed<boolean>(() => this.isActive()))
  }

  /**
   * Checks if the loading mode is enabled.
   *
   * Проверяет, включен ли режим загрузки.
   * @returns status of the loading mode / статус режима загрузки
   */
  readonly isActive = (): boolean => Boolean(this.status?.value || this.props.active)

  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов.
   * @param className class name / название класса
   * @returns list of available classes / список доступных классов
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
   * @param design design name / название дизайна
   * @returns list of available classes / список доступных классов
   */
  static getClassesListByDesign(design: string): SkeletonClassesList {
    return this.getClassesList(`${design}-skeleton`)
  }
}
