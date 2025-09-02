import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import fieldCounterEn from './fieldCounter.en.mdx'
import fieldCounterRu from './fieldCounter.ru.mdx'
import templatesEn from './templates.en.mdx'
import templatesRu from './templates.ru.mdx'

/**
 * MDX files for FieldCounter component
 *
 * MDX файлы для компонента FieldCounter
 */
export const wikiMdxFieldCounter: StorybookComponentsMdxItem = {
  name: 'FieldCounter',
  descriptions: {
    fieldCounter: {
      en: fieldCounterEn,
      ru: fieldCounterRu
    },
    templates: {
      en: templatesEn,
      ru: templatesRu
    }
  }
}
