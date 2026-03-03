import { Translate, TRANSLATE_GLOBAL_PREFIX } from '@dxtmisha/functional-basic'

import { translateEn } from './translate-en'

export const translateList = {
  [TRANSLATE_GLOBAL_PREFIX]: translateEn
}

Translate.addSyncByLocation(translateList)
