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
  }
}
