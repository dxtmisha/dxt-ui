import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import bulletEn from './bullet.en.mdx'
import bulletRu from './bullet.ru.mdx'
import htmlEn from './html.en.mdx'
import htmlRu from './html.ru.mdx'

/**
 * MDX files for Bullet component
 *
 * MDX файлы для компонента Bullet
 */
export const wikiMdxBullet: StorybookComponentsMdxItem = {
  name: 'Bullet',
  descriptions: {
    bullet: {
      en: bulletEn,
      ru: bulletRu
    },
    html: {
      en: htmlEn,
      ru: htmlRu
    }
  }
}
