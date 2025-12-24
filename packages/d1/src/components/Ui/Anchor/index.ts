import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { AnchorEmits, AnchorSlots } from '@dxtmisha/constructor/Anchor'

import item from './D1Anchor.vue'

import type { AnchorProps } from './props'
export type { AnchorProps } from './props'

export const D1Anchor: DefineSetupFnComponent<
  AnchorProps,
  ShortEmitsToObject<AnchorEmits>,
  SlotsType<AnchorSlots>
> = item
