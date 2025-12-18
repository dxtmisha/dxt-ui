import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import blockEn from './block.en.mdx'
import blockRu from './block.ru.mdx'

/**
 * MDX files for Block component
 *
 * MDX файлы для компонента Block
 */
export const wikiMdxBlock: StorybookComponentsMdxItem = {
  name: 'Block',
  descriptions: {
    block: {
      en: blockEn,
      ru: blockRu
    }
  }
}
