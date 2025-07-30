import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import highlightEn from './highlight.en.mdx'
import highlightRu from './highlight.ru.mdx'
import labelNumberEn from './labelNumber.en.mdx'
import labelNumberRu from './labelNumber.ru.mdx'
import valueEn from './value.en.mdx'
import valueRu from './value.ru.mdx'

export const wikiMdxValue: StorybookComponentsMdxItem = {
  name: 'Value',
  descriptions: {
    highlight: { en: highlightEn, ru: highlightRu },
    labelNumber: { en: labelNumberEn, ru: labelNumberRu },
    value: { en: valueEn, ru: valueRu }
  }
}
