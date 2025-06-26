import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiImage object contains descriptions of all properties for the image component
 *
 * Объект wikiImage содержит описание всех свойств для компонента изображения
 */
export const wikiImage: StorybookArgsToList = {
  // Value
  'image.value': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'File'],
      description: {
        en: 'Accepts the name of an icon, a link to an image, a File object, or a link to a PDF file',
        ru: 'Принимает название иконки, ссылку на изображение, объект File или ссылку на PDF файл'
      },
      value: 'rocket_launch'
    }
  },
  'image.url': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Specifies the path to the folder containing images',
        ru: 'Указывает путь к папке с изображениями'
      }
    }
  },

  // Adaptive
  'image.adaptive': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.adaptive,
      defaultValue: false,
      description: {
        en: 'Adjusts the image size for proportional alignment with other elements',
        ru: 'Регулирует размер изображения для пропорционального выравнивания относительно других элементов'
      }
    }
  },
  'image.objectWidth': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.adaptive,
      description: {
        en: 'Defines the physical width of an element on the image for adaptive alignment',
        ru: 'Указывает физическую ширину элемента на изображении для адаптивного выравнивания'
      }
    }
  },
  'image.objectHeight': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.adaptive,
      description: {
        en: 'Defines the physical height of an element on the image for adaptive alignment',
        ru: 'Указывает физическую высоту элемента на изображении для адаптивного выравнивания'
      }
    }
  },
  'image.adaptiveGroup': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.adaptive,
      description: {
        en: 'Groups elements related to adaptiveness',
        ru: 'Группирует элементы, связанные с адаптивностью'
      }
    }
  },
  'image.adaptiveAlways': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.adaptive,
      description: {
        en: 'Continuously calculates the image size, even when the element is off-screen',
        ru: 'Постоянно вычисляет размер изображения, даже если элемент находится вне экрана'
      }
    }
  },

  // Style
  'image.coordinator': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.style,
      type: 'number[]',
      description: {
        en: 'Defines the crop area of the image, accepting an array of values for top, right, bottom, and left',
        ru: 'Определяет область обрезки изображения, принимает массив значений для top, right, bottom, left'
      }
    }
  },
  'image.x': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Moves the image along the X-axis, accepts a string in % or px format',
        ru: 'Сдвигает изображение по оси X, принимает строку в формате % или px'
      }
    }
  },
  'image.y': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Moves the image along the Y-axis, accepts a string in % or px format',
        ru: 'Сдвигает изображение по оси Y, принимает строку в формате % или px'
      }
    }
  }
}
