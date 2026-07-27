import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiTableHeaderItem object contains properties for the TableHeaderItem component
 *
 * Объект wikiTableHeaderItem содержит свойства для компонента TableHeaderItem
 */
export const wikiTableHeaderItem: StorybookArgsToList = {
  'tableHeaderItem.scope': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Header scope',
        ru: 'Область видимости заголовка'
      }
    }
  }
}
