import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsRipple: StorybookComponentsDescriptionItem = {
  name: 'Ripple',
  description: {
    en: 'Component for creating ripple wave effect on click interactions',
    ru: 'Компонент для создания эффекта волны при взаимодействии с элементом'
  },
  possibilities: {
    en: [
      'creates ripple wave effect on click',
      'automatic positioning based on click coordinates',
      'disabling effect with `disabled` property',
      'Material Design inspired animation',
      'works with any interactive elements'
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
  }
}
