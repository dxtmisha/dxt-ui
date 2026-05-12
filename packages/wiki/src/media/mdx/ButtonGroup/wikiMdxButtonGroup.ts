import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import buttonGroupEn from './buttonGroup.en.mdx'
import buttonGroupRu from './buttonGroup.ru.mdx'

/**
 * MDX files for ButtonGroup component
 *
 * MDX файлы для компонента ButtonGroup
 */
export const wikiMdxButtonGroup: StorybookComponentsMdxItem = {
  name: 'ButtonGroup',
  descriptions: {
    buttonGroup: {
      en: buttonGroupEn,
      ru: buttonGroupRu
    }
  }
}
