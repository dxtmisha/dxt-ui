import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiBreadcrumbs object contains properties for the Breadcrumbs component
 *
 * Объект wikiBreadcrumbs содержит свойства для компонента Breadcrumbs
 */
export const wikiBreadcrumbs: StorybookArgsToList = {
  'breadcrumbs.list': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      type: 'array',
      description: {
        en: 'List of breadcrumb items',
        ru: 'Список элементов хлебных крошек'
      },
      value: [
        { label: 'Home', to: '#', icon: 'home' },
        { label: 'Catalog', to: '#catalog' },
        { label: 'Shoes' }
      ]
    },
    isDemo: true
  }
}
