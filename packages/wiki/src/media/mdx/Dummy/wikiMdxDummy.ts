import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import dummyEn from './dummy.en.mdx'
import dummyRu from './dummy.ru.mdx'

/**
 * MDX files for Dummy component
 *
 * MDX файлы для компонента Dummy
 */
export const wikiMdxDummy: StorybookComponentsMdxItem = {
  name: 'Dummy',
  descriptions: {
    dummy: {
      en: dummyEn,
      ru: dummyRu
    }
  }
}
