import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import circularEn from './circular.en.mdx'
import circularRu from './circular.ru.mdx'
import delaysEn from './delays.en.mdx'
import delaysRu from './delays.ru.mdx'
import linearEn from './linear.en.mdx'
import linearRu from './linear.ru.mdx'
import progressEn from './progress.en.mdx'
import progressRu from './progress.ru.mdx'
import valuesEn from './values.en.mdx'
import valuesRu from './values.ru.mdx'

export const wikiMdxProgress: StorybookComponentsMdxItem = {
  name: 'Progress',
  descriptions: {
    circular: {
      en: circularEn,
      ru: circularRu
    },
    delays: {
      en: delaysEn,
      ru: delaysRu
    },
    linear: {
      en: linearEn,
      ru: linearRu
    },
    progress: {
      en: progressEn,
      ru: progressRu
    },
    values: {
      en: valuesEn,
      ru: valuesRu
    }
  }
}
