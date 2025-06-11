import { forEach } from '../forEach'
import { toStorybookItem } from './toStorybookItem'

import type { StorybookArgsToList } from '../../types/storybookTypes'

/**
 * Converts a list of Storybook arguments to a list of StorybookItem.
 *
 * Преобразует список аргументов Storybook в список StorybookItem.
 * @param list - List of Storybook arguments / Список аргументов Storybook
 */
export const toStorybookList = (list: StorybookArgsToList) => {
  forEach(
    list,
    item => toStorybookItem(
      item.type,
      item.options
    )
  )
}
