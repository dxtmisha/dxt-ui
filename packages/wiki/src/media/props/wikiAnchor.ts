import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiAnchor object contains descriptions of all properties for the Anchor component
 *
 * Объект wikiAnchor содержит описание всех свойств для компонента Anchor
 */
export const wikiAnchor: StorybookArgsToList = {
  'anchor.name': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Anchor name for navigation within the page',
        ru: 'Имя якоря для навигации внутри страницы'
      },
      value: 'name-example'
    }
  },
  'anchor.isCopy': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Enables copy to clipboard functionality',
        ru: 'Включает функцию копирования в буфер обмена'
      }
    }
  }
}
