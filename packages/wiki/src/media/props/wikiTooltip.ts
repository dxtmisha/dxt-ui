import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiTooltip object contains descriptions of all properties for the Tooltip component
 *
 * Объект wikiTooltip содержит описание всех свойств для компонента Tooltip
 */
export const wikiTooltip: StorybookArgsToList = {
  'tooltip.delay': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Delay before showing the tooltip',
        ru: 'Задержка перед появлением подсказки'
      }
    }
  },
  'tooltip.delayHide': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Delay before hiding the tooltip',
        ru: 'Задержка перед скрытием подсказки'
      }
    }
  },
  'tooltip.indent': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Indent from the element',
        ru: 'Отступ от элемента'
      }
    }
  },
  'tooltip.top': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Displaying the tooltip on top of the element',
        ru: 'Отображение подсказки поверх элемента'
      }
    }
  }
}
