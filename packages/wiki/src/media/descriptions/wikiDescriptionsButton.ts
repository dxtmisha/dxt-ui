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
      id: 'ButtonPrimary',
      name: {
        en: 'Primary',
        ru: 'Основные'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Primary</div>
            <DesignComponent primary>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Primary + Icon</div>
            <DesignComponent primary icon="home">Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <DesignComponent primary selected>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Disabled</div>
            <DesignComponent primary disabled>Button</DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'ButtonSecondary',
      name: {
        en: 'Secondary',
        ru: 'Второстепенные'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Secondary</div>
            <DesignComponent secondary>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Secondary + Icon</div>
            <DesignComponent secondary icon="home">Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <DesignComponent secondary selected>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Disabled</div>
            <DesignComponent secondary disabled>Button</DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'ButtonOutline',
      name: {
        en: 'Outline',
        ru: 'Контурные'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Outline</div>
            <DesignComponent outline>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Outline + Icon</div>
            <DesignComponent outline icon="home">Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <DesignComponent outline selected>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Disabled</div>
            <DesignComponent outline disabled>Button</DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'ButtonText',
      name: {
        en: 'Text',
        ru: 'Текстовые'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Text</div>
            <DesignComponent text>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Text + Icon</div>
            <DesignComponent text icon="home">Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <DesignComponent text selected>Button</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Disabled</div>
            <DesignComponent text disabled>Button</DesignComponent>
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
            <DesignComponent icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <DesignComponent adaptive="fullSm" icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <DesignComponent container="fullSm" icon="home" label="Button"/>
          </div>
        </div>
      `
    },
    {
      id: 'ButtonSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignSkeleton>
              <DesignComponent>Button</DesignComponent>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignSkeleton :active="true">
              <DesignComponent isSkeleton>Button</DesignComponent>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Hidden</div>
            <DesignSkeleton :active="true">
              <DesignComponent>Button</DesignComponent>
            </DesignSkeleton>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Button'} type={'button'}/>
<Canvas of={Component.ButtonBasic}/>

<StorybookDescriptions componentName={'Button'} type={'primary'}/>
<Canvas of={Component.ButtonPrimary}/>

<StorybookDescriptions componentName={'Button'} type={'secondary'}/>
<Canvas of={Component.ButtonSecondary}/>

<StorybookDescriptions componentName={'Button'} type={'outline'}/>
<Canvas of={Component.ButtonOutline}/>

<StorybookDescriptions componentName={'Button'} type={'text'}/>
<Canvas of={Component.ButtonText}/>

<StorybookDescriptions componentName={'Value'} type={'value'}/>

\`\`\`html
<DesignComponent
  value="save-action"
  :detail="{ id: 'btn-1', category: 'primary', step: 1 }"
  @click="handleClick"
/>

<DesignComponent
  :value="buttonValue"
  :detail="{ userId: currentUser.id, timestamp: Date.now() }"
  @click="handleAction"
/>
\`\`\`

<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>
<Canvas of={Component.ButtonAdaptive}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ButtonSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  }
}
