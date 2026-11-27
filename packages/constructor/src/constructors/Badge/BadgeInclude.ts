// ai-none

import { type ConstrBind, getBind, isFilledOrNumber } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { BadgePropsInclude } from './basicTypes'
import type { BadgeProps } from './props'
import type { BadgeExpose, BadgeSlots } from './types'

/**
 * BadgeInclude class provides functionality for conditionally rendering badge components
 * within other components. It manages the logic for determining when to display a badge
 * and configures the appropriate properties.
 *
 * Класс BadgeInclude предоставляет функциональность для условного рендеринга компонентов
 * бейджа внутри других компонентов. Он управляет логикой определения необходимости
 * отображения бейджа и настраивает соответствующие свойства.
 */
export class BadgeInclude extends ComponentIncludeAbstract<
  BadgePropsInclude,
  BadgeProps,
  BadgeExpose,
  BadgeSlots
> {
  /**
   * Checks whether a badge or dot is specified for rendering.
   *
   * Проверяет, указан ли бейдж или точка для отображения.
   * @param props input properties / входные свойства
   * @returns true if badge or dot is present / true, если бейдж или точка присутствуют
   */
  static is(props?: BadgePropsInclude): boolean {
    return Boolean(
      isFilledOrNumber(props?.badge)
      || props?.badgeDot
    )
  }

  /** Component sub-name or code identifier / Дополнительное имя компонента или идентификатор кода */
  protected name = 'badge'
  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected propsAttrsName = 'badgeAttrs'

  /**
   * Checks whether a badge is specified for rendering the component.
   *
   * Проверяет, указан ли бейдж для отображения компонента.
   * @returns true if badge should be displayed / true, если бейдж должен отображаться
   */
  override get is(): boolean {
    return BadgeInclude.is(this.getProps())
  }

  /**
   * Resolves and returns design properties specifically bound for the badge.
   *
   * Разрешает и возвращает свойства дизайна, привязанные именно к бейджу.
   * @returns resolved badge properties or undefined / разрешенные свойства бейджа или undefined
   */
  protected override getExtra(): Partial<ConstrBind<BadgeProps>> | undefined {
    const props = this.getProps()
    const extra = super.getExtra()

    if (props.badgeDot) {
      return {
        ...extra,
        dot: props.badgeDot
      }
    }

    return getBind(
      props.badge,
      extra,
      'label',
      true
    )
  }
}
