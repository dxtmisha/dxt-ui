import { type StorybookArgsItem, StorybookCategory, StorybookControl } from '../../types/storybookTypes'

/**
 * Function to create a Storybook args object with select type.
 *
 * Функция для создания объекта аргументов Storybook с типом select.
 * @param category - Category for the Storybook table/ Категория для таблицы Storybook
 * @param options - Options for select (array or object)/ Опции для select (массив или объект)
 * @param type - Type summary (string or array)/ Тип (строка или массив)
 * @param defaultValue - Default value/ Значение по умолчанию
 * @param description - Description for the argument/ Описание для аргумента
 * @return Storybook args object with select type/ Объект аргументов Storybook с типом select
 */
export const toStorybookSelect = (
  category: StorybookCategory,
  options?: string[] | Record<string, string>,
  type?: string | string[],
  defaultValue?: string,
  description?: string
): StorybookArgsItem => {
  const table: StorybookArgsItem['table'] = { category }

  if (defaultValue) {
    table.defaultValue = { summary: defaultValue }
  }

  if (type) {
    table.type = { summary: Array.isArray(type) ? type.join(' | ') : type }
  } else if (Array.isArray(options)) {
    table.type = { summary: options.join(' | ') }
  } else if (typeof options === 'object') {
    table.type = { summary: Object.keys(options).join(' | ') }
  }

  return {
    control: StorybookControl.select,
    options,
    table,
    description
  }
}
