import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ListGroup from './D1ListGroup.vue'
import { ListGroupWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ListGroup',
  component: D1ListGroup,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ListGroupWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ListGroupWikiStorybook.getWiki(),
  args: ListGroupWikiStorybook.getValues()
} satisfies Meta<typeof D1ListGroup>

export default meta

type Story = StoryObj<typeof meta>

export const ListGroup: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
