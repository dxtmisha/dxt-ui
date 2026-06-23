import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { MenuLanguageEmits, MenuLanguageSlots } from '@dxtmisha/constructor/MenuLanguage'

import item from './D1MenuLanguage.vue'

import type { MenuLanguageProps } from './props'
export type { MenuLanguageProps } from './props'

export const D1MenuLanguage: DefineSetupFnComponent<
  MenuLanguageProps,
  ShortEmitsToObject<MenuLanguageEmits>,
  SlotsType<MenuLanguageSlots>
> = item
