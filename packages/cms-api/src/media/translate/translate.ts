import { Translate, TRANSLATE_GLOBAL_PREFIX } from '@dxtmisha/functional-basic'

/**
 * Lazy loaders for CMS translation dictionaries across 16 languages /
 * Ленивые загрузчики словарей перевода CMS для 16 языков
 */
export const translateList = {
  [TRANSLATE_GLOBAL_PREFIX]: async () => (await import('./translate-en')).default,
  ar: async () => (await import('./translate-ar')).default,
  de: async () => (await import('./translate-de')).default,
  es: async () => (await import('./translate-es')).default,
  fr: async () => (await import('./translate-fr')).default,
  he: async () => (await import('./translate-he')).default,
  it: async () => (await import('./translate-it')).default,
  ja: async () => (await import('./translate-ja')).default,
  ko: async () => (await import('./translate-ko')).default,
  pl: async () => (await import('./translate-pl')).default,
  pt: async () => (await import('./translate-pt')).default,
  ru: async () => (await import('./translate-ru')).default,
  tr: async () => (await import('./translate-tr')).default,
  uk: async () => (await import('./translate-uk')).default,
  vi: async () => (await import('./translate-vi')).default,
  zh: async () => (await import('./translate-zh')).default
}

Translate.addSyncByFile(translateList)
