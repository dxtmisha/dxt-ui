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
  render: (args: any) => ({
    components: { D1ListGroup },
    setup: () => ({ args }),
    template: `
      <D1ListGroup v-bind="args">
      <template v-slot:head="{open}">
        Primary group header with expand/collapse toggle
      </template>
      <template v-slot:list>
        Main content area for grouped list items
      </template>
    </D1ListGroup>

    <D1ListGroup v-bind="args">
      <template v-slot:head="{open}">
        Secondary group header with custom styling
      </template>
      <template v-slot:list>
        Alternative layout for nested components
      </template>
    </D1ListGroup>

    <D1ListGroup v-bind="args">
      <template v-slot:head="{open}">
        Tertiary group header with advanced options
      </template>
      <template v-slot:list>
        Extended content area with additional features
      </template>
    </D1ListGroup>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
