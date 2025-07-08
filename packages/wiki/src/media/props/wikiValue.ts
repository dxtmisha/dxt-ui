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
        en: 'Specifies the image value for the component',
        ru: 'Указывает значение изображения для компонента'
      }
    }
  }
}
