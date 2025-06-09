import { type StorybookArgsItem, StorybookCategory, StorybookControl } from '../../types/storybookTypes'

/**
 * Function to create a Storybook args object with boolean type.
 *
 * Функция для создания объекта аргументов Storybook с типом boolean.
 * @param category - Category for the Storybook table / Категория для таблицы Storybook
 * @param defaultValue - Default value (true or false) / Значение по умолчанию (true или false)
 * @param description - Description for the argument / Описание для аргумента
 * @return Storybook args object with boolean type / Объект аргументов Storybook с типом boolean
 */
export const toStorybookBoolean = (
  category: StorybookCategory,
  defaultValue: boolean,
  description?: string
): StorybookArgsItem => ({
  control: StorybookControl.boolean,
  table: {
    category,
    defaultValue: {
      summary: defaultValue ? 'true' : 'false'
    },
    type: {
      summary: StorybookControl.boolean
    }
  },
  description
})
