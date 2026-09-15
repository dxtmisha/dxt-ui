import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

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
        { image: 'https://picsum.photos/800/600?random=1', span: 'wide', label: 'Photo 1' },
        { image: 'https://picsum.photos/600/800?random=2', span: 'tall', label: 'Photo 2' },
        { image: 'https://picsum.photos/800/800?random=3', span: 'standard', label: 'Photo 3' },
        { image: 'https://picsum.photos/1200/800?random=4', span: 'large', label: 'Photo 4' },
        { image: 'https://picsum.photos/600/900?random=5', span: 'tall', label: 'Photo 5' },
        { image: 'https://picsum.photos/1200/400?random=6', span: 'banner', label: 'Photo 6' },
        { image: 'https://picsum.photos/700/500?random=7', span: 'standard', label: 'Photo 7' },
        { image: 'https://picsum.photos/500/700?random=8', span: 'tall', label: 'Photo 8' },
        { image: 'https://picsum.photos/1000/1000?random=9', span: 'huge', label: 'Photo 9' },
        { image: 'https://picsum.photos/900/600?random=10', span: 'wide', label: 'Photo 10' },
        { image: 'https://picsum.photos/640/960?random=11', span: 'tall', label: 'Photo 11' },
        { image: 'https://picsum.photos/800/500?random=12', span: 'standard', label: 'Photo 12' },
        { image: 'https://picsum.photos/1100/700?random=13', span: 'large', label: 'Photo 13' },
        { image: 'https://picsum.photos/600/600?random=14', span: 'standard', label: 'Photo 14' },
        { image: 'https://picsum.photos/1200/500?random=15', span: 'banner', label: 'Photo 15' },
        { image: 'https://picsum.photos/750/1000?random=16', span: 'tall', label: 'Photo 16' }
      ]
    }
  }
}
