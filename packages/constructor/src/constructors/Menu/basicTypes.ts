import type { ComputedRef, Ref } from 'vue'
import type { ConstrBind, NumberOrStringOrBoolean } from '@dxtmisha/functional'
import type { WindowControlItem } from '../Window'

import type { ListExpose } from '../List'
import type { MenuExpose } from './types'
import type { MenuPropsBasic } from './props'

/** Basic control for the menu/ Базовое управление для меню */
export type MenuControlBasic
  = ListExpose
    & {
      /** Current loading state/ Текущее состояние загрузки */
      loading: Ref<boolean>

      /** Switches to the previous item/ Переключает на предыдущий элемент */
      previous(): NumberOrStringOrBoolean | undefined
      /** Switches to the next item/ Переключает на следующий элемент */
      next(): NumberOrStringOrBoolean | undefined
    }

/** Menu control item combining basic menu and window controls/ Элемент управления меню, сочетающий базовые элементы управления меню и окна */
export type MenuControlItem
  = MenuControlBasic
    & WindowControlItem

/** Interface for describing which components need to be connected for Menu work/ Интерфейс для описания, какие компоненты надо подключить для работы Menu */
export type MenuComponentInclude = {
  /** Menu component configuration/ Конфигурация компонента меню */
  menu?: object
}

/** Type for menu expose functionality/ Тип для функциональности экспорта меню */
export interface MenuExposeInclude {
  /** Whether the menu is currently open/ Открыто ли меню в данный момент */
  open: ComputedRef<boolean>

  /** Sets the open state of the menu/ Устанавливает состояние открытия меню */
  setOpen(open: boolean): Promise<void>

  /** Opens the menu/ Открывает меню */
  toOpen: MenuExpose['toOpen']
  /** Closes the menu/ Закрывает меню */
  toClose: MenuExpose['toClose']

  /** Toggles the menu open state/ Переключает состояние открытия меню */
  toggle(): Promise<void>

  /** Reference to the menu element/ Ссылка на элемент меню */
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
export type MenuPropsInclude<Menu extends MenuPropsBasic = MenuPropsBasic> = {
  /** Whether the menu is disabled/ Отключено ли меню */
  disabled?: boolean
  /** Additional attributes for the Menu component/ Дополнительные атрибуты для компонента меню */
  menuAttrs?: ConstrBind<Menu>
}
