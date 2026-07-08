import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableRecord from './D1TableRecord.vue'
import { TableRecordWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TableRecord',
  component: D1TableRecord,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableRecordWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableRecordWikiStorybook.getWiki(),
  args: TableRecordWikiStorybook.getValues()
} satisfies Meta<typeof D1TableRecord>

export default meta

type Story = StoryObj<typeof meta>

export const TableRecord: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
