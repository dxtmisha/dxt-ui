import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ChipGroup from './D1ChipGroup.vue'
import { ChipGroupWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ChipGroup',
  component: D1ChipGroup,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ChipGroupWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ChipGroupWikiStorybook.getWiki(),
  args: ChipGroupWikiStorybook.getValues()
} satisfies Meta<typeof D1ChipGroup>

export default meta

type Story = StoryObj<typeof meta>

export const ChipGroup: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ChipGroupSelection: Story = {
  name: 'Состояния выбора',
  render: () => ({
    components: { D1ChipGroup },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
          <D1ChipGroup
            :list="[
              { label: 'Option 1', icon: 'check', value: 'option1' },
              { label: 'Option 2', icon: 'check', value: 'option2' },
              { label: 'Option 3', icon: 'check', value: 'option3' }
            ]"
            :selected="['option2']"
            :icon-when-selected="true"
          />
        </div>
    `
  })
}
export const ChipGroupVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1ChipGroup },
    setup() {
      return {
        selectedValue: ref('option2'),
        multipleSelected: ref(['option1', 'option3'])
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="multipleSelected = []">Clear all</button>
          </div>
          <D1ChipGroup
            v-model:selected="multipleSelected"
            :list="[
              { label: 'Option 1', value: 'option1', icon: 'check' },
              { label: 'Option 2', value: 'option2', icon: 'check' },
              { label: 'Option 3', value: 'option3', icon: 'check' }
            ]"
            :readonly="false"
            :icon-when-selected="true"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
