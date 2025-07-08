import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsIcon: StorybookComponentsDescriptionItem = {
  name: 'Icon',
  description: {
    en: 'Component for displaying icons',
    ru: 'Компонент для отображения иконок'
  },
  possibilities: {
    en: [
      'displaying icons by name',
      'switching icons on active state',
      'animation support'
    ],
    ru: [
      'отображение иконок по имени',
      'переключение иконок в активном состоянии',
      'поддержка анимации'
    ]
  },
  import: [],
  stories: [
    {
      id: 'IconState',
      name: {
        en: 'Icon state',
        ru: 'Состояние иконки'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignComponent icon="heart_minus" iconActive="favorite" :active="true"/>
          </div>
        </div>
      `
    },
    {
      id: 'IconShape',
      name: {
        en: 'Icon shape',
        ru: 'Форма иконки'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Rect</div>
            <DesignComponent icon="apps" rect overlay/>
          </div>
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Circle</div>
            <DesignComponent icon="person" circle overlay/>
          </div>
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Square</div>
            <DesignComponent icon="square" square overlay/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Icon'} type={'icon'}/>
<Canvas of={Component.IconState}/>
    `,
    events: `
<StorybookDescriptions componentName={'Icon'} type={'event.click'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Icon'} type={'expose.icon'}/>
    `
  }
}
