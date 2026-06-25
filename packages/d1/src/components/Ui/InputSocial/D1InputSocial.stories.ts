import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputSocial from './D1InputSocial.vue'
import { InputSocialWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
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
  })
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
            <span>Current value: {{ value }}</span>
            <button class="wiki-storybook-button" @click="value = 'my_name'">Set text</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="value = ''">Clear</button>
          </div>
          <D1InputSocial
            v-model:value="value"
            social-type="telegram"
            label="Telegram"
            placeholder="Username"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
