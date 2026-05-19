import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import switchEn from './switch.en.mdx'
import switchRu from './switch.ru.mdx'

/**
 * MDX files for Switch component
 *
 * MDX файлы для компонента Switch
 */
export const wikiMdxSwitch: StorybookComponentsMdxItem = {
  name: 'Switch',
  descriptions: {
    switch: {
      en: switchEn,
      ru: switchRu
    }
  }
}
