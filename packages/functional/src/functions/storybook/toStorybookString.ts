import { type StorybookArgsItem, StorybookCategory, StorybookControl } from '../../types/storybookTypes'

/**
 * Function to create a Storybook args object with string type
 *
 * Функция для создания объекта аргументов Storybook с типом string
 * @param category - Category for the Storybook table / Категория для таблицы Storybook
 * @param defaultValue - Default value / Значение по умолчанию
 * @param description - Description for the argument / Описание для аргумента
 * @param type - Type summary (default: 'string') / Тип (по умолчанию: 'string')
 * @return Storybook args object with string type / Объект аргументов Storybook с типом string
 */
export const toStorybookString = (
  category: StorybookCategory,
  defaultValue?: string,
  description?: string,
  type: StorybookControl = StorybookControl.string
): StorybookArgsItem => {
  const table: StorybookArgsItem['table'] = {
    category,
    type: { summary: type }
  }

  if (defaultValue) {
    table.defaultValue = { summary: defaultValue }
  }

  return {
    control: StorybookControl.text,
    table,
    description
  }
}
