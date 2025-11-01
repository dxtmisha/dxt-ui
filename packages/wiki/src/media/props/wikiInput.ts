import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiInput object contains descriptions of all properties for the Input component
 *
 * Объект wikiInput содержит описание всех свойств для компонента Input
 */
export const wikiInput: StorybookArgsToList = {
  'input.list': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.form,
      description: {
        en: 'ID of a datalist element that contains predefined autocomplete options for the input field',
        ru: 'ID элемента datalist, содержащего предопределённые варианты для автозаполнения поля ввода'
      }
    }
  },
  'input.type': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.form,
      type: 'string',
      description: {
        en: 'Input type that determines the behavior and validation of the field',
        ru: 'Тип инпута, определяющий поведение и валидацию поля'
      }
    }
  }
}
