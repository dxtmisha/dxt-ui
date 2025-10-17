import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import actionSheetEn from './actionSheet.en.mdx'
import actionSheetRu from './actionSheet.ru.mdx'
import touchCloseEn from './touchClose.en.mdx'
import touchCloseRu from './touchClose.ru.mdx'

/**
 * MDX files for ActionSheet component
 *
 * MDX файлы для компонента ActionSheet
 */
export const wikiMdxActionSheet: StorybookComponentsMdxItem = {
  name: 'ActionSheet',
  descriptions: {
    actionSheet: {
      en: actionSheetEn,
      ru: actionSheetRu
    },
    touchClose: {
      en: touchCloseEn,
      ru: touchCloseRu
    }
  }
}
