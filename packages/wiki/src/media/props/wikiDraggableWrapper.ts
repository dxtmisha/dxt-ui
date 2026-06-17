import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiDraggableWrapper object contains properties for the DraggableWrapper component
 *
 * Объект wikiDraggableWrapper содержит свойства для компонента DraggableWrapper
 */
export const wikiDraggableWrapper: StorybookArgsToList = {
  'draggableWrapper.classesSquare': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.option,
      type: 'string | string[]',
      description: {
        en: 'Custom classes for the placeholder square element',
        ru: 'Пользовательские классы для элемента-заполнителя'
      }
    }
  },
  'draggableWrapper.delay': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.option,
      type: 'number | string',
      description: {
        en: 'Delay before dragging starts in milliseconds',
        ru: 'Задержка перед началом перетаскивания в миллисекундах'
      }
    }
  }
}
