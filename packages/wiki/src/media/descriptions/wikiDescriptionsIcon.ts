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
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignComponent icon="heart_minus" iconActive="favorite" :active="true"/>
          </div>
        </div>
      `
    },
    {
      id: 'IconDirection',
      name: {
        en: 'Direction',
        ru: 'Направление компонента'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">LTR</div>
            <DesignComponent dir icon="arrow_forward"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-item--rtl">
            <div class="wiki-storybook-item__label">RTL</div>
            <DesignComponent dir icon="arrow_forward"/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Icon'} type={'icon'}/>
<Canvas of={Component.IconState}/>

<StorybookDescriptions componentName={'Style'} type={'dir'}/>
<Canvas of={Component.IconDirection}/>
    `,
    events: `
<StorybookDescriptions componentName={'Icon'} type={'event.click'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Icon'} type={'expose.icon'}/>
    `
  }
}
