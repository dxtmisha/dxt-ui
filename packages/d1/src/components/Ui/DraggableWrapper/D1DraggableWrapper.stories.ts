import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1DraggableWrapper from './D1DraggableWrapper.vue'
import { DraggableWrapperWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/DraggableWrapper',
  component: D1DraggableWrapper,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: DraggableWrapperWikiStorybook.getDescription()
      }
    }
  },
  argTypes: DraggableWrapperWikiStorybook.getWiki(),
  args: DraggableWrapperWikiStorybook.getValues()
} satisfies Meta<typeof D1DraggableWrapper>

export default meta

type Story = StoryObj<typeof meta>

export const DraggableWrapper: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1DraggableWrapper },
    setup: () => ({ args }),
    template: `
      <D1DraggableWrapper v-bind="args">
      <template #default="{ className, classClick, classDrop, classPosition }">
        <div class="wiki-storybook-group">
          <div
            :class="['wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg wiki-storybook-item--center', className, classDrop]"
            data-value="drop-target-1"
          >
            Drop Zone 1
          </div>
          <div
            :class="['wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg wiki-storybook-item--center', className, classDrop]"
            data-value="drop-target-2"
          >
            Drop Zone 2
          </div>

          <div
            v-for="item in 12"
            :key="item"
            :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-dummy--color--blue', className, classClick, classPosition]"
            :data-value="'item-' + item"
          >
            <span>Item {{ item }}</span>
          </div>
        </div>
      </template>
    </D1DraggableWrapper>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
