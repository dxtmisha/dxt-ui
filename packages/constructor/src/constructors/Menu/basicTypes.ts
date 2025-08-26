import type { ComputedRef } from 'vue'
import type { ListList, ListNames } from '@dxt-ui/functional'
import type { WindowControlItem } from '../Window'

export type MenuControlBasic = {
  list: ComputedRef<ListList>

  isSelected: ComputedRef<boolean>
  selectedList: ComputedRef<ListList>
  selectedNames: ComputedRef<ListNames>
  selectedValues: ComputedRef<any[]>
}

export type MenuControlItem
  = MenuControlBasic
    & WindowControlItem
