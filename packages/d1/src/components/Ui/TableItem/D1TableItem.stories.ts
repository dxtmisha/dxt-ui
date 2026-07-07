import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableItem from './D1TableItem.vue'
import { TableItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TableItem',
  component: D1TableItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableItemWikiStorybook.getWiki(),
  args: TableItemWikiStorybook.getValues()
} satisfies Meta<typeof D1TableItem>

export default meta

type Story = StoryObj<typeof meta>

export const TableItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
