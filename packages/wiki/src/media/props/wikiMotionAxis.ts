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
  }
}
