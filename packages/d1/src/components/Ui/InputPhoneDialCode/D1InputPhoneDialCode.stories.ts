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
export const InputPhoneDialCodeDefault: Story = {
  name: 'По умолчанию',
  render: () => ({
    components: { D1InputPhoneDialCode },
    setup() {
      return {
        selected: ref(undefined)
      }
    },
    template: `
        <div class="wiki-storybook-flex">
          <D1InputPhoneDialCode
            v-model:selected="selected"
          />
          <span>Selected: {{ selected?.[0] ?? '—' }}</span>
        </div>
    `
  })
}
export const InputPhoneDialCodeLabelType: Story = {
  name: 'Типы метки',
  render: () => ({
    components: { D1InputPhoneDialCode },
    setup() {
      return {
        selected: ref(undefined)
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1InputPhoneDialCode v-model:selected="selected" label-type="code" />
          <D1InputPhoneDialCode v-model:selected="selected" label-type="name" />
          <D1InputPhoneDialCode v-model:selected="selected" label-type="none" />
        </div>
    `
  })
}
export const InputPhoneDialCodeDisabled: Story = {
  name: 'Отключённое состояние',
  render: () => ({
    components: { D1InputPhoneDialCode },
    template: `
        <D1InputPhoneDialCode disabled value="US" label-type="code" />
    `
  })
}
// :story-items [!] System label / Системная метка
