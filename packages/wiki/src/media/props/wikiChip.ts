import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiChip object contains descriptions of all properties for the chip component
 *
 * Объект wikiChip содержит описание всех свойств для компонента чипа
 */
export const wikiChip: StorybookArgsToList = {
  'chip.assistive': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Alternative visual appearance style',
        ru: 'Альтернативный стиль внешнего вида'
      }
    }
  },
  'chip.input': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Input-style visual appearance',
        ru: 'Внешний вид в стиле поля ввода'
      }
    }
  }
}
