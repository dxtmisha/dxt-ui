import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

export const wikiIcon: StorybookArgsToList = {
  // Status
  'icon.active': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Sets the icon to an active state',
        ru: 'Переводит иконку в активное состояние'
      }
    },
    isDemo: true
  },

  // Values
  'icon.icon': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      type: ['string', 'File'],
      description: {
        en: 'Value of the main icon',
        ru: 'Значение основной иконки'
      },
      value: 'visibility'
    }
  },
  'icon.iconActive': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      type: ['string', 'File'],
      description: {
        en: 'Value of the active icon',
        ru: 'Значение активной иконки'
      },
      value: 'visibility_off'
    }
  },

  // Style
  'icon.start': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Sorts the element to the beginning',
        ru: 'Сортирует элемент в начало'
      }
    }
  },
  'icon.end': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Sorts the element to the end',
        ru: 'Сортирует элемент в конец'
      }
    }
  },
  'icon.high': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Raises the element above others',
        ru: 'Поднимает элемент над другими'
      }
    }
  },
  'icon.rect': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Makes the element rectangular',
        ru: 'Делает элемент прямоугольным'
      }
    },
    isDemo: true,
    demoOptions: {
      overlay: true
    }
  },
  'icon.circle': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Makes the element circular',
        ru: 'Делает элемент круглым'
      }
    },
    isDemo: true,
    demoOptions: {
      overlay: true
    }
  },
  'icon.square': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Makes the element square',
        ru: 'Делает элемент квадратным'
      }
    },
    isDemo: true,
    demoOptions: {
      overlay: true
    }
  },
  'icon.animationType': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      options: ['type1', 'type2'],
      description: {
        en: 'Defines the animation type for hide/show transitions',
        ru: 'Определяет тип анимации при скрытии/появлении'
      }
    }
  },
  'icon.animationShow': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables animation on first appearance',
        ru: 'Включает анимацию при первом появлении'
      }
    }
  }
}
