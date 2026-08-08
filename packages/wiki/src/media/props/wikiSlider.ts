import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiSlider object contains properties for the Slider component
 *
 * Объект wikiSlider содержит свойства для компонента Slider
 */
export const wikiSlider: StorybookArgsToList = {
  'slider.marks': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.option,
      type: ['array', 'object'],
      description: {
        en: 'List of marks or tick values',
        ru: 'Список меток или делений'
      }
    }
  },
  'slider.vertical': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Vertical layout orientation',
        ru: 'Вертикальная ориентация'
      }
    },
    isDemo: true
  }
}
