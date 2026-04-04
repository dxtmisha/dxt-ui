import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Chip component properties
 *
 * Описания свойств компонента Chip
 */
export const wikiDescriptionsChip: StorybookComponentsDescriptionItem = {
  name: 'Chip',
  description: {
    en: 'Compact element that represents an input, attribute, or action',
    ru: 'Компактный элемент, представляющий ввод, атрибут или действие'
  },
  possibilities: {
    en: [
      'multiple visual variants for different contexts',
      'selectable state for user interaction',
      'disabled state support',
      'customizable styling through design tokens',
      'icon support for enhanced visual representation',
      'adaptive behavior for different screen sizes'
    ],
    ru: [
      'множественные визуальные варианты для разных контекстов',
      'выбираемое состояние для взаимодействия пользователя',
      'поддержка отключенного состояния',
      'настраиваемая стилизация через токены дизайна',
      'поддержка иконок для улучшенного визуального представления',
      'адаптивное поведение для разных размеров экрана'
    ]
  },
  import: [],
  stories: [
    {
      id: 'ChipInput',
      name: {
        en: 'Input',
        ru: 'Ввод (input)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent>Chip</DesignComponent>
          <DesignComponent input>Tag</DesignComponent>
          <DesignComponent input icon="person">Contact</DesignComponent>
          <DesignComponent input selected icon="tag">Keyword</DesignComponent>
        </div>
      `,
      propsName: 'input'
    },
    {
      id: 'ChipAssistive',
      name: {
        en: 'Assistive',
        ru: 'Вспомогательные (assistive)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent>Chip</DesignComponent>
          <DesignComponent assistive>Chip</DesignComponent>
          <DesignComponent assistive icon="lightbulb">Suggestion</DesignComponent>
          <DesignComponent assistive selected icon="check">Recommended</DesignComponent>
        </div>
      `,
      propsName: 'assistive'
    },
    {
      id: 'ChipAdaptive',
      name: {
        en: 'Adaptive',
        ru: 'Адаптивные'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <DesignComponent adaptive="fullSm" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <DesignComponent container="fullSm" icon="star" label="Chip"/>
          </div>
        </div>
      `,
      propsName: 'adaptive'
    },
    {
      id: 'ChipSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Chip</DesignComponent>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Chip'} type={'chip'}/>

<template prop="input">
<StorybookDescriptions componentName={'Chip'} type={'input'}/>
<Canvas of={Component.ChipInput}/>
</template>

<template prop="assistive">
<StorybookDescriptions componentName={'Chip'} type={'assistive'}/>
<Canvas of={Component.ChipAssistive}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'value'}/>

<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>
<Canvas of={Component.ChipAdaptive}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ChipSkeleton}/>
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
  },
  ai: {
    description: `
Compact interactive element representing an input, attribute, or action. Used for entering information, making selections, filtering content, or triggering immediate actions in a space-efficient way.
Features multiple functional variants (Action, Input, Assistive, Filter) with support for leading icons and selection states. Includes built-in support for disabled/selected states and adaptive layout options.
Controlled via value/label props and emits @click events with detailed data. Use for filter tags, choice groups (like radio buttons), or representing entities like contacts in input fields.
    `
  }
}
