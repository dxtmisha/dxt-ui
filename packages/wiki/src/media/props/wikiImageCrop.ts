import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiImageCrop object contains descriptions of all properties for the ImageCrop component
 *
 * Объект wikiImageCrop содержит описание всех свойств для компонента ImageCrop
 */
export const wikiImageCrop: StorybookArgsToList = {
  'imageCrop.image': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string | File | ImageProps',
      description: {
        en: 'Specifies the source image for cropping (URL, File, or image props object)',
        ru: 'Указывает исходное изображение для кадрирования (URL, File или объект свойств изображения)'
      },
      value: 'https://picsum.photos/300/500?random=42'
    },
    isDemo: true
  }
}
