import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TooltipEmits, TooltipSlots } from '@dxtmisha/constructor/Tooltip'

import item from './D1Tooltip.vue'

import type { TooltipProps } from './props'
export type { TooltipProps } from './props'

export const D1Tooltip: DefineSetupFnComponent<
  TooltipProps,
  ShortEmitsToObject<TooltipEmits>,
  SlotsType<TooltipSlots>
> = item
