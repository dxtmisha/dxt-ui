import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Switch component
 *
 * Описания свойств компонента Switch
 */
export const wikiDescriptionsSwitch: StorybookComponentsDescriptionItem = {
  name: 'Switch',
  description: {
    en: 'Interactive toggle switch component for binary on/off state selection',
    ru: 'Интерактивный переключатель (тогл) для выбора бинарного состояния «включено»/«выключено»'
  },
  possibilities: {
    en: [
      'binary toggling states (on / off)',
      'built-in validation support with custom messages',
      'label and description text support',
      'customizable track and slider elements',
      'disabled and loading states',
      'ripple effect on interaction',
      'skeleton state for loading placeholders',
      'adaptive layout options',
      'form integration with name and value attributes'
    ],
    ru: [
      'бинарные переключаемые состояния (вкл / выкл)',
      'встроенная поддержка валидации с пользовательскими сообщениями',
      'поддержка текста метки и описания',
      'настраиваемые элементы трека и ползунка',
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
      id: 'SwitchVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        switchValue: ref(false)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="switchValue = !switchValue">Toggle {{ switchValue }}</button>
          </div>
          <DesignComponent
            v-model="switchValue"
            label="Switch with v-model"
          />
        </div>
      `
    },
    {
      id: 'SwitchSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton label="Loading switch" />
            <DesignComponent isSkeleton label="Another loading switch" />
          </div>
        </DesignSkeleton>
      `
    },
    {
      id: 'SwitchSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #default>
            <strong>Custom label slot</strong>
          </template>
          <template #description>
            <em>Custom description slot</em>
          </template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Switch'} type={'switch'}/>

<StorybookDescriptions componentName={'Checkbox'} type={'value'}/>
<StorybookDescriptions componentName={'Checkbox'} type={'selected'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.SwitchVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.SwitchSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValidationMessage'}/>
    `,
    slots: `
<Canvas of={Component.SwitchSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
Form control component representing a physical switch to toggle settings or binary choices on/off.
Inherits behavior and accessibility features from Checkbox but provides a distinct sliding track visual representation.
Supports primary labels, details descriptions, custom track customization, built-in validation states, loading states, and adaptive design layouts.
Controlled via v-model and emits @input/@change events. Use for instant toggles of features or preferences.
    `
  }
}
