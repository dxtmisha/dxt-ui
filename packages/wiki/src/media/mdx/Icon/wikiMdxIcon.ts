import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import iconEn from './icon.en.mdx'
import iconRu from './icon.ru.mdx'

import exposeIsActiveEn from './expose.isActive.en.mdx'
import exposeIsActiveRu from './expose.isActive.ru.mdx'

export const wikiMdxIcon: StorybookComponentsMdxItem = {
  name: 'Icon',
  descriptions: {
    'icon': {
      en: iconEn,
      ru: iconRu
    },
    'expose.isActive': {
      en: exposeIsActiveEn,
      ru: exposeIsActiveRu
    }
  }
}
