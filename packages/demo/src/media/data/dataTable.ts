import type { TableItemProps } from '@dxtmisha/constructor/TableItem'

/**
 * List of column keys for demo table.
 *
 * Список ключей колонок для демонстрационной таблицы.
 */
export const dataTableColumns: string[] = [
  'id',
  'name',
  'status',
  'role',
  'email',
  'age',
  'country',
  'city',
  'salary'
]

/**
 * Multi-row header configuration for demo table.
 *
 * Конфигурация многострочного заголовка для демонстрационной таблицы.
 */
export const dataTableHeaderMulti: Array<Record<string, any>> = [
  {
    id: {
      label: 'ID',
      rowspan: 2,
      description: 'Index',
      tooltipLabel: 'Identifier',
      tooltipDescription: 'Unique number of the record.'
    },
    name: {
      label: 'Main info',
      colspan: 2,
      align: 'center',
      tooltipLabel: 'General info',
      tooltipDescription: 'Full name and active status.'
    },
    status: '*none',
    role: {
      label: 'Work',
      colspan: 3,
      align: 'center',
      tooltipLabel: 'Employment details',
      tooltipDescription: 'Job title, contact email, and age.'
    },
    email: '*none',
    age: '*none',
    country: {
      label: 'Address & Compensation',
      colspan: 3,
      align: 'center',
      tooltipLabel: 'Location & Compensation',
      tooltipDescription: 'Location details and current salary.'
    },
    city: '*none',
    salary: '*none'
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
]

/**
 * Simple single-row header configuration for demo table.
 *
 * Конфигурация простого однострочного заголовка для демонстрационной таблицы.
 */
export const dataTableHeaderSimple: Array<Record<string, any>> = [
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
]

/**
 * Column item attributes (such as alignment) for demo table.
 *
 * Атрибуты элементов колонок (такие как выравнивание) для демонстрационной таблицы.
 */
export const dataTableItemColumnAttrs: Record<string, TableItemProps> = {
  id: { align: 'right' },
  age: { align: 'right' },
  salary: { align: 'right' }
}
