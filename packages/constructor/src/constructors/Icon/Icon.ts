import { computed, type ComputedRef, type Ref, type ToRefs } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  DesignComp,
  getBindRef
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { type ImageEventData } from '../Image'
import { SkeletonInclude } from '../Skeleton'

import type { IconComponents, IconEmits, IconSlots } from './types'
import type { IconProps } from './props'
import type { IconEventLoad } from './basicTypes'

/**
 * Base class for working with icons.
 *
 * Базовый класс для работы с иконками.
 */
export class Icon {
  /**
   * Returns the property for the base icon/ Возвращает свойство для базовой иконки
   */
  readonly iconBind: ComputedRef<IconEventLoad['iconBind']>

  /**
   * Returns the property for the additional icon/ Возвращает свойство для дополнительной иконки
   */
  readonly iconActiveBind: ComputedRef<IconEventLoad['iconActiveBind']>

  /**
   * An object for working with the Skeleton/ Объект для работы с Skeleton
   */
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
   * @param SkeletonIncludeConstructor class for working with Skeleton/ класс для работы с Skeleton
   */
  constructor(
    protected readonly props: IconProps,
    protected readonly refs: ToRefs<IconProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<IconComponents, IconProps>,
    protected readonly slots?: IconSlots,
    protected readonly emits?: ConstrEmit<IconEmits>,
    protected readonly SkeletonIncludeConstructor: typeof SkeletonInclude = SkeletonInclude
  ) {
    this.iconBind = getBindRef(
      refs.icon,
      computed(() => ({
        key: 'mainIcon',
        class: `${className}__icon`,
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: this.isActive.value,
        onLoad: this.onLoad
      }))
    )

    this.iconActiveBind = getBindRef(
      refs.iconActive,
      computed(() => ({
        key: 'activeIcon',
        class: `${className}__iconActive`,
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: !this.isActive.value
      }))
    )

    this.skeleton = new SkeletonIncludeConstructor(
      props,
      classDesign,
      ['classBackgroundVariant']
    )
  }

  /**
   * Checks if the additional icon is active/ Проверяет, активна ли дополнительная иконка
   */
  readonly isActive = computed<boolean>(() => Boolean(this.props.active && this.props.iconActive))

  /**
   * Values for the class/ Значения для класса
   */
  readonly classes = computed<ConstrClassObject>(() => ({
    ...this.skeleton.classes.value
  }))

  /**
   * Computed bindings for the icon element.
   *
   * Вычисляемые привязки для элемента иконки.
   */
  readonly binds = computed<any>(() => ({
    key: 'icon',
    tabindex: this.props.dynamic ? 0 : undefined,
    ...AriaStaticInclude.role(this.getRole()),
    ...AriaStaticInclude.label(this.props.ariaLabel),
    ...AriaStaticInclude.hidden(!this.props.dynamic)
  }))

  /**
   * Get the ARIA role for the icon element.
   *
   * Получить ARIA роль для элемента иконки.
   */
  protected getRole(): string | undefined {
    if (this.props.role) {
      return this.props.role
    }

    if (this.props.dynamic) {
      return 'button'
    }

    return undefined
  }

  /**
   * Triggers an event when the image loading is complete.
   *
   * Вызывает событие, когда завершится загрузка картинки.
   * @param event event object/ объект события
   */
  protected readonly onLoad = (event: ImageEventData) => this.emits?.('load', event)
}
