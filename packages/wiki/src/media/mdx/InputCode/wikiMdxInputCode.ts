import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import inputCodeEn from './inputCode.en.mdx'
import inputCodeRu from './inputCode.ru.mdx'
import eventEn from './event.en.mdx'
import eventRu from './event.ru.mdx'

/**
 * MDX files for InputCode component
 *
 * MDX файлы для компонента InputCode
 */
export const wikiMdxInputCode: StorybookComponentsMdxItem = {
  name: 'InputCode',
  descriptions: {
    inputCode: {
      en: inputCodeEn,
      ru: inputCodeRu
    },
    events: {
      en: eventEn,
      ru: eventRu
    }
  }
}
