import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { InputSocialEmits, InputSocialSlots } from '@dxtmisha/constructor/InputSocial'

import item from './D1InputSocial.vue'

import type { InputSocialProps } from './props'
export type { InputSocialProps } from './props'

export const D1InputSocial: DefineSetupFnComponent<
  InputSocialProps,
  ShortEmitsToObject<InputSocialEmits>,
  SlotsType<InputSocialSlots>
> = item
