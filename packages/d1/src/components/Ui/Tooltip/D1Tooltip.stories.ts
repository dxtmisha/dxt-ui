import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Tooltip from './D1Tooltip.vue'
import { TooltipWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Tooltip',
  component: D1Tooltip,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TooltipWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TooltipWikiStorybook.getWiki(),
  args: TooltipWikiStorybook.getValues()
} satisfies Meta<typeof D1Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Tooltip: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Tooltip },
    setup: () => ({ args }),
    template: `
      <D1Tooltip v-bind="args">
        <template #control="{ binds }">
          <span v-bind="binds">
            Hover me
          </span>
        </template>
      </D1Tooltip>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TooltipAllSlots: Story = {
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: { D1Tooltip },
    template: `
        <D1Tooltip>
          <template #control="{ binds }">
            <button class="wiki-storybook-button" v-bind="binds">
              Hover me (All Slots)
            </button>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #description>
            Description Slot
          </template>

          <template #body>
            <div class="wiki-storybook-item--padding">
              Body Slot Content
            </div>
          </template>
        </D1Tooltip>
    `
  })
}
// :story-items [!] System label / Системная метка
