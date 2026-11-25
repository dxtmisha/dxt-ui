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
    'import { ref } from \'vue\'',
    'import { expect, within, userEvent } from \'storybook/test\''
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
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getAllByText('Telegram').length).toBeGreaterThanOrEqual(1)
await expect(canvas.getAllByText('WhatsApp').length).toBeGreaterThanOrEqual(1)
await expect(canvas.getAllByText('Instagram').length).toBeGreaterThanOrEqual(1)
await expect(canvas.getAllByText('VK').length).toBeGreaterThanOrEqual(1)
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
            <span data-testid="input-social-vmodel-value">Current value: {{ value }}</span>
            <button type="button" class="wiki-storybook-button" @click="value = 'my_name'">Set text</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button-warning" @click="value = ''">Clear</button>
          </div>
          <DesignComponent
            v-model:value="value"
            social-type="telegram"
            label="Telegram"
            placeholder="Username"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const input = canvasElement.querySelector('input') as HTMLInputElement
await userEvent.click(canvas.getByRole('button', { name: 'Set text' }))
await expect(canvas.getByTestId('input-social-vmodel-value')).toHaveTextContent('Current value: my_name')
await expect(input.value).toContain('@my')
await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
await expect(canvas.getByTestId('input-social-vmodel-value')).toHaveTextContent('Current value:')
      `
    },
    {
      id: 'InputSocialTestIconsStatesAndSlots',
      name: {
        en: 'Test: socialIcons, validation, disabled, readonly and slots',
        ru: 'Тест: socialIcons, валидация, disabled, readonly и слоты'
      },
      propsName: ['socialType', 'socialIcons', 'disabled', 'readonly', 'validationMessage', 'helperMessage'],
      setup: `
      return {
        socialIcons: {
          github: 'code'
        },
        val: ref('')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            v-model:value="val"
            social-type="github"
            :social-icons="socialIcons"
            label="GitHub"
            helper-message="Enter GitHub handle"
            validation-message="Invalid handle"
          >
            <template #leading><span>[SocialLead]</span></template>
            <template #trailing><span>[SocialTrail]</span></template>
          </DesignComponent>
          <DesignComponent social-type="telegram" label="Disabled social" :disabled="true" />
          <DesignComponent social-type="telegram" label="Readonly social" :readonly="true" value="fixed_user" />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('[SocialLead]')).toBeInTheDocument()
await expect(canvas.getByText('[SocialTrail]')).toBeInTheDocument()
await expect(canvas.getByText('Invalid handle')).toBeInTheDocument()
const inputs = canvasElement.querySelectorAll('input')
await expect(inputs[1]).toBeDisabled()
await expect(inputs[2]).toHaveAttribute('readonly')
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
