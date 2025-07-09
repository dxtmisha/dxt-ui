import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiStyle object contains common properties for all components in the style category.
 *
 * Объект wikiStyle содержит общие свойства для всех компонентов в категории стиль.
 */
export const wikiStyle: StorybookArgsToList = {
  asPalette: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Changes the color depending on the palette class; otherwise, uses the default color',
        ru: 'Изменяет цвет в зависимости от класса палитры; иначе используется стандартный цвет'
      }
    }
  },
  dir: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Mirrors the component depending on the site direction (RTL/LTR)',
        ru: 'Зеркально отражает компонент в зависимости от направления сайта (RTL/LTR)'
      }
    }
  },
  dynamic: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Makes the component dynamic, reacting to events like hover and focus',
        ru: 'Делает компонент динамичным, реагируя на события, такие как hover и focus'
      }
    }
  },
  inverse: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Inverts the colors of the component',
        ru: 'Инвертирует цвета компонента'
      }
    }
  },
  isSkeleton: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Displays the component in skeleton mode',
        ru: 'Отображает компонент в режиме скелетона'
      }
    }
  },
  overlay: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Adds a background overlay to the component',
        ru: 'Добавляет наложение фона компоненту'
      }
    }
  },
  rounded: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      options: [],
      type: 'string',
      description: {
        en: 'Adds rounded corners to the component',
        ru: 'Добавляет скругленные углы компоненту'
      }
    }
  },
  size: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      options: [],
      type: 'string',
      description: {
        en: 'Specifies the dimensions of the element',
        ru: 'Определяет размеры элемента'
      }
    }
  }
}
