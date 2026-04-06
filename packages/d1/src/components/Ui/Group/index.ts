import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { GroupEmits, GroupSlots } from '@dxtmisha/constructor/Group'

import item from './D1Group.vue'

import type { GroupProps } from './props'
export type { GroupProps } from './props'

export const D1Group: DefineSetupFnComponent<
  GroupProps,
  ShortEmitsToObject<GroupEmits>,
  SlotsType<GroupSlots>
> = item
