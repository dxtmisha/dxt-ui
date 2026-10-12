import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import exposeAddEn from './expose.add.en.mdx'
import exposeAddRu from './expose.add.ru.mdx'
import exposeAddCenterEn from './expose.addCenter.en.mdx'
import exposeAddCenterRu from './expose.addCenter.ru.mdx'
import rippleEn from './ripple.en.mdx'
import rippleRu from './ripple.ru.mdx'

/**
 * MDX files for Ripple component
 *
 * MDX файлы для компонента Ripple
 */
export const wikiMdxRipple: StorybookComponentsMdxItem = {
  name: 'Ripple',
  descriptions: {
    'expose.add': {
      en: exposeAddEn,
      ru: exposeAddRu
    },
    'expose.addCenter': {
      en: exposeAddCenterEn,
      ru: exposeAddCenterRu
    },
    'ripple': {
      en: rippleEn,
      ru: rippleRu
    }
  }
}
