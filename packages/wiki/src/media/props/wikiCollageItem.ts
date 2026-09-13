import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

import { wikiImage } from './wikiImage'

/**
 * The wikiCollageItem object contains descriptions of all properties for the CollageItem component
 *
 * Объект wikiCollageItem содержит описание всех свойств для компонента CollageItem
 */
export const wikiCollageItem: StorybookArgsToList = {
  'collageItem.coordinator': wikiImage['image.coordinator'],
  'collageItem.image': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string | File | ImageProps',
      description: {
        en: 'Specifies the source image for the collage item',
        ru: 'Указывает исходное изображение для элемента коллажа'
      },
      value: 'https://picsum.photos/800/600?random=42'
    },
    isDemo: true,
    demo: 'https://picsum.photos/800/600?random=42'
  },
  'collageItem.span': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Grid span preset for the collage item',
        ru: 'Предустановка размера элемента коллажа в сетке'
      }
    },
    isDemo: true
  },
  'collageItem.x': wikiImage['image.x'],
  'collageItem.y': wikiImage['image.y']
}
