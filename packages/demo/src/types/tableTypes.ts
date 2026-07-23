/**
 * Interface describing a table data item for demo purposes.
 *
 * Интерфейс, описывающий запись данных таблицы для демонстрации.
 */
export interface TableDataItem {
  id: number
  name: string
  status: string
  role: string
  email: string
  age: number
  country: string
  city: string
  salary: string
}

/**
 * Type alias for an array of table data items.
 *
 * Псевдоним типа для массива записей данных таблицы.
 */
export type TableDataList = TableDataItem[]
