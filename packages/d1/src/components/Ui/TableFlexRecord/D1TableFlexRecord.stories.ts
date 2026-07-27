import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableFlexRecord from './D1TableFlexRecord.vue'
import { TableFlexRecordWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TableFlexRecord',
  component: D1TableFlexRecord,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableFlexRecordWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableFlexRecordWikiStorybook.getWiki(),
  args: TableFlexRecordWikiStorybook.getValues()
} satisfies Meta<typeof D1TableFlexRecord>

export default meta

type Story = StoryObj<typeof meta>

export const TableFlexRecord: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
