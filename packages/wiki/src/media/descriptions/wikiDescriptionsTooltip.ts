import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Tooltip component properties
 *
 * Описания свойств компонента Tooltip
 */
export const wikiDescriptionsTooltip: StorybookComponentsDescriptionItem = {
  name: 'Tooltip',
  description: {
    en: 'Component for displaying a popup hint when hovering over an element',
    ru: 'Компонент для отображения всплывающей подсказки при наведении на элемент'
  },
  possibilities: {
    en: [
      'displaying text or other content in a popup window',
      'automatic positioning relative to the element',
      'support for delay before showing and hiding',
      'customizable indentation and padding',
      'ability to control the open state',
      'support for an arrow pointing to the element'
    ],
    ru: [
      'отображение текста или другого контента во всплывающем окне',
      'автоматическое позиционирование относительно элемента',
      'поддержка задержки перед показом и скрытием',
      'настраиваемые отступы и поля',
      'возможность управления состоянием открытия',
      'поддержка стрелки, указывающей на элемент'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args">
        <template #control="{ binds }">
          <span v-bind="binds">
            Hover me
          </span>
        </template>
      </DesignComponent>
    `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Tooltip'} type={'tooltip'}/>
    `
  }
}
