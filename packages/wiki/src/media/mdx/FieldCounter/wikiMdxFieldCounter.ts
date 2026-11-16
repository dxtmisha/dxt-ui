import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import accessibilityEn from './accessibility.en.mdx'
import accessibilityRu from './accessibility.ru.mdx'
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
    accessibility: {
      en: accessibilityEn,
      ru: accessibilityRu
    },
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
