import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract,
  getBind
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'

import { SkeletonInclude } from '../Skeleton'

import type { AriaList } from '../../types/ariaTypes'
import type { RoleType } from '../../types/roleTypes'
import type { ImageEventData } from '../Image'

import type { IconEventLoad } from './basicTypes'
import type { IconProps } from './props'
import type { IconComponents, IconEmits, IconSlots } from './types'

/** Icon dependency constructors type / Тип конструкторов зависимостей Icon */
export type IconConstructors = {
  /** Enabled status constructor / Конструктор статуса активности */
  enabled: typeof EnabledInclude
  /** Event click constructor / Конструктор клика по событию */
  event: typeof EventClickInclude
  /** Skeleton constructor / Конструктор скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * Base class for working with icons (orchestrator).
 * Manages accessibility bindings, click interactions, skeleton loading states,
 * and active/inactive icon resolution.
 *
 * Базовый класс для работы с иконками (оркестратор).
 * Управляет привязками доступности, взаимодействиями по клику, состояниями
 * загрузки скелетона и разрешением активной/неактивной иконки.
 */
export class Icon extends DesignLogicAbstract<
  HTMLSpanElement,
  IconComponents,
  IconEmits,
  IconSlots,
  IconProps,
  IconConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<IconConstructors> = {
    enabled: {
      item: EnabledInclude,
      parameters: () => [this.props]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        this.props,
        () => this.i('enabled'),
        this.emits
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      parameters: () => [
        this.props,
        this.naming,
        ['classBackgroundVariant']
      ]
    }
  }

  /**
   * List of ARIA attributes for the icon element.
   *
   * Список ARIA-атрибутов для элемента иконки.
   * @returns ARIA attributes / ARIA атрибуты
   */
  get aria(): AriaList {
    if (this.props.dynamic) {
      return {
        ...AriaStaticInclude.role(this.role),
        ...AriaStaticInclude.label(this.props.ariaLabel),
        ...(this.i('enabled').isDisabled ? AriaStaticInclude.disabled(true) : {})
      }
    }

    return AriaStaticInclude.hidden()
  }

  /**
   * Computed bindings for the icon element.
   *
   * Вычисляемые привязки для элемента иконки.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind {
    const properties: ConstrBind = {
      key: 'icon',
      ...this.aria
    }

    if (this.props.dynamic) {
      return {
        ...properties,
        tabindex: this.i('enabled').isDisabled ? undefined : (this.props.tabindex ?? 0),
        ...this.i('event').binds
      }
    }

    return properties
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {
      ...(this.props.isSkeleton ? this.i('skeleton').classes : {})
    }
  }

  /**
   * Returns the property for the base icon.
   *
   * Возвращает свойство для базовой иконки.
   * @returns main icon bindings / привязки основной иконки
   */
  get iconBind(): IconEventLoad['iconBind'] {
    return getBind(
      this.props.icon,
      {
        key: 'mainIcon',
        class: this.naming.getSubClass('icon'),
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: this.isActive(),
        onLoad: this.onLoad
      }
    )
  }

  /**
   * Returns the property for the additional icon.
   *
   * Возвращает свойство для дополнительной иконки.
   * @returns active icon bindings / привязки активной иконки
   */
  get iconActiveBind(): IconEventLoad['iconActiveBind'] {
    return getBind(
      this.props.iconActive,
      {
        key: 'activeIcon',
        class: this.naming.getSubClass('iconActive'),
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: !this.isActive(),
        onLoad: this.onLoad
      }
    )
  }

  /**
   * Get the ARIA role for the icon element.
   *
   * Получить ARIA роль для элемента иконки.
   * @returns role name or undefined / название роли или undefined
   */
  get role(): RoleType | undefined {
    if (this.props.role) {
      return this.props.role
    }

    if (this.props.dynamic) {
      return 'button'
    }

    return undefined
  }

  /**
   * Checks if the additional icon is active.
   *
   * Проверяет, активна ли дополнительная иконка.
   * @returns true if active icon is displayed / true, если отображается активная иконка
   */
  readonly isActive = (): boolean => {
    return Boolean(this.props.active && this.props.iconActive)
  }

  /**
   * Triggers an event when the image loading is complete.
   *
   * Вызывает событие, когда завершится загрузка картинки.
   * @param event event object / объект события
   */
  protected readonly onLoad = (event: ImageEventData): void => {
    this.emits?.('load', event)
  }
}
