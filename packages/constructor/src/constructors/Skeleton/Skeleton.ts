import {
  computed,
  type ComputedRef,
  inject,
  onMounted,
  onUnmounted,
  provide,
  ref,
  type Ref,
  watch
} from 'vue'
import {
  type ConstrClassObject,
  toNumber
} from '@dxtmisha/functional'

import type { SkeletonClassesList } from './basicTypes'
import { defaultsSkeleton, type SkeletonProps } from './props'
import { SKELETON_NAME_STATUS } from './const'

/**
 * Class for managing the Skeleton component logic.
 * It coordinates reactive loading states via parent-child provider injection and resolves CSS class lists.
 *
 * Класс для управления логикой компонента Skeleton.
 * Координирует реактивные состояния загрузки через внедрение провайдера между родителем и потомком и разрешает списки классов CSS.
 */
export class Skeleton {
  /** Timer instance for delayed visibility updates / Экземпляр таймера для отложенного обновления видимости */
  protected timeout?: ReturnType<typeof setTimeout>

  /** Reactive computed status of the parent skeleton / Реактивный вычисляемый статус родительского скелетона */
  protected status?: ComputedRef<boolean>

  /** Reactive state for visible status / Реактивное состояние статуса видимости */
  protected readonly visible: Ref<boolean>

  /**
   * Returns the list of available classes for the skeleton.
   *
   * Возвращает список доступных классов для скелетона.
   */
  readonly classesSkeleton: SkeletonClassesList

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
    this.classesSkeleton = Skeleton.getClassesList(this.className)
    this.visible = ref<boolean>(Boolean(this.isActive() && !toNumber(this.props.delay ?? defaultsSkeleton.delay)))

    watch(
      () => this.isActive(),
      this.switch
    )
    onMounted(this.switch)

    onUnmounted(() => {
      clearTimeout(this.timeout)
    })

    provide(SKELETON_NAME_STATUS, computed<boolean>(() => this.visible.value))
  }

  /**
   * Returns classes for the element.
   *
   * Возвращает классы для элемента.
   * @returns list of computed classes / список вычисленных классов
   */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--visible`]: this.visible.value,
      [`${this.className}--invisible`]: Boolean(this.props.invisible && this.isActive())
    }
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

  /**
   * Updates the visible status with a delay or immediately.
   *
   * Обновляет статус видимости с задержкой или немедленно.
   * @param visible new visibility state / новое состояние видимости
   * @param delay delay before state update / задержка перед обновлением состояния
   */
  protected setVisible(visible: boolean, delay?: number | string): void {
    const delayNumber = toNumber(delay ?? 0)

    if (delayNumber > 0) {
      this.timeout = setTimeout(() => {
        this.visible.value = visible
      }, delayNumber)
    } else {
      this.visible.value = visible
    }
  }

  /**
   * Resets the visible status or starts a timer for delayed hiding.
   *
   * Сбрасывает статус видимости или запускает таймер для отложенного скрытия.
   */
  protected toHide(): void {
    this.setVisible(false, this.props.delayHide ?? defaultsSkeleton.delayHide)
  }

  /**
   * Enables the visible status or starts a timer for delayed display.
   *
   * Включает статус видимости или запускает таймер для отложенного показа.
   */
  protected toVisible(): void {
    this.setVisible(true, this.props.delay ?? defaultsSkeleton.delay)
  }

  /**
   * Method triggers when the active property changes to change the status of the output of the element.
   *
   * Метод срабатывает при изменении свойства active для изменения статуса вывода элемента.
   */
  protected readonly switch = (): void => {
    clearTimeout(this.timeout)

    if (this.isActive()) {
      this.toVisible()
    } else if (this.visible.value) {
      this.toHide()
    }
  }
}
