import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import textareaAutosizeEn from './textarea-autosize.en.mdx'
import textareaAutosizeRu from './textarea-autosize.ru.mdx'

/**
 * MDX files for TextareaAutosize component
 *
 * MDX файлы для компонента TextareaAutosize
 */
export const wikiMdxTextareaAutosize: StorybookComponentsMdxItem = {
  name: 'TextareaAutosize',
  descriptions: {
    'textarea-autosize': {
      en: textareaAutosizeEn,
      ru: textareaAutosizeRu
    }
  }
}
