import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsIcon: StorybookComponentsDescriptionItem = {
  name: 'Icon',
  description: {
    en: 'A component for displaying vector icons with support for state management, automatic directionality adaptation, and design system styling.',
    ru: 'Компонент для отображения векторных иконок с поддержкой управления состоянием, автоматической адаптацией направления и стилизацией дизайн-системы.'
  },
  possibilities: {
    en: [
      'rendering icons by identifier',
      'toggling between two icons based on the active state',
      'automatic mirroring for RTL languages',
      'integration with the color palette and inverse mode',
      'displaying a skeleton loader placeholder'
    ],
    ru: [
      'рендеринг иконок по идентификатору',
      'переключение между двумя иконками в зависимости от активного состояния',
      'автоматическое зеркалирование для RTL языков',
      'интеграция с цветовой палитрой и инверсный режим',
      'отображение заполнителя (скелетона) при загрузке'
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
    },
    {
      id: 'IconPalette',
      name: {
        en: 'Palette',
        ru: 'Палитра'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignComponent icon="home" size="lg"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Palette</div>
            <DesignComponent icon="home" size="lg" asPalette/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Inverse</div>
            <DesignComponent icon="home" size="lg" asPalette inverse/>
          </div>
        </div>
      `
    },
    {
      id: 'IconSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignSkeleton>
              <DesignComponent icon="home"/>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignSkeleton :active="true">
              <DesignComponent isSkeleton icon="home" rounded="md"/>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Hidden</div>
            <DesignSkeleton :active="true">
              <DesignComponent icon="home"/>
            </DesignSkeleton>
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

<StorybookDescriptions componentName={'Style'} type={'asPalette'}/>
<Canvas of={Component.IconPalette}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.IconSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Icon'} type={'expose.isActive'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Vector icon component, typically utilizing the Material Symbols library. Supports dynamic state management, automatic mirroring for RTL languages, and deep integration with the design system's palette.
Features toggle-able states (active/inactive) with specific icons for each, built-in skeleton loading (isSkeleton), and directionality adaptation. Customizing via size, palette, and inverse props ensures visual consistency across all themes.
Controlled via the icon and iconActive props and various styling flags. Use for navigation links, action buttons, status indicators, or any UI element requiring concise visual representation.
    `
  }
}
