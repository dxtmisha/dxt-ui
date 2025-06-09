import { forEach } from '../forEach'
import { toStorybookItem } from './toStorybookItem'

import type { StorybookArgsToList } from '../../types/storybookTypes'

export const toStorybookList = (list: StorybookArgsToList) => {
  forEach(
    list,
    item => toStorybookItem(
      item.type,
      item.options
    )
  )
}
