import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import cropAreaEn from './cropArea.en.mdx'
import cropAreaRu from './cropArea.ru.mdx'
import eventResizeEn from './event.resize.en.mdx'
import eventResizeRu from './event.resize.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'

/**
 * MDX files for CropArea component
 *
 * MDX файлы для компонента CropArea
 */
export const wikiMdxCropArea: StorybookComponentsMdxItem = {
  name: 'CropArea',
  descriptions: {
    'cropArea': {
      en: cropAreaEn,
      ru: cropAreaRu
    },
    'event.resize': {
      en: eventResizeEn,
      ru: eventResizeRu
    },
    'expose': {
      en: exposeEn,
      ru: exposeRu
    }
  }
}


