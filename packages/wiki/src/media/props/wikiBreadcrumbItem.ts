import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiBreadcrumbItem object contains properties for the BreadcrumbItem component
 *
 * Объект wikiBreadcrumbItem содержит свойства для компонента BreadcrumbItem
 */
export const wikiBreadcrumbItem: StorybookArgsToList = {
  'breadcrumbItem.back': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.value,
      type: 'boolean',
      description: {
        en: 'Determines whether navigation should go to the previous page (back)',
        ru: 'Определяет, ведет ли переход на предыдущую страницу (назад)'
      }
    },
    isDemo: true
  }
}
