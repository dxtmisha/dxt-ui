import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiSegmentControl object contains descriptions of all properties for the SegmentControl component
 *
 * Объект wikiSegmentControl содержит описание всех свойств для компонента SegmentControl
 */
export const wikiSegmentControl: StorybookArgsToList = {
  'segmentControl.list': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'List of data for generating tabs',
        ru: 'Список данных для генерации вкладок'
      },
      value: [
        { label: 'Home', value: 'home' },
        { label: 'Profile', value: 'profile' },
        { label: 'Messages', value: 'messages' }
      ]
    }
  },
  'segmentControl.selected': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.status,
      type: 'string | number',
      description: {
        en: 'Selected value',
        ru: 'Выбранное значение'
      },
      value: 'home'
    }
  }
}
