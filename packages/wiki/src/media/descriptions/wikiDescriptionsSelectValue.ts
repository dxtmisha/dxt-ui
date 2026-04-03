import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for SelectValue component properties
 *
 * Описания свойств компонента SelectValue
 */
export const wikiDescriptionsSelectValue: StorybookComponentsDescriptionItem = {
  name: 'SelectValue',
  description: {
    en: 'Display component for selected values in select controls, showing chips for multiple selection or single text value',
    ru: 'Компонент отображения выбранных значений в элементах выбора, показывающий чипы для множественного выбора или одиночное текстовое значение'
  },
  possibilities: {
    en: [
      'single or multiple value display modes',
      'automatic chip rendering for multiple selections',
      'placeholder support for empty state',
      'cancel icon for clearing individual selections',
      'customizable chip appearance via chipAttrs',
      'optional icon display in chips',
      'responsive handling of selected items',
      'disabled and readonly states support'
    ],
    ru: [
      'режимы отображения одиночного или множественного значения',
      'автоматический рендеринг чипов для множественного выбора',
      'поддержка плейсхолдера для пустого состояния',
      'иконка отмены для очистки отдельных выборов',
      'настраиваемый внешний вид чипов через chipAttrs',
      'опциональное отображение иконок в чипах',
      'адаптивная обработка выбранных элементов',
      'поддержка состояний disabled и readonly'
    ]
  },
  import: [],
  stories: [
    {
      id: 'SelectValueBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Placeholder</div>
            <DesignComponent placeholder="Select option"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Single value</div>
            <DesignComponent :value="[{ label: 'Option 1', value: '1' }]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple values</div>
            <DesignComponent
              :multiple="true"
              :value="[
                { label: 'Option 1', value: '1', index: '1' },
                { label: 'Option 2', value: '2', index: '2' },
                { label: 'Option 3', value: '3', index: '3' }
              ]"
            />
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SelectValue'} type={'selectValue'}/>
<Canvas of={Component.SelectValueBasic}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `
  },
  ai: {
    description: `
Specialized display engine used within Select, Combobox, or Autocomplete controls to render selected state. Dynamically switches between a simple text label for single selection and a group of Chips for multiple selection.
Features automated Chip management, including removal event handling and integration with the Select data model. Supports empty state placeholders, custom Chip attributes (icons, outlines), and handles disabled/readonly states to prevent interaction.
Controlled via the multiple and value props, requiring an array of objects even for single selection. Use as a foundational element when building custom selection fields requiring standardized token-based or text-based value representation.
    `
  }
}
