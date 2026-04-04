import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Checkbox from './D1Checkbox.vue'
import { CheckboxWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Checkbox',
  component: D1Checkbox,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CheckboxWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CheckboxWikiStorybook.getWiki(),
  args: CheckboxWikiStorybook.getValues()
} satisfies Meta<typeof D1Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Checkbox },
    setup: () => ({ args }),
    template: `
      <D1Checkbox v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CheckboxVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Checkbox },
    setup() {
      return {
        checkboxValue: ref(false),
        indeterminateValue: ref(null)
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="checkboxValue = !checkboxValue">Check {{ checkboxValue }}</button>
          </div>
          <D1Checkbox
            v-model="checkboxValue"
            label="Checkbox with v-model"
          />
        </div>
    `
  })
}
export const CheckboxSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Checkbox, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Checkbox isSkeleton label="Loading checkbox" />
            <D1Checkbox isSkeleton label="Another loading checkbox" />
          </div>
        </D1Skeleton>
    `
  })
}
export const CheckboxSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Checkbox },
    template: `
        <D1Checkbox>
          <template #default>
            <strong>Custom label slot</strong>
          </template>
          <template #description>
            <em>Custom description slot</em>
          </template>
        </D1Checkbox>
    `
  })
}
// :story-items [!] System label / Системная метка
