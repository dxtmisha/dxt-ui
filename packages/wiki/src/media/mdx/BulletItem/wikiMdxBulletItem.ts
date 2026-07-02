import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import bulletItemEn from './bulletItem.en.mdx'
import bulletItemRu from './bulletItem.ru.mdx'

/**
 * MDX files for BulletItem component
 *
 * MDX файлы для компонента BulletItem
 */
export const wikiMdxBulletItem: StorybookComponentsMdxItem = {
  name: 'BulletItem',
  descriptions: {
    bulletItem: {
      en: bulletItemEn,
      ru: bulletItemRu
    }
  }
}
