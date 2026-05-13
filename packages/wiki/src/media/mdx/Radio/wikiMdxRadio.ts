import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import radioEn from './radio.en.mdx'
import radioRu from './radio.ru.mdx'

/**
 * MDX files for Radio component
 *
 * MDX файлы для компонента Radio
 */
export const wikiMdxRadio: StorybookComponentsMdxItem = {
  name: 'Radio',
  descriptions: {
    radio: {
      en: radioEn,
      ru: radioRu
    }
  }
}
