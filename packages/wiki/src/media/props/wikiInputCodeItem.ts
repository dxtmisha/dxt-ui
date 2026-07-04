import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiInputCodeItem object contains descriptions of all properties for the InputCodeItem component
 *
 * Объект wikiInputCodeItem содержит описание всех свойств для компонента InputCodeItem
 */
export const wikiInputCodeItem: StorybookArgsToList = {
  'inputCodeItem.hide': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Hide entered characters (renders as mask/placeholder)',
        ru: 'Скрыть введённые символы (отображается как маска/плейсхолдер)'
      }
    }
  },
  'inputCodeItem.match': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'RegExp',
      description: {
        en: 'RegExp for input verification',
        ru: 'Регулярное выражение для проверки ввода'
      }
    }
  },
  'inputCodeItem.move': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Focus movement enabled',
        ru: 'Разрешено ли перемещение фокуса'
      }
    }
  }
}
