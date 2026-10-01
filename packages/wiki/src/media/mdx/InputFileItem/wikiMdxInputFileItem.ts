import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import inputFileItemEn from './inputFileItem.en.mdx'
import inputFileItemRu from './inputFileItem.ru.mdx'
import eventDeleteEn from './event.delete.en.mdx'
import eventDeleteRu from './event.delete.ru.mdx'
import eventRetryEn from './event.retry.en.mdx'
import eventRetryRu from './event.retry.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'

/**
 * MDX files for InputFileItem component
 *
 * MDX файлы для компонента InputFileItem
 */
export const wikiMdxInputFileItem: StorybookComponentsMdxItem = {
  name: 'InputFileItem',
  descriptions: {
    'inputFileItem': {
      en: inputFileItemEn,
      ru: inputFileItemRu
    },
    'event.delete': {
      en: eventDeleteEn,
      ru: eventDeleteRu
    },
    'event.retry': {
      en: eventRetryEn,
      ru: eventRetryRu
    },
    'expose': {
      en: exposeEn,
      ru: exposeRu
    }
  }
}
