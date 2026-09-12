import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import collageBarEn from './collageBar.en.mdx'
import collageBarRu from './collageBar.ru.mdx'

/**
 * MDX files for CollageBar component
 *
 * MDX файлы для компонента CollageBar
 */
export const wikiMdxCollageBar: StorybookComponentsMdxItem = {
  name: 'CollageBar',
  descriptions: {
    collageBar: {
      en: collageBarEn,
      ru: collageBarRu
    }
  }
}
