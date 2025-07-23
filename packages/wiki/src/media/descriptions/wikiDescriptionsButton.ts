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
      id: 'ButtonBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignComponent>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With left icon</div>
            <DesignComponent icon="home">Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With right icon</div>
            <DesignComponent icon-trailing="arrow_forward">Button</DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'ButtonAdaptive',
      name: {
        en: 'Adaptive',
        ru: 'Адаптивные'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <DesignComponent adaptive>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Container</div>
            <DesignComponent container>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive + Container</div>
            <DesignComponent adaptive container>Button</DesignComponent>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Button'} type={'button'}/>
<Canvas of={Component.ButtonBasic}/>

<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>
<Canvas of={Component.ButtonAdaptive}/>
    `
  }
}
