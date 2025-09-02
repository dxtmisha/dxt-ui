import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FieldCounter component properties
 *
 * Описания свойств компонента FieldCounter
 */
export const wikiDescriptionsFieldCounter: StorybookComponentsDescriptionItem = {
  name: 'FieldCounter',
  description: {
    en: 'Component for displaying character count and input length limits in form fields',
    ru: 'Компонент для отображения счетчика символов и ограничений длины ввода в полях форм'
  },
  possibilities: {
    en: [
      'displays current character count',
      'shows maximum character limit when specified',
      'customizable display template with placeholders',
      'automatic visibility based on counter and maxlength props',
      'supports both string and number values',
      'compact display format (e.g., "50 / 100")',
      'template-based formatting with [c] and [m] placeholders'
    ],
    ru: [
      'отображает текущее количество символов',
      'показывает максимальное ограничение символов при указании',
      'настраиваемый шаблон отображения с заполнителями',
      'автоматическая видимость на основе свойств counter и maxlength',
      'поддерживает значения как строк, так и чисел',
      'компактный формат отображения (например, "50 / 100")',
      'форматирование на основе шаблона с заполнителями [c] и [m]'
    ]
  },
  import: [],
  stories: [
    {
      id: 'FieldCounterTemplate',
      name: {
        en: 'Custom Template',
        ru: 'Пользовательский шаблон'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default template</div>
            <DesignComponent :counter="75" :maxlength="150"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Custom template: "Characters: [c] of [m]"</div>
            <DesignComponent :counter="75" :maxlength="150" template="Characters: [c] of [m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Counter only with template: "[c] chars"</div>
            <DesignComponent :counter="42" template="<b>[c]</b> chars"/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FieldCounter'} type={'fieldCounter'}/>
<StorybookDescriptions componentName={'FieldCounter'} type={'templates'}/>
<Canvas of={Component.FieldCounterTemplate}/>
    `
  }
}
