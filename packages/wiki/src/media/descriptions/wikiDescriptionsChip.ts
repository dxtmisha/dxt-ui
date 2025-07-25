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
      id: 'ChipAdaptive',
      name: {
        en: 'Adaptive',
        ru: 'Адаптивные'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent icon="star">Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <DesignComponent adaptive="iconAlways" icon="star">Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Block</div>
            <DesignComponent adaptive="block" icon="star">Chip</DesignComponent>
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
