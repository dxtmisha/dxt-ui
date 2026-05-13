import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Radio from './D1Radio.vue'
import { RadioWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Radio',
  component: D1Radio,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: RadioWikiStorybook.getDescription()
      }
    }
  },
  argTypes: RadioWikiStorybook.getWiki(),
  args: RadioWikiStorybook.getValues()
} satisfies Meta<typeof D1Radio>

export default meta

type Story = StoryObj<typeof meta>

export const Radio: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const RadioVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Radio },
    setup() {
      return {
        radioValue: ref('option1')
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected: {{ radioValue }}</span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="radioValue = 'option1'">Set option1</button>
            <button class="wiki-storybook-button" @click="radioValue = 'option2'">Set option2</button>
            <button class="wiki-storybook-button" @click="radioValue = ''">Set empty</button>
          </div>
          <D1Radio
            v-model="radioValue"
            value-variant="option1"
            label="Option 1"
          />
          <D1Radio
            v-model="radioValue"
            value-variant="option2"
            label="Option 2"
          />
        </div>
    `
  })
}
export const RadioSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Radio, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Radio isSkeleton label="Loading radio" />
            <D1Radio isSkeleton label="Another loading radio" />
          </div>
        </D1Skeleton>
    `
  })
}
export const RadioSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Radio },
    template: `
        <D1Radio>
          <template #default>
            <strong>Custom label slot for Radio</strong>
          </template>
          <template #description>
            <em>Custom description slot for Radio</em>
          </template>
        </D1Radio>
    `
  })
}
// :story-items [!] System label / Системная метка
