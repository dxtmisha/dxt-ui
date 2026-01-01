import type { Ref } from 'vue'
import type { AriaList } from '../../types/ariaTypes'

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
