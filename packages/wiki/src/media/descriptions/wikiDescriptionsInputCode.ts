import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputCode component
 *
 * Описания свойств компонента InputCode
 */
export const wikiDescriptionsInputCode: StorybookComponentsDescriptionItem = {
  name: 'InputCode',
  description: {
    en: 'A validation code input component designed for OTP (One-Time Passwords) or SMS verification codes',
    ru: 'Компонент ввода проверочного кода, предназначенный для OTP (одноразовых паролей) или SMS-кодов подтверждения'
  },
  possibilities: {
    en: [
      'cell-by-cell coordinated code entry',
      'customizable code length (length property)',
      'support for success and validation states',
      'loading state handling',
      'automated focus navigation between cells'
    ],
    ru: [
      'скоординированный посимвольный ввод кода',
      'настраиваемая длина кода (свойство length)',
      'поддержка успешного состояния (success) и проверки (validation)',
      'обработка состояния загрузки (loading)',
      'автоматическая навигация фокуса между ячейками'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'InputCodeVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const codeValue = ref('1234')
      return { codeValue }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ codeValue }}</span>
            <button class="wiki-storybook-button" @click="codeValue = '4321'">Set '4321'</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="codeValue = ''">Clear</button>
          </div>
          <DesignComponent
            v-model="codeValue"
            label="Code input"
          />
        </div>
      `
    },
    {
      id: 'InputCodeSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <DesignComponent
            isSkeleton
            label="Loading field"
            helperMessage="This field is loading..."
          />
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputCode'} type={'inputCode'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputCodeVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputCodeSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'InputCode'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'set'}/>
<StorybookDescriptions componentName={'Expose'} type={'reset'}/>
<StorybookDescriptions componentName={'Expose'} type={'focus'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
    `
  },
  ai: {
    description: `
A verification code input component designed for OTP (One-Time Password) entry.
Coordinates multiple sub-input cells (InputCodeItem), managing active focus transitions.
Supports length, success, loading, match regex, and standard event bindings.
    `
  }
}
