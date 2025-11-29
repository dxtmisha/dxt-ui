import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiActionsInclude object contains descriptions of all properties for the Actions include
 *
 * Объект wikiActionsInclude содержит описание всех свойств для включения Actions
 */
export const wikiActionsInclude: StorybookArgsToList = {
  actionsAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.actions,
      description: {
        en: 'Additional attributes for the Actions component container',
        ru: 'Дополнительные атрибуты для контейнера компонента Actions'
      }
    }
  },
  actionsHide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.actions,
      description: {
        en: 'Hides the actions block',
        ru: 'Скрывает блок действий'
      }
    }
  },
  actionsList: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.actions,
      description: {
        en: 'Array of primary action buttons displayed in the actions area',
        ru: 'Массив основных кнопок действий, отображаемых в области действий'
      },
      value: [
        { icon: 'edit', label: 'Edit' },
        { icon: 'delete', label: 'Delete' },
        { icon: 'share', label: 'Share' }
      ]
    }
  },
  actionsSecondary: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.actions,
      description: {
        en: 'Array of secondary action buttons displayed in the actions area',
        ru: 'Массив вторичных кнопок действий, отображаемых в области действий'
      },
      value: [
        { icon: 'info', label: 'Info' },
        { icon: 'help', label: 'Help' }
      ]
    }
  }
}
