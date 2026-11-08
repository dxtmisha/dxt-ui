import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiComponentOutlet object contains descriptions of all properties for the ComponentOutlet component
 *
 * Объект wikiComponentOutlet содержит описание всех свойств для компонента ComponentOutlet
 */
export const wikiComponentOutlet: StorybookArgsToList = {
  'componentOutlet.name': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Registered component name in ComponentStorage to resolve and render',
        ru: 'Название зарегистрированного в ComponentStorage компонента для разрешения и рендеринга'
      }
    }
  },
  'componentOutlet.props': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional properties merged with the registered default properties of the resolved component',
        ru: 'Дополнительные свойства, объединяемые со свойствами по умолчанию разрешённого компонента'
      }
    }
  }
}
