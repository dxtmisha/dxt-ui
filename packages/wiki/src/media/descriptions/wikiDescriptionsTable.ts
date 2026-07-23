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
      'structured representation of datasets in tabular form',
      'supports headers rendering via header property',
      'row-level selections and key extraction configuration',
      'sticky headers configuration with headerTop flag',
      'sticky bottom horizontal scrollbar via scrollBottomSticky',
      'custom slot support for advanced table body styling'
    ],
    ru: [
      'структурированное представление наборов данных в табличном виде',
      'поддержка рендеринга шапки через свойство header',
      'выбор на уровне строк и настройка извлечения ключей',
      'настройка липкой шапки с помощью флага headerTop',
      'прилипающий нижний горизонтальный скроллбар через scrollBottomSticky',
      'поддержка кастомных слотов для расширенного оформления тела таблицы'
    ]
  },
  import: [],
  render: `
    <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--padding" style="max-height: 360px;">
      <DesignComponent v-bind="args" />
    </div>
  `,
  stories: [
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
            :stickyLeft="['name', 'role']"
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
              { id: '24', name: 'Xena Warrior', status: 'Active', role: 'Support Specialist', email: 'xena.warrior@example.com', age: 30, country: 'Singapore', city: 'Singapore', salary: '$6,500' },
              { id: '25', name: 'Yvonne Strahovski', status: 'Pending', role: 'Developer', email: 'yvonne.strahovski@example.com', age: 31, country: 'USA', city: 'New York', salary: '$9,600' },
              { id: '26', name: 'Zack Morris', status: 'Active', role: 'Designer', email: 'zack.morris@example.com', age: 28, country: 'UK', city: 'London', salary: '$8,400' },
              { id: '27', name: 'Alexander Hamilton', status: 'Inactive', role: 'Manager', email: 'alexander.hamilton@example.com', age: 40, country: 'France', city: 'Paris', salary: '$12,500' },
              { id: '28', name: 'Beatrice Potter', status: 'Active', role: 'Analyst', email: 'beatrice.potter@example.com', age: 33, country: 'Germany', city: 'Berlin', salary: '$9,200' },
              { id: '29', name: 'Christopher Nolan', status: 'Pending', role: 'Tester', email: 'christopher.nolan@example.com', age: 46, country: 'Japan', city: 'Tokyo', salary: '$7,600' },
              { id: '30', name: 'Deborah Morgan', status: 'Active', role: 'DevOps Engineer', email: 'deborah.morgan@example.com', age: 34, country: 'Australia', city: 'Sydney', salary: '$10,800' },
              { id: '31', name: 'Ethan Hunt', status: 'Inactive', role: 'Architect', email: 'ethan.hunt@example.com', age: 39, country: 'Canada', city: 'Toronto', salary: '$13,800' },
              { id: '32', name: 'Grace Hopper', status: 'Active', role: 'Support Specialist', email: 'grace.hopper@example.com', age: 44, country: 'Singapore', city: 'Singapore', salary: '$6,800' }
            ]"
          />
        </div>
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
          :columns="['id', 'name', 'status']"
          :header="[
            { id: 'ID', name: 'Name', status: 'Status' }
          ]"
          :list="[
            { id: '1', name: 'Alice', status: 'Active' },
            { id: '2', name: 'Bob', status: 'Pending' }
          ]"
        >
          <template #header-name="{ value }">
            Slot, header: {{ value }}
          </template>
          <template #name="{ value }">
            Slot: {{ value }}
          </template>
          <template #status="{ value }">
            Slot: {{ value }}
          </template>
          <template #body="{ columns }">
            <tr>
              <td :colspan="columns.length">
                Slot body for {{ columns.length }} columns
              </td>
            </tr>
          </template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Table'} type={'table'}/>
<Canvas of={Component.TableBasic}/>
<StorybookDescriptions componentName={'Table'} type={'headerTop'}/>
<StorybookDescriptions componentName={'Table'} type={'scrollBottomSticky'}/>
    `,
    slots: `
<Canvas of={Component.TableSlots}/>
<StorybookDescriptions componentName={'Table'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Table v-bind="args" />
</div>
    `,
    description: `
Flexible, modular and grid-like table component. Manages a columns array to render table rows, supporting custom header, lists, selection states, custom key extraction fields, and sticky headers.
Accepts body slots for complete layout customization. Controlled via columns, header (headers data), list (dataset array), and key/attributes mapping configurations.
`,
    hide: true
  }
}
