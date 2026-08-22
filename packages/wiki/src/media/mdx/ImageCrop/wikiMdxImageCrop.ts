import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import imageCropEn from './imageCrop.en.mdx'
import imageCropRu from './imageCrop.ru.mdx'

/**
 * MDX files for ImageCrop component
 *
 * MDX файлы для компонента ImageCrop
 */
export const wikiMdxImageCrop: StorybookComponentsMdxItem = {
  name: 'ImageCrop',
  descriptions: {
    imageCrop: {
      en: imageCropEn,
      ru: imageCropRu
    }
  }
}
