import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiAlertLink object contains descriptions of all properties for the AlertLink component
 *
 * Объект wikiAlertLink содержит описание всех свойств для компонента AlertLink
 */
export const wikiAlertLink: StorybookArgsToList = {
  'alertLink.divider': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Separator status. If true, displays a visual bullet separator before adjacent alert links',
        ru: 'Статус разделителя. Если true, отображает визуальный разделитель в виде точки перед соседними ссылками оповещения'
      },
      defaultValue: true
    },
    isDemo: true
  }
}
