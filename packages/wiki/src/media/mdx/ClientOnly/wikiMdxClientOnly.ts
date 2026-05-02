import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import clientOnlyEn from './clientOnly.en.mdx'
import clientOnlyRu from './clientOnly.ru.mdx'

/**
 * MDX files for ClientOnly component
 *
 * MDX файлы для компонента ClientOnly
 */
export const wikiMdxClientOnly: StorybookComponentsMdxItem = {
  name: 'ClientOnly',
  descriptions: {
    clientOnly: {
      en: clientOnlyEn,
      ru: clientOnlyRu
    }
  }
}
