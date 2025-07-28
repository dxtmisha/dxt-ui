import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Badge from './D1Badge.vue'
import { BadgeWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Badge',
  component: D1Badge,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BadgeWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BadgeWikiStorybook.getWiki(),
  args: BadgeWikiStorybook.getValues()
} satisfies Meta<typeof D1Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Badge: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Badge },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <D1Badge v-bind="args"/>
        </div>
      </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
