import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsRipple: StorybookComponentsDescriptionItem = {
  name: 'Ripple',
  description: {
    en: 'Component for creating a ripple wave effect on click interactions',
    ru: 'Компонент для создания эффекта волны при взаимодействии с элементом'
  },
  possibilities: {
    en: [
      'it creates a ripple wave effect on click',
      'automatic positioning based on click coordinates',
      'disabling effect with `disabled` property',
      'Material Design inspired animation',
      'it works with any interactive elements'
    ],
    ru: [
      'создает эффект волны при клике',
      'автоматическое позиционирование по координатам клика',
      'отключение эффекта свойством `disabled`',
      'анимация в стиле Material Design',
      'работает с любыми интерактивными элементами'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Ripple'} type={'ripple'}/>
    `
  },
  ai: {
    render: `
<div
  :class="classDemo.item"
  style="position: relative; width: 64px; height: 48px;"
>
  <Ripple v-bind="args"/>
</div>
    `,
    description: `
Low-level decorative utility that provides Material Design-style visual feedback on user interactions. Automatically generates a dynamic wave effect at the exact coordinates of a pointerdown event within its parent container.
Features automated animation lifecycle management, including expansion, fade-out, and DOM cleanup. Inherits visual styling directly from the host element via currentColor and requires the parent to have relative positioning and hidden overflow to function correctly.
Primarily integrated within interactive components like Buttons, ListItems, and Cards; should generally not be manually implemented. Controlled via the disabled prop, serving as a subtle but high-polish affordance for touch and click actions.
    `
  }
}
