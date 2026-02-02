import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiBarsInclude object contains descriptions of all properties for the Bars include
 *
 * Объект wikiBarsInclude содержит описание всех свойств для включения Bars
 */
export const wikiBarsInclude: StorybookArgsToList = {
  barsAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.bars,
      description: {
        en: 'Additional attributes for the bars (header toolbar) container',
        ru: 'Дополнительные атрибуты для контейнера бара (верхней панели)'
      }
    }
  },
  barsBackHide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.bars,
      description: {
        en: 'Hides the back button in the bars',
        ru: 'Скрывает кнопку назад в барах'
      }
    }
  },
  barsDescription: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.bars,
      type: 'string',
      description: {
        en: 'Description text displayed in the bars area (subtitle/help)',
        ru: 'Текст описания, отображаемый в области бара (подзаголовок/подсказка)'
      },
      value: 'Welcome to the application!'
    }
  },
  barsHide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.bars,
      description: {
        en: 'Hides the bars (header toolbar)',
        ru: 'Скрывает бар (верхнюю панель)'
      }
    }
  },
  barsLabel: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.bars,
      type: ['string', 'number'],
      description: {
        en: 'Label or numeric indicator shown in the bars header',
        ru: 'Метка или числовой индикатор, отображаемый в заголовке бара'
      },
      value: 'Hello friend'
    }
  },
  barsList: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.bars,
      description: {
        en: 'Array of buttons displayed in the bars area (actions)',
        ru: 'Массив кнопок, отображаемых в области бара (действия)'
      },
      value: [
        { icon: 'home', label: 'Home' },
        { icon: 'search', label: 'Search' },
        { icon: 'settings', label: 'Settings' }
      ]
    }
  }
}
