import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableFlex component properties
 *
 * Описания свойств компонента TableFlex
 */
export const wikiDescriptionsTableFlex: StorybookComponentsDescriptionItem = {
  name: 'TableFlex',
  description: {
    en: 'Flexbox-based table component orchestrating grid-like column indexes and list row records',
    ru: 'Компонент флекс-таблицы, координирующий сеточные индексы колонок и список строк данных'
  },
  possibilities: {
    en: [
      'structured representation of datasets in flexbox tabular form',
      'supports headers rendering via header property',
      'supports footer rows rendering via foot property',
      'table caption support with caption property and bottom positioning via captionBottom',
      'row-level selections and key extraction configuration',
      'sticky headers configuration with headerTop flag',
      'sticky bottom horizontal scrollbar via stickyScrollBottom',
      'built-in local search and filtering via search and searchColumns properties',
      'custom slot support for header, body, items, foot, caption, and column cells'
    ],
    ru: [
      'структурированное представление наборов данных в виде флекс-таблицы',
      'поддержка рендеринга шапки через свойство header',
      'поддержка рендеринга подвала через свойство foot',
      'поддержка подписи таблицы через свойство caption и позиционирования снизу через captionBottom',
      'выбор на уровне строк и настройка извлечения ключей',
      'настройка липкой шапки с помощью флага headerTop',
      'прилипающий нижний горизонтальный скроллбар через stickyScrollBottom',
      'встроенный локальный поиск и фильтрация с помощью свойств search и searchColumns',
      'поддержка кастомных слотов для шапки (header), тела (body), элементов (items), подвала (foot), подписи (caption) и ячеек колонок'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'TableFlexBasic',
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
    },
    {
      id: 'TableFlexSlots',
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
            <div style="padding: 8px;">
              Body Slot (custom flex table body content)
            </div>
          </template>
          <template #header="{ columns }">
            <div>
              Header Slot (custom header row)
            </div>
          </template>
          <template #header-name="{ value }">
            Header Cell Slot: {{ value }}
          </template>
          <template #name="{ value }">
            Cell Slot: {{ value }}
          </template>
          <template #items="{ columns }">
            <div>
              Items Slot (inside body)
            </div>
          </template>
          <template #foot="{ columns }">
            <div style="padding: 8px;">
              Foot Slot (custom footer row)
            </div>
          </template>
          <template #foot-name="{ value }">
            Foot Cell Slot: {{ value }}
          </template>
        </DesignComponent>
      `
    },
    {
      id: 'TableFlexSort',
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
      `
    },
    {
      id: 'TableFlexSearch',
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
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableFlex'} type={'tableFlex'}/>
<Canvas of={Component.TableFlexBasic}/>
<StorybookDescriptions componentName={'TableFlex'} type={'differences'}/>
<StorybookDescriptions componentName={'Table'} type={'headerTop'}/>
<StorybookDescriptions componentName={'Table'} type={'stickyScrollBottom'}/>
<StorybookDescriptions componentName={'Table'} type={'sort'}/>
<Canvas of={Component.TableFlexSort}/>
<StorybookDescriptions componentName={'Table'} type={'search'}/>
<Canvas of={Component.TableFlexSearch}/>
    `,
    slots: `
<Canvas of={Component.TableFlexSlots}/>
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
  <TableFlex v-bind="args" />
</div>
    `,
    description: `
Flexible, modular flexbox table component. Manages a columns array to render flex table rows, supporting custom header, lists, selection states, custom key extraction fields, and sticky headers.
Accepts body slots for complete layout customization. Controlled via columns, header (headers data), list (dataset array), and key/attributes mapping configurations.
`,
    hide: true
  }
}
