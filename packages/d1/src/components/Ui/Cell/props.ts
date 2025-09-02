import { type CellPropsBasic, defaultsCell } from '@dxt-ui/constructor/Cell'
import type { IconProps } from '../Icon'
import type { ProgressProps } from '../Progress'

export const propsValues = {
  // :values [!] System label / Системная метка
  dividerLabel: ['always', 'none', 'adaptiveSm', 'adaptiveMd', 'adaptiveLg', 'adaptiveXl', 'adaptive2xl', 'containerSm', 'containerMd', 'containerLg', 'containerXl', 'container2xl'],
  padding: ['sm', 'md', 'lg', 'ySm', 'yMd', 'yLg', 'none']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  focus?: boolean
  selected?: boolean
  readonly?: boolean
  disabled?: boolean
  dynamic?: boolean
  dynamicHover?: boolean
  divider?: boolean
  dividerLabel?: 'always' | 'none' | 'adaptiveSm' | 'adaptiveMd' | 'adaptiveLg' | 'adaptiveXl' | 'adaptive2xl' | 'containerSm' | 'containerMd' | 'containerLg' | 'containerXl' | 'container2xl'
  iconTop?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface CellProps extends CellPropsBasic<IconProps, ProgressProps>, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsCell,
  ...{
    // :default [!] System label / Системная метка
    divider: true,
    padding: 'yMd'
    // :default [!] System label / Системная метка
  }
}
