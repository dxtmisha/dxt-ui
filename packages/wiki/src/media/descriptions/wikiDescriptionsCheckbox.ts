import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Checkbox component
 *
 * Описания свойств компонента Checkbox
 */
export const wikiDescriptionsCheckbox: StorybookComponentsDescriptionItem = {
  name: 'Checkbox',
  description: {
    en: 'Interactive checkbox component for binary or indeterminate state selection',
    ru: 'Интерактивный компонент чекбокса для выбора бинарного или неопределённого состояния'
  },
  possibilities: {
    en: [
      'checked, unchecked, and indeterminate states',
      'built-in validation support with custom messages',
      'label and description text support',
      'customizable icons for checked and indeterminate states',
      'disabled and loading states',
      'ripple effect on interaction',
      'skeleton state for loading placeholders',
      'adaptive layout options',
      'form integration with name and value attributes'
    ],
    ru: [
      'состояния: отмечен, не отмечен и неопределённое',
      'встроенная поддержка валидации с пользовательскими сообщениями',
      'поддержка текста метки и описания',
      'настраиваемые иконки для состояний отмечен и неопределённое',
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
      id: 'CheckboxVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        checkboxValue: ref(false),
        indeterminateValue: ref(null)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="checkboxValue = !checkboxValue">Check {{ checkboxValue }}</button>
          </div>
          <DesignComponent
            v-model="checkboxValue"
            label="Checkbox with v-model"
          />
        </div>
      `
    },
    {
      id: 'CheckboxSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton label="Loading checkbox" />
            <DesignComponent isSkeleton label="Another loading checkbox" />
          </div>
        </DesignSkeleton>
      `
    },
    {
      id: 'CheckboxSlots',
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
<StorybookDescriptions componentName={'Checkbox'} type={'checkbox'}/>

<StorybookDescriptions componentName={'Checkbox'} type={'value'}/>
<StorybookDescriptions componentName={'Checkbox'} type={'indeterminate'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.CheckboxVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.CheckboxSkeleton}/>
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
<Canvas of={Component.CheckboxSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
Form control component for binary (yes/no) or indeterminate state selection. Allows users to toggle specific options or select multiple items from a list with visual feedback.
Features support for primary label, secondary description, and custom icons for checked/indeterminate states. Includes built-in validation, loading indicators, and adaptive layout options.
Controlled via v-model or value prop and emits @input/@change events. Use for terms agreement, feature toggles, or parent-child coordinated selections (via indeterminate state).
    `
  }
}
