import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import highlightEn from './highlight.en.mdx'
import highlightRu from './highlight.ru.mdx'
import labelNumberEn from './labelNumber.en.mdx'
import labelNumberRu from './labelNumber.ru.mdx'
import valueEn from './value.en.mdx'
import valueRu from './value.ru.mdx'
import vModelEn from './v-model.en.mdx'
import vModelRu from './v-model.ru.mdx'

export const wikiMdxValue: StorybookComponentsMdxItem = {
  name: 'Value',
  descriptions: {
    'highlight': {
      en: highlightEn,
      ru: highlightRu
    },
    'labelNumber': {
      en: labelNumberEn,
      ru: labelNumberRu
    },
    'v-model': {
      en: vModelEn,
      ru: vModelRu
    },
    'value': {
      en: valueEn,
      ru: valueRu
    }
  }
}
