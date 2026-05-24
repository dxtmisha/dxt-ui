import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import menuButtonEn from './menuButton.en.mdx'
import menuButtonRu from './menuButton.ru.mdx'

/**
 * MDX files for MenuButton component
 *
 * MDX файлы для компонента MenuButton
 */
export const wikiMdxMenuButton: StorybookComponentsMdxItem = {
  name: 'MenuButton',
  descriptions: {
    menuButton: {
      en: menuButtonEn,
      ru: menuButtonRu
    }
  }
}
