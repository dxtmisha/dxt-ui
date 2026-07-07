import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableHeaderItem from './D1TableHeaderItem.vue'
import { TableHeaderItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TableHeaderItem',
  component: D1TableHeaderItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableHeaderItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableHeaderItemWikiStorybook.getWiki(),
  args: TableHeaderItemWikiStorybook.getValues()
} satisfies Meta<typeof D1TableHeaderItem>

export default meta

type Story = StoryObj<typeof meta>

export const TableHeaderItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
