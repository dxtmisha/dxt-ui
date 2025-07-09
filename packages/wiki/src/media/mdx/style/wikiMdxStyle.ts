import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import dirEn from './dir.en.mdx'
import dirRu from './dir.ru.mdx'

export const wikiMdxStyle: StorybookComponentsMdxItem = {
  name: 'Style',
  descriptions: {
    dir: {
      en: dirEn,
      ru: dirRu
    }
  }
}
