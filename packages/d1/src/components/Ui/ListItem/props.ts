import { type ListItemPropsBasic, defaultsListItem } from '@dxt-ui/constructor/ListItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  iconAlign: ['center', 'edge'],
  fill: [],
  size: ['sm', 'md', 'lg'],
  palette: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  focus?: boolean
  open?: boolean
  selected?: boolean
  readonly?: boolean
  disabled?: boolean
  iconTop?: boolean
  iconAlign?: 'center' | 'edge'
  fill?: string | 'custom'
  divider?: boolean
  size?: 'sm' | 'md' | 'lg'
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface ListItemProps extends ListItemPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsListItem,
  ...{
    // :default [!] System label / Системная метка
    iconAlign: 'edge',
    size: 'md'
    // :default [!] System label / Системная метка
  }
}
