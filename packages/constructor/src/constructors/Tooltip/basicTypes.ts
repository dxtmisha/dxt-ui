import type { Ref } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'

import type { AriaList } from '../../types/ariaTypes'
import type { TooltipProps } from './props'

export type TooltipControlBinds
  = AriaList
    & {
      class: string
      onclick: () => void
      onmouseover: (event: MouseEvent) => void
      onmouseout: (event: MouseEvent) => void
    }
export type TooltipControl
  = TooltipControlBinds
    & {
      open: Ref<boolean>
      binds: TooltipControlBinds
    }

/**
 * Component map for including the Tooltip component/
 * Карта компонентов для подключения компонента Tooltip
 */
export type TooltipComponentInclude = {
  tooltip?: object
}

/**
 * Props used to include and configure the Tooltip component/
 * Свойства для подключения и настройки компонента Tooltip
 */
export type TooltipPropsInclude<
  Tooltip extends TooltipProps = TooltipProps
> = {
  /** Additional attributes for Tooltip component/ Дополнительные атрибуты для компонента Tooltip */
  tooltipAttrs?: ConstrBind<Tooltip>
}
