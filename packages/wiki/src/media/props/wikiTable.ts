import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiTable object contains properties for the Table component
 *
 * Объект wikiTable содержит свойства для компонента Table
 */
export const wikiTable: StorybookArgsToList = {
  'table.columns': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.value,
      type: 'string[]',
      description: {
        en: 'Column index names',
        ru: 'Имена индексов колонок'
      },
      value: [
        'id',
        'name',
        'email',
        'role',
        'department',
        'status',
        'phone',
        'city'
      ]
    },
    hide: true
  },
  'table.header': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Table header data',
        ru: 'Данные шапки таблицы'
      },
      value: {
        id: 'ID',
        name: 'Name',
        email: 'Email',
        role: 'Role',
        department: 'Department',
        status: 'Status',
        phone: 'Phone',
        city: 'City'
      }
    },
    hide: true
  },
  'table.headerTop': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sticky positioning of the table header at the top',
        ru: 'Липкое позиционирование шапки таблицы сверху'
      }
    }
  },
  'table.scrollBottomSticky': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enable bottom sticky scrollbar',
        ru: 'Включить прилипающий нижний скроллбар'
      }
    }
  },
  'table.list': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'List of row records',
        ru: 'Список записей строк'
      },
      value: [
        { id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'Developer', department: 'IT', status: 'Active', phone: '+1 555-0101', city: 'New York' },
        { id: '2', name: 'Bob Johnson', email: 'bob@example.com', role: 'Designer', department: 'Design', status: 'Pending', phone: '+1 555-0102', city: 'London' },
        { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Manager', department: 'Management', status: 'Inactive', phone: '+1 555-0103', city: 'Paris' },
        { id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'Analyst', department: 'Analytics', status: 'Active', phone: '+1 555-0104', city: 'Berlin' },
        { id: '5', name: 'Edward Norton', email: 'edward@example.com', role: 'Tester', department: 'QA', status: 'Pending', phone: '+1 555-0105', city: 'Tokyo' },
        { id: '6', name: 'Fiona Gallagher', email: 'fiona@example.com', role: 'DevOps', department: 'Infrastructure', status: 'Active', phone: '+1 555-0106', city: 'Sydney' },
        { id: '7', name: 'George Clark', email: 'george@example.com', role: 'Architect', department: 'IT', status: 'Inactive', phone: '+1 555-0107', city: 'Toronto' },
        { id: '8', name: 'Hannah Abbott', email: 'hannah@example.com', role: 'Support', department: 'Support', status: 'Active', phone: '+1 555-0108', city: 'Singapore' },
        { id: '9', name: 'Ian Wright', email: 'ian@example.com', role: 'Developer', department: 'IT', status: 'Pending', phone: '+1 555-0109', city: 'New York' },
        { id: '10', name: 'Julia Roberts', email: 'julia@example.com', role: 'Designer', department: 'Design', status: 'Active', phone: '+1 555-0110', city: 'London' },
        { id: '11', name: 'Kevin Bacon', email: 'kevin@example.com', role: 'Manager', department: 'Management', status: 'Inactive', phone: '+1 555-0111', city: 'Paris' },
        { id: '12', name: 'Laura Croft', email: 'laura@example.com', role: 'Analyst', department: 'Analytics', status: 'Active', phone: '+1 555-0112', city: 'Berlin' }
      ]
    },
    hide: true
  }
}
