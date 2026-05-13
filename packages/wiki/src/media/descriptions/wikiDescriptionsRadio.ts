import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Radio component
 *
 * Описания свойств компонента Radio
 */
export const wikiDescriptionsRadio: StorybookComponentsDescriptionItem = {
  name: 'Radio',
  description: {
    en: 'Interactive radio button component for single choice selection from a group',
    ru: 'Интерактивный компонент радиокнопки для выбора одного варианта из группы'
  },
  possibilities: {
    en: [
      'single selection within a group',
      'built-in validation support with custom messages',
      'label and description text support',
      'customizable icons for selected state',
      'disabled and loading states',
      'ripple effect on interaction',
      'skeleton state for loading placeholders',
      'adaptive layout options',
      'form integration with name and value attributes'
    ],
    ru: [
      'выбор одного значения из группы',
      'встроенная поддержка валидации с пользовательскими сообщениями',
      'поддержка текста метки и описания',
      'настраиваемые иконки для выбранного состояния',
      'состояния отключения и загрузки',
      'эффект волны при взаимодействии',
      'состояние скелетона для заполнителей загрузки',
      'опции адаптивной разметки',
      'интеграция с формами через атрибуты name и value'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'RadioVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        radioValue: ref('space')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected path: <strong>{{ radioValue }}</strong></span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="radioValue = 'space'">To the Stars</button>
            <button class="wiki-storybook-button" @click="radioValue = 'ocean'">Into the Deep</button>
            <button class="wiki-storybook-button" @click="radioValue = ''">Reset choice</button>
          </div>
          <DesignComponent
            v-model:selected="radioValue"
            value-variant="space"
            label="Space Exploration"
            description="Journey to the edge of the galaxy"
          />
          <DesignComponent
            v-model:selected="radioValue"
            value-variant="ocean"
            label="Ocean Exploration"
            description="Discover the secrets of the abyss"
          />
        </div>
      `
    },
    {
      id: 'RadioSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton label="Loading radio" />
            <DesignComponent isSkeleton label="Another loading radio" />
          </div>
        </DesignSkeleton>
      `
    },
    {
      id: 'RadioSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #default>
            <strong>Custom label slot for Radio</strong>
          </template>
          <template #description>
            <em>Custom description slot for Radio</em>
          </template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Radio'} type={'radio'}/>

<StorybookDescriptions componentName={'Checkbox'} type={'value'}/>
<StorybookDescriptions componentName={'Checkbox'} type={'selected'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.RadioVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.RadioSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'validationMessage'}/>
    `,
    slots: `
<Canvas of={Component.RadioSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
Form control component for single choice selection. Allows users to select one option from a mutually exclusive set.
Inherits all features from Checkbox but optimized for radio selection behavior. Includes support for labels, descriptions, validation, and loading states.
Controlled via v-model and emits @input/@change events.
    `
  }
}
