import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Badge component properties
 *
 * Описания свойств компонента Badge
 */
export const wikiDescriptionsBadge: StorybookComponentsDescriptionItem = {
  name: 'Badge',
  description: {
    en: 'Small visual indicator for displaying status, count, or notifications on interface elements',
    ru: 'Небольшой визуальный индикатор для отображения статуса, количества или уведомлений на элементах интерфейса'
  },
  possibilities: {
    en: [
      'multiple color variants for different status types',
      'content customization with text or numbers',
      'positioning relative to parent elements',
      'maximum value display with overflow handling',
      'visibility control and animation support'
    ],
    ru: [
      'множественные цветовые варианты для разных типов статуса',
      'настройка содержимого с текстом или числами',
      'позиционирование относительно родительских элементов',
      'отображение максимального значения с обработкой переполнения',
      'управление видимостью и поддержка анимации'
    ]
  },
  import: [],
  render: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <DesignComponent v-bind="args"/>
        </div>
      </div>
    `,
  stories: [
    {
      id: 'BadgeBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent overlap="static">Badge</DesignComponent>
          <DesignComponent overlap="static" icon="home">Badge</DesignComponent>
          <DesignComponent overlap="static">99</DesignComponent>
          <DesignComponent overlap="static" label="999" label-max="99"/>
        </div>
      `
    },
    {
      id: 'BadgeDot',
      name: {
        en: 'Dot',
        ru: 'Точечные (dot)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent dot overlap="static"/>
        </div>
      `
    },
    {
      id: 'BadgePrimary',
      name: {
        en: 'Primary',
        ru: 'Основные (primary)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent primary overlap="static" icon="home"/>
          <DesignComponent primary overlap="static">Badge</DesignComponent>
        </div>
      `,
      propsName: 'primary'
    },
    {
      id: 'BadgeSecondary',
      name: {
        en: 'Secondary',
        ru: 'Второстепенные (secondary)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent secondary overlap="static" icon="home"/>
          <DesignComponent secondary overlap="static">Badge</DesignComponent>
        </div>
      `,
      propsName: 'secondary'
    },
    {
      id: 'BadgeOutline',
      name: {
        en: 'Outline',
        ru: 'Контурные (outline)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent outline overlap="static" icon="home"/>
          <DesignComponent outline overlap="static">Badge</DesignComponent>
        </div>
      `,
      propsName: 'outline'
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Badge'} type={'badge'}/>
<Canvas of={Component.BadgeBasic}/>

<StorybookDescriptions componentName={'Badge'} type={'dot'}/>
<Canvas of={Component.BadgeDot}/>

<template prop="primary">
<StorybookDescriptions componentName={'Badge'} type={'primary'}/>
<Canvas of={Component.BadgePrimary}/>
</template>

<template prop="secondary">
<StorybookDescriptions componentName={'Badge'} type={'secondary'}/>
<Canvas of={Component.BadgeSecondary}/>
</template>

<template prop="outline">
<StorybookDescriptions componentName={'Badge'} type={'outline'}/>
<Canvas of={Component.BadgeOutline}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'labelNumber'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  }
}
