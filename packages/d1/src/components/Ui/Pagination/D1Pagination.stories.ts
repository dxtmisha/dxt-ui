import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Pagination from './D1Pagination.vue'
import { PaginationWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Pagination',
  component: D1Pagination,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: PaginationWikiStorybook.getDescription()
      }
    }
  },
  argTypes: PaginationWikiStorybook.getWiki(),
  args: PaginationWikiStorybook.getValues()
} satisfies Meta<typeof D1Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Pagination: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
