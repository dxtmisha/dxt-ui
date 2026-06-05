import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputPhone from './D1InputPhone.vue'
import { InputPhoneWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputPhone',
  component: D1InputPhone,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputPhoneWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputPhoneWikiStorybook.getWiki(),
  args: InputPhoneWikiStorybook.getValues()
} satisfies Meta<typeof D1InputPhone>

export default meta

type Story = StoryObj<typeof meta>

export const InputPhone: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputPhoneVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1InputPhone },
    setup() {
      return {
        phone: ref('')
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1InputPhone
            v-model:value="phone"
            label="Phone Number"
            placeholder="Enter phone number"
          />
          <div>Entered phone: {{ phone || '—' }}</div>
        </div>
    `
  })
}
export const InputPhoneCountryBlock: Story = {
  name: 'Блокировка страны',
  render: () => ({
    components: { D1InputPhone },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1InputPhone
            country-default="DE"
            :country-block="false"
            label="Dynamic Country Detection (DE default)"
          />
          <D1InputPhone
            country-default="DE"
            :country-block="true"
            label="Locked Country (DE)"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
