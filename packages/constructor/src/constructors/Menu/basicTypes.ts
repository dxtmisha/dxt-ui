import type { ComputedRef, Ref } from 'vue'
import type { ConstrBind, ListList, ListNames } from '@dxt-ui/functional'
import type { WindowControlItem } from '../Window'

import type { MenuExpose } from './types'
import type { MenuProps } from './props'

export type MenuControlBasic = {
  list: ComputedRef<ListList | undefined>

  isSelected: ComputedRef<boolean>
  selectedList: ComputedRef<ListList>
  selectedNames: ComputedRef<ListNames>
  selectedValues: ComputedRef<any[]>
}

export type MenuControlItem
  = MenuControlBasic
    & WindowControlItem

export type MenuComponentInclude = {
  menu?: object
}

/** Type for menu expose functionality/ Тип для функциональности экспорта меню */
export interface MenuExposeInclude {
  open: ComputedRef<boolean>
  setOpen(open: boolean): Promise<void>
  toOpen: MenuExpose['toOpen']
  toClose: MenuExpose['toClose']
  toggle(): Promise<void>

  menuElement: Ref<ConstrBind<MenuExpose> | undefined>
}

/** Interface for menu include props/ Интерфейс для свойств включения меню */
export interface MenuPropsInclude {
  disabled?: boolean
  menuAttrs?: ConstrBind<MenuProps>
}
