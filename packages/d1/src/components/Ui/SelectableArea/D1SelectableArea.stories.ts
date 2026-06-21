import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SelectableArea from './D1SelectableArea.vue'
import { SelectableAreaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SelectableArea',
  component: D1SelectableArea,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SelectableAreaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SelectableAreaWikiStorybook.getWiki(),
  args: SelectableAreaWikiStorybook.getValues()
} satisfies Meta<typeof D1SelectableArea>

export default meta

type Story = StoryObj<typeof meta>

export const SelectableArea: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1SelectableArea },
    setup: () => ({ args }),
    template: `
      <D1SelectableArea v-bind="args">
      <template #default="{ className, classClick, onClick }">
        <div
          class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
          <div
            v-for="item in 12"
            :key="item"
            :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick]"
            :data-value="'item-' + item"
            style="overflow: visible;"
            @click="onClick"
          >
            Item {{ item }}
          </div>
        </div>
      </template>
    </D1SelectableArea>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SelectableAreaBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1SelectableArea },
    template: `
        <D1SelectableArea>
          <template #default="{ className, classClick, onClick }">
            <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
              <div
                v-for="item in 6"
                :key="item"
                :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </D1SelectableArea>
    `
  })
}
export const SelectableAreaVModel: Story = {
  name: 'v-model',
  render: () => ({
    components: { D1SelectableArea },
    setup() {
      return {
        selected: ref(['item-2', 'item-3'])
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Selected items: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = []">Reset</button>
            <button class="wiki-storybook-button" @click="selected = ['item-1', 'item-2', 'item-3']">Select 1-3</button>
          </div>

          <D1SelectableArea
            v-model:selected="selected"
          >
            <template #default="{ className, classSelection, classClick, onClick }">
              <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
                <div
                  v-for="item in 6"
                  :key="item"
                  :class="[
                    'wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center',
                    className,
                    classClick,
                    selected.includes('item-' + item) && classSelection
                  ]"
                  :data-value="'item-' + item"
                  @click="onClick"
                >
                  Item {{ item }}
                </div>
              </div>
            </template>
          </D1SelectableArea>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
