import { toStorybookString } from './toStorybookString'
import { toStorybookNumber } from './toStorybookNumber'
import { toStorybookBoolean } from './toStorybookBoolean'
import { toStorybookSelect } from './toStorybookSelect'
import { toStorybookObject } from './toStorybookObject'

import {
  type StorybookArgsToBoolean,
  type StorybookArgsToNumber,
  type StorybookArgsToObjectOrArray,
  type StorybookArgsToOptionsByType,
  type StorybookArgsToSelect,
  type StorybookArgsToString,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * Function to create a Storybook args item by type
 *
 * Функция для создания элемента аргументов Storybook по типу
 * @param type - Control type for Storybook value / Тип водимого значения для Storybook
 * @param options - Options for the control type / Опции для типа контрола
 * @returns Storybook args item / Элемент аргументов Storybook
 */
export const toStorybookItem = <T extends StorybookControl> (
  type: T,
  options: StorybookArgsToOptionsByType<T>
) => {
  switch (type) {
    case StorybookControl.text:
    case StorybookControl.string:
      return toStorybookString(
        options.category,
        (options as StorybookArgsToString).defaultValue,
        options.description,
        (options as StorybookArgsToString).type
      )
    case StorybookControl.number:
      return toStorybookNumber(
        options.category,
        (options as StorybookArgsToNumber).defaultValue,
        options.description,
        (options as StorybookArgsToNumber).min,
        (options as StorybookArgsToNumber).max
      )
    case StorybookControl.boolean:
      return toStorybookBoolean(
        options.category,
        (options as StorybookArgsToBoolean).defaultValue,
        options.description
      )
    case StorybookControl.select:
      return toStorybookSelect(
        options.category,
        (options as StorybookArgsToSelect).options,
        (options as StorybookArgsToSelect).type,
        (options as StorybookArgsToSelect).defaultValue,
        options.description
      )
    case StorybookControl.object:
    case StorybookControl.array:
      return toStorybookObject(
        options.category,
        (options as StorybookArgsToObjectOrArray).type,
        options.description
      )
  }
}
