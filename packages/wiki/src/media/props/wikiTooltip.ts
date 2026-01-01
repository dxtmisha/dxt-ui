import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiTooltip object contains descriptions of all properties for the Tooltip component
 *
 * Объект wikiTooltip содержит описание всех свойств для компонента Tooltip
 */
export const wikiTooltip: StorybookArgsToList = {
  arrow: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Adding an arrow pointing to the element',
        ru: 'Добавление стрелки, указывающей на элемент'
      },
      value: false
    }
  }
}
