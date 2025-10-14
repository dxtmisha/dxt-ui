import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ActionSheetEmits, ActionSheetSlots } from '@dxtmisha/constructor/ActionSheet'

import item from './D1ActionSheet.vue'

import type { ActionSheetProps } from './props'
export type { ActionSheetProps } from './props'

export const D1ActionSheet: DefineSetupFnComponent<
  ActionSheetProps,
  ShortEmitsToObject<ActionSheetEmits>,
  SlotsType<ActionSheetSlots>
> = item
