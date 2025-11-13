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

export type MenuSlotInclude = {
  /** Title slot for window title/ Слот заголовка для заголовка окна */
  title?(props: MenuControlItem): any

  /** Footer slot for window bottom/ Слот подвала для низа окна */
  footer?(props: MenuControlItem): any

  /** Context slot for top area / Слот контекстной области сверху */
  contextTop?(props: MenuControlItem): any

  /** Context slot for bottom area / Слот контекстной области снизу */
  contextBottom?(props: MenuControlItem): any
}

/** Interface for menu include props/ Интерфейс для свойств включения меню */
export interface MenuPropsInclude {
  disabled?: boolean
  menuAttrs?: ConstrBind<MenuProps>
}
