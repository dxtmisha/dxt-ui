import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiSelectableArea object contains descriptions of all properties for the SelectableArea component
 *
 * Объект wikiSelectableArea содержит описание всех свойств для компонента SelectableArea
 */
export const wikiSelectableArea: StorybookArgsToList = {
  'selectableArea.active': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Active status for continuous selection',
        ru: 'Активный статус для непрерывного выделения'
      }
    },
    isDemo: true
  },
  'selectableArea.selected': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.status,
      type: ['string', 'string[]'],
      description: {
        en: 'Array or string of currently selected values',
        ru: 'Массив или строка текущих выбранных значений'
      }
    },
    isDemo: true
  }
}
