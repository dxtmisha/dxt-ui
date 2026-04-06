import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiSnackbar object contains descriptions of all properties for the Snackbar component
 *
 * Объект wikiSnackbar содержит описание всех свойств для компонента Snackbar
 */
export const wikiSnackbar: StorybookArgsToList = {
  'snackbar.all': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'If enabled, multiple notifications can be displayed simultaneously',
        ru: 'Если включено, может отображаться несколько уведомлений одновременно'
      }
    },
    hide: true
  },
  'snackbar.delay': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Default display duration for notifications in milliseconds',
        ru: 'Длительность отображения уведомлений по умолчанию в миллисекундах'
      }
    },
    hide: true
  },
  'snackbar.full': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Expands notifications to full width, typically used on mobile devices',
        ru: 'Растягивает уведомления на всю ширину, обычно используется на мобильных устройствах'
      }
    },
    hide: true
  },
  'snackbar.origin': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'The direction from which the notification animation starts',
        ru: 'Направление, с которого начинается анимация появления уведомления'
      },
      options: ['topToBottom', 'bottomToTop', 'rightToLeft', 'leftToRight']
    },
    hide: true
  }
}
