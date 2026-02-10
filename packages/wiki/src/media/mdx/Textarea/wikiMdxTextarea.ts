import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import autosizeEn from './autosize.en.mdx'
import autosizeRu from './autosize.ru.mdx'
import textareaEn from './textarea.en.mdx'
import textareaRu from './textarea.ru.mdx'

/**
 * MDX files for Textarea component
 *
 * MDX файлы для компонента Textarea
 */
export const wikiMdxTextarea: StorybookComponentsMdxItem = {
  name: 'Textarea',
  descriptions: {
    autosize: {
      en: autosizeEn,
      ru: autosizeRu
    },
    textarea: {
      en: textareaEn,
      ru: textareaRu
    }
  }
}
