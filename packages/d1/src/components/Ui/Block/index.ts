import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { BlockEmits, BlockSlots } from '@dxtmisha/constructor/Block'

import item from './D1Block.vue'

import type { BlockProps } from './props'
export type { BlockProps } from './props'

export const D1Block: DefineSetupFnComponent<
  BlockProps,
  ShortEmitsToObject<BlockEmits>,
  SlotsType<BlockSlots>
> = item
