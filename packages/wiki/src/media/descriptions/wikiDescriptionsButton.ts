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
        <div class="wiki-storybook-flex">
          <DesignComponent>Button</DesignComponent>
          <DesignComponent icon="home">Button</DesignComponent>
          <DesignComponent icon-trailing="arrow_forward">Button</DesignComponent>
        </div>
      `
    },
    {
      id: 'ButtonPrimary',
      name: {
        en: 'Primary',
        ru: 'Основные (primary)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent primary>Button</DesignComponent>
          <DesignComponent primary icon="home">Button</DesignComponent>
          <DesignComponent primary selected>Button</DesignComponent>
          <DesignComponent primary disabled>Button</DesignComponent>
        </div>
      `,
      propsName: 'primary'
    },
    {
      id: 'ButtonSecondary',
      name: {
        en: 'Secondary',
        ru: 'Второстепенные (secondary)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent secondary>Button</DesignComponent>
          <DesignComponent secondary icon="home">Button</DesignComponent>
          <DesignComponent secondary selected>Button</DesignComponent>
          <DesignComponent secondary disabled>Button</DesignComponent>
        </div>
      `,
      propsName: 'secondary'
    },
    {
      id: 'ButtonOutline',
      name: {
        en: 'Outline',
        ru: 'Контурные (outline)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent outline>Button</DesignComponent>
          <DesignComponent outline icon="home">Button</DesignComponent>
          <DesignComponent outline selected>Button</DesignComponent>
          <DesignComponent outline disabled>Button</DesignComponent>
        </div>
      `,
      propsName: 'outline'
    },
    {
      id: 'ButtonText',
      name: {
        en: 'Text',
        ru: 'Текстовые (text)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent text>Button</DesignComponent>
          <DesignComponent text icon="home">Button</DesignComponent>
          <DesignComponent text selected>Button</DesignComponent>
          <DesignComponent text disabled>Button</DesignComponent>
        </div>
      `,
      propsName: 'text'
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
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Button</DesignComponent>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Button'} type={'button'}/>
<Canvas of={Component.ButtonBasic}/>

<template prop="primary">
<StorybookDescriptions componentName={'Button'} type={'primary'}/>
<Canvas of={Component.ButtonPrimary}/>
</template>

<template prop="secondary">
<StorybookDescriptions componentName={'Button'} type={'secondary'}/>
<Canvas of={Component.ButtonSecondary}/>
</template>

<template prop="outline">
<StorybookDescriptions componentName={'Button'} type={'outline'}/>
<Canvas of={Component.ButtonOutline}/>
</template>

<template prop="text">
<StorybookDescriptions componentName={'Button'} type={'text'}/>
<Canvas of={Component.ButtonText}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'value'}/>

<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>
<Canvas of={Component.ButtonAdaptive}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ButtonSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
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
