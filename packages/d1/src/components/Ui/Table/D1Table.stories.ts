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
  render: (args: any) => ({
    components: { D1Table },
    setup: () => ({ args }),
    template: `
      <D1Table v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableDefault: Story = {
  name: 'По умолчанию',
  render: () => ({
    components: { D1Table },
    template: `
        <D1Table
          :columns="['id', 'name', 'status']"
          :header="{ id: 'ID', name: 'Name', status: 'Status' }"
          :list="[
            { id: '1', name: 'Alice', status: 'Active' },
            { id: '2', name: 'Bob', status: 'Pending' }
          ]"
        />
    `
  })
}
// :story-items [!] System label / Системная метка
