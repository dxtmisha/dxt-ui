import type { Ref } from 'vue'

export type TooltipControlBinds = {
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
