import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiCarouselItem object contains descriptions of all properties for the CarouselItem component
 *
 * Объект wikiCarouselItem содержит описание всех свойств для компонента CarouselItem
 */
export const wikiCarouselItem: StorybookArgsToList = {
  'carouselItem.image': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string | File | ImageProps',
      description: {
        en: 'Specifies the source image for the carousel slide',
        ru: 'Указывает исходное изображение для слайда карусели'
      },
      value: 'https://picsum.photos/800/600?random=1'
    },
    isDemo: true,
    demo: 'https://picsum.photos/800/600?random=1'
  }
}
