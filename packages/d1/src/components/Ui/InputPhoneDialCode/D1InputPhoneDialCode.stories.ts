import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputPhoneDialCode from './D1InputPhoneDialCode.vue'
import { InputPhoneDialCodeWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputPhoneDialCode',
  component: D1InputPhoneDialCode,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputPhoneDialCodeWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputPhoneDialCodeWikiStorybook.getWiki(),
  args: InputPhoneDialCodeWikiStorybook.getValues()
} satisfies Meta<typeof D1InputPhoneDialCode>

export default meta

type Story = StoryObj<typeof meta>

export const InputPhoneDialCode: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1InputPhoneDialCode },
    setup: () => ({ args }),
    template: `
      <D1InputPhoneDialCode v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputPhoneDialCodeVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1InputPhoneDialCode },
    setup() {
      return {
        selected: ref(undefined)
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = [{ value: 'US' }]">Select US</button>
            <button class="wiki-storybook-button" @click="selected = [{ value: 'DE' }]">Select DE</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="selected = undefined">Clear</button>
          </div>
          <D1InputPhoneDialCode
            v-model:selected="selected"
            label-type="code"
          />
          <div>Selected: {{ selected?.[0]?.value ?? '—' }}</div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
