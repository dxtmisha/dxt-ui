import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Button component properties
 *
 * Описания свойств компонента Button
 */
export const wikiDescriptionsButton: StorybookComponentsDescriptionItem = {
  name: 'Button',
  description: {
    en: 'Interactive button component for user actions',
    ru: 'Интерактивный компонент кнопки для действий пользователя'
  },
  possibilities: {
    en: [
      'multiple visual variants for different use cases',
      'different sizes from extra small to extra large',
      'built-in accessibility support',
      'focus, hover, and active states',
      'disabled and loading states support',
      'customizable styling through design tokens'
    ],
    ru: [
      'множественные визуальные варианты для разных случаев использования',
      'различные размеры от очень маленького до очень большого',
      'встроенная поддержка доступности',
      'состояния focus, hover и active',
      'поддержка отключенного состояния и состояния загрузки',
      'настраиваемая стилизация через токены дизайна'
    ]
  },
  import: [],
  stories: [
    {
      id: 'ButtonVariants',
      name: {
        en: 'Button variants',
        ru: 'Варианты кнопок'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Primary</div>
            <DesignComponent primary>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Secondary</div>
            <DesignComponent secondary>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Outline</div>
            <DesignComponent outline>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Text</div>
            <DesignComponent text>Button</DesignComponent>
          </div>
        </div>
      `
    }
  ]
}
