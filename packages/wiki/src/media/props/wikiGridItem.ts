import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiGridItem object contains descriptions of all properties for the GridItem component
 *
 * Объект wikiGridItem содержит описание всех свойств для компонента GridItem
 */
export const wikiGridItem: StorybookArgsToList = {
  'gridItem.base': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Number of columns to span by default',
        ru: 'Количество занимаемых колонок по умолчанию'
      }
    }
  },
  'gridItem.sm': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Number of columns to span on small screens (media: sm)',
        ru: 'Количество занимаемых колонок на маленьких экранах (media: sm)'
      }
    }
  },
  'gridItem.md': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Number of columns to span on medium screens (media: md)',
        ru: 'Количество занимаемых колонок на средних экранах (media: md)'
      }
    }
  },
  'gridItem.lg': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Number of columns to span on large screens (media: lg)',
        ru: 'Количество занимаемых колонок на больших экранах (media: lg)'
      }
    }
  },
  'gridItem.xl': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Number of columns to span on extra large screens (media: xl)',
        ru: 'Количество занимаемых колонок на очень больших экранах (media: xl)'
      }
    }
  },
  'gridItem.xl2': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Number of columns to span on 2xl screens (media: 2xl)',
        ru: 'Количество занимаемых колонок на экранах 2xl (media: 2xl)'
      }
    }
  }
}
