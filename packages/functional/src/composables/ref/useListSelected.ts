import { computed, ref } from 'vue'

import type { ListDataBasic } from '../../types/listTypes'
import type { RefType } from '../../types/refTypes'

export const useListSelected = (
  list: RefType<ListDataBasic[]>,
  selected?: string
) => {
  const index = ref<string>(selected || list.value?.[0]?.value || '')
  const item = computed(
    () => list.value.find(item => item.value === index.value)
  )

  return {
    selected: index,
    item,
    list
  }
}
