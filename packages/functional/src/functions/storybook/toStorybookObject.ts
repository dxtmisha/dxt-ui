import { type StorybookArgsItem, StorybookCategory, StorybookControl } from '../../types/storybookTypes'

/**
 * Function to create a Storybook args object with object type.
 * Функция для создания объекта аргументов Storybook с типом object.
 * @param category - Category for the Storybook table/ Категория для таблицы Storybook
 * @param type - Type summary (default: 'object')/ Тип (по умолчанию: 'object')
 * @param description - Description for the argument/ Описание для аргумента
 * @return Storybook args object with object type/ Объект аргументов Storybook с типом object
 */
export const toStorybookObject = (
  category: StorybookCategory,
  type: string = StorybookControl.object | StorybookControl.array,
  description?: string
): StorybookArgsItem => ({
  control: StorybookControl.object,
  table: {
    category,
    type: { summary: type }
  },
  description
})
