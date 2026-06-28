import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import avatarEn from './avatar.en.mdx'
import avatarRu from './avatar.ru.mdx'
import reductionEn from './reduction.en.mdx'
import reductionRu from './reduction.ru.mdx'

/**
 * MDX files for Avatar component
 *
 * MDX файлы для компонента Avatar
 */
export const wikiMdxAvatar: StorybookComponentsMdxItem = {
  name: 'Avatar',
  descriptions: {
    avatar: {
      en: avatarEn,
      ru: avatarRu
    },
    reduction: {
      en: reductionEn,
      ru: reductionRu
    }
  }
}
