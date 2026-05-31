import { getBind } from '@dxtmisha/functional'

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
  protected name = 'badge'
  protected propsAttrsName = 'badgeAttrs'

  /**
   * Checks whether a badge is specified for rendering the component /
   * Проверяет, указан ли бейдж для отображения компонента
   */
  override get is(): boolean {
    const props = this.getProps()

    return Boolean(props.badge || props.badgeDot)
  }

  /**
   * Resolves and returns design properties specifically bound for the badge.
   *
   * Разрешает и возвращает свойства дизайна, привязанные именно к бейджу.
   * @returns resolved badge properties or undefined / разрешенные свойства бейджа или undefined
   */
  protected override getExtra() {
    const props = this.getProps()
    const extra = super.getExtra()

    if (props.badgeDot) {
      return {
        dot: props.badgeDot,
        ...extra
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
