import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SelectableArea from './D1SelectableArea.vue'
import { SelectableAreaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
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
// :story-items [!] System label / Системная метка
