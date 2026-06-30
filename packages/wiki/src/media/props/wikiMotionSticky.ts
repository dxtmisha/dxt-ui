import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * Descriptions of MotionSticky properties
 *
 * Описания свойств MotionSticky
 */
export const wikiMotionSticky: StorybookArgsToList = {
  'motionSticky.classActivity': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'CSS class applied when the element becomes sticky',
        ru: 'CSS-класс, применяемый, когда элемент становится липким'
      }
    }
  },
  'motionSticky.elementScroll': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Scroll container element or selector',
        ru: 'Элемент контейнера прокрутки или селектор'
      },
      value: '#design-sticky-demo'
    }
  }
}
