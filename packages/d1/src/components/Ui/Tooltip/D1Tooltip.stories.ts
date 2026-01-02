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
// :story-items [!] System label / Системная метка
