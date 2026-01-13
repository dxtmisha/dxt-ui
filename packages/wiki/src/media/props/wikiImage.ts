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
    },
    isDemo: true,
    demo: 'https://drscdn.500px.org/photo/294267357/q%3D90_m%3D2048/v2?sig=adb52b9add18ad21ab4a86b99695377f2a18821c609d42149b3426dfb99cf924'
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

      description: {
        en: 'Adjusts the image size for proportional alignment with other elements',
        ru: 'Регулирует размер изображения для пропорционального выравнивания относительно других элементов'
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
  'image.alt': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      description: {
        en: 'Alternative text for the image when using the img tag',
        ru: 'Альтернативный текст для изображения при использовании тега img'
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
  'image.lazy': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Enables lazy loading of the image using the native loading="lazy" attribute',
        ru: 'Включает ленивую загрузку изображения с использованием нативного атрибута loading="lazy"'
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
  'image.picture': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      type: ['Record<string, string>', 'ImagePictureList'],
      description: {
        en: 'Sources for different display conditions using the picture tag with media queries',
        ru: 'Источники для разных условий отображения с использованием тега picture и медиа-запросов'
      }
    }
  },
  'image.srcset': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'Record<string, string>'],
      description: {
        en: 'Set of image sources for different screen resolutions and pixel densities',
        ru: 'Набор источников изображения для разных разрешений экрана и плотности пикселей'
      }
    }
  },
  'image.tagImg': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Use the img tag instead of background image for better accessibility and SEO',
        ru: 'Использовать тег img вместо фонового изображения для лучшей доступности и SEO'
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
