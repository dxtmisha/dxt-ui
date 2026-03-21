import { Translate, TRANSLATE_GLOBAL_PREFIX } from '@dxtmisha/functional-basic'

export const translateList = {
  [TRANSLATE_GLOBAL_PREFIX]: async () => (await import('./translate-en')).default
}

Translate.addSyncByFile(translateList)
