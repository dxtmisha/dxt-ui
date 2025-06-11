import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '@dxt-ui/functional'

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
      type: StorybookControl.array,
      // Принимает название иконки, ссылку на изображение, объект File или ссылку на PDF файл
      description: 'Accepts the name of an icon, a link to an image, a File object, or a link to a PDF file'
    }
  },
  'image.url': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      // Указывает путь к папке с изображениями
      description: 'Specifies the path to the folder containing images'
    }
  },

  // Adaptive
  'image.adaptive': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.adaptive,
      defaultValue: false,
      // Регулирует размер изображения для пропорционального выравнивания относительно других элементов
      description: 'Adjusts the image size for proportional alignment with other elements'
    }
  },
  'image.objectWidth': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.adaptive,
      // Указывает физическую ширину элемента на изображении для адаптивного выравнивания
      description: 'Defines the physical width of an element on the image for adaptive alignment'
    }
  },
  'image.objectHeight': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.adaptive,
      // Указывает физическую высоту элемента на изображении для адаптивного выравнивания
      description: 'Defines the physical height of an element on the image for adaptive alignment'
    }
  },
  'image.adaptiveGroup': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.adaptive,
      // Группирует элементы, связанные с адаптивностью
      description: 'Groups elements related to adaptiveness'
    }
  },
  'image.adaptiveAlways': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.adaptive,
      // Постоянно вычисляет размер изображения, даже если элемент находится вне экрана
      description: 'Continuously calculates the image size, even when the element is off-screen'
    }
  },

  // Style
  'image.coordinator': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.style,
      // Определяет область обрезки изображения, принимает массив значений для top, right, bottom, left
      description: 'Defines the crop area of the image, accepting an array of values for top, right, bottom, and left'
    }
  },
  'image.x': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      // Сдвигает изображение по оси X, принимает строку в формате % или px
      description: 'Moves the image along the X-axis, accepts a string in % or px format'
    }
  },
  'image.y': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      // Сдвигает изображение по оси Y, принимает строку в формате % или px
      description: 'Moves the image along the Y-axis, accepts a string in % or px format'
    }
  }
}
