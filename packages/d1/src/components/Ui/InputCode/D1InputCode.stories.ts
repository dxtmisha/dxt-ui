import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputCode from './D1InputCode.vue'
import { InputCodeWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputCode',
  component: D1InputCode,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputCodeWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputCodeWikiStorybook.getWiki(),
  args: InputCodeWikiStorybook.getValues()
} satisfies Meta<typeof D1InputCode>

export default meta

type Story = StoryObj<typeof meta>

export const InputCode: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputCodeVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1InputCode },
    setup() {
      const codeValue = ref('1234')
      return { codeValue }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ codeValue }}</span>
            <button class="wiki-storybook-button" @click="codeValue = '4321'">Set '4321'</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="codeValue = ''">Clear</button>
          </div>
          <D1InputCode
            v-model="codeValue"
            label="Code input"
          />
        </div>
    `
  })
}
export const InputCodeSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1InputCode, D1Skeleton },
    template: `
        <D1Skeleton :active="true" style="max-width:320px">
          <D1InputCode
            isSkeleton
            label="Loading field"
            helperMessage="This field is loading..."
          />
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
