import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputSocial component
 *
 * Описания свойств компонента InputSocial
 */
export const wikiDescriptionsInputSocial: StorybookComponentsDescriptionItem = {
  name: 'InputSocial',
  description: {
    en: 'Input field component for social networks with integrated masks and prefixes',
    ru: 'Компонент поля ввода для социальных сетей с встроенными масками и префиксами'
  },
  possibilities: {
    en: [
      'automatic formatting and masking based on the selected social network type',
      'supports various social networks (e.g. Telegram, WhatsApp, Instagram, etc.)',
      'customizable social network icons via socialIcons property',
      'integrated prefix and suffix handling specific to the social network profile',
      'supports two-way data binding (v-model)',
      'built-in integration with Field for consistent styling and validation states'
    ],
    ru: [
      'автоматическое форматирование и маскирование на основе выбранного типа социальной сети',
      'поддержка различных социальных сетей (например, Telegram, WhatsApp, Instagram и др.)',
      'настраиваемые иконки социальных сетей через свойство socialIcons',
      'встроенная обработка префиксов и суффиксов, специфичных для профиля социальной сети',
      'поддержка двусторонней привязки данных (v-model)',
      'встроенная интеграция с Field для единообразной стилизации и статусов валидации'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'InputSocialTypes',
      name: {
        en: 'Social network types',
        ru: 'Типы социальных сетей'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent social-type="telegram" label="Telegram" />
          <DesignComponent social-type="whatsapp" label="WhatsApp" />
          <DesignComponent social-type="instagram" label="Instagram" />
          <DesignComponent social-type="vk" label="VK" />
        </div>
      `
    },
    {
      id: 'InputSocialVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        value: ref('')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ value }}</span>
            <button class="wiki-storybook-button" @click="value = 'my_name'">Set text</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="value = ''">Clear</button>
          </div>
          <DesignComponent
            v-model:value="value"
            social-type="telegram"
            label="Telegram"
            placeholder="Username"
          />
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputSocial'} type={'inputSocial'}/>
<Canvas of={Component.InputSocialTypes}/>

<StorybookDescriptions componentName={'InputSocial'} type={'socialIcons'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputSocialVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
    `
  },
  ai: {
    description: `
The InputSocial component is a specialized input field designed for social network profiles.
It automatically configures itself (mask, prefix, suffix, and label) based on the provided socialType property.
It supports custom icons mapping via the socialIcons property, allowing for seamless integration with custom icon sets.
The component supports two-way v-model binding, error validation states, and helper messages through its underlying Field integration.
    `
  }
}
