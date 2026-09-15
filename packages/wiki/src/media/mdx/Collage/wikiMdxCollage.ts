import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import appearanceEn from './appearance.en.mdx'
import appearanceRu from './appearance.ru.mdx'
import collageEn from './collage.en.mdx'
import collageRu from './collage.ru.mdx'
import exposeUpdateEn from './expose.update.en.mdx'
import exposeUpdateRu from './expose.update.ru.mdx'

/**
 * MDX files for Collage component
 *
 * MDX файлы для компонента Collage
 */
export const wikiMdxCollage: StorybookComponentsMdxItem = {
  name: 'Collage',
  descriptions: {
    'appearance': {
      en: appearanceEn,
      ru: appearanceRu
    },
    'collage': {
      en: collageEn,
      ru: collageRu
    },
    'expose.update': {
      en: exposeUpdateEn,
      ru: exposeUpdateRu
    }
  }
}
