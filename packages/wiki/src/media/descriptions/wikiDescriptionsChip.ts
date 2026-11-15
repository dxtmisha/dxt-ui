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
      'selectable state for user interaction',
      'disabled, focus, and readonly state support',
      'customizable styling through design tokens',
      'icon and progress indicator support for enhanced visual representation',
      'adaptive behavior (`iconAlways`, `block`, `auto`) and container queries'
    ],
    ru: [
      'выбираемое состояние для взаимодействия пользователя',
      'поддержка состояний disabled, focus и readonly',
      'настраиваемая стилизация через токены дизайна',
      'поддержка иконок и индикатора прогресса для улучшенного визуального представления',
      'адаптивное поведение (`iconAlways`, `block`, `auto`) и container queries'
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
            <DesignComponent adaptive="block" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <DesignComponent container icon="star" label="Chip"/>
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
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Compact interactive element representing an attribute, selection, or action. Used for making selections, filtering content, or triggering immediate actions in a space-efficient way.
Features support for leading and trailing icons, progress indicators, skeleton state, and disabled/selected/readonly/focus states with adaptive layout options (iconAlways, block, auto) and container queries.
Controlled via label/value props and emits @click events with detailed data. Use for filter tags, toggleable choice groups, or compact interactive labels.
    `
  }
}
