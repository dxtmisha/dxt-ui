import type { ComputedRef } from 'vue'
import type { ConstrBind, ListList, ListNames } from '@dxt-ui/functional'
import type { WindowControlItem } from '../Window'
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

/** Type for menu expose functionality/ Тип для функциональности экспорта меню */
export interface MenuExposeInclude {
  open: ComputedRef<boolean>
  setOpen(open: boolean): Promise<void>
  toggle(): Promise<void>
}

/** Interface for menu include props/ Интерфейс для свойств включения меню */
export interface MenuPropsInclude {
  disabled?: boolean
  menuAttrs?: ConstrBind<MenuProps>
}
