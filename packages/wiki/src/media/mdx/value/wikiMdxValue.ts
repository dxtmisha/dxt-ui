import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import valueEn from './value.en.mdx'
import valueRu from './value.ru.mdx'
import labelNumberEn from './labelNumber.en.mdx'
import labelNumberRu from './labelNumber.ru.mdx'

export const wikiMdxValue: StorybookComponentsMdxItem = {
  name: 'Value',
  descriptions: {
    value: { en: valueEn, ru: valueRu },
    labelNumber: { en: labelNumberEn, ru: labelNumberRu }
  }
}
