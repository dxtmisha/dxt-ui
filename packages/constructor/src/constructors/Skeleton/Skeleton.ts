import {
  computed,
  type ComputedRef,
  getCurrentInstance,
  inject,
  provide,
  ref,
  type Ref,
  watch
} from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName,
  toNumber
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { SkeletonClassesList } from './basicTypes'
import { defaultsSkeleton, type SkeletonProps } from './props'
import type {
  SkeletonComponents,
  SkeletonEmits,
  SkeletonSlots
} from './types'
import { SKELETON_NAME_STATUS } from './const'

/** Skeleton dependency constructors type / Тип конструкторов зависимостей Skeleton */
export type SkeletonConstructors = {
  // No subordinate constructors / Нет дочерних конструкторов
}

/**
 * Class for managing the Skeleton component logic.
 * It coordinates reactive loading states via parent-child provider injection and resolves CSS class lists.
 *
 * Класс для управления логикой компонента Skeleton.
 * Координирует реактивные состояния загрузки через внедрение провайдера между родителем и потомком и разрешает списки классов CSS.
 */
export class Skeleton extends DesignLogicAbstract<
  HTMLDivElement,
  SkeletonComponents,
  SkeletonEmits,
  SkeletonSlots,
  SkeletonProps,
  SkeletonConstructors
> {
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

  /** List of available classes for the skeleton / Список доступных классов для скелетона */
  readonly classesSkeleton: SkeletonClassesList

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<SkeletonConstructors> = {}

  /** Timer instance for delayed visibility updates / Экземпляр таймера для отложенного обновления видимости */
  protected timeout?: ReturnType<typeof setTimeout>

  /** Reactive computed status of the parent skeleton / Реактивный вычисляемый статус родительского скелетона */
  protected readonly status?: ComputedRef<boolean>

  /** Reactive state for visible status / Реактивное состояние статуса видимости */
  protected readonly visible: Ref<boolean>

  /**
   * Constructor for initializing Skeleton logic.
   *
   * Конструктор для инициализации логики Skeleton.
   * @param props input properties / входные свойства
   * @param element root element reference / ссылка на корневой элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components connected component registry / реестр подключённых компонентов
   * @param slots named slot registry / реестр именованных слотов
   * @param emits component event emitter / функция событий компонента
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   * @param hasLifecycle whether to register component lifecycle hooks / регистрировать ли хуки жизненного цикла компонента
   */
  constructor(
    props: Readonly<SkeletonProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<SkeletonComponents, SkeletonProps>,
    slots?: SkeletonSlots,
    emits?: ConstrEmit<SkeletonEmits>,
    constructors?: Partial<SkeletonConstructors>,
    hasLifecycle: boolean = true
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors,
      hasLifecycle
    )

    const hasInstance = Boolean(getCurrentInstance())

    if (hasInstance) {
      this.status = inject<ComputedRef<boolean> | undefined>(SKELETON_NAME_STATUS, undefined)
    }

    this.classesSkeleton = Skeleton.getClassesList(this.naming.getName())
    this.visible = ref<boolean>(
      Boolean(
        this.isActive()
        && toNumber(this.props.delay ?? defaultsSkeleton.delay) <= 0
      )
    )

    if (hasInstance) {
      provide(SKELETON_NAME_STATUS, computed<boolean>(() => this.visible.value))
    }
  }

  /**
   * List of ARIA attributes for the skeleton element.
   *
   * Список ARIA-атрибутов для элемента скелетона.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.busy(this.isActive() || this.visible.value),
      ...AriaStaticInclude.live('polite')
    }
  }

  /**
   * Computed bindings for the skeleton element.
   *
   * Вычисляемые привязки для элемента скелетона.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind {
    return {
      inert: this.isInvisible() || undefined,
      ...this.aria
    }
  }

  /**
   * Returns classes for the element.
   *
   * Возвращает классы для элемента.
   * @returns list of computed classes / список вычисленных классов
   */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('active')]: this.isActive(),
      [this.naming.getStatusClass('visible')]: this.visible.value,
      [this.naming.getStatusClass('invisible')]: this.isInvisible()
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
   * Checks if the invisible mode is enabled.
   *
   * Проверяет, включен ли режим невидимости.
   * @returns status of the invisible mode / статус режима невидимости
   */
  isInvisible(): boolean {
    return Boolean(
      this.props.invisible
      && (this.isActive() || this.visible.value)
    )
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
   * Method triggers when the active property changes to change the status of the output of the element.
   *
   * Метод срабатывает при изменении свойства active для изменения статуса вывода элемента.
   */
  protected readonly switch = (): void => {
    clearTimeout(this.timeout)

    if (this.isActive()) {
      if (!this.visible.value) {
        this.toVisible()
      }
    } else if (this.visible.value) {
      this.toHide()
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
   * Hook executed when component mounts.
   *
   * Хук, выполняемый при монтировании компонента.
   */
  protected override readonly onMounted = (): void => {
    this.switch()
    watch(this.isActive, this.switch)
  }

  /**
   * Hook executed when component unmounts.
   *
   * Хук, выполняемый при размонтировании компонента.
   */
  protected override readonly onUnmounted = (): void => {
    clearTimeout(this.timeout)
  }
}
