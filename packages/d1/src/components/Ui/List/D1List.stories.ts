import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1List from './D1List.vue'
import { ListWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/List',
  component: D1List,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ListWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ListWikiStorybook.getWiki(),
  args: ListWikiStorybook.getValues()
} satisfies Meta<typeof D1List>

export default meta

type Story = StoryObj<typeof meta>

export const List: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
