import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

export const wikiValue: StorybookArgsToList = {
  image: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string | File | ImageProps',
      description: {
        en: 'Specifies the dimensions of the image',
        ru: 'Определяет размеры изображения'
      }
    }
  }
}
