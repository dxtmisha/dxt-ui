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
      id: 'ChipBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent>Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <DesignComponent icon="star">Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <DesignComponent selected>Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Disabled</div>
            <DesignComponent disabled>Chip</DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'ChipInput',
      name: {
        en: 'Input',
        ru: 'Ввод (input)'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent>Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Input</div>
            <DesignComponent input>Tag</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <DesignComponent input icon="person">Contact</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <DesignComponent input selected icon="tag">Keyword</DesignComponent>
          </div>
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
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent>Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Assistive</div>
            <DesignComponent assistive>Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <DesignComponent assistive icon="lightbulb">Suggestion</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <DesignComponent assistive selected icon="check">Recommended</DesignComponent>
          </div>
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
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignSkeleton>
              <DesignComponent>Chip</DesignComponent>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignSkeleton :active="true">
              <DesignComponent isSkeleton>Chip</DesignComponent>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Hidden</div>
            <DesignSkeleton :active="true">
              <DesignComponent>Chip</DesignComponent>
            </DesignSkeleton>
          </div>
        </div>
      `,
      propsName: 'isSkeleton'
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Chip'} type={'chip'}/>
<Canvas of={Component.ChipBasic}/>

<template prop="input">
<StorybookDescriptions componentName={'Chip'} type={'input'}/>
<Canvas of={Component.ChipInput}/>
</template>

<template prop="assistive">
<StorybookDescriptions componentName={'Chip'} type={'assistive'}/>
<Canvas of={Component.ChipAssistive}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'value'}/>

\`\`\`html
<DesignComponent
  value="filter-tag"
  :detail="{ category: 'filters', type: 'status' }"
  @click="handleChipClick"
/>

<DesignComponent
  :value="chipValue"
  :detail="{ chipId: chip.id, timestamp: Date.now() }"
  @click="handleSelection"
/>
\`\`\`

<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>
<Canvas of={Component.ChipAdaptive}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ChipSkeleton}/>
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
