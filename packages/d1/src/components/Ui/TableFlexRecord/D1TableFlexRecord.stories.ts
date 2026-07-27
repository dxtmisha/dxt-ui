import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableFlexRecord from './D1TableFlexRecord.vue'
import { TableFlexRecordWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
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
  render: (args: any) => ({
    components: { D1TableFlexRecord },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex-column">
      <D1TableFlexRecord v-bind="args" />
      <D1TableFlexRecord v-bind="args" />
      <D1TableFlexRecord v-bind="args" />
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableFlexRecordIsHeader: Story = {
  name: 'Строка заголовка',
  render: () => ({
    components: { D1TableFlexRecord },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1TableFlexRecord
            :isHeader="true"
            :columns="['id', 'name', 'role', 'status']"
            :item="{ id: 'ID', name: 'Имя', role: 'Должность', status: 'Статус' }"
          />
        </div>
    `
  })
}
export const TableFlexRecordSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1TableFlexRecord, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1TableFlexRecord
              :isSkeleton="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
            />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
