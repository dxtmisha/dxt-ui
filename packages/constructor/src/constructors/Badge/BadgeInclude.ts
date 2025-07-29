import { computed, type VNode } from 'vue'
import { type ConstrBind, DesignComponents, getBind, getRef, type RefOrNormal } from '@dxt-ui/functional'

import type { BadgeComponentInclude, BadgePropsInclude } from './basicTypes'
import type { BadgePropsBasic } from './props'

/**
 * BadgeInclude class provides functionality for conditionally rendering badge components
 * within other components. It manages the logic for determining when to display a badge
 * and configures the appropriate properties.
 *
 * Класс BadgeInclude предоставляет функциональность для условного рендеринга компонентов
 * бейджа внутри других компонентов. Он управляет логикой определения необходимости
 * отображения бейджа и настраивает соответствующие свойства.
 *
 * @template Props - Properties interface extending BadgePropsInclude
 */
export class BadgeInclude<Props extends BadgePropsInclude = BadgePropsInclude> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<BadgeComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<ConstrBind<BadgePropsBasic>>
  ) {
  }

  /**
   * Checks whether a badge is specified for rendering the component/
   * Проверяет, указан ли бейдж для отображения компонента
   */
  readonly is = computed(() => Boolean(this.props.badge || this.props.badgeDot))

  /**
   * list of properties for the badge component/ список свойств для компонента бейджа
   */
  readonly binds = computed(() => getBind(
    this.props.badgeDot ? {} : this.props.badge,
    {
      class: `${this.className}__badge`,
      dot: this.props.badgeDot,
      ...getRef(this.extra)
    },
    'label',
    true
  ))

  /**
   * Render of the badge component
   *
   * Рендер компонента бейджа
   */
  readonly render = (): VNode[] => {
    if (
      this.components
      && this.is.value
    ) {
      return this.components.render(
        'badge',
        this.binds.value,
        undefined,
        'badge'
      )
    }

    return []
  }
}
