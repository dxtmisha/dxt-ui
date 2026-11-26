import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableFlex from './D1TableFlex.vue'
import { TableFlexWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { SortColumnItem } from '@dxtmisha/functional'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TableFlex',
  component: D1TableFlex,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableFlexWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableFlexWikiStorybook.getWiki(),
  args: TableFlexWikiStorybook.getValues()
} satisfies Meta<typeof D1TableFlex>

export default meta

type Story = StoryObj<typeof meta>

export const TableFlex: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TableFlex },
    setup: () => ({ args }),
    template: `
      <D1TableFlex v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const tableRoot = canvasElement.querySelector<HTMLElement>('.d1-tableFlex')
    await expect(tableRoot).toBeInTheDocument()

    const tableElement = tableRoot?.querySelector<HTMLElement>('.d1-tableFlex__table')
    await expect(tableElement).toBeInTheDocument()
    await expect(tableElement?.tagName).toBe('DIV')
    await expect(tableElement).toHaveAttribute('role', 'table')
    await expect(tableRoot?.querySelector('table, thead, tbody, tfoot, colgroup, col, tr, th, td')).toBeNull()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableFlexBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1TableFlex },
    template: `
        
        <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--padding" style="max-height: 360px;">
          <D1TableFlex
            :columns="['id', 'name', 'status', 'role', 'email', 'age', 'country', 'city', 'salary']"
            :headerTop="true"
            :stickyLeft="['name']"
            :header="[
              {
                id: 'ID',
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
            :tableItemColumnAttrs="{
              id: { align: 'right' },
              email: { colspan: '3' },
              age: { align: 'right' },
              salary: { align: 'right' }
            }"
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
  }),
  play: async ({ canvasElement }) => {
    const tableRoot = canvasElement.querySelector<HTMLElement>('.d1-tableFlex')
    const tableElement = tableRoot?.querySelector<HTMLElement>('.d1-tableFlex__table')

    await expect(tableRoot).toBeInTheDocument()
    await expect(tableRoot).toHaveClass('d1-tableFlex--headerTop')
    await expect(tableElement?.tagName).toBe('DIV')
    await expect(tableElement).toHaveAttribute('role', 'table')
    await expect(tableRoot?.querySelector('table, thead, tbody, tfoot, colgroup, col, tr, th, td')).toBeNull()

    const headerCells = tableElement?.querySelectorAll<HTMLElement>('.d1-tableFlex__header [role="columnheader"]')
    await expect(headerCells?.length).toBe(9)
    await expect(headerCells?.[4]).toHaveAttribute('data-colspan', '3')

    await waitFor(() => {
      const dataRows = tableElement?.querySelectorAll<HTMLElement>('.d1-tableFlex__items [role="row"]')
      expect(dataRows?.length).toBe(24)
      expect(dataRows?.[0].querySelectorAll('[role="cell"]').length).toBe(9)
    })
  }
}
export const TableFlexSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1TableFlex },
    template: `
        
        <D1TableFlex
          caption="Table Caption"
          :lazy="false"
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
            <span data-testid="flex-slot-caption">Caption Slot: Users List</span>
          </template>
          <template #body>
            <div data-testid="flex-slot-body" style="padding: 8px;">
              Body Slot (custom flex table body content)
            </div>
          </template>
          <template #header="{ columns }">
            <div data-testid="flex-slot-header">
              Header Slot ({{ columns.length }} columns)
            </div>
          </template>
          <template #header-name="{ value }">
            <span data-testid="flex-slot-header-name">Header Cell Slot: {{ value }}</span>
          </template>
          <template #name="{ value }">
            <span class="flex-slot-cell-name">Cell Slot: {{ value }}</span>
          </template>
          <template #items="{ columns }">
            <div data-testid="flex-slot-items">
              Items Slot ({{ columns.length }} columns)
            </div>
          </template>
          <template #foot="{ columns }">
            <div data-testid="flex-slot-foot" style="padding: 8px;">
              Foot Slot ({{ columns.length }} columns)
            </div>
          </template>
          <template #foot-name="{ value }">
            <span data-testid="flex-slot-foot-name">Foot Cell Slot: {{ value }}</span>
          </template>
        </D1TableFlex>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tableRoot = canvasElement.querySelector<HTMLElement>('.d1-tableFlex')

    await expect(tableRoot?.querySelector('table, colgroup')).toBeNull()
    await expect(canvas.getByTestId('flex-slot-caption')).toHaveTextContent('Caption Slot: Users List')
    await expect(canvas.getByTestId('flex-slot-body')).toHaveTextContent('Body Slot')
    await expect(canvas.getByTestId('flex-slot-header')).toHaveTextContent('Header Slot (3 columns)')
    await expect(canvas.getByTestId('flex-slot-header-name')).toHaveTextContent('Header Cell Slot: Name')
    await expect(canvas.getByTestId('flex-slot-items')).toHaveTextContent('Items Slot (3 columns)')
    await expect(canvas.getByTestId('flex-slot-foot')).toHaveTextContent('Foot Slot (3 columns)')
    await expect(canvas.getByTestId('flex-slot-foot-name')).toHaveTextContent('Foot Cell Slot: 2 users')

    const cellNameSlots = canvasElement.querySelectorAll<HTMLElement>('.flex-slot-cell-name')
    await expect(cellNameSlots.length).toBe(2)
    await expect(cellNameSlots[0]).toHaveTextContent('Cell Slot: Alice')
    await expect(cellNameSlots[1]).toHaveTextContent('Cell Slot: Bob')
  }
}
export const TableFlexSort: Story = {
  name: 'Сортировка',
  render: () => ({
    components: { D1TableFlex },
    setup() {
      const lastSortPayload = ref<string>('age:desc')
      const handleTableSort = (item: SortColumnItem) => {
        lastSortPayload.value = (item.column ?? 'none') + ':' + (item.dir ?? 'none')
      }

      return {
        lastSortPayload,
        handleTableSort
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">
            <span data-testid="flex-table-sort-status">{{ lastSortPayload }}</span>
          </div>
          <D1TableFlex
            :lazy="false"
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
            @sort="handleTableSort"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const getFirstRowName = () => {
      const firstRow = canvasElement.querySelector<HTMLElement>('.d1-tableFlex__items [role="row"]')
      return firstRow?.querySelectorAll<HTMLElement>('[role="cell"]')[1]?.textContent?.trim()
    }

    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlex__header [role="columnheader"]')
    await expect(headerCells.length).toBe(5)

    const nameHeader = headerCells[1]
    const ageHeader = headerCells[3]
    const nameSortButton = nameHeader.querySelector<HTMLElement>('[role="button"], button')

    // Initial sort="age" + sortDir="desc" syncs aria-sort and DOM order
    await expect(ageHeader).toHaveAttribute('aria-sort', 'descending')
    await expect(nameHeader).not.toHaveAttribute('aria-sort')
    expect(getFirstRowName()).toBe('Charlie Brown')

    // 3-click cycle on Name column: asc -> desc -> reset
    await step('First click on Name sorts ascending', async () => {
      await userEvent.click(nameSortButton!)
      await expect(canvas.getByTestId('flex-table-sort-status')).toHaveTextContent('name:asc')
      await expect(nameHeader).toHaveAttribute('aria-sort', 'ascending')
      await expect(ageHeader).not.toHaveAttribute('aria-sort')
      expect(getFirstRowName()).toBe('Alice Smith')
    })

    await step('Second click on Name sorts descending', async () => {
      await userEvent.click(nameSortButton!)
      await expect(canvas.getByTestId('flex-table-sort-status')).toHaveTextContent('name:desc')
      await expect(nameHeader).toHaveAttribute('aria-sort', 'descending')
      expect(getFirstRowName()).toBe('Edward Norton')
    })

    await step('Third click on Name resets sorting to source order', async () => {
      await userEvent.click(nameSortButton!)
      await expect(canvas.getByTestId('flex-table-sort-status')).toHaveTextContent('none:none')
      await expect(nameHeader).not.toHaveAttribute('aria-sort')
      await expect(ageHeader).not.toHaveAttribute('aria-sort')
      expect(getFirstRowName()).toBe('Alice Smith')
    })
  }
}
export const TableFlexSearch: Story = {
  name: 'Поиск',
  render: () => ({
    components: { D1TableFlex },
    setup() {
      return {
        searchValue: ref('an')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <input
              data-testid="flex-table-search-input"
              class="wiki-storybook-input"
              type="text"
              v-model="searchValue"
              placeholder="Search name or role..."
            />
          </div>
          <D1TableFlex
            :lazy="false"
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
          </D1TableFlex>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const searchInput = canvas.getByTestId('flex-table-search-input')
    const getVisibleRowCount = () => canvasElement.querySelectorAll('.d1-tableFlex__items [role="row"]').length

    // Initial query "an" matches subset of records (Manager, Analyst, Diana, Hannah, Ian)
    expect(getVisibleRowCount()).toBeLessThan(12)
    expect(getVisibleRowCount()).toBeGreaterThan(0)

    await step('Filter by Developer role', async () => {
      await userEvent.clear(searchInput)
      await userEvent.type(searchInput, 'Developer')
      await waitFor(() => {
        expect(getVisibleRowCount()).toBe(2)
      })
    })

    await step('Clear search restores all 12 rows', async () => {
      await userEvent.clear(searchInput)
      await waitFor(() => {
        expect(getVisibleRowCount()).toBe(12)
      })
    })
  }
}
export const TableFlexTestCaptionFootAndSlots: Story = {
  name: 'Тест: Caption, captionBottom, bleed, слоты foot и отсутствие colgroup',
  render: () => ({
    components: { D1TableFlex },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TableFlex
            caption="Financial Summary"
            :captionBottom="true"
            :captionDecorative="true"
            :bleed="true"
            :lazy="false"
            :stickyScrollBottom="false"
            :columns="['item', 'amount', 'currency']"
            :columnsWidth="{ item: 180, amount: '120px', currency: 90 }"
            :header="{ item: 'Item', amount: 'Amount', currency: 'Currency' }"
            :list="[
              { item: 'Core License', amount: 0, currency: 'USD' },
              { item: 'Support Plan', amount: 1200, currency: 'USD' }
            ]"
            :foot="{ item: 'Total', amount: 1200, currency: 'USD' }"
          >
            <template #header-default="{ index, value }">
              <span :data-testid="'table-header-default-' + index">H:{{ value }}</span>
            </template>
            <template #foot-amount="{ value }">
              <strong data-testid="table-foot-amount">F:{{ value }}</strong>
            </template>
            <template #foot-default="{ index, value }">
              <em :data-testid="'table-foot-default-' + index">FD:{{ value }}</em>
            </template>
          </D1TableFlex>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tableRoot = canvasElement.querySelector<HTMLElement>('.d1-tableFlex')
    const tableElement = tableRoot?.querySelector<HTMLElement>('.d1-tableFlex__table')

    await expect(tableRoot).toBeInTheDocument()
    await expect(tableRoot).toHaveClass('d1-tableFlex--captionBottom')
    await expect(tableRoot).toHaveClass('d1-tableFlex--bleed')

    // stickyScrollBottom=false renders table directly inside root without ScrollSticky wrapper
    await expect(tableRoot?.firstElementChild).toBe(tableElement)
    await expect(tableElement?.tagName).toBe('DIV')
    await expect(tableElement).toHaveAttribute('role', 'table')

    // Zero native HTML table or colgroup tags even when columnsWidth is provided
    await expect(tableRoot?.querySelector('table, thead, tbody, tfoot, colgroup, col, tr, th, td')).toBeNull()

    // Caption rendered as div
    const captionElement = tableElement?.querySelector<HTMLElement>('.d1-tableFlex__caption')
    await expect(captionElement).toBeInTheDocument()
    await expect(captionElement?.tagName).toBe('DIV')
    await expect(captionElement).toHaveTextContent('Financial Summary')

    // Header default slot
    await expect(canvas.getByTestId('table-header-default-item')).toHaveTextContent('H:Item')
    await expect(canvas.getByTestId('table-header-default-amount')).toHaveTextContent('H:Amount')

    // Foot container rendered as div with #foot-<col> and #foot-default slots, zero scope
    const footContainer = tableElement?.querySelector<HTMLElement>('.d1-tableFlex__foot')
    await expect(footContainer).toBeInTheDocument()
    await expect(footContainer?.tagName).toBe('DIV')
    await expect(canvas.getByTestId('table-foot-amount')).toHaveTextContent('F:1200')
    await expect(canvas.getByTestId('table-foot-default-item')).toHaveTextContent('FD:Total')
    await expect(canvas.getByTestId('table-foot-default-currency')).toHaveTextContent('FD:USD')

    const footCells = footContainer?.querySelectorAll<HTMLElement>('[role="columnheader"]')
    await expect(footCells?.length).toBe(3)
    footCells?.forEach((footCell) => {
      expect(footCell).not.toHaveAttribute('scope')
    })
  }
}
export const TableFlexTestPaginationAndLazy: Story = {
  name: 'Тест: Пагинация (page/rows) и ленивая виртуализация (lazy/defaultHeight)',
  render: () => ({
    components: { D1TableFlex },
    setup() {
      const currentPage = ref<number>(1)
      const isLazyEnabled = ref<boolean>(true)
      const dataset = [
        { id: '1', title: 'Alpha' },
        { id: '2', title: 'Beta' },
        { id: '3', title: 'Gamma' },
        { id: '4', title: 'Delta' },
        { id: '5', title: 'Epsilon' }
      ]

      return {
        currentPage,
        isLazyEnabled,
        dataset
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="currentPage = 1">Page 1</button>
            <button class="wiki-storybook-button" @click="currentPage = 2">Page 2</button>
            <button class="wiki-storybook-button" @click="currentPage = 3">Page 3</button>
            <button class="wiki-storybook-button" @click="isLazyEnabled = !isLazyEnabled">Toggle Lazy</button>
            <span data-testid="flex-table-page-indicator">Page {{ currentPage }}</span>
          </div>
          <D1TableFlex
            :columns="['id', 'title']"
            :header="{ id: 'ID', title: 'Title' }"
            :foot="{ id: 'Total', title: '5 items' }"
            :list="dataset"
            :page="currentPage"
            :rows="2"
            :lazy="isLazyEnabled"
            :defaultHeight="52"
            keyValue="id"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const getRenderedTitles = () => Array.from(
      canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlex__items [role="row"]')
    ).map(row => row.querySelectorAll<HTMLElement>('[role="cell"]')[1]?.textContent?.trim())

    // Verify header & footer rows are NOT lazy while data rows ARE lazy with 52px minHeight token
    await waitFor(() => {
      const headerRow = canvasElement.querySelector<HTMLElement>('.d1-tableFlex__header [role="row"]')
      const footRow = canvasElement.querySelector<HTMLElement>('.d1-tableFlex__foot [role="row"]')
      const dataRows = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlex__items [role="row"]')

      expect(headerRow?.className).not.toContain('--lazy')
      expect(footRow?.className).not.toContain('--lazy')
      expect(dataRows.length).toBe(2)
      expect(dataRows[0].className).toContain('--lazy')
      expect(dataRows[0].getAttribute('style')).toContain('-sys-minHeight: 52px')
      expect(getRenderedTitles()).toEqual(['Alpha', 'Beta'])
    })

    await step('Navigate to page 2', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Page 2' }))
      await waitFor(() => {
        expect(canvas.getByTestId('flex-table-page-indicator')).toHaveTextContent('Page 2')
        expect(getRenderedTitles()).toEqual(['Gamma', 'Delta'])
      })
    })

    await step('Navigate to page 3 (last partial page)', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Page 3' }))
      await waitFor(() => {
        expect(getRenderedTitles()).toEqual(['Epsilon'])
      })
    })

    await step('Disable lazy dynamically removes lazy class and minHeight token', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Toggle Lazy' }))
      await waitFor(() => {
        const dataRow = canvasElement.querySelector<HTMLElement>('.d1-tableFlex__items [role="row"]')
        expect(dataRow?.className).not.toContain('--lazy')
        expect(dataRow?.getAttribute('style') ?? '').not.toContain('-sys-minHeight')
      })
    })
  }
}
export const TableFlexTestSelectionSkeletonAndRowAttrs: Story = {
  name: 'Тест: Выделение, stickyScrollBottom, скелетон, атрибуты строк/ячеек и кастомная сортировка',
  render: () => ({
    components: { D1TableFlex, D1Skeleton },
    setup() {
      const comparePriority = (
        firstRecord: Record<string, unknown>,
        secondRecord: Record<string, unknown>
      ): number => {
        return Number(firstRecord.priority ?? 0) - Number(secondRecord.priority ?? 0)
      }

      return {
        comparePriority
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TableFlex
            data-testid="flex-table-configured"
            :lazy="false"
            :stickyScrollBottom="true"
            :columns="['code', 'label', 'priority']"
            :header="{ code: 'Code', label: 'Task', priority: 'Priority' }"
            :list="[
              { code: 't-3', label: 'Third', priority: 3 },
              { code: 't-1', label: 'First', priority: 1 },
              { code: 't-2', label: 'Second', priority: 2, disabled: true }
            ]"
            keyValue="code"
            :selected="['t-1']"
            :stickyTop="['t-1']"
            :stickyLeft="['code']"
            sort="priority"
            sortDir="asc"
            :sortFunction="comparePriority"
            :searchOptions="{ limit: 10 }"
            :tableItemAttrs="{ dividerX: true }"
            :tableRecordAttrs="{ 'data-record-shared': 'yes' }"
            :tableRowAttrs="{ 't-3': { 'data-row-special': 'true' } }"
          />
          <D1Skeleton :active="true">
            <D1TableFlex
              data-testid="flex-table-skeleton"
              :lazy="false"
              :stickyScrollBottom="false"
              :isSkeleton="true"
              :columns="['code', 'label']"
              :header="{ code: 'Code', label: 'Task' }"
              :list="[
                { code: 's-1', label: 'Loading row' }
              ]"
            />
          </D1Skeleton>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const tables = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlex')
    await expect(tables.length).toBe(2)

    const configuredTable = tables[0]
    const skeletonTable = tables[1]

    // stickyScrollBottom=true wraps table inside ScrollSticky (2 children: context + scroll)
    await expect(configuredTable.children.length).toBe(2)
    await expect(configuredTable.firstElementChild?.querySelector('.d1-tableFlex__table')).toBeInTheDocument()

    // Custom sortFunction orders rows by priority: t-1, t-2, t-3
    const rows = configuredTable.querySelectorAll<HTMLElement>('.d1-tableFlex__items [role="row"]')
    await expect(rows.length).toBe(3)
    await expect(rows[0]).toHaveAttribute('data-key', 't-1')
    await expect(rows[0]).toHaveAttribute('aria-selected', 'true')
    await expect(rows[0]).toHaveAttribute('data-record-shared', 'yes')

    const firstRowCells = rows[0].querySelectorAll<HTMLElement>('[role="cell"]')
    expect(firstRowCells[0].className).toContain('--stickyLeft')
    expect(firstRowCells[0].className).toContain('--stickyTop')
    expect(firstRowCells[0].className).toContain('--dividerX')

    await expect(rows[1]).toHaveAttribute('data-key', 't-2')
    await expect(rows[1]).toHaveAttribute('aria-disabled', 'true')
    await expect(rows[1]).not.toHaveAttribute('aria-selected')

    await expect(rows[2]).toHaveAttribute('data-key', 't-3')
    await expect(rows[2]).toHaveAttribute('data-row-special', 'true')

    // Skeleton table renders skeleton text classes on cells
    const skeletonLabels = skeletonTable.querySelectorAll<HTMLElement>('[class*="skeleton__textVariant"]')
    await expect(skeletonLabels.length).toBeGreaterThan(0)
  }
}
// :story-items [!] System label / Системная метка
