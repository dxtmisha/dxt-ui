import type { ConstrBind } from '@dxt-ui/functional'
import type { ListProps } from '../List'
import type { ListItemPropsBasic } from '../ListItem'

interface ListGroupPropsToken {
  // :type [!] System label / Системная метка
  divider?: boolean
  // :type [!] System label / Системная метка
}

export interface ListGroupPropsBasic<
  ListItem extends ListItemPropsBasic = ListItemPropsBasic
> extends ListProps {
  // Value
  head?: ConstrBind<ListItem>
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ListGroupProps extends ListGroupPropsBasic, ListGroupPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsListGroup = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
