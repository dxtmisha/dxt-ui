import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiArrow object contains descriptions of all properties for the Arrow component
 *
 * Объект wikiArrow содержит описание всех свойств для компонента Arrow
 */
export const wikiArrow: StorybookArgsToList = {
  elementTarget: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'The arrow will point to this element if auto mode is set',
        ru: 'Стрелка будет указывать на этот элемент, если установлен автоматический режим'
      },
      value: '#id-arrow-target'
    }
  }
}
