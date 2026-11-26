import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Table component properties
 *
 * Описания свойств компонента Table
 */
export const wikiDescriptionsTable: StorybookComponentsDescriptionItem = {
  name: 'Table',
  description: {
    en: 'Table component orchestrating grid-like column indexes and list row records',
    ru: 'Компонент таблицы, координирующий сеточные индексы колонок и список строк данных'
  },
  possibilities: {
    en: [
      'structured representation of datasets in tabular form with `colgroup` column widths (`columnsWidth`)',
      'multi-row hierarchical headers (`header`) and footer rows (`foot` with `isFoot` and `#foot-*` slots)',
      'accessible table caption support (`caption`, `captionBottom`, `captionDecorative`)',
      'built-in local search and filtering (`search`, `searchColumns`, `searchOptions`)',
      'built-in 3-state column sorting, multi-column sorting, and custom comparators (`sort`, `sortDir`, `sortFunction`, `@sort`)',
      'client-side pagination slicing (`page`, `rows`)',
      'sticky headers (`headerTop`), sticky left columns (`stickyLeft`), sticky top rows (`stickyTop`), and sticky bottom scrollbar (`stickyScrollBottom`)',
      'row-level selection (`selected`, `keyValue`), skeleton loading (`isSkeleton`), and attribute overrides (`tableRecordAttrs`, `tableRowAttrs`, `tableItemAttrs`, `tableItemColumnAttrs`)',
      'custom slots for `caption`, `body`, `header`, `items`, `foot`, `#header-<col>`, `#foot-<col>`, `#<col>`, and fallback defaults'
    ],
    ru: [
      'структурированное представление наборов данных в табличном виде с шириной колонок `colgroup` (`columnsWidth`)',
      'многоуровневая шапка (`header`) и строки подвала (`foot` с `isFoot` и слотами `#foot-*`)',
      'доступная подпись таблицы (`caption`, `captionBottom`, `captionDecorative`)',
      'встроенный локальный поиск и фильтрация (`search`, `searchColumns`, `searchOptions`)',
      'встроенная 3-состоятельная сортировка, мультисортировка и пользовательские компараторы (`sort`, `sortDir`, `sortFunction`, `@sort`)',
      'клиентская пагинация списка (`page`, `rows`)',
      'липкая шапка (`headerTop`), липкие левые колонки (`stickyLeft`), липкие верхние строки (`stickyTop`) и нижний скроллбар (`stickyScrollBottom`)',
      'выбор строк (`selected`, `keyValue`), загрузка скелетона (`isSkeleton`) и переопределение атрибутов (`tableRecordAttrs`, `tableRowAttrs`, `tableItemAttrs`, `tableItemColumnAttrs`)',
      'пользовательские слоты для `caption`, `body`, `header`, `items`, `foot`, `#header-<col>`, `#foot-<col>`, `#<col>` и резервные слоты по умолчанию'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { SortColumnItem } from \'@dxtmisha/functional\''
  ],
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
    const rootElement = canvasElement.querySelector<HTMLElement>('.design-component')
    await expect(rootElement).toBeInTheDocument()

    const tableElement = canvasElement.querySelector<HTMLTableElement>('table.design-component__table')
    await expect(tableElement).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'TableBasic',
      name: {
        en: 'Basic',
        ru: 'Базовый'
      },
      template: `
        <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--padding" style="max-height: 360px;">
          <DesignComponent
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
      `,
      play: `
        const rootElement = canvasElement.querySelector<HTMLElement>('.design-component')
        await expect(rootElement).toBeInTheDocument()
        await expect(rootElement).toHaveClass('design-component--headerTop')

        const colElements = canvasElement.querySelectorAll<HTMLElement>('colgroup.design-component__colgroup col.design-component__col')
        await expect(colElements.length).toBe(9)

        const headerRows = canvasElement.querySelectorAll<HTMLElement>('thead.design-component__header tr')
        await expect(headerRows.length).toBe(2)

        const identifierHeader = headerRows[0].querySelector<HTMLElement>('th[data-index="id"]')
        const mainInfoHeader = headerRows[0].querySelector<HTMLElement>('th[data-index="name"]')
        const workHeader = headerRows[0].querySelector<HTMLElement>('th[data-index="role"]')
        const addressHeader = headerRows[0].querySelector<HTMLElement>('th[data-index="country"]')

        await expect(identifierHeader).toHaveAttribute('rowspan', '2')
        await expect(mainInfoHeader).toHaveAttribute('colspan', '2')
        await expect(workHeader).toHaveAttribute('colspan', '3')
        await expect(addressHeader).toHaveAttribute('colspan', '3')

        const hiddenSecondRowIdHeader = headerRows[1].querySelector<HTMLElement>('th[data-index="id"]')
        await expect(hiddenSecondRowIdHeader?.className).toContain('--none')

        const bodyRows = canvasElement.querySelectorAll<HTMLElement>('tbody.design-component__items tr')
        await expect(bodyRows.length).toBe(24)

        const firstNameCell = bodyRows[0].querySelector<HTMLElement>('td[data-index="name"]')
        const firstSalaryCell = bodyRows[0].querySelector<HTMLElement>('td[data-index="salary"]')
        await expect(firstNameCell?.className).toContain('--stickyLeft')
        await expect(firstSalaryCell?.className).toContain('--align--right')
      `
    },
    {
      id: 'TableSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent
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
        </DesignComponent>
      `,
      play: `
        const tableElement = canvasElement.querySelector<HTMLTableElement>('table.design-component__table')
        await expect(tableElement).toBeInTheDocument()

        const captionElement = tableElement?.querySelector<HTMLElement>('caption.design-component__caption')
        await expect(captionElement).toHaveTextContent('Table Caption')
        await expect(captionElement).toHaveTextContent('Caption Slot: Users List')

        await expect(tableElement).toHaveTextContent('Body Slot (custom table body content)')

        const headerSection = tableElement?.querySelector<HTMLElement>('thead.design-component__header')
        await expect(headerSection).toHaveTextContent('Header Slot (custom header row)')
        await expect(headerSection?.querySelector('th[data-index="name"]')).toHaveTextContent('Header Cell Slot: Name')
        await expect(headerSection?.querySelector('th[data-index="name"]')).toHaveAttribute('scope', 'col')

        const itemsSection = tableElement?.querySelector<HTMLElement>('tbody.design-component__items')
        await expect(itemsSection).toHaveTextContent('Cell Slot: Alice')
        await expect(itemsSection).toHaveTextContent('Cell Slot: Bob')
        await expect(itemsSection).toHaveTextContent('Items Slot (inside tbody)')

        const footerSection = tableElement?.querySelector<HTMLElement>('tfoot.design-component__foot')
        await expect(footerSection).toHaveTextContent('Foot Slot (custom footer row)')
        const footerNameCell = footerSection?.querySelector<HTMLElement>('th[data-index="name"]')
        await expect(footerNameCell).toHaveTextContent('Foot Cell Slot: 2 users')
        await expect(footerNameCell).not.toHaveAttribute('scope')
      `
    },
    {
      id: 'TableSort',
      name: {
        en: 'Sorting',
        ru: 'Сортировка'
      },
      template: `
        <DesignComponent
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
      `,
      play: `
        const ageHeader = canvasElement.querySelector<HTMLElement>('thead th[data-index="age"]')
        const nameHeader = canvasElement.querySelector<HTMLElement>('thead th[data-index="name"]')
        const getFirstRowName = () => canvasElement.querySelector<HTMLElement>('tbody tr td[data-index="name"]')?.textContent?.trim()

        // Initial sort="age" sortDir="desc" synchronizes aria-sort and row order
        await expect(ageHeader).toHaveAttribute('aria-sort', 'descending')
        await expect(nameHeader).not.toHaveAttribute('aria-sort')
        await expect(getFirstRowName()).toBe('Charlie Brown')

        const ageSortButton = ageHeader?.querySelector<HTMLElement>('[role="button"], button')
        const nameSortButton = nameHeader?.querySelector<HTMLElement>('[role="button"], button')
        await expect(ageSortButton).toBeInTheDocument()
        await expect(nameSortButton).toBeInTheDocument()

        await step('Clicking active descending Age sort resets sorting to original order', async () => {
          await userEvent.click(ageSortButton as HTMLElement)
          await expect(ageHeader).not.toHaveAttribute('aria-sort')
          await expect(getFirstRowName()).toBe('Alice Smith')
        })

        await step('First click on Name sorts ascending', async () => {
          await userEvent.click(nameSortButton as HTMLElement)
          await expect(nameHeader).toHaveAttribute('aria-sort', 'ascending')
          await expect(getFirstRowName()).toBe('Alice Smith')
        })

        await step('Second click on Name sorts descending', async () => {
          await userEvent.click(nameSortButton as HTMLElement)
          await expect(nameHeader).toHaveAttribute('aria-sort', 'descending')
          await expect(getFirstRowName()).toBe('Edward Norton')
        })

        await step('Third click on Name resets sorting', async () => {
          await userEvent.click(nameSortButton as HTMLElement)
          await expect(nameHeader).not.toHaveAttribute('aria-sort')
          await expect(getFirstRowName()).toBe('Alice Smith')
        })
      `
    },
    {
      id: 'TableSearch',
      name: {
        en: 'Search',
        ru: 'Поиск'
      },
      setup: `
      return {
        searchValue: ref('an')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <input class="wiki-storybook-input" type="text" v-model="searchValue" placeholder="Search name or role..."/>
          </div>
          <DesignComponent
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
          </DesignComponent>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const searchInput = canvas.getByPlaceholderText('Search name or role...')

        await waitFor(() => {
          const initialRows = canvasElement.querySelectorAll('tbody.design-component__items tr')
          expect(initialRows.length).toBeGreaterThan(0)
          expect(initialRows.length).toBeLessThan(12)
        })

        await step('Filter rows down to a single match by role', async () => {
          await userEvent.clear(searchInput)
          await userEvent.type(searchInput, 'Director')

          await waitFor(() => {
            const filteredRows = canvasElement.querySelectorAll('tbody.design-component__items tr')
            expect(filteredRows.length).toBe(1)
            expect(filteredRows[0]).toHaveTextContent('Liam Neeson')
          })
        })

        await step('Clearing search restores all rows', async () => {
          await userEvent.clear(searchInput)

          await waitFor(() => {
            const restoredRows = canvasElement.querySelectorAll('tbody.design-component__items tr')
            expect(restoredRows.length).toBe(12)
          })
        })
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — NEVER add to documentation)
    // =========================================================================
    {
      id: 'TableTestCaptionColgroupAndFoot',
      name: {
        en: 'Test: Caption modes, bleed, colgroup widths, inferred columns and footer slots',
        ru: 'Тест: Режимы подписи, bleed, ширины colgroup, автоопределение колонок и слоты подвала'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div data-testid="table-caption-bottom-wrapper">
            <DesignComponent
              caption="Quarterly Revenue"
              :captionBottom="true"
              :bleed="true"
              :stickyScrollBottom="false"
              :columnsWidth="{ quarter: 120, revenue: '45%' }"
              :header="{ quarter: 'Quarter', revenue: 'Revenue' }"
              :foot="[
                { quarter: 'Subtotal', revenue: '$180k' },
                { quarter: 'Total', revenue: '$200k' }
              ]"
              :list="[
                { quarter: 'Q1', revenue: '$90k' },
                { quarter: 'Q2', revenue: '$90k' }
              ]"
            >
              <template #foot-revenue="{ value }">
                <strong data-testid="foot-revenue-slot">{{ value }}</strong>
              </template>
              <template #foot-default="{ value }">
                <span data-testid="foot-default-slot">{{ value }}</span>
              </template>
            </DesignComponent>
          </div>

          <div data-testid="table-caption-decorative-wrapper">
            <DesignComponent
              caption="Decorative caption"
              :captionDecorative="true"
              :stickyScrollBottom="false"
              :columns="['item']"
              :header="{ item: 'Item' }"
              :list="[{ item: 'Sample' }]"
            />
          </div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)

        // 1. Caption bottom, bleed, stickyScrollBottom: false, colgroup widths, inferred columns, multi-row foot
        const firstWrapper = canvas.getByTestId('table-caption-bottom-wrapper')
        const firstRoot = firstWrapper.querySelector<HTMLElement>('.design-component')
        await expect(firstRoot).toBeInTheDocument()
        await expect(firstRoot?.tagName).toBe('DIV')
        await expect(firstRoot).toHaveClass('design-component--captionBottom')
        await expect(firstRoot).toHaveClass('design-component--bleed')

        const firstCaption = firstWrapper.querySelector<HTMLElement>('caption.design-component__caption')
        await expect(firstCaption).toHaveTextContent('Quarterly Revenue')
        await expect(firstCaption).toHaveAttribute('aria-live', 'polite')
        await expect(firstCaption).toHaveAttribute('aria-atomic', 'true')
        await expect(firstCaption).not.toHaveAttribute('aria-hidden')

        const quarterColumn = firstWrapper.querySelector<HTMLElement>('col[data-col="quarter"]')
        const revenueColumn = firstWrapper.querySelector<HTMLElement>('col[data-col="revenue"]')
        await expect(quarterColumn?.style.width).toBe('120px')
        await expect(revenueColumn?.style.width).toBe('45%')

        const footerRows = firstWrapper.querySelectorAll<HTMLElement>('tfoot.design-component__foot tr')
        await expect(footerRows.length).toBe(2)
        const footerHeaderCells = firstWrapper.querySelectorAll<HTMLElement>('tfoot.design-component__foot th')
        footerHeaderCells.forEach((footerHeaderCell) => {
          expect(footerHeaderCell).not.toHaveAttribute('scope')
        })
        await expect(firstWrapper.querySelectorAll('[data-testid="foot-revenue-slot"]').length).toBe(2)
        await expect(firstWrapper.querySelectorAll('[data-testid="foot-default-slot"]').length).toBe(2)

        // 2. Decorative caption sets aria-hidden="true" without aria-live
        const secondWrapper = canvas.getByTestId('table-caption-decorative-wrapper')
        const decorativeCaption = secondWrapper.querySelector<HTMLElement>('caption.design-component__caption')
        await expect(decorativeCaption).toHaveTextContent('Decorative caption')
        await expect(decorativeCaption).toHaveAttribute('aria-hidden', 'true')
        await expect(decorativeCaption).not.toHaveAttribute('aria-live')
      `
    },
    {
      id: 'TableTestPaginationAndSortOptions',
      name: {
        en: 'Test: Pagination, custom sortFunction, multi-column sort and @sort emit',
        ru: 'Тест: Пагинация, кастомная sortFunction, мультисортировка и событие @sort'
      },
      setup: `
      const currentPage = ref<number>(1)
      const lastSortEvent = ref<string>('none')
      const onSort = (item: SortColumnItem) => {
        lastSortEvent.value = (item.column || 'none') + ':' + (item.dir || 'none')
      }
      const sortByPriority = (
        firstItem: Record<string, unknown>,
        secondItem: Record<string, unknown>
      ): number => {
        return Number(firstItem.priority ?? 0) - Number(secondItem.priority ?? 0)
      }
      return {
        currentPage,
        lastSortEvent,
        onSort,
        sortByPriority
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="currentPage = 1">Page 1</button>
            <button class="wiki-storybook-button" @click="currentPage = 2">Page 2</button>
            <button class="wiki-storybook-button" @click="currentPage = 5">Page 5 (Capped)</button>
            <span data-testid="table-sort-emitted">{{ lastSortEvent }}</span>
          </div>

          <div data-testid="table-pagination-wrapper">
            <DesignComponent
              :columns="['id', 'name']"
              :header="{ id: 'ID', name: { label: 'Name', showSort: true } }"
              :page="currentPage"
              :rows="2"
              :list="[
                { id: '1', name: 'Row One' },
                { id: '2', name: 'Row Two' },
                { id: '3', name: 'Row Three' },
                { id: '4', name: 'Row Four' },
                { id: '5', name: 'Row Five' }
              ]"
              @sort="onSort"
            />
          </div>

          <div data-testid="table-custom-sort-wrapper">
            <DesignComponent
              :columns="['name', 'priority']"
              :header="{ name: 'Task', priority: 'Priority' }"
              sort="priority"
              :sortFunction="sortByPriority"
              :list="[
                { name: 'Low', priority: 30 },
                { name: 'High', priority: 10 },
                { name: 'Medium', priority: 20 }
              ]"
            />
          </div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const paginationWrapper = canvas.getByTestId('table-pagination-wrapper')

        const getVisibleNames = () => Array.from(
          paginationWrapper.querySelectorAll<HTMLElement>('tbody tr td[data-index="name"]')
        ).map(cell => cell.textContent?.trim())

        await expect(getVisibleNames()).toEqual(['Row One', 'Row Two'])

        await step('Switch to Page 2 slices rows 3 and 4', async () => {
          await userEvent.click(canvas.getByRole('button', { name: 'Page 2' }))
          await expect(getVisibleNames()).toEqual(['Row Three', 'Row Four'])
        })

        await step('Out-of-range page caps at last available page (row 5)', async () => {
          await userEvent.click(canvas.getByRole('button', { name: 'Page 5 (Capped)' }))
          await expect(getVisibleNames()).toEqual(['Row Five'])
        })

        await step('Clicking sortable column header emits @sort payload', async () => {
          const nameSortButton = paginationWrapper.querySelector<HTMLElement>('thead th[data-index="name"] [role="button"], thead th[data-index="name"] button')
          await expect(nameSortButton).toBeInTheDocument()
          await userEvent.click(nameSortButton as HTMLElement)
          await expect(canvas.getByTestId('table-sort-emitted')).toHaveTextContent('name:asc')
        })

        // Custom sortFunction ordering
        const customSortWrapper = canvas.getByTestId('table-custom-sort-wrapper')
        const sortedTasks = Array.from(
          customSortWrapper.querySelectorAll<HTMLElement>('tbody tr td[data-index="name"]')
        ).map(cell => cell.textContent?.trim())
        await expect(sortedTasks).toEqual(['High', 'Medium', 'Low'])
      `
    },
    {
      id: 'TableTestSelectionAttrsDefaultSlotsAndSkeleton',
      name: {
        en: 'Test: Selection, disabled rows, stickyTop, attrs, default slots and skeleton',
        ru: 'Тест: Выделение, отключенные строки, stickyTop, атрибуты, слоты по умолчанию и скелетон'
      },
      components: ['Skeleton'],
      template: `
        <div class="wiki-storybook-flex-column">
          <div data-testid="table-selection-wrapper">
            <DesignComponent
              :columns="['id', 'name']"
              :header="{ id: 'ID', name: 'Name' }"
              keyValue="id"
              :selected="['2']"
              :stickyTop="['1']"
              :lazy="false"
              :defaultHeight="44"
              :tableRecordAttrs="{ 'data-record-shared': 'yes' }"
              :tableRowAttrs="{ '2': { 'data-row-target': 'selected-row' } }"
              :tableItemAttrs="{ 'data-cell-shared': 'yes' }"
              :list="[
                { id: '1', name: 'Pinned Row' },
                { id: '2', name: 'Selected Row' },
                { id: '3', name: 'Disabled Row', disabled: true }
              ]"
            >
              <template #header-default="{ value }">
                <span data-testid="table-header-default-slot">H: {{ value }}</span>
              </template>
              <template #default="{ value }">
                <span data-testid="table-cell-default-slot">C: {{ value }}</span>
              </template>
            </DesignComponent>
          </div>

          <div data-testid="table-skeleton-wrapper">
            <DesignSkeleton :active="true">
              <DesignComponent
                :isSkeleton="true"
                :columns="['id', 'name']"
                :header="{ id: 'ID', name: 'Name' }"
                :list="[
                  { id: '1', name: 'Loading A' },
                  { id: '2', name: 'Loading B' }
                ]"
              />
            </DesignSkeleton>
          </div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const selectionWrapper = canvas.getByTestId('table-selection-wrapper')

        const firstRow = selectionWrapper.querySelector<HTMLElement>('tbody tr[data-key="1"]')
        const secondRow = selectionWrapper.querySelector<HTMLElement>('tbody tr[data-key="2"]')
        const thirdRow = selectionWrapper.querySelector<HTMLElement>('tbody tr[data-key="3"]')

        await expect(firstRow).toHaveAttribute('data-record-shared', 'yes')
        await expect(firstRow?.querySelector<HTMLElement>('td[data-index="id"]')?.className).toContain('--stickyTop')
        await expect(firstRow?.querySelector<HTMLElement>('td[data-index="id"]')).toHaveAttribute('data-cell-shared', 'yes')

        await expect(secondRow).toHaveAttribute('aria-selected', 'true')
        await expect(secondRow).toHaveAttribute('data-row-target', 'selected-row')
        await expect(secondRow).toHaveAttribute('data-record-shared', 'yes')

        await expect(thirdRow).toHaveAttribute('aria-disabled', 'true')

        await expect(selectionWrapper.querySelectorAll('[data-testid="table-header-default-slot"]').length).toBe(2)
        await expect(selectionWrapper.querySelectorAll('[data-testid="table-cell-default-slot"]').length).toBe(6)

        const skeletonWrapper = canvas.getByTestId('table-skeleton-wrapper')
        const skeletonElements = skeletonWrapper.querySelectorAll('[class*="skeleton__textVariant"]')
        await expect(skeletonElements.length).toBeGreaterThanOrEqual(4)
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Table'} type={'table'}/>
<Canvas of={Component.TableBasic}/>
<StorybookDescriptions componentName={'TableFlex'} type={'differences'}/>
<StorybookDescriptions componentName={'Table'} type={'headerTop'}/>
<StorybookDescriptions componentName={'Table'} type={'stickyScrollBottom'}/>
<StorybookDescriptions componentName={'Table'} type={'sort'}/>
<Canvas of={Component.TableSort}/>
<StorybookDescriptions componentName={'Table'} type={'search'}/>
<Canvas of={Component.TableSearch}/>
    `,
    slots: `
<Canvas of={Component.TableSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
<StorybookDescriptions componentName={'Table'} type={'slots'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'sort'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Table v-bind="args" />
</div>
    `,
    description: `
Flexible, modular and grid-like table component. Manages a columns array (or infers columns from header) to render semantic table rows with colgroup widths, accessible caption, multi-row headers, footer rows (isFoot), local search, 3-state sorting, pagination, row selection, sticky headers/columns, and skeleton states.
Accepts section and per-column slots (#caption, #body, #header, #items, #foot, #header-<col>, #foot-<col>, #<col>, and default fallbacks). Controlled via columns, columnsWidth, header, foot, list, search, sort, page, rows, selected, and attribute mapping props.
`
  }
}
