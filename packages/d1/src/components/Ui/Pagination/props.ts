import { type PaginationPropsBasic, defaultsPagination } from '@dxtmisha/constructor/Pagination'

import type { IconProps } from '../Icon'
import type { ButtonProps } from '../Button'
import type { MenuProps } from '../Menu'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['lineAlways', 'lineSm', 'lineMd', 'lineLg', 'lineXl', 'line2xl'],
  adaptiveMore: ['lineAlways', 'lineSm', 'lineMd', 'lineLg', 'lineXl', 'line2xl'],
  adaptiveMorePrev: ['lineAlways', 'lineSm', 'lineMd', 'lineLg', 'lineXl', 'line2xl']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  adaptive?: 'lineAlways' | 'lineSm' | 'lineMd' | 'lineLg' | 'lineXl' | 'line2xl'
  adaptiveMore?: 'lineAlways' | 'lineSm' | 'lineMd' | 'lineLg' | 'lineXl' | 'line2xl'
  adaptiveMorePrev?: 'lineAlways' | 'lineSm' | 'lineMd' | 'lineLg' | 'lineXl' | 'line2xl'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type PaginationProps = PaginationPropsBasic<
  IconProps,
  ButtonProps,
  MenuProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsPagination,
  iconArrowDown: 'arrow_drop_down',
  iconArrowFirst: 'first_page',
  iconArrowLast: 'last_page',
  iconArrowLeft: 'chevron_left',
  iconArrowRight: 'chevron_right',
  ...{
    // :default [!] System label / Системная метка
    adaptive: 'lineMd',
    adaptiveMore: 'lineLg',
    adaptiveMorePrev: 'lineLg'
    // :default [!] System label / Системная метка
  }
}
