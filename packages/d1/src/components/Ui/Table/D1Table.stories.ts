import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Table from './D1Table.vue'
import { TableWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Table',
  component: D1Table,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableWikiStorybook.getWiki(),
  args: TableWikiStorybook.getValues()
} satisfies Meta<typeof D1Table>

export default meta

type Story = StoryObj<typeof meta>

export const Table: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
