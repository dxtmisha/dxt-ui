import { type StorybookArgsItem, StorybookCategory, StorybookControl } from '../../types/storybookTypes'

/**
 * Function to create a Storybook args object with number type.
 *
 * Функция для создания объекта аргументов Storybook с типом number.
 * @param category - Category for the Storybook table/ Категория для таблицы Storybook
 * @param defaultValue - Default value (as string)/ Значение по умолчанию (строкой)
 * @param description - Description for the argument/ Описание для аргумента
 * @param min - Minimum value/ Минимальное значение
 * @param max - Maximum value/ Максимальное значение
 * @return Storybook args object with number type/ Объект аргументов Storybook с типом number
 */
export const toStorybookNumber = (
  category: StorybookCategory,
  defaultValue?: string,
  description?: string,
  min?: number,
  max?: number
): StorybookArgsItem => {
  const control: StorybookArgsItem['control'] = { type: StorybookControl.number }
  const table: StorybookArgsItem['table'] = {
    category,
    type: { summary: StorybookControl.number }
  }

  if (defaultValue) {
    table.defaultValue = { summary: defaultValue }
  }

  if (min) {
    control.min = min
  }

  if (max) {
    control.min = max
  }

  return {
    control,
    table,
    description
  }
}
