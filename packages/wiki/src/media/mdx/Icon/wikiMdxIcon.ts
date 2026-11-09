import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import dynamicEn from './dynamic.en.mdx'
import dynamicRu from './dynamic.ru.mdx'
import exposeIsActiveEn from './expose.isActive.en.mdx'
import exposeIsActiveRu from './expose.isActive.ru.mdx'
import iconEn from './icon.en.mdx'
import iconRu from './icon.ru.mdx'

/**
 * MDX files for Icon component
 *
 * MDX файлы для компонента Icon
 */
export const wikiMdxIcon: StorybookComponentsMdxItem = {
  name: 'Icon',
  descriptions: {
    'dynamic': {
      en: dynamicEn,
      ru: dynamicRu
    },
    'expose.isActive': {
      en: exposeIsActiveEn,
      ru: exposeIsActiveRu
    },
    'icon': {
      en: iconEn,
      ru: iconRu
    }
  }
}
