import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputSocial from './D1InputSocial.vue'
import { InputSocialWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputSocial',
  component: D1InputSocial,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputSocialWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputSocialWikiStorybook.getWiki(),
  args: InputSocialWikiStorybook.getValues()
} satisfies Meta<typeof D1InputSocial>

export default meta

type Story = StoryObj<typeof meta>

export const InputSocial: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputSocialTypes: Story = {
  name: 'Типы социальных сетей',
  render: () => ({
    components: { D1InputSocial },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputSocial social-type="telegram" label="Telegram" />
          <D1InputSocial social-type="whatsapp" label="WhatsApp" />
          <D1InputSocial social-type="instagram" label="Instagram" />
          <D1InputSocial social-type="vk" label="VK" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getAllByText('Telegram').length).toBeGreaterThanOrEqual(1)
    await expect(canvas.getAllByText('WhatsApp').length).toBeGreaterThanOrEqual(1)
    await expect(canvas.getAllByText('Instagram').length).toBeGreaterThanOrEqual(1)
    await expect(canvas.getAllByText('VK').length).toBeGreaterThanOrEqual(1)
  }
}
export const InputSocialVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1InputSocial },
    setup() {
      return {
        value: ref('')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="input-social-vmodel-value">Current value: {{ value }}</span>
            <button type="button" class="wiki-storybook-button" @click="value = 'my_name'">Set text</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button-warning" @click="value = ''">Clear</button>
          </div>
          <D1InputSocial
            v-model:value="value"
            social-type="telegram"
            label="Telegram"
            placeholder="Username"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvasElement.querySelector('input') as HTMLInputElement
    await userEvent.click(canvas.getByRole('button', { name: 'Set text' }))
    await expect(canvas.getByTestId('input-social-vmodel-value')).toHaveTextContent('Current value: my_name')
    await expect(input.value).toContain('@my')
    await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
    await expect(canvas.getByTestId('input-social-vmodel-value')).toHaveTextContent('Current value:')
  }
}
export const InputSocialTestIconsStatesAndSlots: Story = {
  name: 'Тест: socialIcons, валидация, disabled, readonly и слоты',
  render: () => ({
    components: { D1InputSocial },
    setup() {
      return {
        socialIcons: {
          github: 'code'
        },
        val: ref('')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputSocial
            v-model:value="val"
            social-type="github"
            :social-icons="socialIcons"
            label="GitHub"
            helper-message="Enter GitHub handle"
            validation-message="Invalid handle"
          >
            <template #leading><span>[SocialLead]</span></template>
            <template #trailing><span>[SocialTrail]</span></template>
          </D1InputSocial>
          <D1InputSocial social-type="telegram" label="Disabled social" :disabled="true" />
          <D1InputSocial social-type="telegram" label="Readonly social" :readonly="true" value="fixed_user" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('[SocialLead]')).toBeInTheDocument()
    await expect(canvas.getByText('[SocialTrail]')).toBeInTheDocument()
    await expect(canvas.getByText('Invalid handle')).toBeInTheDocument()
    const inputs = canvasElement.querySelectorAll('input')
    await expect(inputs[1]).toBeDisabled()
    await expect(inputs[2]).toHaveAttribute('readonly')
  }
}
// :story-items [!] System label / Системная метка
