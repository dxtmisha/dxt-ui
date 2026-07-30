import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * Descriptions of MotionFlip properties
 *
 * Описания свойств MotionFlip
 */
export const wikiMotionFlip: StorybookArgsToList = {
  'motionFlip.disabled': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Disables FLIP layout animation',
        ru: 'Отключает FLIP-анимацию перестроения'
      }
    }
  }
}
