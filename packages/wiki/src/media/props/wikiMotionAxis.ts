import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * Descriptions of MotionAxis properties
 *
 * Описания свойств MotionAxis
 */
export const wikiMotionAxis: StorybookArgsToList = {
  'motionAxis.selected': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Selected element',
        ru: 'Выбранный элемент'
      },
      value: 'slide2'
    }
  },
  'motionAxis.animationHeight': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables height animation',
        ru: 'Включает анимацию высоты'
      }
    }
  },
  'motionAxis.direction': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Animation direction',
        ru: 'Направление анимации'
      }
    }
  },
  'motionAxis.inDomSlide': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'List of slides that should remain in the DOM',
        ru: 'Список слайдов, которые должны оставаться в DOM'
      }
    }
  }
}
