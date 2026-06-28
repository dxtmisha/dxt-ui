import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import breadcrumbsEn from './breadcrumbs.en.mdx'
import breadcrumbsRu from './breadcrumbs.ru.mdx'

/**
 * MDX files for Breadcrumbs component
 *
 * MDX файлы для компонента Breadcrumbs
 */
export const wikiMdxBreadcrumbs: StorybookComponentsMdxItem = {
  name: 'Breadcrumbs',
  descriptions: {
    breadcrumbs: {
      en: breadcrumbsEn,
      ru: breadcrumbsRu
    }
  }
}
