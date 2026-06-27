import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import alertEn from './alert.en.mdx'
import alertRu from './alert.ru.mdx'
import alertCloseEn from './event.close.en.mdx'
import alertCloseRu from './event.close.ru.mdx'

/**
 * MDX files for Alert component
 *
 * MDX файлы для компонента Alert
 */
export const wikiMdxAlert: StorybookComponentsMdxItem = {
  name: 'Alert',
  descriptions: {
    'alert': {
      en: alertEn,
      ru: alertRu
    },
    'event.close': {
      en: alertCloseEn,
      ru: alertCloseRu
    }
  }
}
