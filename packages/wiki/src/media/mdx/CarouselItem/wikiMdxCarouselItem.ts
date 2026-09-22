import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import carouselItemEn from './carouselItem.en.mdx'
import carouselItemRu from './carouselItem.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'
import exposeGetSlideEn from './expose.getSlide.en.mdx'
import exposeGetSlideRu from './expose.getSlide.ru.mdx'

/**
 * MDX files for CarouselItem component
 *
 * MDX файлы для компонента CarouselItem
 */
export const wikiMdxCarouselItem: StorybookComponentsMdxItem = {
  name: 'CarouselItem',
  descriptions: {
    carouselItem: {
      en: carouselItemEn,
      ru: carouselItemRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    },
    'expose.getSlide': {
      en: exposeGetSlideEn,
      ru: exposeGetSlideRu
    }
  }
}

