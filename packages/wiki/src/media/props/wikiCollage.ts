import {
  type StorybookArgsToItem,
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

import { wikiList } from './wikiList'

/**
 * The wikiCollage object contains descriptions of all properties for the Collage component
 *
 * Объект wikiCollage содержит описание всех свойств для компонента Collage
 */
export const wikiCollage: StorybookArgsToList = {
  'collage.images': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'List of images or media items to display in the collage',
        ru: 'Список изображений или медиа-элементов для отображения в коллаже'
      },
      value: [
        { index: '1', image: 'https://picsum.photos/800/600?random=1', span: 'wide', label: 'Mountain Sunrise', description: 'Scenic dawn over the Alps', collageBarPosition: 'bottom' },
        { index: '2', image: 'https://picsum.photos/600/800?random=2', span: 'tall', label: 'Urban Architecture', collageBarPosition: 'top' },
        { index: '3', image: 'https://picsum.photos/800/800?random=3', span: 'standard' },
        { index: '4', image: 'https://picsum.photos/1200/800?random=4', span: 'large', label: 'Desert Dunes', description: 'Endless golden sands at twilight', collageBarPosition: 'bottom' },
        { index: '5', image: 'https://picsum.photos/600/900?random=5', span: 'tall', label: 'Forest Mist', description: 'Morning fog in the pine woods', collageBarPosition: 'static' },
        { index: '6', image: 'https://picsum.photos/1200/400?random=6', span: 'banner', label: 'Ocean Horizon', collageBarPosition: 'top' },
        { index: '7', image: 'https://picsum.photos/700/500?random=7', span: 'standard' },
        { index: '8', image: 'https://picsum.photos/500/700?random=8', span: 'tall', label: 'City Lights', description: 'Night traffic reflections', collageBarPosition: 'bottom' },
        { index: '9', image: 'https://picsum.photos/1000/1000?random=9', span: 'huge', label: 'Grand Canyon', description: 'Panoramic geological wonders under dramatic skies', collageBarPosition: 'bottom' },
        { index: '10', image: 'https://picsum.photos/900/600?random=10', span: 'wide', label: 'Coastal Breeze', collageBarPosition: 'static' },
        { index: '11', image: 'https://picsum.photos/640/960?random=11', span: 'tall' },
        { index: '12', image: 'https://picsum.photos/800/500?random=12', span: 'standard', label: 'Autumn Foliage', description: 'Vibrant autumn colors in the park', collageBarPosition: 'top' },
        { index: '13', image: 'https://picsum.photos/1100/700?random=13', span: 'large', label: 'Modern Gallery', description: 'Contemporary art exhibition', collageBarPosition: 'static' },
        { index: '14', image: 'https://picsum.photos/600/600?random=14', span: 'standard', label: 'Coffee Break', collageBarPosition: 'bottom' },
        { index: '15', image: 'https://picsum.photos/1200/500?random=15', span: 'banner', label: 'Skyline Sunset', description: 'Golden hour glow across the metropolis', collageBarPosition: 'bottom' },
        { index: '16', image: 'https://picsum.photos/750/1000?random=16', span: 'tall' }
      ]
    }
  },
  'collage.selected': wikiList['list.selected'] as StorybookArgsToItem
}
