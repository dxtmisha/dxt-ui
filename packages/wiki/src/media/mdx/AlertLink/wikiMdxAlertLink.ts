import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import alertLinkEn from './alertLink.en.mdx'
import alertLinkRu from './alertLink.ru.mdx'

/**
 * MDX files for AlertLink component
 *
 * MDX файлы для компонента AlertLink
 */
export const wikiMdxAlertLink: StorybookComponentsMdxItem = {
  name: 'AlertLink',
  descriptions: {
    alertLink: {
      en: alertLinkEn,
      ru: alertLinkRu
    }
  }
}
