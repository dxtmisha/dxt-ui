import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiCropArea object contains descriptions of all properties for the CropArea component
 *
 * Объект wikiCropArea содержит описание всех свойств для компонента CropArea
 */
export const wikiCropArea: StorybookArgsToList = {
  'cropArea.disabledBottom': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Disables bottom resize handles (bottom, left-bottom, right-bottom)',
        ru: 'Отключает нижние ручки изменения размера (bottom, left-bottom, right-bottom)'
      }
    }
  },
  'cropArea.disabledLeft': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Disables left resize handles (left, left-top, left-bottom)',
        ru: 'Отключает левые ручки изменения размера (left, left-top, left-bottom)'
      }
    }
  },
  'cropArea.disabledRight': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Disables right resize handles (right, right-top, right-bottom)',
        ru: 'Отключает правые ручки изменения размера (right, right-top, right-bottom)'
      }
    }
  },
  'cropArea.disabledTop': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Disables top resize handles (top, left-top, right-top)',
        ru: 'Отключает верхние ручки изменения размера (top, left-top, right-top)'
      }
    }
  }
}

