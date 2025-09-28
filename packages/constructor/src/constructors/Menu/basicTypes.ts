import type { ComputedRef, Ref } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'
import type { WindowControlItem } from '../Window'

import type { ListExpose } from '../List'
import type { MenuExpose } from './types'
import type { MenuProps } from './props'

export type MenuControlBasic
  = ListExpose
    & {
      loading: Ref<boolean>
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
