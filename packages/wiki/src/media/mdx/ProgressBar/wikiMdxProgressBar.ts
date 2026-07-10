import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import progressBarEn from './progressBar.en.mdx'
import progressBarRu from './progressBar.ru.mdx'

/**
 * MDX descriptions for the ProgressBar component
 *
 * MDX описания для компонента ProgressBar
 */
export const wikiMdxProgressBar: StorybookComponentsMdxItem = {
  name: 'ProgressBar',
  descriptions: {
    progressBar: {
      en: progressBarEn,
      ru: progressBarRu
    }
  }
}
