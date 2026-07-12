import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableRecord from './D1TableRecord.vue'
import { TableRecordWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
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
  args: {
    disabled: false,
    isHeader: false,
    selected: false,

    tableItemColumnAttrs: {
      name: {
        disabled: true
      }
    }
  },

  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TableRecord },
    setup: () => ({ args }),
    template: `
      <table>
      <D1TableRecord v-bind="args" />
      <D1TableRecord v-bind="args" />
      <D1TableRecord v-bind="args" />
    </table>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableRecordIsHeader: Story = {
  name: 'Строка заголовка',
  render: () => ({
    components: { D1TableRecord },
    template: `
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <D1TableRecord
              :isHeader="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: 'ID', name: 'Имя', role: 'Должность', status: 'Статус' }"
            />
          </thead>
        </table>
    `
  })
}
export const TableRecordSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1TableRecord, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <table style="border-collapse: collapse; width: 100%;">
            <tbody>
              <D1TableRecord
                :isSkeleton="true"
                :columns="['id', 'name', 'role', 'status']"
                :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
              />
            </tbody>
          </table>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
