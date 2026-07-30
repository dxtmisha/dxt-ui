import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * Descriptions of Headroom properties
 *
 * Описания свойств Headroom
 */
export const wikiHeadroom: StorybookArgsToList = {
  'headroom.scrollElement': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Target scrolling element, selector string or window for scroll event tracking',
        ru: 'Целевой элемент прокрутки, селектор (строка) или окно для отслеживания событий прокрутки'
      },
      value: '#wiki-descriptions-headroom'
    }
  }
}
