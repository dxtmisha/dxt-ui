import { Translate, TRANSLATE_GLOBAL_PREFIX } from '@dxtmisha/functional-basic'

export const translateList = {
  [TRANSLATE_GLOBAL_PREFIX]: async () => (await import('./translate-en')).default,
  ru: async () => (await import('./translate-ru')).default
}

Translate.addSyncByFile(translateList)
