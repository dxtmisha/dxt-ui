import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1GridItem from './D1GridItem.vue'
import { GridItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/GridItem',
  component: D1GridItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: GridItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: GridItemWikiStorybook.getWiki(),
  args: GridItemWikiStorybook.getValues()
} satisfies Meta<typeof D1GridItem>

export default meta

type Story = StoryObj<typeof meta>

export const GridItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1GridItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-group">
      <D1GridItem v-bind="args">
        <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"/>
      </D1GridItem>
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
