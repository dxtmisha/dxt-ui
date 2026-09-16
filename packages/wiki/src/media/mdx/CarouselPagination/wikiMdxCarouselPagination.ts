import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import carouselPaginationEn from './carouselPagination.en.mdx'
import carouselPaginationRu from './carouselPagination.ru.mdx'
import eventsEn from './events.en.mdx'
import eventsRu from './events.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'
import typeEn from './type.en.mdx'
import typeRu from './type.ru.mdx'

/**
 * MDX files for CarouselPagination component
 *
 * MDX файлы для компонента CarouselPagination
 */
export const wikiMdxCarouselPagination: StorybookComponentsMdxItem = {
  name: 'CarouselPagination',
  descriptions: {
    'carouselPagination': {
      en: carouselPaginationEn,
      ru: carouselPaginationRu
    },
    'type': {
      en: typeEn,
      ru: typeRu
    },
    'events': {
      en: eventsEn,
      ru: eventsRu
    },
    'expose': {
      en: exposeEn,
      ru: exposeRu
    },
    'slots': {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
