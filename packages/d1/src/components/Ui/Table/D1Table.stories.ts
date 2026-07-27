import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Table from './D1Table.vue'
import { TableWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
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
  args: {
    caption: 'test'
  },

  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Table },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--padding" style="max-height: 360px;">
      <D1Table v-bind="args" />
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1Table },
    template: `
        <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--padding" style="max-height: 360px;">
          <D1Table
            :columns="['id', 'name', 'status', 'role', 'email', 'age', 'country', 'city', 'salary']"
            :headerTop="true"
            :stickyLeft="['name']"
            :header="[
              {
                id: { label: 'ID', rowspan: 2, description: 'Index', tooltipLabel: 'Identifier', tooltipDescription: 'Unique number of the record.' },
                name: { label: 'Main info', colspan: 2, align: 'center', tooltipLabel: 'General info', tooltipDescription: 'Full name and active status.' },
                status: { style: { display: 'none' } },
                role: { label: 'Work', colspan: 3, align: 'center', tooltipLabel: 'Employment details', tooltipDescription: 'Job title, contact email, and age.' },
                email: { style: { display: 'none' } },
                age: { style: { display: 'none' } },
                country: { label: 'Address', colspan: 3, align: 'center', tooltipLabel: 'Location & Compensation', tooltipDescription: 'Location details and current salary.' },
                city: { style: { display: 'none' } },
                salary: { style: { display: 'none' } }
              },
              {
                id: '*none',
                name: 'Name',
                status: 'Status',
                role: 'Role',
                email: 'Email',
                age: 'Age',
                country: 'Country',
                city: 'City',
                salary: 'Salary'
              }
            ]"
            :tableItemColumnAttrs="{ id: { align: 'right' }, age: { align: 'right' }, salary: { align: 'right' } }"
            :list="[
              { id: '1', name: 'Alice Smith', status: 'Active', role: 'Developer', email: 'alice.smith@example.com', age: 28, country: 'USA', city: 'New York', salary: '$9,500' },
              { id: '2', name: 'Bob Johnson', status: 'Pending', role: 'Designer', email: 'bob.johnson@example.com', age: 34, country: 'UK', city: 'London', salary: '$8,500' },
              { id: '3', name: 'Charlie Brown', status: 'Inactive', role: 'Manager', email: 'charlie.brown@example.com', age: 42, country: 'France', city: 'Paris', salary: '$12,000' },
              { id: '4', name: 'Diana Prince', status: 'Active', role: 'Analyst', email: 'diana.prince@example.com', age: 30, country: 'Germany', city: 'Berlin', salary: '$9,000' },
              { id: '5', name: 'Edward Norton', status: 'Pending', role: 'Tester', email: 'edward.norton@example.com', age: 26, country: 'Japan', city: 'Tokyo', salary: '$7,000' },
              { id: '6', name: 'Fiona Gallagher', status: 'Active', role: 'DevOps Engineer', email: 'fiona.gallagher@example.com', age: 31, country: 'Australia', city: 'Sydney', salary: '$10,500' },
              { id: '7', name: 'George Clark', status: 'Inactive', role: 'Architect', email: 'george.clark@example.com', age: 45, country: 'Canada', city: 'Toronto', salary: '$14,000' },
              { id: '8', name: 'Hannah Abbott', status: 'Active', role: 'Support Specialist', email: 'hannah.abbott@example.com', age: 25, country: 'Singapore', city: 'Singapore', salary: '$6,000' },
              { id: '9', name: 'Ian Wright', status: 'Pending', role: 'Developer', email: 'ian.wright@example.com', age: 29, country: 'USA', city: 'New York', salary: '$9,200' },
              { id: '10', name: 'Julia Roberts', status: 'Active', role: 'Designer', email: 'julia.roberts@example.com', age: 37, country: 'UK', city: 'London', salary: '$8,800' },
              { id: '11', name: 'Kevin Bacon', status: 'Inactive', role: 'Manager', email: 'kevin.bacon@example.com', age: 50, country: 'France', city: 'Paris', salary: '$13,000' },
              { id: '12', name: 'Laura Croft', status: 'Active', role: 'Analyst', email: 'laura.croft@example.com', age: 32, country: 'Germany', city: 'Berlin', salary: '$9,400' },
              { id: '13', name: 'Michael Scott', status: 'Pending', role: 'Tester', email: 'michael.scott@example.com', age: 41, country: 'Japan', city: 'Tokyo', salary: '$7,500' },
              { id: '14', name: 'Nina Williams', status: 'Active', role: 'DevOps Engineer', email: 'nina.williams@example.com', age: 27, country: 'Australia', city: 'Sydney', salary: '$10,000' },
              { id: '15', name: 'Oliver Twist', status: 'Inactive', role: 'Architect', email: 'oliver.twist@example.com', age: 38, country: 'Canada', city: 'Toronto', salary: '$13,500' },
              { id: '16', name: 'Paula Abdul', status: 'Active', role: 'Support Specialist', email: 'paula.abdul@example.com', age: 33, country: 'Singapore', city: 'Singapore', salary: '$6,200' },
              { id: '17', name: 'Quinn Fabray', status: 'Pending', role: 'Developer', email: 'quinn.fabray@example.com', age: 24, country: 'USA', city: 'New York', salary: '$8,800' },
              { id: '18', name: 'Rachel Green', status: 'Active', role: 'Designer', email: 'rachel.green@example.com', age: 29, country: 'UK', city: 'London', salary: '$8,600' },
              { id: '19', name: 'Sam Winchester', status: 'Inactive', role: 'Manager', email: 'sam.winchester@example.com', age: 36, country: 'France', city: 'Paris', salary: '$11,500' },
              { id: '20', name: 'Tina Fey', status: 'Active', role: 'Analyst', email: 'tina.fey@example.com', age: 39, country: 'Germany', city: 'Berlin', salary: '$9,800' },
              { id: '21', name: 'Uriel Septim', status: 'Pending', role: 'Tester', email: 'uriel.septim@example.com', age: 48, country: 'Japan', city: 'Tokyo', salary: '$7,800' },
              { id: '22', name: 'Victoria Beckham', status: 'Active', role: 'DevOps Engineer', email: 'victoria.beckham@example.com', age: 35, country: 'Australia', city: 'Sydney', salary: '$11,000' },
              { id: '23', name: 'Will Smith', status: 'Inactive', role: 'Architect', email: 'will.smith@example.com', age: 43, country: 'Canada', city: 'Toronto', salary: '$14,500' },
              { id: '24', name: 'Xena Warrior', status: 'Active', role: 'Support Specialist', email: 'xena.warrior@example.com', age: 30, country: 'Singapore', city: 'Singapore', salary: '$6,500' }
            ]"
          />
        </div>
    `
  })
}
export const TableSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Table },
    template: `
        <D1Table
          caption="Table Caption"
          :columns="['id', 'name', 'status']"
          :header="[
            { id: 'ID', name: 'Name', status: 'Status' }
          ]"
          :foot="[
            { id: 'Total', name: '2 users', status: 'Active' }
          ]"
          :list="[
            { id: '1', name: 'Alice', status: 'Active' },
            { id: '2', name: 'Bob', status: 'Pending' }
          ]"
        >
          <template #caption>
            Caption Slot: Users List
          </template>
          <template #body>
            <tr>
              <td colspan="3" style="padding: 8px;">
                Body Slot (custom table body content)
              </td>
            </tr>
          </template>
          <template #header="{ columns }">
            <tr>
              <th :colspan="columns.length">
                Header Slot (custom header row)
              </th>
            </tr>
          </template>
          <template #header-name="{ value }">
            Header Cell Slot: {{ value }}
          </template>
          <template #name="{ value }">
            Cell Slot: {{ value }}
          </template>
          <template #items="{ columns }">
            <tr>
              <td :colspan="columns.length">
                Items Slot (inside tbody)
              </td>
            </tr>
          </template>
          <template #foot="{ columns }">
            <tr>
              <td :colspan="columns.length" style="padding: 8px;">
                Foot Slot (custom footer row)
              </td>
            </tr>
          </template>
          <template #foot-name="{ value }">
            Foot Cell Slot: {{ value }}
          </template>
        </D1Table>
    `
  })
}
export const TableSort: Story = {
  name: 'Сортировка',
  render: () => ({
    components: { D1Table },
    template: `
        <D1Table
          :columns="['id', 'name', 'role', 'age', 'salary']"
          :header="[
            {
              id: 'ID',
              name: { label: 'Name', showSort: true },
              role: { label: 'Role', showSort: true },
              age: { label: 'Age', showSort: true },
              salary: { label: 'Salary', showSort: true }
            }
          ]"
          sort="age"
          sortDir="desc"
          :list="[
            { id: '1', name: 'Alice Smith', role: 'Developer', age: 28, salary: 9500 },
            { id: '2', name: 'Bob Johnson', role: 'Designer', age: 34, salary: 8500 },
            { id: '3', name: 'Charlie Brown', role: 'Manager', age: 42, salary: 12000 },
            { id: '4', name: 'Diana Prince', role: 'Analyst', age: 30, salary: 9000 },
            { id: '5', name: 'Edward Norton', role: 'Tester', age: 26, salary: 7000 }
          ]"
        />
    `
  })
}
export const TableSearch: Story = {
  name: 'Поиск',
  render: () => ({
    components: { D1Table },
    setup() {
      return {
          searchValue: ref('an')
        }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <input class="wiki-storybook-input" type="text" v-model="searchValue" placeholder="Search name or role..."/>
          </div>
          <D1Table
            :search="searchValue"
            :searchColumns="['name', 'role']"
            :columns="['id', 'name', 'nameSearch', 'role', 'age', 'salary']"
            :header="[
              {
                id: 'ID',
                name: 'Name',
                nameSearch: 'Name (Search slot)',
                role: 'Role',
                age: 'Age',
                salary: 'Salary'
              }
            ]"
            :list="[
              { id: '1', name: 'Alice Smith', role: 'Developer', age: 28, salary: 9500 },
              { id: '2', name: 'Bob Johnson', role: 'Designer', age: 34, salary: 8500 },
              { id: '3', name: 'Charlie Brown', role: 'Manager', age: 42, salary: 12000 },
              { id: '4', name: 'Diana Prince', role: 'Analyst', age: 30, salary: 9000 },
              { id: '5', name: 'Edward Norton', role: 'Tester', age: 26, salary: 7000 },
              { id: '6', name: 'Fiona Gallagher', role: 'Product Manager', age: 35, salary: 11000 },
              { id: '7', name: 'George Miller', role: 'Developer', age: 29, salary: 9200 },
              { id: '8', name: 'Hannah Abbott', role: 'Designer', age: 31, salary: 8800 },
              { id: '9', name: 'Ian Wright', role: 'DevOps', age: 38, salary: 10500 },
              { id: '10', name: 'Julia Roberts', role: 'HR Manager', age: 45, salary: 9500 },
              { id: '11', name: 'Kevin Hart', role: 'Tester', age: 27, salary: 7200 },
              { id: '12', name: 'Liam Neeson', role: 'Director', age: 52, salary: 15000 }
            ]"
            key-value="id"
          >
            <template #nameSearch="{ value }">
              <span v-html="value"/>
            </template>
          </D1Table>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
