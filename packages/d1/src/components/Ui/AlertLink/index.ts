import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { AlertLinkEmits, AlertLinkSlots } from '@dxtmisha/constructor/AlertLink'

import item from './D1AlertLink.vue'

import type { AlertLinkProps } from './props'
export type { AlertLinkProps } from './props'

export const D1AlertLink: DefineSetupFnComponent<
  AlertLinkProps,
  ShortEmitsToObject<AlertLinkEmits>,
  SlotsType<AlertLinkSlots>
> = item
